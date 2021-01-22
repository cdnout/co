import { intersects } from "./intersects";
export const getItemItersect = (layout, layoutItem) => {
    for (const item of layout) {
        if (intersects(item, layoutItem)) {
            return item;
        }
    }
    return undefined;
};
//# sourceMappingURL=get-item-intersect.js.map