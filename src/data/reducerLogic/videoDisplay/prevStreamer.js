const prevStreamer = (state) => { // logic to show prev streamer
    return {
        ...state,
        currentStreamer: state.currentStreamer === 0 ?
        (state.twitchStreamers.length - 1)
        :
        (state.currentStreamer - 1)
    } 
}

export default prevStreamer;