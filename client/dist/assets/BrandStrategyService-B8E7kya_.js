import{r as n,j as e,W as _,N as F,i as N,F as E}from"./index-CuKC8I8T.js";import{b as P}from"./index-UoIplL0Z.js";const G=()=>{const c=({number:t,suffix:i,label:s})=>{const[x,p]=n.useState(0);return n.useEffect(()=>{let d=0;const l=t/(1200/16),f=setInterval(()=>{d+=l,d>=t?(p(t),clearInterval(f)):p(Math.floor(d))},16);return()=>clearInterval(f)},[t]),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("h3",{style:{fontSize:"clamp(36px, 6vw, 64px)",fontWeight:800,margin:0,color:"#7a1ef1"},children:[x,e.jsx("span",{style:{fontSize:"clamp(18px, 3vw, 32px)",marginLeft:"6px"},children:i})]}),e.jsx("p",{style:{marginTop:"10px",fontSize:"clamp(14px, 1.5vw, 18px)",fontWeight:500,color:"#333"},children:s})]})},[y,v]=n.useState(null),[T,m]=n.useState(!1),[I,B]=n.useState(!1),[g,w]=n.useState(!1),[j,k]=n.useState(""),[q,C]=n.useState(!1);n.useEffect(()=>{const t=()=>{C(window.innerWidth<576)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const W=t=>{v(t),m(!1),setTimeout(()=>m(!0),60)},S=()=>{m(!1),setTimeout(()=>v(null),260)},D=async t=>{t.preventDefault(),k(""),w(!0);try{const i=t.currentTarget,s=new FormData(i);await fetch("https://crm.zoho.in/crm/WebToLeadForm",{method:"POST",mode:"no-cors",body:s}),B(!0),i.reset()}catch{k("Something went wrong. Please try again.")}finally{w(!1)}},z=[{frontTitle:`Brand Positioning
& Identity`,image:"/influencer_marketing/img/images/Brand_Positioning_Identity.jpeg",emoji:"🎯",title:"Brand Positioning & Identity",desc:"Position your brand where competitors can't follow",list:["Deep brand discovery and values identification","Competitive analysis and market gap identification","Emotional positioning that resonates viscerally","Unique narrative architecture and story development","Category leadership positioning frameworks","Brand personality and voice definition"]},{frontTitle:`Target Market &
Consumer Intelligence`,image:"/influencer_marketing/img/images/Target_Market_Consumer_Intelligence.png",emoji:"🧠",title:"Target Market & Consumer Intelligence",desc:"Data-driven insights that predict what your customers want next",list:["Behavioral pattern analysis and purchase trigger identification","Advanced audience segmentation and profiling","Consumer journey mapping across all touchpoints","Psychographic profiling beyond basic demographics","Predictive insight research and trend forecasting","Actionable audience intelligence that drives conversions"]},{frontTitle:`Brand Architecture
& Portfolio Strategy`,image:"/influencer_marketing/img/images/Brand_Architecture_Portfolio_Strategy.jpeg",emoji:"🏗️",title:"Brand Architecture & Portfolio Strategy",desc:"Organize your offerings for maximum clarity and profitability",list:["Brand portfolio hierarchy and relationship mapping","Sub-brand positioning and differentiation strategy","Naming conventions and nomenclature systems","Product-to-brand architecture alignment","Customer decision journey optimization","Scalable expansion and growth frameworks"]},{frontTitle:`Competitive Intelligence
& Market Domination`,image:"/influencer_marketing/img/images/Competitive_Intelligence_Market_Domination.png",emoji:"📡",title:"Competitive Intelligence & Market Domination",desc:"Strategic intelligence that turns market gaps into your opportunities",list:["Comprehensive competitive landscape analysis","SWOT analysis and positioning gap identification","Market trend monitoring and opportunity spotting","White space identification and exploitation strategy","Differentiation frameworks that can't be replicated","Strategic positioning that reshapes market dynamics"]}],o=y!==null?z[y]:null,[M,L]=n.useState(0);return e.jsxs("div",{className:"overflow-hidden",children:[e.jsxs(_,{children:[e.jsx("title",{children:"Brand Strategy Services | Mélange Digital"}),e.jsx("meta",{name:"description",content:"Brand strategy for travel and tourism. Positioning, messaging, and go-to-market planning for tourism boards, hospitality, and travel brands."}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap",rel:"stylesheet"}),e.jsx("link",{rel:"canonical",href:"https://melangedigital.co/services/brand-strategy"}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Brand Strategy for Travel and Tourism",
        "name": "Brand Strategy and Planning for Travel and Tourism Brands",
        "description": "We build integrated brand strategies for travel brands, tourism boards, hospitality groups, and cruise lines — from market positioning and messaging frameworks to go-to-market planning and campaign execution across India, GCC, and global markets.",
        "url": "https://melangedigital.co/services/brand-strategy",
        "provider": {
          "@type": "Organization",
          "name": "Melange Digital",
          "url": "https://melangedigital.co"
        },
        "areaServed": [
          "India",
          "United Arab Emirates",
          "Singapore",
          "United Kingdom"
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://melangedigital.co/contact",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+91-9372567722"
          }
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Travel brands, tourism boards, hospitality groups, cruise lines, D2C travel startups, and destination marketing organisations"
        },
        "category": "Digital Marketing for Travel and Tourism"
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
      `}),e.jsx(F,{}),e.jsxs("section",{style:{position:"relative",overflow:"hidden",background:"#f6f5f7",minHeight:"100vh",display:"flex",alignItems:"center",fontFamily:'"Bricolage Grotesque", sans-serif'},children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&display=swap');

    @keyframes bsFadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes bsZoomIn {
      from { opacity: 0; transform: scale(0.94); }
      to   { opacity: 1; transform: scale(1); }
    }

    .bs-bubble {
      position: absolute;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid #ffffff;
      box-shadow: 0 4px 24px rgba(0,0,0,0.13);
    }
    .bs-bubble img {
      width: 100%; height: 100%;
      object-fit: cover; display: block;
    }

    .bs-grad-text {
      background: linear-gradient(90deg, #d946ef 0%, #a855f7 40%, #4f46e5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      display: block;
    }

    .bs-ring {
      position: absolute;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    .bs-ring-cut {
      border-radius: 50%;
      background: #f6f5f7;
      background-image:
        linear-gradient(to right, rgba(220,215,225,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(220,215,225,0.8) 1px, transparent 1px);
      background-size: 48px 48px;
    }

    /* ── DESKTOP LAYOUT ── */
    .bs-main-row {
      position: relative; z-index: 2;
      width: 100%; max-width: 1550px;
      margin: 0 auto;
      padding: 90px 55px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .bs-left {
      flex: 0 0 44%;
      animation: bsFadeUp .85s ease-out both;
    }

    .bs-headline-small {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 800;
      font-size: clamp(1.4rem, 2.4vw, 2.7rem);
      letter-spacing: -0.5px;
      color: #1c1c22;
      text-transform: uppercase;
      white-space: nowrap;
      margin-bottom: 4px;
    }

    .bs-headline-big {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 900;
      font-size: clamp(4rem, 7vw, 8rem);
      line-height: 0.88;
      letter-spacing: -3px;
      text-transform: uppercase;
    }

    /* Desktop visual cluster — absolute positioned */
    .bs-right {
      position: relative;
      flex: 0 0 56%;
      height: 580px;
      animation: bsZoomIn 1s ease-out both;
    }

    .bs-cluster {
      position: relative;
      width: 690px;
      height: 580px;
    }

    /* ── MOBILE ── */
    @media (max-width: 768px) {
      .bs-main-row {
        flex-direction: column;
        padding: 56px 24px 72px;
        gap: 0px;
        align-items: center;
        text-align: center;
      }

      .bs-left {
        flex: none;
        width: 100%;
        margin-bottom: 24px;
      }

      .bs-headline-small {
        font-size: 3.2vw !important;
        white-space: normal !important;
        margin-bottom: 6px;
      }

      .bs-headline-big {
        font-size: 17vw !important;
        letter-spacing: -1.5px !important;
        line-height: 0.9 !important;
      }

      /* On mobile the visual is a self-contained SVG-like block */
      .bs-right {
        flex: none;
        width: 100%;
        /* We'll use a centered container with known aspect ratio */
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* Wrapper that scales the entire cluster proportionally */
      .bs-cluster-scaler {
        /* Original cluster is ~690 wide. On mobile viewport ~390,
           we want it to occupy ~100% of width so scale = 390/690 ≈ 0.565
           But we use vw-based sizing instead for fluid behaviour */
        width: min(390px, 95vw);
        aspect-ratio: 690 / 580;
        position: relative;
      }

      /* Scale the 690×580 cluster to fit inside bs-cluster-scaler */
      .bs-cluster {
        position: absolute;
        top: 0; left: 0;
        width: 690px;
        height: 580px;
        transform-origin: top left;
        /* scale = container-width / 690 — done via CSS scale trick */
        transform: scale(calc(min(390px, 95vw) / 690));
      }

      /* hide bottom-left deco on mobile */
      .bs-deco-bl-circle,
      .bs-deco-bl-arc {
        display: none;
      }

      .bs-deco-top-dot {
        width: 65px !important;
        height: 65px !important;
        top: -10px !important;
        left: 18% !important;
      }

      .bs-deco-bc-stripe {
        width: 90px !important;
        height: 48px !important;
        left: 32% !important;
      }
    }

    /* Very small phones */
    @media (max-width: 390px) {
      .bs-cluster-scaler {
        width: 95vw;
      }
      .bs-cluster {
        transform: scale(calc(95vw / 690));
      }
    }

    /* Desktop — no scaler needed */
    @media (min-width: 769px) {
      .bs-cluster-scaler {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
      }
      .bs-cluster {
        transform: none;
      }
    }
  `}),e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",backgroundImage:"linear-gradient(to right, rgba(220,215,225,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,215,225,0.8) 1px, transparent 1px)",backgroundSize:"48px 48px"}}),e.jsx("div",{className:"bs-deco-top-dot",style:{position:"absolute",top:"-25px",left:"26%",width:"130px",height:"130px",borderRadius:"50%",background:"#c026d3",zIndex:1,pointerEvents:"none"}}),e.jsx("div",{className:"bs-deco-bl-circle",style:{position:"absolute",bottom:"-90px",left:"-90px",width:"250px",height:"250px",borderRadius:"50%",background:"linear-gradient(135deg, #d946ef 0%, #7c3aed 100%)",zIndex:2,pointerEvents:"none"}}),e.jsx("div",{className:"bs-deco-bl-arc",style:{position:"absolute",bottom:"-130px",left:"30px",width:"255px",height:"255px",borderRadius:"50%",border:"22px solid #4361ee",zIndex:1,pointerEvents:"none"}}),e.jsx("div",{className:"bs-deco-bc-stripe",style:{position:"absolute",bottom:"-10px",left:"36%",width:"170px",height:"90px",borderTopLeftRadius:"120px",borderTopRightRadius:"120px",background:"repeating-linear-gradient(135deg,#4d67ff 0 4px,transparent 4px 14px)",zIndex:1,pointerEvents:"none"}}),e.jsxs("div",{className:"bs-main-row",children:[e.jsxs("div",{className:"bs-left",children:[e.jsx("div",{className:"bs-headline-small",children:"TURNING EVERY BRAND INTO A"}),e.jsxs("div",{className:"bs-grad-text bs-headline-big",children:["MARKET",e.jsx("br",{}),"LEADER"]})]}),e.jsx("div",{className:"bs-right",children:e.jsx("div",{className:"bs-cluster-scaler",children:e.jsxs("div",{className:"bs-cluster",children:[e.jsx("div",{className:"bs-ring",style:{width:"480px",height:"480px",top:"50px",left:"100px",background:"linear-gradient(135deg, #f0abfc 0%, #e879f9 20%, #d946ef 60%, #c026d3 100%)",zIndex:2},children:e.jsx("div",{className:"bs-ring-cut",style:{width:"424px",height:"424px"}})}),e.jsx("div",{className:"bs-ring",style:{width:"480px",height:"480px",top:"60px",left:"190px",background:"linear-gradient(135deg, #a5b4fc 0%, #818cf8 20%, #6366f1 50%, #3b82f6 100%)",zIndex:3},children:e.jsx("div",{className:"bs-ring-cut",style:{width:"424px",height:"424px"}})}),e.jsx("div",{className:"bs-bubble",style:{width:"320px",height:"320px",top:"130px",left:"70px",zIndex:6,border:"6px solid #fff"},children:e.jsx("img",{src:"/influencer_marketing/img/images/brand1.png",alt:"Brand 1"})}),e.jsx("div",{className:"bs-bubble",style:{width:"190px",height:"190px",top:"35px",left:"505px",zIndex:5},children:e.jsx("img",{src:"/influencer_marketing/img/images/brand3.jpg",alt:"Brand 3"})}),e.jsx("div",{className:"bs-bubble",style:{width:"200px",height:"200px",top:"370px",left:"500px",zIndex:5},children:e.jsx("img",{src:"/influencer_marketing/img/images/brand2.png",alt:"Brand 2"})})]})})})]})]}),e.jsx("section",{id:"counter-section",style:{paddingTop:"50px",paddingBottom:"50px",background:"#ffffff"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},children:e.jsxs("div",{id:"counter-grid",children:[e.jsx(c,{number:500,suffix:"M+",label:"Reach"}),e.jsx(c,{number:50,suffix:"+",label:"Trusted Clients"}),e.jsx(c,{number:100,suffix:"+",label:"Creators Engaged"}),e.jsx(c,{number:10,suffix:"+",label:"Languages"})]})})}),e.jsx("div",{style:{width:"100%",overflow:"hidden",background:"#F8F8F8",padding:"20px 0"},children:e.jsx("div",{style:{display:"flex",whiteSpace:"nowrap",animation:"marquee 25s linear infinite",fontSize:"clamp(16px,2.5vw,28px)",fontWeight:700,gap:"60px"},children:["Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution"].map((t,i)=>e.jsxs("span",{style:{color:"#0f032f"},children:[t," "]},i))})}),e.jsx("div",{style:{width:"100%",overflow:"hidden",background:"#7a1ef1",padding:"20px 0"},children:e.jsx("div",{style:{display:"flex",whiteSpace:"nowrap",animation:"marqueeReverse 22s linear infinite",fontSize:"clamp(16px,2.5vw,28px)",fontWeight:700,color:"#fff",gap:"60px"},children:["Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution","Digital Solution","Development","Strategy","Creative Agency","Design","Solution","Branding","Idea","Strategy","Creative Agency","Design","Solution"].map((t,i)=>e.jsx("span",{children:t},i))})}),e.jsxs("section",{id:"service",style:{position:"relative",paddingBottom:"130px",paddingTop:"50px",overflow:"hidden",background:"#f7f7fb"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,zIndex:0},children:e.jsx("img",{src:"/influencer_marketing/img/shapes/service-shape-1.png",alt:"shape",style:{width:"420px",opacity:.25}})}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:2},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",letterSpacing:"1px",fontWeight:800,color:"#111",textTransform:"uppercase"},children:"What We Offer For You"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:0,fontSize:"clamp(32px,4.5vw,54px)",fontWeight:900,color:"#7a1ef1",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"How We Build Brands That Last"})]}),e.jsx("div",{id:"service-grid",children:z.map((t,i)=>e.jsx("button",{type:"button",onClick:()=>W(i),style:{border:"none",background:"transparent",padding:0,cursor:"pointer",textAlign:"left"},children:e.jsxs("div",{className:"service-card",style:{position:"relative",width:"100%",borderRadius:"14px",overflow:"hidden",boxShadow:"0 18px 40px rgba(0,0,0,0.12)",background:"#000"},children:[e.jsx("img",{src:t.image,alt:t.frontTitle,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",top:"16px",left:"16px",zIndex:4,color:"#fff",fontWeight:900,fontSize:"clamp(15px,1.5vw,20px)",lineHeight:1.15,whiteSpace:"pre-line",maxWidth:"90%",textShadow:"0 8px 22px rgba(0,0,0,0.35)"},children:t.frontTitle}),e.jsx("div",{style:{position:"absolute",bottom:"16px",left:"16px",zIndex:4,padding:"8px 12px",background:"rgba(255,255,255,0.16)",border:"1px solid rgba(255,255,255,0.22)",borderRadius:"999px",color:"#fff",fontSize:"13px",fontWeight:700,backdropFilter:"blur(6px)"},children:"Tap to explore"})]})},i))}),o&&e.jsx("div",{role:"presentation",onMouseDown:S,style:{position:"fixed",inset:0,zIndex:999999,background:"rgba(0,0,0,0.65)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:e.jsx("div",{onMouseDown:t=>t.stopPropagation(),className:"popup-inner",children:e.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",transformStyle:"preserve-3d",transition:"transform 0.65s ease",transform:T?"rotateY(180deg)":"rotateY(0deg)"},children:[e.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:"18px",overflow:"hidden",backfaceVisibility:"hidden",background:"#000",boxShadow:"0 40px 110px rgba(0,0,0,0.5)"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:o.bg,zIndex:1}}),e.jsx("div",{style:{position:"absolute",top:"-60px",right:"-20px",width:"220px",height:"220px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",bottom:"-50px",left:"-10px",width:"180px",height:"180px",borderRadius:"50%",background:"rgba(255,255,255,0.06)",zIndex:2}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.28)",zIndex:3}}),e.jsxs("div",{style:{position:"absolute",left:"26px",bottom:"26px",zIndex:4,color:"#fff"},children:[e.jsx("div",{style:{fontSize:"clamp(28px,4vw,42px)",marginBottom:"10px"},children:o.emoji}),e.jsx("div",{style:{fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,lineHeight:1.12},children:o.title}),e.jsx("div",{style:{marginTop:"12px",display:"inline-flex",padding:"10px 12px",borderRadius:"999px",background:"rgba(255,255,255,0.16)",border:"1px solid rgba(255,255,255,0.22)",fontWeight:800,fontSize:"clamp(12px,1.2vw,14px)"},children:"Flipping to details…"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:"18px",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg)",background:"#0b0b0f",color:"#fff",boxShadow:"0 40px 110px rgba(0,0,0,0.5)",padding:"clamp(18px,3vw,28px)",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{fontSize:"clamp(28px,4vw,44px)"},children:o.emoji}),e.jsx("h3",{style:{margin:"10px 0 12px",fontSize:"clamp(22px,3vw,36px)",fontWeight:900},children:o.title}),e.jsx("p",{style:{margin:0,color:"#d5d5d5",fontSize:"clamp(14px,1.4vw,16px)",lineHeight:1.95},children:o.desc}),e.jsxs("div",{style:{marginTop:"18px"},children:[e.jsx("div",{style:{fontWeight:900,marginBottom:"8px"},children:"Includes"}),e.jsx("ul",{style:{margin:0,paddingLeft:"18px",lineHeight:2},children:o.list.map((t,i)=>e.jsx("li",{style:{color:"#eaeaea",fontSize:"clamp(13px,1.3vw,15px)"},children:t},i))})]}),e.jsx("div",{style:{marginTop:"auto",paddingTop:"18px"},children:e.jsx("button",{type:"button",onClick:S,style:{width:"100%",padding:"14px 16px",borderRadius:"14px",border:"1px solid rgba(255,255,255,0.22)",background:"rgba(255,255,255,0.08)",color:"#fff",fontWeight:900,cursor:"pointer"},children:"Click anywhere to close"})})]})]})})})]})]}),e.jsx("section",{id:"features",style:{paddingTop:"20px",paddingBottom:"60px",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"44px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:900,letterSpacing:"0.6px",textTransform:"uppercase",color:"#111"},children:"Why Brands Choose Us"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:0,fontSize:"clamp(32px,4.5vw,54px)",fontWeight:900,color:"#7a1ef1",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"What Makes Our Brand Strategy Different"})]}),e.jsx("div",{id:"features-grid",children:[{gif:"/influencer_marketing/img/cashback.gif",title:"Strategy First, Always. Design Second.",text:"We start with strategy, not aesthetics. Before any design, we immerse in your market, dissect the competition, and understand customer motivations. This foundation ensures every creative decision is strategic and drives performance."},{gif:"/influencer_marketing/img/processing-speed.gif",title:"Data-Driven Creativity That Actually Converts",text:"Every positioning decision, messaging framework, and visual element is backed by consumer psychology and market research. Our strategists and creatives work together, ensuring your brand is emotionally resonant and commercially viable."},{gif:"/influencer_marketing/img/quick-idea.gif",title:"From Mumbai Startups to Global Tourism Boards",text:"We've positioned local brands into household names and global organizations entering new markets. Cross-industry intelligence ensures your brand resonates locally authentic, globally relevant. Siam Malls, Singapore Tourism, Sharjah Tourism trusted us."},{gif:"/influencer_marketing/img/puzzle.gif",title:"Complete Brand Ecosystem, Not Just a Logo Package",text:"We build complete brand ecosystems from positioning to implementation, research to launch strategy. You get frameworks, messaging architecture, visual systems, competitive intelligence, and roadmaps. Everything needed for market domination."}].map((t,i)=>e.jsxs("div",{style:{width:"100%",borderRadius:"12px",padding:"24px",background:"#fff",boxShadow:"0 12px 36px rgba(0,0,0,0.12)",display:"flex",flexDirection:"column",gap:"10px",minHeight:"200px"},children:[e.jsx("img",{src:t.gif,alt:t.title,style:{width:"44px",height:"44px",objectFit:"contain"}}),e.jsx("h3",{style:{margin:0,fontWeight:900,fontSize:"clamp(16px,1.6vw,20px)",color:"#111"},children:t.title}),e.jsx("p",{style:{margin:0,fontSize:"clamp(14px,1.4vw,18px)",lineHeight:1.7,color:"#2b2b2b"},children:t.text})]},i))})]})}),e.jsx("section",{id:"project",style:{paddingTop:"50px",paddingBottom:"100px",background:"#fff"},children:e.jsx(N,{works:P},M)}),e.jsx("div",{style:{overflow:"hidden",background:"#7a1ef1",padding:"20px 0",position:"relative"},children:e.jsxs("div",{style:{display:"flex",width:"fit-content",animation:"marquee 22s linear infinite",whiteSpace:"nowrap",gap:"100px",fontWeight:900,fontSize:"clamp(36px,6vw,72px)",alignItems:"center"},children:[e.jsx("span",{style:{color:"#ffffff"},children:"Customer Testimonial ."}),e.jsx("span",{style:{color:"#000000"},children:"Client Feedbacks"}),e.jsx("span",{style:{color:"#ffffff"},children:"Customer Testimonial ."}),e.jsx("span",{style:{color:"#000000"},children:"Client Feedbacks"})]})}),e.jsx("section",{id:"testi",style:{paddingTop:"110px",paddingBottom:"120px",background:"#fff",overflow:"hidden"},children:(()=>{const t=[{name:"Mandira Bedi",img:"/influencer_marketing/img/testi/Mandira.png",text:"I've collaborated with Mélange across multiple shoots, and it has always been a smooth, collaborative, and comfortable process."},{name:"Karan Kundra",img:"/influencer_marketing/img/testi/Karan.jpeg",text:"Honestly, it felt more like a vacation with friends than a shoot."},{name:"Tejasswi Prakash",img:"/influencer_marketing/img/testi/Tejasswi.jpeg",text:"There is always a moment of laughter with the team."},{name:"Hebah Patel",img:"/influencer_marketing/img/testi/Hebah.jpeg",text:"Everything was so thoughtfully planned, and the energy is always fun, and I never realized when the shoot days got over."},{name:"Dheeraj Dhoopar",img:"/influencer_marketing/img/testi/Dheeraj.jpeg",text:"Unlike other work here there's always room to explore, improvise, and add my own touch."},{name:"Pooja Raut",img:"/influencer_marketing/img/testi/Pooja.png",text:"It's always been a pleasure working with Mélange. They delivered nearly double our campaign targets, driven by meticulous research and a spot-on selection of creators."},{name:"Puneet Kumar",img:"/influencer_marketing/img/testi/Puneet.png",text:"It's really fun to work with an agency that doesn't just understand the brief but truly gets the depth behind it."},{name:"Prabindar Singh",img:"/influencer_marketing/img/testi/Prabindar.png",text:"In a country where i had to make sweets a healthier option the team got the vision right from the start and they delivered the best work and helped bring in a brand face that just fit in the brand message perfectly."}],[i,s]=n.useState(3),[x,p]=n.useState(0),[d,h]=n.useState(!1);n.useEffect(()=>{const r=()=>{const a=window.innerWidth;a<640?s(1):a<1024?s(2):s(3)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),n.useEffect(()=>{if(d)return;const r=setInterval(()=>p(a=>(a+1)%t.length),3500);return()=>clearInterval(r)},[d,t.length]);const l=Math.max(0,t.length-i),A=Math.min(x,l)*(100/i),u=6,b=Math.round(Math.min(x,l)/(l||1)*(u-1))||0;return e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:e.jsxs("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{position:"relative"},children:[e.jsx("div",{style:{overflow:"hidden"},children:e.jsx("div",{style:{display:"flex",transform:`translateX(-${A}%)`,transition:"transform 900ms ease",willChange:"transform"},children:t.map((r,a)=>e.jsx("div",{style:{flex:`0 0 ${100/i}%`,padding:"0 18px",boxSizing:"border-box"},children:e.jsxs("div",{style:{textAlign:"center",padding:"10px 0",minHeight:"360px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",gap:"26px"},children:[e.jsx("div",{style:{width:"clamp(100px,14vw,160px)",height:"clamp(100px,14vw,160px)",borderRadius:"999px",overflow:"hidden",border:"10px solid #111",background:"#fff",boxSizing:"border-box"},children:e.jsx("img",{src:r.img,alt:r.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),e.jsx("p",{style:{margin:0,maxWidth:"360px",fontSize:"clamp(14px,1.5vw,18px)",lineHeight:1.9,color:"#111"},children:r.text}),e.jsxs("p",{style:{margin:0,fontWeight:900,fontSize:"clamp(14px,1.3vw,16px)",color:"#7a1ef1",letterSpacing:"0.3px"},children:["— ",r.name]})]})},a))})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginTop:"30px"},children:Array.from({length:u}).map((r,a)=>{const R=l===0?0:Math.round(a/(u-1)*l);return e.jsx("button",{type:"button",onClick:()=>p(R),style:{width:"12px",height:"12px",borderRadius:"999px",border:"none",cursor:"pointer",background:a===b?"#1e90ff":"#000",opacity:a===b?1:.9,transform:a===b?"scale(1.1)":"scale(1)",transition:"all 180ms ease"}},a)})})]})})})()}),e.jsx("section",{id:"contact",style:{paddingTop:"0px",paddingBottom:"130px",background:"#fff"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"},children:e.jsxs("div",{id:"contact-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"26px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:900,letterSpacing:"0.6px",textTransform:"uppercase",color:"#111"},children:"Contact Us"}),e.jsx("h2",{style:{marginTop:"14px",marginBottom:"12px",fontSize:"clamp(32px,4vw,52px)",fontWeight:900,lineHeight:1.05,color:"#111",fontFamily:"Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial"},children:"Let's work together"}),e.jsx("p",{style:{margin:0,fontSize:"clamp(15px,1.4vw,18px)",lineHeight:1.8,color:"#2b2b2b"},children:"Thank you for your interest in Mélange. We're excited to hear from you and will get back to you soon."})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[{icon:"/influencer_marketing/img/icon/gps.png",label:"Our Address",content:e.jsxs("p",{style:{marginTop:"6px",marginBottom:0,fontSize:"16px",lineHeight:1.75,color:"#2b2b2b"},children:["B12, 7th Floor, Silvio Heights,",e.jsx("br",{}),"St. Inez Road, Santa Inez,",e.jsx("br",{}),"Panaji, Goa-403001, India"]})},{icon:"/influencer_marketing/img/icon/mail.png",label:"Contact",content:e.jsx("a",{href:"mailto:hello@melangedigital.co",style:{display:"block",marginTop:"6px",fontSize:"16px",color:"#7a1ef1",textDecoration:"none",fontWeight:800},children:"hello@melangedigital.co"})},{icon:"/influencer_marketing/img/icon/clock.png",label:"Hours of Operation",content:e.jsx("div",{style:{marginTop:"6px",fontSize:"16px",color:"#2b2b2b"},children:"Monday - Friday: 10:00 - 19:00"})}].map((t,i)=>e.jsxs("div",{style:{display:"flex",gap:"14px",alignItems:"flex-start"},children:[e.jsx("div",{style:{width:"44px",height:"44px",flexShrink:0,borderRadius:"12px",background:"#f3ecff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("img",{src:t.icon,alt:"",style:{width:"22px",height:"22px",objectFit:"contain"}})}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,fontSize:"18px",fontWeight:900,color:"#111"},children:t.label}),t.content]})]},i))})]}),e.jsxs("div",{style:{borderRadius:"18px",background:"#fff",boxShadow:"0 18px 55px rgba(0,0,0,0.12)",padding:"26px"},children:[e.jsx("div",{style:{fontSize:"22px",fontWeight:900,marginBottom:"16px",color:"#111"},children:"Get in Touch with Our Team"}),I&&e.jsx("div",{style:{background:"#eefbf3",border:"1px solid #bfe7cc",padding:"14px 16px",borderRadius:"12px",color:"#0f5132",fontWeight:800,marginBottom:"14px"},children:"✅ Thanks! Your response has been submitted. We'll reach out soon."}),j&&e.jsx("div",{style:{background:"#fff0f0",border:"1px solid #ffcccc",padding:"14px 16px",borderRadius:"12px",color:"#8a1f1f",fontWeight:800,marginBottom:"14px"},children:j}),e.jsxs("form",{id:"webform823188000003621001",action:"https://crm.zoho.in/crm/WebToLeadForm",method:"POST",acceptCharset:"UTF-8",onSubmit:D,children:[e.jsx("input",{type:"text",style:{display:"none"},name:"xnQsjsdp",value:"d0afa95d6951e308dc4962f718b07538dd447dc9619956b507a91551ffa2a713",readOnly:!0}),e.jsx("input",{type:"hidden",name:"zc_gad",id:"zc_gad",defaultValue:""}),e.jsx("input",{type:"text",style:{display:"none"},name:"xmIwtLD",value:"a28bd82e599c4370550a44dfa7f34e63128c98319d025047dfae5bbe21ba787a01911914bc8deebfc75fd77f0c85bf07",readOnly:!0}),e.jsx("input",{type:"text",style:{display:"none"},name:"actionType",value:"TGVhZHM=",readOnly:!0}),e.jsx("input",{type:"text",style:{display:"none"},name:"returnURL",value:"null",readOnly:!0}),e.jsx("input",{type:"hidden",name:"aG9uZXlwb3Q",value:""}),[{label:"First Name",name:"First Name",id:"First_Name",required:!0,max:40},{label:"Last Name",name:"Last Name",id:"Last_Name",required:!0,max:80},{label:"Company",name:"Company",id:"Company",required:!0,max:200},{label:"Mobile",name:"Mobile",id:"Mobile",required:!0,max:30},{label:"Email",name:"Email",id:"Email",required:!0,max:100,type:"email"}].map(t=>e.jsxs("div",{style:{marginBottom:"14px"},children:[e.jsxs("label",{htmlFor:t.id,style:{display:"block",fontSize:"13px",fontWeight:900,color:"#111",marginBottom:"6px"},children:[t.label," ",t.required?e.jsx("span",{style:{color:"red"},children:"*"}):null]}),e.jsx("input",{id:t.id,name:t.name,type:t.type||"text",maxLength:t.max,"aria-required":t.required?"true":"false",style:{width:"100%",height:"48px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.12)",padding:"0 14px",fontSize:"15px",outline:"none"}})]},t.id)),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsx("label",{htmlFor:"Description",style:{display:"block",fontSize:"13px",fontWeight:900,color:"#111",marginBottom:"6px"},children:"Message"}),e.jsx("textarea",{id:"Description",name:"Description",style:{width:"100%",minHeight:"120px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.12)",padding:"12px 14px",fontSize:"15px",outline:"none",resize:"vertical"}})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx("button",{type:"submit",disabled:g,style:{height:"46px",padding:"0 22px",borderRadius:"12px",border:"none",background:g?"#b79af7":"#7a1ef1",color:"#fff",fontWeight:900,cursor:g?"not-allowed":"pointer"},children:g?"Submitting...":"Submit"}),e.jsx("button",{type:"reset",style:{height:"46px",padding:"0 22px",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.18)",background:"#fff",color:"#111",fontWeight:900,cursor:"pointer"},children:"Reset"})]})]})]})]})})}),e.jsx(E,{})]})};export{G as default};
