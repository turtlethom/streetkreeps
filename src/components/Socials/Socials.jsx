import React from "react";
import { RiFacebookCircleFill, RiSnapchatFill, RiInstagramFill } from "@remixicon/react";
import './Socials.css'

function Socials() {
    return (
        <div id="socials-section" className="bg-black">
            <h1>Follow Us On Social Media!</h1>
            <div className="flex social-icons">
                <a href="#/facebook"><RiFacebookCircleFill size={'2em'}/></a>
                <a href="#/snapchat"><RiSnapchatFill size={'2em'}/></a>
                <a href="#/discord"><RiInstagramFill size={'2em'}/></a>
            </div>
        </div>
    );
}

export default Socials;