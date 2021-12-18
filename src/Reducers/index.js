import {combineReducers} from 'redux'
import userReducer from './user-Reducer'
import clientReducer from './client-Reducer';
export  default combineReducers({
    users:userReducer,
    clients: clientReducer,
});