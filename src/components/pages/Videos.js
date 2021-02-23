import React from 'react';
import VideoPlayer from '../videoPage/VideoPlayer';
import Categories from '../videoPage/Categories';
import Button from '../common/Button';

import { useDispatch, useSelector } from 'react-redux';

let Videos = () => {
    const dispatch = useDispatch();
    const youtube = useSelector(state => state.youtube);

    // Next YT
    const goToNext = () => dispatch({
        type: "VIDEO_NEXT"
    });

    // Previous YT
    const goToPrev = () => dispatch({
        type: "VIDEO_PREV"
    });

    // Next Streamer
    const nextStreamer = () => dispatch({
        type: "TWITCH_NEXT"
    });

    // Previous Streamer
    const prevStreamer = () => dispatch({
        type: "TWITCH_PREV"
    });

    return (
        <>
            <Categories />
            <div className="media_container">
                <VideoPlayer />
                <div className="media_buttons">
                    <Button label="Next" handleClick={ youtube ? goToNext : nextStreamer } />
                    <Button label="Previous" handleClick={ youtube ? goToPrev : prevStreamer } />
                </div>
            </div>
        </>
    )
}

export default Videos;