import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <SocialIcon url="https://github.com/cgordon5025" />
            <SocialIcon url="https://linkedin.com/in/charlee-gordon/" />
            <a href="mailto:cgordon5025@gmail.com">
                <SocialIcon network="email" />
            </a>


        </div>
    )
}

export default Contact