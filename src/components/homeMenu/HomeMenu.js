import React from 'react';
import Card from './Card';
import squadronsImage from '../../assets/squadronsImage.jpg'
import videoImage from '../../assets/videosImage.jpg'
import photosImage from '../../assets/photosImage.jpg'

import { Link } from "react-router-dom";


let HomeMenu = () => (
    <div className="menu_container">
        {/* Squadrons */}
        <Link to="/squadrons"><Card image={ squadronsImage } alt="Star Wars squadrons screenshot of new republic pilots" text="See our Squadrons" type="SQUADRONS" /></Link>

        {/* Videos */}
        <Link to="/videos"><Card image={ videoImage } alt="Star wars squadrons screenshot of an exploding tie bomber" text="Watch Our Videos" type="VIDEOS" /></Link>

        {/* Photos */}
        <Link to="/photos"><Card image={ photosImage } alt="star wars squadrons screenshot of tie-defender firing ion lasers" text="See our Photos" type="PHOTOS" /></Link>
    </div>
    
)

export default HomeMenu;