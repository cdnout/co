export const getMouseTouchLocation = (ev, touchIdentifier) => {
    if (ev.type.startsWith("touch")) {
        if (touchIdentifier === undefined) {
            return;
        }
        const touchEvent = ev;
        const touchObj = getTouch(touchEvent, touchIdentifier);
        return {
            x: touchObj.x,
            y: touchObj.y,
        };
    }
    return {
        x: ev.clientX,
        y: ev.clientY,
    };
};
const getTouch = (e, identifier) => {
    const touchObj = (e.targetTouches &&
        Array.prototype.find.call(e.targetTouches, (t) => identifier === t.identifier)) ||
        (e.changedTouches &&
            Array.prototype.find.call(e.changedTouches, (t) => identifier === t.identifier));
    return {
        x: touchObj.clientX,
        y: touchObj.clientY,
    };
};
//# sourceMappingURL=get-mouse-touch-location.js.map