/**
 * @license
 * v1.3.11
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2020 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https://github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("adal-angular/dist/adal.min.js")):"function"==typeof define&&define.amd?define(["exports","adal-angular/dist/adal.min.js"],t):t((e.pnp=e.pnp||{},e.pnp.common={}),e.adal)}(this,function(e,n){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function t(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function i(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return function(){t.apply(e,n)}}function a(e,t,n){var r=new Date(e);switch(t.toLowerCase()){case"year":r.setFullYear(r.getFullYear()+n);break;case"quarter":r.setMonth(r.getMonth()+3*n);break;case"month":r.setMonth(r.getMonth()+n);break;case"week":r.setDate(r.getDate()+7*n);break;case"day":r.setDate(r.getDate()+n);break;case"hour":r.setTime(r.getTime()+36e5*n);break;case"minute":r.setTime(r.getTime()+6e4*n);break;case"second":r.setTime(r.getTime()+1e3*n);break;default:r=void 0}return r}function u(e){return"function"==typeof e}function c(e){return null!=e}function s(t,n,e,r){if(void 0===e&&(e=!1),void 0===r&&(r=function(){return!0}),!c(n))return t;var o=e?function(e,t){return!(t in e)}:function(){return!0};return Object.getOwnPropertyNames(n).filter(function(e){return o(t,e)&&r(e)}).reduce(function(e,t){return e[t]=n[t],e},t)}function l(e){return/^https?:\/\/|^\/\//i.test(e)}function f(e){return null==e||e.length<1}function p(e){return JSON.stringify(e)}function h(n,e){null!=e&&new Request("",{headers:e}).headers.forEach(function(e,t){n.append(t,e)})}var d=(g.prototype.fetch=function(e,t){return o.fetch(e,t)},g);function g(){}var y,v=(t(b,y=d),Object.defineProperty(b.prototype,"token",{get:function(){return this._token||""},set:function(e){this._token=e},enumerable:!0,configurable:!0}),b.prototype.fetch=function(e,t){void 0===t&&(t={});var n=new Headers;return h(n,t.headers),n.set("Authorization","Bearer "+this._token),t.headers=n,y.prototype.fetch.call(this,e,t)},b);function b(e){var t=y.call(this)||this;return t._token=e,t}function m(e){var t=document.createElement("a");return t.href=e,t.protocol+"//"+t.hostname}var x,_=(t(w,x=v),w.fromSPFxContext=function(e){return new k(e)},w.prototype.fetch=function(t,n){var r=this;if(!l(t))throw Error("You must supply absolute urls to AdalClient.fetch.");return this.getToken(m(t)).then(function(e){return r.token=e,x.prototype.fetch.call(r,t,n)})},w.prototype.getToken=function(t){var o=this;return new Promise(function(n,r){o.ensureAuthContext().then(function(e){return o.login()}).then(function(e){w._authContext.acquireToken(t,function(e,t){if(e)return r(Error(e));n(t)})}).catch(r)})},w.prototype.ensureAuthContext=function(){var t=this;return new Promise(function(e){null===w._authContext&&(w._authContext=n.inject({clientId:t.clientId,displayCall:function(e){t._displayCallback&&t._displayCallback(e)},navigateToLoginRequestUrl:!1,redirectUri:t.redirectUri,tenant:t.tenant})),e()})},w.prototype.login=function(){var i=this;return this._loginPromise||(this._loginPromise=new Promise(function(r,o){if(w._authContext.getCachedUser())return r();i._displayCallback=function(e){var t=window.open(e,"login","width=483, height=600");if(!t)return o(Error("Could not open pop-up window for auth. Likely pop-ups are blocked by the browser."));t&&t.focus&&t.focus();var n=window.setInterval(function(){t&&!t.closed&&void 0!==t.closed||window.clearInterval(n);try{-1!==t.document.URL.indexOf(i.redirectUri)&&(window.clearInterval(n),w._authContext.handleWindowCallback(t.location.hash),t.close(),r())}catch(e){o(e)}},30)},i.ensureAuthContext().then(function(e){w._authContext._loginInProgress=!1,w._authContext.login(),i._displayCallback=null})})),this._loginPromise},w._authContext=null,w);function w(e,t,n){var r=x.call(this,null)||this;return r.clientId=e,r.tenant=t,r.redirectUri=n,r._displayCallback=null,r._loginPromise=null,r}var C,k=(t(P,C=v),P.prototype.fetch=function(t,n){var r=this;return this.getToken(m(t)).then(function(e){return r.token=e,C.prototype.fetch.call(r,t,n)})},P.prototype.getToken=function(t){return this.context.aadTokenProviderFactory.getTokenProvider().then(function(e){return e.getToken(t)})},P);function P(e){var t=C.call(this,null)||this;return t.context=e,t}var O=u(Object.entries)?Object.entries:function(t){return Object.keys(t).map(function(e){return[e,t[e]]})};function j(e){return null!=e?new Map(O(e)):new Map}function A(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var r=0;r<e.length;r++)e[r].forEach(function(e,t){n.set(t,e)});return n}var T=["defaultCachingStore","defaultCachingTimeoutSeconds","globalCacheDisable","enableCacheExpiration","cacheExpirationIntervalMilliseconds","spfxContext"],I=(S.prototype.extend=function(e){this._v=A(this._v,j(e))},S.prototype.get=function(e){return this._v.get(e)},Object.defineProperty(S.prototype,"defaultCachingStore",{get:function(){return this.get(T[0])},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"defaultCachingTimeoutSeconds",{get:function(){return this.get(T[1])},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"globalCacheDisable",{get:function(){return this.get(T[2])},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"enableCacheExpiration",{get:function(){return this.get(T[3])},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"cacheExpirationIntervalMilliseconds",{get:function(){return this.get(T[4])},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"spfxContext",{get:function(){return this.get(T[5])},enumerable:!0,configurable:!0}),S);function S(e){void 0===e&&(e=new Map),this._v=e,this._v.set(T[0],"session"),this._v.set(T[1],60),this._v.set(T[2],!1),this._v.set(T[3],!1),this._v.set(T[4],750),this._v.set(T[5],null)}var M=new I,E=(F.prototype.get=function(e){if(!this.enabled)return null;var t=this.store.getItem(e);if(!c(t))return null;var n=JSON.parse(t);return new Date(n.expiration)<=new Date?(this.delete(e),null):n.value},F.prototype.put=function(e,t,n){this.enabled&&this.store.setItem(e,this.createPersistable(t,n))},F.prototype.delete=function(e){this.enabled&&this.store.removeItem(e)},F.prototype.getOrPut=function(t,e,n){var r=this;if(!this.enabled)return e();var o=this.get(t);return null===o?e().then(function(e){return r.put(t,e,n),e}):Promise.resolve(o)},F.prototype.deleteExpired=function(){var o=this;return new Promise(function(e,t){o.enabled||e();try{for(var n=0;n<o.store.length;n++){var r=o.store.key(n);null!==r&&/["|']?pnp["|']? ?: ?1/i.test(o.store.getItem(r))&&o.get(r)}e()}catch(e){t(e)}})},F.prototype.test=function(){try{return this.store.setItem("t","t"),this.store.removeItem("t"),!0}catch(e){return!1}},F.prototype.createPersistable=function(e,t){if(void 0===t){var n=M.defaultCachingTimeoutSeconds;0<this.defaultTimeoutMinutes&&(n=60*this.defaultTimeoutMinutes),t=a(new Date,"second",n)}return p({pnp:1,expiration:t,value:e})},F.prototype.cacheExpirationHandler=function(){var t=this;this.deleteExpired().then(function(e){setTimeout(i(t,t.cacheExpirationHandler),M.cacheExpirationIntervalMilliseconds)}).catch(function(e){console.error(e)})},F);function F(e,t){void 0===t&&(t=-1),this.store=e,this.defaultTimeoutMinutes=t,this.enabled=this.test(),M.enableCacheExpiration&&this.cacheExpirationHandler()}var D=(Object.defineProperty(U.prototype,"length",{get:function(){return this._store.size},enumerable:!0,configurable:!0}),U.prototype.clear=function(){this._store.clear()},U.prototype.getItem=function(e){return this._store.get(e)},U.prototype.key=function(e){return Array.from(this._store)[e][0]},U.prototype.removeItem=function(e){this._store.delete(e)},U.prototype.setItem=function(e,t){this._store.set(e,t)},U);function U(e){void 0===e&&(e=new Map),this._store=e}var R=(Object.defineProperty(H.prototype,"local",{get:function(){return null===this._local&&(this._local=this.getStore("local")),this._local},enumerable:!0,configurable:!0}),Object.defineProperty(H.prototype,"session",{get:function(){return null===this._session&&(this._session=this.getStore("session")),this._session},enumerable:!0,configurable:!0}),H.prototype.getStore=function(e){return new E("local"===e?"undefined"==typeof localStorage?new D:localStorage:"undefined"==typeof sessionStorage?new D:sessionStorage)},H);function H(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this._local=e,this._session=t}e.AdalClient=_,e.SPFxAdalClient=k,e.objectToMap=j,e.mergeMaps=A,e.setup=function(e){M.extend(e)},e.RuntimeConfigImpl=I,e.RuntimeConfig=M,e.mergeHeaders=h,e.mergeOptions=function(e,t){if(c(t)){var n=s(e.headers||{},t.headers);(e=s(e,t)).headers=n}},e.FetchClient=d,e.BearerTokenFetchClient=v,e.PnPClientStorageWrapper=E,e.PnPClientStorage=R,e.getCtxCallback=i,e.dateAdd=a,e.combine=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(e){return!f(e)}).map(function(e){return e.replace(/^[\\|\/]/,"").replace(/[\\|\/]$/,"")}).join("/").replace(/\\/g,"/")},e.getRandomString=function(e){for(var t=new Array(e),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t[r]=n.charAt(Math.floor(Math.random()*n.length));return t.join("")},e.getGUID=function(){var n=Date.now();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(n+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)})},e.isFunc=u,e.objectDefinedNotNull=c,e.isArray=function(e){return Array.isArray?Array.isArray(e):e&&"number"==typeof e.length&&e.constructor===Array},e.extend=s,e.isUrlAbsolute=l,e.stringIsNullOrEmpty=f,e.getAttrValueFromString=function(e,t){e=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");var n=new RegExp(t+"\\s*?=\\s*?(\"|')([^\\1]*?)\\1","i").exec(e);return null!==n&&0<n.length?n[2]:null},e.sanitizeGuid=function(e){if(f(e))return e;var t=/([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(e);return null===t?e:t[1]},e.jsS=p,e.hOP=function(e,t){return Object.hasOwnProperty.call(e,t)},e.getHashCode=function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t|=0}return t},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=common.es5.umd.min.js.map
