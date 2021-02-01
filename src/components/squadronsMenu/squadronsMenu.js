import React from 'react';
import SquadronIcon from './SquadronIcon';
import { useDispatch } from 'react-redux';

// Logos
import hexLogo from '../../assets/hexLogo.png';
import croneLogo from '../../assets/croneLogo.png';
import broomstickLogo from '../../assets/broomstickLogo.png';
import waywardLogo from '../../assets/waywardLogo.png';


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
        <section className="squadronMenu">
            {/* Hex */}
            <SquadronIcon handleClick={ seeHexInfo } image={ hexLogo } alt="hex logo" text="Hex Squadron" />

            {/* Crone */}
            <SquadronIcon handleClick={ seeCroneInfo } image={ croneLogo } alt="Crone logo" text="Crone" />

            {/* Broomstick */}
            <SquadronIcon handleClick={ seeBroomstickInfo } image={ broomstickLogo } alt="Broomstick logo" text="Broomstick" />

            {/* Wayward */}
            <SquadronIcon handleClick={ seeWaywardInfo } image={ waywardLogo } alt="Wayward logo" text="Wayward" />
    </section>
    )
}

export default SquadronsMenu;