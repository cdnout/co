!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.logdown=e():t.logdown=e()}(window,function(){return function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,r){var n,o=r(1)(),i=r(3),s=r(5),f=r(8)();o.prefixColors=["#F2777A","#F99157","#FFCC66","#99CC99","#66CCCC","#6699CC","#CC99CC"],o._setPrefixRegExps=function(){try{f.localStorage&&"string"==typeof f.localStorage.getItem("debug")&&(o._prefixRegExps=[],f.localStorage.getItem("debug").split(",").forEach(function(t){var e="enable";"-"===(t=t.trim())[0]&&(t=t.substr(1),e="disable");var r=o._prepareRegExpForPrefixSearch(t);o._prefixRegExps.push({type:e,regExp:r})}))}catch(t){}},o._getNextPrefixColor=(n=0,function(){return n+=1,o.prefixColors[n%o.prefixColors.length]}),o.prototype._getDecoratedPrefix=function(){var t=[];return s()?(t.push("%c"+this.opts.prefix+"%c "),t.push("color:"+this.opts.prefixColor+"; font-weight:bold;","")):t.push("["+this.opts.prefix+"] "),t},o.prototype._prepareOutput=function(t){var e,r=this._getDecoratedPrefix();return"string"==typeof t[0]?this.opts.markdown&&s()?(e=i.parse(t[0]),r[0]=r[0]+e.text,r=r.concat(e.styles)):r[0]=r[0]+t[0]:r.push(t[0]),1<t.length&&(r=r.concat(t.slice(1))),r},o._setPrefixRegExps(),t.exports=o},function(t,e,r){var f=r(2);t.exports=function(){function s(t,e){return this instanceof s?s._isPrefixAlreadyInUse(t)?s._getInstanceByPrefix(t):(this.opts=s._normalizeOpts(t,e),this.state=s._getInitialState(this.opts),s._decorateLoggerMethods(this),s._instances.push(this),this):new s(t,e)}return s.transports=[],s._instances=[],s._prefixRegExps=[],s._prepareRegExpForPrefixSearch=function(t){return new RegExp("^"+t.replace(/\*/g,".*?")+"$")},s._isPrefixAlreadyInUse=function(e){return s._instances.some(function(t){return t.opts.prefix===e})},s._getInstanceByPrefix=function(e){return s._instances.filter(function(t){return t.opts.prefix===e})[0]},s._normalizeOpts=function(t,e){if("string"!=typeof t)throw new TypeError("prefix must be a string");var r=void 0===(e=e||{}).markdown||Boolean(e.markdown),n=e.prefixColor||s._getNextPrefixColor();return{logger:e.logger||console,markdown:r,plaintext:Boolean(e.plaintext),prefix:t,prefixColor:n}},s._getInitialState=function(t){return{isEnabled:s._getEnableState(t)}},s._getEnableState=function(e){var r=!1;return s._prefixRegExps.forEach(function(t){"enable"===t.type&&t.regExp.test(e.prefix)?r=!0:"disable"===t.type&&t.regExp.test(e.prefix)&&(r=!1)}),r},s._decorateLoggerMethods=function(t){var i=t.opts.logger,e=Object.keys(i).filter(function(t){return"function"==typeof i[t]});0===e.length&&(e=["debug","log","warn","error","info"]),e.forEach(function(o){t[o]=function(){var e=f(arguments),r=this.opts.prefix;if(s.transports.length){var n="["+r+"] "+e.filter(function(t){return"object"!=typeof t}).join(" ");s.transports.forEach(function(t){t({state:this.state,instance:r,level:o,args:e,msg:n})}.bind(this))}if(this.state.isEnabled){var t=this._prepareOutput(e,o);i[o].apply(i,t)}}})},s}},function(t,e){t.exports=function(t){return Array.prototype.slice.call(t,0)}},function(t,e,r){var n=[];function o(e){return function(t){return n.push(e),n.push(""),"%c"+t+"%c"}}var i=new(r(4))({renderer:{"*":o("font-weight:bold;"),_:o("font-style:italic;"),"`":o("background-color:rgba(255,204,102, 0.1);color:#FFCC66;padding:2px 5px;border-radius:2px;")}});t.exports={parse:function(t){var e={text:i.parse(t),styles:[].concat(n)};return n.length=0,e}}},function(t,e){var x=/([_*`\\]|[^_*`\\]+)/g,r=/[_*`]/;function n(t){this.renderer=t.renderer}function d(t){return r.test(t)}n.prototype.parse=function(t){if(""===t)return"";var r,e,n,o=t.match(x),i=this.renderer,s="",f=[],u={},a=0;function p(t){for(var e="";r&&r.tag!==t;)e=r.tag+r.text+e,u[r.tag]=!1,r=f.pop();return e}for(;n=o[a];){if(e="",a++,d(n))if(u[n])e=p(n),e=i[r.tag](r.text+e),u[n]=!1,r=f.pop();else{var c="";if("`"===n){var l=o.indexOf(n,a);-1!==l&&(s+=p(),c=o.slice(a,l).join(""),a=l)}r&&f.push(r),u[n]=!0,r={tag:n,text:c}}else if("\\"===(e=n)){var g=o[a];(d(g)||"\\"===g)&&(e=g,a++)}e&&(r?r.text+=e:s+=e,e="")}return s+p()},t.exports=n},function(t,e,r){var n=r(6),o=r(7);t.exports=function(){return n()||o()}},function(t,e){t.exports=function(){try{return"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent)}catch(t){return!1}}},function(t,e){t.exports=function(){try{return/firefox\/(\d+)/i.test(navigator.userAgent)}catch(t){return!1}}},function(r,t,e){(function(t){function e(t,e){return"object"==typeof t&&t.self===t&&t||"object"==typeof e&&e.global===e&&e||this}r.exports=e.bind(this,self,t),r.exports.getGlobal=e}).call(this,e(9))},function(ob,pb){var qb;qb=function(){return this}();try{qb=qb||Function("return this")()||eval("this")}catch(ob){"object"==typeof window&&(qb=window)}ob.exports=qb}])});
