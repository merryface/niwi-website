import React from 'react';
import { useSelector } from 'react-redux';

let VideoPlayer = () => {
    const currentVideo = useSelector(state => state.currentVideo);
    const youtubeVideos = useSelector(state => state.youtubeVideos);
    
    const youtube = useSelector(state => state.youtube)

    const currentStreamer = useSelector(state => state.currentStreamer);
    const twitchStreamers = useSelector(state => state.twitchStreamers);

    return (
        <>
            {
                youtube ? 
                <iframe class="media_display" title="videoPlayer" src={"https://www.youtube.com/embed/" + youtubeVideos[currentVideo]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" />
                :
                <iframe class="media_display" title="videoPlayer2" src={"https://player.twitch.tv/?channel=" + twitchStreamers[currentStreamer] + "&parent=merryface.github.io"} frameborder="0" allowfullscreen="true" />
            }
        </>
    )
}

export default VideoPlayer;