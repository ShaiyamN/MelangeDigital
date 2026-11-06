import{r as t,j as e,W as y,N as x,a as z,F as _}from"./index-BIOrhJmY.js";import{s as u,a as S}from"./marketingShell-BawEH7_c.js";const T="pending-report",q="/report-download",M={"indian-outbound-2026":{title:"The Indian Outbound Inspiration Report 2026",path:"/indian-outbound-tourism-report"}},h={pendingReportKey:T,reportDownloadPath:q,reports:M},I=h.pendingReportKey,A=h.reportDownloadPath,b=h.reports;function C(a){if(!(!a||!b[a]))try{sessionStorage.setItem(I,a)}catch{}}function B(){if(typeof window>"u")return null;const a=new URLSearchParams(window.location.search).get("report");return a&&b[a]?a:null}const j=`<div class="leadform-card report-leadform-card" id="report-lead-form-card">\r
  <div class="contact_form w-form">\r
    <div class="zf-backgroundBg">\r
      <div class="zf-templateWidth">\r
        <form\r
          action="https://forms.zohopublic.in/melangedigital1/form/WebsiteReportLead/formperma/xcTd58RcdWgj94Z0Q1vN0Z6YOwjBfedp3vSkxnlNj0Q/htmlRecords/submit"\r
          name="form"\r
          method="POST"\r
          onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'\r
          accept-charset="UTF-8"\r
          enctype="multipart/form-data"\r
          id="report-lead-form"\r
        >\r
          <input type="hidden" name="zf_referrer_name" value="" />\r
          <input type="hidden" name="zf_redirect_url" value="" />\r
          <input type="hidden" name="zc_gad" value="" />\r
          <div class="zf-templateWrapper">\r
            <ul class="zf-tempHeadBdr">\r
              <li class="zf-tempHeadContBdr">\r
                <h3 class="zf-frmTitle"><em>Tell us about yourself</em></h3>\r
                <p class="zf-frmDesc"></p>\r
                <div class="zf-clearBoth"></div>\r
              </li>\r
            </ul>\r
            <div class="zf-subContWrap zf-topAlign">\r
              <ul>\r
                <div class="leadform-fields report-leadform-fields">\r
                  <div class="zf-tempFrmWrapper zf-large leadform-field--name">\r
                    <label class="zf-labelName" for="report_zf_name">Name</label>\r
                    <div class="zf-tempContDiv">\r
                      <span>\r
                        <input\r
                          id="report_zf_name"\r
                          type="text"\r
                          name="SingleLine"\r
                          checktype="c1"\r
                          value=""\r
                          maxlength="255"\r
                          fieldType="1"\r
                          autocomplete="name"\r
                          placeholder="Name"\r
                        />\r
                      </span>\r
                      <p id="SingleLine_error" class="zf-errorMessage" style="display: none;">Invalid value</p>\r
                    </div>\r
                  </div>\r
                  <div class="zf-tempFrmWrapper zf-large">\r
                    <label class="zf-labelName" for="report_zf_company">Company</label>\r
                    <div class="zf-tempContDiv">\r
                      <span>\r
                        <input\r
                          id="report_zf_company"\r
                          type="text"\r
                          name="SingleLine1"\r
                          checktype="c1"\r
                          value=""\r
                          maxlength="255"\r
                          fieldType="1"\r
                          autocomplete="organization"\r
                          placeholder="Company"\r
                        />\r
                      </span>\r
                      <p id="SingleLine1_error" class="zf-errorMessage" style="display: none;">Invalid value</p>\r
                    </div>\r
                  </div>\r
                  <div class="zf-tempFrmWrapper zf-large leadform-field--email">\r
                    <label class="zf-labelName" for="report_zf_email">Email</label>\r
                    <div class="zf-tempContDiv leadform-email-wrap">\r
                      <span>\r
                        <input\r
                          id="report_zf_email"\r
                          type="text"\r
                          name="Email"\r
                          checktype="c5"\r
                          value=""\r
                          maxlength="255"\r
                          fieldType="9"\r
                          autocomplete="off"\r
                          data-lpignore="true"\r
                          data-1p-ignore="true"\r
                          data-bwignore="true"\r
                          data-form-type="other"\r
                          data-tempmail-ignore="true"\r
                          placeholder="Email"\r
                          readonly="readonly"\r
                          onfocus="this.removeAttribute('readonly')"\r
                        />\r
                      </span>\r
                      <p id="Email_error" class="zf-errorMessage" style="display: none;">Invalid value</p>\r
                    </div>\r
                  </div>\r
                  <div class="zf-tempFrmWrapper zf-large leadform-field--phone">\r
                    <label class="zf-labelName" for="report_zf_phone">Phone</label>\r
                    <div class="zf-tempContDiv zf-phonefld">\r
                      <div class="zf-phwrapper zf-phNumber">\r
                        <span>\r
                          <input\r
                            type="text"\r
                            compname="PhoneNumber"\r
                            name="PhoneNumber_countrycode"\r
                            maxlength="20"\r
                            checktype="c7"\r
                            value=""\r
                            phoneFormat="1"\r
                            isCountryCodeEnabled="false"\r
                            fieldType="11"\r
                            id="report_zf_phone"\r
                            valType="number"\r
                            phoneFormatType="1"\r
                            autocomplete="tel"\r
                            placeholder="Phone"\r
                          />\r
                        </span>\r
                      </div>\r
                      <p id="PhoneNumber_error" class="zf-errorMessage" style="display: none;">Invalid value</p>\r
                    </div>\r
                  </div>\r
                </div>\r
              </ul>\r
            </div>\r
            <ul>\r
              <li class="zf-fmFooter">\r
                <button type="submit" class="zf-submitColor">Submit</button>\r
              </li>\r
            </ul>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`,R="/destination-marketing-agency/js/validation.js";function D(a){const r=document.querySelector(`script[data-report-zf="${a}"]`);return r?r.dataset.loaded==="1"?Promise.resolve():new Promise(s=>{r.addEventListener("load",()=>s(),{once:!0}),r.addEventListener("error",()=>s(),{once:!0})}):new Promise(s=>{const n=document.createElement("script");n.src=a,n.async=!1,n.setAttribute("data-report-zf",a),n.onload=()=>{n.dataset.loaded="1",s()},n.onerror=()=>s(),document.body.appendChild(n)})}function E(){const a=window.zf_SetDateAndMonthRegexBasedOnDateFormate;if(typeof a=="function"){const r=a("dd-MMM-yyyy");window.zf_DateRegex=new RegExp(r[0]),window.zf_MonthYearRegex=new RegExp(r[1])}window.zf_MandArray=["SingleLine","SingleLine1","Email"],window.zf_FieldArray=["SingleLine","SingleLine1","Email","PhoneNumber_countrycode"],window.isSalesIQIntegrationEnabled=!1,window.salesIQFieldsArray=[]}function L(){const a=window.zf_ValidateAndSubmit;if(typeof a!="function"||a.__reportWrapped)return;const r=function(){if(!a())return!1;const l=document.querySelector('#report-form-mount input[name="zf_redirect_url"]');return l&&(l.value=window.location.origin+A),!0};r.__reportWrapped=!0,window.zf_ValidateAndSubmit=r}function W(){const a=t.useRef(null);return t.useEffect(()=>{if(!a.current)return;let s=!1;return(async()=>(await D(R),!s&&(E(),L())))(),()=>{s=!0}},[]),e.jsx("div",{ref:a,className:"report-leadform-root",dangerouslySetInnerHTML:{__html:j}})}const P=`  <p class="sr-only">India's destination marketing agency for the world's tourism boards.</p>\r
  <div class="main">\r
   <div class="gradient-background">\r
   </div>\r
   <section class="section" id="home">\r
    <div class="w-layout-blockcontainer container-main w-container">\r
     <div class="hero-figma">\r
      <div class="hero-figma__content">\r
       <h1 class="hero-eyebrow">India's Leading Travel and Tourism Marketing Agency</h1>\r
       <h2 class="hero-heading-h1" data-w-id="6d188073-2487-31fa-c36a-0d1621970df1">\r
        We make Destinations\r
        <span class="hero-line-2">irresistible to <span class="hero-accent">Indian Travellers</span></span>\r
       </h2>\r
       <p class="para-txt" data-w-id="aca08924-3373-f5fc-69ef-f496c3c5cc2e">\r
        As a tourism marketing agency,<br class="hero-br-desktop"/>\r
        India's outbound travel market is projected to reach 50 million travellers by 2030.<br class="hero-br-desktop"/>\r
        We help destinations earn their attention.\r
       </p>\r
       <div class="hero-cta-cluster">\r
    \r
        <div class="hero-cta-left">\r
         <a class="button hero-download-btn w-inline-block" data-w-id="eecee728-f47b-6730-11f5-5b63546b3fc7" href="/contact">\r
          <div class="text-block-6">Get In Touch</div>\r
          <span class="hero-btn-icon" aria-hidden="true">\r
           <img alt="" loading="lazy" src="/destination-marketing-agency/images/arrow-top-right-purple.svg" width="12"/>\r
          </span>\r
         </a>\r
        </div>\r
        <span class="hero-cta-divider" aria-hidden="true"></span>\r
        <p class="trusted-text">\r
         <span class="hero-stat-num">10+</span> national boards<br/><span class="hero-stat-num">5,000+</span> creators<br/><span class="hero-stat-num">15+</span> years\r
        </p>\r
       </div>\r
      </div>\r
      <div class="hero-figma__visual">\r
       <div class="hero-figma__glow"></div>\r
       <img alt="Mélange Digital destination marketing campaigns for global tourism boards" loading="eager" fetchpriority="high" width="3020" height="1700" src="/destination-marketing-agency/images/figma/home-page-1440.webp" srcset="/destination-marketing-agency/images/figma/home-page-720.webp 720w, /destination-marketing-agency/images/figma/home-page-1080.webp 1080w, /destination-marketing-agency/images/figma/home-page-1440.webp 1440w, /destination-marketing-agency/images/figma/home-page-2048.webp 2048w" sizes="(max-width: 991px) calc(100vw - 32px), 100vw"/>\r
      </div>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-logo-section">\r
    <div class="w-layout-blockcontainer logo-sec-container w-container">\r
     <div class="trusted-heading-wrap">\r
      <h2 class="trusted-heading">\r
       Trusted by <span class="span-txt">global tourism boards</span> and <span class="span-txt">brands</span> alike\r
      </h2>\r
     </div>\r
     <div class="logo-section logo-marquee-section">\r
      <div class="marquee_wrap marquee-css-scroll">\r
      <div class="static-marquee_logos">\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/singapore-tourism-board.webp" alt="Singapore Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/hong-kong-tourism-board.webp" alt="Hong Kong Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/saudi-tourism-authority.webp" alt="Saudi Tourism Authority logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/south-african-tourism.webp" alt="South African Tourism logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/tourism-australia.webp" alt="Tourism Australia logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/cambodia-tourism-board.webp" alt="Cambodia Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/zambia-tourism-authority.webp" alt="Zambia Tourism Authority logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/uganda-tourism-board.webp" alt="Uganda Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/visit-brussels.webp" alt="Visit Brussels logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/yas-island-abu-dhabi.webp" alt="Yas Island Abu Dhabi logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/universal-studios-singapore.webp" alt="Universal Studios Singapore logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/legoland-parks.webp" alt="LEGOLAND Parks logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/changi-airport-singapore.webp" alt="Changi Airport Singapore logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/norwegian-cruise-line.webp" alt="Norwegian Cruise Line logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/costa-cruises.webp" alt="Costa Cruises logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/makemytrip.webp" alt="MakeMyTrip logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/cleartrip.webp" alt="Cleartrip logo" loading="lazy"/></div>\r
      </div>\r
      <div class="static-marquee_logos" aria-hidden="true">\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/singapore-tourism-board.webp" alt="Singapore Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/hong-kong-tourism-board.webp" alt="Hong Kong Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/saudi-tourism-authority.webp" alt="Saudi Tourism Authority logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/south-african-tourism.webp" alt="South African Tourism logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/tourism-australia.webp" alt="Tourism Australia logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/cambodia-tourism-board.webp" alt="Cambodia Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/zambia-tourism-authority.webp" alt="Zambia Tourism Authority logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/uganda-tourism-board.webp" alt="Uganda Tourism Board logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/visit-brussels.webp" alt="Visit Brussels logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/yas-island-abu-dhabi.webp" alt="Yas Island Abu Dhabi logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/universal-studios-singapore.webp" alt="Universal Studios Singapore logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/legoland-parks.webp" alt="LEGOLAND Parks logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/changi-airport-singapore.webp" alt="Changi Airport Singapore logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/norwegian-cruise-line.webp" alt="Norwegian Cruise Line logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/costa-cruises.webp" alt="Costa Cruises logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/makemytrip.webp" alt="MakeMyTrip logo" loading="lazy"/></div>\r
       <div class="logo-marquee-item"><img class="marquee-logo" src="/destination-marketing-agency/images/logos/trusted/cleartrip.webp" alt="Cleartrip logo" loading="lazy"/></div>\r
      </div>\r
     </div>\r
     <div class="left-overlay-div">\r
     </div>\r
     <div class="right-overlay-div">\r
     </div>\r
    </div>\r
    </div>\r
   </section>\r
\r
<section class="home-innovation-section home-audiences-section" id="what-we-do">\r
    <div class="w-layout-blockcontainer container-5 w-container">\r
     <div class="innovation-heading-wrap">\r
      <h2 class="home-heading-h2 builtfor-heading-form">\r
       What we <span class="span-italic-txt">Do</span>\r
      </h2>\r
      <p class="audiences-section-sub">Four ways we turn cultural insights into arrivals. Know more about our services on our Services page.</p>\r
     </div>\r
     <div class="audiences-grid" role="list">\r
      <article class="audiences-card" role="listitem">\r
       <div class="audiences-card-media-wrap">\r
        <div class="audiences-card-media">\r
         <img alt="Celebrity fronting an influencer marketing campaign in an infinity pool overlooking a city skyline, part of Mélange Digital's travel and tourism marketing services" loading="lazy" src="/destination-marketing-agency/images/audiences/influencer-celebrity-640.webp" srcset="/destination-marketing-agency/images/audiences/influencer-celebrity-640.webp 640w, /destination-marketing-agency/images/audiences/influencer-celebrity.webp?v=20260902 900w" sizes="(max-width: 767px) calc(100vw - 84px), 270px" decoding="async"/>\r
        </div>\r
        <span class="audiences-card-icon" aria-hidden="true">\r
         <img alt="" loading="lazy" src="/destination-marketing-agency/images/what-we-do/icon-influencer.png?v=20260902b" width="60" height="60"/>\r
        </span>\r
       </div>\r
       <h3 class="heading-25"><a href="/services/influencer-marketing" style="color: inherit">Influencer Marketing</a></h3>\r
       <p class="builtfor-descp">Creators and celebrities cast by subculture fit, not follower count</p>\r
      </article>\r
      <article class="audiences-card" role="listitem">\r
       <div class="audiences-card-media-wrap">\r
        <div class="audiences-card-media">\r
         <img alt="Musicians and talent on a rooftop at sunset for a branded content and IP integration campaign, a tourism marketing agency service from Mélange Digital" loading="lazy" src="/destination-marketing-agency/images/audiences/ip-integration-640.webp" srcset="/destination-marketing-agency/images/audiences/ip-integration-640.webp 640w, /destination-marketing-agency/images/audiences/ip-integration.webp?v=20260902 900w" sizes="(max-width: 767px) calc(100vw - 84px), 270px" decoding="async"/>\r
        </div>\r
        <span class="audiences-card-icon" aria-hidden="true">\r
         <img alt="" loading="lazy" src="/destination-marketing-agency/images/what-we-do/icon-branded.png?v=20260902b" width="60" height="60"/>\r
        </span>\r
       </div>\r
       <h3 class="heading-25"><a href="/services/branded-content-ips" style="color: inherit">Branded Content &amp; IP</a></h3>\r
       <p class="builtfor-descp">Destinations woven into the films, music and platforms culture already watches.</p>\r
      </article>\r
      <article class="audiences-card" role="listitem">\r
       <div class="audiences-card-media-wrap">\r
        <div class="audiences-card-media">\r
         <img alt="Mall activation with a desert zip-line experience and branded exhibition booths, an experiential marketing campaign delivered by Mélange Digital's travel marketing agency" loading="lazy" src="/destination-marketing-agency/images/audiences/experiential-640.webp" srcset="/destination-marketing-agency/images/audiences/experiential-640.webp 640w, /destination-marketing-agency/images/audiences/experiential.webp?v=20260902 900w" sizes="(max-width: 767px) calc(100vw - 84px), 270px" decoding="async"/>\r
        </div>\r
        <span class="audiences-card-icon" aria-hidden="true">\r
         <img alt="" loading="lazy" src="/destination-marketing-agency/images/what-we-do/icon-experiential.png?v=20260902b" width="60" height="60"/>\r
        </span>\r
       </div>\r
       <h3 class="heading-25"><a href="/services/experiential-marketing" style="color: inherit">Experiential Marketing</a></h3>\r
       <p class="builtfor-descp">Booths, activations and trade floors designed for lasting experiences.</p>\r
      </article>\r
      <article class="audiences-card" role="listitem">\r
       <div class="audiences-card-media-wrap">\r
        <div class="audiences-card-media">\r
         <img alt="Content creators and press on a FAM trip helicopter tour over a city skyline, part of a tourism board PR programme" loading="lazy" src="/destination-marketing-agency/images/audiences/fam-trips-pr-640.webp" srcset="/destination-marketing-agency/images/audiences/fam-trips-pr-640.webp 640w, /destination-marketing-agency/images/audiences/fam-trips-pr.webp?v=20260902 900w" sizes="(max-width: 767px) calc(100vw - 84px), 270px" decoding="async"/>\r
        </div>\r
        <span class="audiences-card-icon" aria-hidden="true">\r
         <img alt="" loading="lazy" src="/destination-marketing-agency/images/what-we-do/icon-fam.png?v=20260902b" width="60" height="60"/>\r
        </span>\r
       </div>\r
       <h3 class="heading-25"><a href="/services/fam-trips-pr" style="color: inherit">FAM Trips + PR</a></h3>\r
       <p class="builtfor-descp">Earned media and on-ground hosting that builds trust a media buy can't</p>\r
      </article>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-video-section">\r
    <div class="w-layout-blockcontainer container-main w-container">\r
     <div class="video-section-header">\r
      <p class="video-label">\r
       See Us in Action\r
      </p>\r
      <h2 class="video-heading">\r
       The work speaks\r
       <span class="span-italic-txt">\r
        for itself\r
       </span>\r
      </h2>\r
     </div>\r
     <div class="video-wrapper">\r
      <img class="hero-video" alt="Marina Bay Sands and Gardens by the Bay at sunset, Singapore — campaign imagery from Mélange Digital's travel and tourism marketing agency" loading="lazy" width="1280" height="720" src="/destination-marketing-agency/images/figma/video-still.webp"/>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-shift-section" id="opportunity">\r
    <div class="w-layout-blockcontainer container-4 w-container">\r
     <h2 class="home-heading-h2 home-shift-heading">\r
      We Bring <span class="span-txt">India To You</span>\r
     </h2>\r
     <p class="descp home-shift-line">\r
      We get what most destination marketing agencies don't: that India isn't one travel market, but multiple different traveller types, with different cultures, languages and income levels.<br class="shift-br-desktop hero-br-desktop"/> And we get the people Indian travellers trust, to advertise for you.\r
     </p>\r
     <div class="shift-stats" role="list">\r
      <div class="shift-stat" role="listitem">\r
       <span class="shift-stat__value" data-melange-count data-count="61.7" data-decimals="1" data-prefix="$" data-suffix="B">$61.7B</span>\r
       <p class="shift-stat__label">India's outbound travel market by 2033</p>\r
      </div>\r
      <div class="shift-stat" role="listitem">\r
       <span class="shift-stat__value" data-melange-count data-count="50" data-suffix="M+">50M+</span>\r
       <p class="shift-stat__label">Indian international travellers by 2030</p>\r
      </div>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-caas-section">\r
\r
    <div class="w-layout-blockcontainer container-4 w-container">\r
\r
        <div class="caas-header">\r
           <h2 class="crafting-heading caas-heading">\r
    <span class="caas-cap">C</span>ulture <span class="caas-cap">A</span>s <span class="caas-cap">A</span> <span class="caas-cap">S</span>ystem\r
</h2>\r
\r
            <h3 class="caas-intro">\r
                We put a method to how destination marketing actually works\r
            </h3>\r
\r
        </div>\r
\r
        <div class="caas-flow">\r
\r
            <article class="caas-step">\r
                <span class="caas-number">01</span>\r
                <h3>DECODE</h3>\r
                <p>\r
                    We identify rising subcultures and passion points in India across music, sport, fandom, wellness, food, etc. and spot what's making waves.\r
                </p>\r
            </article>\r
\r
            <article class="caas-step">\r
                <span class="caas-number">02</span>\r
                <h3>MATCH</h3>\r
                <p>\r
                    We pair each passion point with a destination experience that authentically fits, and creators who already have real credibility in that subculture, not just a presence in it.\r
                </p>\r
            </article>\r
\r
            <article class="caas-step">\r
                <span class="caas-number">03</span>\r
                <h3>NARRATE</h3>\r
                <p>\r
                    We craft the destination stories in the subculture's own language. The destination lives within the narrative, never bolted on top or as a backdrop.\r
                </p>\r
            </article>\r
\r
            <article class="caas-step">\r
                <span class="caas-number">04</span>\r
                <h3>CONVERT</h3>\r
                <p>\r
                    We engineer the path from emotion to actual bookings using these stories with regional languages, the platforms audiences actually use, and trade activations.\r
                </p>\r
            </article>\r
\r
        </div>\r
\r
    </div>\r
\r
</section>\r
\r
<section class="home-innovation-section" id="governments">\r
    <div class="w-layout-blockcontainer container-5 w-container">\r
     <div class="innovation-heading-wrap">\r
      <h2 class="home-heading-h2 builtfor-heading-form">\r
       We build for <span class="span-txt">Governments</span>, not just brands.\r
      </h2>\r
      <p class="builtfor-sub">\r
       <em>Pitching a campaign is the easy part. Getting government approval takes real expertise, and that's exactly where we specialise.</em>\r
      </p>\r
     </div>\r
     <div class="innovation-wrapper w-dyn-list">\r
      <div class="innovation-grid w-dyn-items" role="list">\r
       <div class="innovation-item w-dyn-item" role="listitem" style="background-color:hsla(271.3761467889908, 76.22%, 71.96%, 0.20);">\r
        <img alt="" height="40" loading="lazy" src="/destination-marketing-agency/images/brand.svg" width="40"/>\r
        <h3 class="heading-25">Intelligence-Led</h3>\r
        <p class="builtfor-descp">Every brief begins with verified traveller data from research partners, including Skyscanner, Amadeus, Skift Research and McKinsey.</p>\r
       </div>\r
       <div class="innovation-item w-dyn-item" role="listitem" style="background-color:hsla(350, 83.08%, 74.51%, 0.20);">\r
        <img alt="" height="40" loading="lazy" src="/destination-marketing-agency/images/digitalmarketing.svg" width="40"/>\r
        <h3 class="heading-25">Approval-Savvy</h3>\r
        <p class="builtfor-descp">We operate within your reporting lines, approval cycles and compliance requirements, and manage all clearances and governance directly.</p>\r
       </div>\r
       <div class="innovation-item w-dyn-item" role="listitem" style="background-color:hsla(211.04895104895104, 100.00%, 71.96%, 0.20);">\r
        <img alt="" height="40" loading="lazy" src="/destination-marketing-agency/images/uiux.svg" width="40"/>\r
        <h3 class="heading-25">Full Funnel</h3>\r
        <p class="builtfor-descp">Our work does not stop at building awareness. We guide travellers from their first exposure to your destination through to booking.</p>\r
       </div>\r
       <div class="innovation-item w-dyn-item" role="listitem" style="background-color:hsla(28.211920529801322, 100.00%, 70.39%, 0.20);">\r
        <img alt="" height="40" loading="lazy" src="/destination-marketing-agency/images/analitics.svg" width="40"/>\r
        <h3 class="heading-25">Accountable</h3>\r
        <p class="builtfor-descp">We are committed to delivering accurate, transparent reporting that ensures your destination's growth stays on the right track.</p>\r
       </div>\r
      </div>\r
     </div>\r
     <div class="call-to-action">\r
      <div class="collabrator-wrapper">\r
       <div class="collabrator-txt">\r
        <p class="title-1">Find out how ready</p>\r
        <p class="title-2">India is for your destination.</p>\r
       </div>\r
       <div class="collabrator-btn-div">\r
        <a class="let-s-collaborate w-inline-block" href="/?report=indian-outbound-2026#report-access">\r
         <div class="text-block-13">Download the Indian Outbound Inspiration Report</div>\r
         <div class="div-block-21">\r
          <img alt="" loading="lazy" src="/destination-marketing-agency/images/arrow-top-right-dark.svg" width="10"/>\r
         </div>\r
        </a>\r
       </div>\r
      </div>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-our-work-section" id="work">\r
    <div class="w-layout-blockcontainer container-6 w-container">\r
     <div class="div-block-215">\r
      <div class="work-section-header">\r
       <h2 class="our-work-heading repurposed-heading-fix2">\r
        Case Studies <span class="span-txt">That Moved Arrivals</span>\r
       </h2>\r
      </div>\r
     \r
      <div class="work-carousel">\r
       <button type="button" class="work-carousel-nav work-carousel-nav--prev" id="workCarouselPrev" aria-label="Previous case study">\r
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M15.5 5.5L9 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
       </button>\r
       <button type="button" class="work-carousel-nav work-carousel-nav--next" id="workCarouselNext" aria-label="Next case study">\r
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M8.5 5.5L15 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
       </button>\r
      <div class="div-block-214">\r
       <a href="/work/singapore-tourism-board-isthisevensingapore" class="work-card-link card-1 work-card--stats w-inline-block">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Singapore Tourism Board destination marketing campaign with influencer marketing| Mélange Digital" class="avatar" loading="lazy" src="/destination-marketing-agency/images/work/singapore-stb.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Singapore Tourism Board</p>\r
          <h3 class="heading-7">Singapore Tourism Board: "Is This Even Singapore?"</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           190M views. Total Indian arrivals grew 18% YoY; under-35 traveller share rose from 31% to 39%, across five creator-led subcultures.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">+18%</span>\r
            <span class="work-card-stat-label">YoY growth in total Indian arrivals to Singapore</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">+24pts</span>\r
            <span class="work-card-stat-label">&ldquo;Youth-relevant&rdquo; brand perception</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">190M+</span>\r
            <span class="work-card-stat-label">Views</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/hong-kong-tourism-board-herhongkong" class="work-card-link card-1 work-card--stats w-inline-block">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Hong Kong Tourism Board destination marketing campaign for Hong Kong | Mélange Digital" class="avatar" loading="lazy" src="/destination-marketing-agency/images/work/her-hong-kong-hktb.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Hong Kong Tourism Board</p>\r
          <h3 class="heading-7">Hong Kong Tourism Board: #HerHongKong</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           +22% YOY growth in South Indian female arrivals, driven by four actresses cast against real travel motivations. Average Length of Stay: 2 nights to 3 nights.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">+22%</span>\r
            <span class="work-card-stat-label">YOY growth in South Indian female arrivals</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">2–3 nights</span>\r
            <span class="work-card-stat-label">Average Length of Stay</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">+15pts</span>\r
            <span class="work-card-stat-label">Leisure Share of Indian Arrivals</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/zambia-tourism-otm-mumbai-2026" class="work-card-link card-1 work-card--stats w-inline-block">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Zambia Tourism Authority: OTM Mumbai" class="avatar" loading="lazy" src="/destination-marketing-agency/images/work/zambia-tourism.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Zambia Tourism Authority</p>\r
          <h3 class="heading-7">Zambia Tourism Authority: OTM Mumbai 2026</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           The client reported 500+ trade connections over a one-year mandate, approximately $3.2M from seven MICE groups (75–700 guests), and 18 influencers. The campaign also received the "Most Promising Destination" award on debut.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">Award</span>\r
            <span class="work-card-stat-label">Most Promising Destination on debut</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">500+</span>\r
            <span class="work-card-stat-label">trade connections</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">3 days</span>\r
            <span class="work-card-stat-label">on the floor</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/dharma-productions-x-singapore-tourism-board-jigra" class="work-card-link card-1 work-card--stats w-inline-block" hidden aria-hidden="true" data-work-hidden="1">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Singapore Tourism Board × Dharma Productions: Jigra" class="avatar" loading="lazy" src="/destination-marketing-agency/images/work/jigra-stb.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Singapore Tourism Board x Dharma Productions</p>\r
          <h3 class="heading-7">Dharma Productions – Singapore Tourism Board: Jigra</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           Over 50% of the film was shot in Singapore across seven landmarks. Six-plus follow-on production conversations generated.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">12%</span>\r
            <span class="work-card-stat-label">YOY tourism growth</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">50%</span>\r
            <span class="work-card-stat-label">of the film shot in Singapore</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">7</span>\r
            <span class="work-card-stat-label">landmarks</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/costa-cruises" class="work-card-link card-1 work-card--stats w-inline-block" hidden aria-hidden="true" data-work-hidden="1">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Costa Cruises: Introducing Luxury Cruising to India" class="avatar" loading="lazy" src="/destination-marketing-agency/images/work/costa-cruises.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Costa Cruises</p>\r
          <h3 class="heading-7">#NamasteFromCosta</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           Zero awareness in a market that had never experienced international cruising. We launched #NamasteFromCosta with 40+ creators across luxury, family, mom-blogging and solo travel cohorts, fusing global luxury with Indian hospitality, flagged by India's Union Shipping Minister and Italian dignitaries.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">9,000+</span>\r
            <span class="work-card-stat-label">qualified enquiries</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">$400K+</span>\r
            <span class="work-card-stat-label">attributed sales</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">17M</span>\r
            <span class="work-card-stat-label">reach</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/resorts-world-sentosa-go-bananas-in-minion-land" class="work-card-link card-1 work-card--stats w-inline-block">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Resorts World Sentosa: Go Bananas in Minion Land" class="avatar" loading="lazy" src="/destination-marketing-agency/images/work/resorts-world-sentosa.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Resorts World Sentosa</p>\r
          <h3 class="heading-7">&ldquo;Go Bananas in Minion Land&rdquo;</h3>\r
          <p class="work-card-description work-card-description--tall">\r
          USS wanted to drive bookings from affluent travellers beyond India's metros. We built a regional creator campaign across ShareChat and Moj in 15 states, using PayU audience data to reach the right travellers through five top creators with a combined 26 million followers. Resorts World Sentosa reported 4,927 direct bookings via a tracked booking link.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">+6.80%</span>\r
            <span class="work-card-stat-label">Lift in consideration to visit Minion Land</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">13.7M+</span>\r
            <span class="work-card-stat-label">Reach</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">4.75%</span>\r
            <span class="work-card-stat-label">Campaign-wide ER</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">86M+</span>\r
            <span class="work-card-stat-label">views</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">4,927</span>\r
            <span class="work-card-stat-label">direct bookings</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/mall-activation-for-saudi-tourism" class="work-card-link card-1 work-card--stats w-inline-block" hidden aria-hidden="true" data-work-hidden="1">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Riyadh skyline with Kingdom Centre for the mall activation campaign for Saudi Arabia Tourism" class="avatar" loading="lazy" src="https://res.cloudinary.com/dbhrpsnzg/image/upload/v1789710108/dzr088ftu02tfbcjqij4.png"/>\r
          </div>\r
          <p class="work-card-eyebrow">Mall Activation For Saudi Tourism</p>\r
          <h3 class="heading-7">Mall Activation</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           Saudi was fixed in the Indian mind as a religious destination. We designed a 4-day immersive activation at Phoenix Marketcity: a Saudi-architecture kiosk, dual LED displays, a chroma photo booth and scratch-and-win mechanic. Perception shifted. Saudi entered India's leisure conversation.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">400+</span>\r
            <span class="work-card-stat-label">walk-in registrations</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">1,200+</span>\r
            <span class="work-card-stat-label">e-visa enquiries</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">2.1M</span>\r
            <span class="work-card-stat-label">radio campaign reach</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/hong-kong-tourism-board-x-ram-charan-esquire-india-cover" class="work-card-link card-1 work-card--stats w-inline-block" hidden aria-hidden="true" data-work-hidden="1">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Hong Kong Tourism Board marketing campaign with influencer marketing| Mélange Digital" class="avatar work-img--esquire" loading="lazy" src="/destination-marketing-agency/images/work/ram-charan-hktb.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Hong Kong Tourism Board x Esquire India x Ram Charan</p>\r
          <h3 class="heading-7">Esquire Cover</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           HKTB wanted credibility in South India's luxury market without paying for a celebrity endorsement. We created an Esquire India cover story with Ram Charan at Rosewood Hong Kong, giving every partner something valuable while avoiding a traditional talent fee.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">$2.5M</span>\r
            <span class="work-card-stat-label">earned media value</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">~10X</span>\r
            <span class="work-card-stat-label">ROI on HKTB investment</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/resorts-world-cruises-premium-cruise-launch-dubai" class="work-card-link card-1 work-card--stats w-inline-block">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Dream Cruises (campaign ran as Resorts World Cruises): Maiden GCC Launch" class="avatar work-img--gcc" loading="lazy" src="/destination-marketing-agency/images/work/resorts-world-cruises.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Dream Cruises (campaign ran as Resorts World Cruises)</p>\r
          <h3 class="heading-7">Dream Cruises (campaign ran as Resorts World Cruises): Maiden GCC Launch</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           $2.3M+ in attributed sales, 90M+ impressions, 250K+ clicks and 44 creators. The campaign ran as Resorts World Cruises.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">$2.3M+</span>\r
            <span class="work-card-stat-label">attributed sales</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">90M+</span>\r
            <span class="work-card-stat-label">impressions</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">250K+</span>\r
            <span class="work-card-stat-label">clicks</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
\r
       <a href="/work/singapore-tourism-board-x-divine-saucy-music-video" class="work-card-link card-1 work-card--stats w-inline-block" hidden aria-hidden="true" data-work-hidden="1">\r
         <div class="small-card">\r
          <div class="div-block-196">\r
           <img alt="Singapore Tourism Board × DIVINE: Saucy" class="avatar" loading="lazy" src="/destination-marketing-agency/images/work/divine-stb.webp"/>\r
          </div>\r
          <p class="work-card-eyebrow">Singapore Tourism Board x DIVINE</p>\r
          <h3 class="heading-7">&ldquo;Saucy&rdquo; Music Video</h3>\r
          <p class="work-card-description work-card-description--tall">\r
           STB needed to stay culturally relevant to India's under-35 without running a tourism ad. We took the proposal to STB to underwrite DIVINE's &ldquo;Saucy&rdquo; for Gully Gang and led the destination integration across six of Singapore's own most iconic landmarks.\r
          </p>\r
          <div class="work-card-stats">\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">+21pts</span>\r
            <span class="work-card-stat-label">youth-cohort Singapore travel affinity</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">50M+</span>\r
            <span class="work-card-stat-label">Views</span>\r
           </div>\r
           <div class="work-card-stat">\r
            <span class="work-card-stat-value">5.45%</span>\r
            <span class="work-card-stat-label">ER</span>\r
           </div>\r
          </div>\r
         </div>\r
       </a>\r
      </div>\r
      </div>\r
      <p class="work-view-all-wrap">\r
       <a class="work-view-all" href="/work">View All Case Studies</a>\r
      </p>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-awards-section" id="award">\r
    <div class="w-layout-blockcontainer container-6 w-container">\r
        <div class="awards-header">\r
            <h2 class="achevement-heading-h2">\r
                Recognised, <span class="text-span-16">Repeatedly.</span>\r
            </h2>\r
            <h3 class="awards-intro">\r
                Industry awards across creativity, AI in marketing, brand impact and influencer marketing.\r
            </h3>\r
        </div>\r
        <div class="awards-marquee">\r
            <div class="awards-track awards-track-left">\r
                <div class="awards-row">\r
                    <article class="award-card">\r
                        <span class="award-accent"></span>\r
                        <div class="award-icon award-icon--dark award-icon--wide">\r
                            <img class="award-icon-img" src="/destination-marketing-agency/images/awards/Brandwink.png" alt="India Business Awards 2025 badge, presented by Blindwink, awarded to Mélange Digital for Most Impactful Full-Service Marketing Agency" loading="lazy">\r
                        </div>\r
                        <div class="award-event">India Business Awards 2025</div>\r
                        <h3>Most impactful full-service marketing agency in 2025</h3>\r
                    </article>\r
                    <article class="award-card">\r
                        <span class="award-accent"></span>\r
                        <div class="award-icon award-icon--dark">\r
                            <img class="award-icon-img" src="/destination-marketing-agency/images/awards/brand-impact-award.png" alt="Brand Impact Award 2024 badge awarded to Mélange Digital for outstanding contribution to nation building" loading="lazy">\r
                        </div>\r
                        <div class="award-event">Brand Impact Award 2024</div>\r
                        <h3>Outstanding professional achievement and contribution towards nation building</h3>\r
                    </article>\r
                    <article class="award-card">\r
                        <span class="award-accent"></span>\r
                        <div class="award-icon award-icon--dark">\r
                            <img class="award-icon-img" src="/destination-marketing-agency/images/awards/asia-leadership-awards.png" alt="Asia Leadership Award 2024 badge awarded to Mélange Digital for Best Use of AI in Marketing" loading="lazy">\r
                        </div>\r
                        <div class="award-event">Asia Leadership Award 2024</div>\r
                        <h3>Best use of AI in marketing</h3>\r
                    </article>\r
                    <article class="award-card" aria-hidden="true">\r
                        <span class="award-accent"></span>\r
                        <div class="award-icon award-icon--dark award-icon--wide">\r
                            <img class="award-icon-img" src="/destination-marketing-agency/images/awards/Brandwink.png" alt="India Business Awards 2025 badge, presented by Blindwink, awarded to Mélange Digital for Most Impactful Full-Service Marketing Agency" loading="lazy">\r
                        </div>\r
                        <div class="award-event">India Business Awards 2025</div>\r
                        <h3>Most impactful full-service marketing agency in 2025</h3>\r
                    </article>\r
                    <article class="award-card" aria-hidden="true">\r
                        <span class="award-accent"></span>\r
                        <div class="award-icon award-icon--dark">\r
                            <img class="award-icon-img" src="/destination-marketing-agency/images/awards/brand-impact-award.png" alt="Brand Impact Award 2024 badge awarded to Mélange Digital for outstanding contribution to nation building" loading="lazy">\r
                        </div>\r
                        <div class="award-event">Brand Impact Award 2024</div>\r
                        <h3>Outstanding professional achievement and contribution towards nation building</h3>\r
                    </article>\r
                    <article class="award-card" aria-hidden="true">\r
                        <span class="award-accent"></span>\r
                        <div class="award-icon award-icon--dark">\r
                            <img class="award-icon-img" src="/destination-marketing-agency/images/awards/asia-leadership-awards.png" alt="Asia Leadership Award 2024 badge awarded to Mélange Digital for Best Use of AI in Marketing" loading="lazy">\r
                        </div>\r
                        <div class="award-event">Asia Leadership Award 2024</div>\r
                        <h3>Best use of AI in marketing</h3>\r
                    </article>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>\r
\r
<section class="home-network-section about-voices" id="network">\r
    <div class="w-layout-blockcontainer container-4 w-container">\r
     <div class="network-layout">\r
      <div class="network-layout__copy">\r
       <h2 class="about-h2">Access India's biggest <span class="about-accent">Cultural Voices</span></h2>\r
       <p class="about-lede">Spanning Bollywood, Regional Cinema, OTT, Hip-hop, Cricket, Comedy, Fashion, Food, Travel, Tech — from India's metros and Tier 2 &amp; 3, to the GCC, UK &amp; Europe, Southeast Asia, Russia &amp; CIS, West &amp; South Africa.</p>\r
       <ul class="about-voices__stats">\r
        <li class="about-voices__stat">\r
         <p class="about-voices__stat-value" data-melange-count data-count="5000" data-suffix="+">5,000+</p>\r
         <p class="about-voices__stat-label">creators and celebs</p>\r
        </li>\r
        <li class="about-voices__stat">\r
         <p class="about-voices__stat-detail">62.3% average authentic-audience score across markets</p>\r
        </li>\r
       </ul>\r
      </div>\r
      <div class="network-sphere-wrap">\r
       <div class="network-sphere" data-network-sphere role="img" aria-label="Interactive sphere of creator and campaign photos. Drag to rotate."></div>\r
      </div>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-global-section" id="global-reach">\r
    <div class="w-layout-blockcontainer container-4 w-container">\r
     <div class="global-reach-stack">\r
      <h2 class="home-heading-h2 home-global-heading">Local Agency <span class="span-txt">Global Reach</span></h2>\r
      <p class="descp global-reach-desc"><span class="span-txt">India outbound travel marketing</span> across six markets</p>\r
                        <figure class="global-reach-visual">\r
       <img class="global-reach-map" alt="Mélange offices in India, United Kingdom, Portugal, United Arab Emirates, Singapore, and Zambia" loading="lazy" width="2800" height="958" src="/destination-marketing-agency/images/global/world-map-reach.png?v=20260826i"/>\r
      </figure>\r
      <div class="global-reach-cta-wrap">\r
       <a class="button hero-download-btn w-inline-block" href="/about">\r
        <div class="text-block-6">More About Us</div>\r
        <span class="hero-btn-icon" aria-hidden="true">\r
         <img alt="" loading="lazy" src="/destination-marketing-agency/images/arrow-top-right-purple.svg" width="12"/>\r
        </span>\r
       </a>\r
      </div>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-report-promo-section" id="report">\r
    <div class="w-layout-blockcontainer container-4 w-container">\r
     <header class="report-promo-header">\r
      <h2 class="crafting-heading report-promo-heading">The Report <span class="span-txt">Tourism Boards</span> Trust</h2>\r
      <p class="descp report-promo-desc">We surveyed 4,200 Indian outbound-eligible travellers across 12 cities to find out what actually triggers a destination decision. Download the India Outbound Inspiration Report 2026 for free.</p>\r
     </header>\r
     <div class="report-promo-carousel" data-report-carousel>\r
      <div class="report-promo-slides">\r
       <article class="report-promo-card" data-report-slide>\r
        <div class="report-promo-grid">\r
         <div class="report-promo-copy">\r
          <h3 class="report-promo-card__title">The Indian Outbound Inspiration Report 2026</h3>\r
          <ul class="report-promo-benefits__list">\r
           <li>The full India Outbound Inspiration Report 2026, 4,200 respondents, 12 cities, T1 through T3</li>\r
           <li>Which inspiration channels move Indian travellers to consider new destinations</li>\r
           <li>Which of the six Indian traveller cohorts is most likely to choose your destination</li>\r
           <li>A follow-up from the Mélange team if you want to talk through the implications</li>\r
          </ul>\r
          <a class="button hero-download-btn report-promo-download w-inline-block" href="/?report=indian-outbound-2026#report-access">\r
           <div class="text-block-6">Download the Report</div>\r
           <span class="hero-btn-icon" aria-hidden="true">\r
            <img alt="" loading="lazy" src="/destination-marketing-agency/images/arrow-top-right-purple.svg" width="12"/>\r
           </span>\r
          </a>\r
         </div>\r
         <div class="report-promo-visual">\r
          <div class="report-promo-stack">\r
           <div class="report-promo-stack__frame">\r
            <span class="report-promo-stack__layer report-promo-stack__layer--grey" aria-hidden="true"></span>\r
            <span class="report-promo-stack__layer report-promo-stack__layer--purple" aria-hidden="true"></span>\r
            <img class="report-promo-stack__photo" alt="The Indian Outbound Inspiration Report 2026 on a desk" loading="lazy" width="440" height="400" src="/destination-marketing-agency/images/report/report-desk-cover.png?v=20260821d"/>\r
           </div>\r
          </div>\r
         </div>\r
        </div>\r
       </article>\r
       <article class="report-promo-card" data-report-slide hidden>\r
        <div class="report-promo-grid">\r
         <div class="report-promo-copy">\r
          <h3 class="report-promo-card__title">Next report — coming soon</h3>\r
          <ul class="report-promo-benefits__list">\r
           <li>Full report download once it goes live</li>\r
           <li>Audience and market findings for a new travel brief</li>\r
           <li>Cohort and channel takeaways boards can act on</li>\r
           <li>A follow-up from the Mélange team when you’re ready</li>\r
          </ul>\r
          <button class="button hero-download-btn report-promo-download" type="button" disabled>\r
           <div class="text-block-6">Coming soon</div>\r
           <span class="hero-btn-icon" aria-hidden="true">\r
            <img alt="" loading="lazy" src="/destination-marketing-agency/images/arrow-top-right-purple.svg" width="12"/>\r
           </span>\r
          </button>\r
         </div>\r
         <div class="report-promo-visual">\r
          <div class="report-promo-stack">\r
           <div class="report-promo-stack__frame">\r
            <span class="report-promo-stack__layer report-promo-stack__layer--grey" aria-hidden="true"></span>\r
            <span class="report-promo-stack__layer report-promo-stack__layer--purple" aria-hidden="true"></span>\r
            <div class="report-promo-stack__photo report-promo-stack__photo--placeholder" role="img" aria-label="Second report coming soon">Coming soon</div>\r
           </div>\r
          </div>\r
         </div>\r
        </div>\r
       </article>\r
      </div>\r
      <button class="work-carousel-nav work-carousel-nav--prev" type="button" data-report-prev aria-label="Previous report">\r
       <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M15.5 5.5L9 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
      </button>\r
      <button class="work-carousel-nav work-carousel-nav--next" type="button" data-report-next aria-label="Next report">\r
       <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M8.5 5.5L15 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
      </button>\r
     </div>\r
    </div>\r
   </section>\r
\r
\r
<section class="home-testimonial-stagger-section">\r
    <div class="testimonial-stagger-container">\r
     <div class="testimonial-stagger-header">\r
      <h2 class="testimonial-heading-h2">\r
       Here's what our <span class="span-txt">clients&nbsp;say</span>\r
      </h2>\r
     </div>\r
\r
     <div class="testimonial-stagger-carousel">\r
      <div class="testimonial-stagger-stage" id="staggerStage">\r
      </div>\r
      <button class="work-carousel-nav work-carousel-nav--prev" id="staggerPrev" type="button" aria-label="Previous testimonial">\r
       <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M15.5 5.5L9 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
      </button>\r
      <button class="work-carousel-nav work-carousel-nav--next" id="staggerNext" type="button" aria-label="Next testimonial">\r
       <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M8.5 5.5L15 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
      </button>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="section-8" id="faq">\r
    <div class="w-layout-blockcontainer container-10 w-container">\r
     <div class="w-layout-grid grid-16">\r
      <h2 class="heading-20" data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da5f">FAQs</h2>\r
     </div>\r
     <div class="div-block-41 faq-list" id="faqList" data-faq-collapsed="true">\r
\r
      <div class="accordian-item w-dropdown" data-delay="0" data-hover="false" data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da66">\r
       <div class="accordion-toggle w-dropdown-toggle" role="button" tabindex="0" aria-expanded="false">\r
        <h3 class="text-block-30">What does a travel marketing agency do?</h3>\r
        <div class="accordian-icon w-icon-dropdown-toggle"></div>\r
       </div>\r
       <div class="dropdown-list w-dropdown-list">\r
        <div class="text-block-34">\r
         A travel marketing agency turns a destination or travel brand into a choice travellers actively make. It maps the audience's cultural passions, builds a story inside them, casts the right creators, then engineers the path from that story to a booked trip. Success is measured in arrivals, not impressions.\r
        </div>\r
       </div>\r
      </div>\r
\r
      <div class="accordian-item w-dropdown" data-delay="0" data-hover="false" data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da70">\r
       <div class="accordion-toggle w-dropdown-toggle" role="button" tabindex="0" aria-expanded="false">\r
        <h3 class="text-block-30">How is a travel marketing agency different from a regular ad agency?</h3>\r
        <div class="accordian-icon w-icon-dropdown-toggle"></div>\r
       </div>\r
       <div class="dropdown-list w-dropdown-list">\r
        <div class="text-block-35">\r
         A regular ad agency buys media and hopes it lands. A travel marketing agency starts with why a destination matters to a specific audience, builds the story inside that culture, then engineers the path to a booked trip. The difference shows up in arrivals, not just impressions.\r
        </div>\r
       </div>\r
      </div>\r
\r
      <div class="accordian-item w-dropdown" data-delay="0" data-hover="false" data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da7a">\r
       <div class="accordion-toggle w-dropdown-toggle" role="button" tabindex="0" aria-expanded="false">\r
        <h3 class="text-block-30">Do travel marketing agencies work with national tourism boards?</h3>\r
        <div class="accordian-icon w-icon-dropdown-toggle"></div>\r
       </div>\r
       <div class="dropdown-list w-dropdown-list">\r
        <div class="text-block-36">\r
         Yes. Mélange works directly with national tourism boards and destination marketing organisations, including Singapore Tourism Board, Hong Kong Tourism Board, and Saudi Tourism Authority to name a few. Our campaigns are built to survive board-level scrutiny: measurable arrivals, clear attribution, and outcomes a minister can report upward.\r
        </div>\r
       </div>\r
      </div>\r
\r
      <div class="accordian-item w-dropdown faq-item--extra" data-delay="0" data-hover="false" data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da84">\r
       <div class="accordion-toggle w-dropdown-toggle" role="button" tabindex="0" aria-expanded="false">\r
        <h3 class="text-block-30">What results can a destination expect from travel advertising?</h3>\r
        <div class="accordian-icon w-icon-dropdown-toggle"></div>\r
       </div>\r
       <div class="dropdown-list w-dropdown-list">\r
        <div class="text-block-37">\r
         Real travel advertising is measured in arrivals and bookings, not clicks or views. Mélange's campaigns have driven double-digit YOY arrival growth and multi-million-dollar attributed sales for tourism boards and travel brands. Every campaign is built around a specific, trackable outcome agreed before work begins.\r
        </div>\r
       </div>\r
      </div>\r
\r
      <div class="accordian-item w-dropdown faq-item--extra" data-delay="0" data-hover="false" data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da8e">\r
       <div class="accordion-toggle w-dropdown-toggle" role="button" tabindex="0" aria-expanded="false">\r
        <h3 class="text-block-30">How much does it cost to work with a travel and tourism marketing agency?</h3>\r
        <div class="accordian-icon w-icon-dropdown-toggle"></div>\r
       </div>\r
       <div class="dropdown-list w-dropdown-list">\r
        <div class="text-block-38">\r
         Cost depends on the mandate: a single campaign, a market launch, or an ongoing retainer all price differently. Mélange scopes every engagement around the board or brand's specific goals rather than a flat package. The fastest way to get a real number is a strategy call.\r
        </div>\r
       </div>\r
      </div>\r
\r
      <button type="button" class="faq-more-btn" id="faqMoreBtn" aria-expanded="false" aria-controls="faqList">\r
       <span class="faq-more-btn__label">Show all questions</span>\r
       <span class="faq-more-btn__icon" aria-hidden="true"></span>\r
      </button>\r
\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-report-access-section" id="report-access">\r
    <div class="w-layout-blockcontainer container-4 w-container">\r
     <div class="report-access-shell">\r
      <div class="report-access-copy">\r
       <header class="report-access-header">\r
        <h2 class="crafting-heading leadform-heading report-access-heading">\r
         The Report <span class="span-txt">Tourism Boards</span> Trust\r
        </h2>\r
        <p class="leadform-copy report-access-intro">\r
         We surveyed 4,200 Indian outbound-eligible travellers across 12 cities to find out what actually triggers a destination decision. Download the India Outbound Inspiration Report 2026 for free.\r
        </p>\r
       </header>\r
       <p class="leadform-copy leadform-whatyouget-title report-access-benefits-title">What you get:</p>\r
       <ul class="report-promo-benefits__list report-access-benefits">\r
        <li>The full India Outbound Inspiration Report 2026: 4,200 respondents, 12 cities, T1 through T3</li>\r
        <li>Which inspiration channels move Indian travellers to consider new destinations</li>\r
        <li>Which of the six Indian traveller cohorts is most likely to choose your destination</li>\r
        <li>A follow-up from the Mélange team if you want to talk through the implications</li>\r
       </ul>\r
       <div class="leadform-contact-line report-access-meta">\r
        <a class="leadform-contact-item" href="mailto:hello@melangedigital.co">hello@melangedigital.co</a>\r
        <span class="leadform-contact-sep" aria-hidden="true">|</span>\r
        <span class="leadform-contact-item">+91 93725 67722</span>\r
       </div>\r
      </div>\r
      <div class="report-access-form" id="report-form-mount" aria-label="Report download form"></div>\r
     </div>\r
    </div>\r
   </section>\r
\r
<section class="home-prefooter-cta">\r
    <img class="home-prefooter-cta__bg" src="/assets/Footers/home footer.webp" alt="Traveller overlooking a turquoise alpine lake and snow-capped mountains, representing the bucket-list destinations Mélange Digital's travel marketing agency helps promote" loading="lazy"/>\r
    <div class="w-layout-blockcontainer container-4 w-container">\r
     <h2 class="home-heading-h2 home-prefooter-heading">India Is Choosing. <span class="span-txt">Be the Choice.</span></h2>\r
     <a class="button hero-download-btn home-prefooter-btn w-inline-block" href="/contact">\r
      <div class="text-block-6">Get In Touch</div>\r
      <span class="hero-btn-icon" aria-hidden="true">\r
       <img alt="" loading="lazy" src="/destination-marketing-agency/images/arrow-top-right-purple.svg" width="12"/>\r
      </span>\r
     </a>\r
    </div>\r
   </section>\r
\r
   </div>\r
  <button type="button" class="back-to-top" id="backToTop" aria-label="Back to top" hidden>\r
   <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">\r
    <path d="M12 5l-7 7h4.5v7h5v-7H19l-7-7z" fill="currentColor"/>\r
   </svg>\r
   <span>Back to top</span>\r
  </button>\r
`,i="/destination-marketing-agency",g=[`${i}/css/melange-shared.css?v=20260724e`,`${i}/css/form.css?v=20260724e`,`${i}/css/melange.css?v=20260915t`],N=[`${i}/js/jquery.js?site=6a2fe655a827b7d915b35c60`,`${i}/js/melange.schunk.36b8fb49256177c8.js`,`${i}/js/melange.schunk.435a162c7a78ae40.js`,`${i}/js/gsap.min.js`,`${i}/js/splittext.min.js`,`${i}/js/scrolltrigger.min.js`,`${i}/js/site-home.js`,"https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.umd.js","/about/network-sphere.js?v=20260902f",`${i}/js/melange.js?v=20260915r`];function F(a){const r=document.querySelector(`link[href="${a}"]`);return r?r.sheet?Promise.resolve():new Promise(s=>{r.addEventListener("load",()=>s(),{once:!0}),r.addEventListener("error",()=>s(),{once:!0})}):new Promise(s=>{const n=document.createElement("link");n.rel="stylesheet",n.href=a,n.setAttribute("data-dma-css",a),n.onload=()=>s(),n.onerror=()=>s(),document.head.appendChild(n)})}function O(a){return new Promise((r,s)=>{const n=document.createElement("script");n.src=a,n.async=!1,n.setAttribute("data-dma-js","1"),n.onload=()=>r(),n.onerror=()=>s(new Error(`Failed to load ${a}`)),document.body.appendChild(n)})}function v(a){var r;(r=document.getElementById("boot-loader"))==null||r.classList.toggle("hidden",!a)}function w(){document.querySelectorAll("script[data-dma-js]").forEach(a=>a.remove())}const K=()=>{const a=t.useRef(null),r=t.useRef(0),[s,n]=t.useState(()=>u(g)),[l,k]=t.useState(null);return t.useLayoutEffect(()=>{u(g)||v(!0)},[]),t.useEffect(()=>{document.documentElement.classList.add("w-mod-js"),document.body.classList.add("body","dma-react");let o=document.querySelector("base[data-dma-base]");o||(o=document.createElement("base"),o.setAttribute("data-dma-base","1"),document.head.insertBefore(o,document.head.firstChild)),o.setAttribute("href",`${i}/`);const p=++r.current;let d=!1;return(async()=>{if(w(),u(g)||n(!1),await Promise.all(g.map(F)),d||r.current!==p||(n(!0),v(!1),await S(),d||r.current!==p))return;const m=`dma=${p}`;try{await Promise.all(N.map(c=>{const f=c.includes("?")?"&":"?";return O(`${c}${f}${m}`)}))}catch(c){d||console.error("[Home]",c)}})(),()=>{d=!0,v(!1),document.body.classList.remove("body","dma-react"),document.querySelectorAll("base[data-dma-base]").forEach(m=>m.remove()),w()}},[]),t.useEffect(()=>{const o=B();o&&C(o)},[]),t.useEffect(()=>{!s||!a.current||k(a.current.querySelector("#report-form-mount"))},[s]),e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx("title",{children:"Global Travel & Tourism Marketing Agency | Mélange Digital"}),e.jsx("meta",{name:"description",content:"Mélange Digital helps tourism boards and travel brands worldwide turn cultural insight into arrivals through travel marketing. Book a call."}),e.jsx("link",{rel:"canonical",href:"https://melangedigital.co/","data-rh":"true"}),e.jsx("base",{href:"/destination-marketing-agency/"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:url",content:"https://melangedigital.co/"}),e.jsx("meta",{property:"og:title",content:"Global Travel & Tourism Marketing Agency | Mélange Digital"}),e.jsx("meta",{property:"og:description",content:"Mélange Digital helps tourism boards and travel brands worldwide turn cultural insight into arrivals through travel marketing. Book a call."}),e.jsx("meta",{property:"og:image",content:"https://melangedigital.co/og-home.png"}),e.jsx("meta",{property:"og:image:width",content:"1200"}),e.jsx("meta",{property:"og:image:height",content:"632"}),e.jsx("meta",{property:"og:image:alt",content:"Mélange Digital — Travel & Tourism Marketing Agency"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:image",content:"https://melangedigital.co/og-home.png"}),e.jsx("style",{type:"text/css",children:`
          /* Safety: hide leftover Webflow nav if cached markup still has it */
          body.dma-react .div-block-47,
          body.dma-react .mobile-menu-overlay,
          body.dma-react #mobileNavDrawer {
            display: none !important;
          }
          body.dma-react .font-bricolage.fixed {
            z-index: 100 !important;
          }
          body.dma-react .font-bricolage.fixed,
          body.dma-react .font-bricolage.fixed *,
          body.dma-react > .font-bricolage,
          body.dma-react > .font-bricolage * {
            font-family: "Bricolage Grotesque", sans-serif !important;
          }
          body.dma-react .font-bricolage.fixed a,
          body.dma-react > .font-bricolage a {
            text-decoration: none !important;
            color: inherit;
          }
          body.dma-react {
            --nav-sticky-offset: 64px;
            --hero-pad-top: 24px;
            padding-top: 4rem;
          }
          @media (min-width: 640px) {
            body.dma-react {
              --nav-sticky-offset: 84.8px;
              padding-top: 5.3rem;
            }
          }
          /* What We Do subheader single line on desktop */
          body.dma-react .home-audiences-section .innovation-heading-wrap {
            max-width: none !important;
          }
          body.dma-react .home-audiences-section .audiences-section-sub {
            max-width: none !important;
            white-space: nowrap !important;
          }
          @media (max-width: 991px) {
            body.dma-react .home-audiences-section .audiences-section-sub {
              white-space: normal !important;
            }
          }
          /* FAQ card styling sync with Services */
          body.dma-react .section-8 .accordion-toggle .text-block-30 {
            font-size: 18px !important;
            font-weight: 500 !important;
            line-height: 1.4 !important;
          }
          body.dma-react .section-8 .faq-more-btn {
            align-self: center !important;
          }
        `})]}),e.jsx(x,{}),e.jsx("div",{id:"siteNav",className:"pointer-events-none invisible fixed top-0 left-0 z-0 w-full h-16 sm:h-[5.3rem]","aria-hidden":"true"}),e.jsx("div",{ref:a,className:`dma-react-root${s?" dma-css-ready":""}`,dangerouslySetInnerHTML:{__html:P}}),l?z.createPortal(e.jsx(W,{}),l):null,e.jsx(_,{})]})};export{K as default};
