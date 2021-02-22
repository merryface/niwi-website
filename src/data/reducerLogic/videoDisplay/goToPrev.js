const goToPrev = (state) => { // logic to show next video
    return {
        ...state,
        currentVideo: state.currentVideo == 0 ? (state.youtubeVideos.length -1) : state.currentVideo - 1
    }
}

export default goToPrev;