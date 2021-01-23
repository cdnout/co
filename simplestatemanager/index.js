/*! SimpleStateManager | license: MIT | version: 2.2.5 | build date: 2014-06-12 */
!function(a,b){"use strict";var c={},d=[],e=0,f=[],g=10,h=null,i=[],j=function(){return"function"==typeof a.matchMedia&&"undefined"!=typeof a.matchMedia("(width: 100px)").addListener?!0:!1}(),k=function(){clearTimeout(h),h=setTimeout(l,g)},l=function(){e=o(),m(e)},m=function(a){for(var b=d.length,e=i.length,g=[],h=[],j=[],k=!0,l=c,m=0;b>m;m++){k=!0,l.state=d[m],l.browserWidth=a;for(var n=0;e>n;n++)if("undefined"!=typeof l.state[i[n].name]&&(l.callback=i[n].test,l.callback()===!1)){k=!1;break}k?s(f,d[m])?h=h.concat(d[m].onResize):(f.push(d[m]),j=j.concat(d[m].onEnter)):s(f,d[m])&&(g=g.concat(d[m].onLeave),f=t(f,d[m]))}u(g),u(j),u(h)};c.browserResize=m,c.getBrowserWidth=function(){return e},c.addState=function(a){var b={id:n(),minWidth:0,maxWidth:999999,onEnter:[],onLeave:[],onResize:[]};return a=p(b,a),"function"==typeof a.onEnter&&(a.onEnter=[a.onEnter]),"function"==typeof a.onLeave&&(a.onLeave=[a.onLeave]),"function"==typeof a.onResize&&(a.onResize=[a.onResize]),d.push(a),d=q(d,"minWidth"),this},c.updateState=function(a,b){for(var c=d.length-1;c>=0;c--)d[c].id===a&&(d[c]=p(d[c],b));return this},c.removeState=function(a){for(var b=d.length-1;b>=0;b--)d[b].id===a&&d.splice(b,1);return this},c.removeStates=function(a){for(var b=a.length-1;b>=0;b--)c.removeState(a[b]);return this},c.removeAllStates=function(){return d=f=[],this},c.addStates=function(a){for(var b=a.length-1;b>=0;b--)c.addState(a[b]);return this},c.getStates=function(a){var b=null,c=[];if("undefined"==typeof a)return d;b=a.length;for(var e=0;b>e;e++)c.push(r(a[e]));return c},c.addConfigOption=function(a){var b={name:"",test:null};a=p(b,a),""!==a.name&&null!==a.test&&i.push(a)},c.getConfigOption=function(a){if("string"!=typeof a)return i;for(var b=i.length-1;b>=0;b--)if(i[b].name===a)return i[b]},c.removeConfigOption=function(a){for(var b=i.length-1;b>=0;b--)i[b].name===a&&i.splice(b,1)},c.isActive=function(a){for(var b=0;b<f.length;b++)if(f[b].id===a)return!0;return!1},c.getCurrentStates=function(){return f},c.setResizeTimeout=function(a){g=a},c.getResizeTimeout=function(){return g},c.ready=function(){return e=o(),a.attachEvent?a.attachEvent("onresize",k):a.addEventListener&&a.addEventListener("resize",k,!0),m(e),this};var n=function(){for(var a="",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;10>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a},o=function(){var c=0;return j?a.matchMedia("(width:"+a.innerWidth+"px)").matches?c=a.innerWidth:a.matchMedia("(width:"+a.innerWidth+"px)").matches?c=a.outerWidth:a.matchMedia("(width:"+b.body.clientWidth+"px)").matches&&(c=b.body.clientWidth):"number"==typeof b.body.clientWidth?c=b.body.clientWidth:"number"==typeof a.innerWidth?c=a.innerWidth:b.documentElement&&b.documentElement.clientWidth&&(c=b.documentElement.clientWidth),c},p=function(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c},q=function(a,b){return a.sort(function(a,c){var d=a[b],e=c[b];return e>d?-1:d>e?1:0})},r=function(a){for(var b=d.length-1;b>=0;b--)if(d[b].id===a)return d[b]},s=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0},t=function(a,b){for(var c=a.length,d=0;c>d;d++)a[d]===b&&a.splice(d,1);return a},u=function(a){for(var b=a.length,c=0;b>c;c++)a[c]()};c.addConfigOption({name:"minWidth",test:function(){return"number"==typeof this.state.minWidth&&this.state.minWidth<=this.browserWidth?!0:!1}}),c.addConfigOption({name:"maxWidth",test:function(){return"number"==typeof this.state.maxWidth&&this.state.maxWidth>=this.browserWidth?!0:!1}}),a.ssm=c,"function"==typeof a.define&&a.define.amd&&a.define("ssm",[],function(){return a.ssm})}(window,document);