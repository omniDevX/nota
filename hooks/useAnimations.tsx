import { useRef } from 'react';
import { Animated } from 'react-native';

const useScaleAnimation = () => {
    const scaleAnim = useRef(new Animated.Value(0)).current;

    const animateImageChange = (onAnimationComplete: () => void) => {
        // Fade out the current image
        Animated.timing(scaleAnim, {
            toValue: 0.75, // Fade out the current image
            duration: 600, // Smooth fade-out duration
            useNativeDriver: true,
        }).start(() => {
            onAnimationComplete(); // Callback to update the image
            // Fade in the new image
            Animated.timing(scaleAnim, {
                toValue: 1, // Fade in the new image
                duration: 3500, // Smooth fade-in duration
                useNativeDriver: true,
            }).start();
        });
    };

    return { scaleAnim, animateImageChange };
};

export default useScaleAnimation;
