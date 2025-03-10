import styles from '@/config/styles'
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, Animated, Pressable, Modal, Text, TextInput, Button } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';

import { AnimationType, getAnimationStyle } from '@/utils/animationStyles';
import useScaleAnimation from '@/hooks/useAnimations';
import useFetchImages from '@/hooks/useFetchImages';
import useInterval from '@/hooks/useInterval';
import useModalActions from '@/hooks/useModalActions';

const AlbumSlideshow: React.FC<{ album: MediaLibrary.Album }> = ({ album }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [firstImageLoaded, setFirstImageLoaded] = useState(false);
    const [animationType, setAnimationType] = useState<AnimationType>(AnimationType.Scale);

    const { scaleAnim, animateImageChange } = useScaleAnimation();
    const { images, setImages, loading } = useFetchImages(album);
    const { savedIntervalValue, intervalInput, handleIntervalChange, saveInterval, intervalDuration } = useInterval();
    const { modalVisible, setModalVisible, isIntervalInputVisible, setIsIntervalInputVisible, modalOptions } = useModalActions(images, currentIndex, setImages);

    useEffect(() => {
        if (images.length > 0 && !firstImageLoaded) {
            setFirstImageLoaded(true);
            const animationTypes = Object.values(AnimationType);
            const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
            setAnimationType(randomAnimation);
            animateImageChange(() => setCurrentIndex(0));
        }
    }, [images, firstImageLoaded, animateImageChange]);

    useEffect(() => {
        if (firstImageLoaded) {
            const interval = setInterval(() => {
                const newIndex = Math.floor(Math.random() * images.length);
                const animationTypes = Object.values(AnimationType);
                const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
                setAnimationType(randomAnimation);
                animateImageChange(() => setCurrentIndex(newIndex));
            }, intervalDuration);

            return () => clearInterval(interval);
        }
    }, [firstImageLoaded, images, animateImageChange, intervalDuration]);

    if (loading) {
        return <ActivityIndicator style={styles.loading} size="large" color="#000" />;
    }

    return (
        <View style={styles.sliderContainer}>
            <Animated.View style={[styles.sliderImage, getAnimationStyle(animationType, scaleAnim)]}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Animated.Image source={{ uri: images[currentIndex] }} style={styles.sliderImage} />
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
            <StatusBar style="light" translucent />
        </View>
    );
};

export default AlbumSlideshow;