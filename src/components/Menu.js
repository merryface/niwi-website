import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

let Menu = () => {
    const dispatch = useDispatch();

    // Burger toggle
    let menuToggle = () => dispatch({
        type: "MENU_DISPLAYED"
    });

    // Add menu state
    const menuDisplayed = useSelector(state => state.menuDisplayed);

       {/* nav menu if menuDisplayed is true */}
    if (menuDisplayed) {
        return (
            <>
            <nav className="menu_links">
                    <Link to="/" className="menu_link" onClick={ menuToggle }>Home</Link> 
                    <Link to="/squadrons" className="menu_link" onClick={ menuToggle }>Our Squadrons</Link> 
                    <Link to="/videos"  className="menu_link" onClick={ menuToggle }>Videos</Link> 
                    <Link to="/photos"  className="menu_link" onClick={ menuToggle }>Photos</Link> 
                    <Link to="/join"  className="menu_link" onClick={ menuToggle }>Join us!</Link> 
            </nav>
        </>
        )
    } else {
        return (null)
    }
    
}

export default Menu;