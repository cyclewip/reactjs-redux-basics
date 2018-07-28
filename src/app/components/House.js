import React from "react";

export const House = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>Houses</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>Address: {props.address}</p>
                    <p>Price: {props.price}</p>
                    <p>Location: {props.location}</p>
                </div>
            </div>
        </div>
    );
}