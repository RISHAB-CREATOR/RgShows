"use strict";(()=>{const e=function(){new Map;const e=[[]],t=new Map([["kicker.de",0],["myspass.de",0],["spielaffe.de",0],["tele5.de",0]]),n=new Map([]),o=new Map([]);function c(){const e=window.addEventListener;window.addEventListener=function(t,n){let o;e(...arguments);try{o=n.toString()}catch(e){}"string"==typeof o&&/^\s*function\s*\(\)\s*\{\s*window\.clearTimeout\(r\)\s*\}\s*$/.test(o)&&n()}.bind(window)}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const i=s.length;if(0===i)return;const r=new Set,l=[];if(0!==o.size){for(let e=0;e<i;e++){const t=s.slice(e).join("."),n=o.get(t);n&&l.push(...n)}o.clear()}if(0!==t.size){const e=e=>{let n=t.get(e);if(void 0!==n){"number"==typeof n&&(n=[n]);for(const e of n)l.includes(e)||r.add(e)}};for(let t=0;t<i;t++){e(s.slice(t).join("."))}e("*"),t.clear()}if(0!==n.size){const e=i-1;for(let t=0;t<e;t++)for(let o=e;o>t;o--){const e=s.slice(t,o).join(".");let c=n.get(e);if(void 0!==c){"number"==typeof c&&(c=[c]);for(const e of c)l.includes(e)||r.add(e)}}n.clear()}for(const t of r)try{c(...e[t])}catch(e){}e.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,o;try{t.uBOL_golemDe=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const c=new t.Blob(...t.uBOL_golemDe);o=t.URL.createObjectURL(c);const s=t.document;n=s.createElement("script"),n.async=!1,n.src=o,(s.head||s.documentElement||s).append(n)}catch(e){console.error(e)}o&&(n&&n.remove(),t.URL.revokeObjectURL(o)),delete t.uBOL_golemDe}})();