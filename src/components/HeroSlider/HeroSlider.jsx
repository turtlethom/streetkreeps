import React, { useRef, useState } from "react";
import styles from "./HeroSlider.module.css";

function HeroSlider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Current slide index

    // **** ADD SLIDES IN THIS SECTION ****
    const SLIDE_DETAILS = [
        {
            id: "slide-1",
            src: "streetkreeps-main.jpg",
            alt: "First Image Slide"
        },
        {
            id: "slide-2",
            src: "mustang-solo.jpg",
            alt: "Second Image Slide"
        },
        {
            id: "slide-3",
            src: "bike-solo.jpg",
            alt: "Third Image Slide"
        },
        {
            id: "slide-4",
            src: "two-cars.jpg",
            alt: "Fourth Image Slide"
        },
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
        <section className={styles.sliderContainer}>
            <div ref={sliderRef}>
                <div className={styles.slider}>
                    {SLIDE_DETAILS.map((slide, index) => (
                        <img
                            key={slide.id}
                            id={slide.id}
                            src={slide.src}
                            alt={slide.alt}
                            className={index === currentSlide ? styles.active : ""}
                        />
                    ))}
                </div>
                <div className={styles.sliderNav}>
                    {SLIDE_DETAILS.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleNavClick(index)}
                            className={index === currentSlide ? styles.active : ""}
                        ></button>
                    ))}
                </div>
            </div>

            <button type="button" className={styles.prevButton} onClick={handlePrevButtonClick}>&#10094;</button>
            <button type="button" className={styles.nextButton} onClick={handleNextButtonClick}>&#10095;</button>
            
        </section>
    );
}

export default HeroSlider;
