"use strict";(()=>{const e=function(){const e=new Map,t=[["vc_url"],["watermarkAdData"],["document.onclick","checkCookie"],["disableSelection","reEnable"],["document.onselectstart","killCopy"],["eif"],["document.onclick","Hamisheonlinepaps"],["jQuery","Drupal"],["jQuery","contextmenu"],["reEnable"],["document.oncontextmenu"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["pa_vc_url"],["document.write","renderAds"]],n=new Map([["androidparsi.ir",0],["dailymobile.ir",0],["tarfandha.org",0],["alaatv.com",1],["bandmoviez.one",2],["coffeeapps.ir",3],["fileboro.com",4],["farnet.io",5],["hamisheonline.com",6],["iranstar.com",7],["itarfand.com",8],["jafekri.com",[9,10,11,12]],["jeyran.net",10],["searchline.ir",10],["takmili.com",10],["vakil.net",10],["mybia4music.com",13],["sclinic.ir",3],["tabnak.ir",14]]),r=new Map([]),o=new Map([]);function c(...t){!function(e){if(document.documentElement)return void e();const t=new MutationObserver((()=>{t.disconnect(),e()}));t.observe(document,{childList:!0})}((()=>{!function(t="",n="",r=""){if("string"!=typeof t)return;if(""===t)return;const o=i(),c=o.patternToRegex(n),s=o.patternToRegex(r),a=o.getExtraArgs(Array.from(arguments),3),l=document.currentScript,f=t.split(".");let u,p,d=window;for(;(u=f.shift(),0!==f.length)&&u in d!=!1;)if(d=d[u],d instanceof Object==!1)return;let g=Object.getOwnPropertyDescriptor(d,u);g instanceof Object!=!1&&g.get instanceof Function!=!1||(p=d[u],g=void 0);const m=function(t){if(t instanceof Object==!1)return!1;return e.has("canDebug")&&t.log}(a),h=(function(t){if(t instanceof Object==!1)return!1;e.has("canDebug")&&t.debug}(a),function(){const e=i(),t=String.fromCharCode(Date.now()%26+97)+e.Math_floor(982451653*e.Math_random()+982451653).toString(36),n=self.onerror;return self.onerror=function(e,...r){return!("string"!=typeof e||!e.includes(t))||(n instanceof Function?n.call(this,e,...r):void 0)}.bind(),t}()),b=new WeakMap,O=e=>{let t=e.textContent;if(""!==t.trim())return t;if(b.has(e))return b.get(e);const[,n,r]=/^data:([^,]*),(.+)$/.exec(e.src.trim())||["","",""];try{if(!0===n.endsWith(";base64"))t=self.atob(r);else t=self.decodeURIComponent(r)}catch(e){}return b.set(e,t),t},y=()=>{const e=document.currentScript;if(e instanceof HTMLScriptElement==!1)return;if(e===l)return;if(""!==r&&!1===s.test(e.src))return;m&&""!==e.src&&o.uboLog(`matched src: ${e.src}`);const t=O(e);if(!1!==c.test(t))throw m&&o.uboLog(`matched script text: ${t}`),new ReferenceError(h)};try{Object.defineProperty(d,u,{get:function(){return y(),g instanceof Object?g.get.call(d):p},set:function(e){y(),g instanceof Object?g.set.call(d,e):p=e}})}catch(e){m&&o.uboLog(e)}}(...t)}))}function i(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const a=s.length;if(0===a)return;const l=new Set,f=[];if(0!==o.size){for(let e=0;e<a;e++){const t=s.slice(e).join("."),n=o.get(t);n&&f.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)f.includes(e)||l.add(e)}};for(let t=0;t<a;t++){e(s.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=a-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=s.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)f.includes(e)||l.add(e)}}r.clear()}for(const e of l)try{c(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_abortCurrentScript=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_abortCurrentScript);r=t.URL.createObjectURL(o);const c=t.document;n=c.createElement("script"),n.async=!1,n.src=r,(c.head||c.documentElement||c).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_abortCurrentScript}})();