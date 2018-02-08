import React from 'react';

const About = () => {

    return (
        <div>
            <div className="aboutContainer">
                <div className="about">
                    <h1>About Me</h1>
                    <p></p>
                </div>
                
            </div>
            <div className="skillsContainer">
                <h1> My Skills </h1>
                <div className="skills">
                    <div className="skillHeader">
                        <h3> Comfortable </h3>
                    </div>

                    <div className="skillContent">
                        <i class="devicon-html5-plain colored skillIcon"></i>
                        <i class="devicon-css3-plain colored skillIcon"></i>
                        <i class="devicon-javascript-plain colored skillIcon"></i>
                        <i class="devicon-react-original colored skillIcon"></i>
                        <i class="devicon-angularjs-plain colored skillIcon"></i>
                        <i class="devicon-bootstrap-plain colored skillIcon"></i>
                        <i class="devicon-git-plain colored skillIcon"></i>
                        <i class="devicon-github-plain colored skillIcon"></i>
                        <i class="devicon-sass-original colored skillIcon"></i>
                    </div>
                </div>

                <div className="skills">
                    <div className="skillHeader">
                        <h3> Familiar </h3>
                    </div>

                    <div className="skillContent">
                        <i class="devicon-gulp-plain colored skillIcon"></i>
                        <i class="devicon-heroku-original colored skillIcon"></i>
                        <i class="devicon-jquery-plain colored skillIcon"></i>
                        <i class="devicon-mongodb-plain colored skillIcon"></i>
                        <i class="devicon-nodejs-plain colored skillIcon"></i>
                        <i class="devicon-express-original colored skillIcon"></i>
                    </div>
                </div>

                <div className="skills">
                    <div className="skillHeader">
                        <h3> Learning </h3>
                    </div>

                    <div className="skillContent">
                        <i class="devicon-vuejs-plain colored skillIcon"></i>
                        <i class="devicon-react-original colored skillIcon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;