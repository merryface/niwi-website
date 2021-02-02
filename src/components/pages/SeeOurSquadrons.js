import { React } from 'react';
import SquadInfo from '../squadInfo/SquadInfo';
import SquadronsMenu from '../squadronsMenu/squadronsMenu';

let SeeOurSquadrons = () => (
    <>
        <h2 className="squads_title">See Our Squadrons</h2>
        <SquadronsMenu />
        <SquadInfo />
    </>
)

export default SeeOurSquadrons;