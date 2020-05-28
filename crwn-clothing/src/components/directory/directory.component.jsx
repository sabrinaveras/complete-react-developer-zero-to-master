import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector} from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({sections}) => (

    
     <div className="directory-menu">
          {    /* ({}) -> destructure the state === ({title, imageUrl, size, id, linkUrl}) */
               sections.map( ({id, ...otherSectionProps} ) =>(
                  <MenuItem key={id} {...otherSectionProps}/>
               ))
          }
     </div>

)

/*
*
*    <MenuItem key={id} {...otherSectionProps}/> === <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} id={id} linkUrl={linkUrl}/>
*
* */

const mapStateToProps = createStructuredSelector({
     sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);