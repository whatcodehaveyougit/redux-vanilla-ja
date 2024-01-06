import { store } from './store.js'

const { dispatch, getState, subscribe } = store

// Not Working
// const addToDoBtn = document.querySelector('#add-to-do > button')
// const addToDoInput = document.querySelector("div#add-to-do > input[name='todo']'")

const addToDoBtn = document.querySelector('#add-to-do-btn')
const addToDoInput = document.querySelector("#add-to-do-input")
const toDoListContainer = document.querySelector('#to-dos')

addToDoBtn.addEventListener('click', () => {
  console.log('add to do btn clicked')
  dispatch({type: "ADD", payload: addToDoInput.value})
  addToDoInput.value = ''
})

subscribe(() => {
  toDoListContainer.innerHTML = "";
  const toDosArray = getState().toDoList

  console.log(toDosArray)
  console.log('dispatch called: hitting the subscribe')
  toDosArray.forEach((toDo) => {
    let newCard = document.createElement('li');
    newCard.textContent = toDo
    toDoListContainer.appendChild(newCard);
  })
})
