import React from 'react';
import { useSelector } from 'react-redux';

let VideoPlayer = () => {
    const currentVideo = useSelector(state => state.currentVideo);
    const youtubeVideos = useSelector(state => state.youtubeVideos);
    const youtube = useSelector(state => state.youtube)
    const twitchStreamers = useSelector(state => state.twitchStreamers);
    const currentStreamer = useSelector(state => state.currentStreamer);

    return (
        <>
        {
            youtube ? 
            <iframe width="560" height="315" class="mediaDisplay" title="videoPlayer" src={"https://www.youtube.com/embed/" + youtubeVideos[currentVideo]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            :
            <iframe title="videoPlayer2" src={"https://player.twitch.tv/?channel=" + twitchStreamers[currentStreamer] + "&parent=localhost"} frameborder="0" allowfullscreen="true" width="560" height="315"/>
        }
        </>
    )
}

export default VideoPlayer;