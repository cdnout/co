/*!
  * Zoomove v1.3.0
  * http://thompsonemerson.github.io/zoomove
  *
  * Copyright (c) 2020 Emerson Thompson
  * Licensed under the MIT license
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.ZooMove=e()}}(function(){var e,t,o;return function(){function e(t,o,r){function i(n,s){if(!o[n]){if(!t[n]){var u="function"==typeof require&&require;if(!s&&u)return u(n,!0);if(a)return a(n,!0);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}var c=o[n]={exports:{}};t[n][0].call(c.exports,function(e){return i(t[n][1][e]||e)},c,c.exports,e,t,o,r)}return o[n].exports}for(var a="function"==typeof require&&require,n=0;n<r.length;n++)i(r[n]);return i}return e}()({1:[function(t,o,r){!function(t,o){if("function"==typeof e&&e.amd)e([],o);else if(void 0!==r)o();else{var i={exports:{}};o(),t.zoomove=i.exports}}(this,function(){"use strict";!function(e){e.fn.ZooMove=function(t){var o=e.extend({image:"https://placeholdit.imgix.net/~text?txtsize=30&txt=image+default&w=350&h=350&txttrack=0",cursor:"false",scale:"1.5",move:"true",over:"false",autosize:"true"},t);e(this).attr("data-zoo-cursor")&&(o.cursor=e(this).attr("data-zoo-cursor")),"true"===o.cursor?o.cursor="pointer":o.cursor="default",this.each(function(){var t=e(this);t.attr("data-zoo-over")?o.overD=t.attr("data-zoo-over"):o.overD=o.over,"true"===o.overD&&t.css({overflow:"visible","z-index":"100"}),t.attr("data-zoo-image")?o.imageD=t.attr("data-zoo-image"):o.imageD=o.image,t.attr("data-zoo-autosize")?o.autosizeD=t.attr("data-zoo-autosize"):o.autosizeD=o.autosize,"true"===o.autosizeD&&e("<img/>",{load:function e(){t.css("width",this.width+"px"),t.css("height",this.height+"px")},src:o.imageD}),t.append('<div class="zoo-img"></div>').children(".zoo-img").css({"background-image":"url("+o.imageD+")",cursor:o.cursor})}).on("mouseover",function(t){var r=e(this);t.preventDefault(),r.attr("data-zoo-scale")?o.scaleD=r.attr("data-zoo-scale"):o.scaleD=o.scale,r.attr("data-zoo-move")?o.moveD=r.attr("data-zoo-move"):o.moveD=o.move,r.children(".zoo-img").css({transform:"scale("+o.scaleD+")"})}).on("mousemove",function(t){var r=e(this);t.preventDefault(),"true"===o.moveD&&r.children(".zoo-img").css({"transform-origin":(t.pageX-r.offset().left)/r.width()*100+"% "+(t.pageY-r.offset().top)/r.height()*100+"%"})}).on("mouseout",function(t){var o=e(this);t.preventDefault(),o.children(".zoo-img").css({transform:"scale(1)"})})}}(jQuery)})},{}]},{},[1])(1)});