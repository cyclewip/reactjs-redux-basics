
import React from "react";
import { connect } from 'react-redux'
// import { Router, Route, Switch } from 'react-router'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { Router, Route, browserHistory ,Link } from 'react-router-dom'

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, browserHistory, IndexRoute } from 'react-router-dom'



import { TestComp } from "../components/TestComp";
import { User } from "../components/User";
import { House } from "../components/House";
import { Main } from "./Main";


import { setName } from "../actions/userActions"
import { setAge } from "../actions/userActions"

import { setHouseAddress } from "../actions/houseActions"
import { setHousePrice } from "../actions/houseActions"
import { setHouseLocation } from "../actions/houseActions"
import { addHouse } from "../actions/houseActions"

import { setBuildingAddress } from "../actions/buildingActions"
import { setBuildingPrice } from "../actions/buildingActions"
import { setBuildingLocation } from "../actions/buildingActions"
import { addBuilding } from "../actions/buildingActions"

import { setCarBrand } from "../actions/carActions"
import { setCarPrice } from "../actions/carActions"
import { setCarEngineSize } from "../actions/carActions"


import { subtractNumber } from "../actions/mathActions"
import { addNumber } from "../actions/mathActions"
import { multiplyNumber } from "../actions/mathActions"
import { divideNumber } from "../actions/mathActions"
import { SkyScraper } from "../components/Skyscraper";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
          address: '',
          price: '',
          location: '',
          number: '',

          carBrand: '',
          carPrice: '',
          carEngineSize: '',

          number: '',
          houses: [
            {address: 'yoo', price: '', location: ''},
            {address: 'heej', price: '', location: ''},
        ],
        }
    }
    handleChangeAddress = e => this.setState({address: e.target.value});
    handleChangePrice = e => this.setState({price: e.target.value});
    handleChangeLocation = e => this.setState({location: e.target.value});

     addHouse(array, adr, pri, loc) {
        var address, price, location;

        array.address = adr;
        array.price = pri;
        array.location = loc;
      }
    
    render() {   
        var houses = {
            address: '', price: '', location: ''
        }
    
        console.log(houses);  
        this.addHouse(houses, "Vidablick 6", 200, "Glumslov");
        console.log(houses);
        return (
            
            <div className="container"> 
              <div>
                <Route path="/" render={(props) => <Main 
               
                    changeUsername={() => this.props.setName("Anna")} 
                    changeUserage={() => this.props.setAge("50")}
                
                    address ={this.props.valueAddress} onChangeAddress={this.handleChangeAddress}
                    price ={this.props.valuePrice} onChangePrice={this.handleChangePrice}
                    location ={this.props.valueLocation} onChangeLocation={this.handleChangeLocation}

                    setAddress={() => this.props.setBuildingAddress(this.state.address)}
                    setPrice={() => this.props.setBuildingPrice(this.state.price)}
                    setLocation={() => this.props.setBuildingLocation(this.state.location)} 

                    setCarBrand={() => this.props.setCarBrand(this.state.carBrand)}
                    setCarPrice={() => this.props.setCarPrice(this.state.carPrice)}
                    setCarEngineSize={() => this.props.setCarEngineSize(this.state.carEngineSize)} 


                    addNumber = {() => this.props.addNumber(10)}
                    subtractNumber = {() => this.props.subtractNumber(10)}
                    divideNumber = {() => this.props.divideNumber(2)}
                    multiplyNumber = {() => this.props.multiplyNumber(2)}

                    number = {() => this.props.math.result}
                />}/>    
                <Route path="/testcomp" render={(props) => <TestComp/>}/>
                
                <Route path="/user" render={(props) => <User 
                    username={this.props.user.name} 
                    userage={this.props.user.age} 
                    number={this.props.math.result} />} />            
                
                <Route path="/house" render={(props) => <House 
                    address={this.props.building.address} 
                    price={this.props.building.price}
                    location={this.props.building.location}
                />}/>     
                </div>   
                {/* <Route path="/skyscraper" component={SkyScraper} address={this.props.building.address}
                    price={this.props.building.price}
                    location={this.props.building.location}
                /> */}
                {/* <User username={this.props.user.name} userage={this.props.user.age} userage={this.props.math.result} />
                <House address={this.props.building.address}
                    price={this.props.building.price}
                    location={this.props.building.location}
                />
                <SkyScraper address={this.props.building.address}
                    price={this.props.building.price}
                    location={this.props.building.location}
                /> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
        house: state.house,
        building: state.building,
        car: state.car
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAge: (age) => {
            dispatch(setAge(age)); // set to whatever you want
        },
        addHouse: (address) => {
            dispatch(addHouse(address));
        },
        setHouseAddress: (address) => {
            dispatch(setHouseAddress(address));
        },
        setHousePrice: (price) => {
            dispatch(setHousePrice(price));
        },
        setHouseLocation: (location) => {
            dispatch(setHouseLocation(location));
        },
        setBuildingAddress: (address) => {
            dispatch(setBuildingAddress(address));
        },
        setBuildingPrice: (price) => {
            dispatch(setBuildingPrice(price));
        },
        setBuildingLocation: (location) => {
            dispatch(setBuildingLocation(location));
        },



        setCarBrand: (brand) => {
            dispatch(setCarBrand(brand));
        },
        setCarPrice: (price) => {
            dispatch(setCarPrice(price));
        },
        setCarEngineSize: (enginesize) => {
            dispatch(setCarEngineSize(enginesize));
        },

    


        addNumber: (number) => {
            dispatch(addNumber(number));
        },
        subtractNumber: (number) => {
            dispatch(subtractNumber(number));
        },
        multiplyNumber: (number) => {
            dispatch(multiplyNumber(number));
        },
        divideNumber: (number) => {
            dispatch(divideNumber(number));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);