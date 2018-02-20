import React from 'react';
import ReactTooltip from 'react-tooltip';

const About = () => {

    return (
        <div className="aboutPage">
            <div className="aboutContainer">
                <div className="about">
                    <h1>About</h1>
                    <h3>
                        I'm a Front-End Developer working on the skills to become a Full-Stack Developer. 
                    </h3>
                    <h3>
                        My interests include reading, listening to music, and coffee.
                    </h3>
                    <h3>
                        Currently Reading: The Sword of Truth Series by Terry Goodkind
                    </h3>
                    <h3>
                        Currently Working on: Vue.js and Electron Spotify application
                    </h3>
                </div>
                
            </div>
            <div className="skillsContainer">
            <ReactTooltip />
                <h1> Skills </h1>
                <div className="skills">
                    <div className="skillHeader comfortable">
                        <h3> Comfortable </h3>
                    </div>

                    <div className="skillContent">
                        <i data-tip="HTML5" className="devicon-html5-plain colored skillIcon"></i>
                        <i data-tip="CSS3" className="devicon-css3-plain colored skillIcon"></i>
                        <i data-tip="JavaScript" className="devicon-javascript-plain colored skillIcon"></i>
                        <i data-tip="React.js" className="devicon-react-original colored skillIcon"></i>
                        <i data-tip="AngularJS" className="devicon-angularjs-plain colored skillIcon"></i>
                        <i data-tip="Bootstrap" className="devicon-bootstrap-plain colored skillIcon"></i>
                        <i data-tip="GIT" className="devicon-git-plain colored skillIcon"></i>
                        <i data-tip="GitHub" className="devicon-github-plain colored skillIcon"></i>
                        <i data-tip="SASS" className="devicon-sass-original colored skillIcon"></i>
                    </div>
                </div>

                <div className="skills">
                    <div className="skillHeader familiar">
                        <h3> Familiar </h3>
                    </div>

                    <div className="skillContent">
                        <i data-tip="Gulp" className="devicon-gulp-plain colored skillIcon"></i>
                        <i data-tip="Heroku" className="devicon-heroku-original colored skillIcon"></i>
                        <i data-tip="jQuery" className="devicon-jquery-plain colored skillIcon"></i>
                        <i data-tip="mongoDB" className="devicon-mongodb-plain colored skillIcon"></i>
                        <i data-tip="Node.js" className="devicon-nodejs-plain colored skillIcon"></i>
                        <i data-tip="Express" className="devicon-express-original colored skillIcon"></i>
                    </div>
                </div>

                <div className="skills">
                    <div className="skillHeader learning">
                        <h3> Learning </h3>
                    </div>

                    <div className="skillContent">
                        <i data-tip="Vue.js" className="devicon-vuejs-plain colored skillIcon"></i>
                        <i data-tip="React Native" className="devicon-react-original colored skillIcon"></i>
                        <i data-tip="Ruby" className="devicon-ruby-plain colored skillIcon"></i>
                        <i data-tip="Rails" className="devicon-rails-plain colored skillIcon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;