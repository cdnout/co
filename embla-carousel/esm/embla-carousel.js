function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Alignment(params) {
  var viewSize = params.viewSize,
      align = params.align;
  var predefined = {
    start: start,
    center: center,
    end: end
  };

  function start() {
    return 0;
  }

  function center(n) {
    return (viewSize - n) / 2;
  }

  function end(n) {
    return viewSize - n;
  }

  function percent() {
    return viewSize * Number(align);
  }

  function measure(n) {
    if (typeof align === 'number') return percent();
    return predefined[align](n);
  }

  var self = {
    measure: measure
  };
  return self;
}

function Animation(callback) {
  var run = requestAnimationFrame.bind(window);
  var end = cancelAnimationFrame.bind(window);
  var animationFrame = 0;

  function ifAnimating(active, cb) {
    return function () {
      if (active === !!animationFrame) cb();
    };
  }

  function start() {
    animationFrame = run(callback);
  }

  function stop() {
    end(animationFrame);
    animationFrame = 0;
  }

  var self = {
    proceed: ifAnimating(true, start),
    start: ifAnimating(false, start),
    stop: ifAnimating(true, stop)
  };
  return self;
}

function Axis(axis) {
  var scroll = axis === 'y' ? 'y' : 'x';
  var cross = axis === 'y' ? 'x' : 'y';

  function measure(node) {
    var _a = node.getBoundingClientRect(),
        width = _a.width,
        height = _a.height;

    return scroll === 'x' ? width : height;
  }

  var self = {
    cross: cross,
    measure: measure,
    scroll: scroll
  };
  return self;
}

function Counter(params) {
  var start = params.start,
      limit = params.limit,
      loop = params.loop;
  var min = limit.min,
      max = limit.max;
  var type = loop ? 'loop' : 'constrain';
  var counter = withinLimit(start);

  function get() {
    return counter;
  }

  function set(n) {
    counter = withinLimit(n);
    return self;
  }

  function withinLimit(n) {
    return limit[type](n);
  }

  function add(n) {
    if (n !== 0) {
      var sign = n / Math.abs(n);
      set(get() + sign);
      return add(n + sign * -1);
    }

    return self;
  }

  function clone() {
    return Counter({
      start: get(),
      limit: limit,
      loop: loop
    });
  }

  var self = {
    add: add,
    clone: clone,
    get: get,
    max: max,
    min: min,
    set: set
  };
  return self;
}

function Vector1D(value) {
  var vector = value;

  function get() {
    return vector;
  }

  function set(n) {
    vector = readNumber(n);
    return self;
  }

  function add(n) {
    vector += readNumber(n);
    return self;
  }

  function subtract(n) {
    vector -= readNumber(n);
    return self;
  }

  function multiply(n) {
    vector *= n;
    return self;
  }

  function divide(n) {
    vector /= n;
    return self;
  }

  function normalize() {
    if (vector !== 0) divide(vector);
    return self;
  }

  function readNumber(n) {
    return typeof n === 'number' ? n : n.get();
  }

  var self = {
    add: add,
    divide: divide,
    get: get,
    multiply: multiply,
    normalize: normalize,
    set: set,
    subtract: subtract
  };
  return self;
}

function Direction(value) {
  var direction = Vector1D(normalize(value));
  var get = direction.get;

  function normalize(n) {
    return n === 0 ? 0 : n / Math.abs(n);
  }

  function set(v) {
    var d = normalize(v.get());
    if (d !== 0) direction.set(d);
    return self;
  }

  var self = {
    get: get,
    set: set
  };
  return self;
}

