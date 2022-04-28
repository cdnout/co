export function getNavId(props, warn) {
  var id = props.nav || props.id;

  if (process.env.NODE_ENV === "development" && !id && warn) {
    warn('Navigation item should have "nav" or "id" prop', "error");
  }

  return id;
}
//# sourceMappingURL=getNavId.js.map