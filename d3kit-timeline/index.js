!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("d3-axis"),require("d3-scale"),require("d3-transition"),require("d3-array"),require("d3kit"),require("labella")):"function"==typeof define&&define.amd?define(["d3-axis","d3-scale","d3-transition","d3-array","d3kit","labella"],t):"object"==typeof exports?exports.d3KitTimeline=t(require("d3-axis"),require("d3-scale"),require("d3-transition"),require("d3-array"),require("d3kit"),require("labella")):e.d3KitTimeline=t(e.d3,e.d3,e.d3,e.d3,e.d3Kit,e.labella)}("undefined"!=typeof self?self:this,function(e,t,r,n,i,a){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),s=(r.n(o),r(3)),l=(r.n(s),r(4)),u=(r.n(l),r(5)),c=(r.n(u),r(6)),d=(r.n(c),r(7)),f=r.n(d),h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(n)},b=function(e){return e.w},m=function(e){return e.h},x=function(e){return e},y=function(e){function t(e,r){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return a.layers.create(["dummy",{main:["axis","link","label","dot"]}]),a.layers.get("main/axis").classed("axis",!0),a.force=new f.a.Force(r.labella),a.updateLabelText=a.updateLabelText.bind(a),a.visualize=a.visualize.bind(a),a.on("data",a.visualize),a.on("options",a.visualize),a.on("resize",a.visualize),a}return a(t,e),h(t,null,[{key:"getDefaultOptions",value:function(){return c.helper.deepExtend(p(t.__proto__||Object.getPrototypeOf(t),"getDefaultOptions",this).call(this),{margin:{left:40,right:20,top:20,bottom:20},initialWidth:400,initialHeight:400,scale:Object(s.scaleTime)(),domain:void 0,direction:"right",dotRadius:3,formatAxis:x,layerGap:60,labella:{},keyFn:void 0,timeFn:function(e){return e.time},textFn:function(e){return e.text},dotColor:"#222",labelBgColor:"#222",labelTextColor:"#fff",linkColor:"#222",labelPadding:{left:4,right:4,top:3,bottom:2},textYOffset:"0.85em"})}},{key:"getCustomEventNames",value:function(){return["dotClick","dotMouseover","dotMousemove","dotMouseout","dotMouseenter","dotMouseleave","labelClick","labelMouseover","labelMousemove","labelMouseenter","labelMouseleave","labelMouseout"]}}]),h(t,[{key:"resizeToFit",value:function(){var e=this.options(),t=void 0,r=this.force.nodes();switch(e.direction){case"up":t=Object(u.max)(r,function(e){return Math.abs(e.y)})||0,this.height(t+e.margin.top+e.margin.bottom);break;case"down":t=Object(u.max)(r,function(e){return Math.abs(e.y+e.dy)})||0,this.height(t+e.margin.top+e.margin.bottom);break;case"left":t=Object(u.max)(r,function(e){return Math.abs(e.x)})||0,this.width(t+e.margin.left+e.margin.right);break;case"right":t=Object(u.max)(r,function(e){return Math.abs(e.x+e.dx)})||0,this.width(t+e.margin.left+e.margin.right)}return this}},{key:"updateLabelText",value:function(e,t,r){var n=this.options();return r=r?c.helper.functor(r):x,e.text(function(e){return n.textFn(r(e))}).attr("dy",n.textYOffset).attr("x",n.labelPadding.left).attr("y",n.labelPadding.top),Object.keys(t).forEach(function(n){var i=t[n];e.style(n,function(e,t){return i(r(e),t)})}),e}},{key:"drawAxes",value:function(){var e=this.options(),t=void 0;switch(e.direction){case"right":this.axis=Object(o.axisLeft)(),t="translate(0,0)";break;case"left":this.axis=Object(o.axisRight)(),t="translate("+this.getInnerWidth()+",0)";break;case"up":this.axis=Object(o.axisBottom)(),t="translate(0,"+this.getInnerHeight()+")";break;case"down":this.axis=Object(o.axisTop)(),t="translate(0,0)"}return this.layers.get("main").attr("transform",t),(e.formatAxis||x)(this.axis.scale(e.scale)),this.layers.get("main/axis").call(this.axis),this}},{key:"drawDots",value:function(e){var t=this.options(),r=function(e){return t.scale(t.timeFn(e))},n=this.layers.get("main/dot").selectAll("circle.dot").data(e,t.keyFn),i="left"===t.direction||"right"===t.direction?"cy":"cx";return n.enter().append("circle").classed("dot",!0).on("click",this.dispatchAs("dotClick")).on("mouseover",this.dispatchAs("dotMouseover")).on("mousemove",this.dispatchAs("dotMousemove")).on("mouseout",this.dispatchAs("dotMouseout")).on("mouseenter",this.dispatchAs("dotMouseenter")).on("mouseleave",this.dispatchAs("dotMouseleave")).style("fill",t.dotColor).attr("r",t.dotRadius).attr(i,r),n.transition().style("fill",t.dotColor).attr("r",t.dotRadius).attr(i,r),n.exit().remove(),this}},{key:"drawLabels",value:function(e,t){function r(e){switch(n.direction){case"right":return"translate("+e.x+","+(e.y-e.dy/2)+")";case"left":return"translate("+(e.x+i-e.w)+","+(e.y-e.dy/2)+")";case"up":case"down":return"translate("+(e.x-e.dx/2)+","+e.y+")"}}var n=this.options(),i=void 0;i="left"===n.direction||"right"===n.direction?Object(u.max)(e,b):Object(u.max)(e,m);var a=new f.a.Renderer({nodeHeight:i,layerGap:n.layerGap,direction:n.direction});a.layout(e);var o=c.helper.functor(n.labelBgColor),s=c.helper.functor(n.linkColor),l=this.layers.get("main/label").selectAll("g.label-g").data(e,n.keyFn?function(e){return n.keyFn(e.data)}:void 0),d=l.enter().append("g").classed("label-g",!0).on("click",this.dispatchAs("labelClick")).on("mouseover",this.dispatchAs("labelMouseover")).on("mousemove",this.dispatchAs("labelMousemove")).on("mouseenter",this.dispatchAs("labelMouseenter")).on("mouseleave",this.dispatchAs("labelMouseleave")).on("mouseout",this.dispatchAs("labelMouseout")).attr("transform",r);d.append("rect").classed("label-bg",!0).attr("rx",2).attr("ry",2).attr("width",b).attr("height",m).style("fill",function(e){return o(e.data)}),d.append("text").classed("label-text",!0).call(this.updateLabelText,t,function(e){return e.data});var h=l.transition().attr("transform",r);h.select("rect").attr("width",b).attr("height",m).style("fill",function(e){return o(e.data)}),h.select("text.label-text").call(this.updateLabelText,t,function(e){return e.data}),l.exit().remove();var p=this.layers.get("main/link").selectAll("path.link").data(e,n.keyFn?function(e){return n.keyFn(e.data)}:void 0);return p.enter().append("path").classed("link",!0).attr("d",function(e){return a.generatePath(e)}).style("stroke",function(e){return s(e.data)}).style("fill","none"),p.transition().attr("d",function(e){return a.generatePath(e)}).style("stroke",function(e){return s(e.data)}),p.exit().remove(),this}},{key:"visualize",value:function(){var e=this;if(this.hasData()&&this.hasNonZeroArea()){var t=this.data()||[],r=this.options();this.force=new f.a.Force(r.labella),r.domain?r.scale.domain(r.domain):r.scale.domain(Object(u.extent)(t,r.timeFn)).nice(),r.scale.range([0,"left"===r.direction||"right"===r.direction?this.getInnerHeight():this.getInnerWidth()]);var n=c.helper.extend({},r.textStyle);Object.keys(n).forEach(function(e){n[e]=c.helper.functor(n[e])}),n.fill=n.fill||c.helper.functor(r.labelTextColor);var i=this.layers.get("dummy").append("text").classed("label-text",!0),a=function(e){return r.scale(r.timeFn(e))},o=t.map(function(t){var o=i.call(e.updateLabelText,n,t).node().getBBox(),s=o.width+r.labelPadding.left+r.labelPadding.right,l=o.height+r.labelPadding.top+r.labelPadding.bottom,u=new f.a.Node(a(t),"left"===r.direction||"right"===r.direction?l:s,t);return u.w=s,u.h=l,u});return i.remove(),this.force.options(r.labella).nodes(o).compute(),this.drawAxes(),this.drawDots(t),this.drawLabels(this.force.nodes(),n),this}}}]),t}(c.SvgChart);t.default=y},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=i},function(e,t){e.exports=a}]).default});