/*! HTML - v0.12.1 - 2014-10-22
* http://nbubna.github.io/HTML/
* Copyright (c) 2014 ESHA Research; Licensed MIT, GPL */
!function(a,b,c){"use strict";var d={version:"0.12.1",slice:Array.prototype.slice,list:function(a,b){return 1===a.length?d.node(a[0],b):((b||!a.each)&&(a.slice||(a=d.slice.call(a)),d.methods(a),a.length&&d.children(a[0],a)),a)},node:function(a,b){return(b||!a.each)&&(d.methods(a),d.children(a)),a},methods:function(a){for(var b in d.fn)d.define(a,b,d.fn[b])},children:function(a,b){for(var c=a._children={},e=0,f=a.childNodes.length;f>e;e++){var g=a.childNodes[e],h=d.key(g);(c[h]||(c[h]=[])).push(g),d.define(a,h),b&&d.define(b,h,void 0,a)}return c},key:function(a){return a.tagName?a.tagName.toLowerCase():"_other"},define:function(a,b,c,e){if(!(b in a))try{e=e||a,Object.defineProperty(a,b,void 0!==c?{value:c}:{get:function(){return e._children||d.children(e),d.list(e._children[b]||[])}})}catch(f){}},mutation:function(a){var b=a.target;delete b[b._internal?"_internal":"_children"]},unique:function(a,b,c){return c.indexOf(a)===b},fn:{each:function(a){var b,c,e=this.forEach?this:[this],f=[];"string"==typeof a&&(b=d.resolve[a]||a,c=d.slice.call(arguments,1),a=function(a,e){return d.resolve(b,a,c,e)});for(var g,h=0,i=e.length;i>h;h++)g=a.call(e,d.node(e[h]),h,e),(g||b&&void 0!==g)&&(g.forEach?f.push.apply(f,g):f.push(g));return f[0]||f[0]===!1?f[0]instanceof Node?d.list(f.filter(d.unique)):f:this},find:function(){try{a.console.warn("find() is deprecated. Please use query().")}finally{return this.query.apply(this,arguments)}},query:function(a,b){for(var c=this.forEach?this:[this],e=[],f=0,g=c.length;g>f&&(!b||e.length<b);f++)if(b===e.length+1){var h=c[f].querySelector(a);h&&e.push(h)}else for(var i=c[f].querySelectorAll(a),j=0,k=i.length;k>j&&(!b||e.length<b);j++)e.push(i[j]);return d.list(e)},only:function(a,b){var c=this.forEach?this:[this];return d.list(a>=0||0>a?c.slice(a,b||a+1||void 0):c.filter("function"==typeof a?a:function(b){return b.matches(a)}))},all:function(a,b,c){c=c||[];var f=this.forEach?this:[this];b&&c.push.apply(c,f);for(var g=0,h=f.length;h>g;g++){var i=f[g];a in i&&i[a]&&e.ify(i[a]).all(a,!0,c)}return d.list(c.filter(d.unique))}},resolve:function(a,b,c,e){var f=a,g=b;if(c=c.length?d.fill(c,e,g):null,f.indexOf(".")>0){for(var h=f.split(".");h.length>1&&(g=g[f=h.shift()]););g=g||b,f=g?h[0]:a}var i=g[f];if(void 0!==i){if("function"==typeof i)return i.apply(g,c);if(!c)return i;g[f]=c[0]}else{if(!c)return b.getAttribute(a);null===c[0]?b.removeAttribute(a):b.setAttribute(a,c[0])}},fill:function(a,b,c){for(var d=[],e=0,f=a.length;f>e;e++){var g=a[e],h=typeof g;d[e]="string"===h?g.replace(/\$\{i\}/g,b):"function"===h?g(c,b,a):g}return d}},e=d.node(b.documentElement);e._=d,d.define(e,"ify",function(a,b){return!a||"length"in a?d.list(a||[],b):d.node(a,b)});var f=Element.prototype,g="atchesSelector";d.define(f,"matches",f.m||f["webkitM"+g]||f["mozM"+g]||f["msM"+g]),c?new c(function(a){a.forEach(d.mutation)}).observe(e,{childList:!0,subtree:!0}):b.addEventListener("DOMSubtreeModified",d.mutation),"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:a[e.getAttribute("data-html-reference")||"HTML"]=e,b.addEventListener("DOMContentLoaded",function(){d.node(e,!0)})}(window,document,window.MutationObserver),function(a,b){"use strict";var c=b.fn.add=function(a,b){return this.each(function(d){return c.all(d,a,b)})};c.all=function(a,b,d){if("string"==typeof b)return c.create(a,b,d);if(!(b instanceof Node)&&"length"in b){for(var e=[],f=0,g=b.length;g>f;f++)e.push(c.all(a,b[f],d));return e}return c.insert(a,b,d),b},c.create=function(b,d,e){return c.insert(b,a.createElement(d),e)},c.insert=function(a,d,e){var f=c.find(a,e);return f?a.insertBefore(d,f):a.appendChild(d),b.updated(a),d},c.find=function(a,b){switch(typeof b){case"string":return a[b+"Child"];case"number":return a.children[b];case"object":return b;case"function":return b.call(a,a)}},b.updated=function(a){a._internal=!0,b.children(a)},b.fn.remove=function(a){return this.each(function(c){var d=c.parentNode;return d&&(d.removeChild(c),b.updated(d),a)?d:void 0})}}(document,document.documentElement._),function(a,b){"use strict";var c=b.fn.add;c.create=function(b,d,e){var f=d.match(c.emmetRE()).filter(Boolean),g=a.createDocumentFragment(),h=a.createElement(f[0]);g.appendChild(h);for(var i=1,j=f.length;j>i;i++){var k=f[i];h=c.emmet[k.charAt(0)].call(h,k.substr(1),g)||h}return c.insert(b,g,e),h},c.emmetRE=function(){var a=Object.keys(c.emmet).join(""),b="[a-z"+a+']{0,1}(?:"[^"]*"|[^"'+a+"]){0,}";return new RegExp(b,"g")},c.emmet={"#":function(a){this.id=a},".":function(a){var b=this.getAttribute("class")||"";b=b+(b?" ":"")+a,b.length&&this.setAttribute("class",b)},"[":function(a){a=a.substr(0,a.length-1).match(/(?:[^\s"]+|"[^"]*")+/g);for(var b=0,c=a.length;c>b;b++){var d=a[b].split("=");this.setAttribute(d[0],(d[1]||"").replace(/"/g,""))}},">":function(b){if(b){var c=a.createElement(b);return this.appendChild(c),c}return this},"+":function(a,b){return c.emmet[">"].call(this.parentNode||b,a)},"*":function(a){for(var b=this.parentNode,c=[this],d=1;a>d;d++)c.push(this.cloneNode(!0)),b.appendChild(c[d]);return c},"^":function(a,b){return c.emmet["+"].call(this.parentNode||b,a,b)},"{":function(b){this.appendChild(a.createTextNode(b.substr(0,b.length-1)))}}}(document,document.documentElement._);