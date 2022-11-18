import React from 'react';
import { SocialIcon } from 'react-social-icons';
const styles = {
    icons: {
        margin: "0px 5px 0px"
    }
}
function Contact() {
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h3> Contact Me</h3>
            <div >
                <SocialIcon style={styles.icons} url="https://github.com/cgordon5025" />
                <SocialIcon style={styles.icons} url="https://linkedin.com/in/charlee-gordon/" />
                <a style={styles.icons} href="mailto:cgordon5025@gmail.com" >
                    <SocialIcon network="email" />
                </a>


            </div >
        </div >
    )
}

export default Contact