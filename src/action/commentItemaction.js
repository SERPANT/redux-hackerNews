export function setData(item, load, itemID) {
  return {
    type: "SET_DATA_COMMENT_ITEM",
    payload: { data: item, loading: load, id: itemID }
  };
}

export function resetData() {
  return {
    type: "RESET_COMMENT_ITEM"
  };
}
