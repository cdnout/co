!function(){var t={},e=null,i=null,n=null,o=null,a={},r={color:"#ff0084",background:"#bbb",shadow:"#fff",fallback:!1},h=window.devicePixelRatio>1,l=function(){var t=navigator.userAgent.toLowerCase();return function(e){return-1!==t.indexOf(e)}}(),c={ie:l("msie"),chrome:l("chrome"),webkit:l("chrome")||l("safari"),safari:l("safari")&&!l("chrome"),mozilla:l("mozilla")&&!l("chrome")&&!l("safari")},f=function(){for(var t=document.getElementsByTagName("link"),e=0,i=t.length;i>e;e++)if("icon"===t[e].getAttribute("rel")||"shortcut icon"===t[e].getAttribute("rel"))return t[e];return!1},u=function(){for(var t=Array.prototype.slice.call(document.getElementsByTagName("link"),0),e=document.getElementsByTagName("head")[0],i=0,n=t.length;n>i;i++)("icon"===t[i].getAttribute("rel")||"shortcut icon"===t[i].getAttribute("rel"))&&e.removeChild(t[i])},d=function(t){u();var e=document.createElement("link");e.type="image/x-icon",e.rel="icon",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)},g=function(){return o||(o=document.createElement("canvas"),h?(o.width=32,o.height=32):(o.width=16,o.height=16)),o},m=function(t){var e=g(),i=e.getContext("2d");t=t||0,i&&(i.clearRect(0,0,e.width,e.height),i.beginPath(),i.moveTo(e.width/2,e.height/2),i.arc(e.width/2,e.height/2,Math.min(e.width/2,e.height/2),0,2*Math.PI,!1),i.fillStyle=a.shadow,i.fill(),i.beginPath(),i.moveTo(e.width/2,e.height/2),i.arc(e.width/2,e.height/2,Math.min(e.width/2,e.height/2)-2,0,2*Math.PI,!1),i.fillStyle=a.background,i.fill(),t>0&&(i.beginPath(),i.moveTo(e.width/2,e.height/2),i.arc(e.width/2,e.height/2,Math.min(e.width/2,e.height/2)-2,-.5*Math.PI,(-.5+2*t/100)*Math.PI,!1),i.lineTo(e.width/2,e.height/2),i.fillStyle=a.color,i.fill()),d(e.toDataURL()))},s=function(t){document.title=t>0?"("+t+"%) "+n:n};t.setOptions=function(t){a={};for(var e in r)a[e]=t.hasOwnProperty(e)?t[e]:r[e];return this},t.setProgress=function(t){if(n||(n=document.title),!i||!e){var o=f();i=e=o?o.getAttribute("href"):"/favicon.ico"}return!isNaN(parseFloat(t))&&isFinite(t)?!g().getContext||c.ie||c.safari||a.fallback===!0?s(t):("force"===a.fallback&&s(t),m(t)):!1},t.reset=function(){n&&(document.title=n),i&&(e=i,d(e))},t.setOptions(r),"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module?module.exports=t:window.Piecon=t}();