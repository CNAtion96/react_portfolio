import React from 'react';
import ReactTooltip from 'react-tooltip';

const About = () => {

    return (
        <div>
            <div className="aboutContainer">
                <div className="about">
                    <h1>About</h1>
                    <h3>
                        I'm a Frontend Developer working on the skills to become a Fullstack Developer. 
                    </h3>
                    <h3>
                        My interests include reading, listening to music, and coffee.
                    </h3>
                    <h3>
                        Currently Reading: The Sword of Truth Series by Terry Goodkind
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
                        <i data-tip="HTML5" class="devicon-html5-plain colored skillIcon"></i>
                        <i data-tip="CSS3" class="devicon-css3-plain colored skillIcon"></i>
                        <i data-tip="JavaScript" class="devicon-javascript-plain colored skillIcon"></i>
                        <i data-tip="React.js" class="devicon-react-original colored skillIcon"></i>
                        <i data-tip="AngularJS" class="devicon-angularjs-plain colored skillIcon"></i>
                        <i data-tip="Bootstrap" class="devicon-bootstrap-plain colored skillIcon"></i>
                        <i data-tip="GIT" class="devicon-git-plain colored skillIcon"></i>
                        <i data-tip="GitHub" class="devicon-github-plain colored skillIcon"></i>
                        <i data-tip="SASS" class="devicon-sass-original colored skillIcon"></i>
                    </div>
                </div>

                <div className="skills">
                    <div className="skillHeader familiar">
                        <h3> Familiar </h3>
                    </div>

                    <div className="skillContent">
                        <i data-tip="Gulp" class="devicon-gulp-plain colored skillIcon"></i>
                        <i data-tip="Heroku" class="devicon-heroku-original colored skillIcon"></i>
                        <i data-tip="jQuery" class="devicon-jquery-plain colored skillIcon"></i>
                        <i data-tip="mongoDB" class="devicon-mongodb-plain colored skillIcon"></i>
                        <i data-tip="Node.js" class="devicon-nodejs-plain colored skillIcon"></i>
                        <i data-tip="Express" class="devicon-express-original colored skillIcon"></i>
                    </div>
                </div>

                <div className="skills">
                    <div className="skillHeader learning">
                        <h3> Learning </h3>
                    </div>

                    <div className="skillContent">
                        <i data-tip="Vue.js" class="devicon-vuejs-plain colored skillIcon"></i>
                        <i data-tip="React Native" class="devicon-react-original colored skillIcon"></i>
                        <i data-tip="Ruby" class="devicon-ruby-plain colored skillIcon"></i>
                        <i data-tip="Rails" class="devicon-rails-plain colored skillIcon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;