import { useEffect, useRef } from "react";
import { REPORT_DOWNLOAD_PATH } from "../../constants/reportLead";
import formMarkup from "./report-zoho-form.html?raw";

const VALIDATION_SRC = "/destination-marketing-agency/js/validation.js";

function loadScript(src) {
  const existing = document.querySelector(`script[data-report-zf="${src}"]`);
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
    s.setAttribute("data-report-zf", src);
    s.onload = () => {
      s.dataset.loaded = "1";
      resolve();
    };
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

function setReportZohoGlobals() {
  const setFmt = window.zf_SetDateAndMonthRegexBasedOnDateFormate;
  if (typeof setFmt === "function") {
    const pair = setFmt("dd-MMM-yyyy");
    window.zf_DateRegex = new RegExp(pair[0]);
    window.zf_MonthYearRegex = new RegExp(pair[1]);
  }
  window.zf_MandArray = ["SingleLine", "SingleLine1", "Email"];
  window.zf_FieldArray = ["SingleLine", "SingleLine1", "Email", "PhoneNumber_countrycode"];
  window.isSalesIQIntegrationEnabled = false;
  window.salesIQFieldsArray = [];
}

function wrapZohoSubmit() {
  const orig = window.zf_ValidateAndSubmit;
  if (typeof orig !== "function" || orig.__reportWrapped) return;
  const wrapped = function zf_ValidateAndSubmitReport() {
    const ok = orig();
    if (!ok) return false;
    const redirect = document.querySelector(
      '#report-form-mount input[name="zf_redirect_url"]',
    );
    if (redirect) {
      redirect.value = window.location.origin + REPORT_DOWNLOAD_PATH;
    }
    return true;
  };
  wrapped.__reportWrapped = true;
  window.zf_ValidateAndSubmit = wrapped;
}

export default function ReportLeadForm() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let cancelled = false;

    (async () => {
      await loadScript(VALIDATION_SRC);
      if (cancelled) return;
      setReportZohoGlobals();
      wrapZohoSubmit();
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="report-leadform-root"
      dangerouslySetInnerHTML={{ __html: formMarkup }}
    />
  );
}