function EventStore() {
  var listeners = [];

  function add(node, type, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(type, handler, options);
    listeners.push(function () {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }

  function removeAll() {
    listeners.filter(function (remove) {
      return remove();
    });
    listeners.length = 0;
    return self;
  }

  var self = {
    add: add,
    removeAll: removeAll
  };
  return self;
}

function DragHandler(params) {
  var target = params.target,
      scrollBody = params.scrollBody,
      dragFree = params.dragFree,
      animation = params.animation,
      axis = params.axis;
  var element = params.element,
      dragTracker = params.dragTracker,
      location = params.location,
      events = params.events,
      limit = params.limit;
  var scrollAxis = axis.scroll,
      crossAxis = axis.cross;
  var focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  var startScroll = Vector1D(0);
  var startCross = Vector1D(0);
  var dragStartPoint = Vector1D(0);
  var activationEvents = EventStore();
  var interactionEvents = EventStore();
  var removeActivationEvents = activationEvents.removeAll;
  var removeInteractionEvents = interactionEvents.removeAll;
  var snapForceBoost = {
    mouse: 2.5,
    touch: 3.5
  };
  var freeForceBoost = {
    mouse: 4,
    touch: 7
  };
  var snapSpeed = {
    mouse: 12,
    touch: 14
  };
  var freeSpeed = {
    mouse: 6,
    touch: 5
  };
  var dragThreshold = 4;
  var pointerIsDown = false;
  var preventScroll = false;
  var preventClick = false;
  var isMouse = false;

  function addActivationEvents() {
    var node = element;
    activationEvents.add(node, 'touchmove', function () {
      return undefined;
    }).add(node, 'touchend', function () {
      return undefined;
    }).add(node, 'touchstart', down).add(node, 'mousedown', down).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click);
  }

  function addInteractionEvents() {
    var node = !isMouse ? element : document;
    interactionEvents.add(node, 'touchmove', move).add(node, 'touchend', up).add(node, 'mousemove', move).add(node, 'mouseup', up);
  }

  function isFocusNode(node) {
    var name = node.nodeName || '';
    return focusNodes.indexOf(name) > -1;
  }

  function movementSpeed() {
    var speed = dragFree ? freeSpeed : snapSpeed;
    var type = isMouse ? 'mouse' : 'touch';
    return speed[type];
  }

  function dragForceBoost() {
    var boost = dragFree ? freeForceBoost : snapForceBoost;
    var type = isMouse ? 'mouse' : 'touch';
    return boost[type];
  }

  function seekTargetBy(force) {
    var scrollTo = params.scrollTo,
        scrollTarget = params.scrollTarget,
        index = params.index;
    var reachedLimit = limit.reachedAny(target.get() + force);
    var currentLocation = scrollTarget.byDistance(0, false);
    var targetChanged = currentLocation.index !== index.get();
    var seekNext = !targetChanged && Math.abs(force) > dragThreshold;

    if (!dragFree && !reachedLimit && seekNext) {
      var indexDiff = Direction(force).get() * -1;
      var next = index.clone().add(indexDiff);
      scrollTo.index(next.get(), 0);
    } else {
      scrollTo.distance(force, !dragFree);
    }
  }

  function down(evt) {
    isMouse = evt.type === 'mousedown';
    if (isMouse && evt.button !== 0) return;
    var isMoving = delta(target.get(), location.get()) >= 2;
    var clearPreventClick = isMouse || !isMoving;
    var isNotFocusNode = !isFocusNode(evt.target);
    var preventDefault = isMoving || isMouse && isNotFocusNode;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    dragStartPoint.set(target);
    target.set(location);
    scrollBody.useDefaultMass().useSpeed(80);
    addInteractionEvents();
    startScroll.set(dragTracker.readPoint(evt, scrollAxis));
    startCross.set(dragTracker.readPoint(evt, crossAxis));
    events.emit('pointerDown');
    if (clearPreventClick) preventClick = false;
    if (preventDefault) evt.preventDefault();
  }

  function move(evt) {
    if (!preventScroll && !isMouse) {
      var moveScroll = dragTracker.readPoint(evt, scrollAxis).get();
      var moveCross = dragTracker.readPoint(evt, crossAxis).get();
      var diffScroll = delta(moveScroll, startScroll.get());
      var diffCross = delta(moveCross, startCross.get());
      preventScroll = diffScroll > diffCross;
      if (!preventScroll && !preventClick) return up();
    }

    var diff = dragTracker.pointerMove(evt);
    var reachedLimit = limit.reachedAny(location.get());
    var resist = !params.loop && reachedLimit ? 2 : 1;
    if (!preventClick && diff) preventClick = true;
    animation.start();
    target.add(diff / resist);
    evt.preventDefault();
  }

  function up() {
    var force = dragTracker.pointerUp() * dragForceBoost();
    var isMoving = delta(target.get(), dragStartPoint.get()) >= 0.5;
    if (isMoving && !isMouse) preventClick = true;
    isMouse = false;
    preventScroll = false;
    pointerIsDown = false;
    interactionEvents.removeAll();
    scrollBody.useSpeed(movementSpeed());
    seekTargetBy(force);
    events.emit('pointerUp');
  }

  function delta(pointB, pointA) {
    return Math.abs(pointB - pointA);
  }

  function click(evt) {
    if (preventClick) evt.preventDefault();
  }

  function clickAllowed() {
    return !preventClick;
  }

  function pointerDown() {
    return pointerIsDown;
  }

  var self = {
    addActivationEvents: addActivationEvents,
    clickAllowed: clickAllowed,
    pointerDown: pointerDown,
    removeActivationEvents: removeActivationEvents,
    removeInteractionEvents: removeInteractionEvents
  };
  return self;
}

function DragTracker(params) {
  var axis = params.axis,
      pxToPercent = params.pxToPercent;
  var scrollAxis = axis.scroll;
  var coords = {
    x: 'clientX',
    y: 'clientY'
  };
  var startDrag = Vector1D(0);
  var diffDrag = Vector1D(0);
  var lastDrag = Vector1D(0);
  var pointValue = Vector1D(0);
  var trackInterval = 10;
  var trackPoints = [];
  var trackTime = new Date().getTime();
  var isMouse = false;

  function readPoint(evt, type) {
    isMouse = !evt.touches;
    var c = coords[type];
    var value = isMouse ? evt[c] : evt.touches[0][c];
    return pointValue.set(value);
  }

  function pointerDown(evt) {
    var point = readPoint(evt, scrollAxis);
    startDrag.set(point);
    lastDrag.set(point);
    return pxToPercent.measure(startDrag.get());
  }

  function pointerMove(evt) {
    var point = readPoint(evt, scrollAxis);
    var time2 = new Date().getTime();
    var time1 = trackTime;

    if (time2 - time1 >= trackInterval) {
      trackPoints.push(point.get());
      trackTime = time2;
    }

    diffDrag.set(point).subtract(lastDrag);
    lastDrag.set(point);
    return pxToPercent.measure(diffDrag.get());
  }

  function pointerUp() {
    var currentPoint = lastDrag.get();
    var trackLength = isMouse ? 5 : 4;
    var point = trackPoints.slice(-trackLength).map(function (trackPoint) {
      return currentPoint - trackPoint;
    }).sort(function (p1, p2) {
      return Math.abs(p1) < Math.abs(p2) ? 1 : -1;
    })[0];
    lastDrag.set(point || 0);
    trackPoints = [];
    return pxToPercent.measure(lastDrag.get());
  }

  var self = {
    pointerDown: pointerDown,
    pointerMove: pointerMove,
    pointerUp: pointerUp,
    readPoint: readPoint
  };
  return self;
}

function Limit(params) {
  var min = params.min,
      max = params.max;
  var loopLimits = {
    min: max,
    max: min
  };
  var constrainLimits = {
    min: min,
    max: max
  };
  var length = Math.abs(min - max);

  function reachedMin(n) {
    return n < min;
  }

  function reachedMax(n) {
    return n > max;
  }

  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }

  function reachedWhich(n) {
    if (reachedMin(n)) return 'min';
    if (reachedMax(n)) return 'max';
    return '';
  }

  function removeOffset(n) {
    if (min === max) return n;

    while (reachedMin(n)) {
      n += length;
    }

    while (reachedMax(n)) {
      n -= length;
    }

    return n;
  }

  function loop(n) {
    var which = reachedWhich(n);
    return which ? loopLimits[which] : n;
  }

  function constrain(n) {
    var which = reachedWhich(n);
    return which ? constrainLimits[which] : n;
  }

  var self = {
    constrain: constrain,
    length: length,
    loop: loop,
    max: max,
    min: min,
    reachedAny: reachedAny,
    reachedMax: reachedMax,
    reachedMin: reachedMin,
    removeOffset: removeOffset
  };
  return self;
}

