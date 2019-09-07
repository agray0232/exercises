const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

document.getElementById("addCircle").addEventListener("click", e => dispatch({ type: "ADD_RANDOM_CIRCLE" }));

