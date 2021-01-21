/**
 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
 * recently used items while discarding least recently used items when its limit
 * is reached.
 *
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * See README.md for details.
 *
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 */
function LRUCache (limit) {
  // Current size of the cache. (Read-only).
  this.size = 0;
  // Maximum number of items this cache can hold.
  this.limit = limit;
  this._keymap = {};
}

/**
 * Put <value> into the cache associated with <key>. Returns the entry which was
 * removed to make room for the new entry. Otherwise undefined is returned
 * (i.e. if there was enough room already).
 */
LRUCache.prototype.put = function(key, value) {
  var entry = {key:key, value:value};
  // Note: No protection agains replacing, and thus orphan entries. By design.
  this._keymap[key] = entry;
  if (this.tail) {
    // link previous tail to the new tail (entry)
    this.tail.newer = entry;
    entry.older = this.tail;
  } else {
    // we're first in -- yay
    this.head = entry;
  }
  // add new entry to the end of the linked list -- it's now the freshest entry.
  this.tail = entry;
  if (this.size === this.limit) {
    // we hit the limit -- remove the head
    return this.shift();
  } else {
    // increase the size counter
    this.size++;
  }
};

/**
 * Purge the least recently used (oldest) entry from the cache. Returns the
 * removed entry or undefined if the cache was empty.
 *
 * If you need to perform any form of finalization of purged items, this is a
 * good place to do it. Simply override/replace this function:
 *
 *   var c = new LRUCache(123);
 *   c.shift = function() {
 *     var entry = LRUCache.prototype.shift.call(this);
 *     doSomethingWith(entry);
 *     return entry;
 *   }
 */
