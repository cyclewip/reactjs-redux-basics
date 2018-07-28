import React from "react";
import styled from "styled-components"
import { RightAside } from "../components/Aside/RightAside"
import { LeftAside } from "../components/Aside/LeftAside"
import { Middle } from "../components/Middle"
import { Footer } from "../components/Footer"


const FlexBox = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const Main = (props) => {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                    {/* <input >Price:</input>
                    <input >Location:</input> */}
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                props.changeUsername('Anna');
                                props.changeUserage('30');
                                }}>>Change user info
                            </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                    <br/>
                        <button className="btn btn-primary"  type=""
                        onClick={() => {
                                props.setAddress('Vidablick');
                                props.setPrice('300');
                                props.setLocation('Landskrona');
                            }}>           
                            Create house</button>
                            <button className="btn btn-primary"  type=""
                        onClick={() => {
                                props.setAddress('Bredablick');
                                props.setPrice('5000');
                                props.setLocation('Landskrona');
                            }}>           
                            Create skyscraper</button>
                            <input type="text" value={props.valueAddress} onChange={props.onChangeAddress} placeholder="Address"></input>
                            <input type="text" value={props.valuePrice} onChange={props.onChangePrice} placeholder="Price"></input>
                            <input type="text" value={props.valueLocation} onChange={props.onChangeLocation} placeholder="Location"></input>
                            <button className="btn btn-primary"  type="" onClick={() => props.addNumber(1)}>Add number</button>
                            <button className="btn btn-primary"  type="" onClick={() => props.subtractNumber(1)}>Subtract number</button>
                            <button className="btn btn-primary"  type="" onClick={() => props.multiplyNumber(1)}>Divide number</button>
                            <button className="btn btn-primary"  type="" onClick={() => props.divideNumber(1)}>Multiply number</button>            
                    </div>
                </div>
                <FlexBox>
                    <div>
                        <RightAside></RightAside>
                    </div>
                    <div>
                        <Middle></Middle>
                    </div>
                    <div>
                        <LeftAside></LeftAside>
                    </div>
                </FlexBox>
                <div>
                    <Footer></Footer>
                </div>
            </div>      
    );
}