// Return the bottom y value
export const findLayoutBottom = (layout) => {
    let layoutYMax = 0;
    for (const item of layout) {
        const itemBottom = item.posY + item.height;
        layoutYMax = itemBottom > layoutYMax ? itemBottom : layoutYMax;
    }
    return layoutYMax;
};
//# sourceMappingURL=find-layout-bottom.js.map