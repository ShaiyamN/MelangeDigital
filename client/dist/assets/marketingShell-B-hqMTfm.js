import{r as i,j as s,N as x,F as E}from"./index-CuKC8I8T.js";const v="/destination-marketing-agency";function u(e){var r;(r=document.getElementById("boot-loader"))==null||r.classList.toggle("hidden",!e)}function A(e,r){const a=document.querySelector(`link[${r}="${e}"]`);return a?a.sheet?Promise.resolve():new Promise(n=>{a.addEventListener("load",()=>n(),{once:!0}),a.addEventListener("error",()=>n(),{once:!0})}):new Promise(n=>{const t=document.createElement("link");t.rel="stylesheet",t.href=e,t.setAttribute(r,e),t.onload=()=>n(),t.onerror=()=>n(),document.head.appendChild(t)})}function k(e,r){return new Promise((a,n)=>{const t=document.createElement("script");t.src=e,t.async=!1,t.setAttribute(r,"1"),t.onload=()=>a(),t.onerror=()=>n(new Error(`Failed to load ${e}`)),document.body.appendChild(t)})}const S=e=>`
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
`;function j(e,r,a){const n=i.useRef(0),[t,b]=i.useState(!1);return i.useLayoutEffect(()=>{u(!0)},[]),i.useEffect(()=>{const y=`data-${e}-css`,$=`data-${e}-js`,l=`data-${e}-base`,f=`${e}-react`,p=()=>{document.querySelectorAll(`link[${y}]`).forEach(o=>o.remove()),document.querySelectorAll(`script[${$}]`).forEach(o=>o.remove())};document.documentElement.classList.add("w-mod-js"),document.body.classList.add("body",f);let c=document.querySelector(`base[${l}]`);c||(c=document.createElement("base"),c.setAttribute(l,"1"),document.head.insertBefore(c,document.head.firstChild)),c.setAttribute("href",`${v}/`);const m=++n.current;let d=!1;return(async()=>{if(p(),b(!1),await Promise.all(r.map(o=>A(o,y))),!(d||n.current!==m)){b(!0),u(!1);try{for(const o of a){if(d||n.current!==m)return;const h=o.includes("?")?"&":"?";await k(`${o}${h}${e}=${m}`,$)}}catch(o){d||console.error(`[${f}]`,o)}}})(),()=>{d=!0,u(!1),document.body.classList.remove("body",f),document.querySelectorAll(`base[${l}]`).forEach(o=>o.remove()),p()}},[]),t}function g({slug:e,cssReady:r,markup:a}){return s.jsxs(s.Fragment,{children:[s.jsx(x,{}),s.jsx("div",{id:"siteNav",className:"pointer-events-none invisible fixed top-0 left-0 z-0 w-full h-16 sm:h-[5.3rem]","aria-hidden":"true"}),s.jsx("div",{className:`${e}-react-root${r?` ${e}-css-ready`:""}`,dangerouslySetInnerHTML:{__html:a}}),s.jsx(E,{})]})}export{g as M,v as a,S as m,j as u};
