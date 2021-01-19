/**
 * BottleJS v2.0.0 - 2020-08-20
 * A powerful dependency injection micro container
 *
 * Copyright (c) 2020 Stephen Young
 * Licensed MIT
 */
var Bottle;

/**
 * String constants
 */
var DELIMITER = '.';
var FUNCTION_TYPE = 'function';
var STRING_TYPE = 'string';
var GLOBAL_NAME = '__global__';
var PROVIDER_SUFFIX = 'Provider';

/**
 * Unique id counter;
 *
 * @type Number
 */
var id = 0;

/**
 * Local slice alias
 *
 * @type Functions
 */
var slice = Array.prototype.slice;

/**
 * Iterator used to walk down a nested object.
 *
 * If Bottle.config.strict is true, this method will throw an exception if it encounters an
 * undefined path
 *
 * @param Object obj
 * @param String prop
 * @return mixed
 * @throws Error if Bottle is unable to resolve the requested service.
 */
var getNested = function getNested(obj, prop) {
    var service = obj[prop];
    if (service === undefined && Bottle.config.strict) {
        throw new Error('Bottle was unable to resolve a service.  `' + prop + '` is undefined.');
    }
    return service;
};

/**
 * Get a nested bottle. Will set and return if not set.
 *
 * @param String name
 * @return Bottle
 */
var getNestedBottle = function getNestedBottle(name) {
    var bottle;
    if (!this.nested[name]) {
        bottle = Bottle.pop();
        this.nested[name] = bottle;
        this.factory(name, function SubProviderFactory() {
            return bottle.container;
        });
    }
    return this.nested[name];
};

/**
 * Get a service stored under a nested key
 *
 * @param String fullname
 * @return Service
 */
var getNestedService = function getNestedService(fullname) {
    return fullname.split(DELIMITER).reduce(getNested, this);
};

/**
 * Function used by provider to set up middleware for each request.
 *
 * @param Number id
 * @param String name
 * @param Object instance
 * @param Object container
 * @return void
 */
var applyMiddleware = function applyMiddleware(middleware, name, instance, container) {
    var descriptor = {
        configurable : true,
        enumerable : true
    };
    if (middleware.length) {
        descriptor.get = function getWithMiddlewear() {
            var index = 0;
            var next = function nextMiddleware(err) {
                if (err) {
                    throw err;
                }
                if (middleware[index]) {
                    middleware[index++](instance, next);
                }
            };
            next();
            return instance;
        };
    } else {
        descriptor.value = instance;
        descriptor.writable = true;
    }

    Object.defineProperty(container, name, descriptor);

    return container[name];
};

/**
 * Register middleware.
 *
 * @param String name
 * @param Function func
 * @return Bottle
 */
var middleware = function middleware(fullname, func) {
    var parts, name;
    if (typeof fullname === FUNCTION_TYPE) {
        func = fullname;
        fullname = GLOBAL_NAME;
    }

    parts = fullname.split(DELIMITER);
    name = parts.shift();
    if (parts.length) {
        getNestedBottle.call(this, name).middleware(parts.join(DELIMITER), func);
    } else {
        if (!this.middlewares[name]) {
            this.middlewares[name] = [];
        }
        this.middlewares[name].push(func);
    }
    return this;
};

/**
 * Used to process decorators in the provider
 *
 * @param Object instance
 * @param Function func
 * @return Mixed
 */
var reducer = function reducer(instance, func) {
    return func(instance);
};


/**
 * Get decorators and middleware including globals
 *
 * @return array
 */
var getWithGlobal = function getWithGlobal(collection, name) {
    return (collection[name] || []).concat(collection.__global__ || []);
};


/**
 * Create the provider properties on the container
 *
 * @param String name
 * @param Function Provider
 * @return Bottle
 */
var createProvider = function createProvider(name, Provider) {
    var providerName, properties, container, id, decorators, middlewares;

    id = this.id;
    container = this.container;
    decorators = this.decorators;
    middlewares = this.middlewares;
    providerName = name + PROVIDER_SUFFIX;

    properties = Object.create(null);
    properties[providerName] = {
        configurable : true,
        enumerable : true,
        get : function getProvider() {
            var instance = new Provider();
            delete container[providerName];
            container[providerName] = instance;
            return instance;
        }
    };

    properties[name] = {
        configurable : true,
        enumerable : true,
        get : function getService() {
            var provider = container[providerName];
            var instance;
            if (provider) {
                // filter through decorators
                instance = getWithGlobal(decorators, name).reduce(reducer, provider.$get(container));

                delete container[providerName];
                delete container[name];
            }
            return instance === undefined ? instance : applyMiddleware(getWithGlobal(middlewares, name),
                name, instance, container);
        }
    };

    Object.defineProperties(container, properties);
    return this;
};


