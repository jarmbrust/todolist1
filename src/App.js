import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EnterBar from './components/enterBar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    }

    this.todoItemEntered('test');
  }

  todoItemEntered(item) {

    if (this.state.todoItems) {
      var list = this.state.todoItems;
      list.push(item);

      this.setState({
        todoItems: list
      });
    }
  }

  render() {
    const test = (test) => { this.todoItemEntered(test) };
    console.log(test);

    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">hello world!</h1>
        </header>
        <div className="App-intro">
          <EnterBar/>
        </div>
   
      </div>
    );
  }
}

export default App;
