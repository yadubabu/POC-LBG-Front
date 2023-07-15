import { combineReducers } from "redux";
import colorReducer from "./colorReducer";

const reducers = combineReducers({
  color: colorReducer,
});

export default reducers;
