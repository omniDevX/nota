import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import AlbumSlideshow from '@/components/SlideshowLocalAlbum';

const AboutScreen = () => {
    const params = useLocalSearchParams();
    const navigation = useNavigation();
    const selectedAlbum = JSON.parse(params.selectedAlbum as string);
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return <AlbumSlideshow album={selectedAlbum} />;
};

export default AboutScreen;