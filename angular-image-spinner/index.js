(function(){angular.module("imageSpinner",[]).value("version","0.1.5")}).call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};angular.module("imageSpinner").constant("imageSpinnerDefaultSettings",{lines:9,length:10,width:2,radius:3,corners:1,rotate:0,direction:1,color:"#000",speed:1,trail:10,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"50%",left:"50%"}).directive("imageSpinner",["$window","imageSpinnerDefaultSettings",function(b,c){var d,e,f,g,h;return d=b.Image,f=function(){function b(b,e){var f=this;this.el=b,this.settings=e,this.load=a(this.load,this),null==e&&(e={}),e=angular.extend(e,c),this.spinner=new Spinner(e),this.container=this.el.parent(),this.container.hide=function(){return f.container.css("display","none")},this.container.show=function(){return f.container.css("display","block")},this.loader=new d,this.loader.onload=function(){return f.load()}}return b.prototype.setWidth=function(a){return a=""+a.replace(/px/,"")+"px",angular.element(this.container).css("width",a)},b.prototype.setHeight=function(a){return a=""+a.replace(/px/,"")+"px",angular.element(this.container).css("height",a)},b.prototype.show=function(){return this.loader.src=this.el.attr("src"),this.el.css("display","none"),this.spin()},b.prototype.load=function(){return this.unspin(),this.el.css("display","block"),this.container.css("display","block")},b.prototype.spin=function(){return this.hasSpinner?void 0:(this.hasSpinner=!0,this.spinner.spin(this.container[0]))},b.prototype.unspin=function(){return this.hasSpinner?(this.hasSpinner=!1,this.spinner.stop()):void 0},b}(),e="spinner-container",g=function(a){return void 0===a||null===a||""===a},h=function(a,b,c){var d,h,i,j;return d=angular.element("<div>").addClass(e).css("position","relative"),b.wrap(d),h=angular.element(b),i=c.imageSpinnerSettings,null==i&&(i={}),i=a.$eval(i),j=new f(h,i),function(b){var d,e,f;return e=function(a){return g(a)||g(h.attr("width"))||g(h.attr("height"))?void 0:b.show()},d=function(){var a;return a=h.attr("src"),f()?(e(a),g(a)?void 0:b.container.show()):(b.unspin(),b.container.hide())},f=function(){return!h.hasClass("ng-hide")},a.$watch(function(){return f()},function(a){return null!=a?d():void 0}),a.$on("$destroy",function(){return b.container.hide()}),c.$observe("ng-src",function(a){return g(a)?void 0:d()}),c.$observe("src",function(a){return g(a)?void 0:d()}),c.$observe("width",function(a){return g(a)?void 0:(b.setWidth(a),e(h.attr("src")))}),c.$observe("height",function(a){return g(a)?void 0:(b.setHeight(a),e(h.attr("src")))})}(j)},{restrict:"A",link:h,scope:{}}}])}.call(this);