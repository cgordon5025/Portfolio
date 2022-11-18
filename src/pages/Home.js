import React from 'react'
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
function Home() {
    return (

        <div className="bgContainer" style={styles.background}>
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "5%", opacity: "1" }}>
                <img src={require('../images/bio-image.png')} style={styles.pfp}></img>
                <h2 style={{ backgroundColor: "lightskyblue", color: "black" }}>Hey I'm Charlee</h2>
            </div>

        </div>
    )
}

export default Home