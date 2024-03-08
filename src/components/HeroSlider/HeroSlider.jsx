import React, { useRef, useState } from "react";
import "./HeroSlider.css";

function HeroSlider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Current slide index

    const slides = ["slide-1", "slide-2", "slide-3"]; // Array of slide IDs

    const scrollToSlide = (slideIndex) => {

        // Grab Slider Index
        const slideId = slides[slideIndex];
        const slideElement = document.getElementById(slideId);
        
        if (slideElement) {
            slideElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            setCurrentSlide(slideIndex); // Update current slide index
        }
    };

    const handlePrevButtonClick = () => {
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        scrollToSlide(prevSlideIndex);
    };

    const handleNextButtonClick = () => {
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        scrollToSlide(nextSlideIndex);
    };

    const handleNavClick = (index) => {
        scrollToSlide(index);
    }

    return (
        <section className="slider-container">
            <div className="slider-wrapper" ref={sliderRef}>
                <div className="slider">
                    <img id="slide-1" src="hero-slide1.jpg" alt="First Image Slide"/>
                    <img id="slide-2" src="hero-slide4.jpg" alt="Second Image Slide"/>
                    <img id="slide-3" src="hero-slide3.jpg" alt="Third Image Slide"/>
                </div>
                <div className="slider-nav">
                    {slides.map((_, index) => (
                        <button key={index} onClick={() => handleNavClick(index)}></button>
                    ))}
                </div>
            </div>
            <button className="prev-button" onClick={handlePrevButtonClick}>&#10094;</button>
            <button className="next-button" onClick={handleNextButtonClick}>&#10095;</button>
        </section>
    );
}

export default HeroSlider;
