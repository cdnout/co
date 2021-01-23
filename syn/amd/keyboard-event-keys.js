/*syn@0.14.1#keyboard-event-keys*/
define([
    'require',
    'exports',
    'module',
    './synthetic'
], function (require, exports, module) {
    var syn = require('./synthetic');
    syn.key.keyboardEventKeys = {
        '\b': 'Backspace',
        '\t': 'Tab',
        '\r': 'Enter',
        'shift': 'Shift',
        'ctrl': 'Control',
        'alt': 'Alt',
        'meta': 'Meta',
        'pause-break': 'Pause',
        'caps': 'CapsLock',
        'escape': 'Escape',
        'num-lock': 'NumLock',
        'scroll-lock': 'ScrollLock',
        'print': 'Print',
        'page-up': 'PageUp',
        'page-down': 'PageDown',
        'end': 'End',
        'home': 'Home',
        'left': 'ArrowLeft',
        'up': 'ArrowUp',
        'right': 'ArrowRight',
        'down': 'ArrowDown',
        'insert': 'Insert',
        'delete': 'Delete',
        'f1': 'F1',
        'f2': 'F2',
        'f3': 'F3',
        'f4': 'F4',
        'f5': 'F5',
        'f6': 'F6',
        'f7': 'F7',
        'f8': 'F8',
        'f9': 'F9',
        'f10': 'F10',
        'f11': 'F11',
        'f12': 'F12'
    };
});