import axios from '../../data/axios-config';


// example axios request
export const getPlayers = () => {
    return (dispatch) => {
        axios.get('/players').then((data) => {
            dispatch({type: "PLAYERS_LOADED", payload: data.data.data})
        })
        .then(() => dispatch({type: "GENERATE_TEAMS"}));
    };
};