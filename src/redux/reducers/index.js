import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import totReducer from "./totReducer";

const reducers = combineReducers({
  total: totReducer,
  color: colorReducer,
});

export default reducers;
