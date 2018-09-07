import React, { Component } from 'react';
import icon from './icon.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-logo" alt="icon" />
          <h1 className="App-title">Welcome to @masayuki14</h1>
        </header>
        <p className="App-intro">
          Under construction.
        </p>
      </div>
    );
  }
}

export default App;
