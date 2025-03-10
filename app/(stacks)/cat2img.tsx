import { View, Text, Image, Animated, Alert, TouchableOpacity, ActivityIndicator  } from 'react-native';
import { ToastAndroid, Platform } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '@/config/styles';


// const repo = "abycc";  // You can dynamically change this
// const folder = "pure"; // The folder inside the repo
// 

const GITHUB_API_URL = (ghname: string, repo: string, folder: string) => `https://api.github.com/repos/${ghname}/${repo}/contents/${folder}`;
const GITHUB_RAW_URL = (ghname: string, repo: string, folder: string) => `https://raw.githubusercontent.com/${ghname}/${repo}/main/${folder}/`;


export default function SlideshowScreen() {
    const navigation = useNavigation();
    const parentNavi = navigation.getParent();
    const { ghname, repo, folder } = useLocalSearchParams();

    const [images, setImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoSlideshow, setIsAutoSlideshow] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        console.log("Current Image:", images[currentImage]);
    }, [currentImage]);
    // Fetch image list dynamically from GitHub API

    useEffect(() => {
        const fetchImageList = async () => {
            try {
                console.log(repo + " - " + folder )
                const response = await fetch(GITHUB_API_URL(ghname as string, repo as string, folder as string));
                if (!response.ok) throw new Error("Failed to fetch image list");
                const files = await response.json();


                // Filter only image files (e.g., .jpg, .png, .jpeg)
                const imageFiles = files
                    .filter((file: any) => file.type === 'file' && /\.(jpg|jpeg|webp|png|gif|JPG|JPEG|PNG|WEBP)$/i.test(file.name))
                    .map((file: any) => GITHUB_RAW_URL(ghname as string, repo as string, folder as string) + file.name);

                const shuffledImages = imageFiles.sort(() => Math.random() - 0.5);
                setImages(shuffledImages);
            } catch (error) {
                console.error("Error fetching image list:", error);
            }
        };
        fetchImageList();
    }, [repo, folder]);

    // Manual navigation
    const goToNextImage = () => { setCurrentImage((prev) => (prev + 1) % images.length); };
    const goToPrevImage = () => { setCurrentImage((prev) => (prev - 1 + images.length) % images.length); };

    // Auto slideshow
    const startAutoSlideshow = () => {
        setIsAutoSlideshow(true);
        intervalRef.current = window.setInterval(() => {
            goToNextImage();
        }, 3000);
    };

    const stopAutoSlideshow = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsAutoSlideshow(false);
    };

    // Scale animation for toggle
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const toggleSlideshow = () => {
        if (isAutoSlideshow) {
            stopAutoSlideshow();
            Animated.timing(scaleAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
        } else {
            Animated.timing(scaleAnim, { toValue: 0.3, duration: 2500, useNativeDriver: true }).start(() => {
                startAutoSlideshow();
                Animated.timing(scaleAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
            });
        }
    };

    useEffect(() => {
        // Hide Drawer header
        if (parentNavi) {
            parentNavi.setOptions({ headerShown: false });
        }
        return () => {
            if (parentNavi) {
                parentNavi.setOptions({ headerShown: true });
            }
        };
    }, [parentNavi]);

    // Request media permissions
    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Toast message
    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert("Notification", message);
        }
    };

    // Download Image
    const downloadImage = async () => {
        if (!hasPermission) {
            showToast("Please grant media access to save images.");
            return;
        }

        try {
            const imageUrl = images[currentImage];
            const fileName = imageUrl.split('/').pop();
            const fileUri = `${FileSystem.documentDirectory}${fileName}`;

            const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);
            const asset = await MediaLibrary.createAssetAsync(uri);
            await MediaLibrary.createAlbumAsync("Downloaded Images", asset, false);

            showToast("Download complete! Image saved.");
        } catch (error) {
            console.error("Download Error:", error);
            showToast("Download failed. Try again.");
        }
    };

    if (images.length === 0) {
        
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.sliderContainer}>
            {!isAutoSlideshow && (
                <TouchableOpacity onPress={downloadImage} style={{ position: 'absolute', top: 20, right: 20, backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: 10, borderRadius: 20, zIndex: 10 }}>
                    <MaterialCommunityIcons name="download" size={24} color="white" />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={toggleSlideshow} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <Image source={{ uri: images[currentImage] }} style={styles.sliderImage} />
                </Animated.View>
            </TouchableOpacity>

            {!isAutoSlideshow && (
                <View style={styles.sliderNavigation}>
                    <TouchableOpacity onPress={goToPrevImage} style={styles.sliderNavButton}>
                        <Text style={styles.sliderNavText}>←</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToNextImage} style={styles.sliderNavButton}>
                        <Text style={styles.sliderNavText}>→</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
