!function(t){"use strict";function e(t){for(var e in r)if(t.match(r[e]))return e;return-1}var i={MASTERCARD:"MASTERCARD",VISA:"VISA",DISCOVER:"DISCOVER",AMEX:"AMEX",JCB:"JCB"},r={};r[i.MASTERCARD]=/^(222[1-9]|22[3-9]|2[3-6]|27[01]|2720|5[1-5])/,r[i.VISA]=/^4/,r[i.DISCOVER]=/^6(011|22(12[6-9]|1[3-9]|[2-8]|9[0-1]|92[0-5])|4[4-9]|5)/,r[i.AMEX]=/^3[47]/,r[i.JCB]=/^35/,e.KEYS=i,e.TYPES=r,t.CreditableCardType=e}("undefined"!=typeof global?global:this),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(i),i}:t(jQuery)}(function(t){"use strict";var e="undefined"!=typeof window?window:this,i=function(i){if(!i)throw new Error("Politespace requires an element argument.");if(i.getAttribute&&!e.operamini){this.element=i,this.$element=t(i),this.delimiter=this.$element.attr("data-politespace-delimiter")||" ",this.decimalMark=this.$element.attr("data-politespace-decimal-mark")||"",this.reverse=this.$element.is("[data-politespace-reverse]"),this.strip=this.$element.attr("data-politespace-strip"),this.groupLength=this.$element.attr("data-politespace-grouplength")||3;var r=this.$element.attr("data-politespace-proxy-anchor");this.$proxyAnchor=this.$element,this.$proxy=null,r&&(this.$proxyAnchor=this.$element.closest(r))}};i.prototype._divideIntoArray=function(t){for(var e,i,r,a=(""+this.groupLength).split(","),n=1===a.length,o=[],s=0;a.length&&s<t.length;)e=n?a[0]:a.shift()||t.length-s,r=Math.min(parseInt(e,10),t.length-s),i=this.reverse?-1*(r+s):s,o.push(t.substr(i,r)),s+=r;return this.reverse&&o.reverse(),o},i.prototype.format=function(t){var e,i=this.unformat(t);this.strip&&(i=i.replace(new RegExp(this.strip,"g"),""));var r="";return this.decimalMark&&(r=(e=i.split(this.decimalMark)).length>1?this.decimalMark+e[1]:"",i=e[0]),this._divideIntoArray(i).join(this.delimiter)+r},i.prototype.trimMaxlength=function(t){var e=this.element.getAttribute("maxlength");return e&&(t=t.substr(0,e)),t},i.prototype.getValue=function(){return this.trimMaxlength(this.element.value)},i.prototype.update=function(){this.element.value=this.useProxy()||"password"===this.$element.attr("type")?this.getValue():this.format(this.getValue())},i.prototype.unformat=function(t){return t.replace(new RegExp(this.delimiter,"g"),"")},i.prototype.reset=function(){this.element.value=this.unformat(this.element.value)},i.prototype.useProxy=function(){var t=this.$element.attr("pattern");return"number"===this.$element.attr("type")||!!t&&!new RegExp("^"+t+"$").test(this.delimiter)},i.prototype.updateProxy=function(){if(this.useProxy()&&this.$proxy.length){var t=this.format(this.getValue()),e=this.element.offsetWidth;this.$proxy.html(t),e&&this.$proxy.css("width",e+"px"),this.$proxy.closest(".politespace-proxy")[t?"addClass":"removeClass"]("notempty")}},i.prototype.createProxy=function(){function e(e,i){for(var r=0,a=t(e),n=0,o=i.length;n<o;n++)r+=parseFloat(a.css(i[n]));return r}if(this.useProxy()){var i=t("<div>").addClass("politespace-proxy active"),r=this.$proxyAnchor.next(),a=this.$proxyAnchor.parent();this.$proxy=t("<div>").attr("aria-hidden","true").addClass("politespace-proxy-val").css({font:this.$element.css("font"),"padding-left":e(this.element,["padding-left","border-left-width"])+"px","padding-right":e(this.element,["padding-right","border-right-width"])+"px",top:e(this.element,["padding-top","border-top-width","margin-top"])+"px"}),i.append(this.$proxy),i.append(this.$proxyAnchor),r.length?i.insertBefore(r):a.append(i),this.updateProxy()}},i.prototype.setGroupLength=function(t){this.groupLength=t,this.$element.attr("data-politespace-grouplength",t)};t.fn.politespace=function(){return this.each(function(){var e=t(this);if(!e.data("politespace")){var r=new i(this);r.useProxy()&&r.createProxy(),e.bind("politespace-hide-proxy",function(){t(this).closest(".politespace-proxy").removeClass("active")}).bind("politespace-show-proxy",function(){t(this).closest(".politespace-proxy").addClass("active"),r.update(),r.updateProxy()}).bind("input keydown",function(){t(this).trigger("politespace-input"),r.updateProxy()}).bind("blur",function(){t(this).trigger("politespace-beforeblur"),r.update(),r.useProxy()&&t(this).trigger("politespace-show-proxy")}).bind("focus",function(){t(this).trigger("politespace-hide-proxy"),r.reset()}).data("politespace",r).trigger("politespace-init"),r.update(),r.updateProxy()}})},t(document).bind("politespace-init politespace-input",function(i){var r=t(i.target);if(r.is("[data-politespace-creditcard]")){var a=r.data("politespace"),n=r.val(),o=r.is("[data-politespace-creditcard-maxlength]"),s=e.CreditableCardType(n);"AMEX"===s?(a.setGroupLength(o?"4,6,5":"4,6,"),o&&r.attr("maxlength",15)):"DISCOVER"!==s&&"VISA"!==s&&"MASTERCARD"!==s&&"JCB"!==s||(a.setGroupLength(o?"4,4,4,4":"4"),o&&r.attr("maxlength",16))}}),function(t,e){function i(t){var i=e(t),r=i.val();i.val(r.replace(/^1/,""))}var r="politespace-us-telephone-maxlength",a="politespace-beforeblur.politespace-us-telephone";e(document).bind("politespace-init",function(t){var n=e(t.target);if(n.is("[data-politespace-us-telephone]")){var o=n.attr("maxlength");o&&(n.data(r,parseInt(o,10)),i(n[0]),n.off(a).on(a,function(){e(this).attr("maxlength",n.data(r)),i(this)}))}}),e(document).bind("politespace-input",function(t){var i=e(t.target);i.is("[data-politespace-us-telephone]")&&0===i.val().indexOf("1")&&i.attr("maxlength",i.data(r)+1)})}("undefined"!=typeof global&&global,jQuery),e.Politespace=i});