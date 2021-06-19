import axios from '../../data/axios-config';


// get Hex pilots
export const getHex = () => {
    return (dispatch) => {
        axios.get('/Hex').then((data) => {
            dispatch({type: "HEX_LOADED", payload: data})
        })
        .then(() => dispatch(/* Add something here */));
    };
};