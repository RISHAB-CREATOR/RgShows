"use strict";(()=>{const e=function(){const e=new Map,t=[["ts_popunder","true","","reload","1"],["__pf","1"],["npabp","1"],["clictune_pop","off"],["WHITELISTED_CLOSED","1"],["popunder","1"],["__gads","OK","","reload","1"],["4d8L2108","1","","reload","1"],["visits","1"],["customscript0","1"],["visited","1"],["inter","1","","reload","1"],["Ads","1"],["Ads","2"],["tracking_session_id","OK","","reload","1"],["Geo","OK"],["bitmovin_analytics_uuid","OK"]],o=new Map([["fullxh.com",0],["megaxh.com",0],["movingxh.world",0],["unlockxh4.com",0],["xhadult2.com",0],["xhadult3.com",0],["xhadult4.com",0],["xhadult5.com",0],["xhamster46.com",0],["xhday.com",0],["xhday1.com",0],["xhmoon5.com",0],["xhplanet1.com",0],["xhplanet2.com",0],["xhreal2.com",0],["xhreal3.com",0],["xhtab2.com",0],["xhtree.com",0],["xhvictory.com",0],["xhwebsite.com",0],["xhwebsite2.com",0],["xhwide1.com",0],["xhwide8.com",0],["aniwave.to",1],["anix.to",1],["flixwave.to",1],["fmoviesz.to",1],["twitchmetrics.net",2],["dlink2.net",3],["imgur.com",4],["xcity.org",5],["top16.net",[5,10]],["gourmetscans.net",6],["autosport.com",7],["motorsport.com",7],["smartkhabrinews.com",8],["iporntoo.com",9],["hentai.tv",11],["noticiasdehoje.biz",12],["jornaldigital.org",13],["fandom.com",[14,15]],["clickorlando.com",16]]),r=new Map([["hamsterix",0],["xhamster",0],["xhamster1",0],["xhamster10",0],["xhamster11",0],["xhamster12",0],["xhamster13",0],["xhamster14",0],["xhamster15",0],["xhamster16",0],["xhamster17",0],["xhamster18",0],["xhamster19",0],["xhamster20",0],["xhamster2",0],["xhamster3",0],["xhamster4",0],["xhamster5",0],["xhamster7",0],["xhamster8",0]]),n=new Map([]);function s(t="",o="",r=""){if(""===t)return;t=encodeURIComponent(t);const n=o.toLowerCase(),s=/^("?)(.+)\1$/.exec(n),i=s&&s[2]||n;if(!1===["accept","reject","accepted","rejected","notaccepted","allow","deny","allowed","disallow","enable","disable","enabled","disabled","ok","on","off","true","t","false","f","yes","y","no","n","necessary","required"].includes(i)){if(!1===/^\d+$/.test(i))return;if(parseInt(o,10)>15)return}!function(e=!1,t="",o="",r="",n="",s={}){const i=c(t);if(void 0!==i&&s.dontOverwrite)return;if(i===o&&s.reload)return;const a=[t,"=",o];""!==r&&a.push("; expires=",r);""===n?n="/":"none"===n&&(n="");if(""!==n&&"/"!==n)return;"/"===n&&a.push("; path=/");e&&(s.domain&&a.push(`; domain=${s.domain}`),a.push("; Secure"));try{document.cookie=a.join("")}catch(e){}s.reload&&c(t)===o&&window.location.reload()}(!1,t,o,"",r,function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,o={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>o.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>o.JSON_parseFn.call(o.JSON,...e),JSON_stringify:(...e)=>o.JSON_stringifyFn.call(o.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const o=!0!==t.canNegate||!1===e.startsWith("!");!1===o&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:o}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:o}:{pattern:e,expect:o}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,o=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(o?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const o=e.slice(t).reduce(((e,t,o,r)=>{if(0==(1&o)){const t=r[o+1],n=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[o],n])}return e}),[]);return this.Object_fromEntries(o)}};return e.set("safeSelf",o),o}().getExtraArgs(Array.from(arguments),3))}function c(e=""){for(const t of document.cookie.split(/\s*;\s*/)){const o=t.indexOf("=");if(-1!==o&&t.slice(0,o)===e)return t.slice(o+1).trim()}}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const a=i.length;if(0===a)return;const l=new Set,m=[];if(0!==n.size){for(let e=0;e<a;e++){const t=i.slice(e).join("."),o=n.get(t);o&&m.push(...o)}n.clear()}if(0!==o.size){const e=e=>{let t=o.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)m.includes(e)||l.add(e)}};for(let t=0;t<a;t++){e(i.slice(t).join("."))}e("*"),o.clear()}if(0!==r.size){const e=a-1;for(let t=0;t<e;t++)for(let o=e;o>t;o--){const e=i.slice(t,o).join(".");let n=r.get(e);if(void 0!==n){"number"==typeof n&&(n=[n]);for(const e of n)m.includes(e)||l.add(e)}}r.clear()}for(const e of l)try{s(...t[e])}catch(e){}t.length=0};e()})();