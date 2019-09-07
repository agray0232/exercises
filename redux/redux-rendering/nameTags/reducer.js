const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    var newState;

    switch (type) {
        case "ADD_NAMETAG":

            return [
                ...state,
                action.name
            ]
        default:
            return state;
    }
}