LRUCache.prototype.shift = function() {
  // todo: handle special case when limit == 1
  var entry = this.head;
  if (entry) {
    if (this.head.newer) {
      this.head = this.head.newer;
      this.head.older = undefined;
    } else {
      this.head = undefined;
    }
    // Remove last strong reference to <entry> and remove links from the purged
    // entry being returned:
    entry.newer = entry.older = undefined;
    // delete is slow, but we need to do this to avoid uncontrollable growth:
    delete this._keymap[entry.key];
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value associated with <key>
 * or undefined if not in cache.
 */
LRUCache.prototype.get = function(key, returnEntry) {
  // First, find our cache entry
  var entry = this._keymap[key];
  if (entry === undefined) return; // Not cached. Sorry.
  // As <key> was found in the cache, register it as being requested recently
  if (entry === this.tail) {
    // Already the most recenlty used entry, so no need to update the list
    return entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head)
      this.head = entry.newer;
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older)
    entry.older.newer = entry.newer; // C. --> E
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail)
    this.tail.newer = entry; // E. <-- D
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

// ----------------------------------------------------------------------------
// Following code is optional and can be removed without breaking the core
// functionality.

/**
 * Check if <key> is in the cache without registering recent use. Feasible if
 * you do not want to chage the state of the cache, but only "peek" at it.
 * Returns the entry associated with <key> if found, or undefined if not found.
 */
LRUCache.prototype.find = function(key) {
  return this._keymap[key];
};

/**
 * Update the value of entry with <key>. Returns the old value, or undefined if
 * entry was not in the cache.
 */
LRUCache.prototype.set = function(key, value) {
  var oldvalue, entry = this.get(key, true);
  if (entry) {
    oldvalue = entry.value;
    entry.value = value;
  } else {
    oldvalue = this.put(key, value);
    if (oldvalue) oldvalue = oldvalue.value;
  }
  return oldvalue;
};

/**
 * Remove entry <key> from cache and return its value. Returns undefined if not
 * found.
 */
LRUCache.prototype.remove = function(key) {
  var entry = this._keymap[key];
  if (!entry) return;
  delete this._keymap[entry.key]; // need to do delete unfortunately
  if (entry.newer && entry.older) {
    // relink the older entry with the newer entry
    entry.older.newer = entry.newer;
    entry.newer.older = entry.older;
  } else if (entry.newer) {
    // remove the link to us
    entry.newer.older = undefined;
    // link the newer entry to head
    this.head = entry.newer;
  } else if (entry.older) {
    // remove the link to us
    entry.older.newer = undefined;
    // link the newer entry to head
    this.tail = entry.older;
  } else {// if(entry.older === undefined && entry.newer === undefined) {
    this.head = this.tail = undefined;
  }

  this.size--;
  return entry.value;
};

/** Removes all entries */
LRUCache.prototype.removeAll = function() {
  // This should be safe, as we never expose strong refrences to the outside
  this.head = this.tail = undefined;
  this.size = 0;
  this._keymap = {};
};

/**
 * Return an array containing all keys of entries stored in the cache object, in
 * arbitrary order.
 */
if (typeof Object.keys === 'function') {
  LRUCache.prototype.keys = function() { return Object.keys(this._keymap); };
} else {
  LRUCache.prototype.keys = function() {
    var keys = [];
    for (var k in this._keymap) keys.push(k);
    return keys;
  };
}

/**
 * Call `fun` for each entry. Starting with the newest entry if `desc` is a true
 * value, otherwise starts with the oldest (head) enrty and moves towards the
 * tail.
 *
 * `fun` is called with 3 arguments in the context `context`:
 *   `fun.call(context, Object key, Object value, LRUCache self)`
 */
LRUCache.prototype.forEach = function(fun, context, desc) {
  var entry;
  if (context === true) { desc = true; context = undefined; }
  else if (typeof context !== 'object') context = this;
  if (desc) {
    entry = this.tail;
    while (entry) {
      fun.call(context, entry.key, entry.value, this);
      entry = entry.older;
    }
  } else {
    entry = this.head;
    while (entry) {
      fun.call(context, entry.key, entry.value, this);
      entry = entry.newer;
    }
  }
};

/** Returns a JSON (array) representation */
LRUCache.prototype.toJSON = function() {
  var s = [], entry = this.head;
  while (entry) {
    s.push({key:entry.key.toJSON(), value:entry.value.toJSON()});
    entry = entry.newer;
  }
  return s;
};

/** Returns a String representation */
LRUCache.prototype.toString = function() {
  var s = '', entry = this.head;
  while (entry) {
    s += String(entry.key)+':'+entry.value;
    entry = entry.newer;
    if (entry)
      s += ' < ';
  }
  return s;
};

// Export ourselves
if (typeof this === 'object') this.LRUCache = LRUCache;

(function() {

  window.Ember = window.Ember || window.SC;

  window.Ember.Resource = window.Ember.Object.extend({
    resourcePropertyWillChange: window.Ember.K,
    resourcePropertyDidChange: window.Ember.K
  });

  window.Ember.Resource.getPath = (function() {
    var o = { object: { path: 'value' } },
        getSupportsPath = Ember.get(o, 'object.path') === 'value';
    //                       Ember 1.0 : Ember 0.9
    return getSupportsPath ? Ember.get : Ember.getPath;
  }());

  window.Ember.Resource.sendEvent = (function() {
    if (Ember.sendEvent.length === 2) {
      // If Ember 0.9, make an Ember 1.0-style function out of the
      // Ember 0.9 one:
      return function sendEvent(obj, eventName, params, actions) {
        Ember.warn("Ember.Resources.sendEvent can't do anything with actions on Ember 0.9", !actions);
        params = params || [];
        params.unshift(eventName);
        params.unshift(obj);
        return Ember.sendEvent.apply(Ember, params);
      };
    }

    return function sendEvent(obj, eventName, params, actions) {
      return Ember.sendEvent(obj, eventName, params, actions);
    };
  }());

}());

(function(exports) {

  var Ember = exports.Ember, NullTransport = {
    subscribe: Ember.K,
    unsubscribe: Ember.K
  };

  Ember.Resource.PushTransport = NullTransport;

  var RemoteExpiry = Ember.Mixin.create({
    init: function() {
      var self = this;

      this._super();
      this._expiryCallback = null;

      if (this.get('remoteExpiryKey')) {
        this._listenerHandlers = {
          didFetch: function() {
            this.subscribeForExpiry();
          }
        };
        Ember.addListener(this, 'didFetch', this, this._listenerHandlers.didFetch);
      }
    },

    subscribeForExpiry: function() {
      var remoteExpiryScope = this.get('remoteExpiryKey');

      if (!remoteExpiryScope) {
        return;
      }

      if (this._expiryCallback) {
        return;
      }

      this._expiryCallback = this.updateExpiry.bind(this);

      Ember.Resource.PushTransport.subscribe(remoteExpiryScope, this._expiryCallback);

    },

    willDestroy: function() {
      var remoteExpiryScope = this.get('remoteExpiryKey');

      if (this._listenerHandlers) {
        Ember.removeListener(this, 'didFetch', this, this._listenerHandlers.didFetch);
      }

      if (!remoteExpiryScope) {
        return;
      }

      if (!this._expiryCallback) {
        return;
      }

      Ember.Resource.PushTransport.unsubscribe(remoteExpiryScope, this._expiryCallback);
      this._super && this._super();
    },

    refetchOnExpiry: function(options) {
      this.expireNow();
      this.fetch(options);
    },

    updateExpiry: function(message) {
      var updatedAt = message && message.updatedAt;
      if (!updatedAt) return;
      if (this.stale(updatedAt)) {
        this.set('expiryUpdatedAt', updatedAt);
        if (this.get('remoteExpiryAutoFetch')) {
          this.refetchOnExpiry();
        } else {
          this.expire();
        }
      }
    },

    stale: function(updatedAt) {
      return !this.get('expiryUpdatedAt') || (+this.get('expiryUpdatedAt') < +updatedAt);
    }
  });

  Ember.Resource.RemoteExpiry = RemoteExpiry;

}(this));

/*globals Ember, LRUCache*/

(function() {
  Ember.Resource.IdentityMap = function(limit, evictionHandler) {
    this.cache = new LRUCache(limit || Ember.Resource.IdentityMap.DEFAULT_IDENTITY_MAP_LIMIT);
    this.evictionHandler = evictionHandler || function() {};
    var map = this,
        origShift = this.cache.shift;

    this.cache.shift = function() {
      var entry = origShift.apply(this, arguments);
      map.evictionHandler(entry);
      return entry;
    };
  };

  Ember.Resource.IdentityMap.prototype = {
    get: function() {
      return LRUCache.prototype.get.apply(this.cache, arguments);
    },

    put: function() {
      return LRUCache.prototype.put.apply(this.cache, arguments);
    },

    remove: function() {
      return LRUCache.prototype.remove.apply(this.cache, arguments);
    },

    clear: function() {
      return LRUCache.prototype.removeAll.apply(this.cache, arguments);
    },

    size: function() {
      return this.cache.size;
    },

    limit: function() {
      return this.cache.limit;
    }

  };

  Ember.Resource.IdentityMap.DEFAULT_IDENTITY_MAP_LIMIT = 500;

}());

(function(exports) {

  // Gives custom error handlers access to the resource object.
  // 1. `this` will refer to the Ember.Resource object.
  // 2. `resource` will be passed as the last argument
  //
  //     function errorHandler() {
  //       this; // the Ember.Resource
  //     }
  //
  //     function errorHandler(jqXHR, textStatus, errorThrown, resource) {
  //       resource; // another way to reference the resource object
  //     }
  //
  var errorHandlerWithContext = function(errorHandler, context) {
    return function() {
      var args = Array.prototype.slice.call(arguments, 0);
      args.push(context);
      errorHandler.apply(context, args);
    };
  };

  var slice = Array.prototype.slice;

  exports.Ember.Resource.ajax = function(options) {
    if (typeof options === "string") {
      options = { url: '' + options };
    }

    options.dataType = options.dataType || 'json';
    options.type     = options.type     || 'GET';

    if (options.error) {
      options.error = errorHandlerWithContext(options.error, options);
    } else if (exports.Ember.Resource.errorHandler) {
      options.error = errorHandlerWithContext(window.Ember.Resource.errorHandler, options);
    }

    var dfd = $.Deferred();

    var ajax = $.ajax(options).done(function() {
      var args = slice.apply(arguments);
      Em.run(function() {
        dfd.resolveWith(options.context, args);
      });
    }).fail(function() {
      var args = slice.apply(arguments);
      Em.run(function() {
        dfd.rejectWith(options.context, args);
      });
    });

    if (options.abortCallback) {
      options.abortCallback(ajax.abort.bind(ajax));
    }

    return dfd.promise();
  };


  exports.Em.Resource.fetch = function(resource) {
    return Em.Resource.ajax.apply(Em.Resource, slice.call(arguments, 1));
  };

}(this));

(function(exports) {

  var expandSchema, expandSchemaItem, createSchemaProperties,
      mergeSchemas;

  var Ember = exports.Ember,
      getPath = Ember.Resource.getPath,
      set = Ember.set;

  // Determine if we need to be back compatible with Ember < 1.12
  var requiresEmberComputedPropertyFunction = false;
  try {
    Ember.computed({get: function() {}, set: function(key, value) {}});
  } catch(ex) {
    requiresEmberComputedPropertyFunction = true;
  }

  function isString(obj) {
    return Ember.typeOf(obj) === 'string';
  }

  function isNumber(obj) {
    return Ember.typeOf(obj) === 'number';
  }

  function isBoolean(obj) {
    return Ember.typeOf(obj) === 'boolean';
  }

  function isObject(obj) {
    return Ember.typeOf(obj) === 'object';
  }

  function isFunction(obj) {
    return Ember.typeOf(obj) === 'function';
  }

  // Used when evaluating schemas to turn a type String into a class.
  Ember.Resource.lookUpType = function(string) {
    return getPath(exports, string);
  };

  Ember.Resource.deepSet = function(obj, path, value) {
    if (isString(path)) {
      Ember.Resource.deepSet(obj, path.split('.'), value);
      return;
    }

    var key = path.shift();

    if (path.length === 0) {
      if (isObject(value)) {
        set(obj, key, Em.copy(value, true));
      } else {
        set(obj, key, value);
      }
    } else {
      var newObj = getPath(obj, key);

      if (newObj === null || newObj === undefined) {
        newObj = {};
        set(obj, key, newObj);
      }

      Ember.propertyWillChange(newObj, path);
      Ember.Resource.deepSet(newObj, path, value);
      Ember.propertyDidChange(newObj, path);
    }
  };

  Ember.Resource.deepMerge = function(objA, objB) {
    var oldValue, newValue;

    for (var key in objB) {
      if (objB.hasOwnProperty(key)) {
        oldValue = getPath(objA, key);
        newValue = getPath(objB, key);

        if (isObject(newValue) && isObject(oldValue)) {
          Ember.propertyWillChange(objA, key);
          Ember.Resource.deepMerge(oldValue, newValue);
          Ember.propertyDidChange(objA, key);
        } else {
          set(objA, key, newValue);
        }
      }
    }
  };

  Ember.Resource.AbstractSchemaItem = Ember.Object.extend({
    name: String,        // required
    getValue: Function,  // required
    setValue: Function,  // required

    dependencies: Ember.computed('path', function() {
      var deps = ['data.' + this.get('path')];

      return deps;
    }),

    data: function(instance) {
      return getPath(instance, 'data');
    },

    type: Ember.computed('theType', function() {
      var type = this.get('theType');
      if (isString(type)) {
        type = Ember.Resource.lookUpType(type);
        if (type) {
          this.set('theType', type);
        } else {
          type = this.get('theType');
        }
      }
      return type;
    }),

    propertyFunction: (function(){
      var _get =  function(name) {
                    var schemaItem = this.constructor.schema[name];

                    return schemaItem.getValue.call(schemaItem, this);
                  },
          _set = function(name, value) {
                    var schemaItem = this.constructor.schema[name];

                    this.resourcePropertyWillChange(name, value);
                    schemaItem.setValue.call(schemaItem, this, value);
                    value = schemaItem.getValue.call(schemaItem, this);
                    this.resourcePropertyDidChange(name, value);

                    return value;
                };

      return requiresEmberComputedPropertyFunction ?
        function(name, value) {
          if (arguments.length > 1) {
            return _set.apply(this, arguments);
          } else {
            return _get.apply(this, arguments);
          }
        } : {
          get: _get,
          set: _set
        };
    })(),

    property: function() {
      var cp = new Ember.ComputedProperty(this.propertyFunction);
      return cp.property.apply(cp, this.get('dependencies'));
    },

    toJSON: function(instance) {
      return undefined;
    }
  });

  Ember.Resource.AbstractSchemaItem.reopenClass({
    create: function(name, schema) {
      return this._super({name: name});
    }
  });


  Ember.Resource.SchemaItem = Ember.Resource.AbstractSchemaItem.extend({});

  Ember.Resource.SchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];

      if (definition instanceof Ember.Resource.AbstractSchemaItem) { return definition; }

      var type;
      if (definition === Number || definition === String || definition === Boolean || definition === Date || definition === Object) {
        definition = {type: definition};
        schema[name] = definition;
      }

      if (isObject(definition)) {
        type = definition.type;
      }

      if (type) {
        if (type.isEmberResource || isString(type)) { // a has-one association
          return Ember.Resource.HasOneSchemaItem.create(name, schema);
        } else if (type.isEmberResourceCollection) { // a has-many association
          return Ember.Resource.HasManySchemaItem.create(name, schema);
        } else { // a regular attribute
          return Ember.Resource.AttributeSchemaItem.create(name, schema);
        }
      }
    }
  });

  Ember.Resource.AttributeSchemaItem = Ember.Resource.AbstractSchemaItem.extend({
    theType: Object,
    path: String, // required

    getValue: function(instance) {
      var value;
      var data = this.data(instance);
      if (data) {
        value = getPath(data, this.get('path'));
      }

      if (this.typeCast) {
        value = this.typeCast(value);
      }

      return value;
    },

    setValue: function(instance, value) {
      var data = this.data(instance);
      if (!data) return;

      if (this.typeCast) {
        value = this.typeCast(value);
      }
      if (value !== null && value !== undefined && Ember.typeOf(value.toJSON) == 'function') {
        value = value.toJSON();
      }
      Ember.Resource.deepSet(data, this.get('path'), value);
    },

    toJSON: function(instance) {
      return getPath(instance, this.name);
    }
  });

  Ember.Resource.AttributeSchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];
      var instance;

      if (this === Ember.Resource.AttributeSchemaItem) {
        switch (definition.type) {
        case Number:
          return Ember.Resource.NumberAttributeSchemaItem.create(name, schema);
        case String:
          return Ember.Resource.StringAttributeSchemaItem.create(name, schema);
        case Boolean:
          return Ember.Resource.BooleanAttributeSchemaItem.create(name, schema);
        case Date:
          return Ember.Resource.DateAttributeSchemaItem.create(name, schema);
        default:
          instance = this._super.apply(this, arguments);
          instance.set('path', definition.path || name);
          return instance;
        }
      }
      else {
        instance = this._super.apply(this, arguments);
        instance.set('path', definition.path || name);
        return instance;
      }
    }
  });

  Ember.Resource.NumberAttributeSchemaItem = Ember.Resource.AttributeSchemaItem.extend({
    theType: Number,
    typeCast: function(value) {
      if (isNaN(value)) {
        value = undefined;
      }

      if (value === undefined || value === null || Ember.typeOf(value) === 'number') {
        return value;
      } else {
        return Number(value);
      }
    }
  });

  Ember.Resource.StringAttributeSchemaItem = Ember.Resource.AttributeSchemaItem.extend({
    theType: String,
    typeCast: function(value) {
      if (value === undefined || value === null || isString(value)) {
        return value;
      } else {
        return '' + value;
      }
    }
  });

  Ember.Resource.BooleanAttributeSchemaItem = Ember.Resource.AttributeSchemaItem.extend({
    theType: Boolean,
    typeCast: function(value) {
      if (value === undefined || value === null || Ember.typeOf(value) === 'boolean') {
        return value;
      } else {
        return value === 'true';
      }
    }
  });

  Ember.Resource.DateAttributeSchemaItem = Ember.Resource.AttributeSchemaItem.extend({
    theType: Date,
    typeCast: function(value) {
      if (!value || Ember.typeOf(value) === 'date') {
        return value;
      } else {
        return new Date(value);
      }
    },
    toJSON: function(instance) {
      var value = getPath(instance, this.name);
      return value ? value.toJSON() : value;
    }
  });

  Ember.Resource.HasOneSchemaItem = Ember.Resource.AbstractSchemaItem.extend({ });
  Ember.Resource.HasOneSchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];
      if (this === Ember.Resource.HasOneSchemaItem) {
        if (definition.nested) {
          return Ember.Resource.HasOneNestedSchemaItem.create(name, schema);
        } else {
          return Ember.Resource.HasOneRemoteSchemaItem.create(name, schema);
        }
      }
      else {
        var instance = this._super.apply(this, arguments);
        instance.set('theType', definition.type);
        if (definition.parse) {
          instance.set('parse', definition.parse);
        }
        return instance;
      }
    }
  });

  Ember.Resource.HasOneNestedSchemaItem = Ember.Resource.HasOneSchemaItem.extend({
    getValue: function(instance) {
      var data = this.data(instance);
      if (!data) return;
      var type = this.get('type');
      var value = getPath(data, this.get('path'));
      if (value) {
        value = (this.get('parse') || type.parse).call(type, Ember.copy(value));
        return type.create({}, value);
      }
      return value;
    },

    setValue: function(instance, value) {
      var data = this.data(instance);
      if (!data) return;

      if (value instanceof this.get('type')) {
        // Copying value data containing an id might be dangerous
        // If a subsequent fetch call only updates the id in the data.path hash,
        // next time a instance.get(path) call is made, it would fetch id from
        // the identityMap and update with whatever is present in data.path hash
        var valueId = getPath(value ,'id');
        if (valueId) {
          set(instance, this.get('name') + '_id', valueId);
        } else {
          Ember.Resource.deepSet(data, this.get('path'), getPath(value, 'data'));
        }
      } else {
        Ember.Resource.deepSet(data, this.get('path'), value);
      }
    },

    toJSON: function(instance) {
      var value = getPath(instance, this.name);
      return value ? value.toJSON() : value;
    }
  });
  Ember.Resource.HasOneNestedSchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];
      var instance = this._super.apply(this, arguments);
      instance.set('path', definition.path || name);

      var id_name = name + '_id';
      if (!schema[id_name]) {
        schema[id_name] = {type: Number, association: instance };
        schema[id_name] = Ember.Resource.HasOneNestedIdSchemaItem.create(id_name, schema);
      }

      return instance;
    }
  });
  Ember.Resource.HasOneNestedIdSchemaItem = Ember.Resource.AbstractSchemaItem.extend({
    theType: Number,
    getValue: function(instance) {
      return getPath(instance, this.get('path'));
    },
    setValue: function(instance, value) {
      if(value == null) {
        set(instance, getPath(this, 'association.name'), null);
      } else {
        set(instance, getPath(this, 'association.name'), {id: value});
      }
    }
  });
  Ember.Resource.HasOneNestedIdSchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];
      var instance = this._super.apply(this, arguments);
      instance.set('association', definition.association);
      instance.set('path', definition.association.get('path') + '.id');
      return instance;
    }
  });


  Ember.Resource.HasOneRemoteSchemaItem = Ember.Resource.HasOneSchemaItem.extend({
    getValue: function(instance) {
      var data = this.data(instance);
      if (!data) return;
      var id = getPath(data, this.get('path'));
      if (id) {
        return this.get('type').create({}, {id: id});
      }
    },

    setValue: function(instance, value) {
      var data = this.data(instance);
      if (!data) return;
      var id = getPath(value || {}, 'id');
      Ember.Resource.deepSet(data, this.get('path'), id);
    }
  });
  Ember.Resource.HasOneRemoteSchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];
      var instance = this._super.apply(this, arguments);
      var path = definition.path || name + '_id';
      instance.set('path', path);

      if (!schema[path]) {
        schema[path] = Number;
        schema[path] = Ember.Resource.SchemaItem.create(path, schema);
      }

      return instance;
    }
  });


  Ember.Resource.HasManySchemaItem = Ember.Resource.AbstractSchemaItem.extend({
    itemType: Ember.computed('theItemType', function() {
      var type = this.get('theItemType');
      if (isString(type)) {
        type = Ember.Resource.lookUpType(type);
        if (type) {
          this.set('theItemType', type);
        } else {
          type = this.get('theItemType');
        }
      }
      return type;
    })
  });

  Ember.Resource.HasManySchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];
      if (this === Ember.Resource.HasManySchemaItem) {
        if (definition.url) {
          return Ember.Resource.HasManyRemoteSchemaItem.create(name, schema);
        } else if (definition.nested) {
          return Ember.Resource.HasManyNestedSchemaItem.create(name, schema);
        } else {
          return Ember.Resource.HasManyInArraySchemaItem.create(name, schema);
        }
      } else {
        var instance = this._super.apply(this, arguments);
        instance.set('theType', definition.type);
        instance.set('theItemType', definition.itemType);
        if (definition.parse) {
          instance.set('parse', definition.parse);
        }
        return instance;
      }
    }
  });

  Ember.Resource.HasManyRemoteSchemaItem = Ember.Resource.HasManySchemaItem.extend({
    dependencies: ['id', 'isInitializing'],
    getValue: function(instance) {
      if (getPath(instance, 'isInitializing')) return;

      var options = {
        type: this.get('itemType')
      };

      if (this.get('parse')) options.parse = this.get('parse');

      var url = this.url(instance);
      if (url) {
        options.url = url;
      } else {
        options.content = [];
      }

      return this.get('type').create(options);
    },

    setValue: function(instance, value) {
      throw new Error('you can not set a remote has many association');
    }
  });
  Ember.Resource.HasManyRemoteSchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];

      var instance = this._super.apply(this, arguments);

      if (Ember.typeOf(definition.url) === 'function') {
        instance.url = definition.url;
      } else {
        instance.url = function(obj) {
          var id = obj.get('id');
          if (id) {
            return definition.url.fmt(id);
          }
        };
      }

      return instance;
    }
  });

  Ember.Resource.HasManyNestedSchemaItem = Ember.Resource.HasManySchemaItem.extend({
    getValue: function(instance) {
      var data = this.data(instance);
      if (!data) return;
      data = getPath(data, this.get('path'));
      if (data === undefined || data === null) return data;
      data = Ember.copy(data);

      var options = {
        type: this.get('itemType'),
        content: data
      };

      if (this.get('parse')) options.parse = this.get('parse');

      return this.get('type').create(options);
    },

    setValue: function(instance, value) {
    },

    toJSON: function(instance) {
      var value = getPath(instance, this.name);
      return value ? value.toJSON() : value;
    }
  });
  Ember.Resource.HasManyNestedSchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];

      var instance = this._super.apply(this, arguments);
      instance.set('path', definition.path || name);

      return instance;
    }
  });

  Ember.Resource.HasManyInArraySchemaItem = Ember.Resource.HasManySchemaItem.extend({
    getValue: function (instance) {
      var data = this.data(instance);
      if (!data) return;
      data = getPath(data, this.get('path'));
      if (data === undefined || data === null) return data;


      return this.get('type').create({
        type: this.get('itemType'),
        content: data.map(function(id) { return {id: id}; })
      });
    },

    setValue: function(instance, value) {
    },

    toJSON: function(instance) {
      var value = getPath(instance, this.name);
      return value ? value.mapProperty('id') : value;
    }
  });
  Ember.Resource.HasManyInArraySchemaItem.reopenClass({
    create: function(name, schema) {
      var definition = schema[name];

      var instance = this._super.apply(this, arguments);
      instance.set('path', definition.path || name + '_ids');

      return instance;
    }
  });


  Ember.Resource.Lifecycle = {
    INITIALIZING: 0,
    UNFETCHED:    10,
    EXPIRING:     20,
    EXPIRED:      30,
    FETCHING:     40,
    FETCHED:      50,
    SAVING:       60,
    DESTROYING:   70,
    DESTROYED:    80,

    clock: Ember.Object.create({
      now: new Date(),

      tick: function() {
        Ember.Resource.Lifecycle.clock.set('now', new Date());
      },

      start: function() {
        this.stop();
        Ember.Resource.Lifecycle.clock.set('timer', setInterval(Ember.Resource.Lifecycle.clock.tick, 10000));
      },

      stop: function() {
        var timer = Ember.Resource.Lifecycle.clock.get('timer');
        if (timer) {
          clearInterval(timer);
        }
      }
    }),

    classMixin: Ember.Mixin.create({
      create: function(options, data) {
        options = options || {};
        options.resourceState = Ember.Resource.Lifecycle.INITIALIZING;

        var instance = this._super.apply(this, arguments);

        if (getPath(instance, 'resourceState') === Ember.Resource.Lifecycle.INITIALIZING) {
          set(instance, 'resourceState', Ember.Resource.Lifecycle.UNFETCHED);
        }

        return instance;
      },

      didEvictFromIdentityMap: function(entry) {
        var fn = Em.Resource.identityMapEvictionHandler;
        fn && fn.call(this, entry.value);
      }

    }),

    prototypeMixin: Ember.Mixin.create({
      expireIn: 60 * 5,
      resourceState: 0,

      init: function() {
        this._super.apply(this, arguments);

        var resourceStateBeforeSave;
        var updateExpiry = function () {
          var expireAt = new Date();
          expireAt.setSeconds(expireAt.getSeconds() + getPath(this, 'expireIn'));
          set(this, 'expireAt', expireAt);
        };

        this._listenerHandlers = {
          willFetch: function() {
            set(this, 'resourceState', Ember.Resource.Lifecycle.FETCHING);
            updateExpiry.call(this);
          },
          didFetch: function() {
            if(!getPath(this, 'hasBeenFetched')) {
              set(this, 'hasBeenFetched', true);
            }
            set(this, 'resourceState', Ember.Resource.Lifecycle.FETCHED);
            updateExpiry.call(this);
          },
          didFail: function() {
            set(this, 'resourceState', Ember.Resource.Lifecycle.UNFETCHED);
            updateExpiry.call(this);
          },
          willSave: function() {
            resourceStateBeforeSave = getPath(this, 'resourceState');
            set(this, 'resourceState', Ember.Resource.Lifecycle.SAVING);
          },
          didSave: function() {
            set(this, 'resourceState', resourceStateBeforeSave || Ember.Resource.Lifecycle.UNFETCHED);
          }
        };

        Ember.addListener(this, 'willFetch', this, this._listenerHandlers.willFetch);
        Ember.addListener(this, 'didFetch', this, this._listenerHandlers.didFetch);
        Ember.addListener(this, 'didFail', this, this._listenerHandlers.didFail);
        Ember.addListener(this, 'willSave', this, this._listenerHandlers.willSave);
        Ember.addListener(this, 'didSave', this, this._listenerHandlers.didSave);
      },

      isFetchable: Ember.computed(function(key) {
        var state = getPath(this, 'resourceState');
        return state == Ember.Resource.Lifecycle.UNFETCHED || this.get('isExpired');
      }).volatile().readOnly(),

      isInitializing: Ember.computed('resourceState', function (key) {
        return (getPath(this, 'resourceState') || Ember.Resource.Lifecycle.INITIALIZING) === Ember.Resource.Lifecycle.INITIALIZING;
      }).readOnly(),

      isFetching: Ember.computed('resourceState', function(key) {
        return (getPath(this, 'resourceState')) === Ember.Resource.Lifecycle.FETCHING;
      }).readOnly(),

      isFetched: Ember.computed('resourceState', function(key) {
        return (getPath(this, 'resourceState')) === Ember.Resource.Lifecycle.FETCHED;
      }).readOnly(),


      hasBeenFetched: false,

      isSavable: Ember.computed('resourceState', function(key) {
        var state = getPath(this, 'resourceState');
        var unsavableState = [
          Ember.Resource.Lifecycle.INITIALIZING,
          Ember.Resource.Lifecycle.FETCHING,
          Ember.Resource.Lifecycle.SAVING,
          Ember.Resource.Lifecycle.DESTROYING
        ];

        return state && !unsavableState.contains(state);
      }).readOnly(),

      isSaving: Ember.computed('resourceState', function(key) {
        return (getPath(this, 'resourceState')) === Ember.Resource.Lifecycle.SAVING;
      }).readOnly(),

      // Notify dependents on volatile properties
      resourceStateDidChange: function() {
        this.notifyPropertyChange('isFetchable');
      }.observes('resourceState'),

      expireAtDidChange: function() {
        this.notifyPropertyChange('isExpired');
        this.notifyPropertyChange('isFetchable');
      }.observes('expireAt'),

      expire: function () {
        Ember.run.next(this, function () {
          if(getPath(this, 'isDestroyed')) { return; }
          this.expireNow();
        });
      },

      expireNow: function() {
        set(this, 'expireAt', new Date());
      },

      refresh: function() {
        this.expireNow();
        return this.fetch();
      },

      isExpired: Ember.computed(function(name) {
        var expireAt = this.get('expireAt');
        var now = new Date();

        return !!(expireAt && expireAt.getTime() <= now.getTime());
      }).volatile().readOnly(),

      isFresh: function(data) {
        return true;
      },

      destroy: function() {
        var id = this.get('id');

        if (id && this.constructor.identityMap) {
          if (this === this.constructor.identityMap.get(id)) {
            this.constructor.identityMap.remove(id);
          }
        }
        this._super();
      },

      willDestroy: function() {
        Ember.removeListener(this, 'willFetch', this, this._listenerHandlers.willFetch);
        Ember.removeListener(this, 'didFetch', this, this._listenerHandlers.didFetch);
        Ember.removeListener(this, 'didFail', this, this._listenerHandlers.didFail);
        Ember.removeListener(this, 'willSave', this, this._listenerHandlers.willSave);
        Ember.removeListener(this, 'didSave', this, this._listenerHandlers.didSave);
      }
    })
  };

  Ember.Resource.reopen({
    isEmberResource: true,

    updateWithApiData: function(json) {
      var data = getPath(this, 'data'), parsedData;

      if (!data) { return; }

      parsedData = this.constructor.parse(json);

      if(!this.isFresh(parsedData)) { return; }

      Ember.beginPropertyChanges();
      try {
        Ember.Resource.deepMerge(data, parsedData);
      } catch (ex) {
        Ember.Resource.logger && typeof Ember.Resource.logger.error === "function" && Ember.Resource.logger.error(ex);
      } finally {
        Ember.endPropertyChanges();
      }
    },

    willFetch: function() {},
    didFetch: function() {},
    willSave: function() {},
    didSave: function() {},
    didFail: function() {},

    fetched: function() {
      if (!this._fetchDfd) {
        this._fetchDfd = $.Deferred();
      }
      return this._fetchDfd;
    },

    fetch: function(ajaxOptions) {
      var sideloads;

      if (this.deferredFetch && !getPath(this, 'isExpired')) {
        return this.deferredFetch.promise();
      }

      if (!getPath(this, 'isFetchable')) return $.when(this.get('data'), this);

      var url = this.resourceURL();

      if (!url) return $.when(this.get('data'), this);

      var self = this;

      self.willFetch.call(self);
      Ember.Resource.sendEvent(self, 'willFetch');

      ajaxOptions = $.extend({}, ajaxOptions, {
        url: url,
        resource: this,
        operation: 'read'
      });

      sideloads = this.constructor.sideloads;

      if (sideloads && sideloads.length !== 0) {
        ajaxOptions.data = {include: sideloads.join(",")};
      }

      var result = this.deferredFetch = $.Deferred();

      Ember.Resource.fetch(this, ajaxOptions)
        .done(function(json) {
          if (self.get('isDestroying') || self.get('isDestroyed')) {
            Ember.Resource.sendEvent(self, 'didFail');
            result.reject();
            self.fetched().reject();
            return;
          }
          self.updateWithApiData(json);
          self.didFetch.call(self);
          Ember.Resource.sendEvent(self, 'didFetch');
          self.fetched().resolve(json, self);
          result.resolve(json, self);
        })
        .fail(function() {
          self.didFail.call(self);
          Ember.Resource.sendEvent(self, 'didFail');
          var fetched = self.fetched();
          fetched.reject.apply(fetched, arguments);
          result.reject.apply(result, arguments);
        }).
        always(function() {
          self.deferredFetch = null;
        });

      return result.promise();
    },

    resourceURL: function() {
      return this.constructor.resourceURL(this);
    },

    // Turn this resource into a JSON object to be saved via AJAX. Override
    // this method to produce different syncing behavior.
    //
    // Note: toJSON when called from within a collection iteration will receive several arguments,
    // the first one being the index. Therefore we need to make some validation to be sure we are
    // looking at a legitimate fields option before using it.
    toJSON: function(options) {
      var json = {};
      var schemaItem, path, value;
      var schemaFields = Object.keys(this.constructor.schema);
      var fieldsToSet = options && options.fields ? options.fields.filter(function(schemaField) {
        return schemaFields.indexOf(schemaField) !== -1;
      }) : schemaFields;
      fieldsToSet.forEach(function(name) {
        schemaItem = this.constructor.schema[name];
        if (schemaItem instanceof Ember.Resource.AbstractSchemaItem) {
          path = schemaItem.get('path');
          value = schemaItem.toJSON(this);
          if (value !== undefined) {
            Ember.Resource.deepSet(json, path, value);
          }
        }
      }, this);
      return json;
    },

    isNew: Ember.computed('id', function() {
      return !getPath(this, 'id');
    }),

    save: function(options) {
      options = options || {};
      if (!getPath(this, 'isSavable')) {
        return $.Deferred().reject(false);
      }

      var ajaxOptions = $.extend({}, options, {
        contentType: 'application/json',
        data: JSON.stringify(this.toJSON(options)),
        resource: this
      });
      // delete local options
      delete ajaxOptions.update;

      var isCreate = getPath(this, 'isNew');

      if (isCreate) {
        ajaxOptions.type = 'POST';
        ajaxOptions.url = this.constructor.resourceURL();
        ajaxOptions.operation = 'create';
      } else {
        ajaxOptions.type = 'PUT';
        ajaxOptions.url = this.resourceURL();
        ajaxOptions.operation = 'update';
      }

      var self = this;

      self.willSave.call(self);
      Ember.Resource.sendEvent(self, 'willSave');

      var deferedSave = Ember.Resource.ajax(ajaxOptions);

      deferedSave.done(function(data, status, response) {
        var location = response.getResponseHeader('Location');
        if (location) {
          var id = self.constructor.idFromURL(location);
          if (id) {
            set(self, 'id', id);
          }
        }

        if (options.update !== false && isObject(data)) {
          self.updateWithApiData(data);
        }

        self.didSave.call(self, {created: isCreate, data: data});
        Ember.Resource.sendEvent(self, 'didSave', [{created: isCreate, data: data}]);

      }).fail(function() {
        self.didFail.call(self);
        Ember.Resource.sendEvent(self, 'didFail');
      });

      return deferedSave;
    },

    destroyResource: function() {
      var previousState = getPath(this, 'resourceState'), self = this;
      set(this, 'resourceState', Ember.Resource.Lifecycle.DESTROYING);

      return Ember.Resource.ajax({
        type: 'DELETE',
        operation: 'destroy',
        url:  this.resourceURL(),
        resource: this
      }).done(function() {
        set(self, 'resourceState', Ember.Resource.Lifecycle.DESTROYED);
        Em.run.next(function() {
          self.destroy();
        });
      }).fail(function() {
        set(self, 'resourceState', previousState);
      });
    }
  }, Ember.Resource.Lifecycle.prototypeMixin);

  expandSchema = function(schema) {
    for (var name in schema) {
      if (schema.hasOwnProperty(name)) {
        schema[name] = Ember.Resource.SchemaItem.create(name, schema);
      }
    }

    return schema;
  };

  mergeSchemas = function(childSchema, parentSchema) {
    var schema = Ember.copy(parentSchema || {});

    for (var name in childSchema) {
      if (childSchema.hasOwnProperty(name)) {
        if (schema.hasOwnProperty(name)) {
          throw new Error("Schema item '" + name + "' is already defined");
        }

        schema[name] = childSchema[name];
      }
    }

    return schema;
  };

  createSchemaProperties = function(schema) {
    var properties = {}, schemaItem;

    for (var propertyName in schema) {
      if (schema.hasOwnProperty(propertyName)) {
        properties[propertyName] = schema[propertyName].property();
      }
    }

    return properties;
  };


  Ember.Resource.reopenClass({
    isEmberResource: true,
    schema: {},

    baseClass: function() {
      if (this === Ember.Resource) {
        return null;
      } else {
        return this.baseResourceClass || this;
      }
    },

    subclassFor: function(options, data) {
      return this;
    },

    // Create an instance of this resource. If `options` includes an
    // `id`, first check the identity map and return the existing resource
    // with that ID if found.
    create: function(options, data) {
      data    = data    || {};
      options = options || {};

      var klass = this.subclassFor(options, data), idToRestore = options.id;

      if (klass === this) {
        var instance;

        var id = data.id || options.id;
        if (id && !options.skipIdentityMap && this.useIdentityMap) {
          this.identityMap = this.identityMap || new Ember.Resource.IdentityMap(this.identityMapLimit, this.didEvictFromIdentityMap.bind(this));

          id = id.toString();
          instance = this.identityMap.get(id);

          if (!instance) {
            instance = this._super({ data: data });
            this.identityMap.put(id, instance);
          } else {
            instance.updateWithApiData(data);
            // ignore incoming resourceState and id arguments
            delete options.resourceState;
            delete options.id;
          }
        } else {
          instance = this._super({ data: data });
        }

        delete options.data;

        Ember.beginPropertyChanges();
        try {
          var mixin = {};
          var hasMixin = false;
          for (var name in options) {
            if (options.hasOwnProperty(name)) {
              if (this.schema[name]) {
                instance.set(name, options[name]);
              } else {
                mixin[name] = options[name];
                hasMixin = true;
              }
            }
          }
          if (hasMixin) {
            instance.reopen(mixin);
          }
        } catch (ex) {
          Ember.Resource.logger && typeof Ember.Resource.logger.error === "function" && Ember.Resource.logger.error(ex);
        } finally {
          Ember.endPropertyChanges();
        }

        options.id = idToRestore;
        return instance;
      } else {
        return klass.create(options, data);
      }
    },

    // Parse JSON -- likely returned from an AJAX call -- into the
    // properties for an instance of this resource. Override this method
    // to produce different parsing behavior.
    parse: function(json) {
      return json;
    },

    // Define a resource class.
    //
    // Parameters:
    //
    //  * `schema` -- the properties schema for the resource class
    //  * `url` -- either a function that returns the URL for syncing
    //    resources or a string. If the latter, a string of the form
    //    "/widgets" is turned into a function that returns "/widgets" if
    //    the Widget's ID is not present and "/widgets/{id}" if it is.
    //  * `parse` -- the function used to parse JSON returned from AJAX
    //    calls into the resource properties. By default, simply returns
    //    the JSON.
    define: function(options) {
      options = options || {};
      var schema = expandSchema(options.schema);
      schema = mergeSchemas(schema, this.schema);

      var klass = this.extend(createSchemaProperties(schema), Ember.Resource.RemoteExpiry);

      var classOptions = {
        schema: schema
      };

      if (this !== Ember.Resource) {
        classOptions.baseResourceClass = this.baseClass() || this;
      }

      if (options.url) {
        classOptions.url = options.url;
      }

      if (options.parse) {
        classOptions.parse = options.parse;
      }

      if (options.identityMapLimit) {
        classOptions.identityMapLimit = options.identityMapLimit;
      }

      if(typeof(options.useIdentityMap) !== "undefined") {
        classOptions.useIdentityMap = options.useIdentityMap;
      } else {
        classOptions.useIdentityMap = true;
      }

      if (options.sideloads) {
        classOptions.sideloads = options.sideloads;
      }

      klass.reopenClass(classOptions);

      return klass;
    },

    extendSchema: function(schema) {
      schema = expandSchema(schema);
      this.schema = mergeSchemas(schema, this.schema);
      this.reopen(createSchemaProperties(schema));
      return this;
    },

    resourceURL: function(instance) {
      if (Ember.typeOf(this.url) == 'function') {
        return this.url(instance);
      } else if (this.url) {
        if (instance) {
          var id = getPath(instance, 'id');
          if (id == null || id === '') {
            return this.url;
          }

          if (Ember.typeOf(id) !== 'number' || id > 0) {
            return this.url + '/' + id;
          }
        } else {
          return this.url;
        }
      }
    },

    idFromURL: function(url) {
      var regex;
      if (!this.schema.id) return;

      if (this.schema.id.get('type') === Number) {
        regex = /\/(\d+)(\.\w+)?$/;
      } else {
        regex = /\/([^\/\.]+)(\.\w+)?$/;
      }

      var match = (url || '').match(regex);
      if (match) {
        return match[1];
      }
    },

    // accepts a single id or an array of ids
    findAndExpire: function(ids) {
      var cache = this.identityMap && this.identityMap.cache;
      var cacheRecord;

      if (ids == null || !cache) return;

      ids = Em.isArray(ids) ? ids : [ids];

      for (var i=0; i<ids.length; i++) {
        cacheRecord = cache.find(ids[i]);
        if (cacheRecord && cacheRecord.value) {
          cacheRecord.value.expireNow();
        }
      }
    }
  }, Ember.Resource.Lifecycle.classMixin);

  Ember.ResourceCollection = Ember.ArrayProxy.extend(Ember.Resource.RemoteExpiry, {
    isEmberResourceCollection: true,
    type: null, // required

    fetched: function() {
      if (!this._fetchDfd) {
        this._fetchDfd = $.Deferred();
      }
      return this._fetchDfd;
    },

    fetch: function(ajaxOptions) {
      if (this.deferredFetch && !getPath(this, 'isExpired')) return this.deferredFetch.promise();

      if (!getPath(this, 'isFetchable') || getPath(this, 'prePopulated')) return $.when(this);

      var self = this;

      Ember.Resource.sendEvent(self, 'willFetch');

      var result = this.deferredFetch = $.Deferred(), parsedData;

      this._fetch(ajaxOptions)
        .done(function(json) {
          if (self.get('isDestroying') || self.get('isDestroyed')) {
            Ember.Resource.sendEvent(self, 'didFail');
            result.reject();
            self.fetched().reject();
            return;
          }
          parsedData = self.parse(json);
          if(self.isFresh(parsedData)) {
            set(self, 'content', parsedData);
          }
          Ember.Resource.sendEvent(self, 'didFetch');
          self.fetched().resolve(json, self);
          result.resolve(json, self);
        })
        .fail(function() {
          Ember.Resource.sendEvent(self, 'didFail');
          var fetched = self.fetched();
          result.reject.apply(result, arguments);
          fetched.reject.apply(fetched, arguments);
        })
        .always(function() {
          self.deferredFetch = null;
        });

      return result.promise();
    },

    _resolveType: function() {
      if (isString(this.type)) {
        var type = Ember.Resource.lookUpType(this.type);
        if (type) this.type = type;
      }
    },

    _fetch: function(ajaxOptions) {
      this._resolveType();
      ajaxOptions = $.extend({}, ajaxOptions, {
        url: this.resolveUrl(),
        resource: this,
        operation: 'read'
      });
      return Ember.Resource.fetch(this, ajaxOptions);
    },

    resolveUrl: function() {
      return this.get('url') || this.type.resourceURL();
    },
    instantiateItems: function(items) {
      this._resolveType();
      return items.map(function(item) {
        if (item instanceof this.type) {
          return item;
        } else if(isString(item) && isFunction(this.type) && (this.type === String) ) {
          return item;
        } else if(isNumber(item) && isFunction(this.type) && (this.type === Number) ) {
          return item;
        } else if(isBoolean(item) && isFunction(this.type) && (this.type === Boolean) ) {
          return item;
        } else {
          return this.type.create({}, item);
        }
      }, this);
    },
    parse: function(json) {
      this._resolveType();
      if (Ember.typeOf(this.type.parse) == 'function') {
        return json.map(this.type.parse, this.type);
      }
      else {
        return json;
      }
    },

    length: Ember.computed('content.length', 'resourceState', function() {
      var content = getPath(this, 'content');
      var length = content ? getPath(content, 'length') : 0;
      return length;
    }),

    content: requiresEmberComputedPropertyFunction ?
      Ember.computed(function(name, value) {
        if (arguments.length === 2) { // setter
          return this.instantiateItems(value);
        }
      }) :
      Ember.computed( {
        set: function(name, value) {
          return this.instantiateItems(value);
        },

        get: function() {
          return;
        }
      }),

    toJSON: function () {
      return this.map(function (item) {
        return (typeof item.toJSON !== 'undefined') ? item.toJSON() : item;
      });
    }

  }, Ember.Resource.Lifecycle.prototypeMixin);

  var makeId = function(type, url) {
    return [Ember.guidFor(type), url].join();
  };

  Ember.ResourceCollection.reopenClass({
    isEmberResourceCollection: true,
    identityMapLimit: Ember.Resource.IdentityMap.DEFAULT_IDENTITY_MAP_LIMIT * 5,
    useIdentityMap: true,

    create: function(options) {
      options = options || {};
      var content = options.content;
      delete options.content;

      options.prePopulated = !! content;

      var instance;

      if (!options.prePopulated && options.url && this.useIdentityMap) {
        this.identityMap = this.identityMap || new Ember.Resource.IdentityMap(this.identityMapLimit);
        options.id = options.id || makeId(options.type, options.url);
        instance = this.identityMap.get(options.id) || Em.ArrayProxy.create.call(this.extend(options), {constructor: this});
        this.identityMap.put(options.id, instance);
      }

      if (!instance) {
        instance = Em.ArrayProxy.create.call(this.extend(options), {constructor: this});

        if (content) {
          set(instance, 'content', instance.parse(content));
        }
      }

      return instance;
    }
  }, Ember.Resource.Lifecycle.classMixin);
}(this));

