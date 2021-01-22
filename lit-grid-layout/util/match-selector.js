// Credit to react-draggable [https://github.com/STRML/react-draggable]
let matchesSelectorFunc = "";
const matchesSelector = (el, selector) => {
    if (!matchesSelectorFunc) {
        matchesSelectorFunc = [
            "matches",
            "webkitMatchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
        ].find((method) => isFunction(el[method]));
    }
    if (!matchesSelectorFunc || !isFunction(el[matchesSelectorFunc])) {
        return false;
    }
    return el[matchesSelectorFunc](selector);
};
export const matchesSelectorAndParentsTo = (ev, selector, baseNode) => {
    const path = ev.composedPath().reverse();
    while (path.length) {
        const node = path.pop();
        if (matchesSelector(node, selector)) {
            return true;
        }
        if (node === baseNode) {
            return false;
        }
    }
    return false;
};
const isFunction = (func) => {
    return (typeof func === "function" ||
        Object.prototype.toString.call(func) === "[object Function]");
};
//# sourceMappingURL=match-selector.js.map