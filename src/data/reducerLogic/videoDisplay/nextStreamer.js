const nextStreamer = (state) => { // logic to show next video
    return {
        ...state,
        currentStreamer: state.currentStreamer === (state.twitchStreamers.length - 1) ?
        0
        :
        state.currentStreamer + 1
    }
}

export default nextStreamer;