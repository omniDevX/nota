import { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

const useFetchImages = (album: MediaLibrary.Album) => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const assets = await MediaLibrary.getAssetsAsync({
                    album,
                    mediaType: MediaLibrary.MediaType.photo,
                });
                setImages(assets.assets.map((asset) => asset.uri));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, [album]);

    return { images, setImages, loading };
};

export default useFetchImages;