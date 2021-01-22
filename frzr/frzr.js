(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.frzr = global.frzr || {})));
}(this, (function (exports) { 'use strict';

function text (str) {
  return document.createTextNode(str || '');
}

var customElements;
var customAttributes;

var slice = Array.prototype.slice;

function el (tagName, a, b, c) {
  var len = arguments.length;

  if (customElements && tagName in customElements) {
    var customElement = customElements[tagName];

    return len === 1 ? customElement(tagName)
         : len === 2 ? customElement(tagName, a)
         : len === 3 ? customElement(tagName, a, b)
         : len === 4 ? customElement(tagName, a, b, c)
         :             customElement.apply(this, slice.call(arguments));
  }

  if (typeof tagName === 'function') {
    return len === 1 ? new tagName()
         : len === 2 ? new tagName(a)
         : len === 3 ? new tagName(a, b)
         : len === 4 ? new tagName(a, b, c)
         :             new (tagName.bind.apply(tagName, slice.call(arguments)));
  }

  var element = document.createElement(tagName);
  var isEmpty = true;

  for (var i = 1; i < len; i++) {
    var arg = arguments[i];
    if (arg == null) continue;

    if (isEmpty && (typeof arg === 'string' || typeof arg === 'number')) {
      element.textContent = arg;
      isEmpty = false;
      continue;
    }

    if (mount(element, arg)) {
      isEmpty = false;
      continue;
    }

    for (var attr in arg) {
      if (attr in element && attr !== 'style') {
        element[attr] = arg[attr];
      } else if (customAttributes && attr in customAttributes) {
        customAttributes[attr](element, arg[attr]);
      } else {
        element.setAttribute(attr, arg[attr]);
      }
    }
  }

  return element;
}

el.extend = function (tagName) {
  return el.bind(this, tagName);
}

function registerElement (tagName, handler) {
  (customElements || (customElements = {}))[tagName] = handler;
}

function registerAttribute (attr, handler) {
  (customAttributes || (customAttributes = {}))[attr] = handler;
}

function unregisterElement (tagName) {
  if (customElements && customElements[tagName]) {
    delete customElements[tagName];
  }
}

function unregisterAttribute (attr) {
  if (customAttributes && customAttributes[attr]) {
    delete customAttributes[attr];
  }
}

function svg (tagName) {
  var element = document.createElementNS('http://www.w3.org/2000/svg', tagName);

  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];

    if (arg == null) {
      continue;
    } else if (mount(element, arg)) {
      continue;
    } else if (typeof arg === 'object') {
      for (var attr in arg) {
        var value = arg[attr];

        if (typeof value === 'function') {
          element[attr] = value;
        } else {
          element.setAttribute(attr, value);
        }
      }
    }
  }

  return element;
}

svg.extend = function (tagName) {
  return function () {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return svg.apply(this, [tagName].concat(args));
  }
}

function list (View, key, initData, skipRender) {
  return new List(View, key, initData, skipRender);
}

function List (View, key, initData, skipRender) {
  this.View = View;
  this.views = [];
  this.initData = initData;
  this.skipRender = skipRender;

  if (key) {
    this.key = key;
    this.lookup = {};
  }
}

List.prototype.update = function (data, cb) {
  var View = this.View;
  var views = this.views;
  var parent = this.parent;
  var key = this.key;
  var initData = this.initData;
  var skipRender = this.skipRender;

  if (cb) {
    var added = [];
    var updated = [];
    var removed = [];
  }

  if (key) {
    var lookup = this.lookup;
    var newLookup = {};

    views.length = data.length;

    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var id = item[key];
      var view = lookup[id];

      if (!view) {
        view = new View(initData, item, i);
        cb && added.push(view);
      } else {
        cb && updated.push(view);
      }

      views[i] = newLookup[id] = view;

      view.update && view.update(item, i);
    }

    if (cb) {
      for (var id in lookup) {
        if (!newLookup[id]) {
          removed.push(lookup[id]);
          !skipRender && parent && destroy(lookup[id]);
        }
      }
    }

    this.lookup = newLookup;
  } else {
    if (cb) {
      for (var i = data.length; i < views.length; i++) {
        var view = views[i];

        !skipRender && parent && destroy(view);
        removed.push(view);
      }
    }

    views.length = data.length;

    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var view = views[i];

      if (!view) {
        view = new View(initData, item, i);
        cb && added.push(view);
      } else {
        cb && updated.push(view);
      }

      view.update && view.update(item, i);
      views[i] = view;
    }
  }

  !skipRender && parent && setChildren(parent, views);
  cb && cb(added, updated, removed);
}

