import { createStore, combineReducers } from 'redux'
import counterReducer from '../Reducer/counterReducer'
import contextReducer from '../Reducer/contextReducer'


const store = createStore(combineReducers({
  counter: counterReducer,
  context: contextReducer,
}))

export default store;