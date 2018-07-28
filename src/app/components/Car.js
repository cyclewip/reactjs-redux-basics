import React from "react";

export const Car = (props) => {
    return (
        <div>
            <p>Brand: {props.brand}</p><input type="text" value={props.brand} onChange={props.onChangeAddress}></input>        
            <p>Price: {props.price}</p> <input type="text" value={props.price} onChange={props.onChangePrice}></input>
            <p>Engine size: {props.engineSize}</p> <input type="text" value={props.engineSize} onChange={props.onChangeLocation}></input>
        </div>
    );
}