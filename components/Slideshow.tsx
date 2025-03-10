import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, ActivityIndicator, Animated, Pressable, Modal, Text, TextInput, Button } from 'react-native';
import styles from '@/config/styles';

import { AnimationType, getAnimationStyle } from '@/utils/animationStyles';
import useScaleAnimation from '@/hooks/useAnimations';
import useInterval from '@/hooks/useInterval';
import useModalActions from '@/hooks/useModalActions';

import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

interface SlideshowYccProps {
    images: string[]; // Accept images array as a prop
}

const SlideshowYcc: React.FC<SlideshowYccProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const { scaleAnim, animateImageChange } = useScaleAnimation();
    const { savedIntervalValue, intervalInput, handleIntervalChange, saveInterval, intervalDuration } = useInterval();
    const { modalVisible, setModalVisible, } = useModalActions(images, currentImage, () => { });

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const anim = Object.values(AnimationType);
    const selectedAnimation = anim[currentImage % anim.length];
    console.log("---" + selectedAnimation)

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

    const savePicture = async () => {
        if (hasPermission === false) {
            alert('Permission denied. Please enable it in settings.');
            return;
        }

        try {
            const uri = images[currentImage];
            const fileUri = FileSystem.documentDirectory + `image_${Date.now()}.jpg`;
            await FileSystem.downloadAsync(uri, fileUri);

            // Save the image to the library
            await MediaLibrary.saveToLibraryAsync(fileUri);
            alert('Image saved successfully!');
        } catch (error) {
            alert('Failed to save image.');
        }
    };

    return (
        <View style={styles.sliderContainer}>
            <Animated.View style={[styles.sliderImage, getAnimationStyle(selectedAnimation, scaleAnim)]}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Animated.Image source={{ uri: images[currentImage] }} style={styles.sliderImage} />
                </Pressable>
            </Animated.View>
            <Modal transparent animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Interval (1 - 99 s):</Text>
                            <TextInput
                                style={styles.textInputInterval}
                                value={intervalInput}
                                onChangeText={handleIntervalChange}
                                keyboardType="numeric"
                            />
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={() => { saveInterval(); setModalVisible(false); }}>
                            <Text style={styles.buttonText}>Save Interval</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.savePictureButton} onPress={savePicture}>
                            <Text style={styles.buttonText}>Save Picture</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

export default SlideshowYcc;
