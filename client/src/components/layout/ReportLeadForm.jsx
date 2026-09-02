import { useEffect, useRef } from "react";
import { REPORT_FORM_IFRAME_SRC, REPORT_FORM_PERMA } from "../../constants/reportLead";

const appendUtmParams = (src) => {
  try {
    if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
      for (let i = 0; i < window.ZFAdvLead.utmPNameArr.length; i++) {
        let utmPm = window.ZFAdvLead.utmPNameArr[i];
        utmPm =
          window.ZFAdvLead.isSameDomian &&
          window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1
            ? "zf_" + utmPm
            : utmPm;
        const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[i]);
        if (typeof utmVal !== "undefined" && utmVal !== "") {
          src += "&" + utmPm + "=" + utmVal;
        }
      }
    }
    if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
      for (let i = 0; i < window.ZFLead.utmPNameArr.length; i++) {
        const utmPm = window.ZFLead.utmPNameArr[i];
        const utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[i]);
        if (typeof utmVal !== "undefined" && utmVal !== "") {
          src += "&" + utmPm + "=" + utmVal;
        }
      }
    }
  } catch {
    /* fail silently */
  }
  return src;
};

const buildZohoSrc = () => {
  let src = REPORT_FORM_IFRAME_SRC;
  try {
    if (document.referrer) {
      src += "&referrer=" + encodeURIComponent(document.referrer);
    }
  } catch {
    /* ignore */
  }
  return appendUtmParams(src);
};

export default function ReportLeadForm() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    mount.replaceChildren();

    const iframe = document.createElement("iframe");
    iframe.src = buildZohoSrc();
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "360px";
    iframe.style.pointerEvents = "none";
    iframe.setAttribute("aria-label", "Download the report");
    mount.appendChild(iframe);

    const enable = () => {
      iframe.style.pointerEvents = "auto";
    };
    const disable = () => {
      iframe.style.pointerEvents = "none";
    };
    mount.addEventListener("mousedown", enable);
    mount.addEventListener("touchstart", enable, { passive: true });
    mount.addEventListener("mouseleave", disable);

    const onMessage = (event) => {
      const evntData = event?.data;
      if (evntData && evntData.constructor === String) {
        const parts = evntData.split("|");
        if (parts.length === 2 || parts.length === 3) {
          const zfPerma = parts[0];
          const newHeight = parseInt(parts[1], 10) + 8 + "px";
          const currentIframe = mount.getElementsByTagName("iframe")[0];
          if (
            currentIframe &&
            (currentIframe.src.indexOf("form-embed") !== -1 ||
              (currentIframe.src.indexOf("formperma") > 0 &&
                currentIframe.src.indexOf(zfPerma) > 0))
          ) {
            if (currentIframe.style.height !== newHeight) {
              currentIframe.style.height = newHeight;
            }
          }
        }
      }
    };

    window.addEventListener("message", onMessage, false);
    return () => {
      window.removeEventListener("message", onMessage, false);
      mount.removeEventListener("mousedown", enable);
      mount.removeEventListener("touchstart", enable);
      mount.removeEventListener("mouseleave", disable);
      mount.replaceChildren();
    };
  }, []);

  return <div ref={mountRef} className="report-form-iframe-mount" data-zf-perma={REPORT_FORM_PERMA} />;
}
