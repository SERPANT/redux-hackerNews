export default function reducer(
  state = {
    currentPage: 0,
    loading: true,
    idList: [],
    data: [],
    currentTab: "TOP_STORIES"
  },
  action
) {
  switch (action.type) {
    case "SET_ID_LIST": {
      return { ...state, ...action.payload };
    }
    case "CHANGE_PAGE": {
      return { ...state, currentPage: action.payload.page };
    }
    default:
      return state;
  }
}
