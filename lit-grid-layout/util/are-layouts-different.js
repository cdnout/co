export const areLayoutsDifferent = (a, b) => {
    if (a === b) {
        return false;
    }
    return (a.length !== b.length ||
        a.some((aItem, itemIndex) => {
            const bItem = b[itemIndex];
            const aItemKeys = Object.keys(aItem);
            return (aItemKeys.length !== Object.keys(bItem).length ||
                aItemKeys.some((key) => aItem[key] !== bItem[key]));
        }));
};
//# sourceMappingURL=are-layouts-different.js.map