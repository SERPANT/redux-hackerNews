export function setIdList(list, load, tab) {
  return {
    type: "SET_ID_LIST",
    payload: { idList: list, loading: load, currentTab: tab }
  };
}

export function changePage(newPage) {
  return {
    type: "CHANGE_PAGE",
    payload: { page: newPage }
  };
}
