export default function reducer(state = {}, action) {
  switch (action.type) {
    case "SET_LIST_DATA":
      let newObject = { ...state };
      newObject[action.id] = {
        data: action.payload.data,
        loading: action.payload.loading
      };
      return newObject;
    default:
      return state;
  }
}
