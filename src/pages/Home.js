import React, { componentDidMount, Component, useEffect, useState } from 'react'
// import img from '../images/bio-image.png'
import bgImg from "../images/home-background-image.png"
const styles = {
    pfp: {
        borderRadius: "50%",
        maxHeight: "50vh",
    },
    background: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
        backgroundPosition: "center"
    }

}
var i = 0;
var txt = " Hey! I'm Charlee";
var speed = 70;


function Home() {
    var i = 0
    // const [intro, setIntro] =useState()
    function typewriter() {
        if (i < txt.length) {
            // setIntro(intro + txt.charAt(i))
            document.getElementById('typing').innerHTML += txt.charAt(i)
            i++;
            setTimeout(typewriter, speed);
        }
    }

    useEffect(() => {
        // typewriter()
        if (i < txt.length) {
            document.getElementById('typing').innerHTML += txt.charAt(i)
            i++;
            setTimeout(typewriter, speed);
        }
    })

    return (
        < div className="bgContainer" style={styles.background} >
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "5%", opacity: "1" }}>
                <img src={require('../images/bio-image.png')} style={styles.pfp}></img>

                <h2 id="typing" style={{ backgroundColor: "lightskyblue", color: "black" }}></h2>
            </div>

        </div >
    )
}

export default Home