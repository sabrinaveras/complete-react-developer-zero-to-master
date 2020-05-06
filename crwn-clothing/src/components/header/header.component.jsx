import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";


import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/crown.svg";
/*
*   This is a new special syntax when importing SVG in React. The ReactComponent import name is special and tells Create
*   React App that you want a React component that renders an SVG, rather than its filename.
*
*   https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
* */


import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
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
             
             <CartIcon/>
        </div>
       
       { hidden ? null: <CartDropdown/>}
       
   </div>
);


//  This naming can be anything but mapStateToProps is standard with redux codebases
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});



/*
*   We have import this function called connect() from react-redux, connect is a higher order component that lets us modify
*   our component to have access to things related to redux.
*
*   Now as we remember higher the components are just functions that take components as arguments and then return you a new
*   souped up component.
*
* */

export default connect(mapStateToProps)(Header);

/*
*   So what's we'll do with connect() is we are actually going to pass it to functions.
*
*   The second one being optional and then that'll give us back another higher component that we pass it.
*
*   Our Header now what if it that we pass as the first argument of connect(). It's going to be the function that allows
*   us to access the states with the state being are reducer our root producer to be specific.
*
* */