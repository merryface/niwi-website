import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Category from './Category';

let Categories = () => {
    const dispatch = useDispatch();
    const youtube = useSelector(state => state.youtube)

    // See Youtube Videos
    let seeYTVideos = () => dispatch({
        type: "YT_VIDEOS"
    });

    // See Twitch Streamers
    let seeStreamers = () => dispatch({
        type: "TWITCH_STREAMERS"
    });

    return (
        <div className="categories_container">
            <h2 className="categories_title">Category: {youtube ? "Youtube" : "Twitch"}</h2>
            <div className="categories_buttons">
                <Category handleClick={ seeYTVideos } label="Youtube"/>
                <Category handleClick={ seeStreamers } label="Twitch"/>
            </div>
        </div>
    )
}

export default Categories;