import React, { useEffect, useRef, forwardRef } from "react";

const ZOHO_BASE_SRC = "/careers/form";

// Zoho Form Builder → Settings → Prefill → Field Alias for Position dropdown: Position
const ZOHO_POSITION_ALIAS = "Position";

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
  } catch (_) {
    /* fail silently */
  }
  return src;
};

const buildZohoSrc = (selectedPosition) => {
  let src = ZOHO_BASE_SRC;
  if (selectedPosition) {
    src += "?" + ZOHO_POSITION_ALIAS + "=" + encodeURIComponent(selectedPosition);
  }
  return appendUtmParams(src);
};

const CareerForm = forwardRef(({ selectedPosition }, ref) => {
  const mountRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (iframeRef.current && mount.contains(iframeRef.current)) {
      mount.removeChild(iframeRef.current);
    }

    const iframe = document.createElement("iframe");
    iframe.src = buildZohoSrc(selectedPosition);
    iframe.style.border = "none";
    iframe.style.width = "90%";
    iframe.style.height = "1354px";
    iframe.setAttribute("aria-label", "Apply Now and Join the Team!");
    iframeRef.current = iframe;

    const onIframeLoad = () => {
      try {
        if (window.__melangeLenis) {
          window.__melangeLenis.resize();
        }
        const iframeWin = iframe.contentWindow;
        if (!iframeWin) return;
        const forwardWheel = (e) => {
          const lenis = window.__melangeLenis;
          if (lenis && !lenis.isStopped && !lenis.isLocked) {
            const mult = e.deltaMode === 1 ? 40 : (e.deltaMode === 2 ? window.innerHeight : 1);
            const deltaY = e.deltaY * mult;
            lenis.scrollTo(lenis.targetScroll + deltaY, {
              programmatic: false,
              duration: lenis.options.duration,
              easing: lenis.options.easing,
              lerp: lenis.options.lerp,
            });
          } else {
            window.scrollBy({ top: e.deltaY, left: e.deltaX, behavior: "auto" });
          }
        };
        iframeWin.addEventListener("wheel", forwardWheel, { passive: true });
      } catch (_) {}
    };
    iframe.addEventListener("load", onIframeLoad);

    mount.appendChild(iframe);

    const onMessage = (event) => {
      const evntData = event?.data;
      if (evntData && evntData.constructor === String) {
        const parts = evntData.split("|");
        if (parts.length === 2 || parts.length === 3) {
          const zf_perma = parts[0];
          const newHeight = parseInt(parts[1], 10) + 15 + "px";
          const currentIframe = mount?.getElementsByTagName("iframe")[0];
          if (
            currentIframe &&
            (currentIframe.src.indexOf("/careers/form") !== -1 ||
              currentIframe.src.indexOf("formperma") > 0)
          ) {
            const prevHeight = currentIframe.style.height;
            if (prevHeight !== newHeight) {
              currentIframe.style.height = newHeight;
              if (window.__melangeLenis) {
                window.__melangeLenis.resize();
              }
            }
          }
        }
      }
    };

    window.addEventListener("message", onMessage, false);
    return () => {
      window.removeEventListener("message", onMessage, false);
      iframe.removeEventListener("load", onIframeLoad);
      if (mount && iframe && mount.contains(iframe)) {
        mount.removeChild(iframe);
      }
    };
  }, [selectedPosition]);

  return (
    <section ref={ref} className="career-form max-w-[1440px] mx-auto">
      {selectedPosition && (
        <div className="mx-6 md:mx-16 lg:mx-28 mb-6">
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

      <div className="mx-6 md:mx-16 lg:mx-28 flex justify-center">
        <div ref={mountRef} className="w-full flex justify-center" />
      </div>
    </section>
  );
});

CareerForm.displayName = "CareerForm";
export default CareerForm;
