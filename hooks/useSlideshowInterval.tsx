import { useEffect, useState } from 'react';

const useSlideshowInterval = (images: string[], defaultInterval: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalTime, setIntervalTime] = useState(defaultInterval);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                const newIndex = Math.floor(Math.random() * images.length);
                setCurrentIndex(newIndex);
            }, intervalTime);

            return () => clearInterval(interval);
        }
    }, [images, intervalTime]);

    const updateIntervalTime = (newInterval: number) => {
        setIntervalTime(newInterval);
    };

    return { currentIndex, updateIntervalTime, intervalTime };
};

export default useSlideshowInterval;
