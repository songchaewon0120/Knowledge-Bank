import React, { useState } from 'react';

function ImageSlider({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="image-slider">
            <button onClick={prevImage}>이전</button>
            <img src={images[currentImageIndex]} alt="slide" />
            <button onClick={nextImage}>다음</button>
        </div>
    );
}

export default ImageSlider;