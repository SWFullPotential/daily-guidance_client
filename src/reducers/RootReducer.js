import AuthentReducer from './AuthentReducer';
import CardsReducer from './CardsReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers ({
    auth: AuthentReducer, 
})

export default rootReducer;
