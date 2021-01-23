/*! Where Y'at - v0.1.2 - 2014-12-26
* https://github.com/whereyat/whereyat-js
* Copyright (c) 2014 Zane Shannon; Licensed MIT */
!function(a){var b;b=function(b,c){this.error=!1,this.options=a.extend({},b),this.completion=c,this.nodes=[],this.parse(),this.render()},b.prototype.locate=function(){a.ajax({method:"GET",url:"https://ip.wherey.at/",success:function(a){return function(b){"ok"===b.status?(a.location={lat:b.latitude,lng:b.longitude},a.render()):a.render("not_found"===b.status?{error:!0}:{error:!0})}}(this),error:function(a){return function(){a.render({error:!0})}}(this)})},b.prototype.parse=function(){a(this.options.className).each(function(a){return function(b,c){return a.nodes.push(c)}}(this))},b.prototype.render=function(b){return null==b&&(b={}),null!=this.location||b.error?(a(this.nodes).each(function(c){return function(d,e){var f,g,h,i,j,k,l;if(f=a(e),f.removeClass(""+c.options.classPrefix+"locating"),b.error)return f.addClass(""+c.options.classPrefix+"error");j={lat:f.data(c.options.latitudeData),lng:f.data(c.options.longitudeData)},k=c.distance(j,c.location),h=c.options.maxDistance,l=c.options.distances;for(i in l)if(g=l[i],g>=k){h=i;break}return f.addClass(""+c.options.classPrefix+h)}}(this)),void(null!=this.completion&&this.completion())):(this.locate(),void a(this.nodes).each(function(b){return function(c,d){var e;return e=a(d),e.addClass(""+b.options.classPrefix+"locating")}}(this)))},b.prototype.distance=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;return d=a.lat,e=b.lat,f=a.lng,g=b.lng,h=Math.PI*d/180,i=Math.PI*e/180,j=Math.PI*f/180,k=Math.PI*g/180,m=f-g,l=Math.PI*m/180,c=Math.sin(h)*Math.sin(i)+Math.cos(h)*Math.cos(i)*Math.cos(l),c=Math.acos(c),c=180*c/Math.PI,c=60*c*1.1515,"kilometers"===this.options.units&&(c=1.609344*c),c},a.whereyat=function(c,d){return c=a.extend({},a.whereyat.options,c),new b(c,d)},a.whereyat.options={className:".whereyat",classPrefix:"yat-",latitudeData:"yatLat",longitudeData:"yatLong",maxDistance:"xl",units:"miles",distances:{xs:75,sm:200,md:750,lg:1250}}}(jQuery);