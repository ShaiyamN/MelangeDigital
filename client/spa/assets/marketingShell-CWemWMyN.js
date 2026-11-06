import{r as l,j as s,N as v,F as E}from"./index-BYJOK_8i.js";const w="/destination-marketing-agency";function m(e){var t;(t=document.getElementById("boot-loader"))==null||t.classList.toggle("hidden",!e)}function A(e,t){const r=document.querySelector(`link[href="${e}"]`);return r?r.sheet?Promise.resolve():new Promise(n=>{r.addEventListener("load",()=>n(),{once:!0}),r.addEventListener("error",()=>n(),{once:!0})}):new Promise(n=>{const o=document.createElement("link");o.rel="stylesheet",o.href=e,o.setAttribute(t,e),o.onload=()=>n(),o.onerror=()=>n(),document.head.appendChild(o)})}function S(e,t){return new Promise((r,n)=>{const o=document.createElement("script");o.src=e,o.async=!1,o.setAttribute(t,"1"),o.onload=()=>r(),o.onerror=()=>n(new Error(`Failed to load ${e}`)),document.body.appendChild(o)})}const j=e=>`
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
`;function b(e){return typeof document>"u"?!1:e.every(t=>{var r;return!!((r=document.querySelector(`link[href="${t}"]`))!=null&&r.sheet)})}function k(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function g(e,t,r){const n=l.useRef(0),[o,y]=l.useState(()=>b(t));return l.useLayoutEffect(()=>{b(t)||m(!0)},[]),l.useEffect(()=>{const h=`data-${e}-css`,p=`data-${e}-js`,f=`data-${e}-base`,u=`${e}-react`,$=()=>{document.querySelectorAll(`script[${p}]`).forEach(a=>a.remove())};document.documentElement.classList.add("w-mod-js"),document.body.classList.add("body",u);let i=document.querySelector(`base[${f}]`);i||(i=document.createElement("base"),i.setAttribute(f,"1"),document.head.insertBefore(i,document.head.firstChild)),i.setAttribute("href",`${w}/`);const c=++n.current;let d=!1;return(async()=>{if($(),b(t)||y(!1),await Promise.all(t.map(a=>A(a,h))),!(d||n.current!==c)&&(y(!0),m(!1),await k(),!(d||n.current!==c)))try{for(const a of r){if(d||n.current!==c)return;const x=a.includes("?")?"&":"?";await S(`${a}${x}${e}=${c}`,p)}}catch(a){d||console.error(`[${u}]`,a)}})(),()=>{d=!0,m(!1),document.body.classList.remove("body",u),document.querySelectorAll(`base[${f}]`).forEach(a=>a.remove()),$()}},[]),o}function C({slug:e,cssReady:t,markup:r}){return s.jsxs(s.Fragment,{children:[s.jsx(v,{}),s.jsx("div",{id:"siteNav",className:"pointer-events-none invisible fixed top-0 left-0 z-0 w-full h-16 sm:h-[5.3rem]","aria-hidden":"true"}),s.jsx("div",{className:`${e}-react-root${t?` ${e}-css-ready`:""}`,style:t?void 0:{opacity:0,visibility:"hidden"},dangerouslySetInnerHTML:{__html:r}}),s.jsx(E,{})]})}export{C as M,w as a,k as b,j as m,b as s,g as u};
