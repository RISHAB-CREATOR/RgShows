"use strict";(()=>{const e=function(){const e=new Map,t=[["/advert.js"],["static.doubleclick.net/instream/ad_status.js"],["pagead2.googlesyndication.com"],["spotxchange.com"]],n=new Map([["kuponuna148.com",0],["kuponuna149.com",0],["kuponuna150.com",0],["kuponuna151.com",0],["kuponuna152.com",0],["kuponuna153.com",0],["kuponuna154.com",0],["kuponuna155.com",0],["kuponuna156.com",0],["kuponuna157.com",0],["kuponuna158.com",0],["kuponuna159.com",0],["kuponuna160.com",0],["kuponuna161.com",0],["kuponuna162.com",0],["kuponuna163.com",0],["kuponuna164.com",0],["kuponuna165.com",0],["kuponuna166.com",0],["kuponuna167.com",0],["kuponuna168.com",0],["kuponuna169.com",0],["kuponuna170.com",0],["canlitribun53.com",0],["canlitribun54.com",0],["canlitribun55.com",0],["canlitribun56.com",0],["canlitribun57.com",0],["canlitribun58.com",0],["canlitribun59.com",0],["canlitribun60.com",0],["canlitribun61.com",0],["canlitribun62.com",0],["canlitribun63.com",0],["canlitribun64.com",0],["canlitribun65.com",0],["canlitribun66.com",0],["canlitribun67.com",0],["canlitribun68.com",0],["canlitribun69.com",0],["canlitribun70.com",0],["mangawt.com",1],["uzaymanga.com",2],["ruyamanga.com",2],["tv8.com.tr",3]]),r=new Map([]),o=new Map([]);function s(t="",n=""){if("string"!=typeof t)return;const r=new WeakMap,o=function(e,t=""){const n=a(),r=new Map;if(void 0===e||""===e)return r;const o={canNegate:!0};for(const s of e.split(/\s+/)){const[e,c]=s.split(":");""!==e&&(void 0!==c?r.set(e,n.initPattern(c,o)):""!==t&&r.set(t,n.initPattern(e,o)))}return r}(t,"url"),s=0===o.size?console.log.bind(console):void 0,i=e.get("warOrigin"),p={date:"","content-type":"","content-length":""};self.XMLHttpRequest=class extends self.XMLHttpRequest{open(e,t,...n){if(void 0!==s)return s(`uBO: xhr.open(${e}, ${t}, ${n.join(", ")})`),super.open(e,t,...n);if(r.delete(this),void 0!==i&&t.startsWith(i))return super.open(e,t,...n);const a={method:e,url:t};return c(o,a)&&r.set(this,a),a.headers=Object.assign({},p),super.open(e,t,...n)}send(...t){const o=r.get(this);if(void 0===o)return super.send(...t);o.headers.date=(new Date).toUTCString();let s=Promise.resolve({xhr:this,directive:n,props:{readyState:{value:4},response:{value:""},responseText:{value:""},responseXML:{value:null},responseURL:{value:o.url},status:{value:200},statusText:{value:"OK"}}});switch(this.responseType){case"arraybuffer":s=s.then((e=>(e.props.response.value=new ArrayBuffer(0),e))),o.headers["content-type"]="application/octet-stream";break;case"blob":s=s.then((e=>(e.props.response.value=new Blob([]),e))),o.headers["content-type"]="application/octet-stream";break;case"document":s=s.then((e=>{const t=(new DOMParser).parseFromString("","text/html");return e.props.response.value=t,e.props.responseXML.value=t,e})),o.headers["content-type"]="text/html";break;case"json":s=s.then((e=>(e.props.response.value={},e.props.responseText.value="{}",e))),o.headers["content-type"]="application/json";break;default:if(""===n)break;s=s.then((t=>function(t){const n=a(),r=e=>{const t=[];let r=0;do{const e=n.Math_random().toString(36).slice(2);t.push(e),r+=e.length}while(r<e);return t.join(" ").slice(0,e)};if("true"===t)return Promise.resolve(r(10));if("emptyObj"===t)return Promise.resolve("{}");if("emptyArr"===t)return Promise.resolve("[]");if("emptyStr"===t)return Promise.resolve("");if(t.startsWith("length:")){const e=/^length:(\d+)(?:-(\d+))?$/.exec(t);if(e){const t=parseInt(e[1],10),o=n.Math_max(parseInt(e[2],10)||0,t)-t,s=n.Math_min(t+o*n.Math_random(),5e5);return Promise.resolve(r(0|s))}}if(t.startsWith("war:")&&e.has("warOrigin"))return new Promise((r=>{const o=[e.get("warOrigin"),"/",t.slice(4)],s=e.get("warSecret");void 0!==s&&o.push("?secret=",s);const c=new n.XMLHttpRequest;c.responseType="text",c.onloadend=e=>{r(e.target.responseText||"")},c.open("GET",o.join("")),c.send()}));return Promise.resolve("")}(t.directive).then((e=>(t.props.response.value=e,t.props.responseText.value=e,t))))),o.headers["content-type"]="text/plain"}s.then((e=>{o.headers["content-length"]=`${e.props.response.value}`.length,Object.defineProperties(e.xhr,e.props),e.xhr.dispatchEvent(new Event("readystatechange")),e.xhr.dispatchEvent(new Event("load")),e.xhr.dispatchEvent(new Event("loadend"))}))}getResponseHeader(e){const t=r.get(this);if(void 0===t||this.readyState<this.HEADERS_RECEIVED)return super.getResponseHeader(e);const n=t.headers[e.toLowerCase()];return void 0!==n&&""!==n?n:null}getAllResponseHeaders(){const e=r.get(this);if(void 0===e||this.readyState<this.HEADERS_RECEIVED)return super.getAllResponseHeaders();const t=[];for(const[n,r]of Object.entries(e.headers))r&&t.push(`${n}: ${r}`);return 0!==t.length&&t.push(""),t.join("\r\n")}}}function c(e,...t){void 0===c.extractProperties&&(c.extractProperties=(e,t,n)=>{for(const r of n){void 0!==e[r]&&(t[r]=e[r])}});const n=a(),r={},o=n.Array_from(e.keys());for(const e of t)e instanceof Object!=!1&&c.extractProperties(e,r,o);for(const[t,o]of e){let e=r[t];if(void 0!==e){if("string"!=typeof e){try{e=JSON.stringify(e)}catch(e){}if("string"!=typeof e)continue}if(!n.testPattern(o,e))return!1}}return!0}function a(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const p=i.length;if(0===p)return;const u=new Set,l=[];if(0!==o.size){for(let e=0;e<p;e++){const t=i.slice(e).join("."),n=o.get(t);n&&l.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||u.add(e)}};for(let t=0;t<p;t++){e(i.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=p-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=i.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)l.includes(e)||u.add(e)}}r.clear()}for(const e of u)try{s(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_noXhrIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_noXhrIf);r=t.URL.createObjectURL(o);const s=t.document;n=s.createElement("script"),n.async=!1,n.src=r,(s.head||s.documentElement||s).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_noXhrIf}})();