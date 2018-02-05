import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="backgroundImage"></div>
        <div className="content">
          <Nav />
          <Main />
        </div>

      </div>
    );
  }
}

export default App;
