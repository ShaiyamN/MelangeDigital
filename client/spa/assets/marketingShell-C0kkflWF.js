import{r as d,j as s,N as E,F as v}from"./index-lIy-7k_P.js";const A="/destination-marketing-agency";function u(e){var t;(t=document.getElementById("boot-loader"))==null||t.classList.toggle("hidden",!e)}function k(e,t){const r=document.querySelector(`link[href="${e}"]`);return r?r.sheet?Promise.resolve():new Promise(n=>{r.addEventListener("load",()=>n(),{once:!0}),r.addEventListener("error",()=>n(),{once:!0})}):new Promise(n=>{const o=document.createElement("link");o.rel="stylesheet",o.href=e,o.setAttribute(t,e),o.onload=()=>n(),o.onerror=()=>n(),document.head.appendChild(o)})}function w(e,t){return new Promise((r,n)=>{const o=document.createElement("script");o.src=e,o.async=!1,o.setAttribute(t,"1"),o.onload=()=>r(),o.onerror=()=>n(new Error(`Failed to load ${e}`)),document.body.appendChild(o)})}const j=e=>`
  body.${e}-react .font-bricolage.fixed {
    z-index: 100 !important;
  }
  body.${e}-react .font-bricolage.fixed,
  body.${e}-react .font-bricolage.fixed *,
  body.${e}-react > .font-bricolage,
  body.${e}-react > .font-bricolage * {
    font-family: "Bricolage Grotesque", sans-serif !important;
  }
  body.${e}-react .font-bricolage.fixed a,
  body.${e}-react > .font-bricolage a {
    text-decoration: none !important;
    color: inherit;
  }
  body.${e}-react {
    --nav-sticky-offset: 64px;
    padding-top: 4rem;
    background: #fff;
  }
  @media (min-width: 640px) {
    body.${e}-react {
      --nav-sticky-offset: 84.8px;
      padding-top: 5.3rem;
    }
  }
`;function b(e){return typeof document>"u"?!1:e.every(t=>{var r;return!!((r=document.querySelector(`link[href="${t}"]`))!=null&&r.sheet)})}function g(e,t,r){const n=d.useRef(0),[o,y]=d.useState(()=>b(t));return d.useLayoutEffect(()=>{b(t)||u(!0)},[]),d.useEffect(()=>{const h=`data-${e}-css`,p=`data-${e}-js`,l=`data-${e}-base`,f=`${e}-react`,$=()=>{document.querySelectorAll(`script[${p}]`).forEach(a=>a.remove())};document.documentElement.classList.add("w-mod-js"),document.body.classList.add("body",f);let i=document.querySelector(`base[${l}]`);i||(i=document.createElement("base"),i.setAttribute(l,"1"),document.head.insertBefore(i,document.head.firstChild)),i.setAttribute("href",`${A}/`);const m=++n.current;let c=!1;return(async()=>{if($(),b(t)||y(!1),await Promise.all(t.map(a=>k(a,h))),!(c||n.current!==m)){y(!0),u(!1);try{for(const a of r){if(c||n.current!==m)return;const x=a.includes("?")?"&":"?";await w(`${a}${x}${e}=${m}`,p)}}catch(a){c||console.error(`[${f}]`,a)}}})(),()=>{c=!0,u(!1),document.body.classList.remove("body",f),document.querySelectorAll(`base[${l}]`).forEach(a=>a.remove()),$()}},[]),o}function L({slug:e,cssReady:t,markup:r}){return s.jsxs(s.Fragment,{children:[s.jsx(E,{}),s.jsx("div",{id:"siteNav",className:"pointer-events-none invisible fixed top-0 left-0 z-0 w-full h-16 sm:h-[5.3rem]","aria-hidden":"true"}),s.jsx("div",{className:`${e}-react-root${t?` ${e}-css-ready`:""}`,style:t?void 0:{opacity:0,visibility:"hidden"},dangerouslySetInnerHTML:{__html:r}}),s.jsx(v,{})]})}export{L as M,A as a,j as m,g as u};
