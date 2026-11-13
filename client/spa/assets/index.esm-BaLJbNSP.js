const yg=()=>{};var Qc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ig=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],u=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,u=o?r[s+1]:0,c=s+2<r.length,h=c?r[s+2]:0,f=i>>2,m=(i&3)<<4|u>>4;let p=(u&15)<<2|h>>6,A=h&63;c||(A=64,o||(p=64)),n.push(t[f],t[m],t[p],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Sh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ig(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const m=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||h==null||m==null)throw new Eg;const p=i<<2|u>>4;if(n.push(p),h!==64){const A=u<<4&240|h>>2;if(n.push(A),m!==64){const D=h<<6&192|m;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tg=function(r){const e=Sh(r);return Ph.encodeByteArray(e,!0)},Ti=function(r){return Tg(r).replace(/\./g,"")},wg=function(r){try{return Ph.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=()=>Vh().__FIREBASE_DEFAULTS__,vg=()=>{if(typeof process>"u"||typeof Qc>"u")return;const r=Qc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},bg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&wg(r[1]);return e&&JSON.parse(e)},Ui=()=>{try{return yg()||Ag()||vg()||bg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Rg=r=>{var e,t;return(t=(e=Ui())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Sg=r=>{const e=Rg(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Ch=()=>{var r;return(r=Ui())==null?void 0:r.config},nw=r=>{var e;return(e=Ui())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ti(JSON.stringify(t)),Ti(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qn())}function Dh(){var e;const r=(e=Ui())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ow(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aw(){const r=Qn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xh(){return!Dh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nh(){return!Dh()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Cg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="FirebaseError";class pr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Dg,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oh.prototype.create)}}class Oh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xg(i,n):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new pr(s,u,n)}}function xg(r,e){return r.replace(Ng,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Ng=/\{\$([^}]+)}/g;function uw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Mt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Wc(i)&&Wc(o)){if(!Mt(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Wc(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function lw(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hw(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function dw(r,e){const t=new kg(r,e);return t.subscribe.bind(t)}class kg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Og(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Bo),s.error===void 0&&(s.error=Bo),s.complete===void 0&&(s.complete=Bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Og(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Bo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mh(r){return(await fetch(r,{credentials:"include"})).ok}class ms{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Pg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Fg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fg(r){return r===sn?void 0:r}function Lg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const Ug={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},qg=J.INFO,jg={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},zg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=jg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fh{constructor(e){this.name=e,this._logLevel=qg,this._logHandler=zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const $g=(r,e)=>e.some(t=>r instanceof t);let Hc,Jc;function Gg(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kg(){return Jc||(Jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lh=new WeakMap,Zo=new WeakMap,Bh=new WeakMap,Uo=new WeakMap,Na=new WeakMap;function Qg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(xt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Lh.set(t,r)}).catch(()=>{}),Na.set(e,r),e}function Wg(r){if(Zo.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Zo.set(r,e)}let ea={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Zo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Bh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Hg(r){ea=r(ea)}function Jg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(qo(this),e,...t);return Bh.set(n,e.sort?e.sort():[e]),xt(n)}:Kg().includes(r)?function(...e){return r.apply(qo(this),e),xt(Lh.get(this))}:function(...e){return xt(r.apply(qo(this),e))}}function Yg(r){return typeof r=="function"?Jg(r):(r instanceof IDBTransaction&&Wg(r),$g(r,Gg())?new Proxy(r,ea):r)}function xt(r){if(r instanceof IDBRequest)return Qg(r);if(Uo.has(r))return Uo.get(r);const e=Yg(r);return e!==r&&(Uo.set(r,e),Na.set(e,r)),e}const qo=r=>Na.get(r);function Xg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),u=xt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const Zg=["get","getKey","getAll","getAllKeys","count"],ep=["put","add","delete","clear"],jo=new Map;function Yc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(jo.get(e))return jo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=ep.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Zg.includes(t)))return;const i=async function(o,...u){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),s&&c.done]))[0]};return jo.set(e,i),i}Hg(r=>({...r,get:(e,t,n)=>Yc(e,t)||r.get(e,t,n),has:(e,t)=>!!Yc(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(np(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function np(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ta="@firebase/app",Xc="0.14.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Fh("@firebase/app"),rp="@firebase/app-compat",sp="@firebase/analytics-compat",ip="@firebase/analytics",op="@firebase/app-check-compat",ap="@firebase/app-check",up="@firebase/auth",cp="@firebase/auth-compat",lp="@firebase/database",hp="@firebase/data-connect",dp="@firebase/database-compat",fp="@firebase/functions",mp="@firebase/functions-compat",gp="@firebase/installations",pp="@firebase/installations-compat",_p="@firebase/messaging",yp="@firebase/messaging-compat",Ip="@firebase/performance",Ep="@firebase/performance-compat",Tp="@firebase/remote-config",wp="@firebase/remote-config-compat",Ap="@firebase/storage",vp="@firebase/storage-compat",bp="@firebase/firestore",Rp="@firebase/ai",Sp="@firebase/firestore-compat",Pp="firebase",Vp="12.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",Cp={[ta]:"fire-core",[rp]:"fire-core-compat",[ip]:"fire-analytics",[sp]:"fire-analytics-compat",[ap]:"fire-app-check",[op]:"fire-app-check-compat",[up]:"fire-auth",[cp]:"fire-auth-compat",[lp]:"fire-rtdb",[hp]:"fire-data-connect",[dp]:"fire-rtdb-compat",[fp]:"fire-fn",[mp]:"fire-fn-compat",[gp]:"fire-iid",[pp]:"fire-iid-compat",[_p]:"fire-fcm",[yp]:"fire-fcm-compat",[Ip]:"fire-perf",[Ep]:"fire-perf-compat",[Tp]:"fire-rc",[wp]:"fire-rc-compat",[Ap]:"fire-gcs",[vp]:"fire-gcs-compat",[bp]:"fire-fst",[Sp]:"fire-fst-compat",[Rp]:"fire-vertex","fire-js":"fire-js",[Pp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Map,Dp=new Map,na=new Map;function Zc(r,e){try{r.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ai(r){const e=r.name;if(na.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,r);for(const t of gs.values())Zc(t,r);for(const t of Dp.values())Zc(t,r);return!0}function ka(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function xp(r,e,t=wi){ka(r,e).clearInstance(t)}function Np(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new Oh("app","Firebase",kp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=Vp;function Fp(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:wi,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(t||(t=Ch()),!t)throw Nt.create("no-options");const i=gs.get(s);if(i){if(Mt(t,i.options)&&Mt(n,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const o=new Bg(s);for(const c of na.values())o.addComponent(c);const u=new Op(t,n,o);return gs.set(s,u),u}function Lp(r=wi){const e=gs.get(r);if(!e&&r===wi&&Ch())return Fp();if(!e)throw Nt.create("no-app",{appName:r});return e}function fw(){return Array.from(gs.values())}function rs(r,e,t){let n=Cp[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(o.join(" "));return}Ai(new ms(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="firebase-heartbeat-database",Up=1,ps="firebase-heartbeat-store";let zo=null;function Uh(){return zo||(zo=Xg(Bp,Up,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ps)}catch(t){console.warn(t)}}}}).catch(r=>{throw Nt.create("idb-open",{originalErrorMessage:r.message})})),zo}async function qp(r){try{const t=(await Uh()).transaction(ps),n=await t.objectStore(ps).get(qh(r));return await t.done,n}catch(e){if(e instanceof pr)lt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}}async function el(r,e){try{const n=(await Uh()).transaction(ps,"readwrite");await n.objectStore(ps).put(e,qh(r)),await n.done}catch(t){if(t instanceof pr)lt.warn(t.message);else{const n=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(n.message)}}}function qh(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=1024,zp=30;class $p{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>zp){const o=Qp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){lt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tl(),{heartbeatsToSend:n,unsentEntries:s}=Gp(this._heartbeatsCache.heartbeats),i=Ti(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return lt.warn(t),""}}}function tl(){return new Date().toISOString().substring(0,10)}function Gp(r,e=jp){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Cg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return el(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return el(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function nl(r){return Ti(JSON.stringify({version:2,heartbeats:r})).length}function Qp(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(r){Ai(new ms("platform-logger",e=>new tp(e),"PRIVATE")),Ai(new ms("heartbeat",e=>new $p(e),"PRIVATE")),rs(ta,Xc,r),rs(ta,Xc,"esm2020"),rs("fire-js","")}Wp("");var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kt,jh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.F=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(w,T,S){for(var y=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)y[Me-2]=arguments[Me];return _.prototype[T].apply(w,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);const w=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)w[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;T<16;++T)w[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],T=E.g[2];let S=E.g[3],y;y=_+(S^I&(T^S))+w[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[2]+606105819&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[3]+3250441966&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[6]+2821735955&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[7]+4249261313&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[10]+4294925233&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[11]+2304563134&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[14]+2792965006&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[15]+1236535329&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(T^S&(I^T))+w[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[11]+643717713&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[0]+3921069994&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[15]+3634488961&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[4]+3889429448&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[3]+4107603335&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[8]+1163531501&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[7]+1735328473&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[12]+2368359562&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(I^T^S)+w[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[11]+1839030562&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[14]+4259657740&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[7]+4139469664&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[10]+3200236656&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[3]+3572445317&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[6]+76029189&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[15]+530742520&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[2]+3299628645&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(T^(I|~S))+w[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[14]+2878612391&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[5]+4237533241&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[10]+4293915773&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[1]+2240044497&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[6]+2734768916&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[13]+1309151649&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[2]+718787259&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.v=function(E,_){_===void 0&&(_=E.length);const I=_-this.blockSize,w=this.C;let T=this.h,S=0;for(;S<_;){if(T==0)for(;S<=I;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<_;)if(w[T++]=E.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<_;)if(w[T++]=E[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=_},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,I=0;I<4;++I)for(let w=0;w<32;w+=8)E[_++]=this.g[I]>>>w&255;return E};function i(E,_){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;const I=[];let w=!0;for(let T=E.length-1;T>=0;T--){const S=E[T]|0;w&&S==_||(I[T]=S,w=!1)}this.g=I}var u={};function c(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return x(h(-E));const _=[];let I=1;for(let w=0;E>=I;w++)_[w]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return x(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(_,8));let w=m;for(let S=0;S<E.length;S+=8){var T=Math.min(8,E.length-S);const y=parseInt(E.substring(S,S+T),_);T<8?(T=h(Math.pow(_,T)),w=w.j(T).add(h(y))):(w=w.j(I),w=w.add(h(y)))}return w}var m=c(0),p=c(1),A=c(16777216);r=o.prototype,r.m=function(){if(N(this))return-x(this).m();let E=0,_=1;for(let I=0;I<this.g.length;I++){const w=this.i(I);E+=(w>=0?w:4294967296+w)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(N(this))return"-"+x(this).toString(E);const _=h(Math.pow(E,6));var I=this;let w="";for(;;){const T=Z(I,_).g;I=B(I,T.j(_));let S=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=T,D(I))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=B(this,E),N(E)?-1:D(E)?0:1};function x(E){const _=E.g.length,I=[];for(let w=0;w<_;w++)I[w]=~E.g[w];return new o(I,~E.h).add(p)}r.abs=function(){return N(this)?x(this):this},r.add=function(E){const _=Math.max(this.g.length,E.g.length),I=[];let w=0;for(let T=0;T<=_;T++){let S=w+(this.i(T)&65535)+(E.i(T)&65535),y=(S>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=y>>>16,S&=65535,y&=65535,I[T]=y<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function B(E,_){return E.add(x(_))}r.j=function(E){if(D(this)||D(E))return m;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(this.l(A)<0&&E.l(A)<0)return h(this.m()*E.m());const _=this.g.length+E.g.length,I=[];for(var w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<E.g.length;T++){const S=this.i(w)>>>16,y=this.i(w)&65535,Me=E.i(T)>>>16,Yt=E.i(T)&65535;I[2*w+2*T]+=y*Yt,j(I,2*w+2*T),I[2*w+2*T+1]+=S*Yt,j(I,2*w+2*T+1),I[2*w+2*T+1]+=y*Me,j(I,2*w+2*T+1),I[2*w+2*T+2]+=S*Me,j(I,2*w+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function j(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function q(E,_){this.g=E,this.h=_}function Z(E,_){if(D(_))throw Error("division by zero");if(D(E))return new q(m,m);if(N(E))return _=Z(x(E),_),new q(x(_.g),x(_.h));if(N(_))return _=Z(E,x(_)),new q(x(_.g),_.h);if(E.g.length>30){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,w=_;w.l(E)<=0;)I=Y(I),w=Y(w);var T=X(I,1),S=X(w,1);for(w=X(w,2),I=X(I,2);!D(w);){var y=S.add(w);y.l(E)<=0&&(T=T.add(I),S=y),w=X(w,1),I=X(I,1)}return _=B(E,T.j(_)),new q(T,_)}for(T=m;E.l(_)>=0;){for(I=Math.max(1,Math.floor(E.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=h(I),y=S.j(_);N(y)||y.l(E)>0;)I-=w,S=h(I),y=S.j(_);D(S)&&(S=p),T=T.add(S),E=B(E,y)}return new q(T,E)}r.B=function(E){return Z(this,E).h},r.and=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)&E.i(w);return new o(I,this.h&E.h)},r.or=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)|E.i(w);return new o(I,this.h|E.h)},r.xor=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)^E.i(w);return new o(I,this.h^E.h)};function Y(E){const _=E.g.length+1,I=[];for(let w=0;w<_;w++)I[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(I,E.h)}function X(E,_){const I=_>>5;_%=32;const w=E.g.length-I,T=[];for(let S=0;S<w;S++)T[S]=_>0?E.i(S+I)>>>_|E.i(S+I+1)<<32-_:E.i(S+I);return new o(T,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,jh=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,kt=o}).apply(typeof rl<"u"?rl:typeof self<"u"?self:typeof window<"u"?window:{});var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zh,Zr,$h,hi,ra,Gh,Kh,Qh;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ri=="object"&&ri];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in d))break e;d=d[b]}a=a[a.length-1],g=d[a],l=l(g),l!=g&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function u(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function c(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=c,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,b,P){for(var M=Array(arguments.length-2),G=2;G<arguments.length;G++)M[G-2]=arguments[G];return l.prototype[b].apply(g,M)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const l=a.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=a[g];return d}return[]}function D(a,l){for(let g=1;g<arguments.length;g++){const b=arguments[g];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const P=b.length||0;a.length=d+P;for(let M=0;M<P;M++)a[d+M]=b[M]}else a.push(b)}}class N{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(a){o.setTimeout(()=>{throw a},0)}function B(){var a=E;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,d){const g=q.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new N(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,X=!1,E=new j,_=()=>{const a=Promise.resolve(void 0);Y=()=>{a.then(I)}};function I(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){x(d)}var l=q;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}X=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Me(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Me,T),Me.prototype.init=function(a,l){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Me.Z.h.call(this)},Me.prototype.h=function(){Me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Yt="closure_listenable_"+(Math.random()*1e6|0),Um=0;function qm(a,l,d,g,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=b,this.key=++Um,this.da=this.fa=!1}function js(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function zs(a,l,d){for(const g in a)l.call(d,a[g],g,a)}function jm(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function Ku(a){const l={};for(const d in a)l[d]=a[d];return l}const Qu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wu(a,l){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)a[d]=g[d];for(let P=0;P<Qu.length;P++)d=Qu[P],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function $s(a){this.src=a,this.g={},this.h=0}$s.prototype.add=function(a,l,d,g,b){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const M=po(a,l,g,b);return M>-1?(l=a[M],d||(l.fa=!1)):(l=new qm(l,this.src,P,!!g,b),l.fa=d,a.push(l)),l};function go(a,l){const d=l.type;if(d in a.g){var g=a.g[d],b=Array.prototype.indexOf.call(g,l,void 0),P;(P=b>=0)&&Array.prototype.splice.call(g,b,1),P&&(js(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function po(a,l,d,g){for(let b=0;b<a.length;++b){const P=a[b];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return b}return-1}var _o="closure_lm_"+(Math.random()*1e6|0),yo={};function Hu(a,l,d,g,b){if(Array.isArray(l)){for(let P=0;P<l.length;P++)Hu(a,l[P],d,g,b);return null}return d=Xu(d),a&&a[Yt]?a.J(l,d,u(g)?!!g.capture:!1,b):zm(a,l,d,!1,g,b)}function zm(a,l,d,g,b,P){if(!l)throw Error("Invalid event type");const M=u(b)?!!b.capture:!!b;let G=Eo(a);if(G||(a[_o]=G=new $s(a)),d=G.add(l,d,g,M,P),d.proxy)return d;if(g=$m(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(b=M),b===void 0&&(b=!1),a.addEventListener(l.toString(),g,b);else if(a.attachEvent)a.attachEvent(Yu(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $m(){function a(d){return l.call(a.src,a.listener,d)}const l=Gm;return a}function Ju(a,l,d,g,b){if(Array.isArray(l))for(var P=0;P<l.length;P++)Ju(a,l[P],d,g,b);else g=u(g)?!!g.capture:!!g,d=Xu(d),a&&a[Yt]?(a=a.i,P=String(l).toString(),P in a.g&&(l=a.g[P],d=po(l,d,g,b),d>-1&&(js(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[P],a.h--)))):a&&(a=Eo(a))&&(l=a.g[l.toString()],a=-1,l&&(a=po(l,d,g,b)),(d=a>-1?l[a]:null)&&Io(d))}function Io(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Yt])go(l.i,a);else{var d=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(d,g,a.capture):l.detachEvent?l.detachEvent(Yu(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=Eo(l))?(go(d,a),d.h==0&&(d.src=null,l[_o]=null)):js(a)}}}function Yu(a){return a in yo?yo[a]:yo[a]="on"+a}function Gm(a,l){if(a.da)a=!0;else{l=new Me(l,this);const d=a.listener,g=a.ha||a.src;a.fa&&Io(a),a=d.call(g,l)}return a}function Eo(a){return a=a[_o],a instanceof $s?a:null}var To="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xu(a){return typeof a=="function"?a:(a[To]||(a[To]=function(l){return a.handleEvent(l)}),a[To])}function Ve(){w.call(this),this.i=new $s(this),this.M=this,this.G=null}m(Ve,w),Ve.prototype[Yt]=!0,Ve.prototype.removeEventListener=function(a,l,d,g){Ju(this,a,l,d,g)};function ke(a,l){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(g,a),Wu(l,b)}b=!0;let P,M;if(d)for(M=d.length-1;M>=0;M--)P=l.g=d[M],b=Gs(P,g,!0,l)&&b;if(P=l.g=a,b=Gs(P,g,!0,l)&&b,b=Gs(P,g,!1,l)&&b,d)for(M=0;M<d.length;M++)P=l.g=d[M],b=Gs(P,g,!1,l)&&b}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let g=0;g<d.length;g++)js(d[g]);delete a.g[l],a.h--}}this.G=null},Ve.prototype.J=function(a,l,d,g){return this.i.add(String(a),l,!1,d,g)},Ve.prototype.K=function(a,l,d,g){return this.i.add(String(a),l,!0,d,g)};function Gs(a,l,d,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let P=0;P<l.length;++P){const M=l[P];if(M&&!M.da&&M.capture==d){const G=M.listener,Ie=M.ha||M.src;M.fa&&go(a.i,M),b=G.call(Ie,g)!==!1&&b}}return b&&!g.defaultPrevented}function Km(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Zu(a){a.g=Km(()=>{a.g=null,a.i&&(a.i=!1,Zu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Qm extends w{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Zu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(a){w.call(this),this.h=a,this.g={}}m(Cr,w);var ec=[];function tc(a){zs(a.g,function(l,d){this.g.hasOwnProperty(d)&&Io(l)},a),a.g={}}Cr.prototype.N=function(){Cr.Z.N.call(this),tc(this)},Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=o.JSON.stringify,Wm=o.JSON.parse,Hm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function nc(){}function rc(){}var Dr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ao(){T.call(this,"d")}m(Ao,T);function vo(){T.call(this,"c")}m(vo,T);var Xt={},sc=null;function Ks(){return sc=sc||new Ve}Xt.Ia="serverreachability";function ic(a){T.call(this,Xt.Ia,a)}m(ic,T);function xr(a){const l=Ks();ke(l,new ic(l))}Xt.STAT_EVENT="statevent";function oc(a,l){T.call(this,Xt.STAT_EVENT,a),this.stat=l}m(oc,T);function Oe(a){const l=Ks();ke(l,new oc(l,a))}Xt.Ja="timingevent";function ac(a,l){T.call(this,Xt.Ja,a),this.size=l}m(ac,T);function Nr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function kr(){this.g=!0}kr.prototype.ua=function(){this.g=!1};function Jm(a,l,d,g,b,P){a.info(function(){if(a.g)if(P){var M="",G=P.split("&");for(let ie=0;ie<G.length;ie++){var Ie=G[ie].split("=");if(Ie.length>1){const Ae=Ie[0];Ie=Ie[1];const Xe=Ae.split("_");M=Xe.length>=2&&Xe[1]=="type"?M+(Ae+"="+Ie+"&"):M+(Ae+"=redacted&")}}}else M=null;else M=P;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+l+`
`+d+`
`+M})}function Ym(a,l,d,g,b,P,M){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+l+`
`+d+`
`+P+" "+M})}function Dn(a,l,d,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Zm(a,d)+(g?" "+g:"")})}function Xm(a,l){a.info(function(){return"TIMEOUT: "+l})}kr.prototype.info=function(){};function Zm(a,l){if(!a.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let M=1;M<g.length;M++)g[M]=""}}}}return wo(P)}catch{return l}}var Qs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},uc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cc;function bo(){}m(bo,nc),bo.prototype.g=function(){return new XMLHttpRequest},cc=new bo;function Or(a){return encodeURIComponent(String(a))}function eg(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function It(a,l,d,g){this.j=a,this.i=l,this.l=d,this.S=g||1,this.V=new Cr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new lc}function lc(){this.i=null,this.g="",this.h=!1}var hc={},Ro={};function So(a,l,d){a.M=1,a.A=Hs(Ye(l)),a.u=d,a.R=!0,dc(a,null)}function dc(a,l){a.F=Date.now(),Ws(a),a.B=Ye(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),bc(d.i,"t",g),a.C=0,d=a.j.L,a.h=new lc,a.g=zc(a.j,d?l:null,!a.u),a.P>0&&(a.O=new Qm(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,g=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(ec[0]=b.toString()),b=ec);for(let P=0;P<b.length;P++){const M=Hu(d,b[P],g||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=a.J?Ku(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),xr(),Jm(a.i,a.v,a.B,a.l,a.S,a.u)}It.prototype.ba=function(a){a=a.target;const l=this.O;l&&wt(a)==3?l.j():this.Y(a)},It.prototype.Y=function(a){try{if(a==this.g)e:{const G=wt(this.g),Ie=this.g.ya(),ie=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||xc(this.g)))){this.K||G!=4||Ie==7||(Ie==8||ie<=0?xr(3):xr(2)),Po(this);var l=this.g.ca();this.X=l;var d=tg(this);if(this.o=l==200,Ym(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var P=g;break t}}P=null}if(a=P)Dn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vo(this,a);else{this.o=!1,this.m=3,Oe(12),Zt(this),Mr(this);break e}}if(this.R){a=!0;let Ae;for(;!this.K&&this.C<d.length;)if(Ae=ng(this,d),Ae==Ro){G==4&&(this.m=4,Oe(14),a=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==hc){this.m=4,Oe(15),Dn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Dn(this.i,this.l,Ae,null),Vo(this,Ae);if(fc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||d.length!=0||this.h.h||(this.m=1,Oe(16),a=!1),this.o=this.o&&a,!a)Dn(this.i,this.l,d,"[Invalid Chunked Response]"),Zt(this),Mr(this);else if(d.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Fo(M),M.P=!0,Oe(11))}}else Dn(this.i,this.l,d,null),Vo(this,d);G==4&&Zt(this),this.o&&!this.K&&(G==4?Bc(this.j,this):(this.o=!1,Ws(this)))}else pg(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),Zt(this),Mr(this)}}}catch{}finally{}};function tg(a){if(!fc(a))return a.g.la();const l=xc(a.g);if(l==="")return"";let d="";const g=l.length,b=wt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Zt(a),Mr(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<g;P++)a.h.h=!0,d+=a.h.i.decode(l[P],{stream:!(b&&P==g-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function fc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ng(a,l){var d=a.C,g=l.indexOf(`
`,d);return g==-1?Ro:(d=Number(l.substring(d,g)),isNaN(d)?hc:(g+=1,g+d>l.length?Ro:(l=l.slice(g,g+d),a.C=g+d,l)))}It.prototype.cancel=function(){this.K=!0,Zt(this)};function Ws(a){a.T=Date.now()+a.H,mc(a,a.H)}function mc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Nr(h(a.aa,a),l)}function Po(a){a.D&&(o.clearTimeout(a.D),a.D=null)}It.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Xm(this.i,this.B),this.M!=2&&(xr(),Oe(17)),Zt(this),this.m=2,Mr(this)):mc(this,this.T-a)};function Mr(a){a.j.I==0||a.K||Bc(a.j,a)}function Zt(a){Po(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,tc(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Vo(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||Co(d.h,a))){if(!a.L&&Co(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ei(d),Xs(d);else break e;Mo(d),Oe(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Nr(h(d.Va,d),6e3));_c(d.h)<=1&&d.ta&&(d.ta=void 0)}else tn(d,11)}else if((a.L||d.g==a)&&ei(d),!y(l))for(b=d.Ba.g.parse(l),l=0;l<b.length;l++){let ie=b[l];const Ae=ie[0];if(!(Ae<=d.K))if(d.K=Ae,ie=ie[1],d.I==2)if(ie[0]=="c"){d.M=ie[1],d.ba=ie[2];const Xe=ie[3];Xe!=null&&(d.ka=Xe,d.j.info("VER="+d.ka));const nn=ie[4];nn!=null&&(d.za=nn,d.j.info("SVER="+d.za));const At=ie[5];At!=null&&typeof At=="number"&&At>0&&(g=1.5*At,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const vt=a.g;if(vt){const ni=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var P=g.h;P.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Do(P,P.h),P.h=null))}if(g.G){const Lo=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(g.wa=Lo,ae(g.J,g.G,Lo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var M=a;if(g.na=jc(g,g.L?g.ba:null,g.W),M.L){yc(g.h,M);var G=M,Ie=g.O;Ie&&(G.H=Ie),G.D&&(Po(G),Ws(G)),g.g=M}else Fc(g);d.i.length>0&&Zs(d)}else ie[0]!="stop"&&ie[0]!="close"||tn(d,7);else d.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?tn(d,7):Oo(d):ie[0]!="noop"&&d.l&&d.l.qa(ie),d.A=0)}}xr(4)}catch{}}var rg=class{constructor(a,l){this.g=a,this.map=l}};function gc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _c(a){return a.h?1:a.g?a.g.size:0}function Co(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Do(a,l){a.g?a.g.add(l):a.h=l}function yc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}gc.prototype.cancel=function(){if(this.i=Ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ic(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return A(a.i)}var Ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sg(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let b,P=null;g>=0?(b=a[d].substring(0,g),P=a[d].substring(g+1)):b=a[d],l(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Et(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Et?(this.l=a.l,Fr(this,a.j),this.o=a.o,this.g=a.g,Lr(this,a.u),this.h=a.h,xo(this,Rc(a.i)),this.m=a.m):a&&(l=String(a).match(Ec))?(this.l=!1,Fr(this,l[1]||"",!0),this.o=Br(l[2]||""),this.g=Br(l[3]||"",!0),Lr(this,l[4]),this.h=Br(l[5]||"",!0),xo(this,l[6]||"",!0),this.m=Br(l[7]||"")):(this.l=!1,this.i=new qr(null,this.l))}Et.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Ur(l,Tc,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Ur(l,Tc,!0),"@"),a.push(Or(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ur(d,d.charAt(0)=="/"?ag:og,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ur(d,cg)),a.join("")},Et.prototype.resolve=function(a){const l=Ye(this);let d=!!a.j;d?Fr(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var g=a.h;if(d)Lr(l,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=l.h.lastIndexOf("/");b!=-1&&(g=l.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let M=0;M<b.length;){const G=b[M++];G=="."?g&&M==b.length&&P.push(""):G==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&M==b.length&&P.push("")):(P.push(G),g=!0)}g=P.join("/")}else g=b}return d?l.h=g:d=a.i.toString()!=="",d?xo(l,Rc(a.i)):d=!!a.m,d&&(l.m=a.m),l};function Ye(a){return new Et(a)}function Fr(a,l,d){a.j=d?Br(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Lr(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function xo(a,l,d){l instanceof qr?(a.i=l,lg(a.i,a.l)):(d||(l=Ur(l,ug)),a.i=new qr(l,a.l))}function ae(a,l,d){a.i.set(l,d)}function Hs(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Br(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ur(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,ig),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ig(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tc=/[#\/\?@]/g,og=/[#\?:]/g,ag=/[#\?]/g,ug=/[#\?@]/g,cg=/#/g;function qr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function en(a){a.g||(a.g=new Map,a.h=0,a.i&&sg(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=qr.prototype,r.add=function(a,l){en(this),this.i=null,a=xn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function wc(a,l){en(a),l=xn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Ac(a,l){return en(a),l=xn(a,l),a.g.has(l)}r.forEach=function(a,l){en(this),this.g.forEach(function(d,g){d.forEach(function(b){a.call(l,b,g,this)},this)},this)};function vc(a,l){en(a);let d=[];if(typeof l=="string")Ac(a,l)&&(d=d.concat(a.g.get(xn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}r.set=function(a,l){return en(this),this.i=null,a=xn(this,a),Ac(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=vc(this,a),a.length>0?String(a[0]):l):l};function bc(a,l,d){wc(a,l),d.length>0&&(a.i=null,a.g.set(xn(a,l),A(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const b=Or(d);d=vc(this,d);for(let P=0;P<d.length;P++){let M=b;d[P]!==""&&(M+="="+Or(d[P])),a.push(M)}}return this.i=a.join("&")};function Rc(a){const l=new qr;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function xn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function lg(a,l){l&&!a.j&&(en(a),a.i=null,a.g.forEach(function(d,g){const b=g.toLowerCase();g!=b&&(wc(this,g),bc(this,b,d))},a)),a.j=l}function hg(a,l){const d=new kr;if(o.Image){const g=new Image;g.onload=f(Tt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(Tt,d,"TestLoadImage: error",!1,l,g),g.onabort=f(Tt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(Tt,d,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function dg(a,l){const d=new kr,g=new AbortController,b=setTimeout(()=>{g.abort(),Tt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(b),P.ok?Tt(d,"TestPingServer: ok",!0,l):Tt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Tt(d,"TestPingServer: error",!1,l)})}function Tt(a,l,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function fg(){this.g=new Hm}function No(a){this.i=a.Sb||null,this.h=a.ab||!1}m(No,nc),No.prototype.g=function(){return new Js(this.i,this.h)};function Js(a,l){Ve.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Js,Ve),r=Js.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,zr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?jr(this):zr(this),this.readyState==3&&Sc(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,jr(this))},r.Na=function(a){this.g&&(this.response=a,jr(this))},r.ga=function(){this.g&&jr(this)};function jr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,zr(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function zr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pc(a){let l="";return zs(a,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function ko(a,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Pc(d),typeof a=="string"?d!=null&&Or(d):ae(a,l,d))}function me(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(me,Ve);var mg=/^https?$/i,gg=["POST","PUT"];r=me.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cc.g(),this.g.onreadystatechange=p(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){Vc(this,P);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(gg,l,void 0)>=0)||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of d)this.g.setRequestHeader(P,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){Vc(this,P)}};function Vc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Cc(a),Ys(a)}function Cc(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ke(this,"complete"),ke(this,"abort"),Ys(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ys(this,!0)),me.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Dc(this):this.Xa())},r.Xa=function(){Dc(this)};function Dc(a){if(a.h&&typeof i<"u"){if(a.v&&wt(a)==4)setTimeout(a.Ca.bind(a),0);else if(ke(a,"readystatechange"),wt(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=P===0){let M=String(a.D).match(Ec)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),g=!mg.test(M?M.toLowerCase():"")}d=g}if(d)ke(a,"complete"),ke(a,"success");else{a.o=6;try{var b=wt(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Cc(a)}}finally{Ys(a)}}}}function Ys(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||ke(a,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function wt(a){return a.g?a.g.readyState:0}r.ca=function(){try{return wt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Wm(l)}};function xc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pg(a){const l={};a=(a.g&&wt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=eg(a[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[b]||[];l[b]=P,P.push(d)}jm(l,function(g){return g.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Nc(a){this.za=0,this.i=[],this.j=new kr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$r("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$r("baseRetryDelayMs",5e3,a),this.Za=$r("retryDelaySeedMs",1e4,a),this.Ta=$r("forwardChannelMaxRetries",2,a),this.va=$r("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gc(a&&a.concurrentRequestLimit),this.Ba=new fg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Nc.prototype,r.ka=8,r.I=1,r.connect=function(a,l,d,g){Oe(0),this.W=a,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=jc(this,null,this.W),Zs(this)};function Oo(a){if(kc(a),a.I==3){var l=a.V++,d=Ye(a.J);if(ae(d,"SID",a.M),ae(d,"RID",l),ae(d,"TYPE","terminate"),Gr(a,d),l=new It(a,a.j,l),l.M=2,l.A=Hs(Ye(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=zc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ws(l)}qc(a)}function Xs(a){a.g&&(Fo(a),a.g.cancel(),a.g=null)}function kc(a){Xs(a),a.v&&(o.clearTimeout(a.v),a.v=null),ei(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Zs(a){if(!pc(a.h)&&!a.m){a.m=!0;var l=a.Ea;Y||_(),X||(Y(),X=!0),E.add(l,a),a.D=0}}function _g(a,l){return _c(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Nr(h(a.Ea,a,l),Uc(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new It(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Ku(P),Wu(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Mc(this,b,l),d=Ye(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),Gr(this,d),P&&(this.R?l="headers="+Or(Pc(P))+"&"+l:this.u&&ko(d,this.u,P)),Do(this.h,b),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",l),ae(d,"SID","null"),b.U=!0,So(b,d,null)):So(b,d,l),this.I=2}}else this.I==3&&(a?Oc(this,a):this.i.length==0||pc(this.h)||Oc(this))};function Oc(a,l){var d;l?d=l.l:d=a.V++;const g=Ye(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),Gr(a,g),a.u&&a.o&&ko(g,a.u,a.o),d=new It(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Mc(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Do(a.h,d),So(d,g,l)}function Gr(a,l){a.H&&zs(a.H,function(d,g){ae(l,g,d)}),a.l&&zs({},function(d,g){ae(l,g,d)})}function Mc(a,l,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var b=a.i;let G=-1;for(;;){const Ie=["count="+d];G==-1?d>0?(G=b[0].g,Ie.push("ofs="+G)):G=0:Ie.push("ofs="+G);let ie=!0;for(let Ae=0;Ae<d;Ae++){var P=b[Ae].g;const Xe=b[Ae].map;if(P-=G,P<0)G=Math.max(0,b[Ae].g-100),ie=!1;else try{P="req"+P+"_"||"";try{var M=Xe instanceof Map?Xe:Object.entries(Xe);for(const[nn,At]of M){let vt=At;u(At)&&(vt=wo(At)),Ie.push(P+nn+"="+encodeURIComponent(vt))}}catch(nn){throw Ie.push(P+"type="+encodeURIComponent("_badmap")),nn}}catch{g&&g(Xe)}}if(ie){M=Ie.join("&");break e}}M=void 0}return a=a.i.splice(0,d),l.G=a,M}function Fc(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Y||_(),X||(Y(),X=!0),E.add(l,a),a.A=0}}function Mo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Nr(h(a.Da,a),Uc(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,Lc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Nr(h(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Xs(this),Lc(this))};function Fo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Lc(a){a.g=new It(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Ye(a.na);ae(l,"RID","rpc"),ae(l,"SID",a.M),ae(l,"AID",a.K),ae(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(l,"TO",a.ia),ae(l,"TYPE","xmlhttp"),Gr(a,l),a.u&&a.o&&ko(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Hs(Ye(l)),d.u=null,d.R=!0,dc(d,a)}r.Va=function(){this.C!=null&&(this.C=null,Xs(this),Mo(this),Oe(19))};function ei(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Bc(a,l){var d=null;if(a.g==l){ei(a),Fo(a),a.g=null;var g=2}else if(Co(a.h,l))d=l.G,yc(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;g=Ks(),ke(g,new ac(g,d)),Zs(a)}else Fc(a);else if(b=l.m,b==3||b==0&&l.X>0||!(g==1&&_g(a,l)||g==2&&Mo(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),b){case 1:tn(a,5);break;case 4:tn(a,10);break;case 3:tn(a,6);break;default:tn(a,2)}}}function Uc(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function tn(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),g=a.Ua;const b=!g;g=new Et(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fr(g,"https"),Hs(g),b?hg(g.toString(),d):dg(g.toString(),d)}else Oe(2);a.I=0,a.l&&a.l.pa(l),qc(a),kc(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function qc(a){if(a.I=0,a.ja=[],a.l){const l=Ic(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ja,l),D(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function jc(a,l,d){var g=d instanceof Et?Ye(d):new Et(d);if(g.g!="")l&&(g.g=l+"."+g.g),Lr(g,g.u);else{var b=o.location;g=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const P=new Et(null);g&&Fr(P,g),l&&(P.g=l),b&&Lr(P,b),d&&(P.h=d),g=P}return d=a.G,l=a.wa,d&&l&&ae(g,d,l),ae(g,"VER",a.ka),Gr(a,g),g}function zc(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new me(new No({ab:d})):new me(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}r=$c.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function ti(){}ti.prototype.g=function(a,l){return new $e(a,l)};function $e(a,l){Ve.call(this),this.g=new Nc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!y(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Nn(this)}m($e,Ve),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Oo(this.g)},$e.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=wo(a),a=d);l.i.push(new rg(l.Ya++,a)),l.I==3&&Zs(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,$e.Z.N.call(this)};function Gc(a){Ao.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(Gc,Ao);function Kc(){vo.call(this),this.status=1}m(Kc,vo);function Nn(a){this.g=a}m(Nn,$c),Nn.prototype.ra=function(){ke(this.g,"a")},Nn.prototype.qa=function(a){ke(this.g,new Gc(a))},Nn.prototype.pa=function(a){ke(this.g,new Kc)},Nn.prototype.oa=function(){ke(this.g,"b")},ti.prototype.createWebChannel=ti.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Qh=function(){return new ti},Kh=function(){return Ks()},Gh=Xt,ra={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qs.NO_ERROR=0,Qs.TIMEOUT=8,Qs.HTTP_ERROR=6,hi=Qs,uc.COMPLETE="complete",$h=uc,rc.EventType=Dr,Dr.OPEN="a",Dr.CLOSE="b",Dr.ERROR="c",Dr.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Zr=rc,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,zh=me}).apply(typeof ri<"u"?ri:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r="12.14.0";function Hp(r){_r=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Fh("@firebase/firestore");function Un(){return Ft.logLevel}function Jp(r){Ft.setLogLevel(r)}function C(r,...e){if(Ft.logLevel<=J.DEBUG){const t=e.map(Oa);Ft.debug(`Firestore (${_r}): ${r}`,...t)}}function ge(r,...e){if(Ft.logLevel<=J.ERROR){const t=e.map(Oa);Ft.error(`Firestore (${_r}): ${r}`,...t)}}function ze(r,...e){if(Ft.logLevel<=J.WARN){const t=e.map(Oa);Ft.warn(`Firestore (${_r}): ${r}`,...t)}}function Oa(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Wh(r,n,t)}function Wh(r,e,t){let n=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ge(n),new Error(n)}function L(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Wh(e,s,n)}function Yp(r,e){r||F(57014,e)}function O(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(be.UNAUTHENTICATED)))}shutdown(){}}class Xp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Zp{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new Se;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Se,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},u=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>u(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Se)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new Hh(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class e_{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class t_{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new e_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Np(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){L(this.o===void 0,3512);const n=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(L(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new sa(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class r_{getToken(){return Promise.resolve(new sa(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=s_(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function z(r,e){return r<e?-1:r>e?1:0}function ia(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return $o(s)===$o(i)?z(s,i):$o(s)?1:-1}return z(r.length,e.length)}const i_=55296,o_=57343;function $o(r){const e=r.charCodeAt(0);return e>=i_&&e<=o_}function Wn(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function Yh(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="__name__";class Ze{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&F(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Ze.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return z(e.length,t.length)}static compareSegments(e,t){const n=Ze.isNumericId(e),s=Ze.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):ia(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kt.fromString(e.substring(4,e.length-2))}}class K extends Ze{construct(e,t,n){return new K(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new K(t)}static emptyPath(){return new K([])}}const a_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Ze{construct(e,t,n){return new ce(e,t,n)}static isValidIdentifier(e){return a_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oa}static keyField(){return new ce([oa])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(n+=u,s++):(i(),s++)}if(i(),o)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.path=e}static fromPath(e){return new k(K.fromString(e))}static fromName(e){return new k(K.fromString(e).popFirst(5))}static empty(){return new k(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&K.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new k(new K(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(r,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Xh(r,e,t,n){if(e===!0&&n===!0)throw new V(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function sl(r){if(!k.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function il(r){if(k.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Zh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ji(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function Q(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ji(r);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function ed(r,e){if(e<=0)throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r,e){const t={typeString:r};return e&&(t.value=e),t}function vn(r,e){if(!Zh(r))throw new V(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new V(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=-62135596800,al=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*al);return new ee(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ol)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/al}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vn(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ol;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:ye("string",ee._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ee(0,0))}static max(){return new U(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=-1;class Jn{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function aa(r){return r.fields.find((e=>e.kind===2))}function on(r){return r.fields.filter((e=>e.kind!==2))}function u_(r,e){let t=z(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=c_(r.fields[n],e.fields[n]),t!==0)return t;return z(r.fields.length,e.fields.length)}Jn.UNKNOWN_ID=-1;class fn{constructor(e,t){this.fieldPath=e,this.kind=t}}function c_(r,e){const t=ce.comparator(r.fieldPath,e.fieldPath);return t!==0?t:z(r.kind,e.kind)}class Yn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Yn(0,Qe.min())}}function td(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new ee(t+1,0):new ee(t,n));return new Qe(s,k.empty(),e)}function nd(r){return new Qe(r.readTime,r.key,Hn)}class Qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qe(U.min(),k.empty(),Hn)}static max(){return new Qe(U.max(),k.empty(),Hn)}}function Fa(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=k.comparator(r.documentKey,e.documentKey),t!==0?t:z(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==rd)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):v.reject(t)}static resolve(e){return new v(((t,n)=>{t(e)}))}static reject(e){return new v(((t,n)=>{n(e)}))}static waitFor(e){return new v(((t,n)=>{let s=0,i=0,o=!1;e.forEach((u=>{++s,u.next((()=>{++i,o&&i===s&&t()}),(c=>n(c)))})),o=!0,i===s&&t()}))}static or(e){let t=v.resolve(!1);for(const n of e)t=t.next((s=>s?v.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new v(((n,s)=>{const i=e.length,o=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next((f=>{o[h]=f,++u,u===i&&n(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new v(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="SimpleDb";class zi{static open(e,t,n,s){try{return new zi(t,e.transaction(s,n))}catch(i){throw new ss(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Se,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ss(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=La(n.target.error);this.S.reject(new ss(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(C(Ge,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new h_(t)}}class st{static delete(e){return C(Ge,"Removing database:",e),un(Vh().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!kh())return!1;if(st.F())return!0;const e=Qn(),t=st.M(e),n=0<t&&t<10,s=id(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,st.M(Qn())===12.2&&ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(C(Ge,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new ss(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new V(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new V(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new ss(e,o))},s.onupgradeneeded=i=>{C(Ge,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{C(Ge,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const u=zi.open(this.db,e,i?"readonly":"readwrite",n),c=s(u).next((h=>(u.C(),h))).catch((h=>(u.abort(h),v.reject(h)))).toPromise();return c.catch((()=>{})),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&o<3;if(C(Ge,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function id(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class l_{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return un(this.U.delete())}}class ss extends V{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kt(r){return r.name==="IndexedDbTransactionError"}class h_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C(Ge,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(C(Ge,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),un(n)}add(e){return C(Ge,"ADD",this.store.name,e,e),un(this.store.add(e))}get(e){return un(this.store.get(e)).next((t=>(t===void 0&&(t=null),C(Ge,"GET",this.store.name,e,t),t)))}delete(e){return C(Ge,"DELETE",this.store.name,e),un(this.store.delete(e))}count(){return C(Ge,"COUNT",this.store.name),un(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new v(((o,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{o(c.target.result)}}))}{const i=this.cursor(n),o=[];return this.H(i,((u,c)=>{o.push(c)})).next((()=>o))}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new v(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}X(e,t){C(Ge,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const s=this.cursor(n);return this.H(s,((i,o,u)=>u.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new v(((n,s)=>{t.onerror=i=>{const o=La(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((u=>{u?o.continue():n()})):n()}}))}H(e,t){const n=[];return new v(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const u=o.target.result;if(!u)return void s();const c=new l_(u),h=t(u.primaryKey,u.value,c);if(h instanceof v){const f=h.catch((m=>(c.done(),v.reject(m))));n.push(f)}c.isDone?s():c.G===null?u.continue():u.continue(c.G)}})).next((()=>v.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function un(r){return new v(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=La(n.target.error);t(s)}}))}let ul=!1;function La(r){const e=st.M(Qn());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ul||(ul=!0,setTimeout((()=>{throw n}),0)),n}}return r}const is="IndexBackfiller";class d_{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){C(is,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();C(is,`Documents written: ${t}`)}catch(t){Kt(t)?C(is,"Ignoring IndexedDB error during index backfill: ",t):await Gt(t)}await this.re(6e4)}))}}class f_{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let s=t,i=!0;return v.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return C(is,`Processing collection: ${o}`),this.oe(e,o,s).next((u=>{s-=u,n.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((u=>(C(is,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u)))).next((()=>o.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=nd(i);Fa(o,n)>0&&(n=o)})),new Qe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Le.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=-1;function Cs(r){return r==null}function _s(r){return r===0&&1/r==-1/0}function od(r){return typeof r=="number"&&Number.isInteger(r)&&!_s(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="";function xe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=cl(e)),e=m_(r.get(t),e);return cl(e)}function m_(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case vi:t+="";break;default:t+=i}}return t}function cl(r){return r+vi+""}function tt(r){const e=r.length;if(L(e>=2,64408,{path:r}),e===2)return L(r.charAt(0)===vi&&r.charAt(1)==="",56145,{path:r}),K.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(vi,i);switch((o<0||o>t)&&F(50515,{path:r}),r.charAt(o+1)){case"":const u=r.substring(i,o);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:F(61167,{path:r})}i=o+2}return new K(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="remoteDocuments",Ds="owner",kn="owner",ys="mutationQueues",g_="userId",We="mutations",ll="batchId",dn="userMutationsIndex",hl=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,e){return[r,xe(e)]}function ad(r,e,t){return[r,xe(e),t]}const p_={},Xn="documentMutations",bi="remoteDocumentsV14",__=["prefixPath","collectionGroup","readTime","documentId"],fi="documentKeyIndex",y_=["prefixPath","collectionGroup","documentId"],ud="collectionGroupIndex",I_=["collectionGroup","readTime","prefixPath","documentId"],Is="remoteDocumentGlobal",ua="remoteDocumentGlobalKey",Zn="targets",cd="queryTargetsIndex",E_=["canonicalId","targetId"],er="targetDocuments",T_=["targetId","path"],Ba="documentTargetsIndex",w_=["path","targetId"],Ri="targetGlobalKey",mn="targetGlobal",Es="collectionParents",A_=["collectionId","parent"],tr="clientMetadata",v_="clientId",$i="bundles",b_="bundleId",Gi="namedQueries",R_="name",Ua="indexConfiguration",S_="indexId",ca="collectionGroupIndex",P_="collectionGroup",os="indexState",V_=["indexId","uid"],ld="sequenceNumberIndex",C_=["uid","sequenceNumber"],as="indexEntries",D_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hd="documentKeyIndex",x_=["indexId","uid","orderedDocumentKey"],Ki="documentOverlays",N_=["userId","collectionPath","documentId"],la="collectionPathOverlayIndex",k_=["userId","collectionPath","largestBatchId"],dd="collectionGroupOverlayIndex",O_=["userId","collectionGroup","largestBatchId"],qa="globals",M_="name",fd=[ys,We,Xn,an,Zn,Ds,mn,er,tr,Is,Es,$i,Gi],F_=[...fd,Ki],md=[ys,We,Xn,bi,Zn,Ds,mn,er,tr,Is,Es,$i,Gi,Ki],gd=md,ja=[...gd,Ua,os,as],L_=ja,pd=[...ja,qa],B_=pd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends sd{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function we(r,e){const t=O(r);return st.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Qt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function _d(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function yd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new si(this.root,e,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new si(this.root,e,this.comparator,!0)}}class si{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Pe.RED,this.left=s??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Pe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fl(this.data.getIterator())}getIteratorFrom(e){return new fl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new re(this.comparator);return t.data=e,t}}class fl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function On(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Be([])}unionWith(e){let t=new re(ce.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Id("Invalid base64 string: "+i):i}})(e);return new fe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const q_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(r){if(L(!!r,39018),typeof r=="string"){let e=0;const t=q_.exec(r);if(L(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function dt(r){return typeof r=="string"?fe.fromBase64String(r):fe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="server_timestamp",Td="__type__",wd="__previous_value__",Ad="__local_write_time__";function Qi(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Td])==null?void 0:n.stringValue)===Ed}function Wi(r){const e=r.mapValue.fields[wd];return Qi(e)?Wi(e):e}function Ts(r){const e=ht(r.mapValue.fields[Ad].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t,n,s,i,o,u,c,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ws="(default)";class Lt{constructor(e,t){this.projectId=e,this.database=t||ws}static empty(){return new Lt("","")}get isDefaultDatabase(){return this.database===ws}isEqual(e){return e instanceof Lt&&e.projectId===this.projectId&&e.database===this.database}}function z_(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lt(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="__type__",vd="__max__",Ct={mapValue:{fields:{__type__:{stringValue:vd}}}},$a="__vector__",nr="value",mi={nullValue:"NULL_VALUE"};function Bt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Qi(r)?4:Rd(r)?9007199254740991:Hi(r)?10:11:F(28295,{value:r})}function ot(r,e){if(r===e)return!0;const t=Bt(r);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ts(r).isEqual(Ts(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ht(s.timestampValue),u=ht(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return dt(s.bytesValue).isEqual(dt(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=le(s.doubleValue),u=le(i.doubleValue);return o===u?_s(o)===_s(u):isNaN(o)&&isNaN(u)}return!1})(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(dl(o)!==dl(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!ot(o[c],u[c])))return!1;return!0})(r,e);default:return F(52216,{left:r})}}function As(r,e){return(r.values||[]).find((t=>ot(t,e)))!==void 0}function Ut(r,e){if(r===e)return 0;const t=Bt(r),n=Bt(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const u=le(i.integerValue||i.doubleValue),c=le(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1})(r,e);case 3:return ml(r.timestampValue,e.timestampValue);case 4:return ml(Ts(r),Ts(e));case 5:return ia(r.stringValue,e.stringValue);case 6:return(function(i,o){const u=dt(i),c=dt(o);return u.compareTo(c)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const u=i.split("/"),c=o.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=z(u[h],c[h]);if(f!==0)return f}return z(u.length,c.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const u=z(le(i.latitude),le(o.latitude));return u!==0?u:z(le(i.longitude),le(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return gl(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var p,A,D,N;const u=i.fields||{},c=o.fields||{},h=(p=u[nr])==null?void 0:p.arrayValue,f=(A=c[nr])==null?void 0:A.arrayValue,m=z(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:gl(h,f)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ct.mapValue&&o===Ct.mapValue)return 0;if(i===Ct.mapValue)return 1;if(o===Ct.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const p=ia(c[m],f[m]);if(p!==0)return p;const A=Ut(u[c[m]],h[f[m]]);if(A!==0)return A}return z(c.length,f.length)})(r.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function ml(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return z(r,e);const t=ht(r),n=ht(e),s=z(t.seconds,n.seconds);return s!==0?s:z(t.nanos,n.nanos)}function gl(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ut(t[s],n[s]);if(i)return i}return z(t.length,n.length)}function rr(r){return da(r)}function da(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=ht(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return dt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return k.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=da(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${da(t.fields[o])}`;return s+"}"})(r.mapValue):F(61005,{value:r})}function gi(r){switch(Bt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wi(r);return e?16+gi(e):16;case 5:return 2*r.stringValue.length;case 6:return dt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+gi(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Qt(n.fields,((i,o)=>{s+=i.length+gi(o)})),s})(r.mapValue);default:throw F(13486,{value:r})}}function pn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function vs(r){return!!r&&"integerValue"in r}function bd(r){return vs(r)||(function(t){return!!t&&"doubleValue"in t})(r)}function bs(r){return!!r&&"arrayValue"in r}function pl(r){return!!r&&"nullValue"in r}function _l(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function pi(r){return!!r&&"mapValue"in r}function Hi(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[za])==null?void 0:n.stringValue)===$a}function us(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Qt(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=us(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=us(r.arrayValue.values[t]);return e}return{...r}}function Rd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===vd}const Sd={mapValue:{fields:{[za]:{stringValue:$a},[nr]:{arrayValue:{}}}}};function $_(r){return"nullValue"in r?mi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?pn(Lt.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Hi(r)?Sd:{mapValue:{}}:F(35942,{value:r})}function G_(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?pn(Lt.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Sd:"mapValue"in r?Hi(r)?{mapValue:{}}:Ct:F(61959,{value:r})}function yl(r,e){const t=Ut(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Il(r,e){const t=Ut(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(t)}setAll(e){let t=ce.emptyPath(),n={},s=[];e.forEach(((o,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=u.popLast()}o?n[u.lastSegment()]=us(o):s.push(u.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Qt(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new Re(us(this.value))}}function Pd(r){const e=[];return Qt(r.fields,((t,n)=>{const s=new ce([t]);if(pi(n)){const i=Pd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t,n,s,i,o,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new ue(e,0,U.min(),U.min(),U.min(),Re.empty(),0)}static newFoundDocument(e,t,n,s){return new ue(e,1,t,U.min(),n,s,0)}static newNoDocument(e,t){return new ue(e,2,t,U.min(),U.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new ue(e,3,t,U.min(),U.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.position=e,this.inclusive=t}}function El(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=k.comparator(k.fromName(o.referenceValue),t.key):n=Ut(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Tl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ot(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function K_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{}class W extends Vd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Q_(e,t,n):t==="array-contains"?new J_(e,n):t==="in"?new Od(e,n):t==="not-in"?new Y_(e,n):t==="array-contains-any"?new X_(e,n):new W(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new W_(e,n):new H_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ut(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(Ut(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends Vd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new te(e,t)}matches(e){return sr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sr(r){return r.op==="and"}function fa(r){return r.op==="or"}function Ga(r){return Cd(r)&&sr(r)}function Cd(r){for(const e of r.filters)if(e instanceof te)return!1;return!0}function ma(r){if(r instanceof W)return r.field.canonicalString()+r.op.toString()+rr(r.value);if(Ga(r))return r.filters.map((e=>ma(e))).join(",");{const e=r.filters.map((t=>ma(t))).join(",");return`${r.op}(${e})`}}function Dd(r,e){return r instanceof W?(function(n,s){return s instanceof W&&n.op===s.op&&n.field.isEqual(s.field)&&ot(n.value,s.value)})(r,e):r instanceof te?(function(n,s){return s instanceof te&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,u)=>i&&Dd(o,s.filters[u])),!0):!1})(r,e):void F(19439)}function xd(r,e){const t=r.filters.concat(e);return te.create(t,r.op)}function Nd(r){return r instanceof W?(function(t){return`${t.field.canonicalString()} ${t.op} ${rr(t.value)}`})(r):r instanceof te?(function(t){return t.op.toString()+" {"+t.getFilters().map(Nd).join(" ,")+"}"})(r):"Filter"}class Q_ extends W{constructor(e,t,n){super(e,t,n),this.key=k.fromName(n.referenceValue)}matches(e){const t=k.comparator(e.key,this.key);return this.matchesComparison(t)}}class W_ extends W{constructor(e,t){super(e,"in",t),this.keys=kd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class H_ extends W{constructor(e,t){super(e,"not-in",t),this.keys=kd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function kd(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>k.fromName(n.referenceValue)))}class J_ extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bs(t)&&As(t.arrayValue,this.value)}}class Od extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&As(this.value.arrayValue,t)}}class Y_ extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!As(this.value.arrayValue,t)}}class X_ extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>As(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t=null,n=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.Te=null}}function ga(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Z_(r,e,t,n,s,i,o)}function _n(r){const e=O(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ma(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>rr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>rr(n))).join(",")),e.Te=t}return e.Te}function xs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!K_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Dd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Tl(r.startAt,e.startAt)&&Tl(r.endAt,e.endAt)}function Si(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Pi(r,e){return r.filters.filter((t=>t instanceof W&&t.field.isEqual(e)))}function wl(r,e,t){let n=mi,s=!0;for(const i of Pi(r,e)){let o=mi,u=!0;switch(i.op){case"<":case"<=":o=$_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,u=!1;break;case"!=":case"not-in":o=mi}yl({value:n,inclusive:s},{value:o,inclusive:u})<0&&(n=o,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];yl({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Al(r,e,t){let n=Ct,s=!0;for(const i of Pi(r,e)){let o=Ct,u=!0;switch(i.op){case">=":case">":o=G_(i.value),u=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,u=!1;break;case"!=":case"not-in":o=Ct}Il({value:n,inclusive:s},{value:o,inclusive:u})>0&&(n=o,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Il({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t=null,n=[],s=[],i=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Md(r,e,t,n,s,i,o,u){return new gt(r,e,t,n,s,i,o,u)}function yr(r){return new gt(r)}function vl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ey(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ka(r){return r.collectionGroup!==null}function $n(r){const e=O(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new re(ce.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(u=u.add(h.field))}))})),u})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Rs(i,n))})),t.has(ce.keyField().canonicalString())||e.Ie.push(new Rs(ce.keyField(),n))}return e.Ie}function Ne(r){const e=O(r);return e.Ee||(e.Ee=Ld(e,$n(r))),e.Ee}function Fd(r){const e=O(r);return e.Re||(e.Re=Ld(e,r.explicitOrderBy)),e.Re}function Ld(r,e){if(r.limitType==="F")return ga(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Rs(s.field,i)}));const t=r.endAt?new qt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new qt(r.startAt.position,r.startAt.inclusive):null;return ga(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function pa(r,e){const t=r.filters.concat([e]);return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ty(r,e){const t=r.explicitOrderBy.concat([e]);return new gt(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Vi(r,e,t){return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ny(r,e){return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,e,r.endAt)}function ry(r,e){return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,e)}function Ns(r,e){return xs(Ne(r),Ne(e))&&r.limitType===e.limitType}function Bd(r){return`${_n(Ne(r))}|lt:${r.limitType}`}function qn(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>Nd(s))).join(", ")}]`),Cs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>rr(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>rr(s))).join(",")),`Target(${n})`})(Ne(r))}; limitType=${r.limitType})`}function ks(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of $n(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,u,c){const h=El(o,u,c);return o.inclusive?h<=0:h<0})(n.startAt,$n(n),s)||n.endAt&&!(function(o,u,c){const h=El(o,u,c);return o.inclusive?h>=0:h>0})(n.endAt,$n(n),s))})(r,e)}function Ud(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qd(r){return(e,t)=>{let n=!1;for(const s of $n(r)){const i=sy(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function sy(r,e,t){const n=r.field.isKeyField()?k.comparator(e.key,t.key):(function(i,o,u){const c=o.data.field(i),h=u.data.field(i);return c!==null&&h!==null?Ut(c,h):F(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qt(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return yd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new oe(k.comparator);function Ue(){return iy}const jd=new oe(k.comparator);function es(...r){let e=jd;for(const t of r)e=e.insert(t.key,t);return e}function zd(r){let e=jd;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function nt(){return cs()}function $d(){return cs()}function cs(){return new pt((r=>r.toString()),((r,e)=>r.isEqual(e)))}const oy=new oe(k.comparator),ay=new re(k.comparator);function $(...r){let e=ay;for(const t of r)e=e.add(t);return e}const uy=new re(z);function Qa(){return uy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(e)?"-0":e}}function Wa(r){return{integerValue:""+r}}function Yi(r,e){return od(e)?Wa(e):Ji(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this._=void 0}}function cy(r,e,t){return r instanceof ir?(function(s,i){const o={fields:{[Td]:{stringValue:Ed},[Ad]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qi(i)&&(i=Wi(i)),i&&(o.fields[wd]=i),{mapValue:o}})(t,e):r instanceof yn?Kd(r,e):r instanceof In?Qd(r,e):r instanceof En?(function(s,i){const o=Gd(s,i),u=Ci(o)+Ci(s.Ae);return vs(o)&&vs(s.Ae)?Wa(u):Ji(s.serializer,u)})(r,e):r instanceof or?(function(s,i){return bl(s,i,Math.min)})(r,e):r instanceof ar?(function(s,i){return bl(s,i,Math.max)})(r,e):void 0}function ly(r,e,t){return r instanceof yn?Kd(r,e):r instanceof In?Qd(r,e):t}function Gd(r,e){return r instanceof En?bd(e)?e:{integerValue:0}:null}class ir extends Xi{}class yn extends Xi{constructor(e){super(),this.elements=e}}function Kd(r,e){const t=Wd(e);for(const n of r.elements)t.some((s=>ot(s,n)))||t.push(n);return{arrayValue:{values:t}}}class In extends Xi{constructor(e){super(),this.elements=e}}function Qd(r,e){let t=Wd(e);for(const n of r.elements)t=t.filter((s=>!ot(s,n)));return{arrayValue:{values:t}}}class Ha extends Xi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class En extends Ha{}class or extends Ha{}class ar extends Ha{}function bl(r,e,t){if(!bd(e))return r.Ae;const n=t(Ci(e),Ci(r.Ae));return vs(e)&&vs(r.Ae)?Wa(n):Ji(r.serializer,n)}function Ci(r){return le(r.integerValue||r.doubleValue)}function Wd(r){return bs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.field=e,this.transform=t}}function hy(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof yn&&s instanceof yn||n instanceof In&&s instanceof In?Wn(n.elements,s.elements,ot):n instanceof En&&s instanceof En||n instanceof or&&s instanceof or||n instanceof ar&&s instanceof ar?ot(n.Ae,s.Ae):n instanceof ir&&s instanceof ir})(r.transform,e.transform)}class dy{constructor(e,t){this.version=e,this.transformResults=t}}class he{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new he}static exists(e){return new he(void 0,e)}static updateTime(e){return new he(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _i(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Zi{}function Hd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Er(r.key,he.none()):new Ir(r.key,r.data,he.none());{const t=r.data,n=Re.empty();let s=new re(ce.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new _t(r.key,n,new Be(s.toArray()),he.none())}}function fy(r,e,t){r instanceof Ir?(function(s,i,o){const u=s.value.clone(),c=Sl(s.fieldTransforms,i,o.transformResults);u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):r instanceof _t?(function(s,i,o){if(!_i(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=Sl(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Jd(s)),c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ls(r,e,t,n){return r instanceof Ir?(function(i,o,u,c){if(!_i(i.precondition,o))return u;const h=i.value.clone(),f=Pl(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof _t?(function(i,o,u,c){if(!_i(i.precondition,o))return u;const h=Pl(i.fieldTransforms,c,o),f=o.data;return f.setAll(Jd(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(r,e,t,n):(function(i,o,u){return _i(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u})(r,e,t)}function my(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Gd(n.transform,s||null);i!=null&&(t===null&&(t=Re.empty()),t.set(n.field,i))}return t||null}function Rl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wn(n,s,((i,o)=>hy(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ir extends Zi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _t extends Zi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jd(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Sl(r,e,t){const n=new Map;L(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,u=e.data.field(i.field);n.set(i.field,ly(o,u,t[s]))}return n}function Pl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,cy(i,o,e))}return n}class Er extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ja extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fy(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ls(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ls(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=$d();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=t.has(s.key)?null:u;const c=Hd(o,u);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,((t,n)=>Rl(t,n)))&&Wn(this.baseMutations,e.baseMutations,((t,n)=>Rl(t,n)))}}class Xa{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){L(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return oy})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Xa(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,H;function Xd(r){switch(r){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function Zd(r){if(r===void 0)return ge("GRPC error has no .code"),R.UNKNOWN;switch(r){case _e.OK:return R.OK;case _e.CANCELLED:return R.CANCELLED;case _e.UNKNOWN:return R.UNKNOWN;case _e.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case _e.INTERNAL:return R.INTERNAL;case _e.UNAVAILABLE:return R.UNAVAILABLE;case _e.UNAUTHENTICATED:return R.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case _e.NOT_FOUND:return R.NOT_FOUND;case _e.ALREADY_EXISTS:return R.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return R.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case _e.ABORTED:return R.ABORTED;case _e.OUT_OF_RANGE:return R.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return R.UNIMPLEMENTED;case _e.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:r})}}(H=_e||(_e={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs=null;function py(r){if(hs)throw new Error("a TestingHooksSpi instance is already set");hs=r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new kt([4294967295,4294967295],0);function Vl(r){const e=ef().encode(r),t=new jh;return t.update(e),new Uint8Array(t.digest())}function Cl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kt([t,n],0),new kt([s,i],0)]}class eu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ts(`Invalid padding: ${t}`);if(n<0)throw new ts(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ts(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ts(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=kt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(kt.fromNumber(n)));return s.compare(_y)===1&&(s=new kt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Vl(e),[n,s]=Cl(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new eu(i,s,t);return n.forEach((u=>o.insert(u))),o}insert(e){if(this.ge===0)return;const t=Vl(e),[n,s]=Cl(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Tr(U.min(),s,new oe(z),Ue(),$())}}class Os{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Os(n,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class tf{constructor(e,t){this.targetId=e,this.Ce=t}}class nf{constructor(e,t,n=fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Dl{constructor(e){this.targetId=e,this.ve=0,this.Fe=xl(),this.Me=fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=$(),t=$(),n=$();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:F(38017,{changeType:i})}})),new Os(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=xl()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,L(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Kr="WatchChangeAggregator";class yy{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ue(),this.Je=ii(),this.He=ii(),this.Ze=new oe(z)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.ze.get(t);if(n)switch(e.state){case 0:this.nt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Le(e.resumeToken));break;default:F(56790,{state:e.state})}else C(Kr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,n=e.Ce.count,s=this.st(t);if(s){const i=s.target;if(Si(i))if(n===0){const o=new k(i.path);this.et(t,o,ue.newNoDocument(o,U.min()))}else L(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const u=this._t(e),c=u?this.ut(u,e,o):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}hs==null||hs.o((function(f,m,p,A,D){var B,j,q;const N={localCacheCount:f,existenceFilterCount:m.count,databaseId:p.database,projectId:p.projectId},x=m.unchangedNames;return x&&(N.bloomFilter={applied:D===0,hashCount:(x==null?void 0:x.hashCount)??0,bitmapLength:((j=(B=x==null?void 0:x.bits)==null?void 0:B.bitmap)==null?void 0:j.length)??0,padding:((q=x==null?void 0:x.bits)==null?void 0:q.padding)??0,mightContain:Z=>(A==null?void 0:A.mightContain(Z))??!1}),N})(o,e.Ce,this.Ge.lt(),u,c))}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,u;try{o=dt(n).toUint8Array()}catch(c){if(c instanceof Id)return ze("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new eu(o,s,i)}catch(c){return ze(c instanceof ts?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.ge===0?null:u}ut(e,t,n){return t.Ce.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Ge.lt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.et(t,i,null),s++)})),s}Pt(e){const t=new Map;this.ze.forEach(((i,o)=>{const u=this.st(o);if(u){if(i.current&&Si(u.target)){const c=new k(u.target.path);this.Tt(c).has(o)||this.It(o,c)||this.et(o,c,ue.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let n=$();this.He.forEach(((i,o)=>{let u=!0;o.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Tr(e,t,this.Ze,this.je,n);return this.je=Ue(),this.Je=ii(),this.He=ii(),this.Ze=new oe(z),s}Ye(e,t){const n=this.ze.get(e);if(!n||!this.nt(e))return void C(Kr,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,t.key)?2:0;n.Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,n){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),n&&(this.je=this.je.insert(t,n))):C(Kr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const n=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(C(Kr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Dl(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new re(z),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new re(z),this.Je=this.Je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||C(Kr,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Dl(e)),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ii(){return new oe(k.comparator)}function xl(){return new oe(k.comparator)}const Iy={asc:"ASCENDING",desc:"DESCENDING"},Ey={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ty={and:"AND",or:"OR"};class wy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _a(r,e){return r.useProto3Json||Cs(e)?e:{value:e}}function ur(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Ay(r,e){return ur(r,e.toTimestamp())}function pe(r){return L(!!r,49232),U.fromTimestamp((function(t){const n=ht(t);return new ee(n.seconds,n.nanos)})(r))}function tu(r,e){return ya(r,e).canonicalString()}function ya(r,e){const t=(function(s){return new K(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function sf(r){const e=K.fromString(r);return L(mf(e),10190,{key:e.toString()}),e}function Ss(r,e){return tu(r.databaseId,e.path)}function it(r,e){const t=sf(e);if(t.get(1)!==r.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new k(uf(t))}function of(r,e){return tu(r.databaseId,e)}function af(r){const e=sf(r);return e.length===4?K.emptyPath():uf(e)}function Ia(r){return new K(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function uf(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Nl(r,e,t){return{name:Ss(r,e),fields:t.value.mapValue.fields}}function eo(r,e,t){const n=it(r,e.name),s=pe(e.updateTime),i=e.createTime?pe(e.createTime):U.min(),o=new Re({mapValue:{fields:e.fields}}),u=ue.newFoundDocument(n,s,i,o);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function vy(r,e){return"found"in e?(function(n,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=it(n,s.found.name),o=pe(s.found.updateTime),u=s.found.createTime?pe(s.found.createTime):U.min(),c=new Re({mapValue:{fields:s.found.fields}});return ue.newFoundDocument(i,o,u,c)})(r,e):"missing"in e?(function(n,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=it(n,s.missing),o=pe(s.readTime);return ue.newNoDocument(i,o)})(r,e):F(7234,{result:e})}function by(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string",58123),fe.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),fe.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&(function(h){const f=h.code===void 0?R.UNKNOWN:Zd(h.code);return new V(f,h.message||"")})(o);t=new nf(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=it(r,n.document.name),i=pe(n.document.updateTime),o=n.document.createTime?pe(n.document.createTime):U.min(),u=new Re({mapValue:{fields:n.document.fields}}),c=ue.newFoundDocument(s,i,o,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new yi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=it(r,n.document),i=n.readTime?pe(n.readTime):U.min(),o=ue.newNoDocument(s,i),u=n.removedTargetIds||[];t=new yi([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=it(r,n.document),i=n.removedTargetIds||[];t=new yi([],i,s,null)}else{if(!("filter"in e))return F(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new gy(s,i),u=n.targetId;t=new tf(u,o)}}return t}function Ps(r,e){let t;if(e instanceof Ir)t={update:Nl(r,e.key,e.value)};else if(e instanceof Er)t={delete:Ss(r,e.key)};else if(e instanceof _t)t={update:Nl(r,e.key,e.data),updateMask:Dy(e.fieldMask)};else{if(!(e instanceof Ja))return F(16599,{Vt:e.type});t={verify:Ss(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const u=o.transform;if(u instanceof ir)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof yn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof In)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof En)return{fieldPath:o.field.canonicalString(),increment:u.Ae};if(u instanceof or)return{fieldPath:o.field.canonicalString(),minimum:u.Ae};if(u instanceof ar)return{fieldPath:o.field.canonicalString(),maximum:u.Ae};throw F(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Ay(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)})(r,e.precondition)),t}function Ea(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?he.updateTime(pe(i.updateTime)):i.exists!==void 0?he.exists(i.exists):he.none()})(e.currentDocument):he.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new ir;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new yn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new In(f)}else"increment"in u?c=new En(o,u.increment):"minimum"in u?c=new or(o,u.minimum):"maximum"in u?c=new ar(o,u.maximum):F(16584,{proto:u});const h=ce.fromServerFormat(u.fieldPath);return new bn(h,c)})(r,s))):[];if(e.update){e.update.name;const s=it(r,e.update.name),i=new Re({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(c){const h=c.fieldPaths||[];return new Be(h.map((f=>ce.fromServerFormat(f))))})(e.updateMask);return new _t(s,i,o,t,n)}return new Ir(s,i,t,n)}if(e.delete){const s=it(r,e.delete);return new Er(s,t)}if(e.verify){const s=it(r,e.verify);return new Ja(s,t)}return F(1463,{proto:e})}function Ry(r,e){return r&&r.length>0?(L(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?pe(s.updateTime):pe(i);return o.isEqual(U.min())&&(o=pe(i)),new dy(o,s.transformResults||[])})(t,e)))):[]}function cf(r,e){return{documents:[of(r,e.path)]}}function to(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=of(r,s);const i=(function(h){if(h.length!==0)return ff(te.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(p){return{field:Pt(p.field),direction:Py(p.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const u=_a(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{dt:t,parent:s}}function lf(r,e,t,n){const{dt:s,parent:i}=to(r,e),o={},u=[];let c=0;return t.forEach((h=>{const f=n?h.alias:"aggregate_"+c++;o[f]=h.alias,h.aggregateType==="count"?u.push({alias:f,count:{}}):h.aggregateType==="avg"?u.push({alias:f,avg:{field:Pt(h.fieldPath)}}):h.aggregateType==="sum"&&u.push({alias:f,sum:{field:Pt(h.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},ft:o,parent:i}}function hf(r){let e=af(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){L(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const p=df(m);return p instanceof te&&Ga(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((p=>(function(D){return new Rs(jn(D.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(p)))})(t.orderBy));let u=null;t.limit&&(u=(function(m){let p;return p=typeof m=="object"?m.value:m,Cs(p)?null:p})(t.limit));let c=null;t.startAt&&(c=(function(m){const p=!!m.before,A=m.values||[];return new qt(A,p)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const p=!m.before,A=m.values||[];return new qt(A,p)})(t.endAt)),Md(e,s,o,i,u,"F",c,h)}function Sy(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function df(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=jn(t.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=jn(t.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jn(t.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jn(t.unaryFilter.field);return W.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(r):r.fieldFilter!==void 0?(function(t){return W.create(jn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return te.create(t.compositeFilter.filters.map((n=>df(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(r):F(30097,{filter:r})}function Py(r){return Iy[r]}function Vy(r){return Ey[r]}function Cy(r){return Ty[r]}function Pt(r){return{fieldPath:r.canonicalString()}}function jn(r){return ce.fromServerFormat(r.fieldPath)}function ff(r){return r instanceof W?(function(t){if(t.op==="=="){if(_l(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NAN"}};if(pl(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_l(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NOT_NAN"}};if(pl(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pt(t.field),op:Vy(t.op),value:t.value}}})(r):r instanceof te?(function(t){const n=t.getFilters().map((s=>ff(s)));return n.length===1?n[0]:{compositeFilter:{op:Cy(t.op),filters:n}}})(r):F(54877,{filter:r})}function Dy(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function gf(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,n,s,i=U.min(),o=U.min(),u=fe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.gt=e}}function xy(r,e){let t;if(e.document)t=eo(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=k.fromSegments(e.noDocument.path),s=wn(e.noDocument.readTime);t=ue.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const n=k.fromSegments(e.unknownDocument.path),s=wn(e.unknownDocument.version);t=ue.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ee(s[0],s[1]);return U.fromTimestamp(i)})(e.readTime)),t}function kl(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Di(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:Ss(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ur(i,o.version.toTimestamp()),createTime:ur(i,o.createTime.toTimestamp())}})(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Tn(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Tn(e.version)}}return n}function Di(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Tn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function wn(r){const e=new ee(r.seconds,r.nanoseconds);return U.fromTimestamp(e)}function cn(r,e){const t=(e.baseMutations||[]).map((i=>Ea(r.gt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const u=e.mutations[i+1];o.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>Ea(r.gt,i))),s=ee.fromMillis(e.localWriteTimeMs);return new Ya(e.batchId,s,t,n)}function ns(r){const e=wn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?wn(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const o=i.documents.length;return L(o===1,1966,{count:o}),Ne(yr(af(i.documents[0])))})(r.query):(function(i){return Ne(hf(i))})(r.query),new rt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,fe.fromBase64String(r.resumeToken))}function _f(r,e){const t=Tn(e.snapshotVersion),n=Tn(e.lastLimboFreeSnapshotVersion);let s;s=Si(e.target)?cf(r.gt,e.target):to(r.gt,e.target).dt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_n(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function no(r){const e=hf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Vi(e,e.limit,"L"):e}function Go(r,e){return new Za(e.largestBatchId,Ea(r.gt,e.overlayMutation))}function Ol(r,e){const t=e.path.lastSegment();return[r,xe(e.path.popLast()),t]}function Ml(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Tn(n.readTime),documentKey:xe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{getBundleMetadata(e,t){return Fl(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:wn(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Fl(e).put((function(s){return{bundleId:s.id,createTime:Tn(pe(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Ll(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:no(i.bundledQuery),readTime:wn(i.readTime)}})(n)}))}saveNamedQuery(e,t){return Ll(e).put((function(s){return{name:s.name,readTime:Tn(pe(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Fl(r){return we(r,$i)}function Ll(r){return we(r,Gi)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new ro(e,n)}getOverlay(e,t){return Qr(e).get(Ol(this.userId,t)).next((n=>n?Go(this.serializer,n):null))}getOverlays(e,t){const n=nt();return v.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const u=new Za(t,o);s.push(this.wt(e,u))})),v.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(xe(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const u=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Qr(e).X(la,u))})),v.waitFor(i)}getOverlaysForCollection(e,t,n){const s=nt(),i=xe(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Qr(e).J(la,o).next((u=>{for(const c of u){const h=Go(this.serializer,c);s.set(h.getKey(),h)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=nt();let o;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Qr(e).ee({index:dd,range:u},((c,h,f)=>{const m=Go(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()})).next((()=>i))}wt(e,t){return Qr(e).put((function(s,i,o){const[u,c,h]=Ol(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ps(s.gt,o.mutation)}})(this.serializer,this.userId,t))}}function Qr(r){return we(r,Ki)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{St(e){return we(e,qa)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?fe.fromUint8Array(n):fe.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){}bt(e,t){this.Dt(e,t),t.Ct()}Dt(e,t){if("nullValue"in e)this.vt(t,5);else if("booleanValue"in e)this.vt(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.vt(t,15),t.Ft(le(e.integerValue));else if("doubleValue"in e){const n=le(e.doubleValue);isNaN(n)?this.vt(t,13):(this.vt(t,15),_s(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.vt(t,20),typeof n=="string"&&(n=ht(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.vt(t,30),t.Nt(dt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.vt(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?Rd(e)?this.vt(t,Number.MAX_SAFE_INTEGER):Hi(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):F(19022,{Kt:e})}xt(e,t){this.vt(t,25),this.Ut(e,t)}Ut(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.vt(t,55);for(const s of Object.keys(n))this.xt(s,t),this.Dt(n[s],t)}Lt(e,t){var o,u;const n=e.fields||{};this.vt(t,53);const s=nr,i=((u=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:u.length)||0;this.vt(t,15),t.Ft(le(i)),this.xt(s,t),this.Dt(n[s],t)}qt(e,t){const n=e.values||[];this.vt(t,50);for(const s of n)this.Dt(s,t)}Bt(e,t){this.vt(t,37),k.fromName(e).path.forEach((n=>{this.vt(t,60),this.Ut(n,t)}))}vt(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}ln.$t=new ln;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=255;function Oy(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Bl(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=Oy(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class My{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Qt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Qt(n);else if(n<2048)this.Qt(960|n>>>6),this.Qt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Qt(480|n>>>12),this.Qt(128|63&n>>>6),this.Qt(128|63&n);else{const s=t.codePointAt(0);this.Qt(240|s>>>18),this.Qt(128|63&s>>>12),this.Qt(128|63&s>>>6),this.Qt(128|63&s)}}this.Gt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const s=t.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Xt(e){const t=this.Yt(e),n=Bl(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}tn(e){const t=this.Yt(e),n=Bl(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}nn(){this.rn(Mn),this.rn(255)}sn(){this._n(Mn),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Yt(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Qt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Mn?(this.rn(Mn),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Mn?(this._n(Mn),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Fy{constructor(e){this.un=e}Nt(e){this.un.Wt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Xt(e)}Ct(){this.un.nn()}}class Ly{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Zt(e)}Ft(e){this.un.tn(e)}Ct(){this.un.sn()}}class Wr{constructor(){this.un=new My,this.ascending=new Fy(this.un),this.descending=new Ly(this.un)}seed(e){this.un.seed(e)}cn(e){return e===0?this.ascending:this.descending}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,s){this.ln=e,this.hn=t,this.Pn=n,this.Tn=s}In(){const e=this.Tn.length,t=e===0||this.Tn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.Tn,0),t!==e?n.set([0],this.Tn.length):++n[n.length-1],new hn(this.ln,this.hn,this.Pn,n)}En(e,t,n){return{indexId:this.ln,uid:e,arrayValue:Ii(this.Pn),directionalValue:Ii(this.Tn),orderedDocumentKey:Ii(t),documentKey:n.path.toArray()}}Rn(e,t,n){const s=this.En(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function bt(r,e){let t=r.ln-e.ln;return t!==0?t:(t=Ul(r.Pn,e.Pn),t!==0?t:(t=Ul(r.Tn,e.Tn),t!==0?t:k.comparator(r.hn,e.hn)))}function Ul(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Ii(r){return Nh()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function ql(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class jl{constructor(e){this.An=new re(((t,n)=>ce.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Vn=e.orderBy,this.dn=[];for(const t of e.filters){const n=t;n.isInequality()?this.An=this.An.add(n):this.dn.push(n)}}get mn(){return this.An.size>1}fn(e){if(L(e.collectionGroup===this.collectionId,49279),this.mn)return!1;const t=aa(e);if(t!==void 0&&!this.gn(t))return!1;const n=on(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.gn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.An.size>0){const u=this.An.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.pn(u,c)||!this.yn(this.Vn[o++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(o>=this.Vn.length||!this.yn(this.Vn[o++],u))return!1}return!0}wn(){if(this.mn)return null;let e=new re(ce.comparator);const t=[];for(const n of this.dn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new fn(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new fn(n.field,0))}for(const n of this.Vn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new fn(n.field,n.dir==="asc"?0:1)));return new Jn(Jn.UNKNOWN_ID,this.collectionId,t,Yn.empty())}gn(e){for(const t of this.dn)if(this.pn(t,e))return!0;return!1}pn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}yn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(r){var t,n;if(L(r instanceof W||r instanceof te,20012),r instanceof W){if(r instanceof Od){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((i=>W.create(r.field,"==",i))))||[];return te.create(s,"or")}return r}const e=r.filters.map((s=>yf(s)));return te.create(e,r.op)}function By(r){if(r.getFilters().length===0)return[];const e=Aa(yf(r));return L(If(e),7391),Ta(e)||wa(e)?[e]:e.getFilters()}function Ta(r){return r instanceof W}function wa(r){return r instanceof te&&Ga(r)}function If(r){return Ta(r)||wa(r)||(function(t){if(t instanceof te&&fa(t)){for(const n of t.getFilters())if(!Ta(n)&&!wa(n))return!1;return!0}return!1})(r)}function Aa(r){if(L(r instanceof W||r instanceof te,34018),r instanceof W)return r;if(r.filters.length===1)return Aa(r.filters[0]);const e=r.filters.map((n=>Aa(n)));let t=te.create(e,r.op);return t=xi(t),If(t)?t:(L(t instanceof te,64498),L(sr(t),40251),L(t.filters.length>1,57927),t.filters.reduce(((n,s)=>nu(n,s))))}function nu(r,e){let t;return L(r instanceof W||r instanceof te,38388),L(e instanceof W||e instanceof te,25473),t=r instanceof W?e instanceof W?(function(s,i){return te.create([s,i],"and")})(r,e):zl(r,e):e instanceof W?zl(e,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),sr(s)&&sr(i))return xd(s,i.getFilters());const o=fa(s)?s:i,u=fa(s)?i:s,c=o.filters.map((h=>nu(h,u)));return te.create(c,"or")})(r,e),xi(t)}function zl(r,e){if(sr(e))return xd(e,r.getFilters());{const t=e.filters.map((n=>nu(r,n)));return te.create(t,"or")}}function xi(r){if(L(r instanceof W||r instanceof te,11850),r instanceof W)return r;const e=r.getFilters();if(e.length===1)return xi(e[0]);if(Cd(r))return r;const t=e.map((s=>xi(s))),n=[];return t.forEach((s=>{s instanceof W?n.push(s):s instanceof te&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:te.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.Sn=new ru}addToCollectionParentIndex(e,t){return this.Sn.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(Qe.min())}updateCollectionGroup(e,t,n){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class ru{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new re(K.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new re(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="IndexedDbIndexManager",oi=new Uint8Array(0);class qy{constructor(e,t){this.databaseId=t,this.bn=new ru,this.Dn=new pt((n=>_n(n)),((n,s)=>xs(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.bn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.bn.add(t)}));const i={collectionId:n,parent:xe(s)};return Gl(e).put(i)}return v.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Yh(t),""],!1,!0);return Gl(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(tt(o.parent))}return n}))}addFieldIndex(e,t){const n=Hr(e),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((c=>[c.fieldPath.canonicalString(),c.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Ln(e);return i.next((u=>{o.put(Ml(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Hr(e),s=Ln(e),i=Fn(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Hr(e),n=Fn(e),s=Ln(e);return t.X().next((()=>n.X())).next((()=>s.X()))}createTargetIndexes(e,t){return v.forEach(this.Cn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new jl(n).wn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Fn(e);let s=!0;const i=new Map;return v.forEach(this.Cn(t),(o=>this.vn(e,o).next((u=>{s&&(s=!!u),i.set(o,u)})))).next((()=>{if(s){let o=$();const u=[];return v.forEach(i,((c,h)=>{C($l,`Using index ${(function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map((Z=>`${Z.fieldPath}:${Z.kind}`)).join(",")}`})(c)} to execute ${_n(t)}`);const f=(function(q,Z){const Y=aa(Z);if(Y===void 0)return null;for(const X of Pi(q,Y.fieldPath))switch(X.op){case"array-contains-any":return X.value.arrayValue.values||[];case"array-contains":return[X.value]}return null})(h,c),m=(function(q,Z){const Y=new Map;for(const X of on(Z))for(const E of Pi(q,X.fieldPath))switch(E.op){case"==":case"in":Y.set(X.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Y.set(X.fieldPath.canonicalString(),E.value),Array.from(Y.values())}return null})(h,c),p=(function(q,Z){const Y=[];let X=!0;for(const E of on(Z)){const _=E.kind===0?wl(q,E.fieldPath,q.startAt):Al(q,E.fieldPath,q.startAt);Y.push(_.value),X&&(X=_.inclusive)}return new qt(Y,X)})(h,c),A=(function(q,Z){const Y=[];let X=!0;for(const E of on(Z)){const _=E.kind===0?Al(q,E.fieldPath,q.endAt):wl(q,E.fieldPath,q.endAt);Y.push(_.value),X&&(X=_.inclusive)}return new qt(Y,X)})(h,c),D=this.Fn(c,h,p),N=this.Fn(c,h,A),x=this.Mn(c,h,m),B=this.xn(c.indexId,f,D,p.inclusive,N,A.inclusive,x);return v.forEach(B,(j=>n.Z(j,t.limit).next((q=>{q.forEach((Z=>{const Y=k.fromSegments(Z.documentKey);o.has(Y)||(o=o.add(Y),u.push(Y))}))}))))})).next((()=>u))}return v.resolve(null)}))}Cn(e){let t=this.Dn.get(e);return t||(e.filters.length===0?t=[e]:t=By(te.create(e.filters,"and")).map((n=>ga(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Dn.set(e,t),t)}xn(e,t,n,s,i,o,u){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),h=c/(t!=null?t.length:1),f=[];for(let m=0;m<c;++m){const p=t?this.On(t[m/h]):oi,A=this.Nn(e,p,n[m%h],s),D=this.Bn(e,p,i[m%h],o),N=u.map((x=>this.Nn(e,p,x,!0)));f.push(...this.createRange(A,D,N))}return f}Nn(e,t,n,s){const i=new hn(e,k.empty(),t,n);return s?i:i.In()}Bn(e,t,n,s){const i=new hn(e,k.empty(),t,n);return s?i.In():i}vn(e,t){const n=new jl(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const u of i)n.fn(u)&&(!o||u.fields.length>o.fields.length)&&(o=u);return o}))}getIndexType(e,t){let n=2;const s=this.Cn(t);return v.forEach(s,(i=>this.vn(e,i).next((o=>{o?n!==0&&o.fields.length<(function(c){let h=new re(ce.comparator),f=!1;for(const m of c.filters)for(const p of m.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const m of c.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}Ln(e,t){const n=new Wr;for(const s of on(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.cn(s.kind);ln.$t.bt(i,o)}return n.an()}On(e){const t=new Wr;return ln.$t.bt(e,t.cn(0)),t.an()}kn(e,t){const n=new Wr;return ln.$t.bt(pn(this.databaseId,t),n.cn((function(i){const o=on(i);return o.length===0?0:o[o.length-1].kind})(e))),n.an()}Mn(e,t,n){if(n===null)return[];let s=[];s.push(new Wr);let i=0;for(const o of on(e)){const u=n[i++];for(const c of s)if(this.qn(t,o.fieldPath)&&bs(u))s=this.Kn(s,o,u);else{const h=c.cn(o.kind);ln.$t.bt(u,h)}}return this.Un(s)}Fn(e,t,n){return this.Mn(e,t,n.position)}Un(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const u of s){const c=new Wr;c.seed(u.an()),ln.$t.bt(o,c.cn(t.kind)),i.push(c)}return i}qn(e,t){return!!e.filters.find((n=>n instanceof W&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Hr(e),s=Ln(e);return(t?n.J(ca,IDBKeyRange.bound(t,t)):n.J()).next((i=>{const o=[];return v.forEach(i,(u=>s.get([u.indexId,this.uid]).next((c=>{o.push((function(f,m){const p=m?new Yn(m.sequenceNumber,new Qe(wn(m.readTime),new k(tt(m.documentKey)),m.largestBatchId)):Yn.empty(),A=f.fields.map((([D,N])=>new fn(ce.fromServerFormat(D),N)));return new Jn(f.indexId,f.collectionGroup,A,p)})(u,c))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=Hr(e),i=Ln(e);return this.$n(e).next((o=>s.J(ca,IDBKeyRange.bound(t,t)).next((u=>v.forEach(u,(c=>i.put(Ml(c.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return v.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),v.forEach(u,(c=>this.Wn(e,s,c).next((h=>{const f=this.Qn(i,c);return h.isEqual(f)?v.resolve():this.Gn(e,i,c,h,f)})))))))}))}zn(e,t,n,s){return Fn(e).put(s.En(this.uid,this.kn(n,t.key),t.key))}jn(e,t,n,s){return Fn(e).delete(s.Rn(this.uid,this.kn(n,t.key),t.key))}Wn(e,t,n){const s=Fn(e);let i=new re(bt);return s.ee({index:hd,range:IDBKeyRange.only([n.indexId,this.uid,Ii(this.kn(n,t))])},((o,u)=>{i=i.add(new hn(n.indexId,t,ql(u.arrayValue),ql(u.directionalValue)))})).next((()=>i))}Qn(e,t){let n=new re(bt);const s=this.Ln(t,e);if(s==null)return n;const i=aa(t);if(i!=null){const o=e.data.field(i.fieldPath);if(bs(o))for(const u of o.arrayValue.values||[])n=n.add(new hn(t.indexId,e.key,this.On(u),s))}else n=n.add(new hn(t.indexId,e.key,oi,s));return n}Gn(e,t,n,s,i){C($l,"Updating index entries for document '%s'",t.key);const o=[];return(function(c,h,f,m,p){const A=c.getIterator(),D=h.getIterator();let N=On(A),x=On(D);for(;N||x;){let B=!1,j=!1;if(N&&x){const q=f(N,x);q<0?j=!0:q>0&&(B=!0)}else N!=null?j=!0:B=!0;B?(m(x),x=On(D)):j?(p(N),N=On(A)):(N=On(A),x=On(D))}})(s,i,bt,(u=>{o.push(this.zn(e,t,n,u))}),(u=>{o.push(this.jn(e,t,n,u))})),v.waitFor(o)}$n(e){let t=1;return Ln(e).ee({index:ld,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,u)=>bt(o,u))).filter(((o,u,c)=>!u||bt(o,c[u-1])!==0));const s=[];s.push(e);for(const o of n){const u=bt(o,e),c=bt(o,t);if(u===0)s[0]=e.In();else if(u>0&&c<0)s.push(o),s.push(o.In());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Jn(s[o],s[o+1]))return[];const u=s[o].Rn(this.uid,oi,k.empty()),c=s[o+1].Rn(this.uid,oi,k.empty());i.push(IDBKeyRange.bound(u,c))}return i}Jn(e,t){return bt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Kl)}getMinOffset(e,t){return v.mapArray(this.Cn(t),(n=>this.vn(e,n).next((s=>s||F(44426))))).next(Kl)}}function Gl(r){return we(r,Es)}function Fn(r){return we(r,as)}function Hr(r){return we(r,Ua)}function Ln(r){return we(r,os)}function Kl(r){L(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Fa(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ef=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(r,e,t){const n=r.store(We),s=r.store(Xn),i=[],o=IDBKeyRange.only(t.batchId);let u=0;const c=n.ee({range:o},((f,m,p)=>(u++,p.delete())));i.push(c.next((()=>{L(u===1,47070,{batchId:t.batchId})})));const h=[];for(const f of t.mutations){const m=ad(e,f.key.path,t.batchId);i.push(s.delete(m)),h.push(f.key)}return v.waitFor(i).next((()=>h))}function Ni(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(Ef,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);class so{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Hn={}}static yt(e,t,n,s){L(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new so(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).ee({index:dn,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=zn(e),o=Rt(e);return o.add({}).next((u=>{L(typeof u=="number",49019);const c=new Ya(u,t,n,s),h=(function(A,D,N){const x=N.baseMutations.map((j=>Ps(A.gt,j))),B=N.mutations.map((j=>Ps(A.gt,j)));return{userId:D,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:B}})(this.serializer,this.userId,c),f=[];let m=new re(((p,A)=>z(p.canonicalString(),A.canonicalString())));for(const p of s){const A=ad(this.userId,p.key.path,u);m=m.add(p.key.path.popLast()),f.push(o.put(h)),f.push(i.put(A,p_))}return m.forEach((p=>{f.push(this.indexManager.addToCollectionParentIndex(e,p))})),e.addOnCommittedListener((()=>{this.Hn[u]=c.keys()})),v.waitFor(f).next((()=>c))}))}lookupMutationBatch(e,t){return Rt(e).get(t).next((n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),cn(this.serializer,n)):null))}Zn(e,t){return this.Hn[t]?v.resolve(this.Hn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Hn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Rt(e).ee({index:dn,range:s},((o,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{Xn:n}),i=cn(this.serializer,u)),c.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ot;return Rt(e).ee({index:dn,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ot],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).J(dn,t).next((n=>n.map((s=>cn(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=di(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return zn(e).ee({range:s},((o,u,c)=>{const[h,f,m]=o,p=tt(f);if(h===this.userId&&t.path.isEqual(p))return Rt(e).get(m).next((A=>{if(!A)throw F(61480,{Yn:o,batchId:m});L(A.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:A.userId,batchId:m}),i.push(cn(this.serializer,A))}));c.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(z);const s=[];return t.forEach((i=>{const o=di(this.userId,i.path),u=IDBKeyRange.lowerBound(o),c=zn(e).ee({range:u},((h,f,m)=>{const[p,A,D]=h,N=tt(A);p===this.userId&&i.path.isEqual(N)?n=n.add(D):m.done()}));s.push(c)})),v.waitFor(s).next((()=>this.er(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=di(this.userId,n),o=IDBKeyRange.lowerBound(i);let u=new re(z);return zn(e).ee({range:o},((c,h,f)=>{const[m,p,A]=c,D=tt(p);m===this.userId&&n.isPrefixOf(D)?D.length===s&&(u=u.add(A)):f.done()})).next((()=>this.er(e,u)))}er(e,t){const n=[],s=[];return t.forEach((i=>{s.push(Rt(e).get(i).next((o=>{if(o===null)throw F(35274,{batchId:i});L(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(cn(this.serializer,o))})))})),v.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return Tf(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.tr(t.batchId)})),v.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}tr(e){delete this.Hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return v.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return zn(e).ee({range:n},((i,o,u)=>{if(i[0]===this.userId){const c=tt(i[1]);s.push(c)}else u.done()})).next((()=>{L(s.length===0,56720,{nr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return wf(e,this.userId,t)}rr(e){return Af(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ot,lastStreamToken:""}))}}function wf(r,e,t){const n=di(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return zn(r).ee({range:i,Y:!0},((u,c,h)=>{const[f,m,p]=u;f===e&&m===s&&(o=!0),h.done()})).next((()=>o))}function Rt(r){return we(r,We)}function zn(r){return we(r,Xn)}function Af(r){return we(r,ys)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new ft(0)}static _r(){return new ft(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ar(e).next((t=>{const n=new ft(t.highestTargetId);return t.highestTargetId=n.next(),this.ur(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ar(e).next((t=>U.fromTimestamp(new ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ar(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.ar(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.ur(e,s))))}addTargetData(e,t){return this.cr(e,t).next((()=>this.ar(e).next((n=>(n.targetCount+=1,this.lr(t,n),this.ur(e,n))))))}updateTargetData(e,t){return this.cr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Bn(e).delete(t.targetId))).next((()=>this.ar(e))).next((n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.ur(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Bn(e).ee(((o,u)=>{const c=ns(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))})).next((()=>v.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Bn(e).ee(((n,s)=>{const i=ns(s);t(i)}))}ar(e){return Wl(e).get(Ri).next((t=>(L(t!==null,2888),t)))}ur(e,t){return Wl(e).put(Ri,t)}cr(e,t){return Bn(e).put(_f(this.serializer,t))}lr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ar(e).next((t=>t.targetCount))}getTargetData(e,t){const n=_n(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Bn(e).ee({range:s,index:cd},((o,u,c)=>{const h=ns(u);xs(t,h.target)&&(i=h,c.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=Vt(e);return t.forEach((o=>{const u=xe(o.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(e,n,o))})),v.waitFor(s)}removeMatchingKeys(e,t,n){const s=Vt(e);return v.forEach(t,(i=>{const o=xe(i.path);return v.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=Vt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Vt(e);let i=$();return s.ee({range:n,Y:!0},((o,u,c)=>{const h=tt(o[1]),f=new k(h);i=i.add(f)})).next((()=>i))}containsKey(e,t){const n=xe(t.path),s=IDBKeyRange.bound([n],[Yh(n)],!1,!0);let i=0;return Vt(e).ee({index:Ba,Y:!0,range:s},(([o,u],c,h)=>{o!==0&&(i++,h.done())})).next((()=>i>0))}Rt(e,t){return Bn(e).get(t).next((n=>n?ns(n):null))}}function Bn(r){return we(r,Zn)}function Wl(r){return we(r,mn)}function Vt(r){return we(r,er)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="LruGarbageCollector",vf=1048576;function Jl([r,e],[t,n]){const s=z(r,t);return s===0?z(e,n):s}class zy{constructor(e){this.hr=e,this.buffer=new re(Jl),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Jl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){C(Hl,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kt(t)?C(Hl,"Ignoring IndexedDB error during garbage collection: ",t):await Gt(t)}await this.Rr(3e5)}))}}class $y{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return v.resolve(Le.ce);const n=new zy(t);return this.Ar.forEachTarget(e,(s=>n.Ir(s.sequenceNumber))).next((()=>this.Ar.dr(e,(s=>n.Ir(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Ql)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ql):this.mr(e,t)))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,s,i,o,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(n=m,u=Date.now(),this.removeTargets(e,n,t)))).next((m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(h=Date.now(),Un()<=J.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(u-o)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function Rf(r,e){return new $y(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.db=e,this.garbageCollector=Rf(this,t)}Vr(e){const t=this.gr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}gr(e){let t=0;return this.dr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}dr(e,t){return this.pr(e,((n,s)=>t(s)))}addReference(e,t,n){return ai(e,n)}removeReference(e,t,n){return ai(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ai(e,t)}yr(e,t){return(function(s,i){let o=!1;return Af(s).te((u=>wf(s,u,i).next((c=>(c&&(o=!0),v.resolve(!c)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.pr(e,((o,u)=>{if(u<=t){const c=this.yr(e,o).next((h=>{if(!h)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,U.min()),Vt(e).delete((function(m){return[0,xe(m.path)]})(o)))))}));s.push(c)}})).next((()=>v.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ai(e,t)}pr(e,t){const n=Vt(e);let s,i=Le.ce;return n.ee({index:Ba},(([o,u],{path:c,sequenceNumber:h})=>{o===0?(i!==Le.ce&&t(new k(tt(s)),i),i=h,s=c):i=Le.ce})).next((()=>{i!==Le.ce&&t(new k(tt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ai(r,e){return Vt(r).put((function(n,s){return{targetId:0,path:xe(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.changes=new pt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?v.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return rn(e).put(n)}removeEntry(e,t,n){return rn(e).delete((function(i,o){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Di(o),u[u.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.wr(e,n))))}getEntry(e,t){let n=ue.newInvalidDocument(t);return rn(e).ee({index:fi,range:IDBKeyRange.only(Jr(t))},((s,i)=>{n=this.Sr(t,i)})).next((()=>n))}br(e,t){let n={size:0,document:ue.newInvalidDocument(t)};return rn(e).ee({index:fi,range:IDBKeyRange.only(Jr(t))},((s,i)=>{n={document:this.Sr(t,i),size:Ni(i)}})).next((()=>n))}getEntries(e,t){let n=Ue();return this.Dr(e,t,((s,i)=>{const o=this.Sr(s,i);n=n.insert(s,o)})).next((()=>n))}Cr(e,t){let n=Ue(),s=new oe(k.comparator);return this.Dr(e,t,((i,o)=>{const u=this.Sr(i,o);n=n.insert(i,u),s=s.insert(i,Ni(o))})).next((()=>({documents:n,vr:s})))}Dr(e,t,n){if(t.isEmpty())return v.resolve();let s=new re(Zl);t.forEach((c=>s=s.add(c)));const i=IDBKeyRange.bound(Jr(s.first()),Jr(s.last())),o=s.getIterator();let u=o.getNext();return rn(e).ee({index:fi,range:i},((c,h,f)=>{const m=k.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&Zl(u,m)<0;)n(u,null),u=o.getNext();u&&u.isEqual(m)&&(n(u,h),u=o.hasNext()?o.getNext():null),u?f.j(Jr(u)):f.done()})).next((()=>{for(;u;)n(u,null),u=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,u=[o.popLast().toArray(),o.lastSegment(),Di(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rn(e).J(IDBKeyRange.bound(u,c,!0)).next((h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Ue();for(const m of h){const p=this.Sr(k.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);p.isFoundDocument()&&(ks(t,p)||s.has(p.key))&&(f=f.insert(p.key,p))}return f}))}getAllFromCollectionGroup(e,t,n,s){let i=Ue();const o=Xl(t,n),u=Xl(t,Qe.max());return rn(e).ee({index:ud,range:IDBKeyRange.bound(o,u,!0)},((c,h,f)=>{const m=this.Sr(k.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(e){return new Qy(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Yl(e).get(ua).next((t=>(L(!!t,20021),t)))}wr(e,t){return Yl(e).put(ua,t)}Sr(e,t){if(t){const n=xy(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ue.newInvalidDocument(e)}}function Pf(r){return new Ky(r)}class Qy extends Sf{constructor(e,t){super(),this.Fr=e,this.trackRemovals=t,this.Mr=new pt((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new re(((i,o)=>z(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const u=this.Mr.get(i);if(t.push(this.Fr.removeEntry(e,i,u.readTime)),o.isValidDocument()){const c=kl(this.Fr.serializer,o);s=s.add(i.path.popLast());const h=Ni(c);n+=h-u.size,t.push(this.Fr.addEntry(e,i,c))}else if(n-=u.size,this.trackRemovals){const c=kl(this.Fr.serializer,o.convertToNoDocument(U.min()));t.push(this.Fr.addEntry(e,i,c))}})),s.forEach((i=>{t.push(this.Fr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Fr.updateMetadata(e,n)),v.waitFor(t)}getFromCache(e,t){return this.Fr.br(e,t).next((n=>(this.Mr.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Fr.Cr(e,t).next((({documents:n,vr:s})=>(s.forEach(((i,o)=>{this.Mr.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function Yl(r){return we(r,Is)}function rn(r){return we(r,bi)}function Jr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Xl(r,e){const t=e.documentKey.path.toArray();return[r,Di(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Zl(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=z(t[i],n[i]),s)return s;return s=z(t.length,n.length),s||(s=z(t[t.length-2],n[n.length-2]),s||z(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&ls(n.mutation,s,Be.empty(),ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,$()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=$()){const s=nt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=es();return i.forEach(((u,c)=>{o=o.insert(u,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=nt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,$())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,u)=>{t.set(o,u)}))}))}computeViews(e,t,n,s){let i=Ue();const o=cs(),u=(function(){return cs()})();return t.forEach(((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof _t)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ls(f.mutation,h,f.mutation.getFieldMask(),ee.now())):o.set(h.key,Be.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>u.set(h,new Wy(f,o.get(h)??null)))),u)))}recalculateAndSaveOverlays(e,t){const n=cs();let s=new oe(((o,u)=>o-u)),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const u of o)u.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Be.empty();f=u.applyToLocalView(h,f),n.set(c,f);const m=(s.get(u.batchId)||$()).add(c);s=s.insert(u.batchId,m)}))})).next((()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,m=$d();f.forEach((p=>{if(!i.has(p)){const A=Hd(t.get(p),n.get(p));A!==null&&m.set(p,A),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return v.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return ey(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ka(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):v.resolve(nt());let u=Hn,c=i;return o.next((h=>v.forEach(h,((f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(f)?v.resolve():this.remoteDocumentCache.getEntry(e,f).next((p=>{c=c.insert(f,p)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,$()))).next((f=>({batchId:u,changes:zd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new k(t)).next((n=>{let s=es();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=es();return this.indexManager.getCollectionParents(e,i).next((u=>v.forEach(u,(c=>{const h=(function(m,p){return new gt(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next((f=>{f.forEach(((m,p)=>{o=o.insert(m,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ue.newInvalidDocument(f)))}));let u=es();return o.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&ls(f.mutation,h,Be.empty(),ee.now()),ks(t,h)&&(u=u.insert(c,h))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return v.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:pe(s.createTime)}})(t)),v.resolve()}getNamedQuery(e,t){return v.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,(function(s){return{name:s.name,query:no(s.bundledQuery),readTime:pe(s.readTime)}})(t)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.overlays=new oe(k.comparator),this.Br=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const n=nt();return v.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.wt(e,t,i)})),v.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Br.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Br.delete(n)),v.resolve()}getOverlaysForCollection(e,t,n){const s=nt(),i=t.length+1,o=new k(t.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return v.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new oe(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=nt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=nt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>u.set(h,f))),!(u.size()>=s)););return v.resolve(u)}wt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Br.get(s.largestBatchId).delete(n.key);this.Br.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Za(t,n));let i=this.Br.get(t);i===void 0&&(i=$(),this.Br.set(t,i)),this.Br.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(e){return v.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,v.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.Lr=new re(ve.kr),this.qr=new re(ve.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const n=new ve(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.$r(new ve(e,t))}Wr(e,t){e.forEach((n=>this.removeReference(n,t)))}Qr(e){const t=new k(new K([])),n=new ve(t,e),s=new ve(t,e+1),i=[];return this.qr.forEachInRange([n,s],(o=>{this.$r(o),i.push(o.key)})),i}Gr(){this.Lr.forEach((e=>this.$r(e)))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new k(new K([])),n=new ve(t,e),s=new ve(t,e+1);let i=$();return this.qr.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ve(e,0),n=this.Lr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ve{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return k.comparator(e.key,t.key)||z(e.jr,t.jr)}static Kr(e,t){return z(e.jr,t.jr)||k.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new re(ve.kr)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ya(i,t,n,s);this.mutationQueue.push(o);for(const u of s)this.Jr=this.Jr.add(new ve(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,t){return v.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Zr(n),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?Ot:this.Xn-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([n,s],(o=>{const u=this.Hr(o.jr);i.push(u)})),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(z);return t.forEach((s=>{const i=new ve(s,0),o=new ve(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(u=>{n=n.add(u.jr)}))})),v.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;k.isDocumentKey(i)||(i=i.child(""));const o=new ve(new k(i),0);let u=new re(z);return this.Jr.forEachWhile((c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.jr)),!0)}),o),v.resolve(this.Xr(u))}Xr(e){const t=[];return e.forEach((n=>{const s=this.Hr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){L(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Jr;return v.forEach(t.mutations,(s=>{const i=new ve(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=n}))}tr(e){}containsKey(e,t){const n=new ve(t,0),s=this.Jr.firstAfterOrEqual(n);return v.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.ei=e,this.docs=(function(){return new oe(k.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return v.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(t))}getEntries(e,t){let n=Ue();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ue.newInvalidDocument(s))})),v.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ue();const o=t.path,u=new k(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Fa(nd(f),n)<=0||(s.has(f.key)||ks(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(e,t,n,s){F(9500)}ti(e,t){return v.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new eI(this)}getSize(e){return v.resolve(this.size)}}class eI extends Sf{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(n)})),v.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.persistence=e,this.ni=new pt((t=>_n(t)),xs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ri=0,this.ii=new su,this.targetCount=0,this.si=ft.sr()}forEachTarget(e,t){return this.ni.forEach(((n,s)=>t(s))),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),v.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new ft(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.cr(t),v.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ni.forEach(((o,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.ni.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)})),v.waitFor(i).next((()=>s))}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const n=this.ni.get(t)||null;return v.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),v.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),v.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),v.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ii.zr(t);return v.resolve(n)}containsKey(e,t){return v.resolve(this.ii.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.oi={},this.overlays={},this._i=new Le(0),this.ai=!1,this.ai=!0,this.ui=new Yy,this.referenceDelegate=e(this),this.ci=new tI(this),this.indexManager=new Uy,this.remoteDocumentCache=(function(s){return new Zy(s)})((n=>this.referenceDelegate.li(n))),this.serializer=new pf(t),this.hi=new Hy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new Xy(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);const s=new nI(this._i.next());return this.referenceDelegate.Pi(),n(s).next((i=>this.referenceDelegate.Ti(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,t){return v.or(Object.values(this.oi).map((n=>()=>n.containsKey(e,t))))}}class nI extends sd{constructor(e){super(),this.currentSequenceNumber=e}}class io{constructor(e){this.persistence=e,this.Ei=new su,this.Ri=null}static Ai(e){return new io(e)}get Vi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),v.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),v.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach((s=>this.Vi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.Vi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Vi,(n=>{const s=k.fromPath(n);return this.di(e,s).next((i=>{i||t.removeEntry(s,U.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.di(e,t).next((n=>{n?this.Vi.delete(t.toString()):this.Vi.add(t.toString())}))}li(e){return 0}di(e,t){return v.or([()=>v.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ki{constructor(e,t){this.persistence=e,this.mi=new pt((n=>xe(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Rf(this,t)}static Ai(e,t){return new ki(e,t)}Pi(){}Ti(e){return v.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}gr(e){let t=0;return this.dr(e,(n=>{t++})).next((()=>t))}dr(e,t){return v.forEach(this.mi,((n,s)=>this.yr(e,n,s).next((i=>i?v.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ti(e,(o=>this.yr(e,o,t).next((u=>{u||(n++,i.removeEntry(o,U.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),v.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),v.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),v.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),v.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gi(e.data.value)),t}yr(e,t,n){return v.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.mi.get(t);return v.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.serializer=e}k(e,t,n,s){const i=new zi("createOrUpgrade",t);n<1&&s>=1&&((function(c){c.createObjectStore(Ds)})(e),(function(c){c.createObjectStore(ys,{keyPath:g_}),c.createObjectStore(We,{keyPath:ll,autoIncrement:!0}).createIndex(dn,hl,{unique:!0}),c.createObjectStore(Xn)})(e),eh(e),(function(c){c.createObjectStore(an)})(e));let o=v.resolve();return n<3&&s>=3&&(n!==0&&((function(c){c.deleteObjectStore(er),c.deleteObjectStore(Zn),c.deleteObjectStore(mn)})(e),eh(e)),o=o.next((()=>(function(c){const h=c.store(mn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return h.put(Ri,f)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(c,h){return h.store(We).J().next((m=>{c.deleteObjectStore(We),c.createObjectStore(We,{keyPath:ll,autoIncrement:!0}).createIndex(dn,hl,{unique:!0});const p=h.store(We),A=m.map((D=>p.put(D)));return v.waitFor(A)}))})(e,i)))),o=o.next((()=>{(function(c){c.createObjectStore(tr,{keyPath:v_})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.fi(i)))),n<6&&s>=6&&(o=o.next((()=>((function(c){c.createObjectStore(Is)})(e),this.gi(i))))),n<7&&s>=7&&(o=o.next((()=>this.pi(i)))),n<8&&s>=8&&(o=o.next((()=>this.yi(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.wi(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(c){c.createObjectStore($i,{keyPath:b_})})(e),(function(c){c.createObjectStore(Gi,{keyPath:R_})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(c){const h=c.createObjectStore(Ki,{keyPath:N_});h.createIndex(la,k_,{unique:!1}),h.createIndex(dd,O_,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(c){const h=c.createObjectStore(bi,{keyPath:__});h.createIndex(fi,y_),h.createIndex(ud,I_)})(e))).next((()=>this.Si(e,i))).next((()=>e.deleteObjectStore(an)))),n<14&&s>=14&&(o=o.next((()=>this.bi(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(c){c.createObjectStore(Ua,{keyPath:S_,autoIncrement:!0}).createIndex(ca,P_,{unique:!1}),c.createObjectStore(os,{keyPath:V_}).createIndex(ld,C_,{unique:!1}),c.createObjectStore(as,{keyPath:D_}).createIndex(hd,x_,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(os).clear()})).next((()=>{t.objectStore(as).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(c){c.createObjectStore(qa,{keyPath:M_})})(e)}))),n<18&&s>=18&&Nh()&&(o=o.next((()=>{t.objectStore(os).clear()})).next((()=>{t.objectStore(as).clear()}))),o}gi(e){let t=0;return e.store(an).ee(((n,s)=>{t+=Ni(s)})).next((()=>{const n={byteSize:t};return e.store(Is).put(ua,n)}))}fi(e){const t=e.store(ys),n=e.store(We);return t.J().next((s=>v.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Ot],[i.userId,i.lastAcknowledgedBatchId]);return n.J(dn,o).next((u=>v.forEach(u,(c=>{L(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=cn(this.serializer,c);return Tf(e,i.userId,h).next((()=>{}))}))))}))))}pi(e){const t=e.store(er),n=e.store(an);return e.store(mn).get(Ri).next((s=>{const i=[];return n.ee(((o,u)=>{const c=new K(o),h=(function(m){return[0,xe(m)]})(c);i.push(t.get(h).next((f=>f?v.resolve():(m=>t.put({targetId:0,path:xe(m),sequenceNumber:s.highestListenSequenceNumber}))(c))))})).next((()=>v.waitFor(i)))}))}yi(e,t){e.createObjectStore(Es,{keyPath:A_});const n=t.store(Es),s=new ru,i=o=>{if(s.add(o)){const u=o.lastSegment(),c=o.popLast();return n.put({collectionId:u,parent:xe(c)})}};return t.store(an).ee({Y:!0},((o,u)=>{const c=new K(o);return i(c.popLast())})).next((()=>t.store(Xn).ee({Y:!0},(([o,u,c],h)=>{const f=tt(u);return i(f.popLast())}))))}wi(e){const t=e.store(Zn);return t.ee(((n,s)=>{const i=ns(s),o=_f(this.serializer,i);return t.put(o)}))}Si(e,t){const n=t.store(an),s=[];return n.ee(((i,o)=>{const u=t.store(bi),c=(function(m){return m.document?new k(K.fromString(m.document.name).popFirst(5)):m.noDocument?k.fromSegments(m.noDocument.path):m.unknownDocument?k.fromSegments(m.unknownDocument.path):F(36783)})(o).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(u.put(h))})).next((()=>v.waitFor(s)))}bi(e,t){const n=t.store(We),s=Pf(this.serializer),i=new iu(io.Ai,this.serializer.gt);return n.J().next((o=>{const u=new Map;return o.forEach((c=>{let h=u.get(c.userId)??$();cn(this.serializer,c).keys().forEach((f=>h=h.add(f))),u.set(c.userId,h)})),v.forEach(u,((c,h)=>{const f=new be(h),m=ro.yt(this.serializer,f),p=i.getIndexManager(f),A=so.yt(f,this.serializer,p,i.referenceDelegate);return new Vf(s,A,m,p).recalculateAndSaveOverlaysForDocumentKeys(new ha(t,Le.ce),c).next()}))}))}}function eh(r){r.createObjectStore(er,{keyPath:T_}).createIndex(Ba,w_,{unique:!0}),r.createObjectStore(Zn,{keyPath:"targetId"}).createIndex(cd,E_,{unique:!0}),r.createObjectStore(mn)}const St="IndexedDbPersistence",Ko=18e5,Qo=5e3,Wo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Cf="main";class ou{constructor(e,t,n,s,i,o,u,c,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Di=i,this.window=o,this.document=u,this.Ci=h,this.Fi=f,this.Mi=m,this._i=null,this.ai=!1,this.isPrimary=!1,this.networkEnabled=!0,this.xi=null,this.inForeground=!1,this.Oi=null,this.Ni=null,this.Bi=Number.NEGATIVE_INFINITY,this.Li=p=>Promise.resolve(),!ou.v())throw new V(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gy(this,s),this.ki=t+Cf,this.serializer=new pf(c),this.qi=new st(this.ki,this.Mi,new rI(this.serializer)),this.ui=new ky,this.ci=new jy(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Pf(this.serializer),this.hi=new Ny,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&ge(St,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,Wo);return this.$i(),this.Wi(),this.Qi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ci.getHighestSequenceNumber(e)))})).then((e=>{this._i=new Le(e,this.Ci)})).then((()=>{this.ai=!0})).catch((e=>(this.qi&&this.qi.close(),Promise.reject(e))))}Gi(e){return this.Li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.K((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Di.enqueueAndForget((async()=>{this.started&&await this.Ui()})))}Ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ui(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.zi(e).next((t=>{t||(this.isPrimary=!1,this.Di.enqueueRetryable((()=>this.Li(!1))))}))})).next((()=>this.ji(e))).next((t=>this.isPrimary&&!t?this.Ji(e).next((()=>!1)):!!t&&this.Hi(e).next((()=>!0)))))).catch((e=>{if(Kt(e))return C(St,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C(St,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Di.enqueueRetryable((()=>this.Li(e))),this.isPrimary=e}))}zi(e){return Yr(e).get(kn).next((t=>v.resolve(this.Zi(t))))}Xi(e){return ui(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.es(this.Bi,Ko)){this.Bi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=we(t,tr);return n.J().next((s=>{const i=this.ts(s,Ko),o=s.filter((u=>i.indexOf(u)===-1));return v.forEach(o,(u=>n.delete(u.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this.ns(t.clientId))}}Qi(){this.Ni=this.Di.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ui().then((()=>this.Yi())).then((()=>this.Qi()))))}Zi(e){return!!e&&e.ownerId===this.clientId}ji(e){return this.Fi?v.resolve(!0):Yr(e).get(kn).next((t=>{if(t!==null&&this.es(t.leaseTimestampMs,Qo)&&!this.rs(t.ownerId)){if(this.Zi(t)&&this.networkEnabled)return!0;if(!this.Zi(t)){if(!t.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,Wo);return!1}}return!(!this.networkEnabled||!this.inForeground)||ui(e).J().next((n=>this.ts(n,Qo).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||o&&u)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&C(St,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ai=!1,this.ss(),this.Ni&&(this.Ni.cancel(),this.Ni=null),this._s(),this.us(),await this.qi.runTransaction("shutdown","readwrite",[Ds,tr],(e=>{const t=new ha(e,Le.ce);return this.Ji(t).next((()=>this.Xi(t)))})),this.qi.close(),this.cs()}ts(e,t){return e.filter((n=>this.es(n.updateTimeMs,t)&&!this.rs(n.clientId)))}ls(){return this.runTransaction("getActiveClients","readonly",(e=>ui(e).J().next((t=>this.ts(t,Ko).map((n=>n.clientId))))))}get started(){return this.ai}getGlobalsCache(){return this.ui}getMutationQueue(e,t){return so.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qy(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return ro.yt(this.serializer,e)}getBundleCache(){return this.hi}runTransaction(e,t,n){C(St,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(c){return c===18?B_:c===17?pd:c===16?L_:c===15?ja:c===14?gd:c===13?md:c===12?F_:c===11?fd:void F(60245)})(this.Mi);let o;return this.qi.runTransaction(e,s,i,(u=>(o=new ha(u,this._i?this._i.next():Le.ce),t==="readwrite-primary"?this.zi(o).next((c=>!!c||this.ji(o))).next((c=>{if(!c)throw ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Di.enqueueRetryable((()=>this.Li(!1))),new V(R.FAILED_PRECONDITION,rd);return n(o)})).next((c=>this.Hi(o).next((()=>c)))):this.hs(o).next((()=>n(o)))))).then((u=>(o.raiseOnCommittedEvent(),u)))}hs(e){return Yr(e).get(kn).next((t=>{if(t!==null&&this.es(t.leaseTimestampMs,Qo)&&!this.rs(t.ownerId)&&!this.Zi(t)&&!(this.Fi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(R.FAILED_PRECONDITION,Wo)}))}Hi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yr(e).put(kn,t)}static v(){return st.v()}Ji(e){const t=Yr(e);return t.get(kn).next((n=>this.Zi(n)?(C(St,"Releasing primary lease."),t.delete(kn)):v.resolve()))}es(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ge(`Detected an update time that is in the future: ${e} > ${n}`),!1))}$i(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Oi=()=>{this.Di.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ui())))},this.document.addEventListener("visibilitychange",this.Oi),this.inForeground=this.document.visibilityState==="visible")}_s(){this.Oi&&(this.document.removeEventListener("visibilitychange",this.Oi),this.Oi=null)}Wi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.xi=()=>{this.ss();const t=/(?:Version|Mobile)\/1[456]/;xh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Di.enterRestrictedMode(!0),this.Di.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.xi))}us(){this.xi&&(this.window.removeEventListener("pagehide",this.xi),this.xi=null)}rs(e){var t;try{const n=((t=this.Ki)==null?void 0:t.getItem(this.ns(e)))!==null;return C(St,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ge(St,"Failed to get zombied client id.",n),!1}}ss(){if(this.Ki)try{this.Ki.setItem(this.ns(this.clientId),String(Date.now()))}catch(e){ge("Failed to set zombie client id.",e)}}cs(){if(this.Ki)try{this.Ki.removeItem(this.ns(this.clientId))}catch{}}ns(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Yr(r){return we(r,Ds)}function ui(r){return we(r,tr)}function au(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=s}static Is(e,t){let n=$(),s=$();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uu(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=(function(){return xh()?8:id(Qn())>0?6:4})()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.fs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.gs(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new sI;return this.ps(e,t,o).next((u=>{if(i.result=u,this.Rs)return this.ys(e,t,o,u.size)}))})).next((()=>i.result))}ys(e,t,n,s){return n.documentReadCount<this.As?(Un()<=J.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),v.resolve()):(Un()<=J.DEBUG&&C("QueryEngine","Query:",qn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Vs*s?(Un()<=J.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ne(t))):v.resolve())}fs(e,t){if(vl(t))return v.resolve(null);let n=Ne(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Vi(t,null,"F"),n=Ne(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=$(...i);return this.ds.getDocuments(e,o).next((u=>this.indexManager.getMinOffset(e,n).next((c=>{const h=this.ws(t,u);return this.Ss(t,h,o,c.readTime)?this.fs(e,Vi(t,null,"F")):this.bs(e,h,t,c)}))))})))))}gs(e,t,n,s){return vl(t)||s.isEqual(U.min())?v.resolve(null):this.ds.getDocuments(e,n).next((i=>{const o=this.ws(t,i);return this.Ss(t,o,n,s)?v.resolve(null):(Un()<=J.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qn(t)),this.bs(e,o,t,td(s,Hn)).next((u=>u)))}))}ws(e,t){let n=new re(qd(e));return t.forEach(((s,i)=>{ks(e,i)&&(n=n.add(i))})),n}Ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ps(e,t,n){return Un()<=J.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",qn(t)),this.ds.getDocumentsMatchingQuery(e,t,Qe.min(),n)}bs(e,t,n,s){return this.ds.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="LocalStore",iI=3e8;class oI{constructor(e,t,n,s){this.persistence=e,this.Ds=t,this.serializer=s,this.Cs=new oe(z),this.vs=new pt((i=>_n(i)),xs),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vf(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Cs)))}}function xf(r,e,t,n){return new oI(r,e,t,n)}async function Nf(r,e){const t=O(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.xs(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],u=[];let c=$();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next((h=>({Os:h,removedBatchIds:o,addedBatchIds:u})))}))}))}function aI(r,e){const t=O(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Ms.newChangeBuffer({trackRemovals:!0});return(function(u,c,h,f){const m=h.batch,p=m.keys();let A=v.resolve();return p.forEach((D=>{A=A.next((()=>f.getEntry(c,D))).next((N=>{const x=h.docVersions.get(D);L(x!==null,48541),N.version.compareTo(x)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))}))})),A.next((()=>u.mutationQueue.removeMutationBatch(c,m)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let c=$();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function kf(r){const e=O(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ci.getLastRemoteSnapshotVersion(t)))}function uI(r,e){const t=O(r),n=e.snapshotVersion;let s=t.Cs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ms.newChangeBuffer({trackRemovals:!0});s=t.Cs;const u=[];e.targetChanges.forEach(((f,m)=>{const p=s.get(m);if(!p)return;u.push(t.ci.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.ci.addMatchingKeys(i,f.addedDocuments,m))));let A=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(fe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,n)),s=s.insert(m,A),(function(N,x,B){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=iI?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(p,A,f)&&u.push(t.ci.updateTargetData(i,A))}));let c=Ue(),h=$();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),u.push(Of(i,o,e.documentUpdates).next((f=>{c=f.Ns,h=f.Bs}))),!n.isEqual(U.min())){const f=t.ci.getLastRemoteSnapshotVersion(i).next((m=>t.ci.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(f)}return v.waitFor(u).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(t.Cs=s,i)))}function Of(r,e,t){let n=$(),s=$();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=Ue();return t.forEach(((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):C(cu,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)})),{Ns:o,Bs:s}}))}function cI(r,e){const t=O(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Ot),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function cr(r,e){const t=O(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.ci.getTargetData(n,e).next((i=>i?(s=i,v.resolve(s)):t.ci.allocateTargetId(n).next((o=>(s=new rt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.ci.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Cs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Cs=t.Cs.insert(n.targetId,n),t.vs.set(e,n.targetId)),n}))}async function lr(r,e,t){const n=O(r),s=n.Cs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Kt(o))throw o;C(cu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Cs=n.Cs.remove(e),n.vs.delete(s.target)}function Oi(r,e,t){const n=O(r);let s=U.min(),i=$();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,h,f){const m=O(c),p=m.vs.get(f);return p!==void 0?v.resolve(m.Cs.get(p)):m.ci.getTargetData(h,f)})(n,o,Ne(e)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.ci.getMatchingKeysForTargetId(o,u.targetId).next((c=>{i=c}))})).next((()=>n.Ds.getDocumentsMatchingQuery(o,e,t?s:U.min(),t?i:$()))).next((u=>(Lf(n,Ud(e),u),{documents:u,Ls:i})))))}function Mf(r,e){const t=O(r),n=O(t.ci),s=t.Cs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>n.Rt(i,e).next((o=>o?o.target:null))))}function Ff(r,e){const t=O(r),n=t.Fs.get(e)||U.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Ms.getAllFromCollectionGroup(s,e,td(n,Hn),Number.MAX_SAFE_INTEGER))).then((s=>(Lf(t,e,s),s)))}function Lf(r,e,t){let n=r.Fs.get(e)||U.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Fs.set(e,n)}async function lI(r,e,t,n){const s=O(r);let i=$(),o=Ue();for(const h of t){const f=e.ks(h.metadata.name);h.document&&(i=i.add(f));const m=e.qs(h);m.setReadTime(e.Ks(h.metadata.readTime)),o=o.insert(f,m)}const u=s.Ms.newChangeBuffer({trackRemovals:!0}),c=await cr(s,(function(f){return Ne(yr(K.fromString(`__bundle__/docs/${f}`)))})(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(h=>Of(h,u,o).next((f=>(u.apply(h),f))).next((f=>s.ci.removeMatchingKeysForTargetId(h,c.targetId).next((()=>s.ci.addMatchingKeys(h,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(h,f.Ns,f.Bs))).next((()=>f.Ns))))))}async function hI(r,e,t=$()){const n=await cr(r,Ne(no(e.bundledQuery))),s=O(r);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=pe(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.hi.saveNamedQuery(i,e);const u=n.withResumeToken(fe.EMPTY_BYTE_STRING,o);return s.Cs=s.Cs.insert(u.targetId,u),s.ci.updateTargetData(i,u).next((()=>s.ci.removeMatchingKeysForTargetId(i,n.targetId))).next((()=>s.ci.addMatchingKeys(i,t,n.targetId))).next((()=>s.hi.saveNamedQuery(i,e)))}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="firestore_clients";function th(r,e){return`${Bf}_${r}_${e}`}const Uf="firestore_mutations";function nh(r,e,t){let n=`${Uf}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const qf="firestore_targets";function Ho(r,e){return`${qf}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="SharedClientState";class Mi{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Us(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new V(s.error.code,s.error.message))),o?new Mi(e,t,s.state,i):(ge(et,`Failed to parse mutation state for ID '${t}': ${n}`),null)}$s(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ds{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Us(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new V(n.error.code,n.error.message))),i?new ds(e,n.state,s):(ge(et,`Failed to parse target state for ID '${e}': ${t}`),null)}$s(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Us(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Qa();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=od(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Fi(e,i):(ge(et,`Failed to parse client data for instance '${e}': ${t}`),null)}}class lu{constructor(e,t){this.clientId=e,this.onlineState=t}static Us(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new lu(t.clientId,t.onlineState):(ge(et,`Failed to parse online state: ${e}`),null)}}class va{constructor(){this.activeTargetIds=Qa()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jo{constructor(e,t,n,s,i){this.window=e,this.Di=t,this.persistenceKey=n,this.Gs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.zs=this.js.bind(this),this.Js=new oe(z),this.started=!1,this.Hs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Zs=th(this.persistenceKey,this.Gs),this.Xs=(function(c){return`firestore_sequence_number_${c}`})(this.persistenceKey),this.Js=this.Js.insert(this.Gs,new va),this.Ys=new RegExp(`^${Bf}_${o}_([^_]*)$`),this.eo=new RegExp(`^${Uf}_${o}_(\\d+)(?:_(.*))?$`),this.no=new RegExp(`^${qf}_${o}_(\\d+)$`),this.ro=(function(c){return`firestore_online_state_${c}`})(this.persistenceKey),this.io=(function(c){return`firestore_bundle_loaded_v2_${c}`})(this.persistenceKey),this.window.addEventListener("storage",this.zs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ls();for(const n of e){if(n===this.Gs)continue;const s=this.getItem(th(this.persistenceKey,n));if(s){const i=Fi.Us(n,s);i&&(this.Js=this.Js.insert(i.clientId,i))}}this.so();const t=this.storage.getItem(this.ro);if(t){const n=this.oo(t);n&&this._o(n)}for(const n of this.Hs)this.js(n);this.Hs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Xs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ao(this.Js)}isActiveQueryTarget(e){let t=!1;return this.Js.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.uo(e,"pending")}updateMutationState(e,t,n){this.uo(e,t,n),this.co(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ho(this.persistenceKey,e));if(s){const i=ds.Us(e,s);i&&(n=i.state)}}return t&&this.lo.Ws(e),this.so(),n}removeLocalQueryTarget(e){this.lo.Qs(e),this.so()}isLocalQueryTarget(e){return this.lo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ho(this.persistenceKey,e))}updateQueryState(e,t,n){this.ho(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.co(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.Po(e)}notifyBundleLoaded(e){this.To(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.zs),this.removeItem(this.Zs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return C(et,"READ",e,t),t}setItem(e,t){C(et,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){C(et,"REMOVE",e),this.storage.removeItem(e)}js(e){const t=e;if(t.storageArea===this.storage){if(C(et,"EVENT",t.key,t.newValue),t.key===this.Zs)return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Di.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const n=this.Io(t.key);return this.Eo(n,null)}{const n=this.Ro(t.key,t.newValue);if(n)return this.Eo(n.clientId,n)}}else if(this.eo.test(t.key)){if(t.newValue!==null){const n=this.Ao(t.key,t.newValue);if(n)return this.Vo(n)}}else if(this.no.test(t.key)){if(t.newValue!==null){const n=this.mo(t.key,t.newValue);if(n)return this.fo(n)}}else if(t.key===this.ro){if(t.newValue!==null){const n=this.oo(t.newValue);if(n)return this._o(n)}}else if(t.key===this.Xs){const n=(function(i){let o=Le.ce;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{po:i}),o=u}catch(u){ge(et,"Failed to read sequence number from WebStorage",u)}return o})(t.newValue);n!==Le.ce&&this.sequenceNumberHandler(n)}else if(t.key===this.io){const n=this.yo(t.newValue);await Promise.all(n.map((s=>this.syncEngine.wo(s))))}}}else this.Hs.push(t)}))}}get lo(){return this.Js.get(this.Gs)}so(){this.setItem(this.Zs,this.lo.$s())}uo(e,t,n){const s=new Mi(this.currentUser,e,t,n),i=nh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.$s())}co(e){const t=nh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Po(e){const t={clientId:this.Gs,onlineState:e};this.storage.setItem(this.ro,JSON.stringify(t))}ho(e,t,n){const s=Ho(this.persistenceKey,e),i=new ds(e,t,n);this.setItem(s,i.$s())}To(e){const t=JSON.stringify(Array.from(e));this.setItem(this.io,t)}Io(e){const t=this.Ys.exec(e);return t?t[1]:null}Ro(e,t){const n=this.Io(e);return Fi.Us(n,t)}Ao(e,t){const n=this.eo.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Mi.Us(new be(i),s,t)}mo(e,t){const n=this.no.exec(e),s=Number(n[1]);return ds.Us(s,t)}oo(e){return lu.Us(e)}yo(e){return JSON.parse(e)}async Vo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.So(e.batchId,e.state,e.error);C(et,`Ignoring mutation for non-active user ${e.user.uid}`)}fo(e){return this.syncEngine.bo(e.targetId,e.state,e.error)}Eo(e,t){const n=t?this.Js.insert(e,t):this.Js.remove(e),s=this.ao(this.Js),i=this.ao(n),o=[],u=[];return i.forEach((c=>{s.has(c)||o.push(c)})),s.forEach((c=>{i.has(c)||u.push(c)})),this.syncEngine.Do(o,u).then((()=>{this.Js=n}))}_o(e){this.Js.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ao(e){let t=Qa();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class jf{constructor(){this.Co=new va,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new va,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{Fo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="ConnectivityMonitor";class sh{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){C(rh,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){C(rh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci=null;function ba(){return ci===null?ci=(function(){return 268435456+Math.round(2147483648*Math.random())})():ci++,"0x"+ci.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="RestConnection",fI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class mI{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Uo=this.databaseId.database===ws?`project_id=${n}`:`project_id=${n}&database_id=${s}`}$o(e,t,n,s,i){const o=ba(),u=this.Wo(e,t.toUriEncodedString());C(Yo,`Sending RPC '${e}' ${o}:`,u,n);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(c,s,i);const{host:h}=new URL(u),f=xa(h);return this.Go(e,u,c,n,f).then((m=>(C(Yo,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw ze(Yo,`RPC '${e}' ${o} failed with error: `,m,"url: ",u,"request:",n),m}))}zo(e,t,n,s,i,o){return this.$o(e,t,n,s,i)}Qo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_r})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}Wo(e,t){const n=fI[e];let s=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection",Xr=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Gn extends mI{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Gn.u_){const e=Kh();Xr(e,Gh.STAT_EVENT,(t=>{t.stat===ra.PROXY?C(Ce,"STAT_EVENT: detected buffering proxy"):t.stat===ra.NOPROXY&&C(Ce,"STAT_EVENT: detected no buffering proxy")})),Gn.u_=!0}}Go(e,t,n,s,i){const o=ba();return new Promise(((u,c)=>{const h=new zh;h.setWithCredentials(!0),h.listenOnce($h.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case hi.NO_ERROR:const m=h.getResponseJson();C(Ce,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),u(m);break;case hi.TIMEOUT:C(Ce,`RPC '${e}' ${o} timed out`),c(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case hi.HTTP_ERROR:const p=h.getStatus();if(C(Ce,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const D=A==null?void 0:A.error;if(D&&D.status&&D.message){const N=(function(B){const j=B.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(j)>=0?j:R.UNKNOWN})(D.status);c(new V(N,D.message))}else c(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new V(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{C(Ce,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);C(Ce,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,n,15)}))}P_(e,t,n){const s=ba(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Qo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const h=i.join("");C(Ce,`Creating RPC '${e}' stream ${s}: ${h}`,u);const f=o.createWebChannel(h,u);this.T_(f);let m=!1,p=!1;const A=new gI({jo:D=>{p?C(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(C(Ce,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),C(Ce,`RPC '${e}' stream ${s} sending:`,D),f.send(D))},Jo:()=>f.close()});return Xr(f,Zr.EventType.OPEN,(()=>{p||(C(Ce,`RPC '${e}' stream ${s} transport opened.`),A.r_())})),Xr(f,Zr.EventType.CLOSE,(()=>{p||(p=!0,C(Ce,`RPC '${e}' stream ${s} transport closed`),A.s_(),this.I_(f))})),Xr(f,Zr.EventType.ERROR,(D=>{p||(p=!0,ze(Ce,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),A.s_(new V(R.UNAVAILABLE,"The operation could not be completed")))})),Xr(f,Zr.EventType.MESSAGE,(D=>{var N;if(!p){const x=D.data[0];L(!!x,16349);const B=x,j=(B==null?void 0:B.error)||((N=B[0])==null?void 0:N.error);if(j){C(Ce,`RPC '${e}' stream ${s} received error:`,j);const q=j.status;let Z=(function(E){const _=_e[E];if(_!==void 0)return Zd(_)})(q),Y=j.message;q==="NOT_FOUND"&&Y.includes("database")&&Y.includes("does not exist")&&Y.includes(this.databaseId.database)&&ze(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Z===void 0&&(Z=R.INTERNAL,Y="Unknown error status: "+q+" with message "+j.message),p=!0,A.s_(new V(Z,Y)),f.close()}else C(Ce,`RPC '${e}' stream ${s} received:`,x),A.o_(x)}})),Gn.a_(),setTimeout((()=>{A.i_()}),0),A}terminate(){this.__.forEach((e=>e.close())),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter((t=>t===e))}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Qh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(r){return new Gn(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){return typeof window<"u"?window:null}function Ei(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(r){return new wy(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.u_=!1;class hu{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=s,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-n);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="PersistentStream";class $f{constructor(e,t,n,s,i,o,u,c){this.Di=e,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new hu(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(ge(t.toString()),ge("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===t&&this.Q_(n,s)}),(n=>{e((()=>{const s=new V(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}Q_(e,t){const n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho((()=>{n((()=>this.listener.Ho()))})),this.stream.Xo((()=>{n((()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.Xo())))})),this.stream.e_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.v_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return C(ih,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget((()=>this.b_===e?t():(C(ih,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _I extends $f{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=by(this.serializer,e),n=(function(i){if(!("targetChange"in i))return U.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?pe(o.readTime):U.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Ia(this.serializer),t.addTarget=(function(i,o){let u;const c=o.target;if(u=Si(c)?{documents:cf(i,c)}:{query:to(i,c).dt},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=rf(i,o.resumeToken);const h=_a(i,o.expectedCount);h!==null&&(u.expectedCount=h)}else if(o.snapshotVersion.compareTo(U.min())>0){u.readTime=ur(i,o.snapshotVersion.toTimestamp());const h=_a(i,o.expectedCount);h!==null&&(u.expectedCount=h)}return u})(this.serializer,e);const n=Sy(this.serializer,e);n&&(t.labels=n),this.k_(t)}Z_(e){const t={};t.database=Ia(this.serializer),t.removeTarget=e,this.k_(t)}}class yI extends $f{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return L(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){L(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Ry(e.writeResults,e.commitTime),n=pe(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Ia(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Ps(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{}class EI extends II{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.$o(e,ya(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(R.UNKNOWN,i.toString())}))}zo(e,t,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.zo(e,ya(t,n),s,o,u,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(R.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}function TI(r,e,t,n){return new EI(r,e,t,n)}class wI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ge(t),this._a=!1):C("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="RemoteStore";class AI{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new ft(1e3),this.Aa=new ft(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo((o=>{n.enqueueAndForget((async()=>{Wt(this)&&(C(at,"Restarting streams for network reachability change."),await(async function(c){const h=O(c);h.Va.add(4),await wr(h),h.fa.set("Unknown"),h.Va.delete(4),await Ms(h)})(this))}))})),this.fa=new wI(n,s)}}async function Ms(r){if(Wt(r))for(const e of r.da)await e(!0)}async function wr(r){for(const e of r.da)await e(!1)}function Ra(r,e){return r.Ia.get(e)||void 0}function oo(r,e){const t=O(r),n=Ra(t,e.targetId);if(n!==void 0&&t.Ta.has(n))return;const s=(function(u,c){const h=Ra(u,c);h!==void 0&&u.Ea.delete(h);const f=(function(p,A){return A%2!=0?p.Aa.next():p.Ra.next()})(u,c);return u.Ia.set(c,f),u.Ea.set(f,c),f})(t,e.targetId);C(at,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new rt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ta.set(s,i),mu(t)?fu(t):vr(t).x_()&&du(t,i)}function hr(r,e){const t=O(r),n=vr(t),s=Ra(t,e);C(at,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ta.delete(s),t.Ia.delete(e),t.Ea.delete(s),n.x_()&&Gf(t,s),t.Ta.size===0&&(n.x_()?n.B_():Wt(t)&&t.fa.set("Unknown"))}function du(r,e){if(r.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.Ea.get(e.targetId);if(t===void 0)return void C(at,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}vr(r).H_(e)}function Gf(r,e){r.ga.$e(e),vr(r).Z_(e)}function fu(r){r.ga=new yy({getRemoteKeysForTarget:e=>{const t=r.Ea.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):$()},Rt:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),vr(r).start(),r.fa.aa()}function mu(r){return Wt(r)&&!vr(r).M_()&&r.Ta.size>0}function Wt(r){return O(r).Va.size===0}function Kf(r){r.ga=void 0}async function vI(r){r.fa.set("Online")}async function bI(r){r.Ta.forEach(((e,t)=>{du(r,e)}))}async function RI(r,e){Kf(r),mu(r)?(r.fa.la(e),fu(r)):r.fa.set("Unknown")}async function SI(r,e,t){if(r.fa.set("Online"),e instanceof nf&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const u of i.targetIds){if(s.Ta.has(u)){const c=s.Ea.get(u);c!==void 0&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Ea.delete(u)),s.Ta.delete(u)}s.ga.removeTarget(u)}})(r,e)}catch(n){C(at,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Li(r,n)}else if(e instanceof yi?r.ga.Xe(e):e instanceof tf?r.ga.it(e):r.ga.tt(e),!t.isEqual(U.min()))try{const n=await kf(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const u=i.ga.Pt(o);u.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ta.get(f);m&&i.Ta.set(f,m.withResumeToken(h.resumeToken,o))}})),u.targetMismatches.forEach(((h,f)=>{const m=i.Ta.get(h);if(!m)return;i.Ta.set(h,m.withResumeToken(fe.EMPTY_BYTE_STRING,m.snapshotVersion)),Gf(i,h);const p=new rt(m.target,h,f,m.sequenceNumber);du(i,p)}));const c=(function(f,m){const p=new Map;m.targetChanges.forEach(((D,N)=>{const x=f.Ea.get(N);x!==void 0&&p.set(x,D)}));let A=new oe(z);return m.targetMismatches.forEach(((D,N)=>{const x=f.Ea.get(D);x!==void 0&&(A=A.insert(x,N))})),new Tr(m.snapshotVersion,p,A,m.documentUpdates,m.resolvedLimboDocuments)})(i,u);return i.remoteSyncer.applyRemoteEvent(c)})(r,t)}catch(n){C(at,"Failed to raise snapshot:",n),await Li(r,n)}}async function Li(r,e,t){if(!Kt(e))throw e;r.Va.add(1),await wr(r),r.fa.set("Offline"),t||(t=()=>kf(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{C(at,"Retrying IndexedDB access"),await t(),r.Va.delete(1),await Ms(r)}))}function Qf(r,e){return e().catch((t=>Li(r,t,e)))}async function Ar(r){const e=O(r),t=jt(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ot;for(;PI(e);)try{const s=await cI(e.localStore,n);if(s===null){e.Pa.length===0&&t.B_();break}n=s.batchId,VI(e,s)}catch(s){await Li(e,s)}Wf(e)&&Hf(e)}function PI(r){return Wt(r)&&r.Pa.length<10}function VI(r,e){r.Pa.push(e);const t=jt(r);t.x_()&&t.X_&&t.Y_(e.mutations)}function Wf(r){return Wt(r)&&!jt(r).M_()&&r.Pa.length>0}function Hf(r){jt(r).start()}async function CI(r){jt(r).na()}async function DI(r){const e=jt(r);for(const t of r.Pa)e.Y_(t.mutations)}async function xI(r,e,t){const n=r.Pa.shift(),s=Xa.from(n,e,t);await Qf(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Ar(r)}async function NI(r,e){e&&jt(r).X_&&await(async function(n,s){if((function(o){return Xd(o)&&o!==R.ABORTED})(s.code)){const i=n.Pa.shift();jt(n).N_(),await Qf(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ar(n)}})(r,e),Wf(r)&&Hf(r)}async function oh(r,e){const t=O(r);t.asyncQueue.verifyOperationInProgress(),C(at,"RemoteStore received new credentials");const n=Wt(t);t.Va.add(3),await wr(t),n&&t.fa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Va.delete(3),await Ms(t)}async function Sa(r,e){const t=O(r);e?(t.Va.delete(2),await Ms(t)):e||(t.Va.add(2),await wr(t),t.fa.set("Unknown"))}function vr(r){return r.pa||(r.pa=(function(t,n,s){const i=O(t);return i.ia(),new _I(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Ho:vI.bind(null,r),Xo:bI.bind(null,r),e_:RI.bind(null,r),J_:SI.bind(null,r)}),r.da.push((async e=>{e?(r.pa.N_(),mu(r)?fu(r):r.fa.set("Unknown")):(await r.pa.stop(),Kf(r))}))),r.pa}function jt(r){return r.ya||(r.ya=(function(t,n,s){const i=O(t);return i.ia(),new yI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Ho:()=>Promise.resolve(),Xo:CI.bind(null,r),e_:NI.bind(null,r),ea:DI.bind(null,r),ta:xI.bind(null,r)}),r.da.push((async e=>{e?(r.ya.N_(),await Ar(r)):(await r.ya.stop(),r.Pa.length>0&&(C(at,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ya}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,u=new gu(e,t,o,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function br(r,e){if(ge("AsyncQueue",`${e}: ${r}`),Kt(r))return new V(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{static emptySet(e){return new gn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||k.comparator(t.key,n.key):(t,n)=>k.comparator(t.key,n.key),this.keyedMap=es(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new gn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.wa=new oe(k.comparator)}track(e){const t=e.doc.key,n=this.wa.get(t);n?e.type!==0&&n.type===3?this.wa=this.wa.insert(t,e):e.type===3&&n.type!==1?this.wa=this.wa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.wa=this.wa.remove(t):e.type===1&&n.type===2?this.wa=this.wa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):F(63341,{At:e,Sa:n}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class An{constructor(e,t,n,s,i,o,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((u=>{o.push({type:0,doc:u})})),new An(e,t,gn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ns(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some((e=>e.Fa()))}}class OI{constructor(){this.queries=uh(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(t,n){const s=O(t),i=s.queries;s.queries=uh(),i.forEach(((o,u)=>{for(const c of u.Ca)c.onError(n)}))})(this,new V(R.ABORTED,"Firestore shutting down"))}}function uh(){return new pt((r=>Bd(r)),Ns)}async function pu(r,e){const t=O(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.va()&&e.Fa()&&(n=2):(i=new kI,n=e.Fa()?0:1);try{switch(n){case 0:i.Da=await t.onListen(s,!0);break;case 1:i.Da=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const u=br(o,`Initialization of query '${qn(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.Ca.push(e),e.xa(t.onlineState),i.Da&&e.Oa(i.Da)&&yu(t)}async function _u(r,e){const t=O(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Ca.indexOf(e);o>=0&&(i.Ca.splice(o,1),i.Ca.length===0?s=e.Fa()?0:1:!i.va()&&e.Fa()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function MI(r,e){const t=O(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const u of o.Ca)u.Oa(s)&&(n=!0);o.Da=s}}n&&yu(t)}function FI(r,e,t){const n=O(r),s=n.queries.get(e);if(s)for(const i of s.Ca)i.onError(t);n.queries.delete(e)}function yu(r){r.Ma.forEach((e=>{e.next()}))}var Pa,ch;(ch=Pa||(Pa={})).Na="default",ch.Cache="cache";class Iu{constructor(e,t,n){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=n||{}}Oa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new An(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;const n=t!=="Offline";return(!this.options.$a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ua(e){e=An.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Pa.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.Wa=e,this.byteLength=t}Qa(){return"metadata"in this.Wa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.serializer=e}ks(e){return it(this.serializer,e)}qs(e){return e.metadata.exists?eo(this.serializer,e.document,!1):ue.newNoDocument(this.ks(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return pe(e)}}class Eu{constructor(e,t){this.Ga=e,this.serializer=t,this.za=[],this.ja=[],this.collectionGroups=new Set,this.progress=Yf(e)}get queries(){return this.za}get documents(){return this.ja}Ja(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Wa.namedQuery)this.za.push(e.Wa.namedQuery);else if(e.Wa.documentMetadata){this.ja.push({metadata:e.Wa.documentMetadata}),e.Wa.documentMetadata.exists||++t;const n=K.fromString(e.Wa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Wa.document&&(this.ja[this.ja.length-1].document=e.Wa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}Ha(e){const t=new Map,n=new lh(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.ks(s.metadata.name);for(const o of s.metadata.queries){const u=(t.get(o)||$()).add(i);t.set(o,u)}}return t}async Za(e){const t=await lI(e,new lh(this.serializer),this.ja,this.Ga.id),n=this.Ha(this.documents);for(const s of this.za)await hI(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Xa:this.collectionGroups,Ya:t}}}function Yf(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.key=e}}class Zf{constructor(e){this.key=e}}class em{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=$(),this.mutatedKeys=$(),this.ru=qd(e),this.iu=new gn(this.ru)}get su(){return this.eu}ou(e,t){const n=t?t._u:new ah,s=t?t.iu:this.iu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,m)=>{const p=s.get(f),A=ks(this.query,m)?m:null,D=!!p&&this.mutatedKeys.has(p.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let x=!1;p&&A?p.data.isEqual(A.data)?D!==N&&(n.track({type:3,doc:A}),x=!0):this.au(p,A)||(n.track({type:2,doc:A}),x=!0,(c&&this.ru(A,c)>0||h&&this.ru(A,h)<0)&&(u=!0)):!p&&A?(n.track({type:0,doc:A}),x=!0):p&&!A&&(n.track({type:1,doc:p}),x=!0,(c||h)&&(u=!0)),x&&(A?(o=o.add(A),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{iu:o,_u:n,Ss:u,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort(((f,m)=>(function(A,D){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:x})}};return N(A)-N(D)})(f.type,m.type)||this.ru(f.doc,m.doc))),this.uu(n),s=s??!1;const u=t&&!s?this.cu():[],c=this.nu.size===0&&this.current&&!s?1:0,h=c!==this.tu;return this.tu=c,o.length!==0||h?{snapshot:new An(this.query,e.iu,i,o,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),lu:u}:{lu:u}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new ah,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach((t=>this.eu=this.eu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.eu=this.eu.delete(t))),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=$(),this.iu.forEach((n=>{this.hu(n.key)&&(this.nu=this.nu.add(n.key))}));const t=[];return e.forEach((n=>{this.nu.has(n)||t.push(new Zf(n))})),this.nu.forEach((n=>{e.has(n)||t.push(new Xf(n))})),t}Pu(e){this.eu=e.Ls,this.nu=$();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return An.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Ht="SyncEngine";class LI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class BI{constructor(e){this.key=e,this.Iu=!1}}class UI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new pt((u=>Bd(u)),Ns),this.Au=new Map,this.Vu=new Set,this.du=new oe(k.comparator),this.mu=new Map,this.fu=new su,this.gu={},this.pu=new Map,this.yu=ft._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function qI(r,e,t=!0){const n=ao(r);let s;const i=n.Ru.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await tm(n,e,t,!0),s}async function jI(r,e){const t=ao(r);await tm(t,e,!0,!1)}async function tm(r,e,t,n){const s=await cr(r.localStore,Ne(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let u;return n&&(u=await Tu(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&oo(r.remoteStore,s),u}async function Tu(r,e,t,n,s){r.Su=(m,p,A)=>(async function(N,x,B,j){let q=x.view.ou(B);q.Ss&&(q=await Oi(N.localStore,x.query,!1).then((({documents:E})=>x.view.ou(E,q))));const Z=j&&j.targetChanges.get(x.targetId),Y=j&&j.targetMismatches.get(x.targetId)!=null,X=x.view.applyChanges(q,N.isPrimaryClient,Z,Y);return Va(N,x.targetId,X.lu),X.snapshot})(r,m,p,A);const i=await Oi(r.localStore,e,!0),o=new em(e,i.Ls),u=o.ou(i.documents),c=Os.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(u,r.isPrimaryClient,c);Va(r,t,h.lu);const f=new LI(e,t,o);return r.Ru.set(e,f),r.Au.has(t)?r.Au.get(t).push(e):r.Au.set(t,[e]),h.snapshot}async function zI(r,e,t){const n=O(r),s=n.Ru.get(e),i=n.Au.get(s.targetId);if(i.length>1)return n.Au.set(s.targetId,i.filter((o=>!Ns(o,e)))),void n.Ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await lr(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&hr(n.remoteStore,s.targetId),dr(n,s.targetId)})).catch(Gt)):(dr(n,s.targetId),await lr(n.localStore,s.targetId,!0))}async function $I(r,e){const t=O(r),n=t.Ru.get(e),s=t.Au.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),hr(t.remoteStore,n.targetId))}async function GI(r,e,t){const n=bu(r);try{const s=await(function(o,u){const c=O(o),h=ee.now(),f=u.reduce(((A,D)=>A.add(D.key)),$());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let D=Ue(),N=$();return c.Ms.getEntries(A,f).next((x=>{D=x,D.forEach(((B,j)=>{j.isValidDocument()||(N=N.add(B))}))})).next((()=>c.localDocuments.getOverlayedDocuments(A,D))).next((x=>{m=x;const B=[];for(const j of u){const q=my(j,m.get(j.key).overlayedDocument);q!=null&&B.push(new _t(j.key,q,Pd(q.value.mapValue),he.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,B,u)})).next((x=>{p=x;const B=x.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(A,x.batchId,B)}))})).then((()=>({batchId:p.batchId,changes:zd(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,u,c){let h=o.gu[o.currentUser.toKey()];h||(h=new oe(z)),h=h.insert(u,c),o.gu[o.currentUser.toKey()]=h})(n,s.batchId,t),await yt(n,s.changes),await Ar(n.remoteStore)}catch(s){const i=br(s,"Failed to persist write");t.reject(i)}}async function nm(r,e){const t=O(r);try{const n=await uI(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.mu.get(i);o&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Iu=!0:s.modifiedDocuments.size>0?L(o.Iu,14607):s.removedDocuments.size>0&&(L(o.Iu,42227),o.Iu=!1))})),await yt(t,n,e)}catch(n){await Gt(n)}}function hh(r,e,t){const n=O(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Ru.forEach(((i,o)=>{const u=o.view.xa(e);u.snapshot&&s.push(u.snapshot)})),(function(o,u){const c=O(o);c.onlineState=u;let h=!1;c.queries.forEach(((f,m)=>{for(const p of m.Ca)p.xa(u)&&(h=!0)})),h&&yu(c)})(n.eventManager,e),s.length&&n.Eu.J_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function KI(r,e,t){const n=O(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.mu.get(e),i=s&&s.key;if(i){let o=new oe(k.comparator);o=o.insert(i,ue.newNoDocument(i,U.min()));const u=$().add(i),c=new Tr(U.min(),new Map,new oe(z),o,u);await nm(n,c),n.du=n.du.remove(i),n.mu.delete(e),vu(n)}else await lr(n.localStore,e,!1).then((()=>dr(n,e,t))).catch(Gt)}async function QI(r,e){const t=O(r),n=e.batch.batchId;try{const s=await aI(t.localStore,e);Au(t,n,null),wu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await yt(t,s)}catch(s){await Gt(s)}}async function WI(r,e,t){const n=O(r);try{const s=await(function(o,u){const c=O(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next((m=>(L(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>c.localDocuments.getDocuments(h,f)))}))})(n.localStore,e);Au(n,e,t),wu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await yt(n,s)}catch(s){await Gt(s)}}async function HI(r,e){const t=O(r);Wt(t.remoteStore)||C(Ht,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const u=O(o);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c)))})(t.localStore);if(n===Ot)return void e.resolve();const s=t.pu.get(n)||[];s.push(e),t.pu.set(n,s)}catch(n){const s=br(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function wu(r,e){(r.pu.get(e)||[]).forEach((t=>{t.resolve()})),r.pu.delete(e)}function Au(r,e,t){const n=O(r);let s=n.gu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.gu[n.currentUser.toKey()]=s}}function dr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Au.get(e))r.Ru.delete(n),t&&r.Eu.bu(n,t);r.Au.delete(e),r.isPrimaryClient&&r.fu.Qr(e).forEach((n=>{r.fu.containsKey(n)||rm(r,n)}))}function rm(r,e){r.Vu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(hr(r.remoteStore,t),r.du=r.du.remove(e),r.mu.delete(t),vu(r))}function Va(r,e,t){for(const n of t)n instanceof Xf?(r.fu.addReference(n.key,e),JI(r,n)):n instanceof Zf?(C(Ht,"Document no longer in limbo: "+n.key),r.fu.removeReference(n.key,e),r.fu.containsKey(n.key)||rm(r,n.key)):F(19791,{Du:n})}function JI(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Vu.has(n)||(C(Ht,"New document in limbo: "+t),r.Vu.add(n),vu(r))}function vu(r){for(;r.Vu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Vu.values().next().value;r.Vu.delete(e);const t=new k(K.fromString(e)),n=r.yu.next();r.mu.set(n,new BI(t)),r.du=r.du.insert(t,n),oo(r.remoteStore,new rt(Ne(yr(t.path)),n,"TargetPurposeLimboResolution",Le.ce))}}async function yt(r,e,t){const n=O(r),s=[],i=[],o=[];n.Ru.isEmpty()||(n.Ru.forEach(((u,c)=>{o.push(n.Su(c,e,t).then((h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=uu.Is(c.targetId,h);i.push(m)}})))})),await Promise.all(o),n.Eu.J_(s),await(async function(c,h){const f=O(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>v.forEach(h,(p=>v.forEach(p.Ps,(A=>f.persistence.referenceDelegate.addReference(m,p.targetId,A))).next((()=>v.forEach(p.Ts,(A=>f.persistence.referenceDelegate.removeReference(m,p.targetId,A)))))))))}catch(m){if(!Kt(m))throw m;C(cu,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const A=f.Cs.get(p),D=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(D);f.Cs=f.Cs.insert(p,N)}}})(n.localStore,i))}async function YI(r,e){const t=O(r);if(!t.currentUser.isEqual(e)){C(Ht,"User change. New user:",e.toKey());const n=await Nf(t.localStore,e);t.currentUser=e,(function(i,o){i.pu.forEach((u=>{u.forEach((c=>{c.reject(new V(R.CANCELLED,o))}))})),i.pu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await yt(t,n.Os)}}function XI(r,e){const t=O(r),n=t.mu.get(e);if(n&&n.Iu)return $().add(n.key);{let s=$();const i=t.Au.get(e);if(!i)return s;for(const o of i){const u=t.Ru.get(o);s=s.unionWith(u.view.su)}return s}}async function ZI(r,e){const t=O(r),n=await Oi(t.localStore,e.query,!0),s=e.view.Pu(n);return t.isPrimaryClient&&Va(t,e.targetId,s.lu),s}async function eE(r,e){const t=O(r);return Ff(t.localStore,e).then((n=>yt(t,n)))}async function tE(r,e,t,n){const s=O(r),i=await(function(u,c){const h=O(u),f=O(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",(m=>f.Zn(m,c).next((p=>p?h.localDocuments.getDocuments(m,p):v.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Ar(s.remoteStore):t==="acknowledged"||t==="rejected"?(Au(s,e,n||null),wu(s,e),(function(u,c){O(O(u).mutationQueue).tr(c)})(s.localStore,e)):F(6720,"Unknown batchState",{Cu:t}),await yt(s,i)):C(Ht,"Cannot apply mutation batch with id: "+e)}async function nE(r,e){const t=O(r);if(ao(t),bu(t),e===!0&&t.wu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await dh(t,n.toArray());t.wu=!0,await Sa(t.remoteStore,!0);for(const i of s)oo(t.remoteStore,i)}else if(e===!1&&t.wu!==!1){const n=[];let s=Promise.resolve();t.Au.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(dr(t,o),lr(t.localStore,o,!0)))),hr(t.remoteStore,o)})),await s,await dh(t,n),(function(o){const u=O(o);u.mu.forEach(((c,h)=>{hr(u.remoteStore,h)})),u.fu.Gr(),u.mu=new Map,u.du=new oe(k.comparator)})(t),t.wu=!1,await Sa(t.remoteStore,!1)}}async function dh(r,e,t){const n=O(r),s=[],i=[];for(const o of e){let u;const c=n.Au.get(o);if(c&&c.length!==0){u=await cr(n.localStore,Ne(c[0]));for(const h of c){const f=n.Ru.get(h),m=await ZI(n,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await Mf(n.localStore,o);u=await cr(n.localStore,h),await Tu(n,sm(h),o,!1,u.resumeToken)}s.push(u)}return n.Eu.J_(i),s}function sm(r){return Md(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function rE(r){return(function(t){return O(O(t).persistence).ls()})(O(r).localStore)}async function sE(r,e,t,n){const s=O(r);if(s.wu)return void C(Ht,"Ignoring unexpected query state notification.");const i=s.Au.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Ff(s.localStore,Ud(i[0])),u=Tr.createSynthesizedRemoteEventForCurrentChange(e,t==="current",fe.EMPTY_BYTE_STRING);await yt(s,o,u);break}case"rejected":await lr(s.localStore,e,!0),dr(s,e,n);break;default:F(64155,t)}}async function iE(r,e,t){const n=ao(r);if(n.wu){for(const s of e){if(n.Au.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){C(Ht,"Adding an already active target "+s);continue}const i=await Mf(n.localStore,s),o=await cr(n.localStore,i);await Tu(n,sm(i),o.targetId,!1,o.resumeToken),oo(n.remoteStore,o)}for(const s of t)n.Au.has(s)&&await lr(n.localStore,s,!1).then((()=>{hr(n.remoteStore,s),dr(n,s)})).catch(Gt)}}function ao(r){const e=O(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KI.bind(null,e),e.Eu.J_=MI.bind(null,e.eventManager),e.Eu.bu=FI.bind(null,e.eventManager),e}function bu(r){const e=O(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WI.bind(null,e),e}function oE(r,e,t){const n=O(r);(async function(i,o,u){try{const c=await o.getMetadata();if(await(function(A,D){const N=O(A),x=pe(D.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",(B=>N.hi.getBundleMetadata(B,D.id))).then((B=>!!B&&B.createTime.compareTo(x)>=0))})(i.localStore,c))return await o.close(),u._completeWith((function(A){return{taskState:"Success",documentsLoaded:A.totalDocuments,bytesLoaded:A.totalBytes,totalDocuments:A.totalDocuments,totalBytes:A.totalBytes}})(c)),Promise.resolve(new Set);u._updateProgress(Yf(c));const h=new Eu(c,o.serializer);let f=await o.vu();for(;f;){const p=await h.Ja(f);p&&u._updateProgress(p),f=await o.vu()}const m=await h.Za(i.localStore);return await yt(i,m.Ya,void 0),await(function(A,D){const N=O(A);return N.persistence.runTransaction("Save bundle","readwrite",(x=>N.hi.saveBundleMetadata(x,D)))})(i.localStore,c),u._completeWith(m.progress),Promise.resolve(m.Xa)}catch(c){return ze(Ht,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,e,t).then((s=>{n.sharedClientState.notifyBundleLoaded(s)}))}class fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rn(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return xf(this.persistence,new Df,e.initialUser,this.serializer)}Mu(e){return new iu(io.Ai,this.serializer)}Fu(e){return new jf}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fr.provider={build:()=>new fr};class Ru extends fr{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){L(this.persistence.referenceDelegate instanceof ki,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new bf(n,e.asyncQueue,t)}Mu(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new iu((n=>ki.Ai(n,t)),this.serializer)}}class Su extends fr{constructor(e,t,n){super(),this.Bu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Bu.initialize(this,e),await bu(this.Bu.syncEngine),await Ar(this.Bu.remoteStore),await this.persistence.Gi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}xu(e){return xf(this.persistence,new Df,e.initialUser,this.serializer)}Ou(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new bf(n,e.asyncQueue,t)}Nu(e,t){const n=new f_(t,this.persistence);return new d_(e.asyncQueue,n)}Mu(e){const t=au(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new ou(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,zf(),Ei(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Fu(e){return new jf}}class im extends Su{constructor(e,t){super(e,t,!1),this.Bu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Bu.syncEngine;this.sharedClientState instanceof Jo&&(this.sharedClientState.syncEngine={So:tE.bind(null,t),bo:sE.bind(null,t),Do:iE.bind(null,t),ls:rE.bind(null,t),wo:eE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Gi((async n=>{await nE(this.Bu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Fu(e){const t=zf();if(!Jo.v(t))throw new V(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=au(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Jo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class zt{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>hh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=YI.bind(null,this.syncEngine),await Sa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new OI})()}createDatastore(e){const t=Rn(e.databaseInfo.databaseId),n=pI(e.databaseInfo);return TI(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,u){return new AI(n,s,i,o,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>hh(this.syncEngine,t,0)),(function(){return sh.v()?new sh:new dI})())}createSyncEngine(e,t){return(function(s,i,o,u,c,h,f){const m=new UI(s,i,o,u,c,h);return f&&(m.wu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=O(s);C(at,"RemoteStore shutting down."),i.Va.add(5),await wr(i),i.ma.shutdown(),i.fa.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}zt.provider={build:()=>new zt};function fh(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):ge("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t){this.qu=e,this.serializer=t,this.metadata=new Se,this.buffer=new Uint8Array,this.Ku=(function(){return new TextDecoder("utf-8")})(),this.Uu().then((n=>{n&&n.Qa()?this.metadata.resolve(n.Wa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Wa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.qu.cancel()}async getMetadata(){return this.metadata.promise}async vu(){return await this.getMetadata(),this.Uu()}async Uu(){const e=await this.$u();if(e===null)return null;const t=this.Ku.decode(e),n=Number(t);isNaN(n)&&this.Wu(`length string (${t}) is not valid number`);const s=await this.Qu(n);return new Jf(JSON.parse(s),e.length+n)}Gu(){return this.buffer.findIndex((e=>e===123))}async $u(){for(;this.Gu()<0&&!await this.zu(););if(this.buffer.length===0)return null;const e=this.Gu();e<0&&this.Wu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Qu(e){for(;this.buffer.length<e;)await this.zu()&&this.Wu("Reached the end of bundle when more is expected.");const t=this.Ku.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Wu(e){throw this.qu.cancel(),new Error(`Invalid bundle format: ${e}`)}async zu(){const e=await this.qu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.vu();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.Wa)}`);this.metadata=n;do n=this.vu(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}ju(){return this.elements}vu(){if(this.cursor===this.bundleData.length)return null;const e=this.$u(),t=this.Qu(e);return new Jf(JSON.parse(t),e)}Qu(e){if(this.cursor+e>this.bundleData.length)throw new V(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}$u(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cE=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=O(s),u={documents:i.map((m=>Ss(o.serializer,m)))},c=await o.zo("BatchGetDocuments",o.serializer.databaseId,K.emptyPath(),u,i.length),h=new Map;c.forEach((m=>{const p=vy(o.serializer,m);h.set(p.key.toString(),p)}));const f=[];return i.forEach((m=>{const p=h.get(m.toString());L(!!p,55234,{key:m}),f.push(p)})),f})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Er(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const s=k.fromPath(n);this.mutations.push(new Ja(s,this.precondition(s)))})),await(async function(n,s){const i=O(n),o={writes:s.map((u=>Ps(i.serializer,u)))};await i.$o("Commit",i.serializer.databaseId,K.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F(50498,{Ju:e.constructor.name});t=U.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new V(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?he.exists(!1):he.updateTime(t):he.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new V(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return he.updateTime(t)}return he.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Hu=n.maxAttempts,this.F_=new hu(this.asyncQueue,"transaction_retry")}Zu(){this.Hu-=1,this.Xu()}Xu(){this.F_.g_((async()=>{const e=new cE(this.datastore),t=this.Yu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.ec(s)}))))})).catch((n=>{this.ec(n)}))}))}Yu(e){try{const t=this.updateFunction(e);return!Cs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ec(e){this.Hu>0&&this.tc(e)?(this.Hu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Xu(),Promise.resolve())))):this.deferred.reject(e)}tc(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Xd(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="FirestoreClient";class hE{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=qi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{C($t,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(C($t,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=br(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Xo(r,e){r.asyncQueue.verifyOperationInProgress(),C($t,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Nf(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function mh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Pu(r);C($t,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>oh(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>oh(e.remoteStore,s))),r._onlineComponents=e}async function Pu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C($t,"Using user provided OfflineComponentProvider");try{await Xo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ze("Error using user provided cache. Falling back to memory cache: "+t),await Xo(r,new fr)}}else C($t,"Using default OfflineComponentProvider"),await Xo(r,new Ru(void 0));return r._offlineComponents}async function co(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C($t,"Using user provided OnlineComponentProvider"),await mh(r,r._uninitializedComponentsProvider._online)):(C($t,"Using default OnlineComponentProvider"),await mh(r,new zt))),r._onlineComponents}function om(r){return Pu(r).then((e=>e.persistence))}function Rr(r){return Pu(r).then((e=>e.localStore))}function am(r){return co(r).then((e=>e.remoteStore))}function Vu(r){return co(r).then((e=>e.syncEngine))}function um(r){return co(r).then((e=>e.datastore))}async function mr(r){const e=await co(r),t=e.eventManager;return t.onListen=qI.bind(null,e.syncEngine),t.onUnlisten=zI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$I.bind(null,e.syncEngine),t}function dE(r){return r.asyncQueue.enqueue((async()=>{const e=await om(r),t=await am(r);return e.setNetworkEnabled(!0),(function(s){const i=O(s);return i.Va.delete(0),Ms(i)})(t)}))}function fE(r){return r.asyncQueue.enqueue((async()=>{const e=await om(r),t=await am(r);return e.setNetworkEnabled(!1),(async function(s){const i=O(s);i.Va.add(0),await wr(i),i.fa.set("Offline")})(t)}))}function mE(r,e,t,n){const s=new uo(n),i=new Iu(e,s,t);return r.asyncQueue.enqueueAndForget((async()=>pu(await mr(r),i))),()=>{s.ku(),r.asyncQueue.enqueueAndForget((async()=>_u(await mr(r),i)))}}function gE(r,e){const t=new Se;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const u=await(function(h,f){const m=O(h);return m.persistence.runTransaction("read document","readonly",(p=>m.localDocuments.getDocument(p,f)))})(s,i);u.isFoundDocument()?o.resolve(u):u.isNoDocument()?o.resolve(null):o.reject(new V(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=br(u,`Failed to get document '${i} from cache`);o.reject(c)}})(await Rr(r),e,t))),t.promise}function cm(r,e,t={}){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,u,c,h){const f=new uo({next:p=>{f.ku(),o.enqueueAndForget((()=>_u(i,m)));const A=p.docs.has(u);!A&&p.fromCache?h.reject(new V(R.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&p.fromCache&&c&&c.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new Iu(yr(u.path),f,{includeMetadataChanges:!0,$a:!0});return pu(i,m)})(await mr(r),r.asyncQueue,e,t,n))),n.promise}function pE(r,e){const t=new Se;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const u=await Oi(s,i,!0),c=new em(i,u.Ls),h=c.ou(u.documents),f=c.applyChanges(h,!1);o.resolve(f.snapshot)}catch(u){const c=br(u,`Failed to execute query '${i} against cache`);o.reject(c)}})(await Rr(r),e,t))),t.promise}function lm(r,e,t={}){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,u,c,h){const f=new uo({next:p=>{f.ku(),o.enqueueAndForget((()=>_u(i,m))),p.fromCache&&c.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new Iu(u,f,{includeMetadataChanges:!0,$a:!0});return pu(i,m)})(await mr(r),r.asyncQueue,e,t,n))),n.promise}function _E(r,e,t){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>{try{const s=await um(r);n.resolve((async function(o,u,c){var N;const h=O(o),{request:f,ft:m,parent:p}=lf(h.serializer,Fd(u),c);h.connection.ko||delete f.parent;const A=(await h.zo("RunAggregationQuery",h.serializer.databaseId,p,f,1)).filter((x=>!!x.result));L(A.length===1,64727);const D=(N=A[0].result)==null?void 0:N.aggregateFields;return Object.keys(D).reduce(((x,B)=>(x[m[B]]=D[B],x)),{})})(s,e,t))}catch(s){n.reject(s)}})),n.promise}function yE(r,e){const t=new Se;return r.asyncQueue.enqueueAndForget((async()=>GI(await Vu(r),e,t))),t.promise}function IE(r,e){const t=new uo(e);return r.asyncQueue.enqueueAndForget((async()=>(function(s,i){O(s).Ma.add(i),i.next()})(await mr(r),t))),()=>{t.ku(),r.asyncQueue.enqueueAndForget((async()=>(function(s,i){O(s).Ma.delete(i)})(await mr(r),t)))}}function EE(r,e,t){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>{const s=await um(r);new lE(r.asyncQueue,s,t,e,n).Zu()})),n.promise}function TE(r,e,t,n){const s=(function(o,u){let c;return c=typeof o=="string"?ef().encode(o):o,(function(f,m){return new aE(f,m)})((function(f,m){if(f instanceof Uint8Array)return fh(f,m);if(f instanceof ArrayBuffer)return fh(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(c),u)})(t,Rn(e));r.asyncQueue.enqueueAndForget((async()=>{oE(await Vu(r),s,n)}))}function wE(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){const i=O(n);return i.persistence.runTransaction("Get named query","readonly",(o=>i.hi.getNamedQuery(o,s)))})(await Rr(r),e)))}function hm(r,e){return(function(n,s){return new uE(n,s)})(r,e)}function AE(r,e){return r.asyncQueue.enqueue((async()=>(async function(n,s){const i=O(n),o=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",(c=>o.getFieldIndexes(c).next((h=>(function(m,p,A,D,N){m=[...m],p=[...p],m.sort(A),p.sort(A);const x=m.length,B=p.length;let j=0,q=0;for(;j<B&&q<x;){const Z=A(m[q],p[j]);Z<0?N(m[q++]):Z>0?D(p[j++]):(j++,q++)}for(;j<B;)D(p[j++]);for(;q<x;)N(m[q++])})(h,s,u_,(f=>{u.push(o.addFieldIndex(c,f))}),(f=>{u.push(o.deleteFieldIndex(c,f))})))).next((()=>v.waitFor(u)))))})(await Rr(r),e)))}function vE(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){O(n).Ds.Rs=s})(await Rr(r),e)))}function bE(r){return r.asyncQueue.enqueue((async()=>(function(t){const n=O(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Rr(r))))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="ComponentProvider",gh=new Map;function SE(r,e,t,n,s){return new j_(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,dm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="firestore.googleapis.com",ph=!0;class _h{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fm,this.ssl=ph}else this.host=e.host,this.ssl=e.ssl??ph;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ef;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vf)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dm(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fs{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _h({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _h(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Jh;switch(n.type){case"firstParty":return new t_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=gh.get(t);n&&(C(RE,"Removing Datastore"),gh.delete(t),n.terminate())})(this),Promise.resolve()}}function mm(r,e,t,n={}){var h;r=Q(r,Fs);const s=xa(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},u=`${e}:${t}`;s&&Mh(`https://${u}`),i.host!==fm&&i.host!==u&&ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:u,ssl:s,emulatorOptions:n};if(!Mt(c,o)&&(r._setSettings(c),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=be.MOCK_USER;else{f=Vg(n.mockUserToken,(h=r._app)==null?void 0:h.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(p)}r._authCredentials=new Xp(new Hh(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Te(this.firestore,e,this._query)}}class ne{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ne(this.firestore,e,this._key)}toJSON(){return{type:ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(vn(t,ne._jsonSchema))return new ne(e,n||null,new k(K.fromString(t.referencePath)))}}ne._jsonSchemaVersion="firestore/documentReference/1.0",ne._jsonSchema={type:ye("string",ne._jsonSchemaVersion),referencePath:ye("string")};class He extends Te{constructor(e,t,n){super(e,t,yr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ne(this.firestore,null,new k(e))}withConverter(e){return new He(this.firestore,e,this._path)}}function PE(r,e,...t){if(r=Ee(r),Ma("collection","path",e),r instanceof Fs){const n=K.fromString(e,...t);return il(n),new He(r,null,n)}{if(!(r instanceof ne||r instanceof He))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(e,...t));return il(n),new He(r.firestore,null,n)}}function VE(r,e){if(r=Q(r,Fs),Ma("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Te(r,null,(function(n){return new gt(K.emptyPath(),n)})(e))}function gm(r,e,...t){if(r=Ee(r),arguments.length===1&&(e=qi.newId()),Ma("doc","path",e),r instanceof Fs){const n=K.fromString(e,...t);return sl(n),new ne(r,null,new k(n))}{if(!(r instanceof ne||r instanceof He))throw new V(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(e,...t));return sl(n),new ne(r.firestore,r instanceof He?r.converter:null,new k(n))}}function CE(r,e){return r=Ee(r),e=Ee(e),(r instanceof ne||r instanceof He)&&(e instanceof ne||e instanceof He)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Cu(r,e){return r=Ee(r),e=Ee(e),r instanceof Te&&e instanceof Te&&r.firestore===e.firestore&&Ns(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="AsyncQueue";class Ih{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new hu(this,"async_queue_retry"),this.cc=()=>{const n=Ei();n&&C(yh,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this.lc=e;const t=Ei();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=Ei();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise((()=>{}));const t=new Se;return this.Pc((()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.nc.push(e),this.Tc())))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Kt(e))throw e;C(yh,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_((()=>this.Tc()))}}Pc(e){const t=this.lc.then((()=>(this._c=!0,e().catch((n=>{throw this.oc=n,this._c=!1,ge("INTERNAL UNHANDLED ERROR: ",Eh(n)),n})).then((n=>(this._c=!1,n))))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const s=gu.createAndSchedule(this,e,t,n,(i=>this.Ic(i)));return this.sc.push(s),s}hc(){this.oc&&F(47125,{Ec:Eh(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then((()=>{this.sc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.sc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Rc()}))}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function Eh(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this._progressObserver={},this._taskCompletionResolver=new Se,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=-1;class se extends Fs{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Ih,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ih(e),this._firestoreClient=void 0,await e}}}function xE(r,e,t){t||(t=ws);const n=ka(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Mt(i,e))return s;throw new V(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vf)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&xa(e.host)&&Mh(e.host),n.initialize({options:e,instanceIdentifier:t})}function NE(r,e){const t=typeof r=="object"?r:Lp(),n=typeof r=="string"?r:e||ws,s=ka(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Sg("firestore");i&&mm(s,...i)}return s}function de(r){if(r._terminated)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||_m(r),r._firestoreClient}function _m(r){var n,s,i,o;const e=r._freezeSettings(),t=SE(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new hE(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(r._componentsProvider))}function kE(r,e){ze("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return ym(r,zt.provider,{build:n=>new Su(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function OE(r){ze("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();ym(r,zt.provider,{build:t=>new im(t,e.cacheSizeBytes)})}function ym(r,e,t){if((r=Q(r,se))._firestoreClient||r._terminated)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},_m(r)}function ME(r){if(r._initialized&&!r._terminated)throw new V(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Se;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!st.v())return Promise.resolve();const s=n+Cf;await st.delete(s)})(au(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function FE(r){return(function(t){const n=new Se;return t.asyncQueue.enqueueAndForget((async()=>HI(await Vu(t),n))),n.promise})(de(r=Q(r,se)))}function LE(r){return dE(de(r=Q(r,se)))}function BE(r){return fE(de(r=Q(r,se)))}function UE(r){return xp(r.app,"firestore",r._databaseId.database),r._delete()}function Ca(r,e){const t=de(r=Q(r,se)),n=new pm;return TE(t,r._databaseId,e,n),n}function Im(r,e){return wE(de(r=Q(r,se)),e).then((t=>t?new Te(r,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fe(fe.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fe(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vn(e,Fe._jsonSchema))return Fe.fromBase64String(e.bytes)}}Fe._jsonSchemaVersion="firestore/bytes/1.0",Fe._jsonSchema={type:ye("string",Fe._jsonSchemaVersion),bytes:ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function qE(){return new Sn(oa)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(vn(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:ye("string",Je._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vn(e,Ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ke(e.vectorValues);throw new V(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:ye("string",Ke._jsonSchemaVersion),vectorValues:ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=/^__.*__$/;class zE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new _t(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ir(e,this.data,t,this.fieldTransforms)}}class Em{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new _t(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:r})}}class lo{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new lo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Bi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(Tm(this.dataSource)&&jE.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class $E{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rn(e)}V(e,t,n,s=!1){return new lo({dataSource:e,methodName:t,targetDoc:n,path:ce.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pn(r){const e=r._freezeSettings(),t=Rn(r._databaseId);return new $E(r._databaseId,!!e.ignoreUndefinedProperties,t)}function ho(r,e,t,n,s,i={}){const o=r.V(i.merge||i.mergeFields?2:0,e,t,s);Bu("Data must be an object, but it was:",o,n);const u=vm(n,o);let c,h;if(i.merge)c=new Be(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=mt(e,m,t);if(!o.contains(p))throw new V(R.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Rm(f,p)||f.push(p)}c=new Be(f),h=o.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,h=o.fieldTransforms;return new zE(new Re(u),c,h)}class Ls extends ut{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ls}}function wm(r,e,t){return new lo({dataSource:3,targetDoc:e.settings.targetDoc,methodName:r._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Du extends ut{_toFieldTransform(e){return new bn(e.path,new ir)}isEqual(e){return e instanceof Du}}class xu extends ut{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=wm(this,e,!0),n=this.Cc.map((i=>Vn(i,t))),s=new yn(n);return new bn(e.path,s)}isEqual(e){return e instanceof xu&&Mt(this.Cc,e.Cc)}}class Nu extends ut{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=wm(this,e,!0),n=this.Cc.map((i=>Vn(i,t))),s=new In(n);return new bn(e.path,s)}isEqual(e){return e instanceof Nu&&Mt(this.Cc,e.Cc)}}class ku extends ut{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=new En(e.serializer,Yi(e.serializer,this.vc));return new bn(e.path,t)}isEqual(e){return e instanceof ku&&(this.vc===e.vc||Number.isNaN(this.vc)&&Number.isNaN(e.vc))}}class Ou extends ut{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=new or(e.serializer,Yi(e.serializer,this.vc));return new bn(e.path,t)}isEqual(e){return e instanceof Ou&&(this.vc===e.vc||Number.isNaN(this.vc)&&Number.isNaN(e.vc))}}class Mu extends ut{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=new ar(e.serializer,Yi(e.serializer,this.vc));return new bn(e.path,t)}isEqual(e){return e instanceof Mu&&(this.vc===e.vc||Number.isNaN(this.vc)&&Number.isNaN(e.vc))}}function Fu(r,e,t,n){const s=r.V(1,e,t);Bu("Data must be an object, but it was:",s,n);const i=[],o=Re.empty();Qt(n,((c,h)=>{const f=Uu(e,c,t);h=Ee(h);const m=s.wc(f);if(h instanceof Ls)i.push(f);else{const p=Vn(h,m);p!=null&&(i.push(f),o.set(f,p))}}));const u=new Be(i);return new Em(o,u,s.fieldTransforms)}function Lu(r,e,t,n,s,i){const o=r.V(1,e,t),u=[mt(e,n,t)],c=[s];if(i.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)u.push(mt(e,i[p])),c.push(i[p+1]);const h=[],f=Re.empty();for(let p=u.length-1;p>=0;--p)if(!Rm(h,u[p])){const A=u[p];let D=c[p];D=Ee(D);const N=o.wc(A);if(D instanceof Ls)h.push(A);else{const x=Vn(D,N);x!=null&&(h.push(A),f.set(A,x))}}const m=new Be(h);return new Em(f,m,o.fieldTransforms)}function Am(r,e,t,n=!1){return Vn(t,r.V(n?4:3,e))}function Vn(r,e){if(bm(r=Ee(r)))return Bu("Unsupported field value:",e,r),vm(r,e);if(r instanceof ut)return(function(n,s){if(!Tm(s.dataSource))throw s.bc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const u of n){let c=Vn(u,s.Sc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Yi(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ee.fromDate(n);return{timestampValue:ur(s.serializer,i)}}if(n instanceof ee){const i=new ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ur(s.serializer,i)}}if(n instanceof Je)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fe)return{bytesValue:rf(s.serializer,n._byteString)};if(n instanceof ne){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tu(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ke)return(function(o,u){const c=o instanceof Ke?o.toArray():o;return{mapValue:{fields:{[za]:{stringValue:$a},[nr]:{arrayValue:{values:c.map((f=>{if(typeof f!="number")throw u.bc("VectorValues must only contain numeric values.");return Ji(u.serializer,f)}))}}}}}})(n,s);if(gf(n))return n._toProto(s.serializer);throw s.bc(`Unsupported field value: ${ji(n)}`)})(r,e)}function vm(r,e){const t={};return yd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qt(r,((n,s)=>{const i=Vn(s,e.gc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function bm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ee||r instanceof Je||r instanceof Fe||r instanceof ne||r instanceof ut||r instanceof Ke||gf(r))}function Bu(r,e,t){if(!bm(t)||!Zh(t)){const n=ji(t);throw n==="an object"?e.bc(r+" a custom object"):e.bc(r+" "+n)}}function mt(r,e,t){if((e=Ee(e))instanceof Sn)return e._internalPath;if(typeof e=="string")return Uu(r,e);throw Bi("Field path arguments must be of type string or ",r,!1,void 0,t)}const GE=new RegExp("[~\\*/\\[\\]]");function Uu(r,e,t){if(e.search(GE)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Sn(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Bi(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new V(R.INVALID_ARGUMENT,u+r+c)}function Rm(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Qt(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[nr].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>le(o.doubleValue)));return new Ke(t)}convertGeoPoint(e){return new Je(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Wi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const t=ht(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=K.fromString(e);L(mf(n),9688,{name:e});const s=new Lt(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(t)||ge(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends qu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){return new Ls("deleteField")}function QE(){return new Du("serverTimestamp")}function WE(...r){return new xu("arrayUnion",r)}function HE(...r){return new Nu("arrayRemove",r)}function JE(r){return new ku("increment",r)}function YE(r){return new Ou("minimum",r)}function XE(r){return new Mu("maximum",r)}function ZE(r){return new Ke(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(r){var n;const e=de(Q(r.firestore,se)),t=(n=e._onlineComponents)==null?void 0:n.datastore.serializer;return t===void 0?null:to(t,Ne(r._query)).dt}function tT(r,e){var i;const t=_d(e,((o,u)=>new Yd(u,o.aggregateType,o._internalFieldPath))),n=de(Q(r.firestore,se)),s=(i=n._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:lf(s,Fd(r._query),t,!0).request}const Th="@firebase/firestore",wh="4.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Sm{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Re({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(mt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nT extends Vs{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ju{}class Sr extends ju{}function rT(r,e,...t){let n=[];e instanceof ju&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((c=>c instanceof Cn)).length,u=i.filter((c=>c instanceof Pr)).length;if(o>1||o>0&&u>0)throw new V(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class Pr extends Sr{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Pr(e,t,n)}_apply(e){const t=this._parse(e);return Cm(e._query,t),new Te(e.firestore,e.converter,pa(e._query,t))}_parse(e){const t=Pn(e.firestore);return(function(i,o,u,c,h,f,m){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vh(m,f);const D=[];for(const N of m)D.push(Ah(c,i,N));p={arrayValue:{values:D}}}else p=Ah(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vh(m,f),p=Am(u,o,m,f==="in"||f==="not-in");return W.create(h,f,p)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sT(r,e,t){const n=e,s=mt("where",r);return Pr._create(s,n,t)}class Cn extends ju{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cn(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const u=i.getFlattenedFilters();for(const c of u)Cm(o,c),o=pa(o,c)})(e._query,t),new Te(e.firestore,e.converter,pa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function iT(...r){return r.forEach((e=>Dm("or",e))),Cn._create("or",r)}function oT(...r){return r.forEach((e=>Dm("and",e))),Cn._create("and",r)}class fo extends Sr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fo(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rs(i,o)})(e._query,this._field,this._direction);return new Te(e.firestore,e.converter,ty(e._query,t))}}function aT(r,e="asc"){const t=e,n=mt("orderBy",r);return fo._create(n,t)}class Bs extends Sr{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Bs(e,t,n)}_apply(e){return new Te(e.firestore,e.converter,Vi(e._query,this._limit,this._limitType))}}function uT(r){return ed("limit",r),Bs._create("limit",r,"F")}function cT(r){return ed("limitToLast",r),Bs._create("limitToLast",r,"L")}class Us extends Sr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Us(e,t,n)}_apply(e){const t=Vm(e,this.type,this._docOrFields,this._inclusive);return new Te(e.firestore,e.converter,ny(e._query,t))}}function lT(...r){return Us._create("startAt",r,!0)}function hT(...r){return Us._create("startAfter",r,!1)}class qs extends Sr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new qs(e,t,n)}_apply(e){const t=Vm(e,this.type,this._docOrFields,this._inclusive);return new Te(e.firestore,e.converter,ry(e._query,t))}}function dT(...r){return qs._create("endBefore",r,!1)}function fT(...r){return qs._create("endAt",r,!0)}function Vm(r,e,t,n){if(t[0]=Ee(t[0]),t[0]instanceof Vs)return(function(i,o,u,c,h){if(!c)throw new V(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const m of $n(i))if(m.field.isKeyField())f.push(pn(o,c.key));else{const p=c.data.field(m.field);if(Qi(p))throw new V(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const A=m.field.canonicalString();throw new V(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`)}f.push(p)}return new qt(f,h)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Pn(r.firestore);return(function(o,u,c,h,f,m){const p=o.explicitOrderBy;if(f.length>p.length)throw new V(R.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const A=[];for(let D=0;D<f.length;D++){const N=f[D];if(p[D].field.isKeyField()){if(typeof N!="string")throw new V(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!Ka(o)&&N.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const x=o.path.child(K.fromString(N));if(!k.isDocumentKey(x))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const B=new k(x);A.push(pn(u,B))}else{const x=Am(c,h,N);A.push(x)}}return new qt(A,m)})(r._query,r.firestore._databaseId,s,e,t,n)}}function Ah(r,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new V(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ka(e)&&t.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(K.fromString(t));if(!k.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return pn(r,new k(n))}if(t instanceof ne)return pn(r,t._key);throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ji(t)}.`)}function vh(r,e){if(!Array.isArray(r)||r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cm(r,e){const t=(function(s,i){for(const o of s)for(const u of o.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Dm(r,e){if(!(e instanceof Pr||e instanceof Cn))throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function mo(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class zu extends qu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(r){return new gr("sum",mt("sum",r))}function gT(r){return new gr("avg",mt("average",r))}function xm(){return new gr("count")}function pT(r,e){var t,n;return r instanceof gr&&e instanceof gr&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)==null?void 0:t.canonicalString())===((n=e._internalFieldPath)==null?void 0:n.canonicalString())}function _T(r,e){return Cu(r.query,e.query)&&Mt(r.data(),e.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(r){return Nm(r,{count:xm()})}function Nm(r,e){const t=Q(r.firestore,se),n=de(t),s=_d(e,((i,o)=>new Yd(o,i.aggregateType,i._internalFieldPath)));return _E(n,r._query,s).then((i=>(function(u,c,h){const f=new Jt(u);return new Sm(c,f,h)})(t,r,i)))}class IT{constructor(e){this.kind="memory",this._onlineComponentProvider=zt.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new Ru(void 0)}}toJSON(){return{kind:this.kind}}}class ET{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=km(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class TT{constructor(){this.kind="memoryEager",this._offlineComponentProvider=fr.provider}toJSON(){return{kind:this.kind}}}class wT{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Ru(e)}}toJSON(){return{kind:this.kind}}}function AT(){return new TT}function vT(r){return new wT(r==null?void 0:r.cacheSizeBytes)}function bT(r){return new IT(r)}function RT(r){return new ET(r)}class ST{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zt.provider,this._offlineComponentProvider={build:t=>new Su(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class PT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zt.provider,this._offlineComponentProvider={build:t=>new im(t,e==null?void 0:e.cacheSizeBytes)}}}function km(r){return new ST(r==null?void 0:r.forceOwnership)}function VT(){return new PT}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="NOT SUPPORTED";class ct{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qe extends Vs{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(mt("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=qe._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function CT(r,e,t){if(vn(e,qe._jsonSchema)){if(e.bundle===Om)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Rn(r._databaseId),s=hm(e.bundle,n),i=s.ju(),o=new Eu(s.getMetadata(),n);for(const f of i)o.Ja(f);const u=o.documents;if(u.length!==1)throw new V(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${u.length} documents.`);const c=eo(n,u[0].document),h=new k(K.fromString(e.bundleName));return new qe(r,new zu(r),h,c,new ct(!1,!1),t||null)}}qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",qe._jsonSchema={type:ye("string",qe._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class fs extends qe{data(e={}){return super.data(e)}}class je{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ct(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new fs(this._firestore,this._userDataWriter,n.key,n,new ct(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((u=>{const c=new fs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ct(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const c=new fs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ct(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),f=o.indexOf(u.doc.key)),{type:xT(u.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=je._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DT(r,e,t){if(vn(e,je._jsonSchema)){if(e.bundle===Om)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Rn(r._databaseId),s=hm(e.bundle,n),i=s.ju(),o=new Eu(s.getMetadata(),n);for(const p of i)o.Ja(p);if(o.queries.length!==1)throw new V(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const u=no(o.queries[0].bundledQuery),c=o.documents;let h=new gn;c.map((p=>{const A=eo(n,p.document);h=h.add(A)}));const f=An.fromInitialDocuments(u,h,$(),!1,!1),m=new Te(r,t||null,u);return new je(r,new zu(r),m,f)}}function xT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function NT(r,e){return r instanceof qe&&e instanceof qe?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof je&&e instanceof je&&r._firestore===e._firestore&&Cu(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je._jsonSchemaVersion="firestore/querySnapshot/1.0",je._jsonSchema={type:ye("string",je._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};const kT={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Pn(e)}set(e,t,n){this._verifyNotCommitted();const s=Dt(e,this._firestore),i=mo(s.converter,t,n),o=ho(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,he.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=Dt(e,this._firestore);let o;return o=typeof(t=Ee(t))=="string"||t instanceof Sn?Lu(this._dataReader,"WriteBatch.update",i._key,t,n,s):Fu(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,he.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Dt(e,this._firestore);return this._mutations=this._mutations.concat(new Er(t._key,he.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Dt(r,e){if((r=Ee(r)).firestore!==e)throw new V(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Pn(e)}get(e){const t=Dt(e,this._firestore),n=new zu(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return F(24041);const i=s[0];if(i.isFoundDocument())return new Vs(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new Vs(this._firestore,n,t._key,null,t.converter);throw F(18433,{doc:i})}))}set(e,t,n){const s=Dt(e,this._firestore),i=mo(s.converter,t,n),o=ho(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=Dt(e,this._firestore);let o;return o=typeof(t=Ee(t))=="string"||t instanceof Sn?Lu(this._dataReader,"Transaction.update",i._key,t,n,s):Fu(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Dt(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm extends OT{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Dt(e,this._firestore),n=new Jt(this._firestore);return super.get(e).then((s=>new qe(this._firestore,n,t._key,s._document,new ct(!1,!1),t.converter)))}}function MT(r,e,t){r=Q(r,se);const n={...kT,...t};(function(o){if(o.maxAttempts<1)throw new V(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const s=de(r);return EE(s,(i=>e(new Fm(r,i))),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(r){r=Q(r,ne);const e=Q(r.firestore,se),t=de(e);return cm(t,r._key).then((n=>$u(e,r,n)))}function LT(r){r=Q(r,ne);const e=Q(r.firestore,se),t=de(e),n=new Jt(e);return gE(t,r._key).then((s=>new qe(e,n,r._key,s,new ct(s!==null&&s.hasLocalMutations,!0),r.converter)))}function BT(r){r=Q(r,ne);const e=Q(r.firestore,se),t=de(e);return cm(t,r._key,{source:"server"}).then((n=>$u(e,r,n)))}function UT(r){r=Q(r,Te);const e=Q(r.firestore,se),t=de(e),n=new Jt(e);return Pm(r._query),lm(t,r._query).then((s=>new je(e,n,r,s)))}function qT(r){r=Q(r,Te);const e=Q(r.firestore,se),t=de(e),n=new Jt(e);return pE(t,r._query).then((s=>new je(e,n,r,s)))}function jT(r){r=Q(r,Te);const e=Q(r.firestore,se),t=de(e),n=new Jt(e);return lm(t,r._query,{source:"server"}).then((s=>new je(e,n,r,s)))}function zT(r,e,t){r=Q(r,ne);const n=Q(r.firestore,se),s=mo(r.converter,e,t),i=Pn(n);return Vr(n,[ho(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,he.none())])}function $T(r,e,t,...n){r=Q(r,ne);const s=Q(r.firestore,se),i=Pn(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof Sn?Lu(i,"updateDoc",r._key,e,t,n):Fu(i,"updateDoc",r._key,e),Vr(s,[o.toMutation(r._key,he.exists(!0))])}function GT(r){return Vr(Q(r.firestore,se),[new Er(r._key,he.none())])}function KT(r,e){const t=Q(r.firestore,se),n=gm(r),s=mo(r.converter,e),i=Pn(r.firestore);return Vr(t,[ho(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,he.exists(!1))]).then((()=>n))}function Da(r,...e){var h,f,m;r=Ee(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Kn(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Kn(e[n])){const p=e[n];e[n]=(h=p.next)==null?void 0:h.bind(p),e[n+1]=(f=p.error)==null?void 0:f.bind(p),e[n+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,u;if(r instanceof ne)o=Q(r.firestore,se),u=yr(r._key.path),i={next:p=>{e[n]&&e[n]($u(o,r,p))},error:e[n+1],complete:e[n+2]};else{const p=Q(r,Te);o=Q(p.firestore,se),u=p._query;const A=new Jt(o);i={next:D=>{e[n]&&e[n](new je(o,A,p,D))},error:e[n+1],complete:e[n+2]},Pm(r._query)}const c=de(o);return mE(c,u,s,i)}function QT(r,e,...t){const n=Ee(r),s=(function(c){const h={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const m of f){if(!(m in c)){h.error=`snapshotJson missing required field: ${m}`;break}const p=c[m];if(typeof p!="string"){h.error=`snapshotJson field '${m}' must be a string.`;break}if(p.length===0){h.error=`snapshotJson field '${m}' cannot be an empty string.`;break}m==="bundle"?h.bundle=p:m==="bundleName"?h.bundleName=p:m==="bundleSource"&&(h.bundleSource=p)}return h})(e);if(s.error)throw new V(R.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||Kn(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let u=null;if(typeof t[o]=="object"&&Kn(t[o])){const c=t[o++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:t[o++],error:t[o++],complete:t[o++]};return(function(h,f,m,p,A){let D,N=!1;return Ca(h,f.bundle).then((()=>Im(h,f.bundleName))).then((B=>{B&&!N&&(A&&B.withConverter(A),D=Da(B,m||{},p))})).catch((B=>(p.error&&p.error(B),()=>{}))),()=>{N||(N=!0,D&&D())}})(n,s,i,u,t[o])}if(s.bundleSource==="DocumentSnapshot"){let u=null;if(typeof t[o]=="object"&&Kn(t[o])){const c=t[o++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:t[o++],error:t[o++],complete:t[o++]};return(function(h,f,m,p,A){let D,N=!1;return Ca(h,f.bundle).then((()=>{if(!N){const B=new ne(h,A||null,k.fromPath(f.bundleName));D=Da(B,m||{},p)}})).catch((B=>(p.error&&p.error(B),()=>{}))),()=>{N||(N=!0,D&&D())}})(n,s,i,u,t[o])}throw new V(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function WT(r,e){r=Q(r,se);const t=de(r),n=Kn(e)?e:{next:e};return IE(t,n)}function Vr(r,e){const t=de(r);return yE(t,e)}function $u(r,e,t){const n=t.docs.get(e._key),s=new Jt(r);return new qe(r,s,e._key,n,new ct(t.hasPendingWrites,t.fromCache),e.converter)}function HT(r){return r=Q(r,se),de(r),new Mm(r,(e=>Vr(r,e)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(r,e){r=Q(r,se);const t=de(r);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return ze("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(i){const o=typeof i=="string"?(function(h){try{return JSON.parse(h)}catch(f){throw new V(R.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}})(i):i,u=[];if(Array.isArray(o.indexes))for(const c of o.indexes){const h=bh(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const m of c.fields){const p=bh(m,"fieldPath"),A=Uu("setIndexConfiguration",p);m.arrayConfig==="CONTAINS"?f.push(new fn(A,2)):m.order==="ASCENDING"?f.push(new fn(A,0)):m.order==="DESCENDING"&&f.push(new fn(A,1))}u.push(new Jn(Jn.UNKNOWN_ID,h,f,Yn.empty()))}return u})(e);return AE(t,n)}function bh(r,e){if(typeof r[e]!="string")throw new V(R.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function YT(r){var s;r=Q(r,se);const e=Rh.get(r);if(e)return e;if(((s=de(r)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const n=new Lm(r);return Rh.set(r,n),n}function XT(r){Bm(r,!0)}function ZT(r){Bm(r,!1)}function ew(r){const e=de(r._firestore);bE(e).then((t=>C("deleting all persistent cache indexes succeeded"))).catch((t=>ze("deleting all persistent cache indexes failed",t)))}function Bm(r,e){const t=de(r._firestore);vE(t,e).then((n=>C(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((n=>ze(`setting persistent cache index auto creation isEnabled=${e} failed`,n)))}const Rh=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Gu.instance.onExistenceFilterMismatch(e)}}class Gu{constructor(){this.t=new Map}static get instance(){return li||(li=new Gu,py(li)),li}o(e){this.t.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.t;return n.set(t,e),()=>n.delete(t)}}let li=null;(function(e,t=!0){Hp(Mp),Ai(new ms("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),u=new se(new Zp(n.getProvider("auth-internal")),new n_(o,n.getProvider("app-check-internal")),z_(o,s),o);return i={useFetchStreams:t,...i},u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),rs(Th,wh,e),rs(Th,wh,"esm2020")})();const pw=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:qu,AggregateField:gr,AggregateQuerySnapshot:Sm,Bytes:Fe,CACHE_SIZE_UNLIMITED:DE,CollectionReference:He,DocumentReference:ne,DocumentSnapshot:qe,FieldPath:Sn,FieldValue:ut,Firestore:se,FirestoreError:V,GeoPoint:Je,LoadBundleTask:pm,PersistentCacheIndexManager:Lm,Query:Te,QueryCompositeFilterConstraint:Cn,QueryConstraint:Sr,QueryDocumentSnapshot:fs,QueryEndAtConstraint:qs,QueryFieldFilterConstraint:Pr,QueryLimitConstraint:Bs,QueryOrderByConstraint:fo,QuerySnapshot:je,QueryStartAtConstraint:Us,SnapshotMetadata:ct,Timestamp:ee,Transaction:Fm,VectorValue:Ke,WriteBatch:Mm,_AutoId:qi,_ByteString:fe,_DatabaseId:Lt,_DocumentKey:k,_EmptyAppCheckTokenProvider:r_,_EmptyAuthCredentialsProvider:Jh,_FieldPath:ce,_TestingHooks:tw,_cast:Q,_debugAssert:Yp,_internalAggregationQueryToProtoRunAggregationQueryRequest:tT,_internalQueryToProtoQueryTarget:eT,_isBase64Available:U_,_logWarn:ze,_validateIsNotUsedTogether:Xh,addDoc:KT,aggregateFieldEqual:pT,aggregateQuerySnapshotEqual:_T,and:oT,arrayRemove:HE,arrayUnion:WE,average:gT,clearIndexedDbPersistence:ME,collection:PE,collectionGroup:VE,connectFirestoreEmulator:mm,count:xm,deleteAllPersistentCacheIndexes:ew,deleteDoc:GT,deleteField:KE,disableNetwork:BE,disablePersistentCacheIndexAutoCreation:ZT,doc:gm,documentId:qE,documentSnapshotFromJSON:CT,enableIndexedDbPersistence:kE,enableMultiTabIndexedDbPersistence:OE,enableNetwork:LE,enablePersistentCacheIndexAutoCreation:XT,endAt:fT,endBefore:dT,ensureFirestoreConfigured:de,executeWrite:Vr,getAggregateFromServer:Nm,getCountFromServer:yT,getDoc:FT,getDocFromCache:LT,getDocFromServer:BT,getDocs:UT,getDocsFromCache:qT,getDocsFromServer:jT,getFirestore:NE,getPersistentCacheIndexManager:YT,increment:JE,initializeFirestore:xE,limit:uT,limitToLast:cT,loadBundle:Ca,maximum:XE,memoryEagerGarbageCollector:AT,memoryLocalCache:bT,memoryLruGarbageCollector:vT,minimum:YE,namedQuery:Im,onSnapshot:Da,onSnapshotResume:QT,onSnapshotsInSync:WT,or:iT,orderBy:aT,persistentLocalCache:RT,persistentMultipleTabManager:VT,persistentSingleTabManager:km,query:rT,queryEqual:Cu,querySnapshotFromJSON:DT,refEqual:CE,runTransaction:MT,serverTimestamp:QE,setDoc:zT,setIndexConfiguration:JT,setLogLevel:Jp,snapshotEqual:NT,startAfter:hT,startAt:lT,sum:mT,terminate:UE,updateDoc:$T,vector:ZE,waitForPendingWrites:FE,where:sT,writeBatch:HT},Symbol.toStringTag,{value:"Module"}));export{fw as A,Fp as B,ms as C,GT as D,Oh as E,pr as F,gm as G,$T as H,KT as I,KE as J,FT as K,Fh as L,zT as M,HT as N,pw as O,Mp as S,Np as _,NE as a,Ee as b,PE as c,J as d,hw as e,wg as f,UT as g,cw as h,xa as i,rw as j,ow as k,iw as l,sw as m,nw as n,Ai as o,dw as p,lw as q,rs as r,Qn as s,ka as t,Rg as u,Lp as v,Mt as w,Mh as x,aw as y,uw as z};
