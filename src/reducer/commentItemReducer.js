export default function commentItemReducer(state = {}, action) {
  switch (action.type) {
    case "SET_DATA_COMMENT_ITEM": {
      let newState = { ...state };
      newState[action.payload.id] = {
        data: action.payload.data,
        loading: action.payload.loading
      };

      return newState;
    }
    case "RESET_COMMENT_ITEM": {
      return {};
    }
    default:
      return state;
  }
}
