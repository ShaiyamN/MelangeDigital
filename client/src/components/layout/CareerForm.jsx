import React, { useEffect, useRef, forwardRef, useState } from "react";

const ZOHO_DIV_ID = "zf_div_D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI";
const ZOHO_IFRAME_PERMA = "D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI";
const ZOHO_BASE_SRC =
  "https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/" +
  ZOHO_IFRAME_PERMA +
  "?zf_rszfm=1";

// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT: This alias must exactly match what the Zoho admin sets.
// Zoho Form Builder → Settings → Prefill → Field Alias - Prefill URL
// Find the "Position" dropdown field and set its alias to: Position
// ─────────────────────────────────────────────────────────────────────────────
const ZOHO_POSITION_ALIAS = "Position";

/** Appends Zoho UTM tracker params to a URL if the Zoho tracker scripts are loaded. */
const appendUtmParams = (src) => {
  try {
    if (typeof window === "undefined") return src;
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
  } catch (_) { /* fail silently */ }
  return src;
};

/** Builds the final Zoho iframe src, optionally pre-filling the Position field. */
const buildZohoSrc = (selectedPosition) => {
  let src = ZOHO_BASE_SRC;
  if (selectedPosition) {
    src += "&" + ZOHO_POSITION_ALIAS + "=" + encodeURIComponent(selectedPosition);
  }
  return appendUtmParams(src);
};

// ─────────────────────────────────────────────────────────────────────────────

const CareerForm = forwardRef(({ selectedPosition }, ref) => {
  const mountRef = useRef(null);
  const iframeRef = useRef(null);

  // Rebuild iframe whenever selectedPosition changes (or on first mount)
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Remove previous iframe cleanly
    if (iframeRef.current && mount.contains(iframeRef.current)) {
      mount.removeChild(iframeRef.current);
    }

    const iframe = document.createElement("iframe");
    iframe.src = buildZohoSrc(selectedPosition);
    iframe.style.border = "none";
    iframe.style.width = "90%";
    iframe.style.height = "1354px";
    iframe.style.transition = "all 0.5s ease";
    iframe.setAttribute("aria-label", "Apply Now and Become a Part of Our Team!");
    iframeRef.current = iframe;
    mount.appendChild(iframe);

    // Handle dynamic height messages from Zoho
    const onMessage = (event) => {
      const evntData = event?.data;
      if (evntData && evntData.constructor === String) {
        const parts = evntData.split("|");
        if (parts.length === 2 || parts.length === 3) {
          const zf_perma = parts[0];
          const newHeight = (parseInt(parts[1], 10) + 15) + "px";
          const currentIframe = mount?.getElementsByTagName("iframe")[0];
          if (
            currentIframe &&
            currentIframe.src.indexOf("formperma") > 0 &&
            currentIframe.src.indexOf(zf_perma) > 0
          ) {
            const prevHeight = currentIframe.style.height;
            const shouldScroll = parts.length === 3;
            if (prevHeight !== newHeight) {
              if (shouldScroll) {
                currentIframe.scrollIntoView();
                setTimeout(() => { currentIframe.style.height = newHeight; }, 500);
              } else {
                currentIframe.style.height = newHeight;
              }
            }
          }
        }
      }
    };

    window.addEventListener("message", onMessage, false);
    return () => {
      window.removeEventListener("message", onMessage, false);
      if (mount && iframe && mount.contains(iframe)) {
        mount.removeChild(iframe);
      }
    };
  }, [selectedPosition]);

  return (
    <div ref={ref} className="max-w-[1440px] mx-auto">

      {/* "Applying for" banner — shown only when a position is pre-selected */}
      {selectedPosition && (
        <div className="mx-6 md:mx-16 lg:mx-28 mt-10 mb-0">
          <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 flex-shrink-0 animate-pulse" />
            <p className="font-bricolage text-[15px] font-semibold text-purple-800">
              Applying for:{" "}
              <span className="text-purple-600">{selectedPosition}</span>
            </p>
            <p className="text-xs text-purple-400 ml-auto hidden sm:block">
              This position is pre-selected in the form below ↓
            </p>
          </div>
        </div>
      )}

      <div className="mx-6 md:mx-16 lg:mx-28 mt-6 md:mt-10 mb-6 flex justify-center">
        {/* Zoho Form Mount Point — do NOT add id here to avoid duplicate ID bugs */}
        <div ref={mountRef} className="w-full flex justify-center" />
      </div>
    </div>
  );
});

CareerForm.displayName = "CareerForm";
export default CareerForm;
