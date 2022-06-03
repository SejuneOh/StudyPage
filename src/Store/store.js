import { createStore, combineReducers } from 'redux'

const INITIAL_STATE = 0;
const counterReducer = (state = INITIAL_STATE, action) => {
  console.log(`aciton:${action.type}, state: ${state}`);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(combineReducers({
  counter: counterReducer,
}))

export default store;