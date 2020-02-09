import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
 

import { Provider } from 'react-redux'; 
import {createStore, combineReducers, compose, applyMiddleware } from 'redux';

import * as serviceWorker from './serviceWorker';

// import ChangeCanvasSize  from '../src/main/headerSelector/reducer'; 
// import ChangeColor from '../src/main/colorPicker/reducer'; 
// import SetCells from '../src/main/canvasArea/reducer'; 

import ChangeStep from '../src/antDesign/Steps/reducer'; 
import SaveInputValues from '../src/antDesign/fundingAgent/reducer'; 

const rootReducers = combineReducers({
    ChangeStep: ChangeStep, 
    SaveInputValues: SaveInputValues
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        rootReducers, 
        composeEnhancer(
            //applyMiddleware(thunk)     
        )
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
