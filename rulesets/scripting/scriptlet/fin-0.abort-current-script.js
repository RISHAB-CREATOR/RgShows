"use strict";(()=>{const e=function(){const e=new Map,t=[["testPrebid"]],n=new Map([["findit.fi",0]]),r=new Map([]),o=new Map([]);function c(...t){!function(e){if(document.documentElement)return void e();const t=new MutationObserver((()=>{t.disconnect(),e()}));t.observe(document,{childList:!0})}((()=>{!function(t="",n="",r=""){if("string"!=typeof t)return;if(""===t)return;const o=s(),c=o.patternToRegex(n),i=o.patternToRegex(r),a=o.getExtraArgs(Array.from(arguments),3),f=document.currentScript,u=t.split(".");let l,p,g=window;for(;(l=u.shift(),0!==u.length)&&l in g!=!1;)if(g=g[l],g instanceof Object==!1)return;let d=Object.getOwnPropertyDescriptor(g,l);d instanceof Object!=!1&&d.get instanceof Function!=!1||(p=g[l],d=void 0);const h=function(t){if(t instanceof Object==!1)return!1;return e.has("canDebug")&&t.log}(a),b=(function(t){if(t instanceof Object==!1)return!1;e.has("canDebug")&&t.debug}(a),function(){const e=s(),t=String.fromCharCode(Date.now()%26+97)+e.Math_floor(982451653*e.Math_random()+982451653).toString(36),n=self.onerror;return self.onerror=function(e,...r){return!("string"!=typeof e||!e.includes(t))||(n instanceof Function?n.call(this,e,...r):void 0)}.bind(),t}()),O=new WeakMap,m=e=>{let t=e.textContent;if(""!==t.trim())return t;if(O.has(e))return O.get(e);const[,n,r]=/^data:([^,]*),(.+)$/.exec(e.src.trim())||["","",""];try{if(!0===n.endsWith(";base64"))t=self.atob(r);else t=self.decodeURIComponent(r)}catch(e){}return O.set(e,t),t},x=()=>{const e=document.currentScript;if(e instanceof HTMLScriptElement==!1)return;if(e===f)return;if(""!==r&&!1===i.test(e.src))return;h&&""!==e.src&&o.uboLog(`matched src: ${e.src}`);const t=m(e);if(!1!==c.test(t))throw h&&o.uboLog(`matched script text: ${t}`),new ReferenceError(b)};try{Object.defineProperty(g,l,{get:function(){return x(),d instanceof Object?d.get.call(g):p},set:function(e){x(),d instanceof Object?d.set.call(g,e):p=e}})}catch(e){h&&o.uboLog(e)}}(...t)}))}function s(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const a=i.length;if(0===a)return;const f=new Set,u=[];if(0!==o.size){for(let e=0;e<a;e++){const t=i.slice(e).join("."),n=o.get(t);n&&u.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)u.includes(e)||f.add(e)}};for(let t=0;t<a;t++){e(i.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=a-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=i.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)u.includes(e)||f.add(e)}}r.clear()}for(const e of f)try{c(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_abortCurrentScript=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_abortCurrentScript);r=t.URL.createObjectURL(o);const c=t.document;n=c.createElement("script"),n.async=!1,n.src=r,(c.head||c.documentElement||c).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_abortCurrentScript}})();