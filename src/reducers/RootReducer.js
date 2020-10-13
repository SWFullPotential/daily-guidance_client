import AuthentReducer from './AuthentReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers ({
    auth: AuthentReducer, 
})

export default rootReducer;
