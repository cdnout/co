// Fill in any gaps in the LayoutItem array
import { getItemItersect } from "./get-item-intersect";
import { resolveIntersection } from "./resolve-intersection";
import { sortLayout } from "./sort-layout";
// Return LayoutItem Array
export const condenseLayout = (layout) => {
    const condensedLayout = [];
    const returnLayout = [];
    const sortedLayout = sortLayout(layout);
    for (const item of sortedLayout) {
        // Move up while no intersecting another element
        while (item.posY > 0 && !getItemItersect(condensedLayout, item)) {
            item.posY--;
        }
        // Move down Item down, if it intersects with another item, move it down as well
        let intersectItem;
        while ((intersectItem = getItemItersect(condensedLayout, item))) {
            resolveIntersection(sortedLayout, item, intersectItem.posY + intersectItem.height);
        }
        delete item.hasMoved;
        condensedLayout.push(item);
        returnLayout[layout.indexOf(item)] = item;
    }
    return returnLayout;
};
//# sourceMappingURL=condense-layout.js.map