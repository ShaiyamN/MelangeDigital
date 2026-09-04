import{r as n,j as e,W as F,N as R,i as M,F as _}from"./index-CuKC8I8T.js";import{a as P}from"./index-UoIplL0Z.js";const G=()=>{n.useEffect(()=>{document.documentElement.scrollTop=0,document.body.scrollTop=0},[]);const c=({number:t,suffix:i,label:s})=>{const[g,p]=n.useState(0);return n.useEffect(()=>{let d=0;const l=t/(1200/16),f=setInterval(()=>{d+=l,d>=t?(p(t),clearInterval(f)):p(Math.floor(d))},16);return()=>clearInterval(f)},[t]),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("h3",{style:{fontSize:"clamp(36px, 6vw, 64px)",fontWeight:800,margin:0,color:"#7a1ef1"},children:[g,e.jsx("span",{style:{fontSize:"clamp(18px, 3vw, 32px)",marginLeft:"6px"},children:i})]}),e.jsx("p",{style:{marginTop:"10px",fontSize:"clamp(14px, 1.5vw, 18px)",fontWeight:500,color:"#333"},children:s})]})},[y,v]=n.useState(null),[z,x]=n.useState(!1),[A,C]=n.useState(!1),[m,w]=n.useState(!1),[j,S]=n.useState(""),[L,T]=n.useState(!1);n.useEffect(()=>{const t=()=>{T(window.innerWidth<576)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const W=t=>{v(t),x(!1),setTimeout(()=>x(!0),60)},k=()=>{x(!1),setTimeout(()=>v(null),260)},E=async t=>{t.preventDefault(),S(""),w(!0);try{const i=t.currentTarget,s=new FormData(i);await fetch("https://crm.zoho.in/crm/WebToLeadForm",{method:"POST",mode:"no-cors",body:s}),C(!0),i.reset()}catch{S("Something went wrong. Please try again.")}finally{w(!1)}},I=[{frontTitle:`AI Visibility Audit
& Strategy`,image:"/influencer_marketing/img/images/AI_Visibility_Audit_Strategy.png",emoji:"🔍",title:"AI Visibility Audit & Strategy",desc:"Get complete visibility intelligence across answer engines",list:["Comprehensive brand presence analysis across ChatGPT, Google AI Overviews, Perplexity","Competitive AI citation benchmarking and gap analysis","Custom AEO roadmap with prioritized optimization opportunities","AI sentiment and narrative analysis"]},{frontTitle:`Answer-Optimized
Content Creation`,image:"/influencer_marketing/img/images/Answer_Optimized_Content_Creation.jpeg",emoji:"✍️",title:"Answer-Optimized Content Creation",desc:"Content engineered for AI citations and zero-click dominance",list:["Conversational query research and intent mapping","FAQ, HowTo, and question-answer content development","Natural language optimization for voice and text queries","Content refresh and optimization for existing assets"]},{frontTitle:`Technical AEO
Implementation`,image:"/influencer_marketing/img/images/Technical_AEO_Implementation.png",emoji:"⚙️",title:"Technical AEO Implementation",desc:"The infrastructure AI systems need to find and cite you",list:["Advanced schema markup deployment (FAQ, HowTo, Product, Entity)","Technical site optimization for AI crawlability","Mobile-first and voice-compatible architecture","AI-friendly content structure and formatting"]},{frontTitle:`Continuous AI
Performance Tracking`,image:"/influencer_marketing/img/images/Continuous_AI_Performance_Tracking.png",emoji:"📊",title:"Continuous AI Performance Tracking",desc:"Track, measure, and dominate AI-powered search continuously",list:["Real-time monitoring across all major answer engines","Zero-click answer and AI citation tracking","Competitive AI visibility analysis","Monthly optimization reports with actionable insights"]}],o=y!==null?I[y]:null,[O,H]=n.useState(0);return n.useEffect(()=>{document.body.style.visibility="hidden";const t=setTimeout(()=>{const i=document.getElementById("hero");i&&i.scrollIntoView({behavior:"instant"}),document.body.style.visibility="visible"},300);return()=>{clearTimeout(t),document.body.style.visibility="visible"}},[]),e.jsxs("div",{className:"overflow-hidden",children:[e.jsxs(F,{children:[e.jsx("title",{children:"AEO & SEO Services | Mélange Digital"}),e.jsx("meta",{name:"description",content:"Amplify your brand with Mélange Digital's AEO and SEO services. Be cited by AI assistants, rank in search, and build authority across modern answer engines."}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap",rel:"stylesheet"}),e.jsx("link",{rel:"canonical",href:"https://melangedigital.co/services/aeo-seo"}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://melangedigital.co/services/aeo-seo#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://melangedigital.co/services" },
          { "@type": "ListItem", "position": 3, "name": "AEO & SEO", "item": "https://melangedigital.co/services/aeo-seo" }
        ]
      }
    `}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://melangedigital.co/services/aeo-seo#webpage",
        "url": "https://melangedigital.co/services/aeo-seo",
        "name": "AEO & SEO Services | Mélange Digital",
        "description": "Be found in search and be cited in AI answers with Mélange Digital's AEO and SEO services.",
        "isPartOf": { "@type": "WebSite", "@id": "https://melangedigital.co/#website" },
        "breadcrumb": { "@id": "https://melangedigital.co/services/aeo-seo#breadcrumb" },
        "inLanguage": "en-US"
      }
    `}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://melangedigital.co/services/aeo-seo#service",
        "name": "AEO & SEO Services",
        "url": "https://melangedigital.co/services/aeo-seo",
        "description": "Mélange Digital helps brands improve visibility across traditional search engines and AI answer platforms like ChatGPT, Google AI Overviews, Perplexity, and Bing Copilot.",
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
          "name": "AEO & SEO Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Visibility Audit & Strategy", "description": "Understand your brand's visibility across AI assistants and answer engines with a detailed strategic roadmap." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Answer-Optimized Content Creation", "description": "Build content designed to earn citations, featured snippets, and AI-driven answer visibility." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical AEO Implementation", "description": "Deploy structured data, AI-friendly content architecture, and technical optimization to improve discoverability." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Continuous AI Performance Tracking", "description": "Track your brand's presence across AI systems and refine your visibility strategy continuously." } }
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
      `}),e.jsx(R,{}),e.jsxs("section",{id:"hero",style:{position:"relative",overflow:"hidden",background:"#f7f7f7",fontFamily:'"Bricolage Grotesque", sans-serif',minHeight:"100vh",display:"flex",alignItems:"center"},children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&display=swap');

    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroZoomIn {
      from { opacity: 0; transform: scale(0.95); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes ringCW {
      from { transform: translateY(-50%) rotate(0deg); }
      to   { transform: translateY(-50%) rotate(360deg); }
    }
    @keyframes ringCCW {
      from { transform: translateY(-50%) rotate(0deg); }
      to   { transform: translateY(-50%) rotate(-360deg); }
    }

    /* ─── DESKTOP ─── */
    #hero-main-row {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1450px;
      margin: 0 auto;
      padding: 100px 50px 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    #hero-left {
      flex: 1 1 0;
      min-width: 0;
      animation: heroFadeUp .9s ease-out both;
    }

    #hero-headline {
      margin: 0;
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 900;
      line-height: 0.95;
      font-size: clamp(3.2rem, 6.7vw, 7.2rem);
      text-transform: uppercase;
      letter-spacing: -2px;
      color: #1a1a1a;
    }

    #hero-right {
      position: relative;
      flex-shrink: 0;
      width: 700px;
    }

    #hero-stack-wrap {
      position: relative;
      width: 430px;
      margin-left: auto;
      margin-right: 30px;
    }

    /* Desktop rings — absolute, centered on stack */
    .hero-ring {
      position: absolute;
      top: 50%;
      border-radius: 50%;
      border-style: solid;
      border-color: transparent;
      pointer-events: none;
      z-index: 0;
    }

    #hero-ring-outer {
      left: -120px;
      width: 500px; height: 500px;
      border-width: 24px;
      background: linear-gradient(#f7f7f7,#f7f7f7) padding-box,
                  linear-gradient(135deg,#d946ef,#2563eb) border-box;
      animation: ringCW 12s linear infinite;
    }
    #hero-ring-inner {
      left: -58px;
      width: 390px; height: 390px;
      border-width: 20px;
      background: linear-gradient(#f7f7f7,#f7f7f7) padding-box,
                  linear-gradient(135deg,#2563eb,#d946ef) border-box;
      animation: ringCCW 14s linear infinite;
    }

    .hero-img-stack {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .hero-img-box {
      overflow: hidden;
      border: 3px solid #2563eb;
    }
    .hero-img-box:first-child { border-radius: 20px 20px 0 0; }
    .hero-img-box:last-child  { border-radius: 0 0 20px 20px; }

    .hero-img-box img {
      width: 100%;
      height: 185px;
      object-fit: cover;
      display: block;
    }

    /* ─── TABLET ─── */
    @media (max-width: 1100px) {
      #hero-main-row {
        flex-direction: column !important;
        padding: 120px 30px 70px !important;
        gap: 50px !important;
        text-align: center;
      }
      #hero-left { width: 100% !important; }
      #hero-right {
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
      }
      #hero-stack-wrap {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }

    /* ─── MOBILE ─── */
    @media (max-width: 768px) {

      /* Layout */
      #hero-main-row {
        flex-direction: column !important;
        padding: 90px 20px 60px !important;
        gap: 32px !important;
        align-items: center;
        text-align: center;
      }

      #hero-left { width: 100% !important; }

      #hero-headline {
        font-size: clamp(2.6rem, 12vw, 4rem) !important;
        letter-spacing: -1px !important;
        line-height: 0.93 !important;
      }

      /* Right side: full width, no overflow */
      #hero-right {
        width: 100% !important;
        position: relative;
      }

      #hero-stack-wrap {
        width: 100% !important;
        margin: 0 !important;
        position: relative;
      }

      /* Hide desktop rings entirely on mobile */
      .hero-ring { display: none !important; }

      /* Mobile images: single tall card with 2-col grid */
      .hero-img-stack {
        flex-direction: column !important;
        gap: 10px !important;
        width: 100% !important;
      }

      /* First image — full width, tall hero card */
      .hero-img-box:first-child {
        border-radius: 16px !important;
        width: 100% !important;
      }
      .hero-img-box:first-child img {
        height: 220px !important;
      }

      /* Last two images — side by side */
      .hero-img-box-row {
        display: flex !important;
        gap: 10px !important;
      }

      .hero-img-box-row .hero-img-box {
        flex: 1 !important;
        border-radius: 0 !important;
      }
      .hero-img-box-row .hero-img-box:first-child {
        border-radius: 0 0 0 16px !important;
      }
      .hero-img-box-row .hero-img-box:last-child {
        border-radius: 0 0 16px 0 !important;
      }
      .hero-img-box-row .hero-img-box img {
        height: 140px !important;
      }

      /* Mobile accent ring — decorative only, behind images */
      .hero-mobile-ring {
        display: block !important;
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
      }

      /* Decoratives */
      #hero-deco-top-circle {
        width: 90px !important; height: 90px !important;
        top: -30px !important; left: -30px !important;
      }
      #hero-deco-bl-arc1 {
        width: 110px !important; height: 110px !important;
        bottom: -55px !important; left: -45px !important;
        border-width: 12px !important;
      }
      #hero-deco-bl-arc2 {
        width: 148px !important; height: 148px !important;
        bottom: -98px !important; left: 0 !important;
        border-width: 12px !important;
      }
      #hero-deco-stripe { display: none; }
    }
  `}),e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",backgroundImage:"linear-gradient(to right,rgba(200,190,220,.55) 1px,transparent 1px),linear-gradient(to bottom,rgba(200,190,220,.55) 1px,transparent 1px)",backgroundSize:"45px 45px"}}),e.jsx("div",{id:"hero-deco-top-circle",style:{position:"absolute",top:"-60px",left:"-60px",zIndex:1,pointerEvents:"none",width:"185px",height:"185px",borderRadius:"50%",background:"linear-gradient(145deg,#d946ef,#a855f7)"}}),e.jsx("div",{id:"hero-deco-bl-arc1",style:{position:"absolute",bottom:"-95px",left:"-80px",zIndex:1,pointerEvents:"none",width:"190px",height:"190px",borderRadius:"50%",border:"18px solid #a855f7"}}),e.jsx("div",{id:"hero-deco-bl-arc2",style:{position:"absolute",bottom:"-165px",left:"0px",zIndex:1,pointerEvents:"none",width:"240px",height:"240px",borderRadius:"50%",border:"18px solid #4f46e5"}}),e.jsx("div",{id:"hero-deco-stripe",style:{position:"absolute",bottom:"20px",left:"38%",zIndex:1,pointerEvents:"none",width:"160px",height:"108px",borderRadius:"50%",background:"repeating-linear-gradient(135deg,#4361ee 0px,#4361ee 4px,transparent 4px,transparent 13px)"}}),e.jsxs("div",{id:"hero-main-row",children:[e.jsx("div",{id:"hero-left",children:e.jsxs("h1",{id:"hero-headline",children:[e.jsx("span",{style:{display:"block"},children:"BUILDING AN"}),e.jsx("span",{style:{display:"block",background:"linear-gradient(90deg,#d946ef 0%,#2563eb 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"AI FIRST"}),e.jsx("span",{style:{display:"block"},children:"SEARCH ERA"})]})}),e.jsx("div",{id:"hero-right",children:e.jsxs("div",{id:"hero-stack-wrap",children:[e.jsx("div",{id:"hero-ring-outer",className:"hero-ring"}),e.jsx("div",{id:"hero-ring-inner",className:"hero-ring"}),e.jsxs("div",{className:"hero-img-stack",children:[e.jsx("div",{className:"hero-img-box",style:{animation:"heroZoomIn .85s ease-out both"},children:e.jsx("img",{src:"/influencer_marketing/img/images/aeo1.jpg",alt:"Search"})}),e.jsxs("div",{className:"hero-img-box-row",children:[e.jsx("div",{className:"hero-img-box",style:{animation:"heroZoomIn 1s ease-out both"},children:e.jsx("img",{src:"/influencer_marketing/img/images/aeo2.jpg",alt:"AI handshake"})}),e.jsx("div",{className:"hero-img-box",style:{animation:"heroZoomIn 1.15s ease-out both"},children:e.jsx("img",{src:"/influencer_marketing/img/images/aeo3.jpg",alt:"AI interface"})})]})]})]})})]})]}),e.jsx("section",{id:"counter-section",style:{paddingTop:"50px",paddingBottom:"50px",background:"#ffffff"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},children:e.jsxs("div",{id:"counter-grid",children:[e.jsx(c,{number:500,suffix:"M+",label:"Reach"}),e.jsx(c,{number:50,suffix:"+",label:"Trusted Clients"}),e.jsx(c,{number:100,suffix:"+",label:"Creators Engaged"}),e.jsx(c,{number:10,suffix:"+",label:"Languages"})]})})}),e.jsx("div",{style:{width:"100%",overflow:"hidden",background:"#F8F8F8",padding:"20px 0"},children:e.jsx("div",{style:{display:"flex",whiteSpace:"nowrap",animation:"marquee 25s linear infinite",fontSize:"clamp(16px,2.5vw,28px)",fontWeight:700,gap:"60px"},children:["Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution"].map((t,i)=>e.jsxs("span",{style:{color:"#0f032f"},children:[t," "]},i))})}),e.jsx("div",{style:{width:"100%",overflow:"hidden",background:"#7a1ef1",padding:"20px 0"},children:e.jsx("div",{style:{display:"flex",whiteSpace:"nowrap",animation:"marqueeReverse 22s linear infinite",fontSize:"clamp(16px,2.5vw,28px)",fontWeight:700,color:"#fff",gap:"60px"},children:["Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution"].map((t,i)=>e.jsx("span",{children:t},i))})}),e.jsxs("section",{id:"service",style:{position:"relative",paddingBottom:"130px",paddingTop:"50px",overflow:"hidden",background:"#f7f7fb"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,zIndex:0},children:e.jsx("img",{src:"/influencer_marketing/img/shapes/service-shape-1.png",alt:"shape",style:{width:"420px",opacity:.25}})}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:2},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",letterSpacing:"1px",fontWeight:800,color:"#111",textTransform:"uppercase"},children:"What We Offer For You"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:0,fontSize:"clamp(32px,4.5vw,54px)",fontWeight:900,color:"#7a1ef1",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"AEO Services That Drive Results"})]}),e.jsx("div",{id:"service-grid",children:I.map((t,i)=>e.jsx("button",{type:"button",onClick:()=>W(i),style:{border:"none",background:"transparent",padding:0,cursor:"pointer",textAlign:"left"},children:e.jsxs("div",{className:"service-card",style:{position:"relative",width:"100%",borderRadius:"14px",overflow:"hidden",boxShadow:"0 18px 40px rgba(0,0,0,0.12)",background:"#000"},children:[e.jsx("img",{src:t.image,alt:t.frontTitle,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",top:"16px",left:"16px",zIndex:4,color:"#fff",fontWeight:900,fontSize:"clamp(15px,1.5vw,20px)",lineHeight:1.15,whiteSpace:"pre-line",maxWidth:"90%",textShadow:"0 8px 22px rgba(0,0,0,0.35)"},children:t.frontTitle}),e.jsx("div",{style:{position:"absolute",bottom:"16px",left:"16px",zIndex:4,padding:"8px 12px",background:"rgba(255,255,255,0.16)",border:"1px solid rgba(255,255,255,0.22)",borderRadius:"999px",color:"#fff",fontSize:"13px",fontWeight:700,backdropFilter:"blur(6px)"},children:"Tap to explore"})]})},i))}),o&&e.jsx("div",{role:"presentation",onMouseDown:k,style:{position:"fixed",inset:0,zIndex:999999,background:"rgba(0,0,0,0.65)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:e.jsx("div",{onMouseDown:t=>t.stopPropagation(),className:"popup-inner",children:e.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",transformStyle:"preserve-3d",transition:"transform 0.65s ease",transform:z?"rotateY(180deg)":"rotateY(0deg)"},children:[e.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:"18px",overflow:"hidden",backfaceVisibility:"hidden",background:"#000",boxShadow:"0 40px 110px rgba(0,0,0,0.5)"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:o.bg,zIndex:1}}),e.jsx("div",{style:{position:"absolute",top:"-60px",right:"-20px",width:"220px",height:"220px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",bottom:"-50px",left:"-10px",width:"180px",height:"180px",borderRadius:"50%",background:"rgba(255,255,255,0.06)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.28)",zIndex:3}}),e.jsxs("div",{style:{position:"absolute",left:"26px",bottom:"26px",zIndex:4,color:"#fff"},children:[e.jsx("div",{style:{fontSize:"clamp(28px,4vw,42px)",marginBottom:"10px"},children:o.emoji}),e.jsx("div",{style:{fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,lineHeight:1.12},children:o.title}),e.jsx("div",{style:{marginTop:"12px",display:"inline-flex",padding:"10px 12px",borderRadius:"999px",background:"rgba(255,255,255,0.16)",border:"1px solid rgba(255,255,255,0.22)",fontWeight:800,fontSize:"clamp(12px,1.2vw,14px)"},children:"Flipping to details…"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:"18px",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg)",background:"#0b0b0f",color:"#fff",boxShadow:"0 40px 110px rgba(0,0,0,0.5)",padding:"clamp(18px,3vw,28px)",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{fontSize:"clamp(28px,4vw,44px)"},children:o.emoji}),e.jsx("h3",{style:{margin:"10px 0 12px",fontSize:"clamp(22px,3vw,36px)",fontWeight:900},children:o.title}),e.jsx("p",{style:{margin:0,color:"#d5d5d5",fontSize:"clamp(14px,1.4vw,16px)",lineHeight:1.95},children:o.desc}),e.jsxs("div",{style:{marginTop:"18px"},children:[e.jsx("div",{style:{fontWeight:900,marginBottom:"8px"},children:"Includes"}),e.jsx("ul",{style:{margin:0,paddingLeft:"18px",lineHeight:2},children:o.list.map((t,i)=>e.jsx("li",{style:{color:"#eaeaea",fontSize:"clamp(13px,1.3vw,15px)"},children:t},i))})]}),e.jsx("div",{style:{marginTop:"auto",paddingTop:"18px"},children:e.jsx("button",{type:"button",onClick:k,style:{width:"100%",padding:"14px 16px",borderRadius:"14px",border:"1px solid rgba(255,255,255,0.22)",background:"rgba(255,255,255,0.08)",color:"#fff",fontWeight:900,cursor:"pointer"},children:"Click anywhere to close"})})]})]})})})]})]}),e.jsx("section",{id:"features",style:{paddingTop:"20px",paddingBottom:"60px",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"44px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:900,letterSpacing:"0.6px",textTransform:"uppercase",color:"#111"},children:"Why Brands Choose Us"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:0,fontSize:"clamp(32px,4.5vw,54px)",fontWeight:900,color:"#7a1ef1",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"Why Leading Brands Choose Melange Digital"})]}),e.jsx("div",{id:"features-grid",children:[{gif:"/influencer_marketing/img/cashback.gif",title:"AI-First Agency DNA",text:"We've integrated AI across our operations before it became a buzzword. Our team doesn't just understand AEO theory, we live in AI ecosystems daily, testing and optimizing across platforms so your brand wins."},{gif:"/influencer_marketing/img/processing-speed.gif",title:"Expert Team, Measurable Results",text:"Our specialists combine deep technical expertise with strategic marketing acumen. We track what matters: AI citations, brand mentions, zero-click visibility, and ultimately, how AI answers drive your revenue."},{gif:"/influencer_marketing/img/quick-idea.gif",title:"Global Perspective, Local Execution",text:"We position your brand globally while understanding regional nuances. From tourism boards to D2C brands, we've helped diverse clients dominate AI answers in their markets with strategies that scale."},{gif:"/influencer_marketing/img/puzzle.gif",title:"Cross-Platform AI Visibility Management",text:"We track and optimize your brand presence across ChatGPT, Google AI Overviews, Perplexity, Bing Copilot, and emerging answer engines. One strategy, complete AI ecosystem coverage."}].map((t,i)=>e.jsxs("div",{style:{width:"100%",borderRadius:"12px",padding:"24px",background:"#fff",boxShadow:"0 12px 36px rgba(0,0,0,0.12)",display:"flex",flexDirection:"column",gap:"10px",minHeight:"200px"},children:[e.jsx("img",{src:t.gif,alt:t.title,style:{width:"44px",height:"44px",objectFit:"contain"}}),e.jsx("h3",{style:{margin:0,fontWeight:900,fontSize:"clamp(16px,1.6vw,20px)",color:"#111"},children:t.title}),e.jsx("p",{style:{margin:0,fontSize:"clamp(14px,1.4vw,18px)",lineHeight:1.7,color:"#2b2b2b"},children:t.text})]},i))})]})}),e.jsx("section",{id:"project",style:{paddingTop:"50px",paddingBottom:"100px",background:"#fff"},children:e.jsx(M,{works:P},O)}),e.jsx("div",{style:{overflow:"hidden",background:"#7a1ef1",padding:"20px 0",position:"relative"},children:e.jsxs("div",{style:{display:"flex",width:"fit-content",animation:"marquee 22s linear infinite",whiteSpace:"nowrap",gap:"100px",fontWeight:900,fontSize:"clamp(36px,6vw,72px)",alignItems:"center"},children:[e.jsx("span",{style:{color:"#ffffff"},children:"Customer Testimonial ."}),e.jsx("span",{style:{color:"#000000"},children:"Client Feedbacks"}),e.jsx("span",{style:{color:"#ffffff"},children:"Customer Testimonial ."}),e.jsx("span",{style:{color:"#000000"},children:"Client Feedbacks"})]})}),e.jsx("section",{id:"testi",style:{paddingTop:"110px",paddingBottom:"120px",background:"#fff",overflow:"hidden"},children:(()=>{const t=[{name:"Mandira Bedi",img:"/influencer_marketing/img/testi/Mandira.png",text:"I've collaborated with Mélange across multiple shoots, and it has always been a smooth, collaborative, and comfortable process."},{name:"Karan Kundra",img:"/influencer_marketing/img/testi/Karan.jpeg",text:"Honestly, it felt more like a vacation with friends than a shoot."},{name:"Tejasswi Prakash",img:"/influencer_marketing/img/testi/Tejasswi.jpeg",text:"There is always a moment of laughter with the team."},{name:"Hebah Patel",img:"/influencer_marketing/img/testi/Hebah.jpeg",text:"Everything was so thoughtfully planned, and the energy is always fun, and I never realized when the shoot days got over."},{name:"Dheeraj Dhoopar",img:"/influencer_marketing/img/testi/Dheeraj.jpeg",text:"Unlike other work here there's always room to explore, improvise, and add my own touch."},{name:"Pooja Raut",img:"/influencer_marketing/img/testi/Pooja.png",text:"It's always been a pleasure working with Mélange. They delivered nearly double our campaign targets, driven by meticulous research and a spot-on selection of creators."},{name:"Puneet Kumar",img:"/influencer_marketing/img/testi/Puneet.png",text:"It's really fun to work with an agency that doesn't just understand the brief but truly gets the depth behind it."},{name:"Prabindar Singh",img:"/influencer_marketing/img/testi/Prabindar.png",text:"In a country where i had to make sweets a healthier option the team got the vision right from the start and they delivered the best work and helped bring in a brand face that just fit in the brand message perfectly."}],[i,s]=n.useState(3),[g,p]=n.useState(0),[d,h]=n.useState(!1);n.useEffect(()=>{const a=()=>{const r=window.innerWidth;r<640?s(1):r<1024?s(2):s(3)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),n.useEffect(()=>{if(d)return;const a=setInterval(()=>p(r=>(r+1)%t.length),3500);return()=>clearInterval(a)},[d,t.length]);const l=Math.max(0,t.length-i),B=Math.min(g,l)*(100/i),u=6,b=Math.round(Math.min(g,l)/(l||1)*(u-1))||0;return e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:e.jsxs("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{position:"relative"},children:[e.jsx("div",{style:{overflow:"hidden"},children:e.jsx("div",{style:{display:"flex",transform:`translateX(-${B}%)`,transition:"transform 900ms ease",willChange:"transform"},children:t.map((a,r)=>e.jsx("div",{style:{flex:`0 0 ${100/i}%`,padding:"0 18px",boxSizing:"border-box"},children:e.jsxs("div",{style:{textAlign:"center",padding:"10px 0",minHeight:"360px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",gap:"26px"},children:[e.jsx("div",{style:{width:"clamp(100px,14vw,160px)",height:"clamp(100px,14vw,160px)",borderRadius:"999px",overflow:"hidden",border:"10px solid #111",background:"#fff",boxSizing:"border-box"},children:e.jsx("img",{src:a.img,alt:a.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),e.jsx("p",{style:{margin:0,maxWidth:"360px",fontSize:"clamp(14px,1.5vw,18px)",lineHeight:1.9,color:"#111"},children:a.text}),e.jsxs("p",{style:{margin:0,fontWeight:900,fontSize:"clamp(14px,1.3vw,16px)",color:"#7a1ef1",letterSpacing:"0.3px"},children:["— ",a.name]})]})},r))})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginTop:"30px"},children:Array.from({length:u}).map((a,r)=>{const D=l===0?0:Math.round(r/(u-1)*l);return e.jsx("button",{type:"button",onClick:()=>p(D),style:{width:"12px",height:"12px",borderRadius:"999px",border:"none",cursor:"pointer",background:r===b?"#1e90ff":"#000",opacity:r===b?1:.9,transform:r===b?"scale(1.1)":"scale(1)",transition:"all 180ms ease"}},r)})})]})})})()}),e.jsx("section",{id:"contact",style:{paddingTop:"0px",paddingBottom:"130px",background:"#fff"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:e.jsxs("div",{id:"contact-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"26px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:900,letterSpacing:"0.6px",textTransform:"uppercase",color:"#111"},children:"Contact Us"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:"12px",fontSize:"clamp(32px,4vw,52px)",fontWeight:900,lineHeight:1.05,color:"#111",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"Let's work together"}),e.jsx("p",{style:{margin:0,fontSize:"clamp(15px,1.4vw,18px)",lineHeight:1.8,color:"#2b2b2b"},children:"Thank you for your interest in Mélange. We're excited to hear from you and will get back to you soon."})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[{icon:"/influencer_marketing/img/icon/gps.png",label:"Our Address",content:e.jsxs("p",{style:{marginTop:"6px",marginBottom:0,fontSize:"16px",lineHeight:1.75,color:"#2b2b2b"},children:["B12, 7th Floor, Silvio Heights,",e.jsx("br",{}),"St. Inez Road, Santa Inez,",e.jsx("br",{}),"Panaji, Goa-403001, India"]})},{icon:"/influencer_marketing/img/icon/mail.png",label:"Contact",content:e.jsx("a",{href:"mailto:hello@melangedigital.co",style:{display:"block",marginTop:"6px",fontSize:"16px",color:"#7a1ef1",textDecoration:"none",fontWeight:800},children:"hello@melangedigital.co"})},{icon:"/influencer_marketing/img/icon/clock.png",label:"Hours of Operation",content:e.jsx("div",{style:{marginTop:"6px",fontSize:"16px",color:"#2b2b2b"},children:"Monday - Friday: 10:00 - 19:00"})}].map((t,i)=>e.jsxs("div",{style:{display:"flex",gap:"14px",alignItems:"flex-start"},children:[e.jsx("div",{style:{width:"44px",height:"44px",flexShrink:0,borderRadius:"12px",background:"#f3ecff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("img",{src:t.icon,alt:"",style:{width:"22px",height:"22px",objectFit:"contain"}})}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,fontSize:"18px",fontWeight:900,color:"#111"},children:t.label}),t.content]})]},i))})]}),e.jsxs("div",{style:{borderRadius:"18px",background:"#fff",boxShadow:"0 18px 55px rgba(0,0,0,0.12)",padding:"26px"},children:[e.jsx("div",{style:{fontSize:"22px",fontWeight:900,marginBottom:"16px",color:"#111"},children:"Get in Touch with Our Team"}),A&&e.jsx("div",{style:{background:"#eefbf3",border:"1px solid #bfe7cc",padding:"14px 16px",borderRadius:"12px",color:"#0f5132",fontWeight:800,marginBottom:"14px"},children:"✅ Thanks! Your response has been submitted. We'll reach out soon."}),j&&e.jsx("div",{style:{background:"#fff0f0",border:"1px solid #ffcccc",padding:"14px 16px",borderRadius:"12px",color:"#8a1f1f",fontWeight:800,marginBottom:"14px"},children:j}),e.jsxs("form",{id:"webform823188000003621001",action:"https://crm.zoho.in/crm/WebToLeadForm",method:"POST",acceptCharset:"UTF-8",onSubmit:E,children:[e.jsx("input",{type:"text",style:{display:"none"},name:"xnQsjsdp",value:"d0afa95d6951e308dc4962f718b07538dd447dc9619956b507a91551ffa2a713",readOnly:!0}),e.jsx("input",{type:"hidden",name:"zc_gad",id:"zc_gad",defaultValue:""}),e.jsx("input",{type:"text",style:{display:"none"},name:"xmIwtLD",value:"a28bd82e599c4370550a44dfa7f34e63128c98319d025047dfae5bbe21ba787a01911914bc8deebfc75fd77f0c85bf07",readOnly:!0}),e.jsx("input",{type:"text",style:{display:"none"},name:"actionType",value:"TGVhZHM=",readOnly:!0}),e.jsx("input",{type:"text",style:{display:"none"},name:"returnURL",value:"null",readOnly:!0}),e.jsx("input",{type:"hidden",name:"aG9uZXlwb3Q",value:""}),[{label:"First Name",name:"First Name",id:"First_Name",required:!0,max:40},{label:"Last Name",name:"Last Name",id:"Last_Name",required:!0,max:80},{label:"Company",name:"Company",id:"Company",required:!0,max:200},{label:"Mobile",name:"Mobile",id:"Mobile",required:!0,max:30},{label:"Email",name:"Email",id:"Email",required:!0,max:100,type:"email"}].map(t=>e.jsxs("div",{style:{marginBottom:"14px"},children:[e.jsxs("label",{htmlFor:t.id,style:{display:"block",fontSize:"13px",fontWeight:900,color:"#111",marginBottom:"6px"},children:[t.label," ",t.required?e.jsx("span",{style:{color:"red"},children:"*"}):null]}),e.jsx("input",{id:t.id,name:t.name,type:t.type||"text",maxLength:t.max,"aria-required":t.required?"true":"false",style:{width:"100%",height:"48px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.12)",padding:"0 14px",fontSize:"15px",outline:"none"}})]},t.id)),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsx("label",{htmlFor:"Description",style:{display:"block",fontSize:"13px",fontWeight:900,color:"#111",marginBottom:"6px"},children:"Message"}),e.jsx("textarea",{id:"Description",name:"Description",style:{width:"100%",minHeight:"120px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.12)",padding:"12px 14px",fontSize:"15px",outline:"none",resize:"vertical"}})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx("button",{type:"submit",disabled:m,style:{height:"46px",padding:"0 22px",borderRadius:"12px",border:"none",background:m?"#b79af7":"#7a1ef1",color:"#fff",fontWeight:900,cursor:m?"not-allowed":"pointer"},children:m?"Submitting...":"Submit"}),e.jsx("button",{type:"reset",style:{height:"46px",padding:"0 22px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.18)",background:"#fff",color:"#111",fontWeight:900,cursor:"pointer"},children:"Reset"})]})]})]})]})})}),e.jsx(_,{})]})};export{G as default};
