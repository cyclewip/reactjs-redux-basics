export function addBuilding(house){
    return{
        type: "ADD_BUILDING",
        payload: house
    };
}

export function setBuildingAddress(address){
    return{
        type: "SET_BUILDING_ADDRESS",
        payload: address
    };
}
export function setBuildingPrice(price){
    return{
        type: "SET_BUILDING_PRICE",
        payload: price
    };
}
export function setBuildingLocation(price){
    return{
        type: "SET_BUILDING_LOCATION",
        payload: price
    };
}
