import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

let Menu = () => {
    // Add menu state
    const menuDisplayed = useSelector(state => state.menuDisplayed);

       {/* nav menu if menuDisplayed is true */}
    if (menuDisplayed) {
        return (
            <>
            <nav className="menu_links">
                    <Link to="/" className="menu_link">Home</Link> 
                    <Link to="/squadrons" className="menu_link">Our Squadrons</Link> 
                    <Link to="/videos"  className="menu_link">Videos</Link> 
                    <Link to="/photos"  className="menu_link">Photos</Link> 
                    <Link to="/join"  className="menu_link">Join us!</Link> 
            </nav>
        </>
        )
    }    
}

export default Menu;