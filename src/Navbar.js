import React, { useEffect, useState } from 'react';
import logo from "./Codeflix512.png";
import user from "./mushroomHouse.png";
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);

//everytime useEffect fires off from scrolling
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        //prevents a bunch of listeners from clogging up
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
                    <img 
                    className="nav_logo"
                    src={logo}
                    alt="Codeflix Logo"
                    />
                    <img 
                    className="nav_avatar"
                    src={user}
                    alt="Link to Garrett's Home Menu"
                    />
        </div>
    );
};

export default Navbar;