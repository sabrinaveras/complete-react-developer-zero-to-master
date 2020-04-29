import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
/*
*   This is a new special syntax when importing SVG in React. The ReactComponent import name is special and tells Create
*   React App that you want a React component that renders an SVG, rather than its filename.
*
*   https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
* */


import "./header.styles.scss";

const Header = ({ currentUser }) => (
   <div className="header">
       
        <Link to="/" className="logo-container">
               <Logo className="logo"/>
        </Link>
       
        <div className="options">
             <Link to="/shop" className="option">
                  SHOP
             </Link>
             <Link to="/shop" className="option">
                  CONTACT
             </Link>

             {
                  currentUser ?
                     <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                     :
                     <Link to="/signin" className="option">SIGN IN</Link>
             }
        </div>
   </div>
);

export default Header;