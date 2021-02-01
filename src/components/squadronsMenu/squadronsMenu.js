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
            <div className="squadronMenu_squadron">
                <SquadronIcon handleClick={ seeHexInfo } image={ hexLogo } alt="hex logo" text="" />
                <p className="squadronMenu_name">Hex</p>
            </div>

            {/* Crone */}
            <div className="squadronMenu_squadron">
                <SquadronIcon handleClick={ seeCroneInfo } image={ croneLogo } alt="" text="" />
                <p className="squadronMenu_name">Crone</p>
            </div>

            {/* Broomstick */}
            <div className="squadronMenu_squadron">
                <SquadronIcon handleClick={ seeBroomstickInfo } image={ broomstickLogo } alt="" text="" />
                <p className="squadronMenu_name">Broomstick</p>
            </div>

            {/* Wayward */}
            <div className="squadronMenu_squadron">
                <SquadronIcon handleClick={ seeWaywardInfo } image={ waywardLogo } alt="" text="" />
                <p className="squadronMenu_name">Wayward</p>
            </div>
    </section>
    )
}

export default SquadronsMenu;