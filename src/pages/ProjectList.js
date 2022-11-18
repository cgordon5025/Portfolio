import React from 'react'
import projectBG from "../images/project-bg.png"

const styles = {
    skill: {
        border: "1px solid black",
        padding: "1%",
        borderRadius: "5px"
    },
    skills: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        flexWrap: "wrap"
    },
    main: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "5%",
        backgroundImage: `url(${projectBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
        backgroundPosition: "center"
    }
}
function ProjectList(props) {
    return (
        <div className='MainContainer' style={styles.main}>
            {props.projects.map((project) => {
                return (
                    <div className="card" style={{ width: "18rem", height: "fit-content", backgroundColor: "lightblue" }} key={project.id}>
                        <a href={`${project.link}`}>
                            <img src={`${project.imgURL}`} className="card-img-top" alt="img representing project"></img>
                        </a>
                        <div style={{ display: "flex", flexDirection: "column" }} className="card-body">
                            <h5 style={{ textAlign: "center" }} className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <div style={styles.skills}>
                                {/* new section for individual skills needed to be rendered */}
                                {project.skills.map((skill) => {
                                    return (
                                        <p style={styles.skill}>{skill}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                );
            })
            }
        </div >
    )
}


export default ProjectList