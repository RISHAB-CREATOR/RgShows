"use strict";(()=>{const e=function(){const e=new Map,t=[[]],n=new Map([["hosszupuskasub.com",0]]),o=new Map([]),r=new Map([]);function s(t="",n="",o=""){const r=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const o=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==o?{re:new this.RegExp(o[1],o[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const o=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===o){const o=this.escapeRegexChars(e);return new RegExp(n?`^${o}$`:o,t)}try{return new RegExp(o[1],o[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,o)=>{if(0==(1&n)){const t=o[n+1],r=/^\d+$/.test(t)?parseInt(t,10):t;e.push([o[n],r])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}(),s=!1===t.startsWith("!");!1===s&&(t=t.slice(1));const c=r.patternToRegex(t);let i=parseInt(n);isNaN(i)&&(i=-1);const a=function(t){if(t instanceof Object==!1)return!1;return e.has("canDebug")&&t.log}(r.getExtraArgs(Array.from(arguments),3)),p=function(e,t,n){const o=document.createElement(e);return o[t]=n,o.style.setProperty("height","1px","important"),o.style.setProperty("position","fixed","important"),o.style.setProperty("top","-1px","important"),o.style.setProperty("width","1px","important"),document.body.appendChild(o),setTimeout((()=>{o.remove()}),1e3*i),o};window.open=new Proxy(window.open,{apply:function(e,t,n){const l=n.join(" ");if(a&&r.uboLog("window.open:",l),c.test(l)!==s)return Reflect.apply(e,t,n);if(i<0)return null;let f=("obj"===o?p("object","data",...n):p("iframe","src",...n)).contentWindow;if("object"==typeof f&&null!==f)Object.defineProperty(f,"closed",{value:!1});else{const e=function(){}.bind(self);f=new Proxy(self,{get:function(t,n){if("closed"===n)return!1;return"function"==typeof Reflect.get(...arguments)?e:t[n]},set:function(){return Reflect.set(...arguments)}})}return a&&(f=new Proxy(f,{get:function(e,t){return r.uboLog("window.open / get",t,"===",e[t]),Reflect.get(...arguments)},set:function(e,t,n){return r.uboLog("window.open / set",t,"=",n),Reflect.set(...arguments)}})),f}})}const c=[];try{c.push(...document.location.hostname.split("."))}catch(e){}const i=c.length;if(0===i)return;const a=new Set,p=[];if(0!==r.size){for(let e=0;e<i;e++){const t=c.slice(e).join("."),n=r.get(t);n&&p.push(...n)}r.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)p.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(c.slice(t).join("."))}e("*"),n.clear()}if(0!==o.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=c.slice(t,n).join(".");let r=o.get(e);if(void 0!==r){"number"==typeof r&&(r=[r]);for(const e of r)p.includes(e)||a.add(e)}}o.clear()}for(const e of a)try{s(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,o;try{t.uBOL_noWindowOpenIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const r=new t.Blob(...t.uBOL_noWindowOpenIf);o=t.URL.createObjectURL(r);const s=t.document;n=s.createElement("script"),n.async=!1,n.src=o,(s.head||s.documentElement||s).append(n)}catch(e){console.error(e)}o&&(n&&n.remove(),t.URL.revokeObjectURL(o)),delete t.uBOL_noWindowOpenIf}})();