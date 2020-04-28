import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";


//                we are destructure the props
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
   
    /* className={`${size} menu-item`} === className="large menu-item" --> check if exist a value for size  */
   <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
       
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
        
        <div className="content">
             <h1 className="title">{title.toUpperCase()}</h1>
             <span className="subtitle">SHOP NOW</span>
        </div>
       
   </div>
   
);

/*
*
* history
*
*
*
* */

export default withRouter(MenuItem);