!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("d3-selection"),require("d3-dispatch")):"function"==typeof define&&define.amd?define(["exports","d3-selection","d3-dispatch"],e):e(t.d3Kit=t.d3Kit||{},t.d3,t.d3)}(this,function(t,e,n){"use strict";function i(t){var e="undefined"==typeof t?"undefined":x(t);return null!=t&&("object"==e||"function"==e)}function r(t){var e=i(t)?T.call(t):"";return e==N||e==C||e==R}function a(t){return null!=t&&"object"==("undefined"==typeof t?"undefined":x(t))}function s(t){return"symbol"==("undefined"==typeof t?"undefined":x(t))||a(t)&&$.call(t)==G}function o(t){if("number"==typeof t)return t;if(s(t))return z;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(q,"");var n=U.test(t);return n||K.test(t)?V(t.slice(2),n?2:8):B.test(t)?z:+t}function h(t,e,n){function r(e){var n=g,i=p;return g=p=void 0,_=e,m=t.apply(i,n)}function a(t){return _=t,y=setTimeout(u,e),b?r(t):m}function s(t){var n=t-w,i=t-_,r=e-n;return O?Q(r,v-i):r}function h(t){var n=t-w,i=t-_;return void 0===w||n>=e||0>n||O&&i>=v}function u(){var t=L();return h(t)?l(t):void(y=setTimeout(u,s(t)))}function l(t){return y=void 0,k&&g?r(t):(g=p=void 0,m)}function c(){void 0!==y&&clearTimeout(y),_=0,g=w=p=y=void 0}function f(){return void 0===y?m:l(L())}function d(){var t=L(),n=h(t);if(g=arguments,p=this,w=t,n){if(void 0===y)return a(w);if(O)return y=setTimeout(u,e),r(w)}return void 0===y&&(y=setTimeout(u,e)),m}var g,p,v,m,y,w,_=0,b=!1,O=!1,k=!0;if("function"!=typeof t)throw new TypeError(Z);return e=o(e)||0,i(n)&&(b=!!n.leading,O="maxWait"in n,v=O?J(o(n.maxWait)||0,e):v,k="trailing"in n?!!n.trailing:k),d.cancel=c,d.flush=f,d}function u(t,e,n){var r=!0,a=!0;if("function"!=typeof t)throw new TypeError(X);return i(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),h(t,e,{leading:r,maxWait:e,trailing:a})}function l(t){return null==t?"":String(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function c(t){return null==t?"\\s":t.source?t.source:"["+l(t)+"]"}function f(t,e){if(null==t)return"";if(!e&&Y)return Y.call(t);var n=c(e),i=new RegExp("^"+n+"+|"+n+"+$","g");return String(t).replace(i,"")}function d(t){return f(t).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()}function g(t){t=t||{};for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var a in n)if(n.hasOwnProperty(a)){var s=n[a];t[a]=!i(s)||Array.isArray(s)||r(s)?s:g(t[a],s)}}return t}function p(t){t=t||{};for(var e=1;e<arguments.length;e++)if(arguments[e])for(var n in arguments[e])arguments[e].hasOwnProperty(n)&&(t[n]=arguments[e][n]);return t}function v(t,e,n){return function(){var i=n.apply(e,arguments);return i===e?t:i}}function m(t,e){for(var n=1,i=arguments.length,r=void 0;++n<i;)t[r=arguments[n]]=v(t,e,e[r]);return t}function y(t){return r(t)?t:function(){return t}}function w(t){throw new Error("Missing parameter "+t)}function _(t){return null!==t&&void 0!==t}function b(t){return null===t||void 0===t}function O(t){return!(!t||1!==t.nodeType)}function k(t){if(b(t))return function(t,e){return Math.min(t,e)};var e=(""+t).trim().toLowerCase();if(e.indexOf("%")>-1){var n=function(){var t=+e.replace("%","")/100;return{v:function(e,n){return n*t}}}();if("object"===("undefined"==typeof n?"undefined":x(n)))return n.v}return function(){return+e.replace("px","")}}function D(t){function e(t,e){var n=arguments.length<=2||void 0===arguments[2]?"":arguments[2],i=e.split("."),r=void 0,a=void 0;i.length>1?(a=i[0].length>0?i[0]:h,r=i[1]):(a=h,r=i[0]);var s=""+n+r;if(u.hasOwnProperty(s))throw new Error("invalid or duplicate layer id: "+s);var o=d(r)+"-layer",l=t.append(a).classed(o,!0);return u[s]=l,l}function n(t,r){var a=arguments.length<=2||void 0===arguments[2]?"":arguments[2];if(Array.isArray(r))return r.map(function(e){return n(t,e,a)});if(i(r)){var s=Object.keys(r),o=W(s,1),h=o[0],u=e(t,h,a);return n(u,r[h],""+a+h+"/"),u}return e(t,r,a)}function r(e){return n(t,e)}function a(t){return Array.isArray(t)?t.map(r):r(t)}function s(t){return u[t]}function o(t){return!!u[t]}var h=arguments.length<=1||void 0===arguments[1]?"g":arguments[1],u={};return{create:a,get:s,has:o}}var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},E=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},A=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),j=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},P=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},W=function(){function t(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(h){r=!0,a=h}finally{try{!i&&o["return"]&&o["return"]()}finally{if(r)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),N="[object Function]",C="[object GeneratorFunction]",R="[object Proxy]",S=Object.prototype,T=S.toString,M="object"==("undefined"==typeof global?"undefined":x(global))&&global&&global.Object===Object&&global,I="object"==("undefined"==typeof self?"undefined":x(self))&&self&&self.Object===Object&&self,F=M||I||Function("return this")(),L=function(){return F.Date.now()},G="[object Symbol]",H=Object.prototype,$=H.toString,z=0/0,q=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,K=/^0o[0-7]+$/i,V=parseInt,Z="Expected a function",J=Math.max,Q=Math.min,X="Expected a function",Y=String.prototype.trim,tt=Object.freeze({isObject:i,isFunction:r,kebabCase:d,deepExtend:g,extend:p,rebind:m,functor:y,debounce:h,throttle:u}),et=function(){function t(){E(this,t);for(var e=arguments.length,n=Array(e),i=0;e>i;i++)n[i]=arguments[i];if(1===n.length){var a=n[0],s=r(a)?a():a;if(s instanceof t)this.width=s.width,this.height=s.height;else if(O(s))this.width=s.clientWidth,this.height=s.clientHeight;else if(Array.isArray(s))this.width=s[0],this.height=s[1];else{if(!(_(s)&&_(s.width)&&_(s.height))){var o=new Error("Unsupported input. Must be either\n  DOMNode, Array or Object with field width and height,\n  or a function that returns any of the above.");throw o.value=a,o}this.width=s.width,this.height=s.height}}else{var h=n[0],u=n[1];this.width=h,this.height=u}}return A(t,[{key:"isEqual",value:function(e){if(e instanceof t)return this.width===e.width&&this.height===e.height;var n=new t(e);return this.width===n.width&&this.height===n.height}},{key:"toArray",value:function(){return[this.width,this.height]}},{key:"toObject",value:function(){return{width:this.width,height:this.height}}}]),t}(),nt=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];E(this,t);var n=e||{},i=n.mode,r=void 0===i?t.MODE_BASIC:i,a=n.width,s=void 0===a?"100%":a,o=n.height,h=void 0===o?null:o,u=n.ratio,l=void 0===u?1:u,c=n.maxWidth,f=void 0===c?null:c,d=n.maxHeight,g=void 0===d?null:d;r===t.MODE_ASPECT_RATIO?(this.wFn=k(f),this.hFn=k(g),this.options={mode:r,ratio:l,maxWidth:f,maxHeight:g}):(this.wFn=k(s),this.hFn=k(h),this.options={mode:r,width:s,height:h})}return A(t,[{key:"fit",value:function(){var e=arguments.length<=0||void 0===arguments[0]?w("box"):arguments[0],n=arguments.length<=1||void 0===arguments[1]?w("container"):arguments[1],i=new et(e),r=i.width,a=i.height,s=new et(n),o=s.width,h=s.height,u=void 0;if(this.options.mode===t.MODE_ASPECT_RATIO){var l=this.options.ratio,c=this.wFn(o,o),f=this.hFn(h,h),d=Math.floor(l*f);u=c>=d?new et(d,f):new et(c,Math.floor(c/l))}else u=new et(this.wFn(r,o),this.hFn(a,h));return{dimension:u,changed:!u.isEqual(i)}}}]),t}();nt.MODE_BASIC="basic",nt.MODE_ASPECT_RATIO="aspectRatio";var it=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];E(this,t);var n=e||{},i=n.mode,r=void 0===i?t.MODE_WINDOW:i,a=n.target,s=void 0===a?null:a,o=n.interval,h=void 0===o?200:o;r!==t.MODE_POLLING||s||w("options.target"),this.mode=r,this.target=s,this.interval=h,this.check=this.check.bind(this),this.throttledCheck=u(this.check,this.interval),this.isWatching=!1,this.listeners={change:[]}}return A(t,[{key:"hasTargetChanged",value:function(){if(!this.target)return!0;var t=new et(this.target);return this.currentDim&&t.isEqual(this.currentDim)?!1:(this.currentDim=t,!0)}},{key:"check",value:function(){return this.hasTargetChanged()&&this.dispatch("change",this.currentDim),this}},{key:"dispatch",value:function(t){for(var e=this,n=arguments.length,i=Array(n>1?n-1:0),r=1;n>r;r++)i[r-1]=arguments[r];return this.listeners[t].forEach(function(t){return t.apply(e,i)}),this}},{key:"on",value:function(t,e){return-1===this.listeners[t].indexOf(e)&&this.listeners[t].push(e),this}},{key:"off",value:function(t,e){return this.listeners[t]=this.listeners[t].filter(function(t){return t!==e}),this}},{key:"start",value:function(){return this.isWatching||(this.target&&(this.currentDim=new et(this.target)),this.mode===t.MODE_WINDOW?window.addEventListener("resize",this.throttledCheck):this.mode===t.MODE_POLLING&&(this.intervalId=window.setInterval(this.check,this.interval)),this.isWatching=!0),this}},{key:"stop",value:function(){return this.isWatching&&(this.mode===t.MODE_WINDOW?window.removeEventListener("resize",this.throttledCheck):this.mode===t.MODE_POLLING&&this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=null),this.isWatching=!1),this}},{key:"destroy",value:function(){return this.stop(),this.listeners.change=[],this}}]),t}();it.MODE_WINDOW="window",it.MODE_POLLING="polling";var rt=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?w("box"):arguments[0],n=arguments.length<=1||void 0===arguments[1]?w("container"):arguments[1],i=arguments[2],r=arguments[3];E(this,e);var a=P(this,Object.getPrototypeOf(e).call(this,r)),s=new nt(i);return a.fit=function(){return s.fit(t,n)},a}return j(e,t),A(e,[{key:"check",value:function(){if(this.hasTargetChanged()){var t=this.fit(),e=t.changed,n=t.dimension;e&&this.dispatch("change",n)}return this}}]),e}(it),at=function(){function t(){E(this,t);for(var e=arguments.length,n=Array(e),i=0;e>i;i++)n[i]=arguments[i];var r=g.apply(void 0,[this.constructor.getDefaultOptions()].concat(n));this._state={width:r.initialWidth,height:r.initialHeight,options:r},this._updateDimension=h(this._updateDimension.bind(this),1)}return A(t,null,[{key:"getDefaultOptions",value:function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return g.apply(void 0,[{initialWidth:720,initialHeight:500,margin:{top:30,right:30,bottom:30,left:30},offset:[.5,.5],pixelRatio:window.devicePixelRatio||1}].concat(e))}}]),A(t,[{key:"copyDimension",value:function(t){if(t){var e=t._state,n=e.width,i=e.height,r=t._state.options,a=r.offset,s=r.margin,o=r.pixelRatio;g(this._state,{width:n,height:i,options:{offset:a.concat(),margin:s,pixelRatio:o}}),this._updateDimension()}return this}},{key:"width",value:function(){if(0===arguments.length)return this._state.width;var t=Math.floor(+(arguments.length<=0?void 0:arguments[0]));return t!==this._state.width&&(this._state.width=t,this._updateDimension()),this}},{key:"height",value:function(){if(0===arguments.length)return this._state.height;var t=Math.floor(+(arguments.length<=0?void 0:arguments[0]));return t!==this._state.height&&(this._state.height=t,this._updateDimension()),this}},{key:"dimension",value:function(){if(0===arguments.length)return[this._state.width,this._state.height];var t=arguments.length<=0?void 0:arguments[0],e=W(t,2),n=e[0],i=e[1];return this.width(n).height(i),this}},{key:"margin",value:function(){if(0===arguments.length)return this._state.options.margin;var t=this._state.options.margin,e=p({},this._state.options.margin,arguments.length<=0?void 0:arguments[0]),n=Object.keys(e).some(function(n){return t[n]!==e[n]});return n&&(this._state.options.margin=e,this._updateDimension()),this}},{key:"offset",value:function(){if(0===arguments.length)return this._state.options.offset;var t=arguments.length<=0?void 0:arguments[0],e=W(this._state.options.offset,2),n=e[0],i=e[1],r=W(t,2),a=r[0],s=r[1];return(n!==a||i!==s)&&(this._state.options.offset=t,this._updateDimension()),this}},{key:"pixelRatio",value:function(){if(0===arguments.length)return this._state.options.pixelRatio;var t=+(arguments.length<=0?void 0:arguments[0]);return t!==this._state.options.pixelRatio&&(this._state.options.pixelRatio=t,this._updateDimension()),this}},{key:"_updateDimension",value:function(){return this}},{key:"updateDimensionNow",value:function(){return this._updateDimension(),this._updateDimension.flush(),this}}]),t}(),st=function(t){function r(t){var n;E(this,r);for(var i=arguments.length,a=Array(i>1?i-1:0),s=1;i>s;s++)a[s-1]=arguments[s];var o=P(this,(n=Object.getPrototypeOf(r)).call.apply(n,[this].concat(a)));p(o._state,{innerWidth:0,innerHeight:0,fitOptions:null,data:null,plates:[]}),o.container=e.select(t),o.container.style("line-height",0),o.chartRoot=o.container.append("div").classed("d3kit-chart-root",!0).style("display","inline-block").style("position","relative").style("line-height",0),o.plates={};var u=o.constructor.getCustomEventNames();return o.setupDispatcher(u),o._dispatchData=h(o._dispatchData.bind(o),1),o._dispatchOptions=h(o._dispatchOptions.bind(o),1),o}return j(r,t),A(r,null,[{key:"getCustomEventNames",value:function(){return[]}}]),A(r,[{key:"addPlate",value:function(t,e,n){if(this.plates[t])throw new Error("Plate with this name already exists",t);return this._state.plates.push(e),this.plates[t]=e,n?e:(e.getSelection().classed("d3kit-plate",!0).style("position","absolute").style("top",0).style("left",0),this.chartRoot.append(function(){return e.getNode()}),this)}},{key:"removePlate",value:function(t){var e=this.plates[t];if(e){var n=this._state.plates.indexOf(e);n>-1&&this._state.plates.splice(n,1),e.getNode().parentNode===this.chartRoot.node()&&this.chartRoot.node().removeChild(e.getNode()),delete this.plates[t]}return this}},{key:"setupDispatcher",value:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return this._customEventNames=t,this._eventNames=r.DEFAULT_EVENTS.concat(t),this.dispatcher=n.dispatch.apply(this,this._eventNames),this}},{key:"getCustomEventNames",value:function(){return this._customEventNames}},{key:"getInnerWidth",value:function(){return this._state.innerWidth}},{key:"getInnerHeight",value:function(){return this._state.innerHeight}},{key:"data",value:function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return this._state.data;var i=e[0];return this._state.data=i,this._dispatchData(),this}},{key:"options",value:function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return this._state.options;var i=e[0],r=p({},i);return i.margin&&(this.margin(i.margin),delete r.margin),i.offset&&(this.offset(i.offset),delete r.offset),i.pixelRatio&&(this.pixelRatio(i.pixelRatio),delete r.pixelRatio),this._state.options=g(this._state.options,r),this._dispatchOptions(),this}},{key:"_updateDimension",value:function(){var t=this,e=this._state,n=e.width,i=e.height,r=e.plates,a=this._state.options.margin,s=a.top,o=a.right,h=a.bottom,u=a.left;this._state.innerWidth=n-u-o,this._state.innerHeight=i-s-h,this.chartRoot.style("width",n+"px").style("height",i+"px"),r.forEach(function(e){e.copyDimension(t).updateDimensionNow()});var l=this._state,c=l.innerWidth,f=l.innerHeight;return this.dispatcher.apply("resize",this,[n,i,c,f]),this}},{key:"hasData",value:function(){var t=this._state.data;return null!==t&&void 0!==t}},{key:"hasNonZeroArea",value:function(){var t=this._state,e=t.innerWidth,n=t.innerHeight;return e>0&&n>0}},{key:"fit",value:function(t){var e=this,n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];t&&(this._state.fitOptions=t);var r=new nt(this._state.fitOptions),a=r.fit(this.dimension(),this.container.node()),s=a.changed,o=a.dimension;s&&this.dimension([o.width,o.height]);var h=!!n;return h&&(this.fitWatcher&&this.fitWatcher.destroy(),this.fitWatcher=new rt(function(){return e.dimension()},this.container.node(),this._state.fitOptions,i(n)?n:null).on("change",function(t){return e.dimension([t.width,t.height])}).start()),this}},{key:"stopFitWatcher",value:function(){return this.fitWatcher&&(this.fitWatcher.destroy(),this.fitWatcher=null),this}},{key:"_dispatchData",value:function(){return this.dispatcher.call("data",this,this._state.data),this}},{key:"_dispatchOptions",value:function(){return this.dispatcher.call("options",this,this._state.options),this}},{key:"on",value:function(t,e){return this.dispatcher.on(t,e),this}},{key:"off",value:function(t){return this.dispatcher.on(t,null),this}},{key:"dispatchAs",value:function(t){var e=this;return function(){for(var n=arguments.length,i=Array(n),r=0;n>r;r++)i[r]=arguments[r];e.dispatcher.apply(t,e,i)}}},{key:"destroy",value:function(){var t=this;return this._eventNames.forEach(function(e){t.off(e)}),this.stopFitWatcher(),this}}]),r}(at);st.DEFAULT_EVENTS=["data","options","resize"];var ot=function(t){function n(t){var i;E(this,n);for(var r=arguments.length,a=Array(r>1?r-1:0),s=1;r>s;s++)a[s-1]=arguments[s];var o=P(this,(i=Object.getPrototypeOf(n)).call.apply(i,[this].concat(a)));return o.node=t,o.selection=e.select(o.node),o}return j(n,t),A(n,[{key:"getNode",value:function(){return this.node}},{key:"getSelection",value:function(){return this.selection}}]),n}(at),ht=function(t){function e(){var t;E(this,e);for(var n=arguments.length,i=Array(n),r=0;n>r;r++)i[r]=arguments[r];return P(this,(t=Object.getPrototypeOf(e)).call.apply(t,[this,document.createElement("canvas")].concat(i)))}return j(e,t),A(e,[{key:"getContext2d",value:function(){var t=(this.width(),this.height(),this.pixelRatio()),e=this.margin(),n=e.top,i=e.left,r=this.offset(),a=W(r,2),s=a[0],o=a[1],h=this.node.getContext("2d");return h.setTransform(1,0,0,1,0,0),h.scale(t,t),h.translate(i+s,n+o),h}},{key:"clear",value:function(){var t=this.width(),e=this.height(),n=this.pixelRatio(),i=this.node.getContext("2d");return i.setTransform(1,0,0,1,0,0),i.scale(n,n),i.clearRect(0,0,t,e),this}},{key:"_updateDimension",value:function(){var t=this.width(),e=this.height(),n=this.pixelRatio();return this.node.setAttribute("width",t*n),this.node.setAttribute("height",e*n),this.node.style.width=t+"px",this.node.style.height=e+"px",this}}]),e}(ot),ut=function(t){function e(t){var n;E(this,e);for(var i=arguments.length,r=Array(i>1?i-1:0),a=1;i>a;a++)r[a-1]=arguments[a];var s=P(this,(n=Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(r)));return s.addPlate("canvas",new ht),s.canvas=s.plates.canvas.getSelection(),s.updateDimensionNow(),s}return j(e,t),A(e,[{key:"getContext2d",value:function(){return this.plates.canvas.getContext2d()}},{key:"clear",value:function(){return this.plates.canvas.clear(),this}}]),e}(st),lt=function(t){function e(){var t;E(this,e);for(var n=arguments.length,i=Array(n),r=0;n>r;r++)i[r]=arguments[r];var a=P(this,(t=Object.getPrototypeOf(e)).call.apply(t,[this,document.createElementNS("http://www.w3.org/2000/svg","svg")].concat(i)));return a.rootG=a.selection.append("g"),a.layers=new D(a.rootG),a}return j(e,t),A(e,[{key:"_updateDimension",value:function(){var t=this.width(),e=this.height(),n=this.margin(),i=n.top,r=n.left,a=this.offset(),s=W(a,2),o=s[0],h=s[1];return this.selection.attr("width",t).attr("height",e),this.rootG.attr("transform","translate("+(r+o)+","+(i+h)+")"),this}}]),e}(ot),ct=function(t){function e(t){var n;E(this,e);for(var i=arguments.length,r=Array(i>1?i-1:0),a=1;i>a;a++)r[a-1]=arguments[a];var s=P(this,(n=Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(r)));s.addPlate("svg",new lt);var o=s.plates.svg;return s.svg=o.getSelection(),s.rootG=o.rootG,s.layers=o.layers,s.updateDimensionNow(),s}return j(e,t),e}(ut),ft=function(t){function e(t){var n;E(this,e);for(var i=arguments.length,r=Array(i>1?i-1:0),a=1;i>a;a++)r[a-1]=arguments[a];var s=P(this,(n=Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(r)));s.addPlate("svg",new lt);var o=s.plates.svg;return s.svg=o.getSelection(),s.rootG=o.rootG,s.layers=o.layers,s.updateDimensionNow(),s}return j(e,t),e}(st),dt=function(t){function e(){var t;E(this,e);for(var n=arguments.length,i=Array(n),r=0;n>r;r++)i[r]=arguments[r];return P(this,(t=Object.getPrototypeOf(e)).call.apply(t,[this,document.createElement("div")].concat(i)))}return j(e,t),A(e,[{key:"_updateDimension",value:function(){var t=this.width(),e=this.height(),n=this.margin();return this.node.style.width=t-n.left-n.right+"px",this.node.style.height=e-n.top-n.bottom+"px",this.node.style.marginLeft=n.left+"px",this.node.style.marginRight=n.right+"px",this.node.style.marginTop=n.top+"px",this.node.style.marginBottom=n.bottom+"px",this}}]),e}(ot);t.helper=tt,t.AbstractChart=st,t.CanvasChart=ut,t.HybridChart=ct,t.SvgChart=ft,t.AbstractPlate=ot,t.CanvasPlate=ht,t.DivPlate=dt,t.SvgPlate=lt,t.LayerOrganizer=D,Object.defineProperty(t,"__esModule",{value:!0})});