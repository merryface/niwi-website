const goToNext = (state) => { // logic to show next video
    return {
        ...state,
        currentVideo: state.currentVideo === state.youtubeVideos.length -1 ?
        0
        :
        state.currentVideo + 1
    }
}

export default goToNext;