import React from 'react';
import styles from "./ContactBlock.module.css";

export default function ContactBlock() {
    return (
        <div class={styles.contactContainer}>
            <h1>Contact Us!</h1>
            <p className={styles.subtitle}>Thank you for your interest in contacting StreetKreeps. We're here to help!</p>
            <ul class={styles.contactInfo}>
                <li>
                    <p><strong>Email</strong> info@streetkreeps.com</p>
                </li>
                <li>
                    <p><strong>Phone</strong> +1 (555) 123-4567</p>
                </li>
                <li>
                    <p><strong>Address</strong> 1234 Urban Street, Cityville, State, Country</p>
                </li>
            </ul>
            <div className={styles.lastParagraphs}>
                <p>Feel free to reach out to us via email or phone. Our team will be delighted to assist you.</p>
                <p>Our office hours are Monday to Friday, 9:00 AM to 5:00 PM (EST). We strive to respond to all inquiries within 24 hours during weekdays.</p>
            </div>
        </div>
    )
}
