import React from 'react';

let Button = ({ handleClick, label }) => {
    return (
        <button onClick={ handleClick } className="icon_item">
            { label }
        </button>
    )
}

export default Button;