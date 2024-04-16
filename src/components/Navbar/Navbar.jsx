import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseLargeLine } from "@remixicon/react";
import styles from "./Navbar.module.css";

function NavBar() {

    const [ navigationOpen, setNavigationOpen ] = useState(false);
    const isMobile = window.innerWidth <= 885; // Check if the window width is less than or equal to 885px

    const toggleMenu = (event) => {
        event.stopPropagation()
        setNavigationOpen(!navigationOpen);
        // console.log(navigationOpen);
    };

    const closeMenu = () => {
        if (isMobile) {
            setNavigationOpen(false);
        }
    }

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
                <img src="streetkreeps-main-logo.png" alt="StreetKreeps Logo" />
            </div>
            <nav>
                <div className={styles.menuWrapper} onClick={toggleMenu}>
                    {!navigationOpen ?
                        <RiMenuLine 
                            className={styles.menuIcon} 
                            size={60} 
                            color="white"
                        />
                    :
                        <RiCloseLargeLine
                            className={styles.menuIcon} 
                            size={60} 
                            color="white"
                        />
                    }
                </div>

                <div className={`${styles.dropdown} bg-black ${navigationOpen ? styles.showNav : styles.hideNav}`}>
                    <ul className={`flex ${styles.navigation} letter-spacing-2 text-white`} >
                        <li>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/events" onClick={closeMenu}>Events</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu}>Contact</Link>
                        </li>
                        <li className={styles.cta}>
                            <Link to="/register" onClick={closeMenu}>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;