import React from 'react';
import SquadronIcon from './squadronIcon';
import { useDispatch } from 'react-redux';


let HomeMenu = () => {
    const dispatch = useDispatch();

    let seeHexInfo = () => {
        dispatch({
            // set later
        })
    };

    let seeCroneInfo = () => {
        dispatch({
            // set later
        })
    };

    let seeBroomstickInfo = () => {
        dispatch({
            // set later
        })
    };

    let seeWaywardInfo = () => {
        dispatch({
            // set later
        })
    };

    return(
        <>
        {/* Hex */}
        <SquadronIcon handleClick={ seeHexInfo } image="" alt="" text="" />

        {/* Crone */}
        <SquadronIcon handleClick={ seeCroneInfo } image="" alt="" text="" />

        {/* Broomstick */}
        <SquadronIcon handleClick={ seeBroomstickInfo } image="" alt="" text="" />

        {/* Wayward */}
        <SquadronIcon handleClick={ seeWaywardInfo } image="" alt="" text="" />
    </>
    )
}

export default HomeMenu;