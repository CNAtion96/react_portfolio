import React, { Component } from 'react';
import './App.css';
import Main from './Main';

class App extends Component {
  state = {
    activeNav: ["active", "", "", ""],
    navItems: [
      {
        pageName: "/",
        icon: "home",
        key: 0
      },
      {
        pageName: "/portfolio",
        icon: "web",
        key: 1
      },
      {
        pageName: "/about",
        icon: "account_box",
        key: 2
      },
      {
        pageName: "/contact",
        icon: "email",
        key: 3
      }
    ]
  }

  changeActiveHandler = (i) => {
    console.log(i);
    if(i === 0){
      console.log(i);
      this.setState({
        activeNav: ["active","","",""]
      })
    } else if(i === 1) {
      console.log(i);
      this.setState({
        activeNav: ["","active","",""]
      })
    } else if(i === 2) {
      console.log(i);
      this.setState({
        activeNav: ["","","active",""]
      })
    } else if(i === 3) {
      console.log(i);
      this.setState({
        activeNav: ["","","","active"]
      })
    } else {
      console.log("oops");
    }
  }

  render() {
    return (
      <div className="App">

        <div className="backgroundImage"></div>
        <div className="content">
          <Main navItems={this.state.navItems} active={this.state.activeNav} />
        </div>

      </div>
    );
  }
}

export default App;
