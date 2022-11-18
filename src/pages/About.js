
import React, { useEffect } from 'react';
import aboutBg from '../images/about-bg-img.png'
const styles = {
    bg: {
        padding: "5%",
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
        backgroundPosition: "center",
    },
    text: {
        backgroundColor: "aliceblue",
        borderRadius: "10px"
    }
}
function About() {

    return (
        <div style={styles.bg}>
            <div style={styles.text}>
                <h2> About Me</h2>
                <div style={{ marginLeft: "5%" }}>
                    <p>Thanks for wanting to learn more about me!</p>
                    <p>I am a Full Stack Developer, currently enrolled in Georgia Tech's Full Stack Coding BootCamp. </p>
                    <p>I started coding in college in the Neurochemistry and Cognition Lab at Brandeis University. Under the direction of Dr. Anne Berry, I created multiple behavioral tasks using PsychoPy, a Python GUI. These tasks were produced the desired memory effect and were subsequently used in our MRI/PET experiments. These tasks assessed the memory retention of our participants and gauged their ability to pay attention in the presence of distractions.
                    </p>
                    <p>After my time with Dr. Berry, I decided to pursue a career in tech. I developed a passion for the innovation and collaboration that came with developing an app, and I was hungry for more.
                    </p>
                    <p> As a total foodie you can either find me trying out a new restaurant or experimenting in the kitchen </p>
                </div>
                {/* image here of me with food */}
                <img></img>

            </div>


        </div>
    )
}


export default About