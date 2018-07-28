import React from "react";
import styled from "styled-components"

import { Car } from "./Car";

const Div = styled.div`

    border: 5px outset pink;
    width: 200px;
    height: 400px;
    &:hover {
        background-color: yellow;
    }
`;

export const Middle = (props) => {
    return (
            <Div>
                <h3>Add a car</h3>
                <div>
                    {<Car />
                        // brand,
                        // price,
                        // engineSize
                   }
                    <button className="btn btn-primary"  type="" onClick={() => {
                           props.setBrand('BMW');
                           props.setPrice('5000');
                           props.setEngineSize('V8');
                       }}>Add car</button>
                </div>
            </Div>
    );
}