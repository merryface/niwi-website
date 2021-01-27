// IMPORT REDUCERS

let reducer = (state, action) => {
    switch (action.type) {

        // Navigation
        case "SQUADRONS": return {
            ...state,
            page: "squadrons",
        };

        case "VIDEOS": return {
            ...state,
            page: "videos",
        };
        
        default: return state;
    }
};

export default reducer;