import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CONTACT_OFFICES } from "../../../constants/officeGmb";
import { mail, phone, location } from "../../../assets/images";
import { openEmail, openPhone } from "../../../utils/openContactLink";
import formMarkup from "./zoho-form.html?raw";
import "./contact.css";

const FORM_CLEAR_KEY = "zf_lead_form_clear";
const CONTACT_THANKS_KEY = "contact-form-thanks";
// Confirmation shows briefly, then the form clears itself and returns.
const CONTACT_SUCCESS_FLASH_MS = 8000;

function resetContactForm(root) {
  const card = root.querySelector(".leadform-card");
  const done = root.querySelector(".w-form-done");
  const form = root.querySelector("#form");
  if (!card || !done) return;
  card.removeAttribute("data-contact-success");
  done.classList.remove("is-visible");
  if (form) {
    form.hidden = false;
    form.reset(); // custom multiselect / country-code widgets re-sync on "reset"
  }
}

function showContactSuccess(root) {
  const card = root.querySelector(".leadform-card");
  const done = root.querySelector(".w-form-done");
  const form = root.querySelector("#form");
  if (!card || !done) return;
  if (form) form.hidden = true;
  done.classList.add("is-visible");
  card.setAttribute("data-contact-success", "1");
  if (card.__contactResetTimer) window.clearTimeout(card.__contactResetTimer);
  card.__contactResetTimer = window.setTimeout(
    () => resetContactForm(root),
    CONTACT_SUCCESS_FLASH_MS,
  );
}

function maybeShowThanks(root) {
  let thanks = false;
  try {
    thanks =
      window.location.hash === "#thanks" ||
      sessionStorage.getItem(CONTACT_THANKS_KEY) === "1";
    if (thanks) sessionStorage.removeItem(CONTACT_THANKS_KEY);
  } catch {
    thanks = window.location.hash === "#thanks";
  }
  if (!thanks) return;
  showContactSuccess(root);
  if (window.location.hash === "#thanks" && history.replaceState) {
    history.replaceState(null, "", "/contact");
  }
}

function loadScript(src) {
  const existing = document.querySelector(`script[data-contact-zf="${src}"]`);
  if (existing) {
    return existing.dataset.loaded === "1"
      ? Promise.resolve()
      : new Promise((resolve) => {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => resolve(), { once: true });
        });
  }
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.setAttribute("data-contact-zf", src);
    s.onload = () => {
      s.dataset.loaded = "1";
      resolve();
    };
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

function setZohoGlobals() {
  const setFmt = window.zf_SetDateAndMonthRegexBasedOnDateFormate;
  if (typeof setFmt === "function") {
    const pair = setFmt("dd-MMM-yyyy");
    window.zf_DateRegex = new RegExp(pair[0]);
    window.zf_MonthYearRegex = new RegExp(pair[1]);
  }
  window.zf_MandArray = [
    "SingleLine",
    "SingleLine1",
    "Email",
    "PhoneNumber_countrycode",
    "PhoneNumber_countrycodeval",
    "MultipleChoice",
    "MultiLine",
  ];
  window.zf_FieldArray = [
    "SingleLine3",
    "SingleLine4",
    "SingleLine",
    "SingleLine1",
    "Email",
    "PhoneNumber_countrycode",
    "PhoneNumber_countrycodeval",
    "MultipleChoice",
    "MultiLine",
  ];
  window.isSalesIQIntegrationEnabled = false;
  window.salesIQFieldsArray = [];
}

function wrapZohoSubmit() {
  const orig = window.zf_ValidateAndSubmit;
  if (typeof orig !== "function" || orig.__contactWrapped) return;
  const wrapped = function zf_ValidateAndSubmitContact() {
    const ok = orig();
    if (!ok) return false;
    const redirect = document.querySelector(
      '.contact-page input[name="zf_redirect_url"]',
    );
    if (redirect) {
      redirect.value = window.location.origin + "/contact#thanks";
    }
    try {
      sessionStorage.setItem(CONTACT_THANKS_KEY, "1");
    } catch {
      /* ignore */
    }
    return true;
  };
  wrapped.__contactWrapped = true;
  window.zf_ValidateAndSubmit = wrapped;
}

