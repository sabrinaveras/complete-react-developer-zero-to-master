import React from "react";

import "./search-box.styles.css";

/*
* function component unlike class component suchlike as App.js component
* Their don't have access to state because their don't have access to constructor
* which the class method on our component that we import from react
* that we extent our class from
*
* Their don't have access to lifecycle methods, their don't have internal state and
* like lifecycle because we don't always need to use lifecycle method or internal state
*
* Sometime all we want do is render some HTML and that what a function component really is.
*
* Unlike a class component a function component is just a component that gets some props and returns
* some HTML.
* */

export const SearchBox = ({ placeholder, handleChange }) => (
    <input className="search" type="search" name="" id=""
           placeholder={placeholder}
           onChange={handleChange} />
);