import React from "react";
import './EmailSignup.css'

function EmailSignup() {
    return (
        <section>
            <div id="email-signup" className="grid container">
                <h2 className="fs-700 letter-spacing-2">Subscribe To StreetKreeps</h2>
                <form action="/submission" method="post">
                    <label htmlFor="email">Email:</label>
                    <input className="letter-spacing-2" type="email" id="email" name="email" placeholder="Enter Email Address" required />
                    <button className="letter-spacing-2" type="submit">Signup</button>
                </form>
                <p>Receive Updates About Upcoming Events, Latest News, Promotions & More!</p>
            </div>
        </section>
    );
}

export default EmailSignup;