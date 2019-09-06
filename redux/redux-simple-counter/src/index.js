const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const increment5Button = document.getElementById('increment-5');
const decrement5Button = document.getElementById('decrement-5');
const colorPicker = document.getElementById('colorPicker');
const userInput = document.getElementById('userInput');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));
increment5Button.addEventListener('click', e => dispatch({ type: "INCREMENT5" }));
decrement5Button.addEventListener('click', e => dispatch({ type: "DECREMENT5" }));
colorPicker.addEventListener('change', e => dispatch({
    type: "COLOR_CHANGE",
    color: e.target.value
}));
userInput.addEventListener('input', e => dispatch({
    type: "USER_SET_NUMBER",
    userNumber: e.target.value
}));