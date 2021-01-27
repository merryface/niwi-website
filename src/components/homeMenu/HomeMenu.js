import React from 'react';
import Card from './Card';
import squadronsImage from '../../assets/squadronsImage.jpg'
import videoImage from '../../assets/videosImage.jpg'
import photosImage from '../../assets/photosImage.jpg'


let HomeMenu = () => (
    <>
        {/* Squadrons */}
        <Card image={ squadronsImage } alt="Star Wars squadrons screenshot of new republic pilots" text="See our Squadrons" type="SQUADRONS" />

        {/* Videos */}
        <Card image={ videoImage } alt="Star wars squadrons screenshot of an exploding tie bomber" text="Watch Our Videos" type="VIDEOS" />

        {/* Photos */}
        <Card image={ photosImage } alt="star wars squadrons screenshot of tie-defender firing ion lasers" text="See our Photos" type="PHOTOS" />
    </>
    
)

export default HomeMenu;