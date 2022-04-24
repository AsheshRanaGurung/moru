import { combineReducers } from "redux";
import {
  addUserReducer,
  deleteUserReducer,
  fetchPostReducer,
  fetchProductReducer,
  updatePostReducer,
} from "./reducers/tableDataReducer";

const rootReducer = combineReducers({
  fetchData: fetchProductReducer,
  deleteUser: deleteUserReducer,
  addUser: addUserReducer,

  fetchPost: fetchPostReducer,
  updatePost: updatePostReducer,
});

export default rootReducer;
