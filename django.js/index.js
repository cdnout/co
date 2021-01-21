(function(e){"use strict";function t(e){this.name="DjangoJsError",this.message=e||""}t.prototype=new Error,t.prototype.constructor=t;var n=window.Django={token_regex:/<\w*>/g,named_token_regex:/<(\w+)>/g,initialize:function(t){t=t||{},typeof t.urls=="string"||t.urls instanceof String?e.get(t.urls,function(e){n.urls=e}):this.urls=t.urls||window.DJANGO_JS_URLS,typeof t.context=="string"||t.context instanceof String?e.get(t.context,function(e){n.set_context(e)}):this.set_context(t.context||window.DJANGO_JS_CONTEXT)},set_context:function(e){this.context=e,this.user=e.user,this.user&&(this.user.has_perm=function(e){return this.permissions.indexOf(e)>-1})},reload:function(t){e.get(this.url("django_js_context"),function(e){n.set_context(e),t instanceof Function&&t()})},url:function(n,r){var i=this.urls[n]||!1,s=i,o,u,a,f;if(!s)throw new t('URL for view "'+n+'" not found');if(r===undefined)return s;if(e.isArray(r))return this._url_from_array(n,i,r);if(e.isPlainObject(r))return this._url_from_object(n,i,r);var l=Array.prototype.slice.apply(arguments,[1,arguments.length]);return this._url_from_array(n,i,l)},_url_from_array:function(e,n,r){var i=n.match(this.token_regex),s=n.split(this.token_regex),o=s[0];if(!i&&r.length===0)return o;if(i&&i.length!=r.length)throw new t('Wrong number of argument for pattern "'+e+'"');for(var u=0;u<r.length;u++)o+=r[u]+s[u+1];return o},_url_from_object:function(e,n,r){var i=n,s=n.match(this.token_regex);if(!s)return i;for(var o=0;o<s.length;o++){var u=s[o],a=u.slice(1,-1),f=r[a];if(f===undefined)throw new t('Property "'+a+'" not found');i=i.replace(u,f)}return i},file:function(e){return this.context.STATIC_URL+e},"static":function(e){return this.context.STATIC_URL+e},_getCookie:function(t){var n=null;if(document.cookie&&document.cookie!==""){var r=document.cookie.split(";");for(var i=0;i<r.length;i++){var s=e.trim(r[i]);if(s.substring(0,t.length+1)==t+"="){n=decodeURIComponent(s.substring(t.length+1));break}}}return n},csrf_token:function(){return this._getCookie("csrftoken")},csrf_element:function(){var e=this.csrf_token(),t=['<input type="hidden" name="csrfmiddlewaretoken" value="',e?e:"",'">'];return t.join("")},jquery_csrf:function(){var t=this._getCookie;e(document).ajaxSend(function(e,n,r){function i(e){var t=document.location.host,n=document.location.protocol,r="//"+t,i=n+r;return e==i||e.slice(0,i.length+1)==i+"/"||e==r||e.slice(0,r.length+1)==r+"/"||!/^(\/\/|http:|https:).*/.test(e)}function s(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}!s(r.type)&&i(r.url)&&n.setRequestHeader("X-CSRFToken",t("csrftoken"))})},absolute:function(e,n){if(!this.context.hasOwnProperty("ABSOLUTE_ROOT"))throw new t("django-absolute needed to call absolute()");return this.context.ABSOLUTE_ROOT+this.url(e,n)},site:function(e,n){if(!this.context.hasOwnProperty("SITE_ROOT"))throw new t("django-absolute needed to call site()");return this.context.SITE_ROOT+this.url(e,n)}};return window.DJANGO_JS_INIT&&n.initialize(),window.DJANGO_JS_CSRF&&n.jquery_csrf(),n})(window.jQuery);
