import React from 'react';

const Projects = (props) => {

    let currentProject = props.currentProject;

    let projectList = props.projectList.map( (project) => {
        return(
            <li key={project._id}>
                <div className="projectItem" 
                style={{
                    background: ('#00f0fd21', "url(" + project.mainImage + ")"),
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
                onClick={(id) =>  props.changeProject(project._id)}
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
                <img alt=""/>
            </div>
            <div>
                <h2>
                    { currentProject.title }
                </h2>
                <h4>
                   { currentProject.description }
                </h4>
            </div>
        </div>
    </div>
    )
}

export default Projects;