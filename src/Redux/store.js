import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { loginReducer } from './ActionsAndReducers/Login/login';

const allReducers = combineReducers({
    loginReducer
})

const store = createStore(allReducers, applyMiddleware(thunk, logger));
export default store;