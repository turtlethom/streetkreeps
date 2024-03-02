import React from "react";
import ReactImageGallery from "react-image-gallery";
import "./ImageSlider.css";
import "react-image-gallery/styles/css/image-gallery.css"

// {
//     url: "slider-img(1).JPG",
//     heading1: "Welcome To StreetKreeps",
//     heading2: "Newburgh, New York",
//     heading3: "Lorem ipsum dolor sit amet consectetur, adipisicing",
// }

const images = [
    {
        original: "slider-img(1).JPG",
    },
    {
        original: "slider-img(2).JPG",
    },
  ];

function ImageSlider() {
    return (
        <div className="container">
            <ReactImageGallery 
                items={images} 
                showBullets={true}
                showFullscreenButton={false}
                showThumbnails={false}
                showPlayButton={false}
            />
        </div>
    )
}

export default ImageSlider;