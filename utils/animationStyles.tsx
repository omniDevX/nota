import { Animated } from 'react-native';

export enum AnimationType {
    Zoom = 'zoom',
    Fade = 'fade',
    Bounce = 'bounce',
    Wobble = 'wobble',
    Scale = 'scale',
    Rotate = 'rotate',
    Slide = 'slide',
    Flip = 'flip',
}

export const getAnimationStyle = (animationType: AnimationType, scaleAnim: Animated.Value) => {
    switch (animationType) {
        case AnimationType.Fade:
            return { opacity: scaleAnim };

        case AnimationType.Scale:
            return { transform: [{ scale: scaleAnim }] };

        case AnimationType.Rotate:
            return {
                transform: [
                    {
                        rotate: scaleAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '10deg'],
                        }),
                    },
                ],
            };

        case AnimationType.Slide:
            return {
                transform: [
                    {
                        translateX: scaleAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-100, 0],
                        }),
                    },
                ],
            };

        case AnimationType.Zoom:
            return {
                opacity: scaleAnim,
                transform: [
                    { scale: scaleAnim.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) },
                ],
            };

        case AnimationType.Bounce:
            return {
                transform: [
                    {
                        scale: scaleAnim.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [1, 1.2, 1],
                        }),
                    },
                ],
            };

        case AnimationType.Flip:
            return {
                transform: [
                    {
                        rotateY: scaleAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '180deg'],
                        }),
                    },
                ],
            };

        case AnimationType.Wobble:
            return {
                transform: [
                    {
                        translateX: scaleAnim.interpolate({
                            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                            outputRange: [0, -15, 15, -15, 15, 0],
                        }),
                    },
                ],
            };

        default:
            return {};
    }
};
