"use strict";(()=>{const e=function(){const e=new Map,t=[[".parentNode.removeChild"],["nagScroll"],["height"],["0x"],["debugger"],["visibility","1000"],["pushAd"],["removeChild"],["modal"],["_0x"],["clearInterval(loginReady)"],["offsetHeight"],["adsbygoogle"],["dfgh-adsbygoogle"],["/_0x|devtools/"],["potato"],["detect"],["console.clear"],["ads"],["devtoolsDetector"],["()=>_(","15000"],["DevToolsOpen"]],o=new Map([["bluemoon-mcfc.co.uk",[0,7]],["kentonline.co.uk",1],["smashboards.com",2],["mobilarena.hu",3],["avdelphi.com",4],["pornhd8k.net",4],["masuit.com",4],["iphonecake.com",5],["ziperto.com",5],["compartiendofull.net",5],["themeparktourist.com",5],["magnet-novels.com",6],["bendigoadvertiser.com.au",8],["lvturbo.com",9],["sbbrisk.com",9],["sbface.com",9],["sbspeed.com",9],["streamsb.net",9],["wouterplanet.com",9],["actvid.com",9],["699pic.com",10],["thinkamericana.com",11],["menrec.com",11],["mocah.org",12],["coolwallpapers.me",13],["sflix.to",14],["freemcserver.net",15],["vgembed.com",16],["braflix.app",16],["sbot.cf",17],["bluphim.com",17],["cdnmoviking.tech",17],["alfred.camera",18],["vidstreaming.xyz",19],["raenonx.cc",20],["ngelmat.net",21]]),n=new Map([]),r=new Map([]);function c(t="",o=""){if("string"!=typeof t)return;const n=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,o={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>o.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>o.JSON_parseFn.call(o.JSON,...e),JSON_stringify:(...e)=>o.JSON_stringifyFn.call(o.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const o=!0!==t.canNegate||!1===e.startsWith("!");!1===o&&(e=e.slice(1));const n=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==n?{re:new this.RegExp(n[1],n[2]||t.flags),expect:o}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:o}:{pattern:e,expect:o}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,o=!1){if(""===e)return/^/;const n=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===n){const n=this.escapeRegexChars(e);return new RegExp(o?`^${n}$`:n,t)}try{return new RegExp(n[1],n[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const o=e.slice(t).reduce(((e,t,o,n)=>{if(0==(1&o)){const t=n[o+1],r=/^\d+$/.test(t)?parseInt(t,10):t;e.push([n[o],r])}return e}),[]);return this.Object_fromEntries(o)}};return e.set("safeSelf",o),o}(),r="!"===t.charAt(0);r&&(t=t.slice(1)),""===o&&(o=void 0);let c=!1;void 0!==o&&(c="!"===o.charAt(0),c&&(o=o.slice(1)),o=parseInt(o,10));const s=!1===r&&""===t&&void 0===o?console.log:void 0,i=n.patternToRegex(t);self.setInterval=new Proxy(self.setInterval,{apply:function(e,a,l){const p=l[0]instanceof Function?String(n.Function_toString(l[0])):String(l[0]),f=l[1];if(void 0!==s)s('uBO: setInterval("%s", %s)',p,f);else{let e;""!==t&&(e=i.test(p)!==r),!1!==e&&void 0!==o&&(e=(f===o||isNaN(f)&&isNaN(o))!==c),e&&(l[0]=function(){})}return Reflect.apply(e,a,l)},get:(e,t,o)=>"toString"===t?e.toString.bind(e):Reflect.get(e,t,o)})}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const i=s.length;if(0===i)return;const a=new Set,l=[];if(0!==r.size){for(let e=0;e<i;e++){const t=s.slice(e).join("."),o=r.get(t);o&&l.push(...o)}r.clear()}if(0!==o.size){const e=e=>{let t=o.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(s.slice(t).join("."))}e("*"),o.clear()}if(0!==n.size){const e=i-1;for(let t=0;t<e;t++)for(let o=e;o>t;o--){const e=s.slice(t,o).join(".");let r=n.get(e);if(void 0!==r){"number"==typeof r&&(r=[r]);for(const e of r)l.includes(e)||a.add(e)}}n.clear()}for(const e of a)try{c(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let o,n;try{t.uBOL_noSetIntervalIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const r=new t.Blob(...t.uBOL_noSetIntervalIf);n=t.URL.createObjectURL(r);const c=t.document;o=c.createElement("script"),o.async=!1,o.src=n,(c.head||c.documentElement||c).append(o)}catch(e){console.error(e)}n&&(o&&o.remove(),t.URL.revokeObjectURL(n)),delete t.uBOL_noSetIntervalIf}})();