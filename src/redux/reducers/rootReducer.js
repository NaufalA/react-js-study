import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import courseTypeReducer from "./courseTypeReducer";

const rootReducer = combineReducers({
  course: courseReducer,
  courseType: courseTypeReducer,
});

export default rootReducer;