function PxToPercent(viewInPx) {
  var totalPercent = 100;

  function measure(n) {
    return n / viewInPx * totalPercent;
  }

  var self = {
    measure: measure,
    totalPercent: totalPercent
  };
  return Object.freeze(self);
}

function map(value, iStart, iStop, oStart, oStop) {
  return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart));
}
function arrayFromCollection(nodeList) {
  return Array.prototype.slice.call(nodeList);
}
function debounce(callback, time) {
  var timeout = {
    id: 0
  };
  return function () {
    window.clearTimeout(timeout.id);
    timeout.id = window.setTimeout(callback, time) || 0;
  };
}
function roundToDecimals(decimalPoints) {
  var pow = Math.pow(10, decimalPoints);
  return function (n) {
    return Math.round(n * pow) / pow;
  };
}
function groupArray(array, size) {
  var groups = [];

  for (var i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
}
function arrayKeys(array) {
  return Object.keys(array).map(Number);
}
function removeClass(node, className) {
  var cl = node.classList;
  if (cl.contains(className)) cl.remove(className);
}
function addClass(node, className) {
  var cl = node.classList;
  if (!cl.contains(className)) cl.add(className);
}

function ScrollBody(params) {
  var location = params.location,
      speed = params.speed,
      mass = params.mass;
  var roundToTwoDecimals = roundToDecimals(2);
  var velocity = Vector1D(0);
  var acceleration = Vector1D(0);
  var attraction = Vector1D(0);
  var direction = Direction(0);
  var state = {
    speed: speed,
    mass: mass
  };

  function update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.multiply(0);
  }

  function applyForce(v) {
    v.divide(state.mass);
    acceleration.add(v);
  }

  function seek(v) {
    attraction.set(v).subtract(location);
    var magnitude = attraction.get();
    var m = map(magnitude, 0, 100, 0, state.speed);
    direction.set(attraction);
    attraction.normalize().multiply(m).subtract(velocity);
    applyForce(attraction);
    return self;
  }

  function settle(v) {
    var diff = v.get() - location.get();
    var diffRounded = roundToTwoDecimals(diff);
    var hasSettled = !diffRounded;
    if (hasSettled) location.set(v);
    return hasSettled;
  }

  function useSpeed(n) {
    state.speed = n;
    return self;
  }

  function useDefaultSpeed() {
    useSpeed(speed);
    return self;
  }

  function useMass(n) {
    state.mass = n;
    return self;
  }

  function useDefaultMass() {
    useMass(mass);
    return self;
  }

  var self = {
    direction: direction,
    location: location,
    seek: seek,
    settle: settle,
    update: update,
    useDefaultMass: useDefaultMass,
    useDefaultSpeed: useDefaultSpeed,
    useMass: useMass,
    useSpeed: useSpeed
  };
  return self;
}

