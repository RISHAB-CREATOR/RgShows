"use strict";(()=>{const e=function(){const e=new Map,t=[["ppn-overflows",".ppn-overflows.ppn-floating_enable"],["vjs-floater-parent|vjs-top-parent-mobile","#iol_player_container"],["jw-flag-floating",".main-media-holder > div.video-player  > div.jwplayer"],["videoScrollClass",".video-box.videoScrollClass"],["jw-flag-floating","#jw-video-js"],["LEmbedVideo--floating",".LEmbedVideo.LEmbedVideo--floating"],["floating",".embed__content--draggable"],["glimmer-sticky",".content-lede-video.glimmer-sticky-container .glimmerPlayer.glimmer-sticky"],["vjs-pip-active",".video-js.vjs-pip-active"],["Header__siteHeaderBanner","header.Header__siteHeaderBanner"],["cnx-float",".cnx-content-wrapper.cnx-float"],["videoContent_player_fixed",".videoContent_player_fixed"],["isPinned",".videoPlayer.isPinned"],["jw-flag-floating",".news-article-body .jwplayer.jw-flag-floating"],["stuck",".placeholder > .sticky-container.stuck"],["is-collapsed",".Body--Mobile .ContentItem .is-collapsed.RichContent--unescapable"],["jw-flag-floating",".m-video-player--frame-container .jwplayer.jw-flag-floating"],["has-ads-free-promo-header","body"],["blocked",".left-content > section#examples-content > .example.blocked"],["async-hide","html"],["isBranding","body"],["with-branding",".main-layout"],["app-banner-parent","body"],["with-promo-bar","body"],["disable-scroll","body"],["is-promobar-active","body"],["jw-flag-floating",".jwplayer"],["viously-sticked-top-right",".viously-ui-container"],["skin-moeskin","body"],["floating",'video-livebox > div[data-endscreen="plus1_endscreen"]'],["sticky",".video-top-container"],["disabled",".body-page .card-body button.btn-primary.btn-block"],["disabled","#wait1button"],["is--persistent",".videoPlayer"],["hidden","#wcGetLink"],["disabled",'a[id^="newskip-"].disabled'],["has-dealbar"],["withRightBar","#vidPlayer > div"],["with-sidebar-ads",".video-player-area"],["hidden","#getlink"],["zsj-act"],["disable-selection","body"],["no-select","div"],["unselectable","p"]],o=new Map([["cnyes.com",0],["toro.it",1],["dnevnik.hr",2],["infor.pl",3],["tv.lrytas.lt",4],["lrytas.lt",5],["cbsnews.com",6],["elle.com",7],["timesofisrael.com",8],["goodreads.com",9],["accuweather.com",10],["danas.hr",11],["filmweb.pl",12],["theweathernetwork.com",13],["is.fi",14],["zhihu.com",15],["owlcation.com",16],["investing.com",17],["context.reverso.net",18],["leagueoflegends.com",19],["oeko-planet.com",19],["zombie-film.club",20],["lalafo.kg",21],["similarweb.com",22],["eyeondesign.aiga.org",23],["coub.com",24],["artstation.com",25],["nypost.com",26],["theparking.eu",27],["moegirl.org.cn",28],["pluska.sk",29],["standard.co.uk",30],["independent.co.uk",30],["bstlar.com",31],["examtadka.com",32],["djxmaza.in",32],["polsatnews.pl",33],["polsatsport.pl",33],["teknopaid.xyz",34],["streamcheck.link",35],["tinyurl.so",35],["tinyurl.is",35],["androidauthority.com",36],["tnaflix.com",37],["ebonyo.com",38],["bestopbook.info",39],["wenku.baidu.com",40],["postype.com",41],["jovenesweb.com",42],["wneen.com",43]]),n=new Map([]),r=new Map([]);function i(t="",o="",n=""){if("string"!=typeof t)return;if(""===t)return;const r=t.split(/\s*\|\s*/);""===o&&(o="."+r.map((e=>CSS.escape(e))).join(",."));const i=/\bstay\b/.test(n);let a;const s=function(){a=void 0;try{const e=document.querySelectorAll(o);for(const t of e)t.classList.remove(...r)}catch(e){}i||"complete"===document.readyState&&c.disconnect()},c=new MutationObserver((e=>{if(void 0!==a)return;let t=!0;for(let o=0;o<e.length&&t;o++){const{type:n,addedNodes:r,removedNodes:i}=e[o];"attributes"===n&&(t=!1);for(let e=0;e<r.length&&t;e++)if(1===r[e].nodeType){t=!1;break}for(let e=0;e<i.length&&t;e++)if(1===i[e].nodeType){t=!1;break}}t||(a=self.requestIdleCallback(s,{timeout:67}))}));!function(t,o){const n=e=>{const t={loading:1,interactive:2,end:2,2:2,complete:3,idle:3,3:3},o=Array.isArray(e)?e:[e];for(const e of o){const o=`${e}`;if(!1!==t.hasOwnProperty(o))return t[o]}return 0},r=n(o);if(n(document.readyState)>=r)return void t();const i=()=>{n(document.readyState)<r||(t(),a.removeEventListener.apply(document,s))},a=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,o={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>o.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>o.JSON_parseFn.call(o.JSON,...e),JSON_stringify:(...e)=>o.JSON_stringifyFn.call(o.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const o=!0!==t.canNegate||!1===e.startsWith("!");!1===o&&(e=e.slice(1));const n=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==n?{re:new this.RegExp(n[1],n[2]||t.flags),expect:o}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:o}:{pattern:e,expect:o}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,o=!1){if(""===e)return/^/;const n=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===n){const n=this.escapeRegexChars(e);return new RegExp(o?`^${n}$`:n,t)}try{return new RegExp(n[1],n[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const o=e.slice(t).reduce(((e,t,o,n)=>{if(0==(1&o)){const t=n[o+1],r=/^\d+$/.test(t)?parseInt(t,10):t;e.push([n[o],r])}return e}),[]);return this.Object_fromEntries(o)}};return e.set("safeSelf",o),o}(),s=["readystatechange",i,{capture:!0}];a.addEventListener.apply(document,s)}((()=>{s(),c.observe(document,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})}),/\bcomplete\b/.test(n)?"idle":"loading")}const a=[];try{a.push(...document.location.hostname.split("."))}catch(e){}const s=a.length;if(0===s)return;const c=new Set,l=[];if(0!==r.size){for(let e=0;e<s;e++){const t=a.slice(e).join("."),o=r.get(t);o&&l.push(...o)}r.clear()}if(0!==o.size){const e=e=>{let t=o.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||c.add(e)}};for(let t=0;t<s;t++){e(a.slice(t).join("."))}e("*"),o.clear()}if(0!==n.size){const e=s-1;for(let t=0;t<e;t++)for(let o=e;o>t;o--){const e=a.slice(t,o).join(".");let r=n.get(e);if(void 0!==r){"number"==typeof r&&(r=[r]);for(const e of r)l.includes(e)||c.add(e)}}n.clear()}for(const e of c)try{i(...t[e])}catch(e){}t.length=0};e()})();