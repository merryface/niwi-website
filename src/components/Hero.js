import React from 'react';
import downArrow from "../assets/downArrow.svg"
import niwiLogo from "../assets/niwiLogo.webp"


let Hero = () => {
    return (
        <section className="hero">

            <div className="videoContainer">
                <iframe title="niwi trailer" className="videoContainer__video" width="x" height="y" src="https://www.youtube.com/embed/ipxu81WiQsw?controls=0&amp;start=57&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
            </div>

            <img src={ niwiLogo } className="hero_logo" alt="Night Witches Logo" />
            <h2 className="hero_subtitle">Who are the Night Withes?</h2>
            <p className="hero_intro">We're a mercenary fighter wing, made up of the best pilots in the galaxy. We hold allegiance to no faction - loyal only to ourselves and whoever happens to hire us. Our motto is <div className="hero_niwiMotto">"Live to Fight and Fly!"</div></p>

            <div className="hero_continue">
                <p className="hero_learnMore">Learn More</p>
                <img src={ downArrow } className="hero_downArrow" alt="downards pointing arrow" /> 
            </div>

        </section>
    )
}

export default Hero;