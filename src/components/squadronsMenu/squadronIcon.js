import React from 'react';

let Card = ({ image, alt, text }) => {

    return (
        <div className="icon_item">
            <img src={ image } className="icon_logo" alt={ alt } />
                <p className="icon_label">{ text }</p>
        </div>
    )
}

export default Card;