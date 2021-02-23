import React from 'react';

let ImageDisplay = ({ image, alt }) => {
    return (
        <>
            <img className="media_imageDisplay" src={ image } alt={ alt } />
        </>
    )
}

export default ImageDisplay;