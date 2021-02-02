import React from 'react';

let SquadronDescription = ({ name, description }) => {

    return (
        <div className="description">
            <h3 className="description_info">{ name }</h3>
            <p className="description_body">{ description }</p>
        </div>
    )
}

export default SquadronDescription;