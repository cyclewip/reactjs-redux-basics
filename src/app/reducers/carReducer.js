const carReducer = (state = {
    cars: [
        {brand: '', price: '', enginesize: ''},
    ],
    brand: "Sockerbruket",
    price: 50000,
    enginesize: "V8"
}, action) => {
    switch(action.type){
        case "SET_CAR_BRAND":
        state = {
            ...state,
            brand: action.payload
        };
            break;
    }
    switch(action.type){
        case "SET_CAR_PRICE":
        state = {
            ...state,
            price: action.payload
        };
            break;
    }
    switch(action.type){
        case "SET_CAR_ENGINESIZE":
        state = {
            ...state,
            enginesize: action.payload
        };
            break;
    }
    return state;
};
export default carReducer;