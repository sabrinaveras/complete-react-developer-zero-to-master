import React, { Component } from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            monsters: [],
        };
    }

    /*
    * When the page is reload the function is called and the
    * monster's list is updated
    * */
    componentDidMount() {

        // fetch always return Promise, which handle with javascript's asynchronicity
        fetch("https://jsonplaceholder.typicode.com/users")
           .then(response => response.json())  // API response
           .then(users => this.setState({ monsters: users }))  // fill the state with monsters
    }

    render() {
        return (
           <div className="App">

               {/* CardList handle with monster's list
                 monsters is a props
                */}
               <CardList monsters={this.state.monsters} >
                 {/*{this.state.monsters.map(monster => (
                        <h1 key={monster.id}> {monster.name} </h1>
                   ))}*/}
               </CardList>
           </div>
        );
    }

}

export default App;
