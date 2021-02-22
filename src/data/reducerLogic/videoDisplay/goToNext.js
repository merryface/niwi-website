const goToNext = (state) => { // logic to show menu page
    return {
        ...state,
        currentVideo: state.currentVideo == state.youtubeVideos.length -1 ?
        0
        :
        state.currentVideo + 1
    }
}

export default goToNext;

// state.currentVideo == (state.youtubeVideos.length-1) ?
// 0
// :
// state.currentVideo += 1