import React from 'react';
import Navbar from '../navbar';
import { Link } from "react-router-dom";


let Header = () => {

    return(
        <header>
            <Link className="header_Title" to="/niwi-website"><h1>Night Witches</h1></Link>
            <Navbar />
        </header>
    )
}

export default Header;