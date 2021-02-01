import React from 'react';
import SquadronIcon from './SquadronIcon';
import { useDispatch } from 'react-redux';


let SquadronsMenu = () => {
    const dispatch = useDispatch();

    // HEX
    let seeHexInfo = () => dispatch({
        type: "INFO_HEX"
    });

    // CRONE
    let seeCroneInfo = () => dispatch({
        type: "INFO_CRONE"
    });

    // BROOMSTICK
    let seeBroomstickInfo = () => dispatch({
        type: "INFO_BROOMSTICK"
    });

    // WAYWARD
    let seeWaywardInfo = () => dispatch({
        type: "INFO_WAYWARD"
    });

    return(
        <>
        {/* Hex */}
        <SquadronIcon handleClick={ seeHexInfo } image="https://tse3.mm.bing.net/th?id=OIP.5C9Hk_e7FQgKGiiRE1ZvqwEsDU&pid=Api" alt="" text="" />

        {/* Crone */}
        <SquadronIcon handleClick={ seeCroneInfo } image="https://tse3.mm.bing.net/th?id=OIP.5C9Hk_e7FQgKGiiRE1ZvqwEsDU&pid=Api" alt="" text="" />

        {/* Broomstick */}
        <SquadronIcon handleClick={ seeBroomstickInfo } image="https://tse3.mm.bing.net/th?id=OIP.5C9Hk_e7FQgKGiiRE1ZvqwEsDU&pid=Api" alt="" text="" />

        {/* Wayward */}
        <SquadronIcon handleClick={ seeWaywardInfo } image="https://tse3.mm.bing.net/th?id=OIP.5C9Hk_e7FQgKGiiRE1ZvqwEsDU&pid=Api" alt="" text="" />
    </>
    )
}

export default SquadronsMenu;