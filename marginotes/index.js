!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(i),i}:t(jQuery)}(function(t){t.fn.marginotes=function(e){e=e||{};var i=e.field||"desc",o=this.filter("span");t("body").append('<div class="margintooltip" style="display: none;"></div>'),o.css({"border-bottom":"1px dashed #337ab7",cursor:"help"}),this.hover(function(o){var n=t(this).attr(i),r=t(this.parentElement),d=r.position(),p=t(".margintooltip"),s=Math.min(e.width||100,d.left);60>s||!n||p.css({"border-right":"solid 2px #337ab7","font-size":"13px",left:d.left-s-5,"min-height":r.height(),"padding-right":"7px",position:"absolute","text-align":"right",top:d.top,width:s}).text(n).stop().fadeIn({duration:100,queue:!1})},function(){t(".margintooltip").stop(),t(".margintooltip").fadeOut({duration:100})})}});
//# sourceMappingURL=./marginotes.min.js.map