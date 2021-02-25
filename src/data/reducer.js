// IMPORT REDUCERS

// SEE OUR SQUADS: Infographic reducers
import hexInfoReducer from './reducerLogic/hexInfoReducer';
import croneInfoReducer from './reducerLogic/croneInfoReducer';
import broomstickInfoReducer from './reducerLogic/broomstickInfoReducer';
import waywardInfoReducer from './reducerLogic/waywardInfoReducer';

// VIDEOS PAGE
import seeYTVideosReducer from './reducerLogic/videoDisplay/seeYTVideosReducer';
import seeStreamersReducer from './reducerLogic/videoDisplay/seeStreamersReducer';

// YOUTUBE VIDEOS
import goToNext from './reducerLogic/videoDisplay/goToNext';
import goToPrev from './reducerLogic/videoDisplay/goToPrev';

// STREAMERS
import nextStreamer from './reducerLogic/videoDisplay/nextStreamer';
import prevStreamer from './reducerLogic/videoDisplay/prevStreamer';

// PHOTOS
import prevImage from './reducerLogic/photoDisplay/prevImage';
import nextImage from './reducerLogic/photoDisplay/nextImage';

// MENU BURGER
import menuReducer from './reducerLogic/menuReducer';

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

        // Youtube
        case "VIDEO_NEXT": return goToNext(state);
        case "VIDEO_PREV": return goToPrev(state);

        // Twitch
        case "TWITCH_NEXT": return nextStreamer(state);
        case "TWITCH_PREV": return prevStreamer(state);

        // Images
        case "IMG_NEXT": return nextImage(state);
        case "IMG_PREV": return prevImage(state);

        //Menu burger
        case "MENU_DISPLAYED": return menuReducer(state);
        
        default: return state;
    }
};

export default reducer;