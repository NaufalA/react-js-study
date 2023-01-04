import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import courseTypeReducer from "./courseTypeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  courseType: courseTypeReducer,
});

export default rootReducer;
