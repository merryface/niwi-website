const menuReducer = (state) => { // logic to show burger menu
    return {
        ...state,
        menuDisplayed: !state.menuDisplayed,
    }
}

export default menuReducer;