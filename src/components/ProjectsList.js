import React from 'react';

function ProjectList(props) {
    return (
        <div className='MainContainer'>
            {props.projects.map((project) => {
                return (
                    <div className="card" key={project.id}>
                        <img src={`${project.imgURL}`} className="card-img-top" alt="img representing project"></img>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <a href="google.com" className="btn btn-primary">{project.link}</a>
                        </div>
                    </div>
                );
            })
            }
        </div >
    )
}


export default ProjectList