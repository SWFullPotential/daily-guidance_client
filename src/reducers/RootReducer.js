import { authentReducer } from "./authentReducer";
import { cardsReducer } from "./cardsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authentReducer,
  cardsRed: cardsReducer,
});

export default rootReducer;
