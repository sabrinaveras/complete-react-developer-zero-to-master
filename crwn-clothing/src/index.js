import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));

/*
*
*   BrowserRouter is a component that we're going to wrap around the application and what: this component does is it gives
*   the application that's sitting between this components all of the functionality of routing that this library provides.
*
* */