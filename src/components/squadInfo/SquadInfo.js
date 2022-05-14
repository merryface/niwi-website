import React from 'react';
import { useSelector } from 'react-redux'
import PlayerRoster from './PlayerRoster';
import SquadronDescription from './squadDescription';

let SquadInfo = () => {
    const final_squads = useSelector(state => state.squadrons);

    // display state
    const squadInfoDisplayed = useSelector(state => state.squadInfoDisplayed);
    
    return (
        <div className='Squadrons_container'>
        { final_squads.map(squadron => {
            if (squadInfoDisplayed == squadron.id) {
                return (
                    <div>
                        <SquadronDescription name={ squadron.name } description={ squadron.description } />
                        <PlayerRoster players={ squadron.playerRoster } />
                    </div>
                )
            }
        })}
        </div>
    )
}

export default SquadInfo;
