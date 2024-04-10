import React from 'react';
import styles from "./StoryBlock.module.css";

export default function StoryBlock() {
    return (
        <div className={styles.blockContainer}>
            <div className={`${styles.paragraphContainer} flow`}>
                <h1>All About StreetKreeps</h1>
                <p className={styles.storyParagraphs}>
                    At StreetKreeps, we are more than just a car club; we are a thriving community of automotive enthusiasts
                    united by our shared love for cars and the culture that surrounds them. Founded on the principles of camaraderie,
                    creativity, and respect, StreetKreeps is dedicated to fostering a welcoming environment where enthusiasts from
                    all walks of life can come together to celebrate their passion for automobiles.
                </p>
            </div>
            <div className={`${styles.paragraphContainer} flow`}>
                <h2>Our Mission:</h2>
                <p className={styles.storyParagraphs}>
                    At StreetKreeps, our mission is simple yet profound: to cultivate a vibrant community where car enthusiasts can connect,
                    inspire, and empower each other. Whether you're a seasoned gearhead, a casual admirer of classic cars,
                    or a newcomer to the scene, there's a place for you at StreetKreeps. We believe in the power of shared experiences
                    and the joy of cruising down the open road with fellow enthusiasts by your side.
                </p>
            </div>
            <div className={`${styles.paragraphContainer} flow`}>
                <h2>What Sets Us Apart:</h2>
                <p className={styles.storyParagraphs}>
                    What sets StreetKreeps apart is our unwavering commitment to authenticity and inclusivity. We embrace diversity in all its forms
                    and welcome enthusiasts from every background and perspective. Whether you're into classic muscle cars, JDM imports,
                    European exotics, or anything in between, you'll find like-minded individuals who share your passion within our community.
                </p>
            </div>
            <div className={`${styles.paragraphContainer} flow`}>
                <h2>Our Community:</h2>
                <p className={styles.storyParagraphs}>
                    At the heart of StreetKreeps is our vibrant community of members who are as diverse as the cars they love. From local meet-ups
                    and car shows to group cruises and collaborative projects, there's always something exciting happening within the StreetKreeps community.
                    We believe in the power of connection and the thrill of sharing unforgettable moments with fellow enthusiasts who understand
                    your obsession with all things automotive.
                </p>
            </div>
            <div className={`${styles.paragraphContainer} flow`}>
                <h2>Get Involved:</h2>
                <p className={styles.storyParagraphs}>
                    Ready to join the StreetKreeps family? Whether you're looking to connect with fellow enthusiasts, showcase your prized ride,
                    or simply immerse yourself in the rich tapestry of car culture, we invite you to become a part of our community.
                    Follow us on social media, attend our events, and join the conversation. Together, let's keep the passion for cars alive and thriving.
                </p>
            </div>
            <div className={`${styles.paragraphContainer} flow`}>
                <h2>Join Us Today:</h2>
                <p className={styles.storyParagraphs}>
                    Join StreetKreeps and experience the thrill of belonging to a community that shares your passion for cars.
                    Whether you're revving engines on the track, turning heads at a car show, or simply cruising the streets with friends,
                    StreetKreeps is where automotive dreams come to life.
                </p>
            </div>
        </div>
    )
}
