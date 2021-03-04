import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../common/Button';
import ImageDisplay from '../PhotosPage/ImageDisplay';

let Photos = () => {
    const dispatch = useDispatch();
    const currentPhoto = useSelector(state => state.currentPhoto);
    const photos = useSelector(state => state.photos);

    // Next image
    const imgNext = () => dispatch({
        type: "IMG_NEXT"
    });

    // Previous image
    const prevImage = () => dispatch({
        type: "IMG_PREV"
    });

    return (
        <>
            <h2 className="media_titles">Night Witches Photos</h2>
            <div className="media_container">
                <ImageDisplay image={ photos[currentPhoto][0] } alt={ photos[currentPhoto][1] } />
                <div className="media_buttons">
                    <Button label="Previous" handleClick={ prevImage } />
                    <Button label="Next" handleClick={ imgNext } />
                </div>
            </div>
            <div className="media_flickr">
            <a href="https://www.flickr.com/photos/192328226@N02/with/50996618868/" target="_blank" rel="noreferrer"><Button label="See More" handleClick={null} /></a>
            </div>
        </>
    )
}

export default Photos;