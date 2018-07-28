import "regenerator-runtime/runtime";
import {createStore, combineReducers, applyMiddleware} from "redux"
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
// import promise from "redux-promise-middleware"

import rootSaga from "./sagas"
const sagaMiddleware = createSagaMiddleware();

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import house from "./reducers/houseReducer";
import building from "./reducers/buildingReducer";
import car from "./reducers/carReducer";


export default createStore(
    combineReducers({
        math,
        user,
        house,
        building,
        car
    }), 
    {}, 
    applyMiddleware(createLogger(), sagaMiddleware,  thunk)
);
    sagaMiddleware.run(rootSaga);


// , promise()