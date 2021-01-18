/*
 * angular-gridster
 * http://manifestwebdesign.github.io/angular-gridster
 *
 * @version: 0.13.14
 * @license: MIT
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["angular"],b):"object"==typeof exports?module.exports=b(require("angular")):b(a.angular)}(this,function(a){"use strict";return a.module("gridster",[]).constant("gridsterConfig",{columns:6,pushing:!0,floating:!0,swapping:!1,width:"auto",colWidth:"auto",rowHeight:"match",margins:[10,10],outerMargin:!0,sparse:!1,isMobile:!1,mobileBreakPoint:600,mobileModeEnabled:!0,minColumns:1,minRows:1,maxRows:100,defaultSizeX:2,defaultSizeY:1,minSizeX:1,maxSizeX:null,minSizeY:1,maxSizeY:null,saveGridItemCalculatedHeightInMobile:!1,resizable:{enabled:!0,handles:["s","e","n","w","se","ne","sw","nw"]},draggable:{enabled:!0,scrollSensitivity:20,scrollSpeed:15}}).controller("GridsterCtrl",["gridsterConfig","$timeout",function(b,c){var d=this;a.extend(this,b),this.resizable=a.extend({},b.resizable||{}),this.draggable=a.extend({},b.draggable||{});var e=!1;this.layoutChanged=function(){e||(e=!0,c(function(){e=!1,d.loaded&&d.floatItemsUp(),d.updateHeight(d.movingItem?d.movingItem.sizeY:0)},30))},this.grid=[],this.allItems=[],this.destroy=function(){this.grid&&(this.grid=[]),this.$element=null,this.allItems&&(this.allItems.length=0,this.allItems=null)},this.setOptions=function(b){if(b)if(b=a.extend({},b),b.draggable&&(a.extend(this.draggable,b.draggable),delete b.draggable),b.resizable&&(a.extend(this.resizable,b.resizable),delete b.resizable),a.extend(this,b),this.margins&&2===this.margins.length)for(var c=0,d=this.margins.length;c<d;++c)this.margins[c]=parseInt(this.margins[c],10),isNaN(this.margins[c])&&(this.margins[c]=0);else this.margins=[0,0]},this.canItemOccupy=function(a,b,c){return b>-1&&c>-1&&a.sizeX+c<=this.columns&&a.sizeY+b<=this.maxRows},this.autoSetItemPosition=function(a){for(var b=0;b<this.maxRows;++b)for(var c=0;c<this.columns;++c){var d=this.getItems(b,c,a.sizeX,a.sizeY,a);if(0===d.length&&this.canItemOccupy(a,b,c))return void this.putItem(a,b,c)}throw new Error("Unable to place item!")},this.getItems=function(a,b,c,d,e){var f=[];c&&d||(c=d=1),!e||e instanceof Array||(e=[e]);var g;if(this.sparse===!1)for(var h=0;h<d;++h)for(var i=0;i<c;++i)g=this.getItem(a+h,b+i,e),!g||e&&e.indexOf(g)!==-1||f.indexOf(g)!==-1||f.push(g);else for(var j=a+d-1,k=b+c-1,l=0;l<this.allItems.length;++l)g=this.allItems[l],!g||e&&e.indexOf(g)!==-1||f.indexOf(g)!==-1||!this.intersect(g,b,k,a,j)||f.push(g);return f},this.getBoundingBox=function(a){if(0===a.length)return null;if(1===a.length)return{row:a[0].row,col:a[0].col,sizeY:a[0].sizeY,sizeX:a[0].sizeX};for(var b=0,c=0,d=9999,e=9999,f=0,g=a.length;f<g;++f){var h=a[f];d=Math.min(h.row,d),e=Math.min(h.col,e),b=Math.max(h.row+h.sizeY,b),c=Math.max(h.col+h.sizeX,c)}return{row:d,col:e,sizeY:b-d,sizeX:c-e}},this.intersect=function(a,b,c,d,e){return b<=a.col+a.sizeX-1&&c>=a.col&&d<=a.row+a.sizeY-1&&e>=a.row},this.removeItem=function(a){for(var b,c=0,d=this.grid.length;c<d;++c){var e=this.grid[c];if(e&&(b=e.indexOf(a),b!==-1)){e[b]=null;break}}this.sparse&&(b=this.allItems.indexOf(a),b!==-1&&this.allItems.splice(b,1)),this.layoutChanged()},this.getItem=function(a,b,c){!c||c instanceof Array||(c=[c]);for(var d=1;a>-1;){for(var e=1,f=b;f>-1;){var g=this.grid[a];if(g){var h=g[f];if(h&&(!c||c.indexOf(h)===-1)&&h.sizeX>=e&&h.sizeY>=d)return h}++e,--f}--a,++d}return null},this.putItems=function(a){for(var b=0,c=a.length;b<c;++b)this.putItem(a[b])},this.putItem=function(a,b,c,d){if(("undefined"==typeof b||null===b)&&(b=a.row,c=a.col,"undefined"==typeof b||null===b))return void this.autoSetItemPosition(a);if(this.canItemOccupy(a,b,c)||(c=Math.min(this.columns-a.sizeX,Math.max(0,c)),b=Math.min(this.maxRows-a.sizeY,Math.max(0,b))),null!==a.oldRow&&"undefined"!=typeof a.oldRow){var e=a.oldRow===b&&a.oldColumn===c,f=this.grid[b]&&this.grid[b][c]===a;if(e&&f)return a.row=b,void(a.col=c);var g=this.grid[a.oldRow];g&&g[a.oldColumn]===a&&delete g[a.oldColumn]}a.oldRow=a.row=b,a.oldColumn=a.col=c,this.moveOverlappingItems(a,d),this.grid[b]||(this.grid[b]=[]),this.grid[b][c]=a,this.sparse&&this.allItems.indexOf(a)===-1&&this.allItems.push(a),this.movingItem===a&&this.floatItemUp(a),this.layoutChanged()},this.swapItems=function(a,b){this.grid[a.row][a.col]=b,this.grid[b.row][b.col]=a;var c=a.row,d=a.col;a.row=b.row,a.col=b.col,b.row=c,b.col=d},this.moveOverlappingItems=function(a,b){b?b.indexOf(a)===-1&&(b=b.slice(0),b.push(a)):b=[a];var c=this.getItems(a.row,a.col,a.sizeX,a.sizeY,b);this.moveItemsDown(c,a.row+a.sizeY,b)},this.moveItemsDown=function(a,b,c){if(a&&0!==a.length){a.sort(function(a,b){return a.row-b.row}),c=c?c.slice(0):[];var d,e,f,g={};for(e=0,f=a.length;e<f;++e){d=a[e];var h=g[d.col];("undefined"==typeof h||d.row<h)&&(g[d.col]=d.row)}for(e=0,f=a.length;e<f;++e){d=a[e];var i=b-g[d.col];this.moveItemDown(d,d.row+i,c),c.push(d)}}},this.moveItemDown=function(a,b,c){if(!(a.row>=b)){for(;a.row<b;)++a.row,this.moveOverlappingItems(a,c);this.putItem(a,a.row,a.col,c)}},this.floatItemsUp=function(){if(this.floating!==!1)for(var a=0,b=this.grid.length;a<b;++a){var c=this.grid[a];if(c)for(var d=0,e=c.length;d<e;++d){var f=c[d];f&&this.floatItemUp(f)}}},this.floatItemUp=function(a){if(this.floating!==!1){for(var b=a.col,c=a.sizeY,d=a.sizeX,e=null,f=null,g=a.row-1;g>-1;){var h=this.getItems(g,b,d,c,a);if(0!==h.length)break;e=g,f=b,--g}null!==e&&this.putItem(a,e,f)}},this.updateHeight=function(a){var b=this.minRows;a=a||0;for(var c=this.grid.length;c>=0;--c){var d=this.grid[c];if(d)for(var e=0,f=d.length;e<f;++e)d[e]&&(b=Math.max(b,c+a+d[e].sizeY))}this.gridHeight=this.maxRows-b>0?Math.min(this.maxRows,b):Math.max(this.maxRows,b)},this.pixelsToRows=function(a,b){return this.outerMargin||(a+=this.margins[0]/2),b===!0?Math.ceil(a/this.curRowHeight):b===!1?Math.floor(a/this.curRowHeight):Math.round(a/this.curRowHeight)},this.pixelsToColumns=function(a,b){return this.outerMargin||(a+=this.margins[1]/2),b===!0?Math.ceil(a/this.curColWidth):b===!1?Math.floor(a/this.curColWidth):Math.round(a/this.curColWidth)}}]).directive("gridsterPreview",function(){return{replace:!0,scope:!0,require:"^gridster",template:'<div ng-style="previewStyle()" class="gridster-item gridster-preview-holder"></div>',link:function(a,b,c,d){a.previewStyle=function(){return d.movingItem?{display:"block",height:d.movingItem.sizeY*d.curRowHeight-d.margins[0]+"px",width:d.movingItem.sizeX*d.curColWidth-d.margins[1]+"px",top:d.movingItem.row*d.curRowHeight+(d.outerMargin?d.margins[0]:0)+"px",left:d.movingItem.col*d.curColWidth+(d.outerMargin?d.margins[1]:0)+"px"}:{display:"none"}}}}}).directive("gridster",["$timeout","$window","$rootScope","gridsterDebounce",function(b,c,d,e){return{scope:!0,restrict:"EAC",controller:"GridsterCtrl",controllerAs:"gridster",compile:function(f){return f.prepend('<div ng-if="gridster.movingItem" gridster-preview></div>'),function(f,g,h,i){function j(){g.css("height",i.gridHeight*i.curRowHeight+(i.outerMargin?i.margins[0]:-i.margins[0])+"px")}function k(a){if(i.setOptions(a),l(g[0])){"auto"===i.width?i.curWidth=g[0].offsetWidth||parseInt(g.css("width"),10):i.curWidth=i.width,"auto"===i.colWidth?i.curColWidth=(i.curWidth+(i.outerMargin?-i.margins[1]:i.margins[1]))/i.columns:i.curColWidth=i.colWidth,i.curRowHeight=i.rowHeight,"string"==typeof i.rowHeight&&("match"===i.rowHeight?i.curRowHeight=Math.round(i.curColWidth):i.rowHeight.indexOf("*")!==-1?i.curRowHeight=Math.round(i.curColWidth*i.rowHeight.replace("*","").replace(" ","")):i.rowHeight.indexOf("/")!==-1&&(i.curRowHeight=Math.round(i.curColWidth/i.rowHeight.replace("/","").replace(" ","")))),i.isMobile=i.mobileModeEnabled&&i.curWidth<=i.mobileBreakPoint;for(var b=0,c=i.grid.length;b<c;++b){var d=i.grid[b];if(d)for(var e=0,f=d.length;e<f;++e)if(d[e]){var h=d[e];h.setElementPosition(),h.setElementSizeY(),h.setElementSizeX()}}j()}}i.loaded=!1,i.$element=g,f.gridster=i,g.addClass("gridster");var l=function(a){return"hidden"!==a.style.visibility&&"none"!==a.style.display};f.$watch(function(){return i.gridHeight},j),f.$watch(function(){return i.movingItem},function(){i.updateHeight(i.movingItem?i.movingItem.sizeY:0)});var m=h.gridster;m?f.$parent.$watch(m,function(a){k(a)},!0):k({}),f.$watch(function(){return i.loaded},function(){i.loaded?(g.addClass("gridster-loaded"),d.$broadcast("gridster-loaded",i)):g.removeClass("gridster-loaded")}),f.$watch(function(){return i.isMobile},function(){i.isMobile?g.addClass("gridster-mobile").removeClass("gridster-desktop"):g.removeClass("gridster-mobile").addClass("gridster-desktop"),d.$broadcast("gridster-mobile-changed",i)}),f.$watch(function(){return i.draggable},function(){d.$broadcast("gridster-draggable-changed",i)},!0),f.$watch(function(){return i.resizable},function(){d.$broadcast("gridster-resizable-changed",i)},!0);var n=g[0].offsetWidth||parseInt(g.css("width"),10),o=function(){var a=g[0].offsetWidth||parseInt(g.css("width"),10);a&&a!==n&&!i.movingItem&&(n=a,i.loaded&&g.removeClass("gridster-loaded"),k(),i.loaded&&g.addClass("gridster-loaded"),d.$broadcast("gridster-resized",[a,g[0].offsetHeight],i))},p=e(function(){o(),b(function(){f.$apply()})},100);f.$watch(function(){return l(g[0])},p),"function"==typeof window.addResizeListener?window.addResizeListener(g[0],p):f.$watch(function(){return g[0].offsetWidth||parseInt(g.css("width"),10)},o);var q=a.element(c);q.on("resize",p),f.$on("$destroy",function(){i.destroy(),q.off("resize",p),"function"==typeof window.removeResizeListener&&window.removeResizeListener(g[0],p)}),b(function(){f.$watch("gridster.floating",function(){i.floatItemsUp()}),i.loaded=!0},100)}}}}]).controller("GridsterItemCtrl",function(){this.$element=null,this.gridster=null,this.row=null,this.col=null,this.sizeX=null,this.sizeY=null,this.minSizeX=0,this.minSizeY=0,this.maxSizeX=null,this.maxSizeY=null,this.init=function(a,b){this.$element=a,this.gridster=b,this.sizeX=b.defaultSizeX,this.sizeY=b.defaultSizeY},this.destroy=function(){this.gridster=null,this.$element=null},this.toJSON=function(){return{row:this.row,col:this.col,sizeY:this.sizeY,sizeX:this.sizeX}},this.isMoving=function(){return this.gridster.movingItem===this},this.setPosition=function(a,b){this.gridster.putItem(this,a,b),this.isMoving()||this.setElementPosition()},this.setSize=function(a,b,c){a=a.toUpperCase();var d="size"+a,e="Size"+a;if(""!==b){b=parseInt(b,10),(isNaN(b)||0===b)&&(b=this.gridster["default"+e]);var f="X"===a?this.gridster.columns:this.gridster.maxRows;this["max"+e]&&(f=Math.min(this["max"+e],f)),this.gridster["max"+e]&&(f=Math.min(this.gridster["max"+e],f)),"X"===a&&this.cols?f-=this.cols:"Y"===a&&this.rows&&(f-=this.rows);var g=0;this["min"+e]&&(g=Math.max(this["min"+e],g)),this.gridster["min"+e]&&(g=Math.max(this.gridster["min"+e],g)),b=Math.max(Math.min(b,f),g);var h=this[d]!==b||this["old"+e]&&this["old"+e]!==b;return this["old"+e]=this[d]=b,this.isMoving()||this["setElement"+e](),!c&&h&&(this.gridster.moveOverlappingItems(this),this.gridster.layoutChanged()),h}},this.setSizeY=function(a,b){return this.setSize("Y",a,b)},this.setSizeX=function(a,b){return this.setSize("X",a,b)},this.setElementPosition=function(){this.gridster.isMobile?this.$element.css({marginLeft:this.gridster.margins[0]+"px",marginRight:this.gridster.margins[0]+"px",marginTop:this.gridster.margins[1]+"px",marginBottom:this.gridster.margins[1]+"px",top:"",left:""}):this.$element.css({margin:0,top:this.row*this.gridster.curRowHeight+(this.gridster.outerMargin?this.gridster.margins[0]:0)+"px",left:this.col*this.gridster.curColWidth+(this.gridster.outerMargin?this.gridster.margins[1]:0)+"px"})},this.setElementSizeY=function(){this.gridster.isMobile&&!this.gridster.saveGridItemCalculatedHeightInMobile?this.$element.css("height",""):this.$element.css("height",this.sizeY*this.gridster.curRowHeight-this.gridster.margins[0]+"px")},this.setElementSizeX=function(){this.gridster.isMobile?this.$element.css("width",""):this.$element.css("width",this.sizeX*this.gridster.curColWidth-this.gridster.margins[1]+"px")},this.getElementSizeX=function(){return this.sizeX*this.gridster.curColWidth-this.gridster.margins[1]},this.getElementSizeY=function(){return this.sizeY*this.gridster.curRowHeight-this.gridster.margins[0]}}).factory("GridsterTouch",[function(){return function(a,b,c,d){var e,f,g={},h=function(a){if(Object.keys)return Object.keys(a).length;var b,c=0;for(b in a)++c;return c},i=function(a){for(var b=0,c=0,d=navigator.userAgent.match(/\bMSIE\b/),e=a;null!=e;e=e.offsetParent)d&&(!document.documentMode||document.documentMode<8)&&"relative"===e.currentStyle.position&&e.offsetParent&&"relative"===e.offsetParent.currentStyle.position&&e.offsetLeft===e.offsetParent.offsetLeft?c+=e.offsetTop:(b+=e.offsetLeft,c+=e.offsetTop);return{x:b,y:c}},j=i(a),k=!1,l=function(e){if("mousemove"!==e.type||0!==h(g)){for(var f=!0,m=e.changedTouches?e.changedTouches:[e],n=0;n<m.length;++n){var o=m[n],p="undefined"!=typeof o.identifier?o.identifier:"undefined"!=typeof o.pointerId?o.pointerId:1;if("undefined"==typeof o.pageX)if(o.pageX=o.offsetX+j.x,o.pageY=o.offsetY+j.y,o.srcElement.offsetParent===a&&document.documentMode&&8===document.documentMode&&"mousedown"===o.type)o.pageX+=o.srcElement.offsetLeft,o.pageY+=o.srcElement.offsetTop;else if(o.srcElement!==a&&!document.documentMode||document.documentMode<8){for(var q=-2,r=-2,s=o.srcElement;null!==s;s=s.parentNode)q+=s.scrollLeft?s.scrollLeft:0,r+=s.scrollTop?s.scrollTop:0;o.pageX=o.clientX+q,o.pageY=o.clientY+r}var t=o.pageX,u=o.pageY;e.type.match(/(start|down)$/i)?(j=i(a),g[p]&&(d&&d({target:e.target,which:e.which,pointerId:p,pageX:t,pageY:u}),delete g[p]),b&&f&&(f=b({target:e.target,which:e.which,pointerId:p,pageX:t,pageY:u})),g[p]={x:t,y:u},a.msSetPointerCapture&&f?a.msSetPointerCapture(p):"mousedown"===e.type&&1===h(g)&&(k?a.setCapture(!0):(document.addEventListener("mousemove",l,!1),document.addEventListener("mouseup",l,!1)))):e.type.match(/move$/i)?!g[p]||g[p].x===t&&g[p].y===u||(c&&f&&(f=c({target:e.target,which:e.which,pointerId:p,pageX:t,pageY:u})),g[p].x=t,g[p].y=u):g[p]&&e.type.match(/(up|end|cancel)$/i)&&(d&&f&&(f=d({target:e.target,which:e.which,pointerId:p,pageX:t,pageY:u})),delete g[p],a.msReleasePointerCapture?a.msReleasePointerCapture(p):"mouseup"===e.type&&0===h(g)&&(k?a.releaseCapture():(document.removeEventListener("mousemove",l,!1),document.removeEventListener("mouseup",l,!1))))}f&&(e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation(),e.preventMouseEvent&&e.preventMouseEvent())}};return this.enable=function(){window.navigator.msPointerEnabled?(a.addEventListener("MSPointerDown",l,!1),a.addEventListener("MSPointerMove",l,!1),a.addEventListener("MSPointerUp",l,!1),a.addEventListener("MSPointerCancel",l,!1),"undefined"!=typeof a.style.msContentZooming&&(e=a.style.msContentZooming,a.style.msContentZooming="none"),"undefined"!=typeof a.style.msTouchAction&&(f=a.style.msTouchAction,a.style.msTouchAction="none")):a.addEventListener?(a.addEventListener("touchstart",l,!1),a.addEventListener("touchmove",l,!1),a.addEventListener("touchend",l,!1),a.addEventListener("touchcancel",l,!1),a.addEventListener("mousedown",l,!1),a.setCapture&&!window.navigator.userAgent.match(/\bGecko\b/)&&(k=!0,a.addEventListener("mousemove",l,!1),a.addEventListener("mouseup",l,!1))):a.attachEvent&&a.setCapture&&(k=!0,a.attachEvent("onmousedown",function(){return l(window.event),window.event.returnValue=!1,!1}),a.attachEvent("onmousemove",function(){return l(window.event),window.event.returnValue=!1,!1}),a.attachEvent("onmouseup",function(){return l(window.event),window.event.returnValue=!1,!1}))},this.disable=function(){window.navigator.msPointerEnabled?(a.removeEventListener("MSPointerDown",l,!1),a.removeEventListener("MSPointerMove",l,!1),a.removeEventListener("MSPointerUp",l,!1),a.removeEventListener("MSPointerCancel",l,!1),e&&(a.style.msContentZooming=e),f&&(a.style.msTouchAction=f)):a.removeEventListener?(a.removeEventListener("touchstart",l,!1),a.removeEventListener("touchmove",l,!1),a.removeEventListener("touchend",l,!1),a.removeEventListener("touchcancel",l,!1),a.removeEventListener("mousedown",l,!1),a.setCapture&&!window.navigator.userAgent.match(/\bGecko\b/)&&(k=!0,a.removeEventListener("mousemove",l,!1),a.removeEventListener("mouseup",l,!1))):a.detachEvent&&a.setCapture&&(k=!0,a.detachEvent("onmousedown"),a.detachEvent("onmousemove"),a.detachEvent("onmouseup"))},this}}]).factory("GridsterDraggable",["$document","$window","GridsterTouch",function(b,c,d){function e(e,f,g,h,i){function j(a){e.addClass("gridster-item-moving"),g.movingItem=h,g.updateHeight(h.sizeY),f.$apply(function(){g.draggable&&g.draggable.start&&g.draggable.start(a,e,i,h)})}function k(a){var b=h.row,d=h.col,j=g.draggable&&g.draggable.drag,k=g.draggable.scrollSensitivity,l=g.draggable.scrollSpeed,m=Math.min(g.pixelsToRows(q),g.maxRows-1),n=Math.min(g.pixelsToColumns(p),g.columns-1),o=g.getItems(m,n,h.sizeX,h.sizeY,h),r=0!==o.length;if(g.swapping===!0&&r){var s=g.getBoundingBox(o),t=s.sizeX===h.sizeX&&s.sizeY===h.sizeY,u=s.row===b,v=s.col===d,w=s.row===m&&s.col===n,x=u||v;if(t&&1===o.length){if(w)g.swapItems(h,o[0]);else if(x)return}else if(s.sizeX<=h.sizeX&&s.sizeY<=h.sizeY&&x)for(var y=h.row<=m?h.row:m+h.sizeY,z=h.col<=n?h.col:n+h.sizeX,A=y-s.row,B=z-s.col,C=0,E=o.length;C<E;++C){var F=o[C],G=g.getItems(F.row+A,F.col+B,F.sizeX,F.sizeY,h);0===G.length&&g.putItem(F,F.row+A,F.col+B)}}g.pushing===!1&&r||(h.row=m,h.col=n),a.pageY-D.body.scrollTop<k?D.body.scrollTop=D.body.scrollTop-l:c.innerHeight-(a.pageY-D.body.scrollTop)<k&&(D.body.scrollTop=D.body.scrollTop+l),a.pageX-D.body.scrollLeft<k?D.body.scrollLeft=D.body.scrollLeft-l:c.innerWidth-(a.pageX-D.body.scrollLeft)<k&&(D.body.scrollLeft=D.body.scrollLeft+l),(j||b!==h.row||d!==h.col)&&f.$apply(function(){j&&g.draggable.drag(a,e,i,h)})}function l(a){e.removeClass("gridster-item-moving");var b=Math.min(g.pixelsToRows(q),g.maxRows-1),c=Math.min(g.pixelsToColumns(p),g.columns-1);g.pushing===!1&&0!==g.getItems(b,c,h.sizeX,h.sizeY,h).length||(h.row=b,h.col=c),g.movingItem=null,h.setPosition(h.row,h.col),f.$apply(function(){g.draggable&&g.draggable.stop&&g.draggable.stop(a,e,i,h)})}function m(b){if(E.indexOf(b.target.nodeName.toLowerCase())!==-1)return!1;var c=a.element(b.target);if(c.hasClass("gridster-item-resizable-handler"))return!1;if(c.attr("onclick")||c.attr("ng-click"))return!1;if(c.closest&&c.closest(".gridster-no-drag").length)return!1;if(g.draggable&&g.draggable.handle){var d=a.element(e[0].querySelectorAll(g.draggable.handle)),f=!1;a:for(var i=0,k=d.length;i<k;++i){var l=d[i];if(l===b.target){f=!0;break}for(var m=b.target,n=0;n<20;++n){var o=m.parentNode;if(o===e[0]||!o)break;if(o===l){f=!0;break a}m=o}}if(!f)return!1}switch(b.which){case 1:break;case 2:case 3:return}return x=b.pageX,y=b.pageY,p=parseInt(e.css("left"),10),q=parseInt(e.css("top"),10),r=e[0].offsetWidth,s=e[0].offsetHeight,t=h.col,u=h.row,j(b),!0}function n(a){if(!e.hasClass("gridster-item-moving")||e.hasClass("gridster-item-resizing"))return!1;var b=g.curWidth-1,c=g.curRowHeight*g.maxRows-1;v=a.pageX,w=a.pageY;var d=v-x+z,f=w-y+A;z=A=0,x=v,y=w;var h=d,i=f;return p+h<C?(d=C-p,z=h-d):p+r+h>b&&(d=b-p-r,z=h-d),q+i<B?(f=B-q,A=i-f):q+s+i>c&&(f=c-q-s,A=i-f),p+=d,q+=f,e.css({top:q+"px",left:p+"px"}),k(a),!0}function o(a){return!(!e.hasClass("gridster-item-moving")||e.hasClass("gridster-item-resizing"))&&(z=A=0,l(a),!0)}var p,q,r,s,t,u,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=b[0],E=["select","option","input","textarea","button"],F=null,G=null;this.enable=function(){if(F!==!0){if(F=!0,G)return void G.enable();G=new d(e[0],m,n,o),G.enable()}},this.disable=function(){F!==!1&&(F=!1,G&&G.disable())},this.toggle=function(a){a?this.enable():this.disable()},this.destroy=function(){this.disable()}}return e}]).factory("GridsterResizable",["GridsterTouch",function(b){function c(c,d,e,f,g){function h(h){function i(a){c.addClass("gridster-item-moving"),c.addClass("gridster-item-resizing"),e.movingItem=f,f.setElementSizeX(),f.setElementSizeY(),f.setElementPosition(),e.updateHeight(1),d.$apply(function(){e.resizable&&e.resizable.start&&e.resizable.start(a,c,g,f)})}function j(a){var b=f.row,i=f.col,j=f.sizeX,k=f.sizeY,l=e.resizable&&e.resizable.resize,m=f.col;["w","nw","sw"].indexOf(h)!==-1&&(m=e.pixelsToColumns(o,!1));var n=f.row;["n","ne","nw"].indexOf(h)!==-1&&(n=e.pixelsToRows(p,!1));var s=f.sizeX;["n","s"].indexOf(h)===-1&&(s=e.pixelsToColumns(q,!0));var t=f.sizeY;["e","w"].indexOf(h)===-1&&(t=e.pixelsToRows(r,!0));var u=n>-1&&m>-1&&s+m<=e.columns&&t+n<=e.maxRows;!u||e.pushing===!1&&0!==e.getItems(n,m,s,t,f).length||(f.row=n,f.col=m,f.sizeX=s,f.sizeY=t);var v=f.row!==b||f.col!==i||f.sizeX!==j||f.sizeY!==k;(l||v)&&d.$apply(function(){l&&e.resizable.resize(a,c,g,f)})}function k(a){c.removeClass("gridster-item-moving"),c.removeClass("gridster-item-resizing"),e.movingItem=null,f.setPosition(f.row,f.col),f.setSizeY(f.sizeY),f.setSizeX(f.sizeX),d.$apply(function(){e.resizable&&e.resizable.stop&&e.resizable.stop(a,c,g,f)})}function l(a){switch(a.which){case 1:break;case 2:case 3:return}return u=e.draggable.enabled,u&&(e.draggable.enabled=!1,d.$broadcast("gridster-draggable-changed",e)),z=a.pageX,A=a.pageY,o=parseInt(c.css("left"),10),p=parseInt(c.css("top"),10),q=c[0].offsetWidth,r=c[0].offsetHeight,s=f.sizeX,t=f.sizeY,i(a),!0}function m(a){var b=e.curWidth-1;x=a.pageX,y=a.pageY;var d=x-z+B,f=y-A+C;B=C=0,z=x,A=y;var g=f,h=d;return w.indexOf("n")>=0&&(r-g<G()?(f=r-G(),C=g-f):p+g<D&&(f=D-p,C=g-f),p+=f,r-=f),w.indexOf("s")>=0&&(r+g<G()?(f=G()-r,C=g-f):p+r+g>E&&(f=E-p-r,C=g-f),r+=f),w.indexOf("w")>=0&&(q-h<H()?(d=q-H(),B=h-d):o+h<F&&(d=F-o,B=h-d),o+=d,q-=d),w.indexOf("e")>=0&&(q+h<H()?(d=H()-q,B=h-d):o+q+h>b&&(d=b-o-q,B=h-d),q+=d),c.css({top:p+"px",left:o+"px",width:q+"px",height:r+"px"}),j(a),!0}function n(a){return e.draggable.enabled!==u&&(e.draggable.enabled=u,d.$broadcast("gridster-draggable-changed",e)),B=C=0,k(a),!0}var o,p,q,r,s,t,u,v,w=h,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=9999,F=0,G=function(){return(f.minSizeY?f.minSizeY:1)*e.curRowHeight-e.margins[0]},H=function(){return(f.minSizeX?f.minSizeX:1)*e.curColWidth-e.margins[1]},I=null;this.enable=function(){I||(I=a.element('<div class="gridster-item-resizable-handler handle-'+w+'"></div>'),c.append(I)),v=new b(I[0],l,m,n),v.enable()},this.disable=function(){I&&(I.remove(),I=null),v.disable(),v=void 0},this.destroy=function(){this.disable()}}var i=[],j=e.resizable.handles;"string"==typeof j&&(j=e.resizable.handles.split(","));for(var k=!1,l=0,m=j.length;l<m;l++)i.push(new h(j[l]));this.enable=function(){if(!k){for(var a=0,b=i.length;a<b;a++)i[a].enable();k=!0}},this.disable=function(){if(k){for(var a=0,b=i.length;a<b;a++)i[a].disable();k=!1}},this.toggle=function(a){a?this.enable():this.disable()},this.destroy=function(){for(var a=0,b=i.length;a<b;a++)i[a].destroy()}}return c}]).factory("gridsterDebounce",function(){return function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}}}).directive("gridsterItem",["$parse","GridsterDraggable","GridsterResizable","gridsterDebounce",function(a,b,c,d){return{scope:!0,restrict:"EA",controller:"GridsterItemCtrl",controllerAs:"gridsterItem",require:["^gridster","gridsterItem"],link:function(e,f,g,h){function i(){o.setPosition(o.row,o.col),r.row&&r.row.assign&&r.row.assign(e,o.row),r.col&&r.col.assign&&r.col.assign(e,o.col)}function j(){var a=o.setSizeX(o.sizeX,!0);a&&r.sizeX&&r.sizeX.assign&&r.sizeX.assign(e,o.sizeX);var b=o.setSizeY(o.sizeY,!0);b&&r.sizeY&&r.sizeY.assign&&r.sizeY.assign(e,o.sizeY),(a||b)&&(o.gridster.moveOverlappingItems(o),n.layoutChanged(),e.$broadcast("gridster-item-resized",o))}function k(){var a=document.createElement("div"),b={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var c in b)if(void 0!==a.style[c])return b[c]}var l,m=g.gridsterItem,n=h[0],o=h[1];if(e.gridster=n,m){var p=a(m);l=p(e)||{},!l&&p.assign&&(l={row:o.row,col:o.col,sizeX:o.sizeX,sizeY:o.sizeY,minSizeX:0,minSizeY:0,maxSizeX:null,maxSizeY:null},p.assign(e,l))}else l=g;o.init(f,n),f.addClass("gridster-item");for(var q=["minSizeX","maxSizeX","minSizeY","maxSizeY","sizeX","sizeY","row","col"],r={},s=[],t=function(b){var c;if("string"==typeof l[b])c=l[b];else if("string"==typeof l[b.toLowerCase()])c=l[b.toLowerCase()];else{if(!m)return;c=m+"."+b}s.push('"'+b+'":'+c),r[b]=a(c);var d=r[b](e);"number"==typeof d&&(o[b]=d)},u=0,v=q.length;u<v;++u)t(q[u]);var w="{"+s.join(",")+"}";e.$watchCollection(w,function(a,b){for(var c in a){var d=a[c],e=b[c];e!==d&&(d=parseInt(d,10),isNaN(d)||(o[c]=d))}}),e.$watch(function(){return o.row+","+o.col},i),e.$watch(function(){return o.sizeY+","+o.sizeX+","+o.minSizeX+","+o.maxSizeX+","+o.minSizeY+","+o.maxSizeY},j);var x=new b(f,e,n,o,l),y=new c(f,e,n,o,l),z=function(){y.toggle(!n.isMobile&&n.resizable&&n.resizable.enabled)};z();var A=function(){x.toggle(!n.isMobile&&n.draggable&&n.draggable.enabled)};A(),e.$on("gridster-draggable-changed",A),e.$on("gridster-resizable-changed",z),e.$on("gridster-resized",z),e.$on("gridster-mobile-changed",function(){z(),A()});var B=d(function(){e.$apply(function(){e.$broadcast("gridster-item-transition-end",o)})},50);return f.on(k(),B),e.$broadcast("gridster-item-initialized",o),e.$on("$destroy",function(){try{y.destroy(),x.destroy()}catch(a){}try{n.removeItem(o)}catch(a){}try{o.destroy()}catch(a){}})}}}]).directive("gridsterNoDrag",function(){return{restrict:"A",link:function(a,b){b.addClass("gridster-no-drag")}}})});