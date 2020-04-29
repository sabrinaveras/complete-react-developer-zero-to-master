import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";


//                we are destructure the props
const MenuItem = ({ history, match, title, imageUrl, size, linkUrl }) => (
   
    /* className={`${size} menu-item`} === className="large menu-item" --> check if exist a value for size  */
   <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
       
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
        
        <div className="content">
             <h1 className="title">{title.toUpperCase()}</h1>
             <span className="subtitle">SHOP NOW</span>
        </div>
       
   </div>
   
);


export default withRouter(MenuItem);

/*
*   withRouter
*
*   What withRouter is it a higher order component and higher order component is essentially a function that takes a
*   component as argument and which turns you a modified component.
*
*   So just like how our MenuItem is a function that takes props and renders out a component a higher order component a
*   higher order component is a function that takes any component and modifies it in some way and then returns you that
*   new modified component.
*
*   So it's kind of like a function that gives you back a powered up component. In this case where powering up our MenuItem
*   component to have access to those things related to our router.
*
*   withRouter will then return us back the same name of this menu item. Whatever it is that we're explaining by default
*   it will return us back a super powered menu item component with access now to those location match and history
*   prompts that we need access to.
*
* */