"use strict";(()=>{const e=function(){const e=new Map,t=[["ad-controls",".bitmovinplayer-container.ad-controls"],["hidden","button"],["disabled",".get-link"],["twig-body"],["get-link",'.ybtn.get-link[target="_blank"]',"stay"],["get-link",'.btn-success.get-link[target="_blank"]',"stay"],["has-sidebar-adz|DashboardPage-inner",'div[class^="DashboardPage-inner"]',"stay"],["hasStickyAd",'div.hasStickyAd[class^="SetPage"]',"stay"],["has-adz","div.has-adz","stay"],["cnx-ad-container|cnx-ad-bid-slot"],["vjs-hidden",".vjs-control-bar","stay"],["hidden",".panel-body > .text-center > button"],["disabled","a#redirect-btn"],["td-ad-background-link"],["download-font-button2",".download-font-button"],["unclickable","","stay"],["is-hidden"]],n=new Map([["sbs.com.au",0],["apps2app.com",1],["appsmodz.com",1],["freebrightsoft.com",2],["xda-developers.com",3],["paid4.link",4],["go.gets4link.com",5],["quizlet.com",[6,7,8]],["funker530.com",9],["av01.tv",10],["so1.asia",11],["top1iq.com",12],["artribune.com",13],["bestfonts.pro",14],["falatron.com",15],["sinonimos.de",16]]),o=new Map([]),r=new Map([]);function s(t="",n="",o=""){if("string"!=typeof t)return;if(""===t)return;const r=t.split(/\s*\|\s*/);""===n&&(n="."+r.map((e=>CSS.escape(e))).join(",."));const s=/\bstay\b/.test(o);let a;const i=function(){a=void 0;try{const e=document.querySelectorAll(n);for(const t of e)t.classList.remove(...r)}catch(e){}s||"complete"===document.readyState&&c.disconnect()},c=new MutationObserver((e=>{if(void 0!==a)return;let t=!0;for(let n=0;n<e.length&&t;n++){const{type:o,addedNodes:r,removedNodes:s}=e[n];"attributes"===o&&(t=!1);for(let e=0;e<r.length&&t;e++)if(1===r[e].nodeType){t=!1;break}for(let e=0;e<s.length&&t;e++)if(1===s[e].nodeType){t=!1;break}}t||(a=self.requestIdleCallback(i,{timeout:67}))}));!function(t,n){const o=e=>{const t={loading:1,interactive:2,end:2,2:2,complete:3,idle:3,3:3},n=Array.isArray(e)?e:[e];for(const e of n){const n=`${e}`;if(!1!==t.hasOwnProperty(n))return t[n]}return 0},r=o(n);if(o(document.readyState)>=r)return void t();const s=()=>{o(document.readyState)<r||(t(),a.removeEventListener.apply(document,i))},a=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const o=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==o?{re:new this.RegExp(o[1],o[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const o=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===o){const o=this.escapeRegexChars(e);return new RegExp(n?`^${o}$`:o,t)}try{return new RegExp(o[1],o[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,o)=>{if(0==(1&n)){const t=o[n+1],r=/^\d+$/.test(t)?parseInt(t,10):t;e.push([o[n],r])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}(),i=["readystatechange",s,{capture:!0}];a.addEventListener.apply(document,i)}((()=>{i(),c.observe(document,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})}),/\bcomplete\b/.test(o)?"idle":"loading")}const a=[];try{a.push(...document.location.hostname.split("."))}catch(e){}const i=a.length;if(0===i)return;const c=new Set,l=[];if(0!==r.size){for(let e=0;e<i;e++){const t=a.slice(e).join("."),n=r.get(t);n&&l.push(...n)}r.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||c.add(e)}};for(let t=0;t<i;t++){e(a.slice(t).join("."))}e("*"),n.clear()}if(0!==o.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=a.slice(t,n).join(".");let r=o.get(e);if(void 0!==r){"number"==typeof r&&(r=[r]);for(const e of r)l.includes(e)||c.add(e)}}o.clear()}for(const e of c)try{s(...t[e])}catch(e){}t.length=0};e()})();