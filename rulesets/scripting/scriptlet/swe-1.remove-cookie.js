"use strict";(()=>{const e=function(){const e=new Map,t=[["lmt"],["/^ev_did|ev_sid/"]],n=new Map([["lexbase.se",0],["synonymer.se",1]]),o=new Map([]),r=new Map([]);function s(t=""){if("string"!=typeof t)return;const n=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const o=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==o?{re:new this.RegExp(o[1],o[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const o=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===o){const o=this.escapeRegexChars(e);return new RegExp(n?`^${o}$`:o,t)}try{return new RegExp(o[1],o[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,o)=>{if(0==(1&n)){const t=o[n+1],r=/^\d+$/.test(t)?parseInt(t,10):t;e.push([o[n],r])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}(),o=n.patternToRegex(t),r=n.getExtraArgs(Array.from(arguments),1),s=(e,t=500)=>{void 0===s.timer&&(s.timer=setTimeout((()=>{s.timer=void 0,e()}),t))},c=()=>{document.cookie.split(";").forEach((e=>{const t=e.indexOf("=");if(-1===t)return;const n=e.slice(0,t).trim();if(!1===o.test(n))return;const r=n+"=",s="; domain="+document.location.hostname,c="; domain=."+document.location.hostname;let i,a;const l=document.domain;l&&(l!==document.location.hostname&&(i="; domain=."+l),l.startsWith("www.")&&(a="; domain="+l.replace("www","")));const p="; path=/",u="; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=r+u,document.cookie=r+s+u,document.cookie=r+c+u,document.cookie=r+p+u,document.cookie=r+s+p+u,document.cookie=r+c+p+u,void 0!==i&&(document.cookie=r+i+p+u),void 0!==a&&(document.cookie=r+a+p+u)}))};if(c(),window.addEventListener("beforeunload",c),"string"!=typeof r.when)return;const i=["scroll","keydown"],a=r.when.split(/\s/);for(const e of a)!1!==i.includes(e)&&document.addEventListener(e,(()=>{s(c)}),{passive:!0})}const c=[];try{c.push(...document.location.hostname.split("."))}catch(e){}const i=c.length;if(0===i)return;const a=new Set,l=[];if(0!==r.size){for(let e=0;e<i;e++){const t=c.slice(e).join("."),n=r.get(t);n&&l.push(...n)}r.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(c.slice(t).join("."))}e("*"),n.clear()}if(0!==o.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=c.slice(t,n).join(".");let r=o.get(e);if(void 0!==r){"number"==typeof r&&(r=[r]);for(const e of r)l.includes(e)||a.add(e)}}o.clear()}for(const e of a)try{s(...t[e])}catch(e){}t.length=0};e()})();