function ScrollBounds(params) {
  var limit = params.limit,
      location = params.location,
      scrollBody = params.scrollBody,
      animation = params.animation;
  var min = limit.min,
      max = limit.max,
      reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax;
  var tolerance = 50;
  var disabled = false;
  var timeout = 0;

  function shouldConstrain(v) {
    if (disabled || timeout) return false;
    if (reachedMin(location.get())) return v.get() !== min;
    if (reachedMax(location.get())) return v.get() !== max;
    return false;
  }

  function constrain(v) {
    if (!shouldConstrain(v)) return;
    timeout = window.setTimeout(function () {
      var constraint = limit.constrain(v.get());
      v.set(constraint);
      scrollBody.useSpeed(10).useMass(3);
      animation.start();
      timeout = 0;
    }, tolerance);
  }

  function toggleActive(active) {
    disabled = !active;
  }

  var self = {
    constrain: constrain,
    toggleActive: toggleActive
  };
  return self;
}

function ScrollContain(params) {
  var alignment = params.alignment,
      contentSize = params.contentSize,
      viewSize = params.viewSize;
  var scrollBounds = Limit({
    min: -contentSize + viewSize,
    max: 0
  });
  var alignedWithinView = [alignment.measure(contentSize)];
  var contentExceedsView = contentSize > viewSize;

  function findDuplicates(scrollSnaps) {
    var startSnap = scrollSnaps[0];
    var endSnap = scrollSnaps[scrollSnaps.length - 1];
    var min = scrollSnaps.lastIndexOf(startSnap) + 1;
    var max = scrollSnaps.indexOf(endSnap);
    return Limit({
      min: min,
      max: max
    });
  }

  function measure(scrollSnaps, trim) {
    var containedSnaps = scrollSnaps.map(scrollBounds.constrain);

    var _a = findDuplicates(containedSnaps),
        min = _a.min,
        max = _a.max;

    if (!contentExceedsView) return alignedWithinView;
    if (!trim) return containedSnaps;
    return containedSnaps.slice(min - 1, max + 1);
  }

  var self = {
    measure: measure
  };
  return self;
}

function ScrollLimit(params) {
  var contentSize = params.contentSize,
      loop = params.loop;

  function measure(scrollSnaps) {
    var startSnap = scrollSnaps[0];
    var endSnap = scrollSnaps[scrollSnaps.length - 1];
    var min = loop ? startSnap - contentSize : endSnap;
    var max = startSnap;
    return Limit({
      min: min,
      max: max
    });
  }

  var self = {
    measure: measure
  };
  return self;
}

function ScrollLooper(params) {
  var contentSize = params.contentSize,
      location = params.location,
      limit = params.limit,
      pxToPercent = params.pxToPercent;
  var min = limit.min + pxToPercent.measure(0.1);
  var max = limit.max + pxToPercent.measure(0.1);

  var _a = Limit({
    min: min,
    max: max
  }),
      reachedMin = _a.reachedMin,
      reachedMax = _a.reachedMax;

  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location.get());
    if (direction === -1) return reachedMin(location.get());
    return false;
  }

  function loop(vectors, direction) {
    if (!shouldLoop(direction)) return;
    var loopDistance = contentSize * (direction * -1);
    vectors.forEach(function (v) {
      return v.add(loopDistance);
    });
  }

  var self = {
    loop: loop
  };
  return self;
}

function ScrollProgress(params) {
  var _a = params.limit,
      max = _a.max,
      scrollLength = _a.length;

  function get(n) {
    var currentLocation = n - max;
    return currentLocation / -scrollLength;
  }

  var self = {
    get: get
  };
  return self;
}

function ScrollSnap(params) {
  var snapSizes = params.snapSizes,
      alignment = params.alignment,
      loop = params.loop;
  var alignments = snapSizes.map(alignment.measure);
  var distancesBetween = distancesBetweenScrollSnaps();

  function distancesBetweenScrollSnaps() {
    var limit = Limit({
      min: 0,
      max: snapSizes.length - 1
    });
    var counter = Counter({
      limit: limit,
      start: 0,
      loop: loop
    });
    return snapSizes.map(function (size, index) {
      var next = counter.set(index + 1).get();
      return size + alignments[index] - alignments[next];
    });
  }

  function measure(index) {
    var sizes = distancesBetween.slice(0, index);
    return sizes.reduce(function (a, s) {
      return a - s;
    }, alignments[0]);
  }

  var self = {
    measure: measure
  };
  return self;
}

function ScrollTarget(params) {
  var loop = params.loop,
      limit = params.limit,
      scrollSnaps = params.scrollSnaps,
      contentSize = params.contentSize;
  var reachedMax = limit.reachedMax,
      reachedAny = limit.reachedAny,
      removeOffset = limit.removeOffset;

  function minDistance(d1, d2) {
    return Math.abs(d1) < Math.abs(d2) ? d1 : d2;
  }

  function findTargetSnap(target) {
    var distance = removeOffset(target);
    var ascDiffsToSnaps = scrollSnaps.map(function (scrollSnap) {
      return scrollSnap - distance;
    }).map(function (diffToSnap) {
      return shortcut(diffToSnap, 0);
    }).map(function (diff, i) {
      return {
        diff: diff,
        index: i
      };
    }).sort(function (d1, d2) {
      return Math.abs(d1.diff) - Math.abs(d2.diff);
    });
    var index = ascDiffsToSnaps[0].index;
    return {
      index: index,
      distance: distance
    };
  }

  function shortcut(target, direction) {
    var t1 = target;
    var t2 = target + contentSize;
    var t3 = target - contentSize;
    if (!loop) return t1;
    if (!direction) return minDistance(minDistance(t1, t2), t3);
    var shortest = minDistance(t1, direction === 1 ? t2 : t3);
    return Math.abs(shortest) * direction;
  }

  function findTargetIndex(target, index) {
    var reachedBound = !loop && reachedAny(target);
    if (!reachedBound) return index;
    var _a = params.index,
        min = _a.min,
        max = _a.max;
    return reachedMax(target) ? min : max;
  }

  function byIndex(index, direction) {
    var diffToSnap = scrollSnaps[index] - params.target.get();
    var distance = shortcut(diffToSnap, direction);
    return {
      index: index,
      distance: distance
    };
  }

  function byDistance(distance, snap) {
    var target = params.target.get() + distance;
    var targetSnap = findTargetSnap(target);
    var index = findTargetIndex(target, targetSnap.index);
    var reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index: index,
      distance: distance
    };
    var diffToSnap = scrollSnaps[index] - targetSnap.distance;
    var snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index: index,
      distance: snapDistance
    };
  }

  var self = {
    byDistance: byDistance,
    byIndex: byIndex,
    shortcut: shortcut
  };
  return self;
}

