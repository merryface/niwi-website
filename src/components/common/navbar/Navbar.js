import React from 'react';
import { Link } from "react-router-dom";
import niwiLogo from "../../../assets/niwiLogo.png"

import { useDispatch } from 'react-redux';

let Navbar = () => {
    const dispatch = useDispatch();

    // Burger toggle
    let menuToggle = () => dispatch({
        type: "MENU_DISPLAYED"
    });

    return(
        <>
        <nav className="nav_links">
            <Link to="/" className="nav_link">Home</Link> 
            <Link to="/squadrons" className="nav_link">Our Squadrons</Link> 
            <Link to="/videos"  className="nav_link">Videos</Link> 
            <Link to="/photos"  className="nav_link">Photos</Link> 
            <Link to="/join"  className="nav_link">Join us!</Link> 
        </nav>

        <img onClick={ menuToggle } className="header_menuIcon" src={ niwiLogo } />
        </>
    )
}

export default Navbar;