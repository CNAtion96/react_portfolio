import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './Main';

class App extends Component {
  state = {
    activeNav: ["active", "", "", ""]
  }

  changeActiveHandler = (i) => {
    console.log('clicked');
    if (i === 0) {
      this.setState({
        activeNav: ["active","","",""]
      })
    } else if (i === 1) {
      this.setState({
        activeNav: ["","active","",""]
      })
    } else if (i === 2) {
      this.setState({
        activeNav: ["","","active",""]
      })
    } else {
      this.setState({
        activeNav: ["","","","active"]
      })
    }
  }

  render() {
    return (
      <div className="App">

        <div className="backgroundImage"></div>
        <div className="content">
          <Nav active={this.state.activeNav} changeActive={this.changeActiveHandler}/>
          <Main />
        </div>

      </div>
    );
  }
}

export default App;
