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

        case "PHOTOS": return {
            ...state,
            page: "photos",
        };

        case "JOIN_US": return {
            ...state,
            page: "joinUs",
        };

        case "PHOTOS": return {
            ...state,
            page: "photos",
        };

        case "home": return {
            ...state,
            page: "home",
        };
        
        default: return state;
    }
};

export default reducer;