function ScrollTo(params) {
  var indexCurrent = params.index,
      scrollTarget = params.scrollTarget,
      animation = params.animation;
  var indexPrevious = params.indexPrevious,
      events = params.events,
      targetDistance = params.target;

  function scrollTo(target) {
    var distanceDiff = target.distance;
    var indexDiff = target.index !== indexCurrent.get();

    if (distanceDiff) {
      animation.start();
      targetDistance.add(distanceDiff);
    }

    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      events.emit('select');
    }
  }

  function distance(n, snap) {
    var target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }

  function index(n, direction) {
    var targetIndex = indexCurrent.clone().set(n);
    var target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }

  var self = {
    distance: distance,
    index: index
  };
  return self;
}

function SlideLooper(params) {
  var axis = params.axis,
      containerLocation = params.location;
  var contentSize = params.contentSize,
      viewSize = params.viewSize,
      slideSizes = params.slideSizes,
      scrollSnaps = params.scrollSnaps;
  var ascItems = arrayKeys(slideSizes);
  var descItems = arrayKeys(slideSizes).reverse();
  var loopPoints = startPoints().concat(endPoints());
  var loopStyle = axis.scroll === 'x' ? 'left' : 'top';

  function subtractItemSizes(indexes, from) {
    return indexes.reduce(function (a, i) {
      var size = slideSizes[i];
      return a - size;
    }, from);
  }

  function loopItemsIn(sizeOfGap, indexes) {
    return indexes.reduce(function (a, i) {
      var gapLeft = subtractItemSizes(a, sizeOfGap);
      return gapLeft > 0 ? a.concat([i]) : a;
    }, []);
  }

  function loopStart(sizeOfGap, indexes, from) {
    return indexes.reduce(function (a, i) {
      var gapFilled = a + slideSizes[i];
      return gapFilled < sizeOfGap ? gapFilled : a;
    }, from);
  }

  function loopPointFor(indexes, from, direction) {
    var slideCount = ascItems.length - 1;
    return subtractItemSizes(indexes.map(function (i) {
      return (i + direction) % slideCount;
    }), from);
  }

  function loopPointsFor(indexes, from, direction) {
    var ascIndexes = indexes.slice().sort(function (a, b) {
      return a - b;
    });
    return ascIndexes.map(function (index, loopIndex) {
      var initial = contentSize * (!direction ? 0 : -1);
      var offset = contentSize * (!direction ? 1 : 0);
      var slidesInSpan = ascIndexes.slice(0, loopIndex);
      var point = loopPointFor(slidesInSpan, from, direction);

      var getTarget = function getTarget(location) {
        return location > point ? initial : offset;
      };

      return {
        point: point,
        getTarget: getTarget,
        index: index,
        location: -1
      };
    });
  }

  function startPoints() {
    var gap = scrollSnaps[0] - 1;
    var indexes = loopItemsIn(gap, descItems);
    var start = loopStart(gap, indexes, 0);
    return loopPointsFor(indexes, start, 1);
  }

  function endPoints() {
    var gap = viewSize - scrollSnaps[0] - 1;
    var indexes = loopItemsIn(gap, ascItems);
    var start = loopStart(contentSize, ascItems, -viewSize);
    return loopPointsFor(indexes, -start, 0);
  }

  function canLoop() {
    return loopPoints.every(function (_a) {
      var index = _a.index;
      var otherIndexes = ascItems.filter(function (i) {
        return i !== index;
      });
      return subtractItemSizes(otherIndexes, viewSize) <= 0;
    });
  }

  function loop(slides) {
    loopPoints.forEach(function (loopPoint) {
      var getTarget = loopPoint.getTarget,
          location = loopPoint.location,
          index = loopPoint.index;
      var target = getTarget(containerLocation.get());

      if (target !== location) {
        slides[index].style[loopStyle] = target + "%";
        loopPoint.location = target;
      }
    });
  }

  function clear(slides) {
    loopPoints.forEach(function (_a) {
      var index = _a.index;
      slides[index].style[loopStyle] = '';
    });
  }

  var self = {
    canLoop: canLoop,
    clear: clear,
    loop: loop,
    loopPoints: loopPoints
  };
  return self;
}

