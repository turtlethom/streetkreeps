import React, { useState, useEffect } from "react";
import { RiFacebookCircleFill, RiSnapchatFill, RiInstagramFill } from "@remixicon/react";
import styles from './Socials.module.css';

function Socials() {
    const [socialSize, setSocialSize] = useState('3em');

    useEffect(() => {
        const handleResize = () => {
            // If the viewport width is 520px or less, set socialSize to 1.5em
            setSocialSize(window.innerWidth <= 520 ? '1.5em' : '3em');
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className="bg-black">
            <hr />
            <h1>Follow Us On Social Media!</h1>
            <hr />
            <div className={`flex ${styles.socialIcons}`}>
                <a href="https://www.facebook.com/StreetKreeps/">
                    <RiFacebookCircleFill 
                        size={socialSize} 
                        color={'white'}
                    />
                </a>
                <a href="https://t.snapchat.com/geNWBl0F">
                    <RiSnapchatFill 
                        size={socialSize}
                        color={'white'}
                    />
                </a>
                <a href="https://www.instagram.com/streetkreeps/">
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