/**
 * Register a provider.
 *
 * @param String fullname
 * @param Function Provider
 * @return Bottle
 */
var provider = function provider(fullname, Provider) {
    var parts, name;
    parts = fullname.split(DELIMITER);
    if (this.providerMap[fullname] && parts.length === 1 && !this.container[fullname + PROVIDER_SUFFIX]) {
        return console.error(fullname + ' provider already instantiated.');
    }
    this.originalProviders[fullname] = Provider;
    this.providerMap[fullname] = true;

    name = parts.shift();

    if (parts.length) {
        getNestedBottle.call(this, name).provider(parts.join(DELIMITER), Provider);
        return this;
    }
    return createProvider.call(this, name, Provider);
};

/**
 * Register a factory inside a generic provider.
 *
 * @param String name
 * @param Function Factory
 * @return Bottle
 */
var factory = function factory(name, Factory) {
    return provider.call(this, name, function GenericProvider() {
        this.$get = Factory;
    });
};

/**
 * Private helper for creating service and service factories.
 *
 * @param String name
 * @param Function Service
 * @return Bottle
 */
var createService = function createService(name, Service, isClass) {
    var deps = arguments.length > 3 ? slice.call(arguments, 3) : [];
    var bottle = this;
    return factory.call(this, name, function GenericFactory() {
        var serviceFactory = Service; // alias for jshint
        var args = deps.map(getNestedService, bottle.container);

        if (!isClass) {
            return serviceFactory.apply(null, args);
        }
        return new (Service.bind.apply(Service, [null].concat(args)))();
    });
};

/**
 * Register a class service
 *
 * @param String name
 * @param Function Service
 * @return Bottle
 */
var service = function service(name, Service) {
    return createService.apply(this, [name, Service, true].concat(slice.call(arguments, 2)));
};

/**
 * Register a function service
 */
var serviceFactory = function serviceFactory(name, factoryService) {
    return createService.apply(this, [name, factoryService, false].concat(slice.call(arguments, 2)));
};

/**
 * Define a mutable property on the container.
 *
 * @param String name
 * @param mixed val
 * @return void
 * @scope container
 */
var defineValue = function defineValue(name, val) {
    Object.defineProperty(this, name, {
        configurable : true,
        enumerable : true,
        value : val,
        writable : true
    });
};

/**
 * Iterator for setting a plain object literal via defineValue
 *
 * @param Object container
 * @param string name
 */
var setValueObject = function setValueObject(container, name) {
    var nestedContainer = container[name];
    if (!nestedContainer) {
        nestedContainer = {};
        defineValue.call(container, name, nestedContainer);
    }
    return nestedContainer;
};


/**
 * Register a value
 *
 * @param String name
 * @param mixed val
 * @return Bottle
 */
var value = function value(name, val) {
    var parts;
    parts = name.split(DELIMITER);
    name = parts.pop();
    defineValue.call(parts.reduce(setValueObject, this.container), name, val);
    return this;
};

/**
 * Define an enumerable, non-configurable, non-writable value.
 *
 * @param String name
 * @param mixed value
 * @return undefined
 */
var defineConstant = function defineConstant(name, value) {
    Object.defineProperty(this, name, {
        configurable : false,
        enumerable : true,
        value : value,
        writable : false
    });
};

/**
 * Register a constant
 *
 * @param String name
 * @param mixed value
 * @return Bottle
 */
var constant = function constant(name, value) {
    var parts = name.split(DELIMITER);
    name = parts.pop();
    defineConstant.call(parts.reduce(setValueObject, this.container), name, value);
    return this;
};

/**
 * Register decorator.
 *
 * @param String fullname
 * @param Function func
 * @return Bottle
 */
var decorator = function decorator(fullname, func) {
    var parts, name;
    if (typeof fullname === FUNCTION_TYPE) {
        func = fullname;
        fullname = GLOBAL_NAME;
    }

    parts = fullname.split(DELIMITER);
    name = parts.shift();
    if (parts.length) {
        getNestedBottle.call(this, name).decorator(parts.join(DELIMITER), func);
    } else {
        if (!this.decorators[name]) {
            this.decorators[name] = [];
        }
        this.decorators[name].push(func);
    }
    return this;
};

/**
 * Register a function that will be executed when Bottle#resolve is called.
 *
 * @param Function func
 * @return Bottle
 */
var defer = function defer(func) {
    this.deferred.push(func);
    return this;
};


/**
 * Immediately instantiates the provided list of services and returns them.
 *
 * @param Array services
 * @return Array Array of instances (in the order they were provided)
 */
var digest = function digest(services) {
    return (services || []).map(getNestedService, this.container);
};

/**
 * Register an instance factory inside a generic factory.
 *
 * @param {String} name - The name of the service
 * @param {Function} Factory - The factory function, matches the signature required for the
 * `factory` method
 * @return Bottle
 */
