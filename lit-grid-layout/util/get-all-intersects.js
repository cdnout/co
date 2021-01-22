import { intersects } from "./intersects";
export const getAllIntersects = (layout, layoutItem) => {
    return layout.filter((l) => intersects(l, layoutItem));
};
//# sourceMappingURL=get-all-intersects.js.map