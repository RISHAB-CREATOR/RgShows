"use strict";(()=>{const e=function(){const e=new Map,t=[["advanced_ads_check_adblocker"]],r=new Map([["doorbraak.be",0],["gowiththevlo.nl",0]]),n=new Map([]),o=new Map([]);function c(t=""){if("string"!=typeof t)return;if(""===t)return;const r=function(){const t=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,r={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>r.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>r.JSON_parseFn.call(r.JSON,...e),JSON_stringify:(...e)=>r.JSON_stringifyFn.call(r.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const r=!0!==t.canNegate||!1===e.startsWith("!");!1===r&&(e=e.slice(1));const n=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==n?{re:new this.RegExp(n[1],n[2]||t.flags),expect:r}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:r}:{pattern:e,expect:r}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,r=!1){if(""===e)return/^/;const n=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===n){const n=this.escapeRegexChars(e);return new RegExp(r?`^${n}$`:n,t)}try{return new RegExp(n[1],n[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const r=e.slice(t).reduce(((e,t,r,n)=>{if(0==(1&r)){const t=n[r+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([n[r],o])}return e}),[]);return this.Object_fromEntries(r)}};return e.set("safeSelf",r),r}(),r=String.fromCharCode(Date.now()%26+97)+t.Math_floor(982451653*t.Math_random()+982451653).toString(36),n=self.onerror;return self.onerror=function(e,...t){return!("string"!=typeof e||!e.includes(r))||(n instanceof Function?n.call(this,e,...t):void 0)}.bind(),r}();let n=window;for(;;){const e=t.indexOf(".");if(-1===e)break;if(n=n[t.slice(0,e)],n instanceof Object==!1)return;t=t.slice(e+1)}delete n[t],Object.defineProperty(n,t,{set:function(){throw new ReferenceError(r)}})}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const i=s.length;if(0===i)return;const a=new Set,l=[];if(0!==o.size){for(let e=0;e<i;e++){const t=s.slice(e).join("."),r=o.get(t);r&&l.push(...r)}o.clear()}if(0!==r.size){const e=e=>{let t=r.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(s.slice(t).join("."))}e("*"),r.clear()}if(0!==n.size){const e=i-1;for(let t=0;t<e;t++)for(let r=e;r>t;r--){const e=s.slice(t,r).join(".");let o=n.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)l.includes(e)||a.add(e)}}n.clear()}for(const e of a)try{c(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let r,n;try{t.uBOL_abortOnPropertyWrite=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_abortOnPropertyWrite);n=t.URL.createObjectURL(o);const c=t.document;r=c.createElement("script"),r.async=!1,r.src=n,(c.head||c.documentElement||c).append(r)}catch(e){console.error(e)}n&&(r&&r.remove(),t.URL.revokeObjectURL(n)),delete t.uBOL_abortOnPropertyWrite}})();