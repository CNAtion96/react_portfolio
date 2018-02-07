import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';


const Main = (props) => {
    return (
        
        <main className="pages">
        <Header navItems={props.navItems} active={props.active} />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
        </main>
    )
}

export default Main;