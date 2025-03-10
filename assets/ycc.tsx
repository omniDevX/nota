import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import SlideshowYcc from '@/components/Slideshow';
import { getImagesByCategory } from '@/paths/getYccImagesPath';

const YccScreen = () => {
    const params = useLocalSearchParams();
    const yccCatId = Array.isArray(params.itemid) ? params.itemid[0] : params.itemid;

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const fetchedImages = await getImagesByCategory(yccCatId || '1'); // Default to '1' if no ID
            setImages(fetchedImages);
        };

        fetchImages();
    }, [yccCatId]);

    return <SlideshowYcc images={images} />;
};

export default YccScreen;
