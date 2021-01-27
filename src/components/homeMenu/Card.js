import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

let Card = ({ image, alt, text, type }) => {
    const page = useSelector(state => state.page);
    const dispatch = useDispatch();

    let navigate = () => {
        dispatch({
            type: type,
        })
    };

    return (
        <div className="card">
            <img onClick={ navigate } src={ image } className="card_image" alt={ alt } />
            <h3 onClick={ navigate }>{ text }</h3>
        </div>
    )
}

export default Card;