function SlidesInView(params) {
  var contentSize = params.contentSize,
      slideSizes = params.slideSizes,
      viewSize = params.viewSize;
  var inViewThreshold = params.inViewThreshold,
      loop = params.loop;
  var thresholds = slideSizes.map(function (s) {
    return s * inViewThreshold;
  });
  var scrollSnaps = arrayKeys(slideSizes).map(scrollSnap);
  var pointsToCheck = concatSlidePoints();

  function scrollSnap(index) {
    var span = slideSizes.slice(0, index);
    return span.reduce(function (a, s) {
      return a - s;
    }, 0);
  }

  function concatSlidePoints() {
    var offsets = loop ? [0, contentSize, -contentSize] : [0];
    return offsets.map(slidePoints).reduce(function (a, b) {
      return a.concat(b);
    }, []);
  }

  function slidePoints(offset) {
    return scrollSnaps.map(function (snap, index) {
      return {
        start: snap - slideSizes[index] + thresholds[index] + offset,
        end: snap + viewSize - thresholds[index] + offset,
        index: index
      };
    });
  }

  function check(location) {
    return pointsToCheck.reduce(function (list, point) {
      var index = point.index,
          start = point.start,
          end = point.end;
      var inList = list.indexOf(index) !== -1;
      var inView = start < location && end > location;
      return !inList && inView ? list.concat([index]) : list;
    }, []);
  }

  var self = {
    check: check
  };
  return self;
}

function Translate(params) {
  var axis = params.axis,
      container = params.container;
  var translates = {
    x: x,
    y: y
  };
  var translateAxis = translates[axis.scroll];
  var roundToTwoDecimals = roundToDecimals(2);
  var containerStyle = container.style;
  var disabled = false;
  var location = 0;

  function x(n) {
    return "translate3d(" + n + "%,0px,0px)";
  }

  function y(n) {
    return "translate3d(0px," + n + "%,0px)";
  }

  function to(v) {
    if (disabled) return;
    var target = roundToTwoDecimals(v.get());

    if (location !== target) {
      getComputedStyle(container).transform;
      containerStyle.transform = translateAxis(target);
      location = target;
    }
  }

  function toggleActive(active) {
    disabled = !active;
  }

  function clear() {
    containerStyle.transform = '';
    location = 0;
  }

  var self = {
    clear: clear,
    to: to,
    toggleActive: toggleActive
  };
  return self;
}

function Engine(root, container, slides, options, events) {
  // Options
  var align = options.align,
      scrollAxis = options.axis,
      startIndex = options.startIndex,
      inViewThreshold = options.inViewThreshold,
      loop = options.loop,
      speed = options.speed,
      dragFree = options.dragFree,
      slidesToScroll = options.slidesToScroll,
      containScroll = options.containScroll; // Measurements

  var axis = Axis(scrollAxis);
  var pxToPercent = PxToPercent(axis.measure(container));
  var viewSize = pxToPercent.totalPercent;
  var slideSizes = slides.map(axis.measure).map(pxToPercent.measure);
  var groupedSizes = groupArray(slideSizes, slidesToScroll);
  var snapSizes = groupedSizes.map(function (g) {
    return g.reduce(function (a, s) {
      return a + s;
    });
  });
  var snapIndexes = arrayKeys(snapSizes);
  var contentSize = slideSizes.reduce(function (a, s) {
    return a + s;
  }, 0);
  var alignment = Alignment({
    align: align,
    viewSize: viewSize
  });
  var scrollSnap = ScrollSnap({
    snapSizes: snapSizes,
    alignment: alignment,
    loop: loop
  });
  var defaultSnaps = snapIndexes.map(scrollSnap.measure);
  var contain = ScrollContain({
    alignment: alignment,
    contentSize: contentSize,
    viewSize: viewSize
  });
  var shouldContain = !loop && containScroll !== '';
  var trimSnaps = containScroll === 'trimSnaps';
  var containedSnaps = contain.measure(defaultSnaps, trimSnaps);
  var scrollSnaps = shouldContain ? containedSnaps : defaultSnaps; // Index

  var indexSpan = Limit({
    min: 0,
    max: scrollSnaps.length - 1
  });
  var index = Counter({
    limit: indexSpan,
    start: startIndex,
    loop: loop
  });
  var indexPrevious = index.clone(); // ScrollLimit

  var scrollLimit = ScrollLimit({
    loop: loop,
    contentSize: contentSize
  });
  var limit = scrollLimit.measure(scrollSnaps); // Draw

  var update = function update() {
    engine.scrollBody.seek(target).update();
    var settled = engine.scrollBody.settle(target);

    if (!dragHandler.pointerDown()) {
      if (!loop) engine.scrollBounds.constrain(target);

      if (settled) {
        engine.animation.stop();
        events.emit('settle');
      }
    }

    if (loop) {
      var direction = engine.scrollBody.direction.get();
      engine.scrollLooper.loop(loopVectors, direction);
      engine.slideLooper.loop(slides);
    }

    if (!settled) events.emit('scroll');
    engine.translate.to(engine.scrollBody.location);
    engine.animation.proceed();
  }; // Shared


  var animation = Animation(update);
  var startLocation = scrollSnaps[index.get()];
  var location = Vector1D(startLocation);
  var target = Vector1D(startLocation);
  var loopVectors = [location, target];
  var scrollBody = ScrollBody({
    location: location,
    speed: speed,
    mass: 1
  });
  var scrollTarget = ScrollTarget({
    contentSize: contentSize,
    index: index,
    limit: limit,
    loop: loop,
    scrollSnaps: scrollSnaps,
    target: target
  });
  var scrollTo = ScrollTo({
    animation: animation,
    events: events,
    index: index,
    indexPrevious: indexPrevious,
    scrollTarget: scrollTarget,
    target: target
  }); // DragHandler

  var dragHandler = DragHandler({
    animation: animation,
    axis: axis,
    dragFree: dragFree,
    dragTracker: DragTracker({
      axis: axis,
      pxToPercent: pxToPercent
    }),
    element: root,
    events: events,
    index: index,
    limit: limit,
    location: location,
    loop: loop,
    scrollBody: scrollBody,
    scrollTo: scrollTo,
    scrollTarget: scrollTarget,
    target: target
  }); // Slider

  var engine = {
    animation: animation,
    axis: axis,
    dragHandler: dragHandler,
    pxToPercent: pxToPercent,
    index: index,
    indexPrevious: indexPrevious,
    limit: limit,
    location: location,
    options: options,
    scrollBody: scrollBody,
    scrollBounds: ScrollBounds({
      animation: animation,
      limit: limit,
      location: location,
      scrollBody: scrollBody
    }),
    scrollLooper: ScrollLooper({
      contentSize: contentSize,
      limit: limit,
      location: location,
      pxToPercent: pxToPercent
    }),
    scrollProgress: ScrollProgress({
      limit: limit
    }),
    scrollSnaps: scrollSnaps,
    scrollTarget: scrollTarget,
    scrollTo: scrollTo,
    slideLooper: SlideLooper({
      axis: axis,
      contentSize: contentSize,
      location: location,
      scrollSnaps: scrollSnaps,
      slideSizes: slideSizes,
      viewSize: viewSize
    }),
    slidesInView: SlidesInView({
      contentSize: contentSize,
      inViewThreshold: inViewThreshold,
      loop: loop,
      slideSizes: slideSizes,
      viewSize: viewSize
    }),
    snapIndexes: snapIndexes,
    target: target,
    translate: Translate({
      axis: axis,
      container: container
    })
  };
  return engine;
}

