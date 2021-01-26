import React from 'react';
import downArrow from "../assets/downArrow.svg"
import niwiLogo from "../assets/niwiLogo.webp"


let Hero = () => {
    return (
        <section className="hero">

            <img src={ niwiLogo } alt="Night Witches Logo" />
            <h2>Who are the Night Withes?</h2>
            <p>We're a mercenary fighter wing, made up of the best pilots in the galaxy. We hold allegiance to no faction - loyal only to ourselves and whoever happens to hire us. Our motto is <div className="hero_niwiMotto">"Live to Fight and Fly!"</div></p>
            <p>Learn More</p>
            <img src={ downArrow } alt="downards pointing arrow" /> 

        </section>
    )
}

export default Hero;