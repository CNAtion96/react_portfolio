import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';


const Main = (props) => {
    return (
        <div className="content">
            <Header navItems={props.navItems} active={props.active} changeActive={props.changeActive} />
            <main className="pages">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route 
                        exact path="/projects" 
                        render={
                            routeProps => 
                            <Projects 
                                changeProject={props.changeProject}
                                currentProject={props.currentProject}
                                projectList={props.projectList}
                            />
                        }
                    />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </main>
        </div>
    )
}

export default Main;