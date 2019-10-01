import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {

     //return <div className="card-list">{props.children}</div>

     return <div className="card-list">

          {/* for each monster is create a card with information */}
          {props.monsters.map(monster => (

             // key is the id of which card and monster it's the information pass by props
             <Card key={monster.id} monster={monster} />
          ))}
     </div>
};

/*<h1 key={monster.id}> {monster.name} </h1>*/