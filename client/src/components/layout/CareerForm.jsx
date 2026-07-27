import React, { useEffect, forwardRef } from "react";

const ZOHO_DIV_ID = "zf_div_D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI";
const ZOHO_IFRAME_PERMA = "D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI";
const ZOHO_BASE_SRC =
  "https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/" +
  ZOHO_IFRAME_PERMA +
  "?zf_rszfm=1";

const CareerForm = forwardRef((props, ref) => {
  useEffect(() => {
    // Create iframe
    const iframe = document.createElement("iframe");
    let ifrmSrc = ZOHO_BASE_SRC;

    // Try to append UTM params from Zoho trackers if available (mirrors your snippet)
    try {
      if (typeof window !== "undefined") {
        // Advanced Lead
        if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
          for (let i = 0; i < window.ZFAdvLead.utmPNameArr.length; i++) {
            let utmPm = window.ZFAdvLead.utmPNameArr[i];
            utmPm =
              window.ZFAdvLead.isSameDomian &&
              window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1
                ? "zf_" + utmPm
                : utmPm;
            const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(
              window.ZFAdvLead.utmPNameArr[i]
            );
            if (typeof utmVal !== "undefined" && utmVal !== "") {
              ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + utmPm + "=" + utmVal;
            }
          }
        }
        // Lead
        if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
          for (let i = 0; i < window.ZFLead.utmPNameArr.length; i++) {
            const utmPm = window.ZFLead.utmPNameArr[i];
            const utmVal = window.zfutm_zfLead.zfutm_gC_enc(
              window.ZFLead.utmPNameArr[i]
            );
            if (typeof utmVal !== "undefined" && utmVal !== "") {
              ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + utmPm + "=" + utmVal;
            }
          }
        }
      }
    } catch (e) {
      // Fail silently if Zoho trackers not present
    }

    iframe.src = ifrmSrc;
    iframe.style.border = "none";
    iframe.style.width = "90%";
    iframe.style.height = "1354px";
    iframe.style.transition = "all 0.5s ease";
    iframe.setAttribute("aria-label", "Apply Now and Become a Part of Our Team!");

    const mount = document.getElementById(ZOHO_DIV_ID);
    if (mount) {
      mount.appendChild(iframe);
    }

    // Handle height messages from Zoho
    const onMessage = (event) => {
      const evntData = event?.data;
      if (evntData && evntData.constructor === String) {
        const parts = evntData.split("|");
        if (parts.length === 2 || parts.length === 3) {
          const zf_perma = parts[0];
          const newHeight = (parseInt(parts[1], 10) + 15) + "px";
          const currentIframe =
            document.getElementById(ZOHO_DIV_ID)?.getElementsByTagName("iframe")[0];

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
                setTimeout(() => {
                  currentIframe.style.height = newHeight;
                }, 500);
              } else {
                currentIframe.style.height = newHeight;
              }
            }
          }
        }
      }
    };

    window.addEventListener("message", onMessage, false);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", onMessage, false);
      if (mount && iframe && mount.contains(iframe)) {
        mount.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div ref={ref} className="max-w-[1440px] mx-auto">
     {/*  <div className="mx-6 md:mx-16 lg:mx-28 mt-14 md:mt-20 mb-10">
        <h2 className="md:text-[40px] text-[24px] lg:leading-[48px] leading-[30px] font-semibold lg:text-center">
          Apply Now and Become a Part of Our Team!
        </h2>
        <p className="lg:text-[20px] text-[18px] lg:leading-[30px] leading-[25px] lg:text-center font-bricolage mt-4">
          Are you ready to advance your career with a leading digital marketing agency?
          Don’t miss <br className="lg:block hidden" /> this opportunity to grow, learn, and
          innovate with us.
        </p>
      </div> */}

      <div className="mx-6 md:mx-16 lg:mx-28 mt-10 md:mt-20 mb-6 flex justify-center">
        {/* Zoho Form Mount Point */}
        <div id={ZOHO_DIV_ID} className="w-full flex justify-center" />
      </div>
    </div>
  );
});

export default CareerForm;
