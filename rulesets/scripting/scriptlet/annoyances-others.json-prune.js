"use strict";(()=>{const t=function(){const t=new Map,e=[["options.auto_play"],["playlist.options.auto_play_when_visible"],["data.meta.require_addon data.meta.require_video data.meta.require_notifications data.meta.require_og_ads data.meta.require_web data.meta.require_countdown data.meta.require_related_topics data.meta.require_custom_ad_step data.meta.og_ads_offers data.displayAds data.linkCustomAdOffers"]],n=new Map([["tvn.pl",[0,1]],["tvn24.pl",0],["linkvertise.com",2]]),r=new Map([]),o=new Map([]);function s(t="",e="",n=""){const r=i(),o=r.initPattern(n,{canNegate:!0}),s=r.getExtraArgs(Array.from(arguments),3);JSON.parse=new Proxy(JSON.parse,{apply:function(n,r,i){const a=Reflect.apply(n,r,i);return c(a,t,e,o,s)||a}})}function c(e,n,r,o={matchAll:!0},s={}){if("string"!=typeof n)return;const l=i(),f=""!==n?n.split(/ +/):[],u=0!==f.length&&""!==r?r.split(/ +/):[],p=function(e){if(e instanceof Object==!1)return!1;return t.has("canDebug")&&e.log}({log:""===n||s.log}),g=l.patternToRegex(!0===p?r:"");if(!0!==o.matchAll&&!1===function(t,e=""){const n=i(),r=function(){const t=i(),e=String.fromCharCode(Date.now()%26+97)+t.Math_floor(982451653*t.Math_random()+982451653).toString(36),n=self.onerror;return self.onerror=function(t,...r){return!("string"!=typeof t||!t.includes(e))||(n instanceof Function?n.call(this,t,...r):void 0)}.bind(),e}(),o=new n.Error(r),s=new URL(self.location.href);s.hash="";const c=/(.*?@)?(\S+)(:\d+):\d+\)?$/,a=[];for(let t of o.stack.split(/[\n\r]+/)){if(t.includes(r))continue;t=t.trim();const e=n.RegExp_exec.call(c,t);if(null===e)continue;let o=e[2];o.startsWith("(")&&(o=o.slice(1)),o===s.href?o="inlineScript":o.startsWith("<anonymous>")&&(o="injectedScript");let i=void 0!==e[1]?e[1].slice(0,-1):t.slice(0,e.index).trim();i.startsWith("at")&&(i=i.slice(2).trim());let l=e[3];a.push(" "+`${i} ${o}${l}:1`.trim())}a[0]="stackDepth:"+(a.length-1);const l=a.join("\t"),f=!0!==t.matchAll&&n.testPattern(t,l);("all"===e||"match"===e&&f||"nomatch"===e&&!f)&&n.uboLog(l.replace(/\t/g,"\n"));return f}(o,s.logstack))return;void 0===c.mustProcess&&(c.mustProcess=(t,e)=>{for(const n of e)if(!1===a(t,n))return!1;return!0},c.logJson=(t,e,n)=>{!1!==n.test(t)&&i().uboLog("objectPrune()",e,location.hostname,t)});const d=p?l.JSON_stringify(e,null,2):"";if(!0!==p&&"all"!==p||c.logJson(d,`prune:"${n}" log:"${p}"`,g),0===f.length)return;let h="nomatch";if(c.mustProcess(e,u))for(const t of f)a(e,t,!0)&&(h="match");return p===h&&c.logJson(d,`prune:"${n}" log:"${p}"`,g),"match"===h?e:void 0}function i(){if(t.has("safeSelf"))return t.get("safeSelf");const e=globalThis,n={Array_from:Array.from,Error:e.Error,Function_toStringFn:e.Function.prototype.toString,Function_toString:t=>n.Function_toStringFn.call(t),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:e.RegExp,RegExp_test:e.RegExp.prototype.test,RegExp_exec:e.RegExp.prototype.exec,Request_clone:e.Request.prototype.clone,XMLHttpRequest:e.XMLHttpRequest,addEventListener:e.EventTarget.prototype.addEventListener,removeEventListener:e.EventTarget.prototype.removeEventListener,fetch:e.fetch,JSON:e.JSON,JSON_parseFn:e.JSON.parse,JSON_stringifyFn:e.JSON.stringify,JSON_parse:(...t)=>n.JSON_parseFn.call(n.JSON,...t),JSON_stringify:(...t)=>n.JSON_stringifyFn.call(n.JSON,...t),log:console.log.bind(console),uboLog(...e){!1!==t.has("canDebug")&&0!==e.length&&""!=`${e[0]}`&&this.log("[uBO]",...e)},escapeRegexChars:t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(t,e={}){if(""===t)return{matchAll:!0};const n=!0!==e.canNegate||!1===t.startsWith("!");!1===n&&(t=t.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(t);return null!==r?{re:new this.RegExp(r[1],r[2]||e.flags),expect:n}:void 0!==e.flags?{re:new this.RegExp(this.escapeRegexChars(t),e.flags),expect:n}:{pattern:t,expect:n}},testPattern(t,e){return!!t.matchAll||(t.re?this.RegExp_test.call(t.re,e)===t.expect:e.includes(t.pattern)===t.expect)},patternToRegex(t,e=void 0,n=!1){if(""===t)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(t);if(null===r){const r=this.escapeRegexChars(t);return new RegExp(n?`^${r}$`:r,e)}try{return new RegExp(r[1],r[2]||void 0)}catch(t){}return/^/},getExtraArgs(t,e=0){const n=t.slice(e).reduce(((t,e,n,r)=>{if(0==(1&n)){const e=r[n+1],o=/^\d+$/.test(e)?parseInt(e,10):e;t.push([r[n],o])}return t}),[]);return this.Object_fromEntries(n)}};return t.set("safeSelf",n),n}function a(t,e,n=!1){let r=t,o=e;for(;;){if("object"!=typeof r||null===r)return!1;const t=o.indexOf(".");if(-1===t){if(!1===n)return r.hasOwnProperty(o);let t=!1;if("*"===o)for(const e in r)!1!==r.hasOwnProperty(e)&&(delete r[e],t=!0);else r.hasOwnProperty(o)&&(delete r[o],t=!0);return t}const e=o.slice(0,t);if("[]"===e&&Array.isArray(r)||"*"===e&&r instanceof Object){const e=o.slice(t+1);let s=!1;for(const t of Object.keys(r))s=a(r[t],e,n)||s;return s}if(!1===r.hasOwnProperty(e))return!1;r=r[e],o=o.slice(t+1)}return!0}const l=[];try{l.push(...document.location.hostname.split("."))}catch(t){}const f=l.length;if(0===f)return;const u=new Set,p=[];if(0!==o.size){for(let t=0;t<f;t++){const e=l.slice(t).join("."),n=o.get(e);n&&p.push(...n)}o.clear()}if(0!==n.size){const t=t=>{let e=n.get(t);if(void 0!==e){"number"==typeof e&&(e=[e]);for(const t of e)p.includes(t)||u.add(t)}};for(let e=0;e<f;e++){t(l.slice(e).join("."))}t("*"),n.clear()}if(0!==r.size){const t=f-1;for(let e=0;e<t;e++)for(let n=t;n>e;n--){const t=l.slice(e,n).join(".");let o=r.get(t);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const t of o)p.includes(t)||u.add(t)}}r.clear()}for(const t of u)try{s(...e[t])}catch(t){}e.length=0};if("object"!=typeof wrappedJSObject)return t();{const e=self.wrappedJSObject;let n,r;try{e.uBOL_jsonPrune=cloneInto([["(",t.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new e.Blob(...e.uBOL_jsonPrune);r=e.URL.createObjectURL(o);const s=e.document;n=s.createElement("script"),n.async=!1,n.src=r,(s.head||s.documentElement||s).append(n)}catch(t){console.error(t)}r&&(n&&n.remove(),e.URL.revokeObjectURL(r)),delete e.uBOL_jsonPrune}})();