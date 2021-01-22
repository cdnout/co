/**
 * Autotab - jQuery plugin 1.9.2
 * https://github.com/Mathachew/jquery-autotab
 * 
 * Copyright (c) 2008, 2015 Matthew Miller
 * 
 * Licensed under the MIT licensing:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function(d){var u=navigator.platform,g=null,r="iPad"===u||"iPhone"===u||"iPod"===u,w="undefined"!==typeof InstallTrigger,x=!window.ActiveXObject&&"ActiveXObject"in window,h=function(a,f){if(null!==f&&"undefined"!==typeof f)for(var b in f)d(a).data("autotab-"+b,f[b])},l=function(a){var f={arrowKey:!1,format:"all",loaded:!1,disabled:!1,pattern:null,uppercase:!1,lowercase:!1,nospace:!1,maxlength:2147483647,target:null,previous:null,trigger:null,originalValue:"",changed:!1,editable:"text"===a.type||
"password"===a.type||"textarea"===a.type||"tel"===a.type||"number"===a.type||"email"===a.type||"search"===a.type||"url"===a.type,filterable:"text"===a.type||"password"===a.type||"textarea"===a.type,tabOnSelect:!1};if(!0===d.autotab.selectFilterByClass&&"undefined"===typeof d(a).data("autotab-format")){var b="all text alpha number numeric alphanumeric hex hexadecimal custom".split(" "),e;for(e in b)if(d(a).hasClass(b[e])){f.format=b[e];break}}for(e in f)"undefined"!==typeof d(a).data("autotab-"+e)&&
(f[e]=d(a).data("autotab-"+e));f.loaded||(null!==f.trigger&&"string"===typeof f.trigger&&(f.trigger=f.trigger.toString()),h(a,f));return f},p=function(a){return"undefined"!==typeof a&&("string"===typeof a||!(a instanceof jQuery))},y=function(a){var d=0,b=0,e=0;if("text"===a.type||"password"===a.type||"textarea"===a.type)"number"===typeof a.selectionStart&&"number"===typeof a.selectionEnd?(d=a.selectionStart,b=a.selectionEnd,e=1):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),
d=a.createTextRange(),a=a.createTextRange(),e=b.getBookmark(),d.moveToBookmark(e),a.setEndPoint("EndToStart",d),d=a.text.length,b=d+b.text.length,e=2);return{start:d,end:b,selectionType:e}};d.autotab=function(a){"object"!==typeof a&&(a={});d(":input").autotab(a)};d.autotab.selectFilterByClass=!1;d.autotab.next=function(){var a=d(document.activeElement);a.length&&a.trigger("autotab-next")};d.autotab.previous=function(){var a=d(document.activeElement);a.length&&a.trigger("autotab-previous")};d.autotab.remove=
function(a){p(a)?d(a).autotab("remove"):d(":input").autotab("remove")};d.autotab.restore=function(a){p(a)?d(a).autotab("restore"):d(":input").autotab("restore")};d.autotab.refresh=function(a){p(a)?d(a).autotab("refresh"):d(":input").autotab("refresh")};d.fn.autotab=function(a,f){if(!this.length)return this;var b=d.grep(this,function(a,c){return"hidden"!=a.type});if("filter"==a){if("string"===typeof f||"function"===typeof f)f={format:f};for(var e=0,m=b.length;e<m;e++){var c=l(b[e]),k=f;k.target=c.target;
k.previous=c.previous;d.extend(c,k);c.loaded?h(b[e],c):(c.disabled=!0,t(b[e],k))}}else if("remove"==a||"destroy"==a||"disable"==a)for(e=0,m=b.length;e<m;e++)c=l(b[e]),c.disabled=!0,h(b[e],c);else if("restore"==a||"enable"==a)for(e=0,m=b.length;e<m;e++)c=l(b[e]),c.disabled=!1,h(b[e],c);else if("refresh"==a)for(e=0,m=b.length;e<m;e++){var c=l(b[e]),n=e+1,q=e-1,k=function(){c.target=0<e&&n<m?b[n]:0<e?null:b[n]},g=function(){c.previous=0<e&&n<m?b[q]:0<e?b[q]:null};if(null===c.target||""===c.target.selector)k();
else if("string"===typeof c.target||c.target.selector)c.target=d("string"===typeof c.target?c.target:c.target.selector),0===c.target.length&&k();if(null===c.previous||""===c.previous.selector)g();else if("string"===typeof c.previous||c.previous.selector)c.previous=d("string"===typeof c.previous?c.previous:c.previous.selector),0===c.previous.length&&g();c.loaded?(p(c.target)&&(c.target=d(c.target)),p(c.previous)&&(c.previous=d(c.previous)),h(b[e],c)):t(b[e],c)}else if(null===a||"undefined"===typeof a?
f={}:"string"===typeof a||"function"===typeof a?f={format:a}:"object"===typeof a&&(f=a),1<b.length)for(e=0,m=b.length;e<m;e++)n=e+1,q=e-1,k=f,0<e&&n<m?(k.target=b[n],k.previous=b[q]):0<e?(k.target=null,k.previous=b[q]):(k.target=b[n],k.previous=null),t(b[e],k);else t(b[0],f);return this};var v=function(a,d,b){if("function"===typeof b.format)return b.format(d,a);a=null;switch(b.format){case "text":a=RegExp("[0-9]+","g");break;case "alpha":a=RegExp("[^a-zA-Z]+","g");break;case "number":case "numeric":a=
RegExp("[^0-9]+","g");break;case "alphanumeric":a=RegExp("[^0-9a-zA-Z]+","g");break;case "hex":case "hexadecimal":a=RegExp("[^0-9A-Fa-f]+","g");break;case "custom":a=new RegExp(b.pattern,"g")}null!==a&&(d=d.replace(a,""));b.nospace&&(a=RegExp("[ ]+","g"),d=d.replace(a,""));b.uppercase&&(d=d.toUpperCase());b.lowercase&&(d=d.toLowerCase());return d},t=function(a,f){var b=l(a);b.disabled&&(b.disabled=!1,b.target=null,b.previous=null);d.extend(b,f);p(b.target)&&(b.target=d(b.target));p(b.previous)&&(b.previous=
d(b.previous));var e=a.maxLength;"undefined"===typeof a.maxLength&&"textarea"==a.type&&(e=a.maxLength=a.getAttribute("maxlength"));2147483647==b.maxlength&&2147483647!=e&&-1!=e?b.maxlength=e:0<b.maxlength?a.maxLength=b.maxlength:b.target=null;if(b.loaded)h(a,b);else{b.loaded=!0;h(a,b);if("select-one"==a.type)d(a).on("change",function(a){l(this).tabOnSelect&&d(this).trigger("autotab-next")});d(a).on("autotab-next",function(a,c){var d=this;setTimeout(function(){c||(c=l(d));var a=c.target;c.disabled||
!a.length||r||(a.prop("disabled")||a.prop("readonly")?a.trigger("autotab-next"):c.arrowKey?a.focus():a.focus().select(),g=new Date)},1)}).on("autotab-previous",function(a,c){var d=this;setTimeout(function(){c||(c=l(d));var a=c.previous;if(!c.disabled&&a.length){var b=a.val();a.prop("disabled")||a.prop("readonly")?a.trigger("autotab-previous"):b.length&&a.data("autotab-editable")&&!c.arrowKey?(x?a.val(b.substring(0,b.length-1)).focus():a.focus().val(b.substring(0,b.length-1)),h(a,{changed:!0})):(c.arrowKey&&
h(this,{arrowKey:!1}),x?a.val(b).focus():a.focus().val(b));g=null}},1)}).on("focus",function(){h(this,{originalValue:this.value})}).on("blur",function(){var a=l(this);a.changed&&this.value!=a.originalValue&&(h(this,{changed:!1}),d(this).change())}).on("keydown.autotab",function(a){var c=l(this);if(!c||c.disabled)return!0;var b=y(this),e=a.which||a.charCode;if(8==e){c.arrowKey=!1;if(!c.editable)return d(this).trigger("autotab-previous",c),!1;h(this,{changed:this.value!==c.originalValue});0===this.value.length&&
d(this).trigger("autotab-previous",c)}else if(9==e&&null!==g)if(a.shiftKey)g=null;else{if(800>(new Date).getTime()-g.getTime())return g=null,!1}else"range"!==this.type&&"select-one"!==this.type&&"select-multiple"!==this.type&&("tel"!==this.type&&"number"!==this.type||("tel"===this.type||"number"===this.type)&&0==this.value.length)&&(37!=e||c.editable&&0!=b.start?39!=e||c.editable&&c.filterable&&b.end!=this.value.length&&0!=this.value.length||(c.arrowKey=!0,d(this).trigger("autotab-next",c)):(c.arrowKey=
!0,d(this).trigger("autotab-previous",c)))}).on("keypress.autotab",function(a){var c=l(this),b=a.which||a.keyCode;if(!c||c.disabled||w&&0===a.charCode||a.ctrlKey||a.altKey||13==b||this.disabled)return!0;a=String.fromCharCode(b);if("text"!=this.type&&"password"!=this.type&&"textarea"!=this.type)return this.value.length+1>=c.maxlength&&(c.arrowKey=!1,d(this).trigger("autotab-next",c)),this.value.length!=c.maxlength;if(null!==c.trigger&&0<=c.trigger.indexOf(a))return null!==g&&800>(new Date).getTime()-
g.getTime()?g=null:(c.arrowKey=!1,d(this).trigger("autotab-next",c)),!1;g=null;b=document.selection&&document.selection.createRange?!0:0<b;a=v(this,a,c);if(b&&(null===a||""===a))return!1;if(b&&this.value.length<=this.maxLength){b=y(this);if(0===b.start&&b.end==this.value.length)this.value=a;else{if(this.value.length==this.maxLength&&b.start===b.end)return c.arrowKey=!1,d(this).trigger("autotab-next",c),!1;this.value=this.value.slice(0,b.start)+a+this.value.slice(b.end)}h(this,{changed:this.value!=
c.originalValue});this.value.length!=c.maxlength&&(b.start++,1==b.selectionType?this.selectionStart=this.selectionEnd=b.start:2==b.selectionType&&(a=this.createTextRange(),a.collapse(!0),a.moveEnd("character",b.start),a.moveStart("character",b.start),a.select()))}this.value.length==c.maxlength&&(c.arrowKey=!1,d(this).trigger("autotab-next",c));return!1}).on("drop paste",function(a){var b=l(this);if(!b)return!0;this.maxLength=2147483647;(function(a,e){setTimeout(function(){var f=-1,g=document.createElement("input");
g.type="hidden";g.value=a.value.toLowerCase();g.originalValue=a.value;a.value=v(a,a.value,e).substr(0,e.maxlength);var h=function(a,b){if(a){var c=l(a);if(d(a).prop("disabled")||d(a).prop("readonly")||!c.editable)d(a).trigger("autotab-next"),r||h(c.target[0],b);else{for(var e=0,k=b.length;e<k;e++)f=g.value.indexOf(b.charAt(e).toLowerCase(),f)+1;e=g.originalValue.substr(f);if(e=v(a,e,c).substr(0,c.maxlength))a.value=e,e.length==c.maxlength&&(c.arrowKey=!1,d(a).trigger("autotab-next",c),w&&setTimeout(function(){a.selectionStart=
a.value.length},1),r||h(c.target[0],e))}}};a.value.length==e.maxlength&&(b.arrowKey=!1,d(a).trigger("autotab-next",b),r||h(e.target[0],a.value.toLowerCase()));a.maxLength=e.maxlength},1)})(this,b)})}};d.fn.autotab_magic=function(a){return d(this).autotab()};d.fn.autotab_filter=function(a){var f={};"string"===typeof a||"function"===typeof a?f.format=a:d.extend(f,a);return d(this).autotab("filter",f)}})(jQuery);
