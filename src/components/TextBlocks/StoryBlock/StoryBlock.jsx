import React from 'react';
import styles from "./StoryBlock.module.css";

export default function StoryBlock() {
    return (
        <div className={styles.blockContainer}>
            <div className={styles.descriptionContainer}>
                <h1>Our Community</h1>
                <hr style={{inlineSize: '80%'}}/>
                <p>
                <span>What Sets Us Apart.</span>
                    What sets StreetKreeps apart is our unwavering commitment to authenticity and inclusivity. We embrace diversity in all its forms
                    and welcome enthusiasts from every background and perspective. Whether you're into classic muscle cars, JDM imports,
                    European exotics, or anything in between, you'll find like-minded individuals who share your passion within our community.
                </p>
                <hr style={{inlineSize: '80%'}}/>
            </div>
        </div>
    )
}
