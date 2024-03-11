import React, { useRef, useState } from "react";
import "./HeroSlider.css";

function HeroSlider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Current slide index

    const SLIDE_DETAILS = [
        {
            id: "slide-1",
            src: "hero-slide1.jpg",
            alt: "First Image Slide"
        },
        {
            id: "slide-2",
            src: "hero-slide4.jpg",
            alt: "Second Image Slide"
        },
        {
            id: "slide-3",
            src: "hero-slide3.jpg",
            alt: "Third Image Slide"
        }
    ];

    const scrollToSlide = (slideIndex) => {
        const slide = SLIDE_DETAILS[slideIndex];
        const slideElement = document.getElementById(slide.id);
        
        // Control Slide Change Interactivity
        if (slideElement) {
            slideElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            setCurrentSlide(slideIndex);
        }
    };

    const handlePrevButtonClick = () => {
        const prevSlideIndex = (currentSlide - 1 + SLIDE_DETAILS.length) % SLIDE_DETAILS.length;
        scrollToSlide(prevSlideIndex);
    };

    const handleNextButtonClick = () => {
        const nextSlideIndex = (currentSlide + 1) % SLIDE_DETAILS.length;
        scrollToSlide(nextSlideIndex);
    };

    const handleNavClick = (index) => {
        scrollToSlide(index);
    }

    return (
        <section className="slider-container">
            <div className="slider-wrapper" ref={sliderRef}>
                <div className="slider">
                    {SLIDE_DETAILS.map((slide, index) => (
                        <img
                            key={slide.id}
                            id={slide.id}
                            src={slide.src}
                            alt={slide.alt}
                            className={index === currentSlide ? "active" : ""}
                        />
                    ))}
                </div>
                <div className="slider-nav">
                    {SLIDE_DETAILS.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleNavClick(index)}
                            className={index === currentSlide ? "active" : ""}
                        ></button>
                    ))}
                </div>
            </div>

            <button type="button" className="prev-button" onClick={handlePrevButtonClick}>&#10094;</button>
            <button type="button" className="next-button" onClick={handleNextButtonClick}>&#10095;</button>
            
        </section>
    );
}

export default HeroSlider;
