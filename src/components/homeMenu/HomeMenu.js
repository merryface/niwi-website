import React from 'react';
import Card from './Card';

let HomeMenu = () => (
    <>
        {/* Squadrons */}
        <Card image="http://img3.wikia.nocookie.net/__cb20131012080921/starwars/images/8/80/X-wing_Fathead.png" alt="Star Wars squadrons screenshot of new republic pilots" text="See our Squadrons" type="SQUADRONS" />

        {/* Videos */}
        <Card image="http://img3.wikia.nocookie.net/__cb20131012080921/starwars/images/8/80/X-wing_Fathead.png" alt="" text="Watch Our Videos" type="VIDEOS" />

        {/* Photos */}
        <Card image="http://img3.wikia.nocookie.net/__cb20131012080921/starwars/images/8/80/X-wing_Fathead.png" alt="" text="See our Photos" type="PHOTOS" />
    </>
    
)

export default HomeMenu;