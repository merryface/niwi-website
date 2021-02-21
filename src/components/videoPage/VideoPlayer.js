import React from 'react';
import { useSelector } from 'react-redux';

let VideoPlayer = () => {
    const currentVideo = useSelector(state => state.currentVideo);
    const youtubeVideos = useSelector(state => state.youtubeVideos);

    return (
        <>
            <iframe title="videoPlayer" src={youtubeVideos[currentVideo]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}

export default VideoPlayer;