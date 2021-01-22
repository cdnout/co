import { moveItem } from "./move-item";
import { getItemItersect } from "./get-item-intersect";
export const moveItemAwayFromIntersect = (layout, intersectItem, itemToMove, cols, isUserMove) => {
    if (isUserMove) {
        isUserMove = false;
        const tempItem = {
            posX: itemToMove.posX,
            posY: Math.max(itemToMove.height - intersectItem.posY, 0),
            width: itemToMove.width,
            height: itemToMove.height,
            key: "-1",
        };
        if (!getItemItersect(layout, tempItem)) {
            return moveItem(layout, itemToMove, undefined, tempItem.posY, cols, isUserMove);
        }
    }
    return moveItem(layout, itemToMove, undefined, itemToMove.posY + 1, cols, isUserMove);
};
//# sourceMappingURL=move-item-away-from-intersect.js.map