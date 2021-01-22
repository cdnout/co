import { sortLayout } from "./sort-layout";
export const getMasonryLayout = (layout, columns) => {
    const masonryLayout = [];
    const sortedLayout = sortLayout(layout);
    const columnHeights = new Array(columns).fill(0);
    for (const item of sortedLayout) {
        if (item.width > columns) {
            item.width = columns;
        }
        const itemPostion = getMinItemColumn(item, columnHeights, columns);
        const newItem = Object.assign(Object.assign({}, item), itemPostion);
        masonryLayout.push(newItem);
        // Update Columns Heights from new item position
        for (let i = itemPostion.posX; i < itemPostion.posX + item.width; i++) {
            columnHeights[i] += item.height;
        }
    }
    return masonryLayout;
};
// Finds the shortest column the item can fit into
const getMinItemColumn = (item, columnHeights, columns) => {
    // If the item is just 1 column, just find the shortest column and put it there
    if (item.width === 1) {
        const minPosY = Math.min(...columnHeights);
        return { posX: columnHeights.indexOf(minPosY), posY: minPosY };
    }
    const columnHeightGroup = [];
    // How many spans of columns can the item go
    const columnSpans = columns + 1 - item.width;
    // For each of the spans, find the max Y
    for (let i = 0; i < columnSpans; i++) {
        const groupColumnHeights = columnHeights.slice(i, i + item.width);
        columnHeightGroup[i] = Math.max(...groupColumnHeights);
    }
    // Find the shortest of the spans
    const minPosY = Math.min(...columnHeightGroup);
    return { posX: columnHeightGroup.indexOf(minPosY), posY: minPosY };
};
//# sourceMappingURL=get-masonry-layout.js.map