import React, { Component } from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            monsters: [],
            searchField: ""
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

        /*
        * this is equal to const monsters = this.state.monsters
        * and const searchField = this.state.searchField
        * */
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );


        return (
           <div className="App">

               <input type="search" name="" id=""
                      placeholder="search monsters"
                      onChange={event => this.setState({ searchField: event.target.value})} />

               {/* CardList handle with monster's list
                 monsters is a props
                */}
               <CardList monsters={filteredMonsters} > {/* monsters={this.state.monsters} */}
                 {/*{this.state.monsters.map(monster => (
                        <h1 key={monster.id}> {monster.name} </h1>
                   ))}*/}
               </CardList>
           </div>
        );
    }

}

export default App;
