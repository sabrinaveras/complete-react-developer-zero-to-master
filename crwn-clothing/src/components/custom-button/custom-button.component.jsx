import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
	
	/*
	*   What we'll do is conditionally render a className based off of a prop.
	*   So we'll call the prop is GoogleSignIn and than we will conditionally render using string interpolation the class
	*   name of Google SignIn.
	*
	*   Otherwise we'll render an empty string and then we will also always render custom button.
	*
	*   Using this we will now render this class of GoogleSignIn and if this property is true if not then there will be
	*   an empty string and custom button is also rendered.
	* */
	
	
  <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button `} {...otherProps} >{children}</button>
);

export default CustomButton;