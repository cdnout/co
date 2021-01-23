function isDivHeightVisible(d){var t=$(window).scrollTop(),e=t+$(window).height(),a=$(d).offset().top,i=a+$(d).height();return i>=t&&e>=a&&e>=i&&a>=t}function isDivWidthVisible(d){var t=$(window).scrollLeft(),e=t+$(window).width(),a=$(d).offset().left,i=a+$(d).width();return i>=t&&e>=a&&e>=i&&a>=t}!function(d){"use strict";d.fn.tautocomplete=function(t,e){function a(){var d=r.ddTable.find("tbody").find(".selected");r.ddTextbox.data("id",d.find("td").eq(0).text()),r.ddTextbox.data("text",d.find("td").eq(1).text()),r.ddTextbox.val(d.find("td").eq(1).text()),p.val(d.find("td").eq(0).text()+"#$#"+d.find("td").eq(1).text()),o(),i(),r.ddTextbox.focus()}function i(){d.isFunction(s.onchange)&&s.onchange.call(this)}function o(){r.ddTable.hide(),r.ddTextbox.removeClass("inputfocus"),r.ddDiv.removeClass("highlight"),r.ddTableCaption.hide()}function l(){var t=r.ddTextbox.height()+20+"px 1px 0px 1px",e="1px 1px "+(r.ddTextbox.height()+20)+"px 1px";r.ddDiv.css("top","0px"),r.ddDiv.css("left","0px"),r.ddTable.css("margin",t),r.ddTextbox.addClass("inputfocus"),r.ddDiv.addClass("highlight"),r.ddTable.show(),isDivHeightVisible(r.ddDiv)||(r.ddDiv.css("top",-1*r.ddTable.height()+"px"),r.ddTable.css("margin",e),isDivHeightVisible(r.ddDiv)||(r.ddDiv.css("top","0px"),r.ddTable.css("margin",t),d("html, body").animate({scrollTop:r.ddDiv.offset().top-60},250))),isDivWidthVisible(r.ddDiv)||r.ddDiv.css("left","-"+(r.ddTable.width()-r.ddTextbox.width()-20)+"px")}function n(d){try{r.ddTextbox.removeClass("loading"),r.ddTable.find("tbody").find("tr").remove();var t=0,e=0,a=null,i=null;if(null!=d)for(t=0;t<d.length;t++)if(!(t>=15)){var o=d[t];a="",e=0;for(var n in o)b>=e&&(i=o[n],a=a+"<td>"+i+"</td>",e++);r.ddTable.append("<tr>"+a+"</tr>")}0==t&&r.ddTableCaption.show(),r.ddTable.find("td:nth-child(1)").hide(),r.ddTable.find("tbody").find("tr:first").addClass("selected"),l()}catch(s){alert("Error: "+s)}}var s=d.extend({width:"500px",columns:[],onchange:null,norecord:"No Records Found",dataproperty:null,regex:"^[a-zA-Z0-9\b]+$",data:null,placeholder:null},t),r={ddDiv:d("<div>",{"class":"adropdown"}),ddTable:d("<table></table>",{style:"width:"+s.width}),ddTableCaption:d("<caption>"+s.norecord+"</caption>"),ddTextbox:d("<input type='text' class='adropdown-input'>")},x={UP:38,DOWN:40,ENTER:13,TAB:9},c={columnNA:"Error: Columns Not Defined",dataNA:"Error: Data Not Available"},f={id:function(){return r.ddTextbox.data("id")},text:function(){return r.ddTextbox.data("text")},searchdata:function(){return r.ddTextbox.val()},isNull:function(){return""==r.ddTextbox.data("id")}},h=function(){var d=0;return function(t,e){clearTimeout(d),d=setTimeout(t,e)}}(),u=!1;this.is(":focus")&&(u=!0);var b=s.columns.length,p=this;if(this.wrap("<div style='position: relative; display:inline-block; border:0px solid blue;'></div>"),this.after(r.ddTextbox),r.ddTextbox.attr("autocomplete","off"),r.ddTextbox.css("width",this.width+"px"),r.ddTextbox.css("font-size",this.css("font-size")),r.ddTextbox.attr("placeholder",s.placeholder),""==s.columns||null==s.columns?r.ddTextbox.attr("placeholder",c.columnNA):""!=s.data&&null!=s.data||r.ddTextbox.attr("placeholder",c.dataNA),null!=s.dataproperty)for(var v in s.dataproperty)r.ddTextbox.attr("data-"+v,s.dataproperty[v]);this.after(r.ddDiv),this.hide(),r.ddDiv.append(r.ddTable),r.ddTable.append(r.ddTableCaption);for(var T="<thead><tr>",C=0;b-1>=C;C++)T=T+"<th>"+s.columns[C]+"</th>";T+="</thead></tr>",r.ddTable.append(T);var g="",m="";if(""!=this.val()){var w=this.val().split("#$#");g=w[0],m=w[1]}return r.ddTextbox.attr("data-id",g),r.ddTextbox.attr("data-text",m),r.ddTextbox.val(m),u&&r.ddTextbox.focus(),r.ddTextbox.keyup(function(t){return(t.keyCode<46||t.keyCode>90)&&8!=t.keyCode?void t.preventDefault():void h(function(){if(""==r.ddTextbox.val())return void o();if(r.ddTableCaption.hide(),r.ddTextbox.addClass("loading"),d.isFunction(s.data)){var t=s.data.call(this);n(t)}},1e3)}),r.ddTextbox.keypress(function(d){var t=new RegExp(s.regex),e=String.fromCharCode(d.charCode?d.charCode:d.which);return t.test(e)?void 0:(d.preventDefault(),!1)}),r.ddTextbox.keydown(function(d){var t=r.ddTable.find("tbody"),e=t.find(".selected");d.keyCode==x.ENTER&&(d.preventDefault(),a()),d.keyCode==x.UP&&(r.ddTable.find(".selected").removeClass("selected"),0==e.prev().length?t.find("tr:last").addClass("selected"):e.prev().addClass("selected")),d.keyCode==x.DOWN&&(t.find(".selected").removeClass("selected"),0==e.next().length?t.find("tr:first").addClass("selected"):(r.ddTable.find(".selected").removeClass("selected"),e.next().addClass("selected")))}),r.ddTable.delegate("tr","mousedown",function(){r.ddTable.find(".selected").removeClass("selected"),d(this).addClass("selected"),a()}),r.ddTextbox.focusout(function(){if(o(),d(this).val()!=d(this).data("text")){var t=!0;""==d(this).data("text")&&(t=!1),d(this).data("text",""),d(this).data("id",""),d(this).val(""),p.val(""),t&&i()}}),f}}(jQuery);
//# sourceMappingURL=tautocomplete.min.js.map