function initLeadformMultiselect(scope) {
  const cleanups = [];
  scope.querySelectorAll("[data-leadform-multiselect]").forEach((root) => {
    if (root.dataset.enhanced === "1") return;
    root.dataset.enhanced = "1";
    const trigger = root.querySelector(".leadform-multiselect__trigger");
    const panel = root.querySelector(".leadform-multiselect__panel");
    const label = root.querySelector(".leadform-multiselect__label");
    const checks = root.querySelectorAll('input[type="checkbox"][name="MultipleChoice"]');
    if (!trigger || !panel || !label || !checks.length) return;
    const placeholder = label.getAttribute("data-placeholder") || "Your goal/s in India";

    function selectedLabels() {
      const out = [];
      checks.forEach((cb) => {
        if (cb.checked) {
          const text = cb.parentNode && cb.parentNode.querySelector("span");
          out.push(text ? text.textContent.trim() : cb.value);
        }
      });
      return out;
    }
    function syncLabel() {
      const selected = selectedLabels();
      if (!selected.length) {
        label.textContent = placeholder;
        root.classList.remove("has-value");
      } else if (selected.length === 1) {
        label.textContent = selected[0];
        root.classList.add("has-value");
      } else {
        label.textContent = selected.length + " goals selected";
        root.classList.add("has-value");
      }
    }
    function setOpen(open) {
      root.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    }

    const onTrigger = (e) => {
      e.preventDefault();
      setOpen(!root.classList.contains("is-open"));
    };
    trigger.addEventListener("click", onTrigger);
    checks.forEach((cb) => cb.addEventListener("change", syncLabel));
    const onDocClick = (e) => {
      if (!root.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape" && root.classList.contains("is-open")) {
        setOpen(false);
        trigger.focus();
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    const form = root.closest("form");
    const onReset = () => {
      window.setTimeout(() => {
        syncLabel();
        setOpen(false);
      }, 0);
    };
    if (form) form.addEventListener("reset", onReset);
    syncLabel();
    cleanups.push(() => {
      trigger.removeEventListener("click", onTrigger);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
      if (form) form.removeEventListener("reset", onReset);
    });
  });
  return cleanups;
}

function flagUrl(iso) {
  return "https://flagcdn.com/w40/" + String(iso).toLowerCase() + ".png";
}
function flagUrl2x(iso) {
  return "https://flagcdn.com/w80/" + String(iso).toLowerCase() + ".png";
}

function initLeadformCountryCode(scope) {
  const select = scope.querySelector("#international_PhoneNumber_countrycodeval");
  if (!select || select.dataset.enhanced === "1") return () => {};
  select.dataset.enhanced = "1";

  const wrap = document.createElement("div");
  wrap.className = "leadform-cc";
  wrap.setAttribute("data-leadform-cc", "");

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "leadform-cc__trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-label", "Country code");

  const triggerLabel = document.createElement("span");
  triggerLabel.className = "leadform-cc__value";
  trigger.appendChild(triggerLabel);

  const panel = document.createElement("div");
  panel.className = "leadform-cc__panel";
  panel.setAttribute("role", "listbox");
  panel.hidden = true;

  const parent = select.parentNode;
  parent.insertBefore(wrap, select);
  wrap.appendChild(trigger);
  wrap.appendChild(panel);
  wrap.appendChild(select);
  select.classList.add("leadform-cc__native");
  select.setAttribute("tabindex", "-1");
  select.setAttribute("aria-hidden", "true");

  function syncTrigger() {
    triggerLabel.textContent = select.value || "+91";
  }
  function setOpen(open) {
    wrap.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
  }
  function pick(value) {
    select.value = value;
    syncTrigger();
    setOpen(false);
    try {
      select.dispatchEvent(new Event("change", { bubbles: true }));
    } catch {
      /* ignore */
    }
    Array.prototype.forEach.call(panel.querySelectorAll(".leadform-cc__option"), (btn) => {
      const on = btn.getAttribute("data-value") === value;
      btn.classList.toggle("is-selected", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  Array.prototype.forEach.call(select.options, (opt) => {
    const iso = opt.getAttribute("data-flag") || "";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "leadform-cc__option";
    btn.setAttribute("role", "option");
    btn.setAttribute("data-value", opt.value);
    btn.setAttribute("aria-selected", opt.selected ? "true" : "false");
    if (opt.selected) btn.classList.add("is-selected");
    if (iso) {
      const img = document.createElement("img");
      img.className = "leadform-cc__flag";
      img.src = flagUrl(iso);
      img.srcset = flagUrl2x(iso) + " 2x";
      img.width = 20;
      img.height = 15;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      btn.appendChild(img);
    }
    const code = document.createElement("span");
    code.className = "leadform-cc__code";
    code.textContent = opt.value;
    btn.appendChild(code);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      pick(opt.value);
    });
    panel.appendChild(btn);
  });

  const onTrigger = (e) => {
    e.preventDefault();
    setOpen(panel.hidden);
  };
  const onDocClick = (e) => {
    if (!wrap.contains(e.target)) setOpen(false);
  };
  const onKey = (e) => {
    if (e.key === "Escape" && wrap.classList.contains("is-open")) {
      setOpen(false);
      trigger.focus();
    }
  };
  trigger.addEventListener("click", onTrigger);
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKey);
  const form = select.closest("form");
  const onReset = () => {
    window.setTimeout(() => {
      syncTrigger();
      setOpen(false);
    }, 0);
  };
  if (form) form.addEventListener("reset", onReset);
  syncTrigger();

  return () => {
    trigger.removeEventListener("click", onTrigger);
    document.removeEventListener("click", onDocClick);
    document.removeEventListener("keydown", onKey);
    if (form) form.removeEventListener("reset", onReset);
  };
}

const ContactBody = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const root = formRef.current;
    if (!root) return;
    let cancelled = false;
    const cleanups = [];

    (async () => {
      await loadScript("/destination-marketing-agency/js/validation.js");
      if (cancelled) return;
      setZohoGlobals();
      wrapZohoSubmit();
      maybeShowThanks(root);
      cleanups.push(...initLeadformMultiselect(root));
      cleanups.push(initLeadformCountryCode(root));
    })();

    const onPageShow = () => {
      maybeShowThanks(root);
      try {
        if (sessionStorage.getItem(FORM_CLEAR_KEY) !== "1") return;
        sessionStorage.removeItem(FORM_CLEAR_KEY);
      } catch {
        return;
      }
      const f = document.getElementById("form");
      if (f) f.reset();
    };

    window.addEventListener("pageshow", onPageShow);
    return () => {
      cancelled = true;
      window.removeEventListener("pageshow", onPageShow);
      cleanups.forEach((fn) => fn && fn());
    };
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-stage">
        <section className="contact-hero" aria-labelledby="contact-heading">
          <img
            className="contact-hero__bg"
            src="/contact/hero.png"
            alt=""
            width="1243"
            height="739"
            fetchPriority="high"
          />
          <div className="contact-hero__inner">
            <div className="contact-hero__copy">
              <div className="contact-hero__intro">
                <nav className="contact-crumb" aria-label="Breadcrumb">
                  <Link to="/">Home</Link>
                  <span aria-hidden="true"> &gt; </span>
                  <span>Contact Us</span>
                </nav>
                <h2 id="contact-heading" className="contact-h1">
                  Let&apos;s Connect to Build Your{" "}
                  <em>Brand</em>
                </h2>
              </div>
              <div className="contact-glass">
                <a
                  href="tel:+919372567722"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openPhone("+919372567722");
                  }}
                >
                  <img src={phone} alt="" width="17" height="17" />
                  +91 93725 67722
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@melangedigital.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openEmail("hello@melangedigital.co");
                  }}
                >
                  <img src={mail} alt="" width="17" height="17" />
                  hello@melangedigital.co
                </a>
                <div className="contact-glass__locations">
                  <img src={location} alt="" width="17" height="17" />
                  <p className="contact-glass__loc-list">
                    {CONTACT_OFFICES.map((office, i) => (
                      <span key={office.label}>
                        {i > 0 && (
                          <span className="contact-glass__dot" aria-hidden="true">
                            {" · "}
                          </span>
                        )}
                        <a
                          href={office.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {office.label}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="contact-hero__form"
              ref={formRef}
              dangerouslySetInnerHTML={{ __html: formMarkup }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactBody;