if (Ember.DataAdapter) {
  var get = Ember.get, capitalize = Ember.String.capitalize, underscore = Ember.String.underscore;

  var Resource = Ember.Resource;

  var DebugAdapter = Ember.DataAdapter.extend({
    getFilters: function() {
      return [
        { name: 'isInitializing', desc: 'Initializing' },
        { name: 'isFetchable', desc: 'Fetchable' },
        { name: 'isFetching', desc: 'Fetching' },
        { name: 'isFetched', desc: 'Fetched' },
        { name: 'isSaving', desc: 'Saving' },
        { name: 'isSavable', desc: 'Savable' },
        { name: 'isExpired', desc: 'Expired' }
      ];
    },

    detect: function(klass) {
      return klass !== Resource && Resource.detect(klass);
    },

    columnsForType: function(type) {
      var columns = [], count = 0, limit = 10;
      for (var key in type.schema) {
        if (count++ === limit) { break; }
        columns.push({name: key, desc: key});
      }
      return columns;
    },

    getRecords: function(type) {
      var records = [],
          cache = type.identityMap && type.identityMap.cache,
          current = cache && cache.head;

      while (current) {
        records.push(current.value);
        current = current.newer;
      }

      return records;
    },

    getRecordColumnValues: function(record) {
      return record.data;
    },

    getRecordKeywords: function(record) {
      var keywords = [];
      for (var key in record.data) {
        keywords.push(record.data[key]);
      }
      return keywords;
    },

    getRecordFilterValues: function(record) {
      return record.getProperties(this.getFilters().mapProperty('name'));
    },

    getRecordColor: function(record) {
      var color = 'black';
      if (record.get('isExpired')) { color = 'red'; }
      return color;
    },

    observeRecord: function(record, recordUpdated) {
    /*
      TODO: Here's the code from Ember Data, we need to figure out how we want to observe records ourselves.

      var releaseMethods = Ember.A(), self = this,
          keysToObserve = Ember.A(['id', 'isNew', 'isDirty']);

      record.eachAttribute(function(key) {
        keysToObserve.push(key);
      });

      keysToObserve.forEach(function(key) {
        var handler = function() {
          recordUpdated(self.wrapRecord(record));
        };
        Ember.addObserver(record, key, handler);
        releaseMethods.push(function() {
          Ember.removeObserver(record, key, handler);
        });
      });

      var release = function() {
        releaseMethods.forEach(function(fn) { fn(); } );
      };

      return release;
    */
      return function() {};
    }

  });

  Ember.onLoad('Ember.Application', function(Application) {
    Application.initializer({
      name: "dataAdapter",

      initialize: function(container, application) {
        application.register('dataAdapter:main', DebugAdapter);
      }
    });
  });
}
