import { applyMiddleware, combineReducers, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import breakfastReducer from './breakfastReducer'
import lunchReducer from './lunchReducer'
import dinnerReducer from './dinnerReducer'
import snackReducer from './snackReducer'

const rootReducer = combineReducers({breakfastReducer, lunchReducer, dinnerReducer, snackReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))