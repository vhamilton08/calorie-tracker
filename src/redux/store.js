import { applyMiddleware, combineReducers, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import breakfastReducer from './breakfastReducer'
import lunchReducer from './lunchReducer'

const rootReducer = combineReducers({breakfastReducer, lunchReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))