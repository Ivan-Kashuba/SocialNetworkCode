export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newObjProps
) => {
  return items.map((elem) => {
    if (elem[objPropName] === itemId) {
      return { ...elem, ...newObjProps };
    }
    return elem;
  });
};
