import React from "react";
import styled from "styled-components"

const Div = styled.div`
    margin-right: 5%;
    margin-left: 5%;
    border: 5px outset pink;
    width: 90%;
    bottom: 2%;
    &:hover {
        background-color: yellow;
    }
`;

const FlexBox = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const Footer = (props) => {
    return (
            <Div>
                <FlexBox>
                        <div>
                            <h1>left</h1>
                        </div>
                        <div>
                            <h1>middle</h1>
                        </div>
                        <div>
                            <h1>right</h1>
                        </div> 
                </FlexBox>
            </Div>
        
    );
}