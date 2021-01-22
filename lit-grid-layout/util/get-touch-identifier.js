export const getTouchIdentifier = (e) => {
    if (e.targetTouches && e.targetTouches[0])
        return e.targetTouches[0].identifier;
    if (e.changedTouches && e.changedTouches[0])
        return e.changedTouches[0].identifier;
    return 0;
};
//# sourceMappingURL=get-touch-identifier.js.map