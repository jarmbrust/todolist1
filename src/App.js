import React, { Component } from 'react';
import './App.css';
import EnterBar from './components/enterBar';
import DisplayList from './components/displayList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">hello world!</h1>
        </header>
        <div className="App-intro">
          <EnterBar />
          <DisplayList />
        </div>
      </div>
    );
  }
}
