import React from 'react';

let Card = ({ image, alt, text, onClick }) => {
    return (
        <div className="card">
            <img onClick={ onClick } src={ image } className="card_image" alt={ alt } />
            <h3 onClick={ onClick }>{ text }</h3>
        </div>
    )
}

export default Card;