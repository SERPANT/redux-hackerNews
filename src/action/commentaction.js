export function setData(item, load, kids) {
  return {
    type: "SET_DATA_COMMENT",
    payload: { item, load, kids }
  };
}

export function resetData() {
  return {
    type: "RESET_COMMENT"
  };
}
