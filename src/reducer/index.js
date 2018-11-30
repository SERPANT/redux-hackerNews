import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import listReducer from "./listreducer";
import commentReducer from "./commentReducer";
import commentItemReducer from "./commentItemReducer";
export default combineReducers({
  itemReducer,
  listReducer,
  commentReducer,
  commentItemReducer
});
