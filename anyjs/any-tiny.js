/*!
 * anyjs tiny ver 1.0.6 - any-tiny.js
 * (c) any-js - https://github.com/any-js/anyjs/
 * Released under the MIT license
 */
var $any = {};

(function(any){
'use strict';

/**
 * jQuery selector.
 * @typedef {string|Element|jQuery} Selector
 * @example
 - #sample, .sample
 - Element
 - jQuery object
 */

/**
 * Assoc object.
 * @typedef {object<string, *>} assoc
 * @example
 {
 a: 1,
 b: '2',
 c: {c1: 1, c2: 2}
}
 */

/**
 * Functions object.
 * @typedef {object<string, function>} functions
 * @example
 {
 a: function(v){ },
 b: function(v){ }
}
 */

/**
 * Class expression.
 * @typedef {Object} Class
 * @example
 - Class object
 */

any.define = {};

/**
 * Private methods
 */

/**
 * @ignore
 */
function trim(v){
	return v.replace(/^(\s)+|(\s)+$/g, '');
}

/**
 * @ignore
 */
function keys(nm){
	return String(nm).split('.').map(trim);
}

/**
 * @ignore
 */
function arrArg(vs){
	if (vs != null){
		if(!(vs instanceof Array)){
			if (Object.prototype.toString.call(vs) === '[object Arguments]'){
				vs = Array.prototype.slice.call(vs);
			}else{
				vs = [vs];
			}
		}
	}else{
		vs = [];
	}

	return vs;
}

/**
 * @ignore
 */
function cmpAdd(opt, nm, dn){
	var o = (opt[nm])?opt[nm]:opt;

	if (o.complete == null){
		o.complete = [];
	}else if (typeof o.complete === 'function'){
		o.complete = [o.complete];
	}

	o.complete.push(dn);
}

/**
 * @ignore
 */
function mtnDn(o, nm, dn){
	o[nm] = o[nm] || {effect: o.effect, duration: o.duration, easing: o.easing, force: o.force};
	cmpAdd(o, nm, dn);
}

/**
 * @ignore
 */
function none(){

}

/**
 * Manage "Profile", store and read options, merge default options.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | All methods | Yes | Yes | Yes |
 *
 * @namespace $any.profile
 * @see Profile
 *
 * @tutorial static-profile
 * @tutorial demo-various
 *
 * @example
 * example = $any.profile.create({a: 1, b: 2});
 * example.setProfile('abc', {a: '1', b: '2'});
 *
 * opt = $any.profile.getProfile(example, 'abc');		//Get 'abc'
 * opt = $any.profile.getProfile(example, null);			//Get default
 */
any.profile = {};

/**
 * Profile object by created $any.profile.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | All methods | Yes | Yes | Yes |
 *
 * @class Profile
 *
 * @see $any.profile
 * @tutorial static-profile
 * @tutorial demo-various
 *
 * @example
 * example = $any.profile.create({a: 1, b: 2});
 * example.setProfile('abc', {a: '1', b: '2'});
 *
 * opt = $any.profile.getProfile(example, 'abc');   //Get 'abc'
 * opt = $any.profile.getProfile(example, null);    //Get default
 */

/**
 * Create profile object.
 * @function create
 * @memberof $any.profile
 *
 * @param {assoc} defaults Default option.
 * @returns {Profile}
 *
 * @see Profile
 *
 * @tutorial static-profile
 *
 * @example
 * example = $any.profile.create({a: 1, b: 2});
 */
any.profile.create = function(defaults){
	/**
	 * @ignore
	 */
	var pfl = {
		define: {},
		defaults: defaults,
		profiles: {}
	};

	/**
	 * Set profile option.
	 * @memberof Profile
	 * @instance
	 * @function
	 * @name setProfile
	 *
	 * @param {string} name Profile name.
	 * @param {assoc} opt Profile's options.
	 *
	 * @see $any.profile.setProfile
	 *
	 * @tutorial static-profile
	 * @example
	 * example.setProfile('abc', {a: '1', b: '2'});
	 */
	pfl.setProfile = function(name, opt){
		any.profile.setProfile(pfl, name, opt);
	};

	/**
	 * Get profile option.
	 * @memberof Profile
	 * @instance
	 * @function
	 * @name getProfile
	 *
	 * @param {assoc|string} opt Profile name or override options.
	 * @param {assoc} defaults Default options.
	 * @returns {assoc}
	 *
	 * @see $any.profile.getProfile
	 *
	 * @tutorial static-profile
	 * @example
	 * opts = example.getProfile('abc');
	 */
	pfl.getProfile = function(opt, defaults){
		return any.profile.getProfile(pfl, opt, defaults);
	};

	return pfl;
};

/**
 * Set profile option.
 * @function setProfile
 * @memberof $any.profile
 *
 * @param {object} scope Scope.
 * @param {string} name Profile name.
 * @param {assoc} opt Profile's options.
 *
 * @see Profile
 *
 * @tutorial static-profile
 * @example
 * $any.profile.setProfile(example, 'abc', {b: 3, c: 5});	//Set 'abc'
 * $any.profile.setProfile(example, null, {b: 3, c: 5});	   //Set default
 */
any.profile.setProfile = function(scope, name, opt){
	if (name == null || name === 'default'){
		scope.defaults = scope.defaults || {};
		ext(scope.defaults, opt);
	}else{
		scope.profiles[name] = ext(ext({}, scope.defaults, true), opt, true);
	}
};

/**
 * Get profile option.
 * @function getProfile
 * @memberof $any.profile
 *
 * @param {object} scope Scope.
 * @param {string|assoc|array} opt Profile name or override options.
 * @param {assoc} defaults Default options.
 * @returns {assoc}
 *
 * @see Profile
 *
 * @tutorial static-profile
 * @example
 * opt = $any.profile.getProfile(example, 'abc');		//Get 'abc'
 * opt = $any.profile.getProfile(example, null);			//Get default
 * opt = $any.profile.getProfile(example, ['abc', {a: 1000, y: 1000}]);		//Get 'abc' and override option.
 */
any.profile.getProfile = function(scope, opt, defaults){
	var pfs = scope.profiles;

	defaults = defaults || {};

	if (opt instanceof Array){
		var nm = opt[0];

		if (opt.length == 2 && typeof nm === 'string'){
			if (pfs[nm] == null){
				error('profile none', opt);
			}
			return ext(ext(defaults, pfs[nm], true), opt[1], true);
		}else{
			error('illegal format', opt);
		}
	} else if (opt instanceof Object){
		return ext(ext(defaults, scope.defaults, true), opt, true);
	} else if (opt == null || opt === 'default'){
		return ext(defaults, scope.defaults, true);
	} else if (typeof opt === 'string'){
		if (pfs[opt] == null){
			error('profile none', opt);
		}
		return ext(defaults, pfs[opt], true);
	}

	return opt;
};

/**
 * any($any) static methods. Helper methods for data operation.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | ready | - | Yes | - |
 * | detectClick | Yes | - | - |
 * | Others | Yes | Yes | Yes |
 *
 * @namespace $any
 *
 * @tutorial static-any
 * @example
 * //See tutorials.
 */

/**
 * any($any) defines.
 *
 * @namespace $any.define
 */

/**
 * @ignore
 */
function csOut(f, vs){
	vs = arrArg(vs);
	vs.unshift(console);

	Function.prototype.call.apply(f, vs);
}

/**
 * $any.error mode
 *
 * | Value | Description |
 * |:---|:---|
 * | <code>0</code> | none |
 * | <code>1</code> | error |
 * | <code>2</code> | error+trace |
 *
 * @memberof $any.define
 * @type {number}
 * @default 1
 *
 * @see $any.error
 * @see {@link $any.log}
 */
any.define.error = 1;	//0:none, 1:error, 2:error+trace

/**
 * If error occurs, throw error.
 * @memberof $any.define
 * @type {boolean}
 * @default false
 *
 * @see $any.error
 * @see {@link $any.log}
 */
any.define.throwError = false;

/**
 * Check existence of selector's target. If none, error occurs.
 * @memberof $any.define
 * @type {boolean}
 * @default false
 * @see {@link $any.log}
 */
any.define.targetExist = false;

/**
 * Output error.
 * @function error
 * @memberof $any
 *
 * @param {...*} v Arguments.
 *
 * @see $any.define.error
 * @see {@link $any.log}
 *
 * @tutorial static-any
 * @example
 * $any.error(1, 2, 3);
 */
any.error = function(v){
	switch (any.define.error){
	case 1:
		csOut(console.error, arguments);
		break;
	case 2:
		csOut(console.error, arguments);
		console.trace();
		break;
	default:
		break;
	}

	if (any.define.throwError){
		throw new Error(v);
	}
};

/**
 * @ignore
 */
function ext(v, s, deep){
	if(!s){
		return v;
	}

	for (var k in s){
		if (s.hasOwnProperty(k)){
			if (deep 	&& (v[k] instanceof Object && v[k].constructor === Object) && (s[k] instanceof Object && s[k].constructor === Object)){
				if (v[k] == null){
					v[k] = {};
				}
				v[k] = ext(v[k], s[k], deep);
			}else{
				v[k] = s[k];
			}
		}
	}

	return v;
}

/**
 * Extend values. Support deep-copy.
 * @function extend
 * @memberof $any
 * @param {assoc|array|object} dest Destination. Override values by source.
 * @param {assoc|array|object} src Source.
 * @param {boolean} [deep=false] Is deep-copy.
 * @returns {assoc|array|object}
 *
 * @example
 * $.any.extend(dest, src);
 * $.any.extend(dest, src, true);
 * dest = $.any.extend(dest, src);
 */
any.extend = function(dest, src, deep){
	return ext(dest, src, deep);
};

/**
 * Get object keys.
 * @function keys
 * @memberof $any
 *
 * @param {assoc|array} vs Values.
 * @return {array}
 *
 * @tutorial static-any
 * @example
 * ks = $any.keys([1, 2, 3, 4]);
 * ks = $any.keys({a:1, b:2, c:3});
 */
any.keys = function(vs){
	var ks = 0;

	try {
		ks = Object.keys(vs);
	}catch(e){
		ks = [];

		if (vs){
			any.each(vs, function(k, v){
				ks.push(k);
			});
		}
	}

	return ks;
};

/**
 * Get object length.
 * @function size
 * @memberof $any
 *
 * @param {assoc|array} vs Values.
 * @return {number}
 *
 * @tutorial static-any
 * @example
 * n = $any.size({a:1, b:2, c:3});
 */
any.size = function(vs){
	return any.keys(vs).length;
};

/**
 * Check blank value.
 * @function blank
 * @memberof $any
 * @param {*} v Value.
 * @returns {boolean} <code>true</code> false, null, undefined, ''  <code>false</code> 0, or other any data.
 *
 * @tutorial static-any
 * @example
 * r = $any.blank(v);
 * if ($any.blank(v)){ ... }
 */
any.blank = function(v){
	return (!v && v !== 0);
};

/**
 * Clone object.
 * @function clone
 * @memberof $any
 * @param {assoc|array} v Assoc or array value.
 * @param {boolean} [isArr=false] If true, return value type is array.
 * @returns {*}
 *
 * @tutorial static-any
 * @example
 * v = $any.clone({a:1, b:2, c:3});
 * v = $any.clone([1, 2, 3, 4, 5], true);
 */
any.clone = function(v, isArr){
	var bs = {};

	if (isArr){
		bs = [];
	}

	return ext(bs, v, true);
};

/**
 * Simple object's loop.
 * @function each
 * @memberof $any
 * @param {assoc|object} vs Assoc or object.
 * @param {function} fn Function. <code>function(key, value){ }</code>
 * @param {*} [ctx=null] this object
 *
 * @tutorial static-any
 * @example
 * $any.each({a:1, b:2, c:3}, function(k, v){
 * 	console.log(k, v);
 * });
 * $any.each({a:1, b:2, c:3}, function(k, v){
 * 	$(this).val(v);
 * }, this);
 */
any.each = function(vs, fn, ctx){
	for(var k in vs){
		if (vs.hasOwnProperty(k)){
			fn.call(ctx, k, vs[k]);
		}
	}
};

/**
 * @ignore
 */
function gtRcs(ks, vs){
	var v, k = ks.shift();
	v = vs[k];

	if (v == null){
		return null;
	}

	if (ks[0] !== undefined){
		return gtRcs(ks, v);
	}

	return v;
}

/**
 * Get value from assoc.
 *
 * <b>name format</b> <code>a, a.b, a.b.c, a.0</code>
 *
 * @function get
 * @memberof $any
 * @param {assoc|array} vs Values object.
 * @param {string} name Value name. Child name of assoc can be specified. - 'a.b.1'.
 * @returns {*}
 *
 * @tutorial static-any
 * @example
 * v = $any.get(vs, 'a');        //assoc
 * v = $any.get(vs, 'b.a');     //assoc
 * v = $any.get(vs, 0);         //array
 * v = $any.get(vs, '0.0.0');  //array
 */
any.get = function(vs, name){
	var ks = keys(name);

	return gtRcs(ks, vs);
};

/**
 * @ignore
 */
function stRcs(ks, vs, nm, v, eo){
	var k = ks.shift();

	if (ks[0] === undefined){
		if (vs[k] == null || !eo){
			vs[k] = v;
		}
	} else {
		if (vs[k] == null){
			vs[k] = {};
			stRcs(ks, vs[k], nm, v, eo);
		} else if (typeof vs[k] === 'object'){
			stRcs(ks, vs[k], nm, v, eo);
		} else {
			error('not object', vs, nm);
		}
	}
}

/**
 * Set value to assoc.
 * @function set
 * @memberof $any
 * @param {assoc|array} vs Assoc.
 * @param {string} name Value's name. Child name of assoc can be specified. - 'a.b.1'.
 * @param {*|function} v Value or Function which change value.
 * @param {boolean} [emptyOnly=false] Set value if empty.
 *
 * @tutorial static-any
 * @example
 * $any.set(vs, 'a', 123);         //value
 * $any.set(vs, 0, 123);          //set to array
 * $any.set(vs, 'b.a', 123);      //assoc
 * $any.set(vs, 'c.0', 123);      //array
 * $any.set(vs, 'd', function(v){ return v++; });  //using function
 * $any.set(vs, 'e', 123, true); //empty only
 */
any.set = function(vs, name, v, emptyOnly){
	if (typeof v === 'function'){
		v = v(any.get(vs, name));
	}

	stRcs(keys(name), vs, name, v, emptyOnly);

	return v;
};

/**
 * Empty values.
 * @function drop
 * @memberof $any
 * @param {assoc|array} vs Assoc.
 *
 * @tutorial static-any
 * @example
 * $any.drop(vs);
 */
any.drop = function(vs){
	any.each(vs, function(k){
		delete vs[k];
	});
};

/**
 * Get and Set global value.
 *
 * <b>Specification</b><br>
 * Internal use: <code>$any.get</code> <code>$any.set</code>
 *
 * @function data
 * @memberof $any
 * @param {assoc|array} vs Data pool.
 * @param {string} name Name.
 * @param {*} [v] Value. For set.
 * @param {boolean} [emptyOnly=false] Set value if empty. For set.
 * @returns {*}
 *
 * @see $any.get
 * @see $any.set
 *
 * @tutorial static-any
 * @example
 * //Set
 * $any.data(pool, null, {a:1, b:2, c:3});
 * $any.data(pool, 'a', 1);
 * $any.data(pool, 'b.b1', 1);
 * v = $any.data(pool, 'c', function(v){ return v+1 });
 *
 * @example
 * //Get
 * vs = $any.data();
 * v = $any.data(pool, 'a');
 * v = $any.data(pool, 'b.b1');
 * v = $any.data(pool, 'c');
 */
any.data = function(vs, name, v, emptyOnly){
	//Get
	if (v === undefined){
		if (name == null){
			return vs;
		}

		return any.get(vs, name);
	}

	//Set
	if (any.blank(name)){
		if (typeof v !== 'object'){
			v = {};
		}

		any.drop(vs);
		ext(vs, v, true);

		return vs;
	}

	return any.set(vs, name, v, emptyOnly);
};

/**
 * Convert to other structure values from original values by rule.
 * @function filter
 * @memberof $any
 *
 * @param {assoc|array} vs Original values.
 * @param {assoc} [rule] Convert rule.<br><code>{<br>to: from, //from >> to<br>to: null, //Delete<br>to: {...} or [...], //cover by matrix<br>to: function(v, org, dest){return v;},  //Using function<br>'*': function(vs, r, rule){r.a = 1;} //Initialize<br>}</code>
 * @param {assoc} [opt] Option.
 * @param {boolean} [opt.reset=false] Determine to reset values. and use only specified values by rule.
 * @param {boolean} [opt.replace=true] Determine to replace value. If 'fill' is false, the original value retain.
 * @param {boolean} [opt.array=false] Determine return value type. Default type is assoc.
 * @param {string} [opt.init='*'] Function name of initialize used by rule.
 * @returns {assoc|array} New values converted by rule.
 *
 * @tutorial static-any
 * @example
 * rule = {
 *   a1: 'a',    //a >> a1
 *   b1: 'b',    //b >> b1
 *   c: null,    //delete
 *   d: {1: 'london', 2: 'new york', 3: 'tokyo'},  //cover by matrix
 *   e: 'x'      //none
 * };
 * vs = $any.filter(vs, rule);
 *
 * @example
 * rule = {
 *   '*': function(vs, r){
 *     r.b = 4;   //b
 *   },
 *   a1: function(v, vs, r){
 *     return vs.a+10;
 *   },
 *   a2: 'a'   //a >> a2
 * };
 * vs = $any.filter(vs, rule, {reset: true});
 *
 * @example
 * //Array
 * rule = {
 *   '*': function(vs, r){
 *     r[5] = 101;  //5
 *     r[6] = 102;  //6
 *   },
 *   7: 0,    //0 >> 7
 *   8: function(v, vs, r){
 *     return 103;
 *   }
 * };

 vs = $any.filter(vs, rule, {replace: false, array: true});
 */
any.filter = function(vs, rule, opt){
	opt = ext({reset: false, replace: true, array: false, init: '*'}, opt);

	var r = null, tvs = (opt.reset)?null:vs;

	r = any.clone(tvs, opt.array);

	if (typeof rule[opt.init] === 'function'){
		var init = rule[opt.init];
		delete rule[opt.init];

		init(vs, r, rule);
	}

	any.each(rule, function(to, frm){
		if (typeof frm !== 'function'){
			if (frm == null){
				delete r[to];
			}else{
				if (typeof frm !== 'object'){
					r[to] = (vs[frm] !== undefined)?vs[frm]:null;
				}else{
					tvs = frm[vs[to]];

					r[to] = (tvs == null)?null:tvs;
				}

				if (opt.replace && to != frm){
					delete r[frm];
				}
			}
		}else{
			r[to] = frm(((vs[to] !== undefined)?vs[to]:null), vs, r);
		}
	});

	return r;
};

/**
 * Create auto-count function.
 * @function counter
 * @memberof $any
 *
 * @param {number|array} v Array or init number.
 * @param {assoc} [opt] Option.
 * @param {number} [opt.min=null] Min value.
 * @param {number} [opt.max=null] Max value.
 * @param {number} [opt.add=1] Additional value.
 * @param {number} [opt.init=null] Initial value.
 * @param {boolean} [opt.loop=false] Determine to loop.
 * @returns {function}
 *
 * @tutorial static-any
 * @example
 * fn = $any.counter(['A', 'B', 'C', 'D', 'E']);
 * fn = $any.counter(12);
 * fn = $any.counter(20, {add: 3, max: 30});
 * fn = $any.counter([1,2,3], {loop: true});
 */
any.counter = function(v, opt){
	opt = ext({min: null, max: null, add: 1, init: null, loop: false}, opt);

	var n = 0, min = opt.min, max = opt.max;

	if (typeof v === 'number'){
		n = v;
	}else if (v instanceof Array){
		if(opt.min == null){
			min = 0;
		}

		if(opt.max == null){
			max = v.length - 1;
		}
	}

	if (opt.init != null){
		n = opt.init;
	}

	n-= opt.add;

	return function(init){
		var t;

		n = n + opt.add;

		if (init != null){
			n = v;
		}

		t = n - max;
		if (max != null && t > 0){
			if (opt.loop){
				n = (min != null)?min:0;
				n+= t - 1;
			}else{
				n = max;
			}
		}

		t = n - min;
		if (min != null && t < 0){
			if (opt.loop){
				n = max;
				n+= t + 1;
			}else{
				n = min;
			}
		}

		if (v instanceof Array){
			return (v[n] !== undefined)?v[n]:null;
		}

		return n;
	};
};

/**
 * Calc crc16.
 * @function crc
 * @memberof $any
 *
 * @param {string} v String value
 * @returns {number} Crc16 value
 *
 * @tutorial static-any
 * @example
 * num = $any.crc16(val);
 */
any.crc16 = function(v){
	if (v == null){
		return 0;
	}

	var crc = 0, i, j;

	for(i=0; i < v.length; i++){
		crc ^= v.charCodeAt(i);
		for(j = 0; j < 8; j++){
			crc = (crc & 1) ? (crc >> 1) ^ 0xa001 : (crc >> 1);
		}
	}

	return crc;
};

/**
 * Escape regex.
 * @function escapeRegex
 * @memberof $any
 *
 * @param {string} v String value.
 * @returns {string}
 *
 * @tutorial static-any
 * @example
 * val = $any.escapeRegex(val);
 */
any.escapeRegex = function(v){
	return v.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

/**
 * Register function which run after document-ready.
 *
 * <b><i>Note! Only for any-tiny.js.</i></b><br>
 *
 * @function ready
 * @memberof $any
 * @param {function} fn Function.
 *
 * @tutorial static-any
 * @example
 * $any.ready(function(){ ... });
 */
any.ready = function(fn){
	try{
		window.addEventListener('load', fn);
	}catch(e){
		window.attachEvent('onload', fn);
	}
};

/**
 * any($any) static methods. Method for class operation.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | All methods | Yes | Yes | Yes |
 *
 * @namespace $any@class
 *
 * @tutorial static-any-class
 *
 * @example
 * var ACls = $any.makeClass(
 *   function(n){
 *     this.n = n;
 *   }, {
 *     output: function(){ alert(this.n); }
 *   }
 * );
 * var a = new ACls(1);
 *
 * $any.mixin(AClass, {xyz: function(){ ... }});
 *
 */

/**
 * @ignore
 */
function clBind(C){
	C.prototype.bind = function(fn){
		try{
			return fn.bind(this);
		} catch (e){

		}

		var c = this;

		return function(){
			return fn.apply(c, arguments);
		};
	};
}

/**
 * Create class and inherits class.
 *
 * <b>Specification</b><br>
 *
 * |  |  |
 * |:---|:---|
 * | <b>Build class</b>  | Define constructor by function / Methods which added by 'prototype' |
 * | <b>Extends class</b> | Both build-class and super-class's constructor / Override super-class methods by 'prototype' |
 *
 * @function makeClass
 * @memberof $any@class
 *
 * @param {function} construct Class constructor and base structure.
 * @param {function|functions} methods Class methods or Function space and class methods. Add methods by prototype.
 * @param {function} [parent=null] If specified, extends super-class.
 * @param {boolean} [bind=true] If true, Add <i>bind</i> method.
 * @returns {object} Class. This is not instance.
 *
 * @see $any@class.makeInstance
 *
 * @tutorial static-any-class
 * @example
 * //Build class
 * var ACls = $any.makeClass(
 *   function(n){
 *     this.n = n;
 *   }, {
 *     output: function(){ alert(this.n); }
 *   }
 * );
 * var a = new ACls(1);
 *
 * //Extends class
 * var BCls = $any.makeClass(
 *   function(n){
 *     this.b = 5;
 *   }, {
 *     output: function(){ alert(this.n + this.b); }
 *   }, ACls
 * );
 * var b = new BCls(2);
 */
any.makeClass = function(construct, methods, parent, bind){
	var C;

	construct = construct || function(){};

	if (parent){
		C = function(){
			parent.apply(this, arguments);
			construct.apply(this, arguments);
		};

		try {
			C.prototype = Object.create(parent.prototype);
		}catch(e){
			var P = function(){};
			P.prototype = parent.prototype;
			C.prototype = new P();
		}
	}else{
		C = construct;
	}

	if (typeof methods === 'function'){
		methods = methods();
	}

	for(var k in methods){
		if (methods.hasOwnProperty(k)){
			C.prototype[k] = methods[k];
		}
	}

	if (bind !== false){
		clBind(C);
	}

	return C;
};

/**
 * Create class instance. See the specification of <code>$any.makeClass</code>
 *
 * @function makeInstance
 * @memberof $any@class
 *
 * @param {function} construct Class constructor and base structure.
 * @param {function|functions} methods Class methods or Function space and class methods. Add methods by prototype.
 * @param {function} [parent=null] If specified, extends super-class.
 * @param {boolean} [bind=true] If true, Add <i>bind</i> method.
 * @returns {object} Class instance. This is instance.
 *
 * @see $any@class.makeClass
 *
 * @tutorial static-any-class
 * @example
 * var instance = $any.makeInstance(
 *   function(n){
 *     this.n = n;
 *   }, {
 *     output: function(){ alert(this.n); }
 *   }
 * );
 */
any.makeInstance = function(construct, methods, parent, bind){
	return new (any.makeClass(construct, methods, parent, bind))();
};

/**
 * Mixin of class by methods. Override methods by 'prototype'.
 *
 * @function mixin
 * @memberof $any@class
 *
 * @param {Class} Class Class object.
 * @param {functions} methods The added method.
 * @returns {Class}
 *
 * @tutorial static-any-class
 * @example
 * $any.mixin(AClass, {xyz: function(){ ... }});
 */
any.mixin = function(Class, methods){
	for(var k in methods){
		if (methods.hasOwnProperty(k)){
			Class.prototype[k] = methods[k];
		}
	}

	return Class;
};

/**
 * Provide log and debug helper methods.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | events | Yes | - | - |
 * | Others | Yes | Yes | Yes |
 *
 * @namespace $any.log
 *
 * @tutorial static-any
 * @tutorial static-log
 */
any.log = {target: {scope: null, methods: null, elem: null}};

/**
 * Set log behaviors. Set $any.define.error.
 * @function debug
 * @memberof $any.log
 *
 * @param {integer} [error=null] $any.error mode. $any.define.error.
 * @param {boolean} [throwError=null] Throw error. $any.define.throwError.
 * @param {boolean} [targetExist=null] Check existence of selector's target. $any.define.targetExist.
 *
 * @see $any.error
 * @see $any.define.error
 * @see $any.define.throwError
 *
 * @tutorial static-log
 *
 * @example
 * $any.log.debug(1);  			//On error
 * $any.log.debug(1, true);  //On error and throw error
 * $any.log.debug(0);  			//Off error
 * $any.log.debug(2);  			//On error trace
 * $any.log.debug(null, true);      //Throw error
 */
any.log.debug = function(error, throwError, targetExist){
	if (error != null){
		any.define.error = error;
	}

	if (throwError != null){
		any.define.throwError = throwError;
	}

	if (targetExist != null){
		any.define.targetExist = targetExist;
	}
};

/**
 * Set limit target by method and element and scope.
 * @function limit
 * @memberof $any.log
 *
 * @param {string|array} method Method name.
 * @param {Selector} [el] Element target. Enable log if the element has event element.
 * @param {boolean} [scope] Scope target. Enable log only target scope.
 *
 * @see $any.error
 * @see $any.define.error
 *
 * @tutorial static-log
 *
 * @example
 * $any.log.limit('showing');
 * $any.log.limit(['showing', 'hiding']);
 * $any.log.limit(null, $('#target'));
 * $any.log.limit(null, $('#parent'));
 * $any.log.limit(null, null, 'ajax');
 * $any.log.limit(null, null, 'view');
 */
any.log.limit = function(method, el, scope){
	any.log.target.methods = (typeof method === 'string')?[method]:method;

	if (el !== undefined){
		any.log.target.elem = el;
	}

	if (scope !== undefined){
		any.log.target.scope = scope;
	}
};

var logOn = 1;

/**
 * @ignore
 */
function logAny(nm, vs, error){
	if (logOn <= 0 && !error){
		return null;
	}

	if (any.log.target.scope && any.log.target.scope != nm){
		return null;
	}

	vs = vs || [];

	nm = (!error)?(nm || 'any.'):'';

	var t;

	if (any.log.target.elem){
		t = vs[1];

		if (isEl(t)){
			if(!hasEl(any.log.target.elem, t)){
				return null;
			}
		}
	}

	if (any.log.target.methods && any.log.target.methods.indexOf(vs[0]) == -1){
		return null;
	}

	vs[0] = nm + ((vs[0] == null)?'*':vs[0]);

	for (var i=vs.length;i>=0;i--){
		if (vs[i] == undefined){
			vs[i] = null;
		}
	}

	return vs;
}

/**
 * @ignore
 */
any.log.error = function(nm, vs){
	if (any.define.error <= 0){
		return;
	}

	vs = logAny(nm, vs, true);

	if (vs){
		any.error.apply(null, vs);

		if (any.log.breakpoint){
			any.log.breakpoint(vs);
		}
	}
};

/**
 * Set break-point function.
 * @memberof $any.log
 * @type {function}
 * @default null
 *
 * @see $any.log.error
 *
 * @tutorial static-log
 *
 * @example
 * $any.log.breakpoint = function(){ ... };
 */
any.log.breakpoint = null;

/**
 * @ignore
 */
function error(){
	any.log.error(null, arguments);
}

/**
 * Assign values to template.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | assign | Yes | Yes | Yes |
 * | assigns | Yes | Yes | Yes |
 * | make | Yes | - | - |
 * | makes | Yes | - | - |
 * | cover | Yes | - | - |
 *
 * @namespace $any.tpl
 *
 * @tutorial static-tpl
 *
 * @example
 * v = {target: 'MnO2', Type: 'dry-cell'};
 * src = 'The principal use for {target} is for {type} batteries.';
 * html = $any.tpl.assign(src, v, {ignoreCase: true});
 * //The principal use for MnO2 is for dry-cell batteries.
 *
 * vs = [{a: 'A1', b: 'B1'}, {a: 'A2', b: 'B2'}];
 * src = '<li>{a}, {b}</li>';
 * html = $any.tpl.assigns(src, vs);
 */
any.tpl = {define: {}};

/**
 * Wrap side strings.
 * @memberof $any.tpl
 * @type {array}
 * @default ['{', '}']
 *
 * @example
 * $any.tpl.define.wraps = ['{', '}'];
 * $any.tpl.define.wraps = ['{{', '}}'];
 */
any.tpl.define.wraps = ['{', '}'];

/**
 * Determine to sort key of assoc by length.
 * @memberof $any.tpl
 * @type {boolean}
 * @default true
 * @example
 * $any.tpl.define.sort = true;
 */
any.tpl.define.sort = true;

/**
 * Assign values to template.
 * @function assign
 * @memberof $any.tpl
 *
 * @param {string} src Template source.
 * @param {assoc|string|number} vs Assign values or sinple value.
 * @param {assoc} opt Option
 * @param {boolean} [opt.wrap=true] Determine to wrap.
 * @param {boolean} [opt.ignoreCase=false] Determine to ignore case sensitive.
 * @returns {string}
 *
 * @tutorial static-tpl
 * @example
 * v = {target: 'MnO2', Type: 'dry-cell'};
 * src = 'The principal use for {target} is for {type} batteries.';
 *
 * html = $any.tpl.assign(src, v, {ignoreCase: true});
 * //The principal use for MnO2 is for dry-cell batteries.
 *
 * html = $any.tpl.assign('{*}-pilot / {*}-trader', 'auto');  //auto-pilot / auto-trader
 */
any.tpl.assign = function(src, vs, opt){
	opt = ext({wrap: true, ignoreCase: false}, opt);

	var k, wp, rx, rgx = '', vz = {};

	if (typeof vs === 'object'){
		var v, ks = any.keys(vs);

		if (any.tpl.define.sort){
			ks.sort(function(a, b){
				return b.length - a.length;
			});
		}

		for (var i in ks){
			if (ks.hasOwnProperty(i)){
				k = ks[i];
				v = vs[k];

				if (opt.ignoreCase){
					k = k.toLowerCase();
				}

				if (opt.wrap){
					wp = any.tpl.define.wraps;
					k = wp[0] + k + wp[1];
				}

				vz[k] = v;
				k = any.escapeRegex(k);

				rgx += k + '|';
			}
		}

		rgx = rgx.slice(0, -1);
	}else{
		k = '*';

		if (opt.wrap){
			wp = any.tpl.define.wraps;
			k = wp[0] + k + wp[1];
		}

		rgx = any.escapeRegex(k);

		vz[k] = vs;
	}

	rgx = '(' + rgx + ')';

	var o = 'g';
	if (opt.ignoreCase){
		o += 'i';
	}

	rx = new RegExp(rgx, o);

	return src.replace(rx, function(key){
		if (opt.ignoreCase){
			key = key.toLowerCase();
		}

		return vz[key];
	});
};

/**
 * Assign multiple values.
 * @function assigns
 * @memberof $any.tpl
 *
 * @param {string} src Template source.
 * @param {array} rows Multiple assign values.
 * @param {assoc} [opt] $any.tpl.assign option.
 * @returns {string}
 *
 * @see $any.tpl.assign
 *
 * @tutorial static-tpl
 * @example
 * vs = [{a: 'A1', b: 'B1'}, {a: 'A2', b: 'B2'}];
 * src = '<li>{a}, {b}</li>';
 * html = $any.tpl.assigns(src, vs);
 * v = $any.tpl.assigns('<div>{*}</div>', ['Iron', 'Bronze']); //<div>Iron</div><div>Bronze</div>
 */
any.tpl.assigns = function(src, rows, opt){
	var r = '';

	for(var i = 0; i < rows.length; i++){
		r += any.tpl.assign(src, rows[i], opt);
	}

	return r;
};

/**
 * Date data converter. Date source to Date value assoc, date string.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | All methods | Yes | Yes | Yes |
 *
 * <b>Date format values</b><br>
 *
 * | Value | Description | Example |
 * |:---|:---|:---|
 * | y | Number of year | 2016 |
 * | yy | 2digit year | "16" |
 * | M | Number of month | 2 |
 * | MM | 2digit month | "02" |
 * | MMM | String month | "Feb" |
 * | d | Number of date | 1 |
 * | dd | 2digit date | "01" |
 * | e | Number of day-of-week | 6 |
 * | EEE | String day-of-week | "Sat" |
 * | H | Number of 24hours | 5 |
 * | HH | 2digit 24hours | "05" |
 * | h | Number of 12hours | 5 |
 * | hh | 2digit 12hours | "05" |
 * | a | AM or PM | "AM" |
 * | m | Number of min | 6 |
 * | mm | 2digit min | "06" |
 * | s | Number of sec | 8 |
 * | ss | 2digit sec | "08" |
 * | unixtm | Unixtime sec | 1272730884 |
 * | unixms | Unixtime ms | 1272730884000 |
 *
 * @namespace $any.date
 *
 * @see $any.tpl
 *
 * @tutorial static-date
 *
 * @example
 * dt = $any.date.get();                       //Now
 * dt = $any.date.get('2056-1-1 0:00');        //Date format string
 * v = $any.date.format('yyyy-MM-dd HH:mm');
 * v = $any.date.format('EEE, MMM d, yyyy', 'February 10, 2010 0:00');
 */
any.date = any.profile.create();

/**
 * Months
 * @memberof $any.date
 * @type {array}
 * @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
 * @example
 * $any.date.define.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 */
any.date.define.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Days
 * @memberof $any.date
 * @type {array}
 * @default ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
 * @example
 * $any.date.define.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 */
any.date.define.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * @ignore
 */
function dtP(dt){
	if (!dt){
		return new Date();
	}else if (typeof dt === 'object'){
		return dt;
	}

	if (String(dt).match(/^[\s\-]*[\d\s]+$/)){
		dt = dt * 1000;
	}else{
		dt = dt.replace(/[\-\.]/g, '/');

		if (!dt.match(/\d\s*\:\s*\d/)){
			dt+= ' 0:00';
		}
	}

	return new Date(dt);
}

/**
 * @ignore
 */
function dtT(v){
	return ('0' + v).slice(-2);
}

/**
 * Get date value assoc.
 * @function get
 * @memberof $any.date
 *
 * @param {integer|Date|string} [date] Date source.Supporting various format.
 * @param {boolean} [isError=true] Determine to occur error, failing to parse format.
 * @returns {object}
 *
 * @tutorial static-date
 * @example
 * //Return object
 * {
 *  y:2010, yyyy:"2010", yy:"10",
 *  M:5, MM:"05", MMM:"May",
 *  d:1, dd:"01", EEE:"Sat", e:6
 *  H:16, HH:"16", h:4, hh:"04", a:"PM"
 *  m:21, mm:"21"
 *  s:42, ss:"42"
 *  unixtm:1272730884, unixms:1272730884000
 * }
 * @example
 * dt = $any.date.get();	//Now
 * dt = $any.date.get('2056-1-1 0:00');		//Date format string
 * dt = $any.date.get(1024100000);			//Unix timestamp
 * dt = $any.date.get(new Date('1893/01/01'));	//Date object
 */
any.date.get = function(date, isError){
	var dt = dtP(date), v = {}, t;

	if (!dt || isNaN(dt.getTime())){
		if (isError !== false){
			error('illegal format', date);
		}

		return null;
	}

	v.y = dt.getFullYear();
	v.M = dt.getMonth() + 1;
	v.d = dt.getDate();
	v.H = dt.getHours();
	v.m = dt.getMinutes();
	v.s = dt.getSeconds();
	v.e = dt.getDay();

	v.yyyy = ('0' + v.y).slice(-4);
	v.yy = dtT(v.y);
	v.MM = dtT(v.M);
	v.dd = dtT(v.d);
	v.MMM = any.date.define.months[v.M - 1];
	v.EEE = any.date.define.days[v.e];

	v.a = (v.H < 12)?'AM':'PM';
	v.HH = dtT(v.H);
	v.h = v.H%12;
	v.hh = dtT(v.h);

	v.mm = dtT(v.m);
	v.ss = dtT(v.s);

	t = dt.getTime();
	v.unixms = t;	//milliseconds
	v.unixtm = Math.floor(t/1000);

	return v;
};

/**
 * Return formated date time.
 * @function format
 * @memberof $any.date
 *
 * @param {integer|Date|string} [date] Date source.Supporting various format.
 * @param {string} [format='EEE, MMM d, yyyy HH:mm'] Date format.
 * @param {assoc} [opt] Option
 * @param {string} [opt.error=true] Determine to occur error. - $any.date.get error
 * @param {string} [opt.wrap=false] Determine to wrap each value.
 * @returns {string}
 *
 * @tutorial static-date
 * @example
 * v = $any.date.format('yyyy-MM-dd HH:mm');
 * v = $any.date.format('EEE, MMM d, yyyy', 'February 10, 2010 0:00');
 * v = $any.date.format('EEE, MMM d, yyyy', '2063-2-30 0:00');
 * v = $any.date.format('EEE, MMM, M/d, yyyy HH:mm', '1956.7.10 0:00');
 * v = $any.date.format('EEE, MMM d, yyyy', 1131156102);
 */
any.date.format = function(format, date, opt){
	format = format || 'EEE, MMM d, yyyy HH:mm';

	opt = ext({error: true, wrap: false}, opt);

	var dt = any.date.get(date, opt.error);

	if (!dt){
		return '';
	}

	return any.tpl.assign(format, dt, {wrap: opt.wrap});
};

/**
 * Any ui($any.ui) static methods. Layout helper methods.
 *
 * | Method | Default ver | Tiny ver | Micro ver |
 * |:---|:---:|:---:|:---:|
 * | styleRule | Yes | Yes | - |
 * | styleCSS | Yes | Yes | - |
 * | scrolled | Yes | Yes | - |
 *
 * @namespace $any.ui
 *
 * @see jQuery.fn@ui
 * @see jQuery.fn@ui-cmp
 *
 * @tutorial static-ui
 * @tutorial fn-ui
 * @tutorial ui-css
 * @tutorial demo-ui
 * @tutorial demo-various
 *
 * @example
 * //See tutorials.
 */

any.ui = {};

/**
 * Get CSSRule object by CSS name.
 * @function styleRule
 * @memberof $any.ui
 *
 *	 @param {string} name CSS style name.
 *	 @returns {object} CSSRule object.
 *
 * @tutorial static-ui
 *
 * @example
 * rule = $any.ui.styleRule('.demo');
 */
any.ui.styleRule = function(name){
	var nm = name.replace(/([^\:])\:([^\:])/, '$1::$2'), sts = document.styleSheets, i, j, r, st, l;

	for (i=0;i<sts.length;i++){
		try {
			st = sts[i];
			r = st.cssRules || st.rules;
			l = r.length;

			for (j=0;j<l;j++){
				if (r[j].selectorText === nm){
					return r[j];
				}
			}
		}catch(e){

		}
	}

	if(st.insertRule){
		st.insertRule(name + '{}', l);
	}else{
		st.addRule(name, ' ', l);
	}

	return r[l];
};

/**
 * @ignore
 */
function cml(v){
	return v.replace(/\-(.)/g, function(v, t){
		return t.toUpperCase();
	});
}

/**
 * Set CSS value dynamically.
 * @function styleCSS
 * @memberof $any.ui
 *
 * @param {string|object} rule CSSRule object or CSS style-name.
 * @param {string|assoc} css CSS property name or KeyValue which CSS property and value.
 * @param {string|integer} v CSS value.
 *	 @returns {object} CSSRule object.
 *
 * @tutorial static-ui
 *
 * @example
 * $any.ui.styleCSS('.demo', 'color' , 'red');
 * $any.ui.styleCSS(rule, 'font-size' , '1px');
 */
any.ui.styleCSS = function(rule, css, v){
	var r = (typeof rule === 'object')?rule:any.ui.styleRule(rule);

	if (r){
		if (typeof css === 'object'){
			any.each(css, function(k, v){
				r.style[cml(k)] = v;
			});
		}else{
			r.style[cml(css)] = v;
		}
	}

	return r;
};

/**
 * Bind scroll event in scroll bottom.
 * @function scrolled
 * @memberof $any.ui
 *
 * @param {Element|null} el Element. If null, this is whole document.
 * @param {function} fn Callback function.
 * @param {assoc} opt Option.
 * @param {integer} [opt.padding=0] Bottom padding.
 *
 * @tutorial static-ui
 *
 * @example
 * $any.ui.scrolled(window, function(e){ ... });
 * $any.ui.scrolled(document.getElementById('scroll'), function(e){ ... }, {padding: 50});
 */
any.ui.scrolled = function(el, fn, opt){
	opt = ext({padding: 0}, opt);

	if (!el || window == el || document == el){
		el = window;
	}

	var ef = false;

	el.onscroll = function(e){
		var t = e.target, s, c, h;

		if (t == document){
			s = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			c = t.documentElement.clientHeight || t.body.clientHeight || 0;
			h = t.documentElement.scrollHeight || t.body.scrollHeight || 0;
		}else{
			s = t.scrollTop;
			c = t.clientHeight;
			h = t.scrollHeight;
		}

		var btm = s + c + opt.padding;

		if (btm >= h){
			if (!ef){
				fn.call(el, e);
				ef = true;
			}
		}else{
			ef = false;
		}
	};
};

})($any);
