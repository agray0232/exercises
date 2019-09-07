const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    var newState;

    switch (type) {
        case "ADD_RANDOM_CIRCLE":
            var newRadius = 100 * Math.random();
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

            return [
                ...state,
                {
                    radius: newRadius,
                    color: randomColor
                }
            ]
        default:
            return state;
    }
}