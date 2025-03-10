import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Animated, Pressable, Modal, Text, TextInput, Button } from 'react-native';
import styles from '@/config/styles';

import { AnimationType, getAnimationStyle } from '@/utils/animationStyles';
import useScaleAnimation from '@/hooks/useAnimations';
import useInterval from '@/hooks/useInterval';
import useModalActions from '@/hooks/useModalActions';

interface SlideshowYccProps {
    images: string[]; // Accept images array as a prop
}

const SlideshowYcc: React.FC<SlideshowYccProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const { scaleAnim, animateImageChange } = useScaleAnimation();
    const { savedIntervalValue, intervalInput, handleIntervalChange, saveInterval, intervalDuration } = useInterval();
    const { modalVisible, setModalVisible, } = useModalActions(images, currentImage, () => {});

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentImage + 1) % images.length; // Cyclic index
            animateImageChange(() => setCurrentImage(newIndex));
        }, intervalDuration);

        console.log(`Current image path: ${images[currentImage]}`);

        return () => clearInterval(interval);
    }, [images, animateImageChange, intervalDuration, currentImage]);

    if (images.length === 0) {
        return <ActivityIndicator style={styles.loading} size="large" color="#000" />;
    }

    return (
        <View style={styles.sliderContainer}>
            <Animated.View style={[styles.sliderImage, getAnimationStyle(AnimationType.Bounce, scaleAnim)]}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Animated.Image source={{ uri: images[currentImage] }} style={styles.sliderImage} />
                </Pressable>
            </Animated.View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Handles Android back button
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Interval (1 - 99 s):</Text>
                            <TextInput
                                style={styles.textInput}
                                value={intervalInput}
                                onChangeText={handleIntervalChange}
                                keyboardType="numeric"
                            />
                            <Button title="Save" onPress={() => { saveInterval(); setModalVisible(false); }} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SlideshowYcc;
