import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';
import App from './App';

ReactDOM.render( <Provider store={store}> <BrowserRouter> <App /> </BrowserRouter> </Provider>, document.getElementById('root'));

/*
*
*   BrowserRouter is a component that we're going to wrap around the application and what: this component does is it gives
*   the application that's sitting between this components all of the functionality of routing that this library provides.
*
* */

/*
*   This Provider is a component that is the parent of everything inside of our application. And as the parent it allows
*   us to get access to all of the things related to the store that we're going to put all of the actual code we want to
*   store on our reading stage. So that's all this Provider is and it's a component and it's got to be the parent of
*   everything.
*
* */