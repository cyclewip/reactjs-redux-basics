const buildingReducer = (state = {
    buildings: [
        {address: '', price: '', location: ''},
    ],
    address: "",
    price: "",
    location: ""
}, action) => {
    switch(action.type){
        case "ADD_BUILDING":
        state = {
            ...state,
            buildings: [...state.buildings, action.payload]
            // houses: Object.assign({}, state.houses, action)
            // Object.assign({}, state, {arr: [..state.houses, action.payload})
        };
            break;
    }
    switch(action.type){
        case "SET_BUILDING_ADDRESS":
        state = {
            ...state,
            address: action.payload
            // address: action.payload
        };
            break;
    }
    switch(action.type){
        case "SET_BUILDING_PRICE":
        state = {
            ...state,
            price: action.payload
        };
            break;
    }
    switch(action.type){
        case "SET_BUILDING_LOCATION":
        state = {
            ...state,
            location: action.payload
        };
            break;
    }
    return state;
};
export default buildingReducer;