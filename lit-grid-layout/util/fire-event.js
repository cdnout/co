export const fireEvent = (target, event, detail = {}) => {
    target.dispatchEvent(new CustomEvent(event, { detail }));
};
//# sourceMappingURL=fire-event.js.map