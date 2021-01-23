/*
 *  tabellajs - v0.4.1
 *  2019-05-02
 *
 *  https://github.com/iliketomatoes/tabellajs
 */

/*
 *  Copyright (C) 2014-2017  Interpromotion <info@interpromotion.com>
 *  Copyright (C) 2014-2017  Giancarlo Soverini <giancarlosoverini@gmail.com>
 *
 *  This file is part of Tabellajs.
 *
 *  Tabellajs is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  Tabellajs is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>
 */


!function(a,b,c){"use strict";"function"==typeof define&&define.amd?define(a):b.Tabella=a()}(function(){"use strict";function a(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function b(a,b){(p(a,b)?r:q)(a,b)}function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b,c,d){var e=document.createElement(a);return e.className=b,d&&(e.innerHTML=d),c.appendChild(e),e}function e(a){return Array.prototype.slice.call(a,0)}function f(a,b,c){for(var d=b.split(" "),e=d.length;e--;)a.addEventListener(d[e],c,!1)}function g(a,b){var c=b||null,d=Array.prototype.slice.call(arguments,2);return a.apply(c,d)}function h(a,b){return Math.round(Math.abs(a)/b*1e3)}function i(a,b){var c=a.getBoundingClientRect(),d=b||0;return c.top<=0&&c.bottom>=d}function j(a){var b=a.getBoundingClientRect();return b.top>=0&&b.top<=(window.innerHeight||document.documentElement.clientHeight)&&b.bottom>=0&&b.bottom<=(window.innerHeight||document.documentElement.clientHeight)}function k(a){this.value=a,this.message="Tabella.js error: ",this.toString=function(){return this.message+this.value}}function l(a){return u.hasOwnProperty(a)?u[a]:u.easeInOutSine}function m(a,b){return n(a[0],a[1],a[2],a[3],b)}function n(a,b,c,d,e){var f=function(b){var d=1-b;return 3*d*d*b*a+3*d*b*b*c+b*b*b},g=function(a){var c=1-a;return 3*c*c*a*b+3*c*a*a*d+a*a*a},h=function(b){var d=1-b;return 3*(2*(b-1)*b+d*d)*a+3*(-b*b*b+2*d*b)*c};return function(a){var b,c,d,i,j,k,l=a;for(d=l,k=0;k<8;k++){if(i=f(d)-l,Math.abs(i)<e)return g(d);if(j=h(d),Math.abs(j)<1e-6)break;d-=i/j}if(b=0,c=1,(d=l)<b)return g(b);if(d>c)return g(c);for(;b<c;){if(i=f(d),Math.abs(i-l)<e)return g(d);l>i?b=d:c=d,d=.5*(c-b)+b}return g(d)}}function o(a,b){var d=this,f={tableHeader:null,rows:null,cellBreakpoints:{default:[0,1],small:[360,2],medium:[640,3],large:[820,4],xlarge:[1080,5]},descBreakpoints:{default:[0,0],medium:[460,160],large:[900,200]},from:"from",to:"to",currency:"&euro;",easing:"easeInOutSine",duration:600,reboundSpeed:300,edgeThreshold:150,swipeThreshold:60,swipeSingleTick:!0,onRefreshSize:!1,headerRowDevider:"-",emptyCell:"not set",fixedHeader:!0,fixedHeaderBottomThreshold:80,fixedHeaderTop:"0"};try{if(void 0===a)throw new k("You did not pass a valid target element to the constructor");if(void 0===b)throw new k("You did not pass any options to the constructor");if(d.options=c(f,b),!d.options.tableHeader||!d.options.rows)throw new k("tableHeader or rows are undefined or null")}catch(a){return console.error(a.toString()),!1}if(d.tableHeaderRow=null,d.slidingRows=null,d.arrows=null,d.pointer=0,d.currentBreakpoint={},d.currentCellWidth=0,d.currentWindowWidth=window.innerWidth,d.el=a,d.tableHeaderRow=D.setUpTableHeader(d.el,d.options),d.tableHeaderRow)try{if(!D.setUpRows(d.el,d.options))throw new k("Number of rows is zero");d.arrows=D.setUpArrows(d.tableHeaderRow,d.options),d.slidingRows=e(d.el.querySelectorAll(".t-sliding-row"));var g=function(a,b,c){var e;return function(){var f=arguments,g=function(){e=null,c||a.apply(d,f)},h=c&&!e;clearTimeout(e),e=setTimeout(g,b),h&&a.apply(d,f)}},h=function(){d.currentBreakpoint=d.getBreakpoint(),d.currentCellWidth=d.getCellWidth(d.currentBreakpoint),d.refreshSize()};"function"==typeof define&&define.amd?h():window.addEventListener("load",g(h,50)),window.addEventListener("resize",g(d.refreshSize,250)),d.attachEvents()}catch(a){return console.error(a.toString()),!1}}var p,q,r;"classList"in document.documentElement?(p=function(a,b){return a.classList.contains(b)},q=function(a,b){a.classList.add(b)},r=function(a,b){a.classList.remove(b)}):(p=function(b,c){return a(c).test(b.className)},q=function(a,b){p(a,b)||(a.className=a.className+" "+b)},r=function(b,c){b.className=b.className.replace(a(c)," ")});var s={hasClass:p,addClass:q,removeClass:r,toggleClass:b,has:p,add:q,remove:r,toggle:b},t=function(){for(var a="transform WebkitTransform MozTransform OTransform msTransform".split(" "),b=0;b<a.length;b++)if(void 0!==document.createElement("div").style[a[b]])return a[b];return!1}(),u={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]},v=0;window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-v)),d=window.setTimeout(function(){a(b+c)},c);return v=b+c,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var w=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.requestAnimationFrame,x=window.mozCancelAnimationFrame||window.cancelAnimationFrame,y={easeing:"easeInOutSine",animated:!1,dragged:null,getAnimationCurve:function(a,b){return m(b,1e3/60/a/4)},actualAnimation:function(a,b,c,d,e,f){function g(b){null===k&&(k=b);var l=b-k,m=l/c;m>=1&&(m=1);var n=d(m).toFixed(2);i.step(a,n,e,j),1===m?(x(h),k=null,f&&(i.animated=!1)):w(g)}var h,i=this,j=e-b,k=null;h=w(g)},step:function(a,b,c,d){this.offset(a,parseInt(c)+parseInt((d-c)*b))},offset:function(a,b){if(void 0===b){if(t){return a.style[t]?a.style[t].match(/-?\d+/g)[0]:0}return a.style.left}t?a.style[t]="translate("+b+"px, 0px)":a.style.left=b+"px"},animate:function(a,b,c,d){var e=this,f=d||e.easeing,g=l(f);if(e.animated)return!1;e.animated=!0;var h=e.getAnimationCurve(c,g);return a.forEach(function(a,d,f){d+1===f.length?e.actualAnimation(a,b,c,h,e.offset(a),!0):e.actualAnimation(a,b,c,h,e.offset(a))}),!0},resetRows:function(a){var b=this;return a.forEach(function(a){b.offset(a,0)}),b.animated=!1,!0},drag:function(a,b){var c=this;if(c.animated)return!1;a.forEach(function(a){c.dragged=w(function(){c.offset(a,b)})})},stopDragging:function(){x(this.dragged)}},z=function(a){var b=a.toLowerCase(),c="MS"+a;return window.navigator.msPointerEnabled?c:b},A={start:z("PointerDown")+" touchstart mousedown",end:z("PointerUp")+" touchend mouseup",move:z("PointerMove")+" touchmove mousemove"},B=function(a){return a.targetTouches?a.targetTouches[0]:a},C={points:{cachedX:null,cachedY:null,currX:null,currY:null},touchStarted:!1,touchEvents:A,getPointerEvent:B,onTouchStart:function(a){var b=this,c=b.getPointerEvent(a);return b.points.cachedX=b.points.currX=c.pageX,b.points.cachedY=b.points.currY=c.pageY,b.touchStarted=!0,b.points},onTouchEnd:function(){var a=this,b=a.points.cachedY-a.points.currY,c=a.points.cachedX-a.points.currX;return a.touchStarted=!1,{deltaX:c,deltaY:b}},onTouchMove:function(a){var b=this;if(!1===b.touchStarted)return!1;var c=b.getPointerEvent(a);return b.points.currX=c.pageX,b.points.currY=c.pageY,!(Math.abs(b.points.cachedY-b.points.currY)>=Math.abs(b.points.cachedX-b.points.currX)/2)&&b.points}},D={setUpTableHeader:function(a,b){var c,e=b.tableHeader,f=document.createDocumentFragment();try{if(!(e instanceof Array&&e.length))throw new k("tableHeader is not an Array");var g=d("div","t-fixed-header",f);c=d("div","t-row t-first-row",g);var h=d("div","t-row-content-wrapper",c),i=d("div","t-row-content",h),j='<div class="t-element">';j+='<div class="t-cell-desc-l">',j+=b.from,void 0!==e[0][1]&&(j+='<span class="t-header-devider">'+b.headerRowDevider+"</span>",j+=b.to),j+="</div>",j+="</div>",d("div","t-row-desc",i,j);for(var l=d("div","t-row-values",i),m=d("div","t-sliding-row",l),n=0;n<e.length;n++){var o=document.createElement("div");o.className="t-row-cell";var p='<div class="t-cell-desc-s">';p+=b.from,void 0!==e[n][1]&&(p+='<span class="t-header-devider">'+b.headerRowDevider+"</span>",p+=b.to),p+="</div>",p+='<div class="t-cell-value t-bold">',p+=void 0!==e[n][0]?e[n][0]:"not set",void 0!==e[n][1]&&(p+='<span class="t-header-devider">'+b.headerRowDevider+"</span>",p+=e[n][1]),p+="</div>",d("div","t-element",o,p),m.appendChild(o)}a.appendChild(f)}catch(a){c=!1,console.error(a.toString())}finally{return c}},setUpRows:function(a,b){var c=b.tableHeader,e=b.rows,f=e.length,g=document.createDocumentFragment();if(f>0){for(var h=0;h<f;h++){var i=d("div","t-row",g);if(e[h].rowHeader&&d("section","t-row-header",i,e[h].rowHeader),e[h].rowVal)for(var j=0;j<e[h].rowVal.length;j++){var k=d("div","t-row-content-wrapper",i),l=d("div","t-row-content",k),m='<div class="t-element">';m+='<div class="t-cell-desc-l">',m+=void 0!==e[h].rowDesc&&e[h].rowDesc[j]?e[h].rowDesc[j]:"",m+="</div>",m+="</div>";var n="t-row-desc";j>=1&&(n+=" t-cell-border-top"),d("div",n,l,m);for(var o=d("div","t-row-values",l),p=d("div","t-sliding-row",o),q=0;q<c.length;q++){var r=document.createElement("div"),s="t-row-cell";j>=1&&(s+=" t-cell-border-top"),r.className=s;var t="";void 0!==e[h].rowDesc&&e[h].rowDesc[j]&&(t+='<div class="t-cell-desc-s">',t+=e[h].rowDesc[j],t+="</div>"),t+='<div class="t-cell-value">',void 0!==e[h].rowVal[j][q]?(t+=e[h].rowVal[j][q],isNaN(e[h].rowVal[j][q])||(t+=" "+b.currency)):t+=b.emptyCell,t+="</div>",d("div","t-element",r,t),p.appendChild(r)}}}return a.appendChild(g),f}return!1},setUpArrows:function(a,b){var c=d("div","t-arr-right t-hide",a),e=d("div","t-arr-left t-hide",a);if(b.leftArrow)e.appendChild(b.leftArrow);else{var f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("viewBox","0 0 100 100");var g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"),g.setAttribute("transform","translate(15,0)"),g.setAttribute("class","t-svg-arrow"),f.appendChild(g),e.appendChild(f)}if(b.rightArrow)c.appendChild(b.rightArrow);else{var h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("viewBox","0 0 100 100");var i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"),i.setAttribute("transform","translate(85,100) rotate(180)"),i.setAttribute("class","t-svg-arrow"),h.appendChild(i),c.appendChild(h)}return{arrowRight:c,arrowLeft:e}}};return o.prototype.attachEvents=function(){var a=this;y.easing=a.options.easing,a.arrows.arrowLeft.addEventListener("click",function(){a.move("left")}),a.arrows.arrowRight.addEventListener("click",function(){a.move("right")});var b,c,d,e,g,h,k=a.options.tableHeader.length,l=a.tableHeaderRow.querySelector(".t-sliding-row"),m=!0,n=0;a.slidingRows.forEach(function(i){f(i,C.touchEvents.start,function(b){d=y.offset(l),c=C.onTouchStart(b),g=parseInt(a.currentCellWidth),n=0,h=a.pointer}),f(i,C.touchEvents.move,function(f){if((b=C.onTouchMove(f))&&m){if(e=b.currX-c.cachedX,y.drag(a.slidingRows,e+parseInt(d)),n=Math.abs(Math.floor(e/a.options.swipeThreshold)),a.options.swipeSingleTick&&n>=1&&(n=1),e>=0)0===a.pointer?parseInt(y.offset(l))>=a.options.edgeThreshold&&(m=!1):a.pointer=h-n;else if(a.pointer===k-a.currentBreakpoint.cellBreakpoint[1]||k<a.currentBreakpoint.cellBreakpoint[1]){var i=Math.abs(parseInt(y.offset(l)));i>=a.options.edgeThreshold+g*a.pointer&&(m=!1)}else a.pointer=h+n;c=b}}),f(i,C.touchEvents.end,function(){C.onTouchEnd(),d=0;var b=parseInt(y.offset(l));a.resetDragging(parseInt(b+a.pointer*g)),m=!0,a.updateArrows()})}),a.options.fixedHeader&&f(window,"scroll",function(){if(j(a.el)&&"relative"===a.tableHeaderRow.getAttribute("data-position"))return!1;if(j(a.el))return a.unsetFixedHeader(),!1;if(i(a.el,a.options.fixedHeaderBottomThreshold))a.setFixedHeader();else{if("relative"===a.tableHeaderRow.getAttribute("data-position"))return!1;a.unsetFixedHeader()}})},o.prototype.resetDragging=function(a){var b=this;y.stopDragging(),y.animate(b.slidingRows,a,h(a,b.options.reboundSpeed),"easeOutBack")},o.prototype.setFixedHeader=function(){var a=this,b=a.tableHeaderRow.parentElement;b.style.width=b.clientWidth+"px",b.style.height=b.clientHeight+"px",a.tableHeaderRow.style.top=a.options.fixedHeaderTop,a.tableHeaderRow.style.marginTop=0,a.tableHeaderRow.style.width=b.clientWidth+"px",a.tableHeaderRow.style.height=b.clientHeight+"px",s.add(a.tableHeaderRow,"t-shadow"),a.tableHeaderRow.style.position="fixed",a.tableHeaderRow.setAttribute("data-position","fixed")},o.prototype.unsetFixedHeader=function(){var a=this;a.tableHeaderRow.style.position="relative",a.tableHeaderRow.setAttribute("data-position","relative"),s.remove(a.tableHeaderRow,"t-shadow");var b=a.tableHeaderRow.parentElement;b.style.width="auto",b.style.height="auto",a.tableHeaderRow.style.top="",a.tableHeaderRow.style.marginTop="",a.tableHeaderRow.style.width="auto",a.tableHeaderRow.style.height="auto"},o.prototype.refreshSize=function(){var a=this,b=a.currentBreakpoint,c=a.currentBreakpoint=a.getBreakpoint(),d=a.currentWindowWidth;a.currentWindowWidth=window.innerWidth;var f=a.currentCellWidth,h=a.currentCellWidth=a.getCellWidth(c),i=c.descBreakpoint[1],j=a.options.tableHeader.length;a.refreshArrowPosition(i),a.options.fixedHeader&&d!==a.currentWindowWidth&&a.unsetFixedHeader(),e(a.el.querySelectorAll(".t-row")).forEach(function(a){var b=e(a.querySelectorAll(".t-row-content"));c.descBreakpoint[1]>0?b.forEach(function(a){a.style.width=i+j*h+"px";var b=a.querySelector(".t-row-desc");b.style.width=i+"px",s.remove(b,"t-hide"),e(a.querySelectorAll(".t-row-cell")).forEach(function(a){a.style.width=h+"px"}),e(a.querySelectorAll(".t-cell-desc-s")).forEach(function(a){s.add(a,"t-hide")})}):b.forEach(function(a){a.style.width=j*h+"px",s.add(a.querySelector(".t-row-desc"),"t-hide"),e(a.querySelectorAll(".t-row-cell")).forEach(function(a){a.style.width=h+"px"}),e(a.querySelectorAll(".t-cell-desc-s")).forEach(function(a){s.remove(a,"t-hide")})})}),a.pointer>0&&(b.cellBreakpoint[0]!=c.cellBreakpoint[0]||b.descBreakpoint[1]!=c.descBreakpoint[1]?a.move():f!=h&&a.move(parseInt(h-f)*parseInt(a.pointer))),"function"==typeof a.options.onRefreshSize&&g(a.options.onRefreshSize,a),a.arrowsCentering()},o.prototype.getCellWidth=function(a){var b,c=this,d=c.options.tableHeader.length,e=a.cellBreakpoint,f=a.descBreakpoint;return b=e[1]>d?(c.el.clientWidth-f[1])/d:(c.el.clientWidth-f[1])/e[1],Math.round(b)},o.prototype.getBreakpoint=function(){var a=this,b=0,c=a.el.clientWidth,d=a.options.cellBreakpoints,e=a.options.descBreakpoints,f=[0,1],g=[0,0];for(var h in d){var i=d[h][0];"number"==typeof i&&i>0&&i<=c&&Math.abs(c-i)<Math.abs(c-b)&&(b=i,f=d[h])}b=0;for(var j in e){var k=e[j][0];"number"==typeof k&&k>0&&k<=c&&Math.abs(c-k)<Math.abs(c-b)&&(b=k,g=e[j])}return{cellBreakpoint:f,descBreakpoint:g}},o.prototype.refreshArrowPosition=function(a){var b=this,c=a||b.currentBreakpoint.descBreakpoint[1];b.arrows.arrowLeft.style.left=c+"px",b.updateArrows()},o.prototype.updateArrows=function(){var a=this,b=a.currentBreakpoint||a.getBreakpoint(),c=a.options.tableHeader.length;c>b.cellBreakpoint[1]?0===a.pointer?(s.add(a.arrows.arrowLeft,"t-hide"),s.remove(a.arrows.arrowRight,"t-hide")):a.pointer===c-b.cellBreakpoint[1]?(s.remove(a.arrows.arrowLeft,"t-hide"),s.add(a.arrows.arrowRight,"t-hide")):(s.remove(a.arrows.arrowLeft,"t-hide"),s.remove(a.arrows.arrowRight,"t-hide")):(s.add(a.arrows.arrowLeft,"t-hide"),s.add(a.arrows.arrowRight,"t-hide"))},o.prototype.move=function(a){var b=this,c=b.getCellWidth(b.currentBreakpoint);"right"===a?y.animate(b.slidingRows,c,b.options.duration)&&b.pointer++:"left"===a?y.animate(b.slidingRows,-c,b.options.duration)&&b.pointer--:"number"==typeof a?y.animate(b.slidingRows,a,h(a,b.options.reboundSpeed))&&(b.pointer=a):(y.resetRows(b.slidingRows),b.pointer=0),b.updateArrows()},o.prototype.setSingleTick=function(a){this.options.swipeSingleTick=!!a},o.prototype.getCurrentBreakPoint=function(){return this.currentBreakpoint},o.prototype.arrowsCentering=function(){var a=this,b=a.tableHeaderRow.offsetHeight,c=a.arrows.arrowRight.offsetHeight;if(c&&b>c){var d=parseInt((b-c)/2-1);a.arrows.arrowRight.style.marginTop=d+"px",a.arrows.arrowLeft.style.marginTop=d+"px"}},o},window,document);