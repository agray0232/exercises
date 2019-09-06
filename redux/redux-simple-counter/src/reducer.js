const initialState = {
    value: 0,
    color: "black"
}

const reducer = (state = initialState, action) => {
    let { type } = action;

    switch (type) {
        case "INCREMENT":
            return {
                color: state.color,
                value: Number(state.value) + 1
            }
        case "DECREMENT":
            return {
                color: state.color,
                value: Number(state.value) - 1
            }
        case "INCREMENT5":
            return {
                color: state.color,
                value: Number(state.value) + 5
            }
        case "DECREMENT5":
            return {
                color: state.color,
                value: Number(state.value) - 5
            }
        case "COLOR_CHANGE":
            return {
                value: state.value,
                color: action.color
            }
        case "USER_SET_NUMBER":
            return {
                value: document.getElementById('userInput').value
            }
        default:
            return state;
    }
}