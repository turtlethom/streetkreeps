import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "@remixicon/react";
// import "./Navbar.css";
import styles from "./Navbar.module.css";

function NavBar() {

    const [ navigationOpen, setNavigationOpen ] = useState(false);

    const toggleMenu = (event) => {
        event.stopPropagation()
        setNavigationOpen(!navigationOpen);
        console.log(navigationOpen);
    };

    // Update menu button/navigation visibility if screen size changes
    useEffect(() => {
        const handleResize = () => {
            setNavigationOpen(window.innerWidth > 885);
        };

        handleResize(); // Call on component mount
        window.addEventListener("resize", handleResize); // Listen for window resize

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header>
            <div className={styles.logoWrapper}>
                <img src="streetkreeps(2).png" alt="" />
            </div>
            <nav>
                <div className={styles.menuWrapper} onClick={toggleMenu}>
                    <RiMenuLine id={styles.menuIcon} size={60} color="white"/>
                </div>

                <div className={`${styles.dropdown} bg-black ${navigationOpen ? styles.showNav : styles.hideNav}`}>
                    <ul className={`flex ${styles.navigation} letter-spacing-2 text-white`} >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li className={styles.cta}><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;