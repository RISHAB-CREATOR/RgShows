"use strict";(()=>{const e=function(){const e=new Map,t=[["cookieMessageDisagree","true"],["terms-and-policy-accepted","true"],["ACCEPT_LGPD","true"],["acceptCookies","false"],["terms-and-policy-accepted","yes"],["CookieBannerShown","yes"]],n=new Map([["erco.com",0],["smartwielen.lu",1],["c6bank.com.br",2],["gedik.com",3],["collato.com",[4,5]]]),r=new Map([]),o=new Map([]);function s(t="",n=""){!function(t="local",n=!1,r="",o=""){if(""===r)return;"emptyArr"===o?o="[]":"emptyObj"===o&&(o="{}");const s=["","undefined","null","false","true","on","off","yes","no","{}","[]",'""',"$remove$"];if(n)"$now$"===o?o=Date.now():"$currentDate$"===o?o=`${Date()}`:"$currentISODate$"===o&&(o=(new Date).toISOString());else{const e=o.toLowerCase(),t=/^("?)(.+)\1$/.exec(e),n=t&&t[2]||e;if(!1===s.includes(n)){if(!1===/^\d+$/.test(n))return;if(parseInt(n,10)>32767)return}}try{const n=self[`${t}Storage`];if("$remove$"===o){const t=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}(),o=t.patternToRegex(r,void 0,!0),s=[];for(let e=0,t=n.length;e<t;e++){const t=n.key(e);o.test(t)&&s.push(t)}for(const e of s)n.removeItem(e)}else n.setItem(r,`${o}`)}catch(e){}}("session",!1,t,n)}const c=[];try{c.push(...document.location.hostname.split("."))}catch(e){}const i=c.length;if(0===i)return;const a=new Set,l=[];if(0!==o.size){for(let e=0;e<i;e++){const t=c.slice(e).join("."),n=o.get(t);n&&l.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(c.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=c.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)l.includes(e)||a.add(e)}}r.clear()}for(const e of a)try{s(...t[e])}catch(e){}t.length=0};e()})();