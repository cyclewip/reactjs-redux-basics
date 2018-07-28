const houseReducer = (state = {
    houses: [
        {address: '', price: '', location: ''},
    ],
    address: "Sockerbruket",
    price: 50,
    location: "Helsingborg"
}, action) => {
    switch(action.type){
        case "ADD_HOUSE":
        state = {
            ...state,
            houses: [...state.houses, action.payload]
            // houses: Object.assign({}, state.houses, action)
            // Object.assign({}, state, {arr: [..state.houses, action.payload})
        };
            break;
    }
    switch(action.type){
        case "SET_HOUSE_ADDRESS":
        state = {
            ...state,
            address: action.payload
            // address: action.payload
        };
            break;
    }
    switch(action.type){
        case "SET_HOUSE_PRICE":
        state = {
            ...state,
            price: action.payload
        };
            break;
    }
    switch(action.type){
        case "SET_HOUSE_LOCATION":
        state = {
            ...state,
            location: action.payload
        };
            break;
    }
    return state;
};
export default houseReducer;