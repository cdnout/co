/**
* lazy-ads v1.1.11
* Deliver synchronous ads asynchronously with RWD support without modifying the ad code.
* Madgex. Build date: 15-05-2018
*/

!function(){function a(a,h){a=a||"",h=h||{};for(var i in b)b.hasOwnProperty(i)&&(h.autoFix&&(h["fix_"+i]=!0),h.fix=h.fix||h["fix_"+i]);var j=[],k=document.createElement("div"),l=function(a){return"string"==typeof a&&-1!==a.indexOf("&")?(k.innerHTML=a,k.textContent||k.innerText||a):a},m=function(b){a+=b},n=function(b){a=b+a},o={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(b>=0)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,attrs:b.attrs,content:d[1],length:d[0].length+b.length}}}},startTag:function(){if(-1===a.indexOf(">"))return null;var b=a.match(c);if(b){var d={},g={},h=b[2];return b[2].replace(e,function(a,b){if(arguments[2]||arguments[3]||arguments[4]||arguments[5])if(arguments[5])d[arguments[5]]="",g[b]=!0;else{var c=arguments[2]||arguments[3]||arguments[4]||f.test(b)&&b||"";d[b]=l(c)}else d[b]=null;h=h.replace(a,"")}),{tagName:b[1],attrs:d,booleanAttrs:g,rest:h,unary:!!b[3],length:b[0].length}}},chars:function(){var b=a.indexOf("<");return{length:b>=0?b:a.length}}},q=function(){for(var b in o)if(o[b].test(a)){g&&console.log("suspected "+b);var c=p[b]();return c?(g&&console.log("parsed "+b,c),c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}},r=function(a){for(var b;b=q();)if(a[b.type]&&!1===a[b.type](b))return},s=function(){var b=a;return a="",b},t=function(){return a};return h.fix&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.last=function(){return this[this.length-1]},d.lastTagNameEq=function(a){var b=this.last();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()},d.containsTagName=function(a){for(var b,c=0;b=this[c];c++)if(b.tagName===a)return!0;return!1};var e=function(a){return a&&"startTag"===a.type&&(a.unary=b.test(a.tagName)||a.unary,a.html5Unary=!/\/>$/.test(a.text)),a},f=q,g=function(){var b=a,c=e(f());return a=b,c},i=function(){var a=d.pop();n("</"+a.tagName+">")},j={startTag:function(a){var b=a.tagName;"TR"===b.toUpperCase()&&d.lastTagNameEq("TABLE")?(n("<TBODY>"),l()):h.fix_selfClose&&c.test(b)&&d.containsTagName(b)?d.lastTagNameEq(b)?i():(n("</"+a.tagName+">"),l()):a.unary||d.push(a)},endTag:function(a){d.last()?h.fix_tagSoup&&!d.lastTagNameEq(a.tagName)?i():d.pop():h.fix_tagSoup&&k()}},k=function(){f(),l()},l=function(){var a=g();a&&j[a.type]&&j[a.type](a)};q=function(){return l(),e(f())}}(),{append:m,readToken:q,readTokens:r,clear:s,rest:t,stack:j}}var b=function(){var a,b={},c=this.document.createElement("div");return a="<P><I></P></I>",c.innerHTML=a,b.tagSoup=c.innerHTML!==a,c.innerHTML="<P><i><P></P></i></P>",b.selfClose=2===c.childNodes.length,b}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,g=!1;a.supports=b,a.tokenToString=function(a){var b={comment:function(a){return"\x3c!--"+a.content},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return g&&console.log(a),b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName;for(var c in a.attrs){b+=" "+c;var d=a.attrs[c];void 0!==a.booleanAttrs&&void 0!==a.booleanAttrs[c]||(b+='="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"')}return a.rest&&(b+=a.rest),b+(a.unary&&!a.html5Unary?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)},a.escapeAttributes=function(a){var b={};for(var c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.browserHasFlaw=a.browserHasFlaw||!b[h]&&h;this.htmlParser=a}(),function(){function a(){}function b(a){return a!==m&&null!==a}function c(a){return"function"==typeof a}function d(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function e(a,b,c){var d;for(d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function f(a,b){return e(b,function(b,c){a[b]=c}),a}function g(a,c){return a=a||{},e(c,function(c,d){b(a[c])||(a[c]=d)}),a}function h(a){try{return o.call(a)}catch(c){var b=[];return d(a,function(a){b.push(a)}),b}}function i(a){return!!(a&&"tagName"in a)&&!!~a.tagName.toLowerCase().indexOf("script")}function j(a){return!!(a&&"tagName"in a)&&!!~a.tagName.toLowerCase().indexOf("style")}var k={afterAsync:a,afterDequeue:a,afterStreamStart:a,afterWrite:a,autoFix:!0,beforeEnqueue:a,beforeWriteToken:function(a){return a},beforeWrite:function(a){return a},done:a,error:function(a){throw a},releaseAsync:!1},l=this,m=void 0;if(!l.postscribe){var n=!1,o=Array.prototype.slice,p=function(a){return a[a.length-1]},q=function(){function a(a,c,d){var e=k+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;f(this,{root:b,options:c,win:d.defaultView||d.parentWindow,doc:d,parser:htmlParser("",{autoFix:c.autoFix}),actuals:[b],proxyHistory:"",proxyRoot:d.createElement(b.nodeName),scriptStack:[],writeQueue:[]}),a(this.proxyRoot,"proxyof",0)}var k="data-ps-";return g.prototype.write=function(){[].push.apply(this.writeQueue,arguments);for(var a;!this.deferredRemote&&this.writeQueue.length;)a=this.writeQueue.shift(),c(a)?this.callFunction(a):this.writeImpl(a)},g.prototype.callFunction=function(a){var b={type:"function",value:a.name||a.toString()};this.onScriptStart(b),a.call(this.win,this.doc),this.onScriptDone(b)},g.prototype.writeImpl=function(a){this.parser.append(a);for(var b,c,d,e=[];(b=this.parser.readToken())&&!(c=i(b))&&!(d=j(b));)(b=this.options.beforeWriteToken(b))&&e.push(b);this.writeStaticTokens(e),c&&this.handleScriptToken(b),d&&this.handleStyleToken(b)},g.prototype.writeStaticTokens=function(a){var b=this.buildChunk(a);if(b.actual)return b.html=this.proxyHistory+b.actual,this.proxyHistory+=b.proxy,this.proxyRoot.innerHTML=b.html,n&&(b.proxyInnerHTML=this.proxyRoot.innerHTML),this.walkChunk(),n&&(b.actualInnerHTML=this.root.innerHTML),b},g.prototype.buildChunk=function(a){var b=this.actuals.length,c=[],e=[],f=[];return d(a,function(a){var d=htmlParser.tokenToString(a);if(c.push(d),a.attrs){if(!/^noscript$/i.test(a.tagName)){var g=b++;e.push(d.replace(/(\/?>)/," "+k+"id="+g+" $1")),"ps-script"!==a.attrs.id&&"ps-style"!==a.attrs.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" "+k+"proxyof="+g+(a.unary?" />":">"))}}else e.push(d),f.push("endTag"===a.type?d:"")}),{tokens:a,raw:c.join(""),actual:e.join(""),proxy:f.join("")}},g.prototype.walkChunk=function(){for(var c,d=[this.proxyRoot];b(c=d.shift());){var e=1===c.nodeType;if(!(e&&a(c,"proxyof"))){e&&(this.actuals[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");f&&this.actuals[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}},g.prototype.handleScriptToken=function(a){var b=this.parser.clear();if(b&&this.writeQueue.unshift(b),a.src=a.attrs.src||a.attrs.SRC,a=this.options.beforeWriteToken(a)){a.src&&this.scriptStack.length?this.deferredRemote=a:this.onScriptStart(a);var c=this;this.writeScriptToken(a,function(){c.onScriptDone(a)})}},g.prototype.handleStyleToken=function(a){var b=this.parser.clear();b&&this.writeQueue.unshift(b),a.type=a.attrs.type||a.attrs.TYPE||"text/css",a=this.options.beforeWriteToken(a),a&&this.writeStyleToken(a),b&&this.write()},g.prototype.writeStyleToken=function(a){var b=this.buildStyle(a);this.insertStyle(b),a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.doc.createTextNode(a.content)))},g.prototype.buildStyle=function(a){var b=this.doc.createElement(a.tagName);return b.setAttribute("type",a.type),e(a.attrs,function(a,c){b.setAttribute(a,c)}),b},g.prototype.insertStyle=function(a){this.writeImpl('<span id="ps-style"/>');var b=this.doc.getElementById("ps-style");b.parentNode.replaceChild(a,b)},g.prototype.onScriptStart=function(a){a.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(a)},g.prototype.onScriptDone=function(a){if(a!==this.scriptStack[0])return void this.options.error({message:"Bad script nesting or script finished twice"});this.scriptStack.shift(),this.write.apply(this,a.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this.onScriptStart(this.deferredRemote),this.deferredRemote=null)},g.prototype.writeScriptToken=function(a,b){var c=this.buildScript(a),d=this.shouldRelease(c),e=this.options.afterAsync;a.src&&(c.src=a.src,this.scriptLoadHandler(c,d?e:function(){b(),e()}));try{this.insertScript(c),a.src&&!d||b()}catch(f){this.options.error(f),b()}},g.prototype.buildScript=function(a){var b=this.doc.createElement(a.tagName);return e(a.attrs,function(a,c){b.setAttribute(a,c)}),a.content&&(b.text=a.content),b},g.prototype.insertScript=function(a){this.writeImpl('<span id="ps-script"/>');var b=this.doc.getElementById("ps-script");b.parentNode.replaceChild(a,b)},g.prototype.scriptLoadHandler=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}function d(){c(),b()}function e(a){c(),g(a),b()}var g=this.options.error;f(a,{onload:function(){d()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&d()},onerror:function(){e({message:"remote script failed "+a.src})}})},g.prototype.shouldRelease=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.releaseAsync&&a.src&&a.hasAttribute("async"))},g}();l.postscribe=function(){function b(){var a,b=j.shift();b&&(a=p(b),a.afterDequeue(),b.stream=d.apply(null,b),a.afterStreamStart())}function d(c,d,g){function j(a){a=g.beforeWrite(a),m.write(a),g.afterWrite(a)}m=new q(c,g),m.id=i++,m.name=g.name||m.id,e.streams[m.name]=m;var k=c.ownerDocument,l={close:k.close,open:k.open,write:k.write,writeln:k.writeln};f(k,{close:a,open:a,write:function(){return j(h(arguments).join(""))},writeln:function(){return j(h(arguments).join("")+"\n")}});var n=m.win.onerror||a;return m.win.onerror=function(a,b,c){g.error({msg:a+" - "+b+":"+c}),n.apply(m.win,arguments)},m.write(d,function(){f(k,l),m.win.onerror=n,g.done(),m=null,b()}),m}function e(d,e,f){c(f)&&(f={done:f}),f=g(f,k),d=/^#/.test(d)?l.document.getElementById(d.substr(1)):d.jquery?d[0]:d;var h=[d,e,f];return d.postscribe={cancel:function(){h.stream?h.stream.abort():h[1]=a}},f.beforeEnqueue(h),j.push(h),m||b(),d.postscribe}var i=0,j=[],m=null;return f(e,{streams:{},queue:j,WriteStream:q})}()}}(),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(void 0===this||null===this)throw new TypeError('"this" is null or not defined');var c=this.length>>>0;for(b=+b||0,Math.abs(b)===1/0&&(b=0),b<0&&(b+=c)<0&&(b=0);b<c;b++)if(this[b]===a)return b;return-1}),window.matchMedia||(window.matchMedia=function(a){"use strict";var b=a.document,c=b.documentElement,d=[],e=0,f="",g={},h=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,i=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,j=0,k=function(a){var b=-1!==a.indexOf(",")&&a.split(",")||[a],c=b.length-1,d=c,e=null,j=null,k="",l=0,m=!1,n="",o="",p=null,q=0,r=null,s="",t="",u="",v="",w="",x=!1;if(""===a)return!0;do{if(e=b[d-c],m=!1,j=e.match(h),j&&(k=j[0],l=j.index),!j||-1===e.substring(0,l).indexOf("(")&&(l||!j[3]&&k!==j.input))x=!1;else{if(o=e,m="not"===j[1],l||(n=j[2],o=e.substring(k.length)),x=n===f||"all"===n||""===n,p=-1!==o.indexOf(" and ")&&o.split(" and ")||[o],q=p.length-1,q,x&&q>=0&&""!==o)do{if(!(r=p[q].match(i))||!g[r[3]]){x=!1;break}if(s=r[2],t=r[5],v=t,u=r[7],w=g[r[3]],u&&(v="px"===u?Number(t):"em"===u||"rem"===u?16*t:r[8]?(t/r[8]).toFixed(2):"dppx"===u?96*t:"dpcm"===u?.3937*t:Number(t)),!(x="min-"===s&&v?w>=v:"max-"===s&&v?w<=v:v?w===v:!!w))break}while(q--);if(x)break}}while(c--);return m?!x:x},l=function(){var b=a.innerWidth||c.clientWidth,d=a.innerHeight||c.clientHeight,e=a.screen.width,f=a.screen.height,h=a.screen.colorDepth,i=a.devicePixelRatio;g.width=b,g.height=d,g["aspect-ratio"]=(b/d).toFixed(2),g["device-width"]=e,g["device-height"]=f,g["device-aspect-ratio"]=(e/f).toFixed(2),g.color=h,g["color-index"]=Math.pow(2,h),g.orientation=d>=b?"portrait":"landscape",g.resolution=i&&96*i||a.screen.deviceXDPI||96,g["device-pixel-ratio"]=i||1},m=function(){clearTimeout(j),j=setTimeout(function(){var b=null,c=e-1,f=c,g=!1;if(c>=0){l();do{if((b=d[f-c])&&((g=k(b.mql.media))&&!b.mql.matches||!g&&b.mql.matches)&&(b.mql.matches=g,b.listeners))for(var h=0,i=b.listeners.length;h<i;h++)b.listeners[h]&&b.listeners[h].call(a,b.mql)}while(c--)}},10)};return function(){var c=b.getElementsByTagName("head")[0],d=b.createElement("style"),e=null,g=["screen","print","speech","projection","handheld","tv","braille","embossed","tty"],h=0,i=g.length,j="#mediamatchjs { position: relative; z-index: 0; }",k="",n=a.addEventListener||(k="on")&&a.attachEvent;for(d.type="text/css",d.id="mediamatchjs",c.appendChild(d),e=a.getComputedStyle&&a.getComputedStyle(d)||d.currentStyle;h<i;h++)j+="@media "+g[h]+" { #mediamatchjs { position: relative; z-index: "+h+" } }";d.styleSheet?d.styleSheet.cssText=j:d.textContent=j,f=g[1*e.zIndex||0],c.removeChild(d),l(),n(k+"resize",m),n(k+"orientationchange",m)}(),function(a){var b=e,c={matches:!1,media:a,addListener:function(a){d[b].listeners||(d[b].listeners=[]),a&&d[b].listeners.push(a)},removeListener:function(a){var c=d[b],e=0,f=0;if(c)for(f=c.listeners.length;e<f;e++)c.listeners[e]===a&&c.listeners.splice(e,1)}};return""===a?(c.matches=!0,c):(c.matches=k(a),e=d.push({mql:c,listeners:null}),c)}}(window)),function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define(b):this[a]=b()}("domready",function(a){function b(a){for(n=1;a=d.shift();)a()}var c,d=[],e=!1,f=document,g=f.documentElement,h=g.doScroll,i="DOMContentLoaded",j="addEventListener",k="onreadystatechange",l="readyState",m=h?/^loaded|^c/:/^loaded|c/,n=m.test(f[l]);return f[j]&&f[j](i,c=function(){f.removeEventListener(i,c,e),b()},e),h&&f.attachEvent(k,c=function(){/^c/.test(f[l])&&(f.detachEvent(k,c),b())}),a=h?function(b){self!=top?n?b():d.push(b):function(){try{g.doScroll("left")}catch(c){return setTimeout(function(){a(b)},50)}b()}()}:function(a){n?a():d.push(a)}}),LazyAds=function(){"use strict";function a(){!0===m&&window.console&&(a=Function.prototype.bind?Function.prototype.bind.call(console.log,console):function(){Function.prototype.apply.call(console.log,console,arguments)},a.apply(this,arguments))}function b(a,b){var c,d,e,f;return function(){e=this,d=[].slice.call(arguments,0),f=new Date;var g=function(){var h=new Date-f;h<b?c=setTimeout(g,b-h):(c=null,a.apply(e,d))};c||(c=setTimeout(g,b))}}function c(a,b,c){b.addEventListener?b.addEventListener(a,c,!1):b.attachEvent?b.attachEvent("on"+a,c):b["on"+a]=c}function d(a,b,c){var d,e,f,g,h=[],c=c||document;if(g="classList"in document.createElement("_"),"querySelectorAll"in document)d=a,d+=b?"."+b:"",h=c.querySelectorAll(d);else for(q=c.getElementsByTagName(a),f=0;f<q.length;f++)e=q[f],!1===b?h.push(e):g?e.classList.contains(b)&&h.push(e):e.className&&-1!==e.className.split(/\s/).indexOf(b)&&h.push(e);return h}function e(a){for(var b,c=d(n.containerElement,n.containerClass),e=[],f=0;f<c.length;f++)b=c[f],!0===(null!==b.getAttribute("data-lazyad"))&&e.push(b);return e}function f(a){for(var b,c,e=d("script",!1,a),f=[],g=0;g<e.length;g++)b=e[g],(c=b.getAttribute("type"))&&"text/lazyad"===c&&f.push(b);return f}function g(a){return a=a.replace(/^\s+|\s+$/g,""),a.replace("\x3c!--","").replace("--\x3e","").trim()}function h(b,c){a("Injecting lazy-loaded Ad",b),c=g(c),setTimeout(function(){postscribe(b,c)},0),b.setAttribute("data-lazyad-loaded",!0)}function i(a){for(var b,c,d,e,g,i,k,l,m,n,o=0,p=0;p<a.length;p++){b=a[p],l=b.getAttribute("data-matchmedia")||!1,i=parseInt(b.getAttribute("data-adwidth"),0)||!1,k=parseInt(b.getAttribute("data-adheight"),0)||!1,c=f(b);for(var q=0;q<c.length;q++){if(d=c[q],n="true"===b.getAttribute("data-lazyad-loaded"),(i||k)&&(e=b.offsetWidth,g=b.offsetHeight,m=!0,i&&i>e&&(m=!1),k&&k>g&&(m=!1),!1===m)){n&&j(b);break}if(!1!==l&&!1===matchMedia(l).matches){n&&j(b);break}n||(h(b,d.innerHTML),o++)}}return o}function j(b){a("Unloading Ad:",b);for(var c=b.getElementsByTagName("*");c;){var d=c[c.length-1];if("script"===d.nodeName.toLowerCase()&&"text/lazyad"===d.type)break;d.parentNode.removeChild(d)}b.setAttribute("data-lazyad-loaded","false")}function k(){var b,c,d=0;l=(new Date).getTime(),b=e(),b&&b.length>0&&(d=i(b)),c=(new Date).getTime()-l,c="~"+c+"ms",a("Lazy-loaded count: ",d,c)}var l,m=!1,n={containerElement:"div",containerClass:"ad"};return"".trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}),domready(function(){c("resize",window,b(function(a){k()},250)),k()}),{init:k}}();