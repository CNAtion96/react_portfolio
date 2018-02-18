import React from 'react';

const Projects = (props) => {

    let currentProject = props.currentProject;

    let projectList = props.projectList.map( (project) => {
        return(
            <li key={project._id}>
                <div className="projectItem" 
                style={{
                    background: ("url(" + project.mainImage +")"),
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
                onClick={(id) =>  props.changeProject(project._id)}
            >
                    <div className="projectTitle">
                        <h3>
                            {project.title}
                        </h3>
                    </div>
                </div>
            </li>
            )
    });

    let technologies = props.currentProject.tech.map( (tech) => {
        return(
            <h4 key={tech}> {tech} </h4>
        )
    });
    
    return (
    <div>
        <div className="projectList">
            <ul>
                { projectList }
            </ul>
        </div>

        <div className="projectDisplay">
            <div className="projectImage">
                <img alt="" src={ currentProject.mainImage }/>
            </div>
            <div>
                <h2>
                    { currentProject.title }
                </h2>
                <h4>
                   { currentProject.description }
                </h4>
                <h2>
                    Technologies used
                </h2>
                { technologies }
            </div>
        </div>
    </div>
    )
}

export default Projects;