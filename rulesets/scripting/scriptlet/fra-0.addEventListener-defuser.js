"use strict";(()=>{const e=function(){const e=new Map,t=[["load","isAdblock"],["DOMContentLoaded","adsbygoogle"],["DOMContentLoaded","interstitial"]],n=new Map([["cyclismactu.net",0],["lecourrier-du-soir.com",1],["macg.co",2]]),r=new Map([]),o=new Map([]);function c(t="",n=""){const r=s(),o=r.getExtraArgs(Array.from(arguments),2),c=r.patternToRegex(t,void 0,!0),i=r.patternToRegex(n),a=function(t){if(t instanceof Object==!1)return!1;return e.has("canDebug")&&t.log}(o),l=(function(t){if(t instanceof Object==!1)return!1;e.has("canDebug")&&t.debug}(o),o.elements||void 0),p=()=>{const e={apply:function(e,t,n){let o,s;try{o=String(n[0]),s=n[1]instanceof Function?String(r.Function_toString(n[1])):String(n[1])}catch(e){}if(!((e,t,n)=>{if(void 0!==l&&!1===Array.from(document.querySelectorAll(l)).includes(e))return!1;const o=r.RegExp_test.call(c,t),s=r.RegExp_test.call(i,n),p=o||s,u=o&&s;return(1===a&&u||2===a&&p||3===a)&&r.uboLog(`addEventListener('${t}', ${n})`),u})(t,o,s))return Reflect.apply(e,t,n)},get:(e,t,n)=>"toString"===t?e.toString.bind(e):Reflect.get(e,t,n)};self.EventTarget.prototype.addEventListener=new Proxy(self.EventTarget.prototype.addEventListener,e)};!function(e,t){const n=e=>{const t={loading:1,interactive:2,end:2,2:2,complete:3,idle:3,3:3},n=Array.isArray(e)?e:[e];for(const e of n){const n=`${e}`;if(!1!==t.hasOwnProperty(n))return t[n]}return 0},r=n(t);if(n(document.readyState)>=r)return void e();const o=()=>{n(document.readyState)<r||(e(),c.removeEventListener.apply(document,i))},c=s(),i=["readystatechange",o,{capture:!0}];c.addEventListener.apply(document,i)}((()=>{p()}),o.runAt)}function s(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const a=i.length;if(0===a)return;const l=new Set,p=[];if(0!==o.size){for(let e=0;e<a;e++){const t=i.slice(e).join("."),n=o.get(t);n&&p.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)p.includes(e)||l.add(e)}};for(let t=0;t<a;t++){e(i.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=a-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=i.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)p.includes(e)||l.add(e)}}r.clear()}for(const e of l)try{c(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_addEventListenerDefuser=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_addEventListenerDefuser);r=t.URL.createObjectURL(o);const c=t.document;n=c.createElement("script"),n.async=!1,n.src=r,(c.head||c.documentElement||c).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_addEventListenerDefuser}})();