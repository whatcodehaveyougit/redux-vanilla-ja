import { store } from './store.js'

const { dispatch, getState, subscribe } = store

// Not Working
// const addToDoBtn = document.querySelector('#add-to-do > button')
// const addToDoInput = document.querySelector("div#add-to-do > input[name='todo']'")

const addToDoBtn = document.querySelector('#add-to-do-btn')
const addToDoInput = document.querySelector("#add-to-do-input")
const toDoListContainer = document.querySelector('#to-dos')
// const

addToDoBtn.addEventListener('click', () => {
  console.log('add to do btn clicked')
  const toDoObject = {
    value: addToDoInput.value,
    id: 'id' + (new Date()).getTime()
  }
  dispatch({type: "ADD", payload: toDoObject})
  addToDoInput.value = ''
})

subscribe(() => {
  toDoListContainer.innerHTML = "";
  const toDosArray = getState().toDoList

  // console.log(toDosArray)
  // console.log('dispatch called: hitting the subscribe')
  toDosArray.forEach((toDo) => {
    // console.log('This is it', toDo);
    let newCard = document.createElement('li');
    let deleteBtn = document.createElement('BUTTON');
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() { dispatch({type: "REMOVE", payload: {...toDo}})};

    deleteBtn.textContent = "Delete To Do";
    newCard.textContent = toDo.value
    newCard.appendChild(deleteBtn);
    toDoListContainer.appendChild(newCard);

  })
})
