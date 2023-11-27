/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,a=Object.create(o.prototype),i=new N(n||[]);return c(a,"_invoke",{value:q(t,r,i)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var v="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function L(){}function x(){}function w(){}var E={};h(E,s,(function(){return this}));var S=Object.getPrototypeOf,_=S&&S(S(M([])));_&&_!==a&&i.call(_,s)&&(E=_);var k=w.prototype=L.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function q(t,r,n){var o=v;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=A(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?g:y,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function A(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=w,c(k,"constructor",{value:w,configurable:!0}),c(w,"constructor",{value:x,configurable:!0}),x.displayName=h(w,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,f,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},j(O.prototype),h(O.prototype,l,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new O(d(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(k),h(k,f,"Generator"),h(k,s,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var e,n,o,a,i,c,u,s,l,f,h=r(687),d=r.n(h);function p(){var t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,r=Math.floor(e/100),n=0,o=setInterval((function(){n+=r,t.innerText=n,n>e&&(t.innerText=e,clearInterval(o))}),50*Math.random())})))}));var e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}!function(){function t(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="suave"] a[href^="#"]').forEach((function(e){e.addEventListener("click",t)}))}(),function(){var t,e=document.querySelectorAll('[data-anime="scroll"]');function r(){e.forEach((function(e){e.getBoundingClientRect().top-t<0?e.classList.add("ativo"):e.classList.contains("ativo")&&e.classList.remove("ativo")}))}e.length&&(t=.6*window.innerHeight,r(),window.addEventListener("scroll",r))}(),function(){var t=document.querySelectorAll('[data-anime="accordion"] dt'),e="ativo";function r(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((function(t){t.addEventListener("click",r)})))}(),e=document.querySelectorAll('[data-tab="menu"] li'),n=document.querySelectorAll('[data-tab="content"] section'),e.length&&n.length&&(n[0].classList.add("ativo"),e.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){n.forEach((function(t){t.classList.remove("ativo")}));var e=n[t].dataset.anime;n[t].classList.add("ativo",e)}(e)}))}))),function(){var t=document.querySelector("[data-modal='abrir']"),e=document.querySelector("[data-modal='fechar']"),r=document.querySelector("[data-modal='container']");function n(t){t.preventDefault(),r.classList.remove("ativo")}t&&e&&r&&(t.addEventListener("click",(function(t){t.preventDefault(),r.classList.add("ativo")})),e.addEventListener("click",n),r.addEventListener("click",(function(t){t.target===this&&n(t)})))}(),document.querySelectorAll("[data-tooltip]").forEach((function(t){var e=document.createElement("div");e.classList.add("tooltip");var r=t.getAttribute("aria-label");e.innerText=r,t.addEventListener("mouseover",(function(){document.body.appendChild(e)})),t.addEventListener("mouseleave",(function(){e.remove()})),t.addEventListener("mousemove",(function(t){e.style.top="".concat(t.pageY+15,"px"),e.style.left="".concat(t.pageX+15,"px")}))})),document.querySelectorAll("[data-dropdown]").forEach((function(t){function e(t){var e=this;t.preventDefault(),this.classList.add("active"),function(t,r,n){var o=document.documentElement,a="data-outside";function i(n){t.contains(n.target)||(t.removeAttribute(a),r.forEach((function(t){o.removeEventListener(t,i)})),e.classList.remove("active"))}t.hasAttribute(a)||(r.forEach((function(t){o.addEventListener(t,i)})),t.setAttribute(a,""))}(this,["touchstart","click"])}t.addEventListener("click",e),t.addEventListener("touchstart",e)})),a=(o=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),i=o.dataset.horario.split(",").map(Number),u=(c=new Date).getDay(),s=c.getHours(),l=-1!==a.indexOf(u),f=s>=i[0]&&s<i[1],l&&f&&o.classList.add("aberto"),function(){function e(){var r;return r=d().mark((function t(e){var r,n,o,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero >").concat(t.total,"</span>"),e},t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:o=t.sent,a=document.querySelector(".numeros-grid"),o.forEach((function(t){var e=r(t);a.appendChild(e)})),p(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})),e=function(){var e=this,n=arguments;return new Promise((function(o,a){var i=r.apply(e,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))},e.apply(this,arguments)}!function(t){e.apply(this,arguments)}("./animais-api.json")}(),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(500/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))}))})()})();