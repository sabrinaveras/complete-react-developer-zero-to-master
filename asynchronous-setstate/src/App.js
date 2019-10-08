import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      meaningOfLife: 10
    }
  }

  // this is a state as a class field declaration
  // state = {
  //   meaningOfLife: 10
  // }

  handleClick = () =>{
      // When we call setState is asynchronous and it means that when we click on the button this
      // doesn't happen immediately when we call this setSate
      // this.setState({ meaningOfLife: this.state.meaningOfLife + 1});
      // console.log(this.state.meaningOfLife);

      // callback
      // We can give a second parameter to our setState call which is our callback and the callback
      // simply takes a function so it can just have a simple array function.
      // this.setState({ meaningOfLife: this.state.meaningOfLife + 1},
      //  () => console.log(this.state.meaningOfLife));


      // good programming practice
      // The important part is the first parameter this object instead of an object cal also be a function
      // and it's a function that receives two things: one is the previous state and then the
      // second parameter is the previous props.
      this.setState((prevState, prevProps) => {
            return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}},
         () => console.log(this.state.meaningOfLife))

  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button onClick={this.handleClick}>
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
