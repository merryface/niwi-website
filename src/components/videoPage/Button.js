import React from 'react';

let Button = ({ handleClick, label }) => {
    return (
        <button onClick={ handleClick } className="media_button">
            { label }
        </button>
    )
}

export default Button;