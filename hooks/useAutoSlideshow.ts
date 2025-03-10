import { useState, useEffect } from 'react';

export function useAutoSlideshow(images: string[]) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const startSlideshow = () => {
        setIsPlaying(true);
    };

    const stopSlideshow = () => {
        setIsPlaying(false);
    };

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(goToNextImage, 3000); // Change every 3 sec
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    return { currentIndex, setCurrentIndex, goToNextImage, goToPrevImage, startSlideshow, stopSlideshow, isPlaying };
}
