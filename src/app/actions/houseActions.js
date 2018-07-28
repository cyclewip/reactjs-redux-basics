export function addHouse(house){
    return{
        type: "ADD_HOUSE",
        payload: house
    };
}

export function setHouseAddress(address){
    return{
        type: "SET_HOUSE_ADDRESS",
        payload: address
    };
}
export function setHousePrice(price){
    return{
        type: "SET_HOUSE_PRICE",
        payload: price
    };
}
export function setHouseLocation(price){
    return{
        type: "SET_HOUSE_LOCATION",
        payload: price
    };
}
