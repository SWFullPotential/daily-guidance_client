import authentReducer from "./authentReducer";
import cardsReducer from "./cardsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authentReducer,
  cards: cardsReducer,
});

export default rootReducer;
