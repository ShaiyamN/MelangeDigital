import{r as n,j as e,W as F,N as _,i as A,F as O}from"./index-CuKC8I8T.js";import{p as N}from"./index-UoIplL0Z.js";const G=()=>{const m=({number:t,suffix:i,label:o})=>{const[c,p]=n.useState(0);return n.useEffect(()=>{let l=0;const d=t/(1200/16),f=setInterval(()=>{l+=d,l>=t?(p(t),clearInterval(f)):p(Math.floor(l))},16);return()=>clearInterval(f)},[t]),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("h3",{style:{fontSize:"clamp(36px, 6vw, 64px)",fontWeight:800,margin:0,color:"#7a1ef1"},children:[c,e.jsx("span",{style:{fontSize:"clamp(18px, 3vw, 32px)",marginLeft:"6px"},children:i})]}),e.jsx("p",{style:{marginTop:"10px",fontSize:"clamp(14px, 1.5vw, 18px)",fontWeight:500,color:"#333"},children:o})]})},[y,v]=n.useState(null),[R,x]=n.useState(!1),[C,I]=n.useState(!1),[g,w]=n.useState(!1),[j,S]=n.useState(""),[E,T]=n.useState(!1);n.useEffect(()=>{const t=()=>{T(window.innerWidth<576)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const P=t=>{v(t),x(!1),setTimeout(()=>x(!0),60)},k=()=>{x(!1),setTimeout(()=>v(null),260)},W=async t=>{t.preventDefault(),S(""),w(!0);try{const i=t.currentTarget,o=new FormData(i);await fetch("https://crm.zoho.in/crm/WebToLeadForm",{method:"POST",mode:"no-cors",body:o}),I(!0),i.reset()}catch{S("Something went wrong. Please try again.")}finally{w(!1)}},z=[{frontTitle:`Media Relations
& Digital PR`,image:"/influencer_marketing/img/images/Media_Relations_Digital_PR.png",emoji:"📰",title:"Media Relations & Digital PR",desc:"Build credibility through strategic media partnerships and digital presence",list:["Media outlet relationship building and management","Tailored digital PR strategies","Journalist and editor outreach programs","Feature placement and story pitching","Brand visibility enhancement campaigns","Credibility-building media presence","Compelling press release writing and editing","Newsworthy angle development","Strategic distribution to target media outlets","Coverage tracking and reporting"]},{frontTitle:`Online Reputation
& Influencer Management`,image:"/influencer_marketing/img/images/Online_Reputation _Influencer_Management.png",emoji:"🌐",title:"Online Reputation & Influencer Management",desc:"Monitor your brand image and leverage trusted voices for impact",list:["Continuous online presence monitoring","Feedback and review management","Crisis communication and response strategies","Positive image cultivation across platforms","Brand sentiment analysis and tracking","Influencer identification and vetting","Celebrity partnership strategy and negotiation","Campaign collaboration and management","Brand-aligned partnership activation","Performance tracking and ROI measurement"]},{frontTitle:`Event Publicity
& IP Development`,image:"/influencer_marketing/img/images/Event_Publicity_IP_Development.jpeg",emoji:"🎤",title:"Event Publicity & IP Development",desc:"Comprehensive event management and intellectual property strategy",list:["Event strategy and concept development","Pre-event publicity and media outreach","Logistics management and execution","Real-time social media coverage","Post-event content and coverage amplification","Intellectual property development strategy","Licensing opportunity identification","Partnership and deal negotiation","IP portfolio management and protection","Creative asset monetization strategies"]},{frontTitle:`Sponsorship Strategy
& Media Analytics`,image:"/influencer_marketing/img/images/Sponsorship_Strategy_Media_Analytics.jpeg",emoji:"📈",title:"Sponsorship Strategy & Media Analytics",desc:"Strategic sponsorships and insights that optimize your PR impact",list:["Sponsorship opportunity identification and evaluation","Brand-aligned partnership selection","Negotiation and relationship management","Activation strategy and execution","Comprehensive media coverage tracking","Brand mention and sentiment analysis","Competitive PR performance benchmarking","Share of voice measurement","Strategic reporting and insights","Data-informed PR strategy optimization"]}],s=y!==null?z[y]:null,[M,L]=n.useState(0);return e.jsxs("div",{className:"overflow-hidden",children:[e.jsxs(F,{children:[e.jsx("title",{children:"PR & Outreach Services | Mélange Digital"}),e.jsx("meta",{name:"description",content:"Travel PR and outreach for tourism boards and travel brands. Media, FAM trips, and industry visibility from Mélange Digital."}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap",rel:"stylesheet"}),e.jsx("link",{rel:"canonical",href:"https://melangedigital.co/services/pr-and-outreach"}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://melangedigital.co/services/pr-and-outreach#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://melangedigital.co/services" },
          { "@type": "ListItem", "position": 3, "name": "PR & Outreach", "item": "https://melangedigital.co/services/pr-and-outreach" }
        ]
      }
    `}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://melangedigital.co/services/pr-and-outreach#webpage",
        "url": "https://melangedigital.co/services/pr-and-outreach",
        "name": "PR & Outreach Services | Mélange Digital",
        "description": "Travel PR and outreach for tourism boards and travel brands from Mélange Digital.",
        "isPartOf": { "@type": "WebSite", "@id": "https://melangedigital.co/#website" },
        "breadcrumb": { "@id": "https://melangedigital.co/services/pr-and-outreach#breadcrumb" },
        "inLanguage": "en-US"
      }
    `}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://melangedigital.co/services/pr-and-outreach#service",
        "name": "PR & Outreach Services",
        "url": "https://melangedigital.co/services/pr-and-outreach",
        "description": "Mélange Digital runs PR, FAM trips, and outreach for tourism boards and travel brands.",
        "provider": {
          "@type": "Organization",
          "name": "Mélange Digital",
          "url": "https://melangedigital.co",
          "logo": "https://melangedigital.co/logo.png",
          "telephone": "+919372567722",
          "email": "hello@melangedigital.co",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "B12, 7th Floor, Silvio Heights, St. Inez Road, Santa Inez",
            "addressLocality": "Panaji",
            "addressRegion": "Goa",
            "postalCode": "403001",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Africa" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PR & Outreach Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Travel PR", "description": "Media relations and industry coverage for tourism boards and travel brands." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FAM Trips & Outreach", "description": "Hosted press and creator trips that generate authentic destination coverage." } }
          ]
        }
      }
    `})]}),e.jsx("style",{children:`
        * { box-sizing: border-box; }

        #counter-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; text-align: center; }
        @media (max-width: 768px) { #counter-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
        @media (max-width: 400px) { #counter-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }

        #about-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 60px; align-items: start; }
        @media (max-width: 992px) { #about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 576px) { #about h2 { font-size: 36px !important; } }

        #service-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        @media (max-width: 1200px) { #service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (max-width: 576px) { #service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; } }
        @media (max-width: 576px) { #service h2 { font-size: 32px !important; } }

        .service-card { height: 420px; }
        @media (max-width: 576px) { .service-card { height: 280px; } }

        .popup-inner { width: min(90vw, 600px); height: min(85vh, 700px); perspective: 1400px; }
        @media (max-width: 576px) { .popup-inner { width: 95vw; height: 90vh; } }

        #project-body-grid { display: grid; grid-template-columns: 1fr 500px; gap: 40px; }
        @media (max-width: 900px) { #project-body-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 576px) { #project h2 { font-size: 38px !important; } }

        #features-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        @media (max-width: 1100px) { #features-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (max-width: 576px) { #features-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1100px) { #features h2 { font-size: 42px !important; } }
        @media (max-width: 768px) { #features h2 { font-size: 34px !important; } }

        #contact-grid { display: grid; grid-template-columns: 5fr 7fr; gap: 40px; align-items: start; }
        @media (max-width: 1024px) { #contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 576px) { #contact h2 { font-size: 36px !important; } }

        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }

        @media (max-width: 1024px) { #testi p { max-width: 320px !important; font-size: 17px !important; } }
        @media (max-width: 640px) { #testi p { max-width: 340px !important; font-size: 16px !important; } }
      `}),e.jsx(_,{}),e.jsxs("section",{className:"bsm-section",children:[e.jsx("div",{className:"bsm-grid-bg"}),e.jsx("div",{className:"bsm-tl-ring bsm-tl-ring-1"}),e.jsx("div",{className:"bsm-tl-ring bsm-tl-ring-2"}),e.jsx("div",{className:"bsm-bl-dot"}),e.jsxs("div",{className:"bsm-inner",children:[e.jsxs("div",{className:"bsm-text",children:[e.jsx("h1",{className:"bsm-heading",children:"CREDIBILITY"}),e.jsx("h2",{className:"bsm-subheading",children:"IS EVERYTHING"})]}),e.jsxs("div",{className:"bsm-visual",children:[e.jsxs("svg",{className:"bsm-rings-svg",viewBox:"0 0 820 820",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"g1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#d63cff"}),e.jsx("stop",{offset:"100%",stopColor:"#6a39ff"})]}),e.jsxs("linearGradient",{id:"g2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#c53bff"}),e.jsx("stop",{offset:"100%",stopColor:"#375dff"})]})]}),e.jsx("circle",{cx:"430",cy:"405",r:"215",stroke:"url(#g1)",strokeWidth:"28",fill:"none"}),e.jsx("circle",{cx:"515",cy:"430",r:"225",stroke:"url(#g2)",strokeWidth:"28",fill:"none"})]}),e.jsx("div",{className:"bsm-stripe-circle"}),e.jsx("div",{className:"bsm-img bsm-img-top",children:e.jsx("img",{src:"/influencer_marketing/img/images/pr1.jpg",alt:"PR visual 1"})}),e.jsx("div",{className:"bsm-img bsm-img-middle",children:e.jsx("img",{src:"/influencer_marketing/img/images/pr2.jpg",alt:"PR visual 2"})}),e.jsx("div",{className:"bsm-img bsm-img-bottom",children:e.jsx("img",{src:"/influencer_marketing/img/images/pr3.png",alt:"PR visual 3"})})]})]}),e.jsx("style",{children:`
    .bsm-section {
      position: relative;
      width: 100%;
      height: 100vh;
      background: #f7f6f8;
      overflow: hidden;
      display: flex;
      align-items: center;
    }

    .bsm-grid-bg {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(to right, rgba(223,214,226,0.6) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(223,214,226,0.6) 1px, transparent 1px);
      background-size: 62px 62px;
      z-index: 0;
    }

    .bsm-inner {
      position: relative;
      z-index: 2;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 56px 0 58px;
      gap: 24px;
    }

    .bsm-text {
      width: 48%;
      max-width: 760px;
      margin-top: 30px;
    }

    .bsm-heading {
      margin: 0;
      font-size: clamp(4.4rem, 7vw, 7.4rem);
      font-weight: 900;
      line-height: 0.9;
      letter-spacing: -3px;
      text-transform: uppercase;
      background: linear-gradient(90deg, #c93cff 0%, #7b41ff 48%, #3761ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }

    .bsm-subheading {
      margin: 12px 0 0;
      font-size: clamp(2rem, 3vw, 3.5rem);
      font-weight: 900;
      line-height: 0.95;
      letter-spacing: -1.2px;
      text-transform: uppercase;
      color: #111;
    }

    .bsm-visual {
      position: relative;
      width: 52%;
      height: 640px;
    }

    .bsm-rings-svg {
      position: absolute;
      right: -28px;
      top: 52%;
      transform: translateY(-50%);
      width: 740px;
      height: auto;
      z-index: 1;
      overflow: visible;
    }

    .bsm-img {
      position: absolute;
      border-radius: 50%;
      overflow: hidden;
      z-index: 3;
      background: #fff;
    }

    .bsm-img img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .bsm-img-top {
      width: 190px;
      height: 190px;
      top: 100px;
      right: 60px;
    }

    .bsm-img-middle {
      width: 205px;
      height: 205px;
      top: 162px;
      left: 100px;
    }

    .bsm-img-bottom {
      width: 300px;
      height: 300px;
      top: 320px;
      right: 152px;
    }

    .bsm-stripe-circle {
      position: absolute;
      width: 120px;
      height: 120px;
      left: 142px;
      bottom: 88px;
      border-radius: 50%;
      z-index: 2;
      background:
        repeating-linear-gradient(
          135deg,
          #4562ff 0px,
          #4562ff 4px,
          transparent 4px,
          transparent 14px
        );
    }

    .bsm-tl-ring {
      position: absolute;
      border-radius: 50%;
      border: 18px solid;
      z-index: 1;
      pointer-events: none;
    }

    .bsm-tl-ring-1 {
      width: 250px;
      height: 250px;
      top: -118px;
      left: -118px;
      border-color: #b93cff;
    }

    .bsm-tl-ring-2 {
      width: 380px;
      height: 380px;
      top: -194px;
      left: 48px;
      border-color: #4b55ff;
    }

    .bsm-bl-dot {
      position: absolute;
      width: 190px;
      height: 190px;
      bottom: -68px;
      left: 58px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, #d84dff, #b634f0);
      z-index: 1;
    }

    @media (max-width: 1200px) {
      .bsm-inner {
        padding: 0 34px;
      }

      .bsm-heading {
        font-size: clamp(4rem, 6vw, 6rem);
      }

      .bsm-visual {
        height: 590px;
      }

      .bsm-rings-svg {
        width: 660px;
        right: -16px;
      }

      .bsm-img-top {
        width: 170px;
        height: 170px;
        right: 72px;
      }

      .bsm-img-middle {
        width: 225px;
        height: 225px;
        left: 70px;
        top: 172px;
      }

      .bsm-img-bottom {
        width: 315px;
        height: 315px;
        right: 8px;
        top: 250px;
      }
    }

    @media (max-width: 1024px) {
      .bsm-section {
        height: auto;
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 30px;
      }

      .bsm-inner {
        flex-direction: column;
        align-items: flex-start;
        padding: 36px 20px 24px;
        gap: 18px;
      }

      .bsm-text {
        width: 100%;
        max-width: 100%;
        margin-top: 0;
      }

      .bsm-heading {
        font-size: clamp(3.4rem, 9vw, 5.4rem);
        letter-spacing: -2px;
      }

      .bsm-subheading {
        font-size: clamp(1.8rem, 4.6vw, 2.8rem);
      }

      .bsm-visual {
        width: 100%;
        height: 500px;
        margin-top: 8px;
      }

      .bsm-rings-svg {
        left: 50%;
        right: auto;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(620px, 100%);
      }

      .bsm-img-top {
        width: 150px;
        height: 150px;
        top: 20px;
        right: 40px;
      }

      .bsm-img-middle {
        width: 185px;
        height: 185px;
        top: 120px;
        left: 55px;
      }

      .bsm-img-bottom {
        width: 265px;
        height: 265px;
        top: 220px;
        right: 60px;
      }

      .bsm-stripe-circle {
        width: 95px;
        height: 95px;
        left: 95px;
        bottom: 40px;
      }

      .bsm-tl-ring-1 {
        width: 190px;
        height: 190px;
        top: -92px;
        left: -92px;
        border-width: 14px;
      }

      .bsm-tl-ring-2 {
        width: 280px;
        height: 280px;
        top: -140px;
        left: 24px;
        border-width: 14px;
      }

      .bsm-bl-dot {
        width: 135px;
        height: 135px;
        left: 28px;
        bottom: -42px;
      }
    }

    @media (max-width: 767px) {
      .bsm-section {
        height: auto;
        min-height: auto;
        padding: 0;
        padding-top:40px;
      }

      .bsm-inner {
        padding: 34px 16px 26px;
        gap: 16px;
      }

      .bsm-text {
        width: 100%;
      }

      .bsm-heading {
        font-size: clamp(2.7rem, 13vw, 4.2rem);
        line-height: 0.92;
        letter-spacing: -1.4px;
      }

      .bsm-subheading {
        margin-top: 8px;
        font-size: clamp(1.35rem, 7vw, 2.2rem);
        letter-spacing: -0.5px;
      }

      .bsm-visual {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "middle top"
          "bottom bottom";
        gap: 12px;
        margin-top: 10px;
      }

      .bsm-rings-svg,
      .bsm-stripe-circle {
        display: none;
      }

      .bsm-img {
        position: relative;
        inset: auto;
        width: 100%;
        height: auto;
        border-radius: 22px;
      }

      .bsm-img-top {
        grid-area: top;
        aspect-ratio: 1 / 1;
      }

      .bsm-img-middle {
        grid-area: middle;
        aspect-ratio: 1 / 1;
      }

      .bsm-img-bottom {
        grid-area: bottom;
        aspect-ratio: 1.12 / 1;
      }

      .bsm-tl-ring-1 {
        width: 140px;
        height: 140px;
        top: -62px;
        left: -62px;
        border-width: 10px;
      }

      .bsm-tl-ring-2 {
        width: 210px;
        height: 210px;
        top: -104px;
        left: 12px;
        border-width: 10px;
      }

      .bsm-bl-dot {
        width: 110px;
        height: 110px;
        left: 20px;
        bottom: -38px;
      }
    }

    @media (max-width: 480px) {
      .bsm-inner {
        padding: 28px 14px 22px;
      }

      .bsm-heading {
        font-size: clamp(2.35rem, 12.5vw, 3.5rem);
      }

      .bsm-subheading {
        font-size: clamp(1.15rem, 6.5vw, 1.9rem);
      }

      .bsm-visual {
        gap: 10px;
      }

      .bsm-img {
        border-radius: 18px;
      }

      .bsm-tl-ring-1 {
        width: 118px;
        height: 118px;
        top: -52px;
        left: -52px;
      }

      .bsm-tl-ring-2 {
        width: 176px;
        height: 176px;
        top: -88px;
        left: 10px;
      }

      .bsm-bl-dot {
        width: 92px;
        height: 92px;
        left: 16px;
        bottom: -30px;
      }
    }
  `})]}),e.jsx("section",{id:"counter-section",style:{paddingTop:"50px",paddingBottom:"50px",background:"#ffffff"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},children:e.jsxs("div",{id:"counter-grid",children:[e.jsx(m,{number:500,suffix:"M+",label:"Reach"}),e.jsx(m,{number:50,suffix:"+",label:"Trusted Clients"}),e.jsx(m,{number:100,suffix:"+",label:"Creators Engaged"}),e.jsx(m,{number:10,suffix:"+",label:"Languages"})]})})}),e.jsx("div",{style:{width:"100%",overflow:"hidden",background:"#F8F8F8",padding:"20px 0"},children:e.jsx("div",{style:{display:"flex",whiteSpace:"nowrap",animation:"marquee 25s linear infinite",fontSize:"clamp(16px,2.5vw,28px)",fontWeight:700,gap:"60px"},children:["Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution"].map((t,i)=>e.jsxs("span",{style:{color:"#0f032f"},children:[t," "]},i))})}),e.jsx("div",{style:{width:"100%",overflow:"hidden",background:"#7a1ef1",padding:"20px 0"},children:e.jsx("div",{style:{display:"flex",whiteSpace:"nowrap",animation:"marqueeReverse 22s linear infinite",fontSize:"clamp(16px,2.5vw,28px)",fontWeight:700,color:"#fff",gap:"60px"},children:["Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution"].map((t,i)=>e.jsx("span",{children:t},i))})}),e.jsxs("section",{id:"service",style:{position:"relative",paddingBottom:"130px",paddingTop:"50px",overflow:"hidden",background:"#f7f7fb"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,zIndex:0},children:e.jsx("img",{src:"/influencer_marketing/img/shapes/service-shape-1.png",alt:"shape",style:{width:"420px",opacity:.25}})}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:2},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",letterSpacing:"1px",fontWeight:800,color:"#111",textTransform:"uppercase"},children:"What We Offer For You"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:0,fontSize:"clamp(32px,4.5vw,54px)",fontWeight:900,color:"#7a1ef1",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"Media Relations That Drive Real Impact"})]}),e.jsx("div",{id:"service-grid",children:z.map((t,i)=>e.jsx("button",{type:"button",onClick:()=>P(i),style:{border:"none",background:"transparent",padding:0,cursor:"pointer",textAlign:"left"},children:e.jsxs("div",{className:"service-card",style:{position:"relative",width:"100%",borderRadius:"14px",overflow:"hidden",boxShadow:"0 18px 40px rgba(0,0,0,0.12)",background:"#000"},children:[e.jsx("img",{src:t.image,alt:t.frontTitle,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",top:"16px",left:"16px",zIndex:4,color:"#fff",fontWeight:900,fontSize:"clamp(15px,1.5vw,20px)",lineHeight:1.15,whiteSpace:"pre-line",maxWidth:"90%",textShadow:"0 8px 22px rgba(0,0,0,0.35)"},children:t.frontTitle}),e.jsx("div",{style:{position:"absolute",bottom:"16px",left:"16px",zIndex:4,padding:"8px 12px",background:"rgba(255,255,255,0.16)",border:"1px solid rgba(255,255,255,0.22)",borderRadius:"999px",color:"#fff",fontSize:"13px",fontWeight:700,backdropFilter:"blur(6px)"},children:"Tap to explore"})]})},i))}),s&&e.jsx("div",{role:"presentation",onMouseDown:k,style:{position:"fixed",inset:0,zIndex:999999,background:"rgba(0,0,0,0.65)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:e.jsx("div",{onMouseDown:t=>t.stopPropagation(),className:"popup-inner",children:e.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",transformStyle:"preserve-3d",transition:"transform 0.65s ease",transform:R?"rotateY(180deg)":"rotateY(0deg)"},children:[e.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:"18px",overflow:"hidden",backfaceVisibility:"hidden",background:"#000",boxShadow:"0 40px 110px rgba(0,0,0,0.5)"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:s.bg,zIndex:1}}),e.jsx("div",{style:{position:"absolute",top:"-60px",right:"-20px",width:"220px",height:"220px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",bottom:"-50px",left:"-10px",width:"180px",height:"180px",borderRadius:"50%",background:"rgba(255,255,255,0.06)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.28)",zIndex:3}}),e.jsxs("div",{style:{position:"absolute",left:"26px",bottom:"26px",zIndex:4,color:"#fff"},children:[e.jsx("div",{style:{fontSize:"clamp(28px,4vw,42px)",marginBottom:"10px"},children:s.emoji}),e.jsx("div",{style:{fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,lineHeight:1.12},children:s.title}),e.jsx("div",{style:{marginTop:"12px",display:"inline-flex",padding:"10px 12px",borderRadius:"999px",background:"rgba(255,255,255,0.16)",border:"1px solid rgba(255,255,255,0.22)",fontWeight:800,fontSize:"clamp(12px,1.2vw,14px)"},children:"Flipping to details…"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:"18px",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg)",background:"#0b0b0f",color:"#fff",boxShadow:"0 40px 110px rgba(0,0,0,0.5)",padding:"clamp(18px,3vw,28px)",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{fontSize:"clamp(28px,4vw,44px)"},children:s.emoji}),e.jsx("h3",{style:{margin:"10px 0 12px",fontSize:"clamp(22px,3vw,36px)",fontWeight:900},children:s.title}),e.jsx("p",{style:{margin:0,color:"#d5d5d5",fontSize:"clamp(14px,1.4vw,16px)",lineHeight:1.95},children:s.desc}),e.jsxs("div",{style:{marginTop:"18px"},children:[e.jsx("div",{style:{fontWeight:900,marginBottom:"8px"},children:"Includes"}),e.jsx("ul",{style:{margin:0,paddingLeft:"18px",lineHeight:2},children:s.list.map((t,i)=>e.jsx("li",{style:{color:"#eaeaea",fontSize:"clamp(13px,1.3vw,15px)"},children:t},i))})]}),e.jsx("div",{style:{marginTop:"auto",paddingTop:"18px"},children:e.jsx("button",{type:"button",onClick:k,style:{width:"100%",padding:"14px 16px",borderRadius:"14px",border:"1px solid rgba(255,255,255,0.22)",background:"rgba(255,255,255,0.08)",color:"#fff",fontWeight:900,cursor:"pointer"},children:"Click anywhere to close"})})]})]})})})]})]}),e.jsx("section",{id:"features",style:{paddingTop:"20px",paddingBottom:"60px",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"44px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:900,letterSpacing:"0.6px",textTransform:"uppercase",color:"#111"},children:"Why Brands Choose Us"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:0,fontSize:"clamp(32px,4.5vw,54px)",fontWeight:900,color:"#7a1ef1",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"PR Strategy That Goes Beyond Press Releases"})]}),e.jsx("div",{id:"features-grid",children:[{gif:"/influencer_marketing/img/cashback.gif",title:"Media Relationships Built Over Years",text:"We don’t spam journalists with generic pitches. Our long-standing media relationships ensure your stories reach the right editors and actually get featured. Years of credibility mean your announcements get attention, not ignored."},{gif:"/influencer_marketing/img/processing-speed.gif",title:"Crisis-Ready & Reputation-Focused",text:"We go beyond positive press by proactively protecting your brand reputation. From real-time sentiment monitoring to crisis communication strategies, we ensure your brand maintains credibility even in challenging situations."},{gif:"/influencer_marketing/img/quick-idea.gif",title:"From Tourism to Celebrity Partnerships",text:"We’ve delivered international media coverage for tourism campaigns and managed influencer and celebrity partnerships generating massive reach. Our cross-industry experience ensures your brand is positioned for maximum media impact."},{gif:"/influencer_marketing/img/puzzle.gif",title:"Complete PR Ecosystem",text:"Beyond press releases, we deliver end-to-end PR: media relations, reputation management, event publicity, influencer partnerships, analytics, and strategic guidance. Everything needed to build and sustain a powerful brand presence."}].map((t,i)=>e.jsxs("div",{style:{width:"100%",borderRadius:"12px",padding:"24px",background:"#fff",boxShadow:"0 12px 36px rgba(0,0,0,0.12)",display:"flex",flexDirection:"column",gap:"10px",minHeight:"200px"},children:[e.jsx("img",{src:t.gif,alt:t.title,style:{width:"44px",height:"44px",objectFit:"contain"}}),e.jsx("h3",{style:{margin:0,fontWeight:900,fontSize:"clamp(16px,1.6vw,20px)",color:"#111"},children:t.title}),e.jsx("p",{style:{margin:0,fontSize:"clamp(14px,1.4vw,18px)",lineHeight:1.7,color:"#2b2b2b"},children:t.text})]},i))})]})}),e.jsx("section",{id:"project",style:{paddingTop:"50px",paddingBottom:"100px",background:"#fff"},children:e.jsx(A,{works:N},M)}),e.jsx("div",{style:{overflow:"hidden",background:"#7a1ef1",padding:"20px 0",position:"relative"},children:e.jsxs("div",{style:{display:"flex",width:"fit-content",animation:"marquee 22s linear infinite",whiteSpace:"nowrap",gap:"100px",fontWeight:900,fontSize:"clamp(36px,6vw,72px)",alignItems:"center"},children:[e.jsx("span",{style:{color:"#ffffff"},children:"Customer Testimonial ."}),e.jsx("span",{style:{color:"#000000"},children:"Client Feedbacks"}),e.jsx("span",{style:{color:"#ffffff"},children:"Customer Testimonial ."}),e.jsx("span",{style:{color:"#000000"},children:"Client Feedbacks"})]})}),e.jsx("section",{id:"testi",style:{paddingTop:"110px",paddingBottom:"120px",background:"#fff",overflow:"hidden"},children:(()=>{const t=[{name:"Mandira Bedi",img:"/influencer_marketing/img/testi/Mandira.png",text:"I've collaborated with Mélange across multiple shoots, and it has always been a smooth, collaborative, and comfortable process."},{name:"Karan Kundra",img:"/influencer_marketing/img/testi/Karan.jpeg",text:"Honestly, it felt more like a vacation with friends than a shoot."},{name:"Tejasswi Prakash",img:"/influencer_marketing/img/testi/Tejasswi.jpeg",text:"There is always a moment of laughter with the team."},{name:"Hebah Patel",img:"/influencer_marketing/img/testi/Hebah.jpeg",text:"Everything was so thoughtfully planned, and the energy is always fun, and I never realized when the shoot days got over."},{name:"Dheeraj Dhoopar",img:"/influencer_marketing/img/testi/Dheeraj.jpeg",text:"Unlike other work here there's always room to explore, improvise, and add my own touch."},{name:"Pooja Raut",img:"/influencer_marketing/img/testi/Pooja.png",text:"It's always been a pleasure working with Mélange. They delivered nearly double our campaign targets, driven by meticulous research and a spot-on selection of creators."},{name:"Puneet Kumar",img:"/influencer_marketing/img/testi/Puneet.png",text:"It's really fun to work with an agency that doesn't just understand the brief but truly gets the depth behind it."},{name:"Prabindar Singh",img:"/influencer_marketing/img/testi/Prabindar.png",text:"In a country where i had to make sweets a healthier option the team got the vision right from the start and they delivered the best work and helped bring in a brand face that just fit in the brand message perfectly."}],[i,o]=n.useState(3),[c,p]=n.useState(0),[l,h]=n.useState(!1);n.useEffect(()=>{const r=()=>{const a=window.innerWidth;a<640?o(1):a<1024?o(2):o(3)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),n.useEffect(()=>{if(l)return;const r=setInterval(()=>p(a=>(a+1)%t.length),3500);return()=>clearInterval(r)},[l,t.length]);const d=Math.max(0,t.length-i),D=Math.min(c,d)*(100/i),u=6,b=Math.round(Math.min(c,d)/(d||1)*(u-1))||0;return e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:e.jsxs("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{position:"relative"},children:[e.jsx("div",{style:{overflow:"hidden"},children:e.jsx("div",{style:{display:"flex",transform:`translateX(-${D}%)`,transition:"transform 900ms ease",willChange:"transform"},children:t.map((r,a)=>e.jsx("div",{style:{flex:`0 0 ${100/i}%`,padding:"0 18px",boxSizing:"border-box"},children:e.jsxs("div",{style:{textAlign:"center",padding:"10px 0",minHeight:"360px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",gap:"26px"},children:[e.jsx("div",{style:{width:"clamp(100px,14vw,160px)",height:"clamp(100px,14vw,160px)",borderRadius:"999px",overflow:"hidden",border:"10px solid #111",background:"#fff",boxSizing:"border-box"},children:e.jsx("img",{src:r.img,alt:r.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),e.jsx("p",{style:{margin:0,maxWidth:"360px",fontSize:"clamp(14px,1.5vw,18px)",lineHeight:1.9,color:"#111"},children:r.text}),e.jsxs("p",{style:{margin:0,fontWeight:900,fontSize:"clamp(14px,1.3vw,16px)",color:"#7a1ef1",letterSpacing:"0.3px"},children:["— ",r.name]})]})},a))})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginTop:"30px"},children:Array.from({length:u}).map((r,a)=>{const B=d===0?0:Math.round(a/(u-1)*d);return e.jsx("button",{type:"button",onClick:()=>p(B),style:{width:"12px",height:"12px",borderRadius:"999px",border:"none",cursor:"pointer",background:a===b?"#1e90ff":"#000",opacity:a===b?1:.9,transform:a===b?"scale(1.1)":"scale(1)",transition:"all 180ms ease"}},a)})})]})})})()}),e.jsx("section",{id:"contact",style:{paddingTop:"0px",paddingBottom:"130px",background:"#fff"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:e.jsxs("div",{id:"contact-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"26px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:900,letterSpacing:"0.6px",textTransform:"uppercase",color:"#111"},children:"Contact Us"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:"12px",fontSize:"clamp(32px,4vw,52px)",fontWeight:900,lineHeight:1.05,color:"#111",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"Let's work together"}),e.jsx("p",{style:{margin:0,fontSize:"clamp(15px,1.4vw,18px)",lineHeight:1.8,color:"#2b2b2b"},children:"Thank you for your interest in Mélange. We're excited to hear from you and will get back to you soon."})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[{icon:"/influencer_marketing/img/icon/gps.png",label:"Our Address",content:e.jsxs("p",{style:{marginTop:"6px",marginBottom:0,fontSize:"16px",lineHeight:1.75,color:"#2b2b2b"},children:["B12, 7th Floor, Silvio Heights,",e.jsx("br",{}),"St. Inez Road, Santa Inez,",e.jsx("br",{}),"Panaji, Goa-403001, India"]})},{icon:"/influencer_marketing/img/icon/mail.png",label:"Contact",content:e.jsx("a",{href:"mailto:hello@melangedigital.co",style:{display:"block",marginTop:"6px",fontSize:"16px",color:"#7a1ef1",textDecoration:"none",fontWeight:800},children:"hello@melangedigital.co"})},{icon:"/influencer_marketing/img/icon/clock.png",label:"Hours of Operation",content:e.jsx("div",{style:{marginTop:"6px",fontSize:"16px",color:"#2b2b2b"},children:"Monday - Friday: 10:00 - 19:00"})}].map((t,i)=>e.jsxs("div",{style:{display:"flex",gap:"14px",alignItems:"flex-start"},children:[e.jsx("div",{style:{width:"44px",height:"44px",flexShrink:0,borderRadius:"12px",background:"#f3ecff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("img",{src:t.icon,alt:"",style:{width:"22px",height:"22px",objectFit:"contain"}})}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,fontSize:"18px",fontWeight:900,color:"#111"},children:t.label}),t.content]})]},i))})]}),e.jsxs("div",{style:{borderRadius:"18px",background:"#fff",boxShadow:"0 18px 55px rgba(0,0,0,0.12)",padding:"26px"},children:[e.jsx("div",{style:{fontSize:"22px",fontWeight:900,marginBottom:"16px",color:"#111"},children:"Get in Touch with Our Team"}),C&&e.jsx("div",{style:{background:"#eefbf3",border:"1px solid #bfe7cc",padding:"14px 16px",borderRadius:"12px",color:"#0f5132",fontWeight:800,marginBottom:"14px"},children:"✅ Thanks! Your response has been submitted. We'll reach out soon."}),j&&e.jsx("div",{style:{background:"#fff0f0",border:"1px solid #ffcccc",padding:"14px 16px",borderRadius:"12px",color:"#8a1f1f",fontWeight:800,marginBottom:"14px"},children:j}),e.jsxs("form",{id:"webform823188000003621001",action:"https://crm.zoho.in/crm/WebToLeadForm",method:"POST",acceptCharset:"UTF-8",onSubmit:W,children:[e.jsx("input",{type:"text",style:{display:"none"},name:"xnQsjsdp",value:"d0afa95d6951e308dc4962f718b07538dd447dc9619956b507a91551ffa2a713",readOnly:!0}),e.jsx("input",{type:"hidden",name:"zc_gad",id:"zc_gad",defaultValue:""}),e.jsx("input",{type:"text",style:{display:"none"},name:"xmIwtLD",value:"a28bd82e599c4370550a44dfa7f34e63128c98319d025047dfae5bbe21ba787a01911914bc8deebfc75fd77f0c85bf07",readOnly:!0}),e.jsx("input",{type:"text",style:{display:"none"},name:"actionType",value:"TGVhZHM=",readOnly:!0}),e.jsx("input",{type:"text",style:{display:"none"},name:"returnURL",value:"null",readOnly:!0}),e.jsx("input",{type:"hidden",name:"aG9uZXlwb3Q",value:""}),[{label:"First Name",name:"First Name",id:"First_Name",required:!0,max:40},{label:"Last Name",name:"Last Name",id:"Last_Name",required:!0,max:80},{label:"Company",name:"Company",id:"Company",required:!0,max:200},{label:"Mobile",name:"Mobile",id:"Mobile",required:!0,max:30},{label:"Email",name:"Email",id:"Email",required:!0,max:100,type:"email"}].map(t=>e.jsxs("div",{style:{marginBottom:"14px"},children:[e.jsxs("label",{htmlFor:t.id,style:{display:"block",fontSize:"13px",fontWeight:900,color:"#111",marginBottom:"6px"},children:[t.label," ",t.required?e.jsx("span",{style:{color:"red"},children:"*"}):null]}),e.jsx("input",{id:t.id,name:t.name,type:t.type||"text",maxLength:t.max,"aria-required":t.required?"true":"false",style:{width:"100%",height:"48px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.12)",padding:"0 14px",fontSize:"15px",outline:"none"}})]},t.id)),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsx("label",{htmlFor:"Description",style:{display:"block",fontSize:"13px",fontWeight:900,color:"#111",marginBottom:"6px"},children:"Message"}),e.jsx("textarea",{id:"Description",name:"Description",style:{width:"100%",minHeight:"120px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.12)",padding:"12px 14px",fontSize:"15px",outline:"none",resize:"vertical"}})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx("button",{type:"submit",disabled:g,style:{height:"46px",padding:"0 22px",borderRadius:"12px",border:"none",background:g?"#b79af7":"#7a1ef1",color:"#fff",fontWeight:900,cursor:g?"not-allowed":"pointer"},children:g?"Submitting...":"Submit"}),e.jsx("button",{type:"reset",style:{height:"46px",padding:"0 22px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.18)",background:"#fff",color:"#111",fontWeight:900,cursor:"pointer"},children:"Reset"})]})]})]})]})})}),e.jsx(O,{})]})};export{G as default};
