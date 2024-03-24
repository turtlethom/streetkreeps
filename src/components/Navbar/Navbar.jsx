import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "@remixicon/react";
import "./Navbar.css"

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
            <div className="flex logo-wrapper">
                <img src="streetkreeps(2).png" alt="" />
            </div>

            <div id="nav-wrapper" className="">
                <nav>

                    <div className="flex menu-wrapper container" onClick={toggleMenu}>
                        <RiMenuLine id="menu-icon" size={60} color="white"/>
                    </div>

                    <div className={`dropdown bg-black ${navigationOpen ? "show-nav" : "hide-nav"}`}>
                        <ul className={`flex navigation letter-spacing-2 text-white`} >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li className="cta"><Link to="/register">Register</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default NavBar;