import { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { AnimationType, getAnimationStyle } from '@/utils/animationStyles';

const useImageAnimation = (images: string[], setCurrentIndex: (index: number) => void) => {
    const [animationType, setAnimationType] = useState<AnimationType>(AnimationType.Scale);
    const scaleAnim = new Animated.Value(1);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                const newIndex = Math.floor(Math.random() * images.length);
                const animationTypes = Object.values(AnimationType);
                const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
                setAnimationType(randomAnimation);
                Animated.timing(scaleAnim, {
                    toValue: 0.5,
                    duration: 1500,
                    useNativeDriver: true,
                }).start(() => {
                    setCurrentIndex(newIndex);
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 3500,
                        useNativeDriver: true,
                    }).start();
                });
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [images]);

    return { animationType, scaleAnim };
};

export default useImageAnimation;