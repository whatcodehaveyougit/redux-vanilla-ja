import { createStore } from './fake-redux.js';

const rootReducer = (action, state) => {
  // console.log(action)
  const {type, payload} = action
  console.log(type);
  console.log(payload);
  switch(type) {
    case "ADD":
      return {
        ...state,
        toDoList: [...state.toDoList, payload]
      }
    default:
      return {
        ...state
      }
  }
}

const initialState = {
  toDoList: []
}

export const store = createStore(rootReducer, initialState)
