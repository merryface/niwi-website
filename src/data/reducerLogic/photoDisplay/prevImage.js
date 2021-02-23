const prevImage = (state) => { // logic to show next video
    return {
        ...state,
        currentPhoto: state.currentPhoto === 0 ?
        (state.photos.length -  1)
        :
        state.currentPhoto - 1
    }
}

export default prevImage;