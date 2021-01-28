import React from 'react';

let SquadronIcon = ({ image, alt, text, handleClick }) => {

    return (
        <div onClick={ handleClick } className="icon_item">
            <img src={ image } className="icon_logo" alt={ alt } />
                <p className="icon_label">{ text }</p>
        </div>
    )
}

export default SquadronIcon;