import React from 'react';

let PlayerRoster = ({ players }) => {

    return (
        <div className="description">
            <h3 className="roster_title">Player Roster</h3>
            <ul className="roster_players">
            { players.map(player => {
                return (
                    <li key={ player }>{player}</li>
                )
            }) }
            </ul>
        </div>
    )
}

export default PlayerRoster;