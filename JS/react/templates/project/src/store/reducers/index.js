import { combineReducers } from "redux";

// REDUCERS
import user from "./user";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
