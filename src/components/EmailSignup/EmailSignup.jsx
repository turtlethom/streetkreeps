import React, { useState } from "react";
import './EmailSignup.css';

function EmailSignup() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to the backend using fetch
            const response = await fetch('/submission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert('Signup successful!');
            } else {
                throw new Error('Failed to sign up');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred while signing up. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <section>
            <div id="email-signup" className="grid container">
                <h2 className="fs-700 letter-spacing-2">Subscribe To StreetKreeps</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        className="letter-spacing-2" 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter Email Address" 
                        value={email}
                        onChange={handleChange}
                        required 
                    />
                    <button className="letter-spacing-2" type="submit">Signup</button>
                </form>
                <p>Receive Updates About Upcoming Events, Latest News, Promotions & More!</p>
            </div>
        </section>
    );
}

export default EmailSignup;
