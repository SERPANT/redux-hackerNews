export default function CommentReducer(
  state = { item: {}, kids: {}, loading: true },
  action
) {
  switch (action.type) {
    case "SET_DATA_COMMENT":
      return {
        item: action.payload.item,
        loading: action.payload.load,
        kids: action.payload.kids
      };
    case "RESET_COMMENT":
      return { item: {}, kids: {}, loading: true };
    default:
      return state;
  }
}
