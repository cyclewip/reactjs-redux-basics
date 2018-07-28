import React from "react";
import styled from "styled-components"

const Div = styled.div`

    border: 5px outset pink;
    height: 550px;
    margin-top: 5%;
    &:hover {
        background-color: yellow;
    }
`;

const FlexBox = styled.div `

    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const LeftAside = (props) => {
    return (
        
            <Div>
                        <div>
                            <h1>My left aside</h1>
                        </div>
                        <div>
                            <h1>is over here</h1>
                        </div>
                        <div>
                            <h1>i tell ya!</h1>
                        </div> 
            </Div>
        
    );
}