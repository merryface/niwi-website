// IMPORT REDUCERS

// SEE OUR SQUADS: Infographic reducers
import hexInfoReducer from './reducerLogic/hexInfoReducer';
import croneInfoReducer from './reducerLogic/croneInfoReducer';
import broomstickInfoReducer from './reducerLogic/broomstickInfoReducer';
import waywardInfoReducer from './reducerLogic/waywardInfoReducer';

// VIDEOS PAGE
import seeYTVideosReducer from './reducerLogic/videoDisplay/seeYTVideosReducer';
import seeStreamersReducer from './reducerLogic/videoDisplay/seeStreamersReducer';
import goToNext from './reducerLogic/videoDisplay/goToNext';

let reducer = (state, action) => {
    switch (action.type) {

        // INFO
        case "INFO_HEX": return hexInfoReducer(state);
        case "INFO_CRONE": return croneInfoReducer(state);
        case "INFO_BROOMSTICK": return broomstickInfoReducer(state);
        case "INFO_WAYWARD": return waywardInfoReducer(state);

        // Video Page
        case "YT_VIDEOS": return seeYTVideosReducer(state);
        case "TWITCH_STREAMERS": return seeStreamersReducer(state);
        case "VIDEO_NEXT": return goToNext(state);
        
        default: return state;
    }
};

export default reducer;