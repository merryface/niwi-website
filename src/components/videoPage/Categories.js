import React from 'react';
import { useDispatch } from 'react-redux';

import Category from './Category';

let Categories = () => {
    const dispatch = useDispatch();

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
            <h2>Category:</h2>
            <Category handleClick={ seeYTVideos } label="Youtube"/>
            <Category handleClick={ seeStreamers } label="Twitch"/>
        </div>
    )
}

export default Categories;