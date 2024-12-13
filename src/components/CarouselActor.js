import React, { useState } from 'react';
import '../styles/Carousel.css'; 
import { useNavigate } from 'react-router-dom';
import { Button } from '@innovaccer/design-system';

const CarouselActor = ({ images, castIds }) => {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 16; // Number of images to show

    const totalItems = images.length;
    const maxIndex = Math.max(0, totalItems - itemsToShow); // Calculate max index

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentIndex(0); // Reset to the first slide
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
            setCurrentIndex(maxIndex); // Go to the last slide if at the start
        }
    };

    return (
        <div className="carousel-form">
            <Button 
                size='large' 
                icon="keyboard_arrow_left" 
                onClick={prevSlide} 
                className="carousel-button left"
                disabled={totalItems <= itemsToShow} // Disable if not enough items
            />
            <div className="carousel">
                <div className="carousel-container" style={{ transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} onClick={() => navigate(`/cast/${castIds[index]}`)}>
                            <img src={image} alt={`carousel ${index}`} className="carousel-image" />
                        </div>
                    ))}
                </div>
            </div>
            <Button 
                size='large' 
                onClick={nextSlide} 
                icon="keyboard_arrow_right" 
                className="carousel-button right"
                disabled={totalItems <= itemsToShow} // Disable if not enough items
            />
        </div>
    );
};

export default CarouselActor;


