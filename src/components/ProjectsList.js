import React from 'react';

function ProjectList(props) {
    return (
        <div className='MainContainer' style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {props.projects.map((project) => {
                return (
                    <div className="card" style={{ width: "18rem", maxheight: "" }} key={project.id}>
                        <a href={`${project.link}`}>
                            <img src={`${project.imgURL}`} className="card-img-top" alt="img representing project"></img>
                        </a>
                        <div className="card-body">
                            <h5 style={{ textAlign: "center" }} className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                        </div>
                    </div>
                );
            })
            }
        </div >
    )
}


export default ProjectList