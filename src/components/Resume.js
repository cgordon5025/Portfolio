import React from 'react';
const styles = {
    borders: {
        borderBottom: "2px solid black"
    },
    p: {
        paddingLeft: "1%",
        paddingRight: "1%",
        display: "flex",
        justifyContent: "space-between",
        lineHeight: "1"
    }

}

function Resume(props) {
    return (
        <div style={{ padding: "1%" }}>
            <div style={styles.borders}>
                <h2>Experience</h2>
                {props.resume.exp.map((job) => {
                    return (
                        <div>
                            <section style={styles.p}>
                                <h5>{job.business}: <span>{job.title}</span></h5>
                                <p>{job.time}</p>
                            </section>
                            <ul>
                                {job.summary.map((details) => {
                                    return (
                                        <li>{details}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div style={styles.borders}>
                <h2>Publications</h2>
                {props.resume.publications.map((pub) => {
                    return (
                        <p>{pub.title}{pub.authors}{pub.yearOfPub}</p>
                    )
                })}
            </div>
            <div style={styles.borders}>
                <h2> Education</h2>
                {props.resume.education.map((edu) => {
                    return (
                        <div style={{ lineHeight: ".5" }}>
                            <h5 style={styles.p}>{edu.school} <span style={{ fontWeight: "normal", fontSize: "14px" }}>{edu.time}</span></h5>
                            <p style={{ paddingLeft: '1%', paddingRight: "1%" }}> {edu.degree}</p>
                        </div>

                    )
                })}
            </div>
        </div >
    )
}

export default Resume

// style={{ display: "flex", flexDirection: "column" }}