function EventEmitter() {
  var listeners = {
    destroy: [],
    pointerDown: [],
    pointerUp: [],
    init: [],
    reInit: [],
    resize: [],
    scroll: [],
    select: [],
    settle: []
  };

  function emit(evt) {
    listeners[evt].forEach(function (e) {
      return e(evt);
    });
    return self;
  }

  function on(evt, cb) {
    listeners[evt] = listeners[evt].concat([cb]);
    return self;
  }

  function off(evt, cb) {
    listeners[evt] = listeners[evt].filter(function (e) {
      return e !== cb;
    });
    return self;
  }

  var self = {
    emit: emit,
    off: off,
    on: on
  };
  return self;
}

var defaultOptions = {
  align: 'center',
  axis: 'x',
  containScroll: '',
  containerSelector: '*',
  dragFree: false,
  draggable: true,
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
  inViewThreshold: 0,
  loop: false,
  selectedClass: 'is-selected',
  slidesToScroll: 1,
  speed: 10,
  startIndex: 0
};

function EmblaCarousel(sliderRoot, userOptions) {
  if (userOptions === void 0) {
    userOptions = {};
  }

  var events = EventEmitter();
  var eventStore = EventStore();
  var debouncedResize = debounce(resize, 500);
  var reInit = reActivate;
  var on = events.on,
      off = events.off;
  var engine;
  var activated = false;

  var options = _extends({}, defaultOptions);

  var containerSize = 0;
  var container;
  var slides;
  activate(userOptions);

  function storeElements() {
    if (!sliderRoot) throw new Error('Missing root node 😢');
    var selector = options.containerSelector;
    var sliderContainer = sliderRoot.querySelector(selector);
    if (!sliderContainer) throw new Error('Missing container node 😢');
    container = sliderContainer;
    slides = arrayFromCollection(container.children);
  }

  function activate(partialOptions) {
    if (partialOptions === void 0) {
      partialOptions = {};
    }

    storeElements();
    options = _extends(options, partialOptions);
    engine = Engine(sliderRoot, container, slides, options, events);
    var axis = engine.axis,
        scrollBody = engine.scrollBody,
        translate = engine.translate,
        dragHandler = engine.dragHandler,
        slideLooper = engine.slideLooper;
    var loop = options.loop,
        draggable = options.draggable,
        draggableClass = options.draggableClass,
        selectedClass = options.selectedClass,
        draggingClass = options.draggingClass;
    containerSize = axis.measure(container);
    eventStore.add(window, 'resize', debouncedResize);
    translate.to(scrollBody.location);
    slides.forEach(slideFocusEvent);
    dragHandler.addActivationEvents();

    if (loop) {
      if (!slideLooper.canLoop()) return reActivate({
        loop: false
      });
      slideLooper.loop(slides);
    }

    if (draggable) {
      if (draggableClass) {
        addClass(sliderRoot, draggableClass);
      }

      if (draggingClass) {
        events.on('pointerDown', toggleDraggingClass);
        events.on('pointerUp', toggleDraggingClass);
      }
    } else {
      events.on('pointerDown', dragHandler.removeInteractionEvents);
    }

    if (selectedClass) {
      toggleSelectedClass();
      events.on('select', toggleSelectedClass);
      events.on('pointerUp', toggleSelectedClass);
    }

    if (!activated) {
      setTimeout(function () {
        return events.emit('init');
      }, 0);
      activated = true;
    }
  }

  function toggleDraggingClass(evt) {
    var draggingClass = options.draggingClass;
    if (evt === 'pointerDown') addClass(sliderRoot, draggingClass);else removeClass(sliderRoot, draggingClass);
  }

  function toggleSelectedClass() {
    var selectedClass = options.selectedClass;
    var inView = slidesInView(true);
    var notInView = slidesNotInView(true);
    notInView.forEach(function (i) {
      return removeClass(slides[i], selectedClass);
    });
    inView.forEach(function (i) {
      return addClass(slides[i], selectedClass);
    });
  }

  function slideFocusEvent(slide, index) {
    var focus = function focus() {
      var groupIndex = Math.floor(index / options.slidesToScroll);
      var selectedGroup = index ? groupIndex : index;
      sliderRoot.scrollLeft = 0;
      scrollTo(selectedGroup);
    };

    eventStore.add(slide, 'focus', focus, true);
  }

  function reActivate(partialOptions) {
    if (partialOptions === void 0) {
      partialOptions = {};
    }

    var startIndex = engine.index.get();

    var newOptions = _extends({
      startIndex: startIndex
    }, partialOptions);

    deActivate();
    activate(newOptions);
    events.emit('reInit');
  }

  function deActivate() {
    var selectedClass = options.selectedClass,
        draggableClass = options.draggableClass;
    engine.dragHandler.removeActivationEvents();
    engine.dragHandler.removeInteractionEvents();
    engine.animation.stop();
    eventStore.removeAll();
    engine.translate.clear();
    engine.slideLooper.clear(slides);
    removeClass(sliderRoot, draggableClass);
    slides.forEach(function (s) {
      return removeClass(s, selectedClass);
    });
    events.off('select', toggleSelectedClass);
    events.off('pointerUp', toggleSelectedClass);
    events.off('pointerDown', toggleDraggingClass);
    events.off('pointerUp', toggleDraggingClass);
  }

  function destroy() {
    if (!activated) return;
    deActivate();
    activated = false;
    engine = {};
    events.emit('destroy');
  }

  function resize() {
    var newContainerSize = engine.axis.measure(container);
    if (containerSize !== newContainerSize) reActivate();
    events.emit('resize');
  }

  function slidesInView(target) {
    if (target === void 0) {
      target = false;
    }

    var location = engine[target ? 'target' : 'location'].get();
    var type = options.loop ? 'removeOffset' : 'constrain';
    return engine.slidesInView.check(engine.limit[type](location));
  }

  function slidesNotInView(target) {
    if (target === void 0) {
      target = false;
    }

    var inView = slidesInView(target);
    return engine.snapIndexes.filter(function (i) {
      return inView.indexOf(i) === -1;
    });
  }

  function scrollSnapList() {
    var getScrollProgress = engine.scrollProgress.get;
    return engine.scrollSnaps.map(getScrollProgress);
  }

  function scrollTo(index) {
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.index(index, 0);
  }

  function scrollNext() {
    var next = engine.index.clone().add(1);
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.index(next.get(), -1);
  }

  function scrollPrev() {
    var prev = engine.index.clone().add(-1);
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.index(prev.get(), 1);
  }

  function canScrollPrev() {
    var index = engine.index;
    return options.loop || index.get() !== index.min;
  }

  function canScrollNext() {
    var index = engine.index;
    return options.loop || index.get() !== index.max;
  }

  function scrollProgress() {
    var location = engine.location.get();
    return engine.scrollProgress.get(location);
  }

  function selectedScrollSnap() {
    return engine.index.get();
  }

  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }

  function clickAllowed() {
    return engine.dragHandler.clickAllowed();
  }

  function dangerouslyGetEngine() {
    return engine;
  }

  function containerNode() {
    return container;
  }

  function slideNodes() {
    return slides;
  }

  var self = {
    canScrollNext: canScrollNext,
    canScrollPrev: canScrollPrev,
    clickAllowed: clickAllowed,
    containerNode: containerNode,
    dangerouslyGetEngine: dangerouslyGetEngine,
    destroy: destroy,
    off: off,
    on: on,
    previousScrollSnap: previousScrollSnap,
    reInit: reInit,
    scrollNext: scrollNext,
    scrollPrev: scrollPrev,
    scrollProgress: scrollProgress,
    scrollSnapList: scrollSnapList,
    scrollTo: scrollTo,
    selectedScrollSnap: selectedScrollSnap,
    slideNodes: slideNodes,
    slidesInView: slidesInView,
    slidesNotInView: slidesNotInView
  };
  return self;
}

export default EmblaCarousel;
//# sourceMappingURL=embla-carousel.js.map
