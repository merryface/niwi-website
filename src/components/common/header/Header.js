import React from 'react';
import Navbar from '../navbar';
import { Link } from "react-router-dom";

let Header = () => {
    return(
        <header>
            <div className="header_Title"><Link to="/"><h1>Night Witches</h1></Link></div>
            <Navbar />
        </header>
    )
}

export default Header;