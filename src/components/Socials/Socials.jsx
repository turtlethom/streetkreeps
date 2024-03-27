import React from "react";
import { RiFacebookCircleFill, RiSnapchatFill, RiInstagramFill } from "@remixicon/react";
import styles from './Socials.module.css';

function Socials() {
    const socialSize = '3em'
    return (
        <div className="bg-black">
            <h1 className="fs-700">Follow Us On Social Media!</h1>
            <div className={`flex ${styles.socialIcons}`}>
                <a href="#/facebook">
                    <RiFacebookCircleFill 
                        size={socialSize} 
                        color={'white'}
                    />
                </a>
                <a href="#/snapchat">
                    <RiSnapchatFill 
                        size={socialSize}
                        color={'white'}
                    />
                </a>
                <a href="#/instagram">
                    <RiInstagramFill 
                        size={socialSize} 
                        color={'white'}
                    />
                </a>
            </div>
        </div>
    );
}

export default Socials;