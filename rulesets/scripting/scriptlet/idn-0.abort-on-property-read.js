"use strict";(()=>{const e=function(){const e=new Map,t=[["$.magnificPopup.open"]],n=new Map([["juraganfilm.ink",0]]),r=new Map([]),o=new Map([]);function c(t=""){if("string"!=typeof t)return;if(""===t)return;const n=function(){const t=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}(),n=String.fromCharCode(Date.now()%26+97)+t.Math_floor(982451653*t.Math_random()+982451653).toString(36),r=self.onerror;return self.onerror=function(e,...t){return!("string"!=typeof e||!e.includes(n))||(r instanceof Function?r.call(this,e,...t):void 0)}.bind(),n}(),r=function(){throw new ReferenceError(n)},o=function(e,t){const n=t.indexOf(".");if(-1===n){const n=Object.getOwnPropertyDescriptor(e,t);return void(n&&n.get===r||Object.defineProperty(e,t,{get:r,set:function(){}}))}const c=t.slice(0,n);let s=e[c];if(t=t.slice(n+1),s)return void o(s,t);const i=Object.getOwnPropertyDescriptor(e,c);i&&void 0!==i.set||Object.defineProperty(e,c,{get:function(){return s},set:function(e){s=e,e instanceof Object&&o(e,t)}})},c=window;o(c,t)}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const i=s.length;if(0===i)return;const a=new Set,p=[];if(0!==o.size){for(let e=0;e<i;e++){const t=s.slice(e).join("."),n=o.get(t);n&&p.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)p.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(s.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=s.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)p.includes(e)||a.add(e)}}r.clear()}for(const e of a)try{c(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_abortOnPropertyRead=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_abortOnPropertyRead);r=t.URL.createObjectURL(o);const c=t.document;n=c.createElement("script"),n.async=!1,n.src=r,(c.head||c.documentElement||c).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_abortOnPropertyRead}})();