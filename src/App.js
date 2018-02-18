import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import axios from 'axios';

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
        pageName: "/about",
        icon: "account_box",
        key: 1
      },
      {
        pageName: "/projects",
        icon: "web",
        key: 2
      },
      {
        pageName: "/contact",
        icon: "email",
        key: 3
      }
    ],
    project: {
      title: "",
      mainImage: "",
      imgs: [],
      repo: "",
      description: "",
      tech: [],
      id: ""
    },
    projects: []
  }

  componentDidMount(){
    let projects = [];
    axios.get('https://portfoliobackend.herokuapp.com/project')
    .then(function (res) {
        console.log(res);
        projects = res.data;
        return(projects);
        console.log(projects);
    })
    .catch(function (err) {
        console.log(err);
    });
    setTimeout( () => {
      this.setState({
        projects: projects
      })
    }, 1500)
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

  changeProjectHandler = (id) => {
    let projectUrl = 'https://portfoliobackend.herokuapp.com/project/'+id;
    let projectStart = {};
    let project = this.state.project;
    axios.get(projectUrl)
      .then(function (res) {
        console.log(res);
        projectStart = res.data;
        console.log(projectStart);
        project = {
          title: projectStart.title,
          mainImage: projectStart.mainImage,
          imgs:  projectStart.images,
          description: projectStart.description,
          tech: projectStart.technologies,
          id: projectStart._id
        };
        console.log(project);
        this.setState({
          project: {
            title: project.title,
            imgs: project.imgs,
            mainImage: project.mainImage,
            description: project.description,
            tech: project.technologies,
            id: project._id
          }
        })
      }.bind(this))
      .catch(function (err) {
          console.log(err);
      });
    setTimeout( () => {
      console.log(this.state.project)
    }, 1500)
  }

  render() {
    return (
      <div className="App">

        <div className="backgroundImage"></div>
        <div className="content">
          <Main 
            navItems={this.state.navItems} 
            active={this.state.activeNav} 
            changeActive={this.changeActiveHandler} 
            changeProject={this.changeProjectHandler}
            currentProject={this.state.project}
            projectList={this.state.projects}
          />
        </div>

      </div>
    );
  }
}

export default App;
