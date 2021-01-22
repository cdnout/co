"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* ========================================================================
 * Phonon: popovers.js v0.0.5
 * http://phonon.quarkdev.com
 * ========================================================================
 * Licensed under MIT (http://phonon.quarkdev.com)
 * ======================================================================== */
(function (window, phonon) {
  var touchMove = false;
  var previousPopover = null;
  var isOpened = false;
  var backdrop = document.createElement('div');
  backdrop.classList.add('backdrop-popover');
  var onChangeCallbacks = [];

  var findPopover = function findPopover(target) {
    for (; target && target !== document; target = target.parentNode) {
      if (target.classList.contains('popover')) {
        return target;
      }
    }

    return null;
  };

  var findTrigger = function findTrigger(target) {
    var res = {
      target: null,
      id: null,
      direction: null
    };

    for (; target && target !== document; target = target.parentNode) {
      var id = target.getAttribute('data-popover-id');

      if (id !== null) {
        res.target = target;
        res.id = id;
        res.direction = 'left';

        if (!target.classList.contains('title') && target.classList.contains('pull-left')) {
          res.direction = 'left'; // button with pull-left
        } else if (!target.classList.contains('title') && target.parentNode.classList.contains('pull-left')) {
          res.direction = 'left'; // button with parent pull-left
        } else if (target.classList.contains('title') && target.classList.contains('pull-left')) {
          res.direction = 'title-left'; // title with pull-left
        } else if (target.parentNode && target.parentNode.classList.contains('pull-left') && target.classList.contains('title')) {
          res.direction = 'title-left'; // title with parent pull-left
        } else if (target.classList.contains('pull-right')) {
          res.direction = 'right'; // button with pull-right
        } else if (target.parentNode && target.parentNode.classList.contains('pull-right')) {
          res.direction = 'right'; // button with parent pull-right
        } else if (target.classList.contains('center')) {
          res.direction = 'title'; // title with center
        } else if (target.parentNode && target.parentNode.classList.contains('center')) {
          res.direction = 'title'; // title with parent center
        } else {
          res.direction = 'button';
        }

        break;
      }
    }

    return res;
  };

  var onPopover = function onPopover(target) {
    for (; target && target !== document; target = target.parentNode) {
      if (target.classList.contains('popover') && target.classList.contains('active')) {
        return target;
      }
    }

    return false;
  };

  var onItem = function onItem(target) {
    for (; target && target !== document; target = target.parentNode) {
      if (target === previousPopover) {
        return true;
      }
    }

    return false;
  };

  var _setActiveItem = function setActiveItem(popover, value, text) {
    popover.setAttribute('data-value', value);
    popover.setAttribute('data-text', text);
  };

  document.on(phonon.event.start, function (e) {
    e = e.originalEvent || e;

    if (!onPopover(e.target) && isOpened) {
      _close(previousPopover);
    }

    touchMove = false;
  });
  document.on(phonon.event.move, function (e) {
    e = e.originalEvent || e;
    touchMove = true;
  });
  document.on(phonon.event.end, function (evt) {
    var _evt = evt,
        target = _evt.target;
    var trigger = findTrigger(target);
    var popover = document.querySelector("#".concat(trigger.id));

    if (trigger.target && popover) {
      if (popover.classList.contains('active') && !touchMove) {
        _close(popover);
      } else if (trigger.direction === 'button') {
        _openFrom(popover, trigger.target);
      } else {
        _open(popover, trigger.direction);
      }
    } // fix


    if (target.parentNode === null) {
      return;
    }

    if (onItem(target) && !touchMove) {
      _close(previousPopover);

      var text = target.innerText || target.textContent;
      var value = target.getAttribute('data-value');
      var changeData = {
        text: text,
        value: value,
        target: evt.target
      };
      var srcPopover = findPopover(target);

      _setActiveItem(srcPopover, value, text);

      evt = new CustomEvent('itemchanged', {
        detail: changeData,
        bubbles: true,
        cancelable: true
      });
      var triggers = document.querySelectorAll("[data-popover-id=\"".concat(previousPopover.id, "\"]"));
      var i = triggers.length - 1;

      for (; i >= 0; i--) {
        var trigger = triggers[i];

        if (trigger.getAttribute('data-autobind') === 'true') {
          if (!('textContent' in trigger)) {
            trigger.innerText = target.innerText;
          } else {
            trigger.textContent = target.textContent;
          }
        }
      }

      previousPopover.dispatchEvent(evt);

      for (var i = 0; i < onChangeCallbacks.length; i++) {
        var o = onChangeCallbacks[i];

        if (o.id === previousPopover.getAttribute('id')) {
          o.callback(changeData); // do not stop loop, maybe there are many callbacks
        }
      }
    }
  });

  function onHide() {
    var page = document.querySelector('.app-active');

    if (page.querySelector('div.backdrop-popover') !== null) {
      page.removeChild(backdrop);
    }

    previousPopover.style.visibility = 'hidden';
    previousPopover.style.display = 'none';

    if (previousPopover.getAttribute('data-virtual') === 'true') {
      // remove from DOM
      document.body.removeChild(previousPopover);
    }

    previousPopover = null;
  }

  function buildPopover() {
    var popover = document.createElement('div');
    popover.classList.add('popover');
    popover.setAttribute('id', generateId());
    popover.setAttribute('data-virtual', 'true');
    document.body.appendChild(popover);
    return document.body.lastChild;
  }

  function buildListItem(item) {
    var text = typeof item === 'string' ? item : item.text;
    var value = typeof item === 'string' ? item : item.value;
    return "<li><a class=\"padded-list\" data-value=\"".concat(value, "\">").concat(text, "</a></li>");
  }
  /**
   * Public API
  */


  function _setList(popover, data, customItemBuilder) {
    if (!(data instanceof Array)) {
      throw new Error("The list of the popover must be an array, ".concat(_typeof(data), " given"));
    }

    var list = '<ul class="list">';
    var itemBuilder = buildListItem;

    if (typeof customItemBuilder === 'function') {
      itemBuilder = customItemBuilder;
    }

    for (var i = 0; i < data.length; i++) {
      list += itemBuilder(data[i]);
    }

    list += '</ul>';
    popover.innerHTML = list;
  }

  function generateId() {
    var text = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz';
    var i = 0;

    for (; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  function openable(popover) {
    if (!popover.classList.contains('active')) {
      isOpened = true;
      previousPopover = popover;
      popover.style.display = 'block';
      window.setTimeout(function () {
        popover.style.visibility = 'visible';
        popover.classList.add('active');
      }, 10); // Reset the scroll state

      popover.querySelector('ul').scrollTop = 0; // add backdrop

      document.querySelector('.app-page.app-active').appendChild(backdrop);
      return true;
    }

    return false;
  }

  function _openFrom(popover, trigger, options) {
    var page = document.querySelector('.app-page.app-active');
    trigger = typeof trigger === 'string' ? page.querySelector(trigger) : trigger;

    if (trigger === null) {
      throw new Error('The trigger for the popover does not exists');
    }

    if (!openable(popover)) return;
    var rect = trigger.getBoundingClientRect();
    var width = options && options.width ? options.width : trigger.clientWidth;
    var top = rect.top;
    var left = rect.left;

    if (options && options.direction) {
      var deltaLeft = (trigger.clientWidth - width) / 2;
      var deltaTop = 0;
      var margin = options.margin ? options.margin : 0;
      var directions = options.direction.split(' ');

      for (var i = 0; i < directions.length; i++) {
        if (directions[i] === 'left') {
          deltaLeft = -width - margin;
        } else if (directions[i] === 'right') {
          deltaLeft = trigger.clientWidth + margin;
        } else if (directions[i] === 'top') {
          deltaTop = -popover.clientHeight - margin;
        } else if (directions[i] === 'bottom') {
          deltaTop = trigger.clientHeight + margin;
        }
      }

      left += deltaLeft;
      top += deltaTop;
    }

    popover.style.top = "".concat(top, "px");
    popover.style.left = "".concat(left, "px");
    popover.style.width = "".concat(width, "px");
  }

  function _open(popover, direction) {
    if (typeof direction === 'undefined') {
      direction = 'left';
    }

    if (openable(popover)) {
      var page = document.querySelector('.app-page.app-active');
      var pageStyle = page.currentStyle || window.getComputedStyle(page);

      if (direction === 'title' || direction === 'title-left') {
        var hb = page.querySelector('.header-bar');
        popover.style.top = "".concat(hb.offsetHeight, "px");

        if (direction === 'title') {
          popover.style.left = "".concat(hb.clientWidth / 2 + parseInt(pageStyle.marginLeft) - popover.clientWidth / 2, "px");
        } else {
          popover.style.left = "".concat(16 + parseInt(pageStyle.marginLeft), "px");
        }
      } else if (direction === 'left' || direction === 'right') {
        popover.style.top = '12px';

        if (direction === 'left') {
          popover.style.left = "".concat(16 + parseInt(pageStyle.marginLeft), "px");
        } else {
          popover.style.left = 'auto';
          popover.style.right = '16px';
        }
      }
    }
  }

  function _close(popover) {
    isOpened = false;
    previousPopover = popover;

    if (popover.classList.contains('active')) {
      popover.classList.toggle('active');
      window.setTimeout(function () {
        onHide();
      }, 250);
    }
  }

  function closeActive() {
    var closable = !!previousPopover;

    if (closable) {
      _close(previousPopover);
    }

    return closable;
  }

  function _attachButton(popover, button, autoBind) {
    var button = typeof button === 'string' ? document.querySelector(button) : button;

    if (button === null) {
      throw new Error('The button does not exists');
    }

    var popoverId = popover.getAttribute('id');
    button.setAttribute('data-popover-id', popoverId);

    if (autoBind === true) {
      button.setAttribute('data-autobind', true);
    }
  }

  function getInstance(popover) {
    return {
      setList: function setList(list, itemBuilder) {
        _setList(popover, list, itemBuilder);

        return this;
      },
      open: function open(direction) {
        _open(popover, direction);

        return this;
      },
      openFrom: function openFrom(trigger, options) {
        _openFrom(popover, trigger, options);

        return this;
      },
      close: function close() {
        _close(popover);

        return this;
      },
      onItemChanged: function onItemChanged(callback) {
        onChangeCallbacks.push({
          id: popover.getAttribute('id'),
          callback: callback
        });
        return this;
      },
      attachButton: function attachButton(button, autoBind) {
        _attachButton(popover, button, autoBind);

        return this;
      },
      setActiveItem: function setActiveItem() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        _setActiveItem(popover, value, text);
      },
      getActiveItem: function getActiveItem() {
        var activeData = {
          text: popover.getAttribute('data-text'),
          value: popover.getAttribute('data-value'),
          target: popover
        };
        return activeData;
      }
    };
  }

  phonon.popover = function (el) {
    if (typeof el === 'string' && el === '_caller') {
      return getInstance();
    }

    if (typeof el === 'undefined') {
      return getInstance(buildPopover());
    }

    var popover = typeof el === 'string' ? document.querySelector(el) : el;

    if (popover === null) {
      throw new Error("The popover with ID ".concat(el, " does not exists"));
    }

    return getInstance(popover);
  };

  phonon.popoverUtil = {
    closeActive: closeActive
  };
  window.phonon = phonon;

  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = phonon.popover;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return phonon.popover;
    });
  }
})(typeof window !== 'undefined' ? window : void 0, window.phonon || {});