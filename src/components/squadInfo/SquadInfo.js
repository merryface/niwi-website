import React from 'react';
import { useSelector } from 'react-redux'

import PlayerRoster from './PlayerRoster';
import SquadronDescription from './squadDescription';
import axios from '../../data/axios/axios-config';

let SquadInfo = () => {
    // Fetch Squadrons from backend using axios
    const [squadrons, setSquadrons] = React.useState([]);
    const local_squadrons = useSelector(state => state.squadrons);
    let final_squads = []

    React.useEffect(() => {
        axios.get('/squadrons').then((res) => {
            let squads = res.data || local_squadrons
            setSquadrons(squads);
    });
    }, []);

    final_squads = squadrons

    // display state
    const squadInfoDisplayed = useSelector(state => state.squadInfoDisplayed);
    console.log(final_squads);
    
    return (
        <div className='Squadrons_container'>
        { final_squads.map(squadron => {
            return (
                <div>
                    <SquadronDescription name={ squadron.name } description={ squadron.description } />
                    <PlayerRoster players={ squadron.playerRoster } />
                </div>
            )
        })}
        </div>
    )
}

export default SquadInfo;
