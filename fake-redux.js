export const createStore = (rootReducer, state) => {
  const reducer = rootReducer;
  let currentState = state;

  const listeners = [];
  // console.log('currentState', currentState);
  const getState = () => currentState;
  const subscribe = (listener) => listeners.push(listener);

  const dispatch = (action) => {
    currentState = reducer(action, currentState)
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }

}