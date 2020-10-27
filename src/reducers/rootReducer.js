import authReducer from "./authReducer";
import cardReducer from "./cardReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  cards: cardReducer,
});

export default rootReducer;
