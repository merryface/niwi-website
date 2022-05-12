import React from 'react';
import { useSelector } from 'react-redux'

import PlayerRoster from './PlayerRoster';
import SquadronDescription from './squadDescription';
import axios from '../../data/axios/axios-config';

let SquadInfo = () => {
    // Fetch Squadrons from backend using axios
    axios.get('/squadrons').then(res => {
        console.log(res.data);
    });

    // Players
    const hexPlayers = useSelector(state => state.squadrons.hexInfo);
    const cronePlayers = useSelector(state => state.squadrons.croneInfo);
    const broomstickPlayers = useSelector(state => state.squadrons.broomstickInfo);
    const waywardPlayers = useSelector(state => state.squadrons.waywardInfo);

    // display state
    const squadInfoDisplayed = useSelector(state => state.squadInfoDisplayed);

    switch(squadInfoDisplayed) {
        case 1: return (
            <>
                <SquadronDescription name={ hexPlayers.name } description={ hexPlayers.description } />
                <PlayerRoster players={ hexPlayers.playerRoster } />
            </>
            )

        case 2: return (
            <>
                <SquadronDescription name={ cronePlayers.name } description={ cronePlayers.description } />
                <PlayerRoster players={ cronePlayers.playerRoster } />
            </>
            )

        case 3: return (
            <>
                <SquadronDescription name={ broomstickPlayers.name } description={ broomstickPlayers.description } />
                <PlayerRoster players={ broomstickPlayers.playerRoster } />
            </>
            )

        case 4: return (
        <>
            <SquadronDescription name={ waywardPlayers.name } description={ waywardPlayers.description } />
            <PlayerRoster players={ waywardPlayers.playerRoster } />
        </>
        )
        
        default: return (
            <>
                <SquadronDescription name={ hexPlayers.name } description={ hexPlayers.description } />
                <PlayerRoster players={ hexPlayers.playerRoster } />
            </>
            ) 
    }
}

export default SquadInfo;
