import React, { Component } from 'react';
import icon from './icon.jpg';
import './App.css';
import Links from './components/Links'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-logo" alt="icon" />
          <h1 className="App-title">Welcome to @masayuki14</h1>
        </header>
        <div>
          <Links />
        </div>

        <p className="App-intro" style={{"backgroundColor": "#eee", "padding": "50px 0", "marginTop": "50px"}}>
          Under construction.
        </p>
      </div>
    );
  }
}

export default App;