var instanceFactory = function instanceFactory(name, Factory) {
    return factory.call(this, name, function GenericInstanceFactory(container) {
        return {
            instance : Factory.bind(Factory, container)
        };
    });
};

/**
 * A filter function for removing bottle container methods and providers from a list of keys
 */
var byMethod = function byMethod(name) {
    return !/^\$(?:decorator|register|list)$|Provider$/.test(name);
};

/**
 * List the services registered on the container.
 *
 * @param Object container
 * @return Array
 */
var list = function list(container) {
    return Object.keys(container || this.container || {}).filter(byMethod);
};

/**
 * Named bottle instances
 *
 * @type Object
 */
var bottles = {};

/**
 * Get an instance of bottle.
 *
 * If a name is provided the instance will be stored in a local hash.  Calling Bottle.pop multiple
 * times with the same name will return the same instance.
 *
 * @param String name
 * @return Bottle
 */
var pop = function pop(name) {
    var instance;
    if (typeof name === STRING_TYPE) {
        instance = bottles[name];
        if (!instance) {
            bottles[name] = instance = new Bottle();
            instance.constant('BOTTLE_NAME', name);
        }
        return instance;
    }
    return new Bottle();
};

/**
 * Clear all named bottles.
 */
var clear = function clear(name) {
    if (typeof name === STRING_TYPE) {
        delete bottles[name];
    } else {
        bottles = {};
    }
};

/**
 * Register a service, factory, provider, or value based on properties on the object.
 *
 * properties:
 *  * Obj.$name   String required ex: `'Thing'`
 *  * Obj.$type   String optional 'service', 'factory', 'provider', 'value'.  Default: 'service'
 *  * Obj.$inject Mixed  optional only useful with $type 'service' name or array of names
 *  * Obj.$value  Mixed  optional Normally Obj is registered on the container.  However, if this
 *                       property is included, it's value will be registered on the container
 *                       instead of the object itsself.  Useful for registering objects on the
 *                       bottle container without modifying those objects with bottle specific keys.
 *
 * @param Function Obj
 * @return Bottle
 */
var register = function register(Obj) {
    var value = Obj.$value === undefined ? Obj : Obj.$value;
    return this[Obj.$type || 'service'].apply(this, [Obj.$name, value].concat(Obj.$inject || []));
};

/**
 * Deletes providers from the map and container.
 *
 * @param String name
 * @return void
 */
var removeProviderMap = function resetProvider(name) {
    delete this.providerMap[name];
    delete this.container[name];
    delete this.container[name + PROVIDER_SUFFIX];
};

/**
 * Resets providers on a bottle instance. If 'names' array is provided, only the named providers will be reset.
 *
 * @param Array names
 * @return void
 */
var resetProviders = function resetProviders(names) {
    var tempProviders = this.originalProviders;
    var shouldFilter = Array.isArray(names);

    Object.keys(this.originalProviders).forEach(function resetProvider(originalProviderName) {
        if (shouldFilter && names.indexOf(originalProviderName) === -1) {
            return;
        }
        var parts = originalProviderName.split(DELIMITER);
        if (parts.length > 1) {
            parts.forEach(removeProviderMap, getNestedBottle.call(this, parts[0]));
        }
        removeProviderMap.call(this, originalProviderName);
        this.provider(originalProviderName, tempProviders[originalProviderName]);
    }, this);
};


/**
 * Execute any deferred functions
 *
 * @param Mixed data
 * @return Bottle
 */
var resolve = function resolve(data) {
    this.deferred.forEach(function deferredIterator(func) {
        func(data);
    });

    return this;
};


/**
 * Bottle constructor
 *
 * @param String name Optional name for functional construction
 */
Bottle = function Bottle(name) {
    if (!(this instanceof Bottle)) {
        return Bottle.pop(name);
    }

    this.id = id++;

    this.decorators = {};
    this.middlewares = {};
    this.nested = {};
    this.providerMap = {};
    this.originalProviders = {};
    this.deferred = [];
    this.container = {
        $decorator : decorator.bind(this),
        $register : register.bind(this),
        $list : list.bind(this)
    };
};

/**
 * Bottle prototype
 */
Bottle.prototype = {
    constant : constant,
    decorator : decorator,
    defer : defer,
    digest : digest,
    factory : factory,
    instanceFactory: instanceFactory,
    list : list,
    middleware : middleware,
    provider : provider,
    resetProviders : resetProviders,
    register : register,
    resolve : resolve,
    service : service,
    serviceFactory : serviceFactory,
    value : value
};

/**
 * Bottle static
 */
Bottle.pop = pop;
Bottle.clear = clear;
Bottle.list = list;

/**
 * Global config
 */
Bottle.config = {
    strict : false
};

export default Bottle