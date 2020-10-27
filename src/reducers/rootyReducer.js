import authReducer from "./authReducer";
import cardsReducer from "./cardsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  cards: cardsReducer,
});

export default rootReducer;
