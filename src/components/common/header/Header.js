import React from 'react';
import Navbar from '../navbar';

let Header = () => {
    return(
        <header>
            <div className="header_Title"><a href="/">Night Witches</a></div>
            <Navbar />
        </header>
    )
}

export default Header;