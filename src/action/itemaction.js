export function setData(item, load, itemID) {
  return {
    type: "SET_LIST_DATA",
    payload: {
      data: item,
      loading: load
    },
    id: itemID
  };
}
