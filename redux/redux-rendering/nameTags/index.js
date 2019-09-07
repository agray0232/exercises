const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

document.getElementById("nameForm").addEventListener("submit", e => {
    e.preventDefault();
    dispatch(
        {
            type: "ADD_NAMETAG",
            name: document.getElementById("nameForm").elements.name.value
        });
})

