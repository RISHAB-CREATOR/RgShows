"use strict";(()=>{const e=function(){const e=new Map,t=[["warnadb","1"],["p_view","true"],["q_pop_noel","true"],["mpf_popup_desktop","true"]],n=new Map([["pianoweb.fr",0],["jeune-gay.fr",1],["lexpress.fr",2],["monpetitforfait.com",3]]),r=new Map([]),o=new Map([]);function s(t="",n="",r=""){if(""===t)return;t=encodeURIComponent(t);const o=n.toLowerCase(),s=/^("?)(.+)\1$/.exec(o),i=s&&s[2]||o;if(!1===["accept","reject","accepted","rejected","notaccepted","allow","deny","allowed","disallow","enable","disable","enabled","disabled","ok","on","off","true","t","false","f","yes","y","no","n","necessary","required"].includes(i)){if(!1===/^\d+$/.test(i))return;if(parseInt(n,10)>15)return}!function(e=!1,t="",n="",r="",o="",s={}){const i=c(t);if(void 0!==i&&s.dontOverwrite)return;if(i===n&&s.reload)return;const a=[t,"=",n];""!==r&&a.push("; expires=",r);""===o?o="/":"none"===o&&(o="");if(""!==o&&"/"!==o)return;"/"===o&&a.push("; path=/");e&&(s.domain&&a.push(`; domain=${s.domain}`),a.push("; Secure"));try{document.cookie=a.join("")}catch(e){}s.reload&&c(t)===n&&window.location.reload()}(!1,t,n,"",r,function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}().getExtraArgs(Array.from(arguments),3))}function c(e=""){for(const t of document.cookie.split(/\s*;\s*/)){const n=t.indexOf("=");if(-1!==n&&t.slice(0,n)===e)return t.slice(n+1).trim()}}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const a=i.length;if(0===a)return;const p=new Set,l=[];if(0!==o.size){for(let e=0;e<a;e++){const t=i.slice(e).join("."),n=o.get(t);n&&l.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||p.add(e)}};for(let t=0;t<a;t++){e(i.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=a-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=i.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)l.includes(e)||p.add(e)}}r.clear()}for(const e of p)try{s(...t[e])}catch(e){}t.length=0};e()})();