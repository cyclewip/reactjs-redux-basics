export function setCarBrand(brand){
    return{
        type: "SET_CAR_BRAND",
        payload: brand
    };
}
export function setCarPrice(price){
    return{
        type: "SET_CAR_PRICE",
        payload: price
    };
}
export function setCarEngineSize(enginesize){
    return{
        type: "SET_CAR_ENGINESIZE",
        payload: enginesize
    };
}
