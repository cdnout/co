(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Valigators = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /**
     * Helper function to get the number of decimal points of a number
     * @private
     * @param value Value to get
     * @returns Number of decimal points number has
     */
    function getDecimalPoints(value) {
        var index = value.toString().indexOf(".");
        return index === -1 ? 0 : value.toString().length - index - 1;
    }
    /**
     * See: https://codeburst.io/perpetual-currying-in-javascript-5ae1c749adc5 for good explanation of this function and currying
     * @private
     * @param fn Function to curry
     * @returns Curried function
     */
    function curry(fn, id) {
        var innerFn = function (N, args) {
            var func = function () {
                var x = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    x[_i] = arguments[_i];
                }
                if (N <= x.length) {
                    return fn.apply(void 0, __spreadArrays(args, x));
                }
                var _innerFn = innerFn(N - x.length, __spreadArrays(args, x));
                // _innerFn.id = id;
                return _innerFn;
            };
            func.id = id;
            return func;
        };
        innerFn.id = id;
        return innerFn(fn.length, []);
    }
    /**
     * Wraps a function in a try catch to make it safe
     * @private
     * @param fn Function to convert
     * @returns Safe function
     */
    function run(func, id) {
        try {
            return curry(func, id);
        }
        catch (ex) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return false;
            };
        }
    }
    /**
     * Checks that two values are both arrays and that they are equal
     * @param a Value to check
     * @param b Other value to check
     */
    function arraysEqual(a, b) {
        if (a instanceof Array && b instanceof Array) {
            if (a === b)
                return true;
            if (a == null || b == null)
                return false;
            if (a.length !== b.length)
                return false;
            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        }
        else {
            return false;
        }
    }

    function _minMaxLength(min, max, value) {
        if (Array.isArray(value)) {
            return value.length >= min && value.length <= max;
        }
        else {
            return String(value).length >= min && String(value).length <= max;
        }
    }
    /**
     * Checks whether a value has length between min and max value inclusive
     * @param min Min value
     * @param max Max value
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether right length or not
     */
    var minMaxLength = run(_minMaxLength, "minMaxLength");

    var _minLength;
    _minLength = function (min, value) {
        if (Array.isArray(value)) {
            return value.length >= min;
        }
        else {
            return String(value).length >= min;
        }
    };
    /**
     * Checks that a value has length greater than min value inclusive
     * @param min Min value
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether right length or not
     */
    var minLength = run(_minLength, "minLength");

    function _maxLength(max, value) {
        if (Array.isArray(value)) {
            return value.length <= max;
        }
        else {
            return String(value).length <= max;
        }
    }
    /**
     * Checks that a value has length less than max value inclusive
     * @param max Max value
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether right length or not
     */
    var maxLength = run(_maxLength, "maxLength");

    function customValidator(func, identifier) {
        return run(func, identifier ? identifier : "");
    }

    var _isString;
    _isString = function (value) {
        return typeof value === "string";
    };
    /**
     * Checks if value is a string
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether string or not
     */
    var isString = run(_isString, "isString");

    function _isBoolean(value) {
        return typeof value === "boolean";
    }
    /**
     * Checks if value is a boolean
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether boolean or not
     */
    var isBoolean = run(_isBoolean, "isBoolean");

    function _isNull(value) {
        return value === null;
    }
    /**
     * Checks if value is null
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether null or not
     */
    var isNull = run(_isNull, "isNull");

    function _length(n, value) {
        if (Array.isArray(value)) {
            return value.length === n;
        }
        else {
            return String(value).length === n;
        }
    }
    /**
     * Checks whether a value converted to a string has a specific length
     * @param n Length
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether right length or not
     */
    var length = run(_length, "length");

    function _isNumber(value) {
        return typeof value === "number";
    }
    /**
     * Checks if value is a number
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether number or not
     */
    var isNumber = run(_isNumber, "isNumber");

    function _isArray(value) {
        return Array.isArray(value);
    }
    /**
     * Checks if value is an array
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether array or not
     */
    var isArray = run(_isArray, "isArray");

    function _maxDecimalPoint(max, value) {
        if (typeof value === "number") {
            return getDecimalPoints(value) <= max;
        }
        else {
            return false;
        }
    }
    /**
     * Checks whether a number has less than or equal to a specified number of decimal points
     * @param max Max value
     * @param value Value to check
     * @returns {boolean} Boolean value representing has correct decimal points
     */
    var maxDecimalPoint = run(_maxDecimalPoint, "maxDecimalPoint");

    function _minDecimalPoint(min, value) {
        if (typeof value === "number") {
            return getDecimalPoints(value) >= min;
        }
        else {
            return false;
        }
    }
    /**
     * Checks whether a number has greater than or equal to a specified number of decimal points
     * @param min Min value
     * @param value Value to check
     * @returns {boolean} Boolean value representing has correct decimal points
     */
    var minDecimalPoint = run(_minDecimalPoint, "minDecimalPoint");

    function _oneOf(elems, value) {
        return elems.includes(value);
    }
    /**
     * Takes an array and checks that the value matches on of the elements in the array
     * @param elems Elements value could be
     * @param value Value to check
     * @returns {boolean} Boolean representing whether the value matches one of the elems
     */
    var oneOf = run(_oneOf, "oneOf");

    function _decimalPoints(n, value) {
        if (typeof value === "number") {
            return getDecimalPoints(value) === n;
        }
        else {
            return false;
        }
    }
    /**
     * Checks whether a number has exactly the specified number of decimal points
     * @param n Value
     * @param value Value to check
     * @returns {boolean} Boolean value representing has correct decimal points
     */
    var decimalPoints = run(_decimalPoints, "decimalPoints");

    function _containsNumber(value) {
        if (value instanceof Array || isNumber(value) || isString(value)) {
            return /\d/.test(String(value));
        }
        return false;
    }
    /**
     * Checks whether the value converted to string contains a number
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether contains a number
     */
    var containsNumber = run(_containsNumber, "containsNumber");

    function _containsUpper(value) {
        if (value instanceof Array || isNumber(value) || isString(value)) {
            return /[A-Z]/.test(String(value));
        }
        return false;
    }
    /**
     * Checks whether the value converted to string contains an upper case character
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether contains an upper case character
     */
    var containsUpper = run(_containsUpper, "containsUpper");

    function _containsLower(value) {
        if (value instanceof Array || isNumber(value) || isString(value)) {
            return /[a-z]/.test(String(value));
        }
        return false;
    }
    /**
     * Checks whether the value converted to string contains an lower case character
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether contains an lower case character
     */
    var containsLower = run(_containsLower, "containsLower");

    function _containsSymbol(value) {
        if (isNumber(value) || isString(value)) {
            return /[[\]|\\/~^:,;?!&%$@*+\-_#}{<>.=_)(£]/.test(String(value));
        }
        if (value instanceof Array) {
            return value.some(function (val) {
                return /[[\]|\\/~^:,;?!&%$@*+\-_#}{<>.=_)(£]/.test(val.toString());
            });
        }
        return false;
    }
    /**
     * Checks whether the value converted to string contains a symbol
     * With arrays it will check that any of the values contain a symbol
     *
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether contains a symbol
     */
    var containsSymbol = run(_containsSymbol, "containsSymbol");

    function _containsRegex(reg, value) {
        if (isNumber(value) || isString(value)) {
            return reg.test(String(value));
        }
        if (value instanceof Array) {
            return value.some(function (val) { return reg.test(val.toString()); });
        }
        return false;
    }
    /**
     * Checks whether the value converted to string contains a specified regex
     * With arrays it will check that any of the values match the regex
     *
     * @param reg Regex to test
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether contains a specified regex
     */
    var containsRegex = run(_containsRegex, "containsRegex");

    function _or(validators, value) {
        console.log("res: ", run(validators[0], "")(value));
        return validators.some(function (validator) { return run(validator, "")(value); });
    }
    /**
     * Used if you you don't mind if some of the validators fail as long as one passes
     *
     * @param validators Functions to run
     * @param value Value to check
     * @returns {boolean} Boolean value if one of the functions passes
     */
    var or = run(_or, "or");

    function _isInstanceOf(typeClass, value) {
        return value instanceof typeClass;
    }
    /**
     * Tests the presence of constructor.prototype in object's prototype chain
     * @param typeClass function to test against
     * @param value Object to test
     * @returns {boolean} Boolean
     */
    var isInstanceOf = run(_isInstanceOf, "isInstanceOf");

    function _isEven(value) {
        if (typeof value === "number") {
            if (value === 0) {
                return false;
            }
            return value % 2 === 0;
        }
        return false;
    }
    /**
     * Checks whether a value is a number and whether that number is even
     * @param value Value to check
     * @returns {boolean} Boolean representing whether is a even or not
     */
    var isEven = run(_isEven, "isEven");

    function _isOdd(value) {
        if (typeof value !== "number") {
            return false;
        }
        if (value === 0 || value < 0) {
            return false;
        }
        return !isEven(value);
    }
    /**
     * Checks whether a value is a number and whether that number is odd
     * @param value Value to check
     * @returns {boolean} Boolean representing whether is a odd or not
     */
    var isOdd = run(_isOdd, "isOdd");

    function _isPrime(value) {
        if (typeof value === "number") {
            if (value <= 1) {
                return false;
            }
            if (value <= 3) {
                return true;
            }
            if (value % 2 === 0 || value % 3 === 0) {
                return false;
            }
            var i = 5;
            while (i * i <= value) {
                if (value % i === 0 || value % (i + 2) === 0) {
                    return false;
                }
                i += 6;
            }
            return true;
        }
        return false;
    }
    /**
     * Checks whether a value is a number and whether that number is prime
     * @param value Value to check
     * @returns {boolean} Boolean representing whether is a prime or not
     */
    var isPrime = run(_isPrime, "isPrime");

    function _isSquare(value) {
        if (typeof value === "number") {
            return value > 0 && Math.sqrt(value) % 1 === 0;
        }
        return false;
    }
    /**
     * Checks whether a value is a number and whether that number is a square number
     * @param value Value to check
     * @returns {boolean} Boolean representing whether is a prime or not
     */
    var isSquare = run(_isSquare, "isSquare");

    function _isCube(value) {
        if (typeof value === "number") {
            var start = 1;
            var end = value;
            while (start <= end) {
                var mid = Math.floor((start + end) / 2);
                if (mid * mid * mid === value) {
                    return true;
                }
                if (mid * mid * mid < value) {
                    start = mid + 1;
                }
                else {
                    end = mid - 1;
                }
            }
        }
        return false;
    }
    /**
     * Checks whether a value is a number and whether that number is a cube number
     *
     * @param value Value to check
     * @returns {boolean} Boolean representing whether is a cube or not
     */
    var isCube = run(_isCube, "isCube");

    function _isNegative(value) {
        if (typeof value === "number") {
            return value < 0;
        }
        return false;
    }
    /**
     * Checks whether a value is a number and whether that number is a negative number
     * @param value Value to check
     * @returns {boolean} Boolean representing whether is a negative number or not
     */
    var isNegative = run(_isNegative, "isNegative");

    function _isPositive(value) {
        if (typeof value === "number") {
            return value > 0;
        }
        return false;
    }
    /**
     * Checks whether a value is a number and whether that number is a positive number
     * @param value Value to check
     * @returns {boolean} Boolean representing whether is a positive number or not
     */
    var isPositive = run(_isPositive, "isPositive");

    function _equals(equal, value) {
        if (typeof equal === "object" && typeof value === "object") {
            // SOURCE: https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
            var type = Object.prototype.toString.call(value);
            if (type !== Object.prototype.toString.call(equal))
                return false;
            if (["[object Array]", "[object Object]"].indexOf(type) < 0)
                return false;
            var valueLen = type === "[object Array]"
                ? value.length
                : Object.keys(value).length;
            var otherLen = type === "[object Array]"
                ? equal.length
                : Object.keys(equal).length;
            if (valueLen !== otherLen)
                return false;
            var compare = function (item1, item2) {
                var itemType = Object.prototype.toString.call(item1);
                if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
                    if (!_equals(item1, item2))
                        return false;
                }
                else {
                    if (itemType !== Object.prototype.toString.call(item2))
                        return false;
                    if (itemType === "[object Function]") {
                        if (item1.toString() !== item2.toString())
                            return false;
                    }
                    else {
                        if (item1 !== item2)
                            return false;
                    }
                }
            };
            if (type === "[object Array]") {
                for (var i = 0; i < valueLen; i++) {
                    if (compare(value[i], equal[i]) === false)
                        return false;
                }
            }
            else {
                for (var key in value) {
                    if (Object.hasOwnProperty.call(value, key)) {
                        if (compare(value[key], equal[key]) === false)
                            return false;
                    }
                }
            }
            // If nothing failed, return true
            return true;
        }
        return equal === value;
    }
    /**
     * Checks whether the value is equal to a specified value using ===
     * @param equal Value to check equals to
     * @param value Value to check
     * @returns {boolean} {boolean} Boolean representing if they are equal
     */
    var equals = run(_equals, "equals");

    function _substring(inner, value) {
        return String(value).includes(inner.toString());
    }
    /**
     * Checks whether a value converted to a string contains a specific substring inner
     * @param inner Substring to check for (converted to string)
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether it contains substring
     */
    var substring = run(_substring, "substring");

    function _some(shape, value) {
        if (Array.isArray(value)) {
            var val_1 = new Valigator();
            return value.some(function (value) { return val_1.validate(value, shape); });
        }
        return false;
    }
    /**
     * Checks that some values in an array matches some shape
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether some match
     */
    var some = run(_some, "some");

    function _between(start, end, shape, value) {
        if (value instanceof Array) {
            var val_1 = new Valigator();
            return value
                .slice(start, end + 1)
                .every(function (value) { return val_1.validate(value, shape); });
        }
        return false;
    }
    /**
     * Checks that every value in an array between a start and end index matches some shape
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether they all match
     */
    var between = run(_between, "between");

    function _fromN(start, shape, value) {
        if (value instanceof Array) {
            var val_1 = new Valigator();
            return value.slice(start).every(function (value) { return val_1.validate(value, shape); });
        }
        return false;
    }
    /**
     * Checks that values from a start index in an array matches some shape
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether values from start index match
     */
    var fromN = run(_fromN, "fromN");

    function _upto(end, shape, value) {
        if (value instanceof Array) {
            var val_1 = new Valigator();
            return value
                .slice(0, end + 1)
                .every(function (value) { return val_1.validate(value, shape); });
        }
        return false;
    }
    /**
     * Checks that values up to an index value in an array matches some shape
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether they all match
     */
    var upto = run(_upto, "upto");

    function _exact(array, value) {
        if (Array.isArray(value)) {
            return arraysEqual(array, value);
        }
        return false;
    }
    /**
     * Checks that the value exactly matches the array
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether they match
     */
    var exact = run(_exact, "exact");

    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // See https://ihateregex.io/expr/phone/
    var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    // See https://ihateregex.io/expr/date/
    var dateRegex = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;
    // See https://ihateregex.io/expr/lat-long/
    var longitude_latitude = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/;
    // See https://ihateregex.io/expr/credit-card/
    var credit_card_number = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;
    // See https://ihateregex.io/expr/ip/
    var ipv4_address = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/;
    // See https://ihateregex.io/expr/ipv6/
    var ipv6_address = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
    // See https://ihateregex.io/expr/url
    var url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
    // See https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s06.html
    var time_hhmm_12h = /^(1[0-2]|0?[1-9]):([0-5]?[0-9])(●?[AP]M)?$/;
    var time_hhmm_24h = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
    var time_hhmmss_12h = /^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9])(●?[AP]M)?$/;
    var time_hhmmss_24h = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

    /*
    Whats the point of this?
     - Data validation is annoying and I don't like doing it
     - I wanted a library where you give it some data and you say what shape the data should be and it tells you if its correct or not

    data = {
        name: "test",
        email: "example@example.com"
        phone: "038486265"
    }
    shape = {
        name: {type: "text", validators: [maxLength(2), minLength(10), allowedReg(""), bannedReg()]},
        email: {type: "email", validators: []}
        phone: {type: "numAsText", validators: []}
    }
    -- Shape with nested objects
    shape = {
        name: {
            type: "text", // type value always required
            validators: [maxLength(2), minLength(10), allowedReg(""), bannedReg()] // Defines any additional validations
        },
        email: {type: "email", validators: []}
        numbers: {
            work: {
                type: "phone"
            },
            home: {
                type: "phone"
            }
        }
    }


    *** Takes data and its shape and returns a boolean whether it passed or not
    validate(data, shape)

    *** Takes data and its shape and returns an object specifying what passed, what failed
    validate_more(data, shape)

    *** Takes data, its shape and two call back methods that run when it finds error data
    validate_callback(data, shape, onError, onSuccess?)
    - onError -> (error) => {}

    */
    /**
     * Valigator class is used to check that some data matches some specified shape
     */
    var Valigator = /** @class */ (function () {
        /**
         * Valigator constructor
         * @param options Optional settings
         */
        function Valigator(options) {
            this.types = {
                text: {
                    validators: [isString],
                },
                number: {
                    validators: [isNumber],
                },
                array: {
                    validators: [isArray],
                },
                boolean: {
                    validators: [isBoolean],
                },
                null: {
                    validators: [isNull],
                },
                email: {
                    validators: [isString, containsRegex(emailRegex)],
                },
                password: {
                    validators: [
                        isString,
                        containsUpper,
                        containsLower,
                        containsSymbol,
                        containsNumber,
                        minLength(8),
                    ],
                },
                phone: {
                    validators: [isString, containsRegex(phoneRegex)],
                },
                date: {
                    validators: [isInstanceOf(Date)],
                },
                date_string: {
                    validators: [isString, containsRegex(dateRegex)],
                },
                time_hhmm_12h: {
                    validators: [isString, containsRegex(time_hhmm_12h)],
                },
                time_hhmm_24h: {
                    validators: [isString, containsRegex(time_hhmm_24h)],
                },
                time_hhmmss_12h: {
                    validators: [isString, containsRegex(time_hhmmss_12h)],
                },
                time_hhmmss_24h: {
                    validators: [isString, containsRegex(time_hhmmss_24h)],
                },
                longitude_latitude: {
                    validators: [isString, containsRegex(longitude_latitude)],
                },
                credit_card_number: {
                    validators: [isString, containsRegex(credit_card_number)],
                },
                ipv4_address: {
                    validators: [isString, containsRegex(ipv4_address)],
                },
                ipv6_address: {
                    validators: [isString, containsRegex(ipv6_address)],
                },
                url: {
                    validators: [isString, containsRegex(url)],
                },
            };
            this.messages = {
                invalidValue: "Invalid value for data",
                unexpectedValue: "Value you provided is unexpected",
                required: "Value is required but is missing",
            };
            this.keys = {
                success: "success",
                message: "message",
                type: "type",
                required: "required",
                validators: "validators",
                messages: "messages",
                validationErrors: "validationErrors",
                validator: "validator",
                onError: "onError",
            };
            this.requiredValues = [""];
            if (options) {
                if (options.messages) {
                    if (options.messages.invalidValue) {
                        this.messages.invalidValue = options.messages.invalidValue;
                    }
                    if (options.messages.unexpectedValue) {
                        this.messages.unexpectedValue =
                            options.messages.unexpectedValue;
                    }
                    if (options.messages.required) {
                        this.messages.required = options.messages.required;
                    }
                }
                if (options.keys) {
                    if (options.keys.success) {
                        this.keys.success = options.keys.success;
                    }
                    if (options.keys.message) {
                        this.keys.message = options.keys.message;
                    }
                    if (options.keys.type) {
                        this.keys.type = options.keys.type;
                    }
                    if (options.keys.required) {
                        this.keys.required = options.keys.required;
                    }
                    if (options.keys.validators) {
                        this.keys.validators = options.keys.validators;
                    }
                    if (options.keys.messages) {
                        this.keys.messages = options.keys.messages;
                    }
                    if (options.keys.validationErrors) {
                        this.keys.validationErrors = options.keys.validationErrors;
                    }
                    if (options.keys.validator) {
                        this.keys.validator = options.keys.validator;
                    }
                    if (options.keys.onError) {
                        this.keys.onError = options.keys.onError;
                    }
                }
                if (options.types) {
                    for (var key in options.types) {
                        if (Object.keys(options.types[key]).length === 1 &&
                            options.types[key].validators) {
                            this.types[key] = options.types[key];
                        }
                        else {
                            throw Error("Types need to have an array of validators");
                        }
                    }
                }
                if (options.requiredValues) {
                    this.requiredValues = options.requiredValues;
                }
            }
        }
        Valigator.prototype.isType = function (val) {
            return this.types[val] !== undefined;
        };
        /**
         * Method checks whether a value is an object and if it has correct type key
         * @param val Value to check
         * @returns Boolean representing whether validation passed
         */
        Valigator.prototype.isShape = function (val) {
            if (val instanceof Object) {
                if (val[this.keys.type] !== undefined) {
                    if (typeof val[this.keys.type] === "string") {
                        if (this.isType(val[this.keys.type])) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        /**
         * Method checks that the shape matches this structure:
         *    shape = {
         *       type: string | foo: shape
         *    }
         * @param obj Object to check
         * @returns Boolean representing whether validation passed
         */
        Valigator.prototype.checkShapeObject = function (obj) {
            if (typeof obj !== "object") {
                return false;
            }
            if (!this.isShape(obj)) {
                for (var key in obj) {
                    if (!this.checkShapeObject(obj[key])) {
                        return false;
                    }
                }
            }
            return true;
        };
        Valigator.prototype.validateShape = function (shape) {
            if (typeof shape !== "object" || Array.isArray(shape)) {
                throw Error("Invalid value for property shape");
            }
            if (!this.checkShapeObject(shape)) {
                throw Error("Invalid shape object");
            }
        };
        Valigator.prototype.runValidations = function (data, shape) {
            var validators = shape[this.keys.validators];
            // Run any user defined validators
            if (validators) {
                if (Array.isArray(validators)) {
                    for (var i = 0; i < validators.length; i++) {
                        if (!validators[i](data)) {
                            return false;
                        }
                    }
                }
            }
            var test = shape[this.keys.type];
            if (typeof test === "string") {
                // Now run the default validators for the type
                var defaultValidators = this.types[test].validators;
                for (var i = 0; i < defaultValidators.length; i++) {
                    if (!defaultValidators[i](data)) {
                        return false;
                    }
                }
            }
            else {
                throw Error("Invalid shape object");
            }
            return true;
        };
        /**
         * @private
         * Takes some data that may or might not be a shape object and checks whether it contains the onError key.
         * If it does it executes it
         * @param shape Shape to find onError callback and execute
         */
        Valigator.prototype.executeOnErrorCallback = function (shape, message) {
            if (this.isShape(shape)) {
                if (shape &&
                    typeof shape === "object" &&
                    shape[this.keys.onError]) {
                    shape[this.keys.onError](message);
                }
            }
        };
        Valigator.prototype.checkDataShape = function (data, shape, stopAtError, runOnError) {
            var success = true;
            var output = {};
            if (typeof data !== "object" ||
                Array.isArray(data) ||
                (data &&
                    typeof data === "object" &&
                    data.constructor.name !== "Object")) {
                // data is some primitive type; string, number etc
                if (this.isShape(shape)) {
                    if (this.requiredValues.includes(data) && runOnError) {
                        var cur = {};
                        cur[this.keys.message] = this.messages.required;
                        this.executeOnErrorCallback(shape, cur);
                        return false;
                    }
                    if (!this.runValidations(data, shape) ||
                        this.requiredValues.includes(data)) {
                        if (runOnError) {
                            var cur = {};
                            cur[this.keys.message] = this.messages.required;
                            cur[this.keys.validationErrors] = this.getValidationMessages(data, shape);
                            this.executeOnErrorCallback(shape, cur);
                        }
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    if (runOnError) {
                        this.executeSubOnErrors(shape);
                    }
                    // Invalid shape
                    return false;
                }
            }
            else {
                // First check that every required value in shape is in data
                for (var key in shape) {
                    // If data includes the value from shape
                    if (Object.keys(data || {}).includes(key)) {
                        if (this.isShape(shape[key])) {
                            if (this.requiredValues.includes((data || {})[key])) {
                                if (runOnError) {
                                    var cur = {};
                                    cur[this.keys.message] = this.messages.required;
                                    this.executeOnErrorCallback(shape[key], cur);
                                }
                            }
                            else if (!this.runValidations((data || {})[key], shape[key]) ||
                                this.requiredValues.includes((data || {})[key])) {
                                // Reached depth
                                success = false;
                                output[key] = false;
                                if (runOnError) {
                                    var cur = {};
                                    cur[this.keys.message] = this.messages.invalidValue;
                                    cur[this.keys.validationErrors] = this.getValidationMessages((data || {})[key], shape[key]);
                                    this.executeOnErrorCallback(shape[key], cur);
                                }
                                if (stopAtError) {
                                    return success;
                                }
                            }
                            else {
                                output[key] = true;
                            }
                        }
                        else {
                            if (!shape[key]) {
                                output[key] = false;
                                success = false;
                                if (stopAtError) {
                                    return success;
                                }
                            }
                            else {
                                success = this.checkDataShape((data || {})[key], shape[key], stopAtError, runOnError);
                                output[key] = success;
                                if (!success) {
                                    if (stopAtError) {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        // Data does not have a value that shape does not
                        if (this.isShape(shape[key])) {
                            // The shape value is does not contain any more nested objects
                            if (shape[key][this.keys.required] === undefined ||
                                shape[key][this.keys.required] === true) {
                                // It is a required value so throw error
                                success = false;
                                output[key] = false;
                                if (runOnError) {
                                    var cur = {};
                                    cur[this.keys.message] = this.messages.required;
                                    this.executeOnErrorCallback(shape[key], cur);
                                }
                                if (stopAtError) {
                                    return success;
                                }
                            }
                            else {
                                // It is not a required value so it does not matter
                                output[key] = true;
                            }
                        }
                        else {
                            output[key] = false;
                            // The shape value has more nested elements
                            success = false;
                            if (stopAtError) {
                                return success;
                            }
                        }
                    }
                }
                // Make sure every value in the data has is checked
                for (var key in data) {
                    // The output has not checked this value
                    if (!output[key]) {
                        if (typeof data !== "object") {
                            // data is not a primitive value
                            output[key] = this.checkDataShapeMore(data[key], {});
                        }
                        else {
                            success = false;
                            if (stopAtError) {
                                return success;
                            }
                            output[key] = false;
                        }
                    }
                }
            }
            return success;
        };
        Valigator.prototype.executeSubOnErrors = function (shape) {
            for (var key in shape) {
                if (this.isShape(shape[key])) {
                    var cur = {};
                    cur[this.keys.message] = this.messages.unexpectedValue;
                    this.executeOnErrorCallback(shape[key], cur);
                }
                else {
                    this.executeSubOnErrors(shape[key]);
                }
            }
        };
        Valigator.prototype.buildErrorMessageObject = function (shape, message) {
            var output = {};
            for (var key in shape) {
                if (this.isShape(shape[key])) {
                    var cur = {};
                    cur[this.keys.success] = false;
                    cur[this.keys.message] = message;
                    output[key] = cur;
                }
                else {
                    output[key] = this.buildErrorMessageObject(output[key], message);
                }
            }
            return output;
        };
        Valigator.prototype.getValidationMessages = function (data, shape) {
            var validators = shape[this.keys.validators];
            // Run any user defined validators
            var msgs = [];
            if (validators) {
                if (Array.isArray(validators)) {
                    for (var i = 0; i < validators.length; i++) {
                        if (!validators[i](data)) {
                            if ((shape[this.keys.messages] || {})[validators[i]().id]) {
                                var error = {};
                                error[this.keys.validator] = validators[i]().id;
                                error[this.keys.message] =
                                    shape[this.keys.messages][validators[i]().id];
                                msgs.push(error);
                            }
                            else {
                                var error = {};
                                error[this.keys.validator] = validators[i]().id;
                                (error[this.keys.message] = this.messages.invalidValue),
                                    msgs.push(error);
                            }
                        }
                    }
                }
            }
            var test = shape[this.keys.type];
            if (typeof test === "string") {
                // Now run the default validators for the type
                var defaultValidators = this.types[test].validators;
                for (var i = 0; i < defaultValidators.length; i++) {
                    if (!defaultValidators[i](data)) {
                        if ((shape[this.keys.messages] || {})[defaultValidators[i]().id]) {
                            var error = {};
                            error[this.keys.validator] = defaultValidators[i]().id;
                            error[this.keys.message] =
                                shape[this.keys.messages][defaultValidators[i]().id];
                            msgs.push(error);
                        }
                        else {
                            var error = {};
                            error[this.keys.validator] = defaultValidators[i]().id;
                            (error[this.keys.message] = this.messages.invalidValue),
                                msgs.push(error);
                        }
                    }
                }
            }
            else {
                throw Error("Invalid shape object");
            }
            return msgs;
        };
        Valigator.prototype.checkDataShapeMore = function (data, shape) {
            var output = {};
            if (typeof data !== "object" ||
                Array.isArray(data) ||
                (data &&
                    typeof data === "object" &&
                    data.constructor.name !== "Object")) {
                // data is some primitive type; string, number etc
                if (this.isShape(shape)) {
                    if (this.requiredValues.includes(data)) {
                        var cur = {};
                        cur[this.keys.success] = false;
                        cur[this.keys.message] = this.messages.required;
                        var cur2 = {};
                        cur2[this.keys.message] = this.messages.required;
                        this.executeOnErrorCallback(shape, cur2);
                        return cur;
                    }
                    if (!this.runValidations(data, shape)) {
                        var cur = {};
                        cur[this.keys.success] = false;
                        cur[this.keys.message] = this.messages.invalidValue;
                        cur[this.keys.validationErrors] = this.getValidationMessages(data, shape);
                        var cur2 = {};
                        cur2[this.keys.message] = this.messages.required;
                        cur2[this.keys.validationErrors] = this.getValidationMessages(data, shape);
                        this.executeOnErrorCallback(shape, cur2);
                        return cur;
                    }
                    else {
                        // valid data
                        var cur = {};
                        cur[this.keys.success] = true;
                        return cur;
                    }
                }
                else {
                    this.executeSubOnErrors(shape);
                    // Invalid shape
                    return this.buildErrorMessageObject(shape, this.messages.unexpectedValue);
                }
            }
            else {
                // First check that every required value in shape is in data
                for (var key in shape) {
                    // If data includes the value from shape
                    if (Object.keys(data || {}).includes(key)) {
                        if (this.isShape(shape[key])) {
                            if (this.requiredValues.includes((data || {})[key])) {
                                var cur = {};
                                cur[this.keys.success] = false;
                                cur[this.keys.message] = this.messages.required;
                                var cur2 = {};
                                cur2[this.keys.message] = this.messages.required;
                                this.executeOnErrorCallback(shape[key], cur2);
                                output[key] = cur;
                            }
                            else if (!this.runValidations((data || {})[key], shape[key])) {
                                // Reached depth
                                var cur = {};
                                cur[this.keys.success] = false;
                                cur[this.keys.message] = this.messages.invalidValue;
                                cur[this.keys.validationErrors] = this.getValidationMessages((data || {})[key], shape[key]);
                                var cur2 = {};
                                cur2[this.keys.message] = this.messages.invalidValue;
                                cur2[this.keys.validationErrors] = this.getValidationMessages((data || {})[key], shape[key]);
                                this.executeOnErrorCallback(shape[key], cur2);
                                // Invalid data
                                output[key] = cur;
                            }
                            else {
                                var cur = {};
                                cur[this.keys.success] = true;
                                output[key] = cur;
                            }
                        }
                        else {
                            if (!shape[key]) {
                                var cur = {};
                                cur[this.keys.success] = false;
                                cur[this.keys.message] = this.messages.unexpectedValue;
                                output[key] = cur;
                            }
                            else {
                                output[key] = this.checkDataShapeMore((data || {})[key], shape[key]);
                            }
                        }
                    }
                    else {
                        // Data does not have a value that shape does not
                        if (this.isShape(shape[key])) {
                            // The shape value is does not contain any more nested objects
                            if (shape[key][this.keys.required] === undefined ||
                                shape[key][this.keys.required] === true) {
                                // It is a required value so throw error
                                var cur = {};
                                cur[this.keys.success] = false;
                                cur[this.keys.message] = this.messages.required;
                                output[key] = cur;
                                var cur2 = {};
                                cur2[this.keys.message] = this.messages.required;
                                this.executeOnErrorCallback(shape[key], cur2);
                            }
                            else {
                                // It is not a required value so it does not matter
                                var cur = {};
                                cur[this.keys.success] = true;
                                output[key] = cur;
                            }
                        }
                        else {
                            // The shape value has more nested elements
                            output[key] = this.buildErrorMessageObject(shape[key], this.messages.required);
                        }
                    }
                }
                // Make sure every value in the data has is checked
                for (var key in data) {
                    // The output has not checked this value
                    if (!output[key]) {
                        if (typeof data !== "object") {
                            // data is not a primitive value
                            output[key] = this.checkDataShapeMore(data[key], {});
                        }
                        else {
                            var cur = {};
                            cur[this.keys.success] = false;
                            cur[this.keys.message] = this.messages.unexpectedValue;
                            output[key] = cur;
                            // if (
                            //     shape[key][this.keys.required] === true ||
                            //     shape[key][this.keys.required] === undefined
                            // ) {
                            //     //
                            //     const cur = {};
                            //     cur[this.keys.success] = false;
                            //     cur[this.keys.message] = this.messages.required;
                            //     output[key] = cur;
                            //     this.executeOnErrorCallback(shape[key]);
                            // }
                        }
                    }
                }
            }
            return output;
        };
        /**
         * Checks whether some data matches a specified shape and just returns a boolean value as a result
         * @param data Data to check
         * @param shape Shape the data is supposed to match
         * @returns {Boolean} representing if data is valid or not
         * @example
         *
         * const valigator = new Valigator();
         * valigator.validate(10, {type: "number"});
         * // => true
         *
         * const valigator = new Valigator();
         * valigator.validate({names: {first: "Dinesh", last: "Chugtai" }, {names: {first: {type: "text"}, last: {type: "text"}}});
         * // => true
         *
         * const valigator = new Valigator();
         * valigator.validate({names: {first: "Dinesh" }, {names: {first: {type: "text"}, last: {type: "text", required: false}}});
         * // => true
         */
        Valigator.prototype.validate = function (data, shape, stopAtError) {
            this.validateShape(shape);
            return this.checkDataShape(data, shape, stopAtError, true);
        };
        /**
         * Checks whether some data matches a specified shape and returns an object containing all the places where it failed and their corresponding messages
         * @param data Data to check
         * @param shape Shape the data is supposed to match
         * @returns Object representing what passed and what failed
         * @example
         *
         * const valigator = new Valigator();
         * valigator.validate_more(10, {type: "number"});
         * // => {success: true, values: {success: true}}
         *
         * const valigator = new Valigator();
         * valigator.validate_more({names: {first: "Dinesh", last: "Chugtai" }, {names: {first: {type: "text"}, last: {type: "text"}}});
         * // => {success: true, values: { names: { first: { success: true }, last: { success: true } } }}
         *
         * const valigator = new Valigator();
         * valigator.validate_more({names: {first: "Dinesh" }, {names: {first: {type: "text"}, last: {type: "text", required: false}}});
         * // => {success: true, values: { names: { first: { success: true }, last: { success: true } } }}
         *
         * const valigator = new Valigator();
         * valigator.validate_more({names: {first: "Dinesh" }}, {names: {first: {type: "number"}}});
         * // => {success: false, values: { names: { first: { success: false, message: 'Invalid value for data' } } }}
         */
        Valigator.prototype.validate_more = function (data, shape) {
            this.validateShape(shape);
            var res = this.checkDataShapeMore(data, shape);
            return {
                success: this.checkDataShape(data, shape, false, false),
                values: res,
            };
        };
        return Valigator;
    }());

    function _all(shape, value) {
        if (Array.isArray(value)) {
            var val_1 = new Valigator();
            return value.every(function (value) { return val_1.validate(value, shape); });
        }
        return false;
    }
    /**
     * Checks that every value in an array matches some shape
     * @param value Value to check
     * @returns {boolean} Boolean value representing whether they all match
     */
    var all = run(_all, "all");

    exports.Valigator = Valigator;
    exports.all = all;
    exports.between = between;
    exports.containsLower = containsLower;
    exports.containsNumber = containsNumber;
    exports.containsRegex = containsRegex;
    exports.containsSymbol = containsSymbol;
    exports.containsUpper = containsUpper;
    exports.customValidator = customValidator;
    exports.decimalPoints = decimalPoints;
    exports.default = Valigator;
    exports.equals = equals;
    exports.exact = exact;
    exports.fromN = fromN;
    exports.isArray = isArray;
    exports.isBoolean = isBoolean;
    exports.isCube = isCube;
    exports.isEven = isEven;
    exports.isInstanceOf = isInstanceOf;
    exports.isNegative = isNegative;
    exports.isNull = isNull;
    exports.isNumber = isNumber;
    exports.isOdd = isOdd;
    exports.isPositive = isPositive;
    exports.isPrime = isPrime;
    exports.isSquare = isSquare;
    exports.isString = isString;
    exports.length = length;
    exports.maxDecimalPoint = maxDecimalPoint;
    exports.maxLength = maxLength;
    exports.minDecimalPoint = minDecimalPoint;
    exports.minLength = minLength;
    exports.minMaxLength = minMaxLength;
    exports.oneOf = oneOf;
    exports.or = or;
    exports.some = some;
    exports.substring = substring;
    exports.upto = upto;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
