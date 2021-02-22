import React from 'react';
import { useSelector } from 'react-redux';

let VideoPlayer = () => {
    const currentVideo = useSelector(state => state.currentVideo);
    const youtubeVideos = useSelector(state => state.youtubeVideos);
    const youtube = useSelector(state => state.youtube)

    return (
        <>
        {
            youtube ? 
            <iframe width="560" height="315" class="mediaDisplay" title="videoPlayer" src={youtubeVideos[currentVideo]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            :
            <p>Twitch Video Player</p>
        }
        </>
    )
}

export default VideoPlayer;