import React from 'react';
import axios from 'axios';

const Projects = (props) => {

    let projectList = props.projectList.map( (project) => {
        return(
            <li key={project.id}>
                <div className="projectItem" 
                style={{
                    background: ('#00f0fd21', "url(" + project.mainImage + ")"),
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
            >
                    <h3 className="projectTitle">{project.title}</h3>
                </div>
            </li>
            )
    })
    
    return (
    <div>
        <div className="projectList">
            <ul>
                { projectList }
            </ul>
        </div>

        <div className="projectDisplay">
            <div>
                <img/>
            </div>
            <div>
                <h2>
                    Project Title
                </h2>
                <h4>
                   Project Description
                </h4>
            </div>
        </div>
    </div>
    )
}

export default Projects;