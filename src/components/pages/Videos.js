import React from 'react';
import VideoPlayer from '../videoPage/VideoPlayer';
import Categories from '../videoPage/Categories';
import Button from '../videoPage/Button';

import { useDispatch } from 'react-redux';

let Videos = () => {
    const dispatch = useDispatch();

    // Next
    let goToNext = () => dispatch({
        type: "VIDEO_NEXT"
    });

    // Previous
    let goToPrev = () => dispatch({
        type: "VIDEO_PREV"
    });

    return (
        <>
            <Categories />
            <VideoPlayer />
            <Button label="Next" handleClick={ goToNext } />
            <Button label="Previous" handleClick={ goToPrev } />
        </>
    )
}

export default Videos;