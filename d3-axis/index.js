// https://d3js.org/d3-axis/ Version 1.0.10 Copyright 2018 Mike Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})}(this,function(t){"use strict";var n=Array.prototype.slice;function r(t){return t}var e=1,i=2,a=3,o=4,u=1e-6;function c(t){return"translate("+(t+.5)+",0)"}function l(t){return"translate(0,"+(t+.5)+")"}function s(){return!this.__axis}function f(t,f){var d=[],m=null,p=null,h=6,g=6,x=3,k=t===e||t===o?-1:1,y=t===o||t===i?"x":"y",v=t===e||t===a?c:l;function M(n){var c=null==m?f.ticks?f.ticks.apply(f,d):f.domain():m,l=null==p?f.tickFormat?f.tickFormat.apply(f,d):r:p,M=Math.max(h,0)+x,_=f.range(),b=+_[0]+.5,A=+_[_.length-1]+.5,F=(f.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(r){return+t(r)+n}}:function(t){return function(n){return+t(n)}})(f.copy()),V=n.selection?n.selection():n,z=V.selectAll(".domain").data([null]),H=V.selectAll(".tick").data(c,f).order(),C=H.exit(),S=H.enter().append("g").attr("class","tick"),j=H.select("line"),w=H.select("text");z=z.merge(z.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),H=H.merge(S),j=j.merge(S.append("line").attr("stroke","currentColor").attr(y+"2",k*h)),w=w.merge(S.append("text").attr("fill","currentColor").attr(y,k*M).attr("dy",t===e?"0em":t===a?"0.71em":"0.32em")),n!==V&&(z=z.transition(n),H=H.transition(n),j=j.transition(n),w=w.transition(n),C=C.transition(n).attr("opacity",u).attr("transform",function(t){return isFinite(t=F(t))?v(t):this.getAttribute("transform")}),S.attr("opacity",u).attr("transform",function(t){var n=this.parentNode.__axis;return v(n&&isFinite(n=n(t))?n:F(t))})),C.remove(),z.attr("d",t===o||t==i?g?"M"+k*g+","+b+"H0.5V"+A+"H"+k*g:"M0.5,"+b+"V"+A:g?"M"+b+","+k*g+"V0.5H"+A+"V"+k*g:"M"+b+",0.5H"+A),H.attr("opacity",1).attr("transform",function(t){return v(F(t))}),j.attr(y+"2",k*h),w.attr(y,k*M).text(l),V.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===i?"start":t===o?"end":"middle"),V.each(function(){this.__axis=F})}return M.scale=function(t){return arguments.length?(f=t,M):f},M.ticks=function(){return d=n.call(arguments),M},M.tickArguments=function(t){return arguments.length?(d=null==t?[]:n.call(t),M):d.slice()},M.tickValues=function(t){return arguments.length?(m=null==t?null:n.call(t),M):m&&m.slice()},M.tickFormat=function(t){return arguments.length?(p=t,M):p},M.tickSize=function(t){return arguments.length?(h=g=+t,M):h},M.tickSizeInner=function(t){return arguments.length?(h=+t,M):h},M.tickSizeOuter=function(t){return arguments.length?(g=+t,M):g},M.tickPadding=function(t){return arguments.length?(x=+t,M):x},M}t.axisTop=function(t){return f(e,t)},t.axisRight=function(t){return f(i,t)},t.axisBottom=function(t){return f(a,t)},t.axisLeft=function(t){return f(o,t)},Object.defineProperty(t,"__esModule",{value:!0})});
