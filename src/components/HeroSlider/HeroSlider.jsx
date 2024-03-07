import React from "react";
import "./HeroSlider.css";

function HeroSlider() {
    
    return (
        <section className="slider-container">
            <div className="slider-wrapper">
                <div className="slider">
                    <img id="slide-1" src="hero-slide1.jpg" alt="First Image Slide"/>
                    <img id="slide-2" src="hero-slide4.jpg" alt="Second Image Slide"/>
                    <img id="slide-3" src="hero-slide3.jpg" alt="Third Image Slide"/>
                </div>
                <div className="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a></div>
                </div>
                <button className="prev-button" onClick={1}>&#10094;</button>
                <button className="next-button" onClick={1}>&#10095;</button>
        </section>
    );
}

export default HeroSlider;