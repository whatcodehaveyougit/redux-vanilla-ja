import { createStore } from './fake-redux.js';

function removeToDo(toDoList, deletedToDo){
  let newToDoList = []
  toDoList.forEach(toDo => {
    if (toDo.id !== deletedToDo.id){
      newToDoList.push(toDo)
    }
  });
  return newToDoList
}

const rootReducer = (action, state) => {
  const {type, payload} = action
  switch(type) {
    case "ADD":
      return {
        ...state,
        toDoList: [...state.toDoList, payload]
      }
    case "REMOVE":
      return {
        toDoList: removeToDo(state.toDoList, payload)
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