function append (parent, child, before) {
  if (before) {
    parent.insertBefore(child, before.el || before);
  } else {
    parent.appendChild(child);
  }
}

function mount (parent, child, before) {
  var parentEl = parent.el || parent;
  var type = child && child.constructor;

  if (type === String || type === Number) {
    append(parentEl, text(child), before);
    return true;

  } else if (type === Array) {
    for (var i = 0; i < child.length; i++) {
      mount(parent, child[i], before);
    }
    return true;
  }

  var childEl = child.el || child;
  var childWasMounted = childEl.parentNode != null;

  if (childWasMounted) {
    child.remounting && child.remounting();
  } else {
    child.mounting && child.mounting();
  }

  if (childEl.nodeType) {
    append(parentEl, childEl, before);

    if (childEl !== child) {
      if (childWasMounted) {
        child.remounted && child.remounted();
      } else {
        child.mounted && child.mounted();
      }

      childEl.view = child;
      child.parent = parent;
    }

  } else if (child.views) {
    child.parent = parent;
    setChildren(parentEl, child.views);

  } else {
    return false;
  }
  return true;
}

var mountBefore = mount;

function replace (parent, child, replace) {
  var parentEl = parent.el || parent;
  var childEl = child.el || child;
  var replaceEl = replace.el || replace;
  var childWasMounted = childEl.parentNode != null;

  replace.unmounting && replace.unmounting();

  if (childWasMounted) {
    child.remounting && child.remounting();
  } else {
    child.mounting && child.mounting();
  }

  parentEl.replaceChild(childEl, replaceEl);

  replace.unmounted && replace.unmounted();

  if (replaceEl !== replace) {
    replace.parent = null;
  }

  if (childWasMounted) {
    child.remounted && child.remounted();
  } else {
    child.mounted && child.mounted();
  }
  if (childEl !== child) {
    childEl.view = child;
    child.parent = parent;
  }
}

function unmount (parent, child) {
  var parentEl = parent.el || parent;
  var childEl = child.el || child;

  child.unmounting && child.unmounting();

  parentEl.removeChild(childEl);

  child.unmounted && child.unmounted();

  if (childEl !== child) {
    child.parent = null;
  }
}

function destroy (child) {
  var childEl = child.el || child;
  var parent = childEl.parentNode;
  var parentView = parent.view || parent;

  child.destroying && child.destroying(child);
  notifyDown(child, 'destroying');
  parent && unmount(parentView, child);
  child.destroyed && child.destroyed(child);
  notifyDown(child, 'destroyed');
}

function notifyDown (child, eventName, originalChild) {
  var childEl = child.el || child;
  var traverse = childEl.firstChild;

  while (traverse) {
    var next = traverse.nextSibling;
    var view = traverse.view || traverse;
    var event = view[eventName];

    event && event.call(view, originalChild || child);
    notifyDown(traverse, eventName, originalChild || child);

    traverse = next;
  }
}

function setChildren (parent, children) {
  var parentEl = parent.el || parent;
  var traverse = parentEl.firstChild;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (!child) {
      continue;
    }
    var childEl = child.el || child;

    if (traverse === childEl) {
      traverse = traverse.nextSibling;
      continue;
    }

    mount(parent, child, traverse);
  }

  while (traverse) {
    var next = traverse.nextSibling;

    unmount(parent, traverse.view || traverse);

    traverse = next;
  }
}

exports.text = text;
exports.el = el;
exports.registerElement = registerElement;
exports.registerAttribute = registerAttribute;
exports.unregisterElement = unregisterElement;
exports.unregisterAttribute = unregisterAttribute;
exports.svg = svg;
exports.list = list;
exports.List = List;
exports.mount = mount;
exports.mountBefore = mountBefore;
exports.replace = replace;
exports.unmount = unmount;
exports.destroy = destroy;
exports.notifyDown = notifyDown;
exports.setChildren = setChildren;

Object.defineProperty(exports, '__esModule', { value: true });

})));