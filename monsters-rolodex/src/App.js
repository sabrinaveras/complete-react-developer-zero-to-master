import React, { Component } from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

/*
* About arrow functions and binding in React. A good rule of thumb is this:
*   Use arrow functions on any class methods you define and aren't part of React (i.e. render(),
*   componentDidMount()).
* */

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            monsters: [],
            searchField: "",
        };

        /*
        * bind - bind is a method on any function that returns a new function where the
        * context of this is set to whatever we passed to it.
        * */

        //this.handleChange = this.handleChange.bind(this);
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

    /*
    *  bind this to the place where this arrow function was defined in the first place and
    *  arrow function is our component.
    * */
    handleChange = (event) =>{  // if the function is write is away it's not necessary the bind
        this.setState({ searchField: event.target.value})
    };

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

               <h1>Monsters Rolodex</h1>

                <SearchBox placeholder="search monsters"
                           handleChange={this.handleChange} /> {/* this.handleChange === event => this.handleChange */}
               {/*<input type="search" name="" id=""
                      placeholder ="search monsters"
                      onChange={event => this.setState({ searchField: event.target.value})} />*/}

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
