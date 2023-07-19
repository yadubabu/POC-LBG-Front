import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
// import totReducer from "./totReducer";
import { objReducer, totalBal } from "./objReducer";
import { savingsReducer } from "./objReducer";

const reducers = combineReducers({
  total: totalBal,
  color: colorReducer,
  objects: objReducer,
  percent: savingsReducer,
});

export default reducers;
