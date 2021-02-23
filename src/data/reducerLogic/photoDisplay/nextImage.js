const nextImage = (state) => { // logic to show next video
    return {
        ...state,
        currentPhoto: state.currentPhoto === state.photos.length -1 ?
        0
        :
        state.currentPhoto + 1
    }
}

export default nextImage;