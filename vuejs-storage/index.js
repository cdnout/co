!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).vuejsStorage=e()}(this,(function(){"use strict";function t(t){return t.replace(/\[([^[\]]*)\]/g,".$1.").split(".").filter((function(t){return""!==t}))}function e(e,n,r){for(var o=t(n),i=e,s=0;s<o.length-1;s++){var a=o[s];i.hasOwnProperty(a)||(i[a]={}),i=i[a]}i[o[o.length-1]]=r}function n(n,r,o){e(n,o,function(e,n){return t(n).reduce((function(t,e){return t&&t[e]}),e)}(r,o))}var r=function(){function t(t){this.storage=t}return t.prototype.set=function(t,e){this.storage.setItem(t,JSON.stringify(e))},t.prototype.get=function(t){return JSON.parse(this.storage.getItem(t))},t.prototype.has=function(t){return!!this.storage.getItem(t)},t}(),o=new r(window.localStorage),i=new r(window.sessionStorage),s=Object.freeze({__proto__:null,default:r,localStorage:o,sessionStorage:i});function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=function t(e,n){for(var r=0,o=Object.keys(n);r<o.length;r++){var i=o[r];"object"!==a(s=n[i])||Array.isArray(s)||null===s?e[i]=n[i]:i in e?t(e[i],n[i]):e[i]=n[i]}var s;return e};function u(t,r){for(var i=r.keys,s=r.merge,a=void 0===s?f:s,u=r.namespace,c=r.driver,l=void 0===c?o:c,p={},y=0,g=i;y<g.length;y++){var v=g[y];n(p,t,v)}var h=null;if(l.has(u))h=l.get(u);else{for(var d={},m=0,b=i;m<b.length;m++){n(d,p,v=b[m])}h=d,l.set(u,h)}h=a(p,h);for(var S=function(r){n(t,h,r),t.$watch(r,{handler:function(t){e(h,r,t),l.set(u,h)},deep:!0})},w=0,j=i;w<j.length;w++){S(v=j[w])}}var c=function(t){return function(t){var e=t.keys,r=t.merge,i=void 0===r?f:r,s=t.namespace,a=t.driver,u=void 0===a?o:a;return function(t){if(u.has(s)){var r=u.get(s);t.replaceState(i(t.state,r))}else{r={};for(var o=0,a=e;o<a.length;o++){var f=a[o];n(r,t.state,f)}u.set(s,r)}t.subscribe((function(t,r){for(var o={},i=0,a=e;i<a.length;i++){n(o,r,a[i])}u.set(s,o)}))}}(t)};return c.install=function(t){t.mixin({created:function(){var t=this;if("storage"in this.$options){var e=this.$options.storage;"function"==typeof e&&(e=e.apply(this)),Array.isArray(e)?e.forEach((function(e){return u(t,e)})):u(this,e)}}})},c.drivers=s,c}));
//# sourceMappingURL=vuejs-storage.umd.min.js.map
