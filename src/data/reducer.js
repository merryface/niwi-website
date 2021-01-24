// IMPORT REDUCERS



let reducer = (state, action) => {
    switch (action.type) {

        // simple reducer example
        case "INC_TEAM_ONE": return incReducerT1(state);

        // Load data from api and display example
        case "MATCHES_LOADED": return {...state, matches: action.payload, loaded: true};
        
        default: return state;
    }
};

export default reducer;