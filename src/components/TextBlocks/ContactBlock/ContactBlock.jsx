import React from 'react';
import styles from "./ContactBlock.module.css";

export default function ContactBlock() {
    return (
        <div class={styles.contactContainer}>
            <h1>Contact Us!</h1>
            <p className={styles.subtitle}>Feel free to reach out to us via email or phone. Our team will be delighted to assist you.</p>
            <div class={styles.contactInfo}>
                <strong>Email</strong>
                <p className={styles.info}>info@streetkreeps.com</p>

                <strong>Phone</strong>
                <p className={styles.info}>+1 (555) 123-4567</p>

                <strong>Address</strong>
                <p className={styles.info}>1234 Urban Street, Cityville, State, Country</p>
            </div>
            <div className={styles.lastParagraphs}>
                <p>Our office hours are Monday to Friday, 9:00 AM to 5:00 PM (EST). We strive to respond to all inquiries within 24 hours during weekdays.</p>
            </div>
        </div>
    )
}
