"use strict";(()=>{const e=function(){const e=new Map,t=[["adsBlocked"],["/chp_?ad/"]],n=new Map([["aimsolutions.nl",0],["112amersfoort.nl",1],["112amsterdam.nl",1],["112apeldoorn.nl",1],["112arnhem.nl",1],["112assen.nl",1],["112barneveld.nl",1],["112bunschoten.nl",1],["112doetinchem.nl",1],["112drenthe.nl",1],["112ede.nl",1],["112eindhoven.nl",1],["112emmen.nl",1],["112flevoland.nl",1],["112harderwijk.nl",1],["112hilversum.nl",1],["112inbeeld.nl",1],["112lelystad.nl",1],["112meppel.nl",1],["112nijkerk.nl",1],["112overijssel.nl",1],["112ridderkerk.nl",1],["112rotterdam.nl",1],["112scherpenzeel.nl",1],["112schiedam.nl",1],["112vallei.nl",1],["112vechtdal.nl",1],["112veenendaal.nl",1],["112wageningen.nl",1],["112zeewolde.nl",1],["112zwolle.nl",1],["vrides.nl",1]]),r=new Map([]),o=new Map([]);function l(t=""){if("string"!=typeof t)return;const n=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}().patternToRegex(t);window.eval=new Proxy(window.eval,{apply:function(e,t,r){const o=r[0];if(!n.test(o.toString()))return e.apply(t,r)}})}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const c=s.length;if(0===c)return;const a=new Set,i=[];if(0!==o.size){for(let e=0;e<c;e++){const t=s.slice(e).join("."),n=o.get(t);n&&i.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)i.includes(e)||a.add(e)}};for(let t=0;t<c;t++){e(s.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=c-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=s.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)i.includes(e)||a.add(e)}}r.clear()}for(const e of a)try{l(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_noEvalIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_noEvalIf);r=t.URL.createObjectURL(o);const l=t.document;n=l.createElement("script"),n.async=!1,n.src=r,(l.head||l.documentElement||l).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_noEvalIf}})();