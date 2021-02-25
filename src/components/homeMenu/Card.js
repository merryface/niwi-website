import React from 'react';
import { useDispatch } from 'react-redux';

let Card = ({ image, alt, text, type }) => {
    const dispatch = useDispatch();

    let navigate = () => {
        dispatch({
            type: type,
        })
    };

    return (
        <div  className="menu_card">

            <img onClick={ navigate } src={ image } className="card_image" alt={ alt } />

            <div className="card_content">
                <h3 onClick={ navigate } className="card_label">{ text }</h3>
            </div>

        </div>
    )
}

export default Card;