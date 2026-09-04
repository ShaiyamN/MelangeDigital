import{r,j as e,W as l,N as s,i as o,F as d}from"./index-CuKC8I8T.js";import{d as c}from"./index-UoIplL0Z.js";import{B as g}from"./BreadCrumbs-DnUol1lY.js";const h="/assets/greenLabel-DFvAsWhK.png",a=h,u=()=>{const n=[{displayName:"Home",url:"/"},{displayName:"Work",url:"/work"},{displayName:"Green Label",url:"/work/green-label"}];return r.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{style:{overflow:"hidden"},children:[e.jsxs(l,{children:[e.jsx("title",{children:"Green Label – #AsliRichAndSmooth | Melange Digital"}),e.jsx("meta",{name:"description",content:"How we made Maharashtra fall in love with Green Label through #AsliRichAndSmooth — a compliant, creator-led influencer campaign celebrating everyday wins."}),e.jsx("meta",{property:"og:title",content:"Green Label – #AsliRichAndSmooth | Melange Digital"}),e.jsx("meta",{property:"og:description",content:"How we made Maharashtra fall in love with Green Label through #AsliRichAndSmooth"}),e.jsx("link",{rel:"canonical",href:"https://melangedigital.co/work/green-label"})]}),e.jsx("style",{children:`
        * { box-sizing: border-box; }

        /* ── Banner ── */
        .gl-banner-wrapper {
          padding-top: 112px;
        }
        @media (max-width: 768px) {
          .gl-banner-wrapper { padding-top: 80px; }
        }

        .gl-banner {
          width: 100%;
          min-height: 520px;
          background-image: url(${a});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        @media (max-width: 768px) {
          .gl-banner { min-height: 320px; }
        }
        @media (max-width: 480px) {
          .gl-banner { min-height: 220px; }
        }

        /* ── Main content wrapper ── */
        .gl-page {
          font-family: 'Nunito', sans-serif;
          background: #fff;
          padding-bottom: 80px;
        }

        .gl-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ── Breadcrumb ── */
        .gl-breadcrumb {
          padding: 32px 20px 0;
          max-width: 1200px;
          margin: 0 auto;
          font-size: 16px;
        }
        @media (min-width: 1024px) {
          .gl-breadcrumb { padding: 40px 80px 0; }
        }

        /* ── Hero title ── */
        .gl-hero-title {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 0;
        }
        @media (min-width: 1024px) {
          .gl-hero-title { padding: 40px 80px 0; }
        }
        .gl-hero-title h1 {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.2;
          color: #000144;
          margin: 0;
        }

        /* ── Intro + Stats + Services row ── */
        .gl-intro-row {
          max-width: 1200px;
          margin: 48px auto 0;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .gl-intro-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0 80px;
            gap: 60px;
          }
        }

        .gl-intro-text {
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.95;
          color: #111;
          margin: 0;
        }
        .gl-intro-text + .gl-intro-text { margin-top: 18px; }

        /* ── Stat cards ── */
        .gl-stats {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .gl-stat-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          padding: 12px 16px;
          background: linear-gradient(to left, #bfdbfe, #e9d5ff, #f5d0fe);
        }
        @media (min-width: 1024px) {
          .gl-stat-card { width: 160px; height: 85px; }
        }
        @media (max-width: 1023px) {
          .gl-stat-card { flex: 1; padding: 10px 8px; }
        }
        .gl-stat-value {
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 800;
          color: #111;
          line-height: 1;
        }
        .gl-stat-label {
          font-size: clamp(10px, 1vw, 13px);
          color: #111;
          text-align: center;
          margin-top: 4px;
          line-height: 1.3;
        }

        /* Services list */
        .gl-services-label {
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700;
          margin-bottom: 10px;
          margin-top: 0;
        }
        .gl-service-item {
          font-size: clamp(14px, 1.3vw, 17px);
          font-weight: 600;
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
          white-space: nowrap;
        }

        /* ── Section wrapper ── */
        .gl-section {
          max-width: 1200px;
          margin: 64px auto 0;
          padding: 0 20px;
        }
        @media (min-width: 1024px) {
          .gl-section { margin-top: 80px; padding: 0 80px; }
        }

        /* ── Section heading ── */
        .gl-section-heading {
          font-weight: 900;
          font-size: clamp(28px, 3.5vw, 40px);
          color: #000144;
          margin: 0 0 24px;
          line-height: 1.1;
        }
        .gl-section-heading span {
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Numbered heading (01. 02. etc) ── */
        .gl-num-heading {
          font-weight: 900;
          font-size: clamp(22px, 2.5vw, 32px);
          color: #111;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        /* ── Body text ── */
        .gl-body {
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
          margin: 0;
        }

        /* ── List ── */
        .gl-list {
          margin: 14px 0 0;
          padding-left: 22px;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
        }
        .gl-list li { margin-bottom: 6px; }

        /* ── Two column grid ── */
        .gl-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 1100px) {
          .gl-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        /* ── Right images stack ── */
        .gl-right-images {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        @media (max-width: 1100px) {
          .gl-right-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .gl-right-img-wrap { height: 200px !important; }
        }
        @media (max-width: 640px) {
          .gl-right-images { grid-template-columns: 1fr !important; }
          .gl-right-img-wrap { height: 220px !important; }
        }

        /* ── Step row (execution) ── */
        .gl-step-row {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 64px;
        }
        @media (min-width: 1024px) {
          .gl-step-row {
            flex-direction: row;
            gap: 48px;
            align-items: flex-start;
          }
        }
        .gl-step-img {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 18px 60px rgba(0,0,0,0.10);
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .gl-step-img { width: 420px; }
        }
        .gl-step-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          min-height: 280px;
        }

        /* ── Results bullets ── */
        .gl-results-list {
          margin: 0 0 32px;
          padding-left: 22px;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
        }
        .gl-results-list li { margin-bottom: 10px; }

        /* ── Nav ── */
        .gl-nav {
          max-width: 1200px;
          margin: 60px auto 0;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        @media (min-width: 1024px) {
          .gl-nav { padding: 0 80px; }
        }
        .gl-nav a {
          font-weight: 800;
          text-decoration: none;
          color: #111;
          font-size: clamp(14px, 1.3vw, 16px);
          transition: opacity 0.2s;
        }
        .gl-nav a:hover { opacity: 0.6; }
      `}),e.jsx(s,{}),e.jsxs("div",{className:"pt-28 md:pt-32 font-nunito pb-14 transition-scrolling max-container",children:[e.jsx("div",{className:"font-nunito text-[16px] lg:text-[18px] lg:px-20 px-5 lg:mb-[40px] mb-6",children:e.jsx(g,{breadcrumbs:n})}),e.jsx("div",{className:"gl-hero-title",children:e.jsx("h1",{children:"Making Maharashtra Fall in Love with Green Label Through Authentic Creator Storytelling"})}),e.jsx("img",{src:a,alt:"Zambia Tourism Campaign",className:"w-[90%] mx-auto mt-10 mb-10 lg:rounded-[20px] rounded-[8px] object-cover"}),e.jsxs("div",{className:"gl-intro-row",children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("p",{className:"gl-intro-text",children:"When your product can't speak for itself, your story has to do the heavy lifting. For Green Label, we had to create desire without ever showing indulgence and make Maharashtra fall in love with the feeling of smooth, not just the drink."}),e.jsx("p",{className:"gl-intro-text",style:{marginTop:18},children:"#AsliRichAndSmooth became our way in. A campaign that celebrated everyday wins, local voices, and that effortless swagger you can't fake. And just like that, a compliance brief turned into a cultural moment worth toasting."})]}),e.jsxs("div",{style:{flexShrink:0},children:[e.jsx("div",{className:"gl-stats",style:{marginBottom:32},children:[{value:"5.5L+",label:"Organic Views"},{value:"476K+",label:"Reach"},{value:"100%",label:"Compliance"}].map(({value:i,label:t})=>e.jsxs("div",{className:"gl-stat-card",children:[e.jsx("div",{className:"gl-stat-value",children:i}),e.jsx("div",{className:"gl-stat-label",children:t})]},t))}),e.jsx("p",{className:"gl-services-label",children:"Services"}),["Influencer Marketing","Content Strategy","Compliance Consulting","Creator Management"].map(i=>e.jsx("p",{className:"gl-service-item",children:i},i))]})]}),e.jsxs("div",{className:"gl-section",children:[e.jsxs("p",{className:"gl-section-heading",children:["Insight & ",e.jsx("span",{children:"Strategy"})]}),e.jsx("p",{className:"gl-body",children:"Our approach was built on a fundamental understanding of compliant alcohol marketing. Without the ability to show the product directly, the brand had to live inside the moments people already loved—everyday achievements, local pride, and the quiet confidence of success. We focused on:"}),e.jsxs("ul",{className:"gl-list",style:{marginTop:20},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keeping the bottle in the background"})," and letting authentic human moments do the talking—new jobs, new cars, promotions, milestones that real Maharashtra audiences recognized."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Selecting creators with cultural roots"}),", not just follower counts, ensuring the campaign felt local and genuine rather than paid and polished."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Building platform-safe scripts"})," for every creator that felt like natural storytelling, never forced advertising, keeping creativity intact while staying fully compliant."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Targeting a precise demographic"}),"—male, 25–34, Maharashtra-based—with geo-targeted creator selections across Mumbai, Pune, Nagpur, and Nashik."]})]})]}),e.jsxs("div",{className:"gl-section",children:[e.jsx("p",{className:"gl-section-heading",children:e.jsx("span",{children:"Execution"})}),e.jsxs("div",{style:{marginTop:8},children:[e.jsxs("div",{className:"gl-step-row",children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("p",{className:"gl-num-heading",children:"01. The Challenge"}),e.jsx("p",{className:"gl-body",children:`Green Label wanted to build brand love in Maharashtra by celebrating everyday wins without breaking strict platform guidelines around alcohol marketing. We were tasked to make this whiskey synonymous with life's smoothest moments while staying fully compliant. Not easy—but we love a "Difficult Pro Max" challenge.`}),e.jsxs("ul",{className:"gl-list",children:[e.jsx("li",{children:"Platform restrictions meant the product itself couldn't be the hero—requiring a story-first, product-second creative approach."}),e.jsx("li",{children:"The brand needed to build genuine affinity in a market saturated with both local and international whiskey brands."}),e.jsx("li",{children:"Any misstep on compliance would risk the entire campaign being pulled, making every script and integration a high-stakes creative decision."})]})]}),e.jsx("div",{className:"gl-step-img",style:{height:320},children:e.jsx("img",{src:"/influencer_marketing/img/project/9.PNG",alt:"Green Label Challenge",style:{objectPosition:"center 20%"}})})]}),e.jsxs("div",{className:"gl-step-row",children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("p",{className:"gl-num-heading",children:"02. Creator Selection & Collaboration"}),e.jsxs("p",{className:"gl-body",children:["Collaborated with"," ",e.jsx("strong",{children:"10 top Maharashtra-based creators"})," (micro to macro) who had a deep cultural connection with the target audience:"]}),e.jsxs("ul",{className:"gl-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Micro to macro creator mix"})," ensuring both broad reach and deep community engagement across different Maharashtra cities."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Local language storytelling"}),"—creators shared authentic stories in Marathi and Hindi, making the brand feel genuinely rooted in the culture."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Personalized scripts"})," crafted for each creator, ensuring content felt native to their voice and audience rather than templated advertising."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Platform-safe integrations"})," reviewed and approved at every stage, maintaining 100% compliance without losing creative impact."]})]})]}),e.jsx("div",{className:"gl-step-img",style:{height:320},children:e.jsx("img",{src:"/influencer_marketing/img/project/8.PNG",alt:"Creator Collaboration",style:{objectPosition:"center 20%"}})})]}),e.jsxs("div",{className:"gl-step-row",children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("p",{className:"gl-num-heading",children:"03. Content Strategy & Real-Time Storytelling"}),e.jsx("p",{className:"gl-body",children:"Every piece of content was engineered to feel organic while delivering measurable brand recall:"}),e.jsxs("ul",{className:"gl-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Celebration-first narratives"}),"—stories of everyday wins (new job, new car, promotion) that naturally wove the #AsliRichAndSmooth sentiment into real life moments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Short-form Reels and Stories"})," optimized for Instagram's algorithm, maximizing organic reach without paid amplification."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Comment and DM engagement"})," managed in real-time, building community around the hashtag and turning viewers into advocates."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Geo-targeted distribution"})," ensuring content surfaced prominently to Mumbai, Pune, Nagpur, and Nashik audiences who were the core market."]})]})]}),e.jsx("div",{className:"gl-step-img",style:{height:320},children:e.jsx("img",{src:"/influencer_marketing/img/project/10.PNG",alt:"Content Strategy",style:{objectPosition:"center 20%"}})})]})]})]}),e.jsxs("div",{className:"gl-section",children:[e.jsx("p",{className:"gl-section-heading",children:e.jsx("span",{children:"Results"})}),e.jsx("p",{className:"gl-body",style:{marginBottom:16},children:"The results poured in smooth as the whiskey itself. The #AsliRichAndSmooth campaign transformed Green Label from a product bound by restrictions into a cultural badge of everyday achievement across Maharashtra:"}),e.jsxs("ul",{className:"gl-results-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"5.5L+ Organic Views"})," — highest-performing campaign in the brand's Maharashtra influencer history."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"476K+ Reach"})," across 10 creator profiles, entirely organic without paid media boosting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"15K+ Likes"})," and ",e.jsx("strong",{children:"320+ Comments"})," ","demonstrating active audience engagement, not passive viewing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"100% Compliance"})," — zero platform violations across all 10 creator integrations, setting a benchmark for alcohol marketing done right."]})]}),e.jsx("p",{className:"gl-body",style:{fontWeight:700,marginBottom:12},children:"Audience & Demographics:"}),e.jsxs("ul",{className:"gl-results-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"73.7% Male audience"})," with"," ",e.jsx("strong",{children:"56.7% aged 25–34"}),"—precisely the target demographic reached."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"100% Maharashtra-based reach"}),", with Mumbai, Pune, Nagpur, and Nashik leading engagement."]}),e.jsx("li",{children:"Creators' audiences showed strong brand affinity signals—saves, shares, and repeat engagement—indicating genuine connection beyond surface metrics."})]}),e.jsx("p",{className:"gl-body",style:{marginTop:16},children:"By keeping the product in the background and the people in the foreground, we didn't just run a compliant campaign—we created a cultural moment. #AsliRichAndSmooth became shorthand for the feeling Green Label wanted to own: smooth confidence, local pride, and the quiet satisfaction of a life well lived. Maharashtra noticed, and the numbers proved it."})]}),e.jsxs("div",{className:"gl-nav",children:[e.jsx("a",{href:"/siam-malls",children:"‹ Previous post"}),e.jsx("a",{href:"/ganga-fashion",children:"Next post ›"})]})]}),e.jsx(o,{works:c}),e.jsx(d,{})]})};export{u as default};
