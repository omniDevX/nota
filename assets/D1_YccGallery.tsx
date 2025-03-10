import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';

import styles from '@/config/styles';
import YccCatPromise from '@/components/home/getHomeList'; // Import the Promise

interface YccCategory {
    id: string;
    title: string;
    cover: string;
}

const YccGallery = () => {
    const [yccCategories, setYccCategories] = useState<YccCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch the YccCat data when the component mounts
        const fetchData = async () => {
            try {
                const data = await YccCatPromise; // Wait for the Promise to resolve
                setYccCategories(data); // Update state with the fetched data
            } catch (err) {
                setError('Failed to load categories.'); // Handle errors
                console.error(err);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, []);

    const handleItemPress = (item: YccCategory) => {
        console.log(item.id)
        console.log(item.cover)
        router.push({
            pathname: '/ycc',
            params: { itemid: item.id },
        });
    };

    const renderItem = ({ item }: { item: YccCategory }) => (
        <TouchableOpacity
            style={styles.catContainer}
            onPress={() => handleItemPress(item)}
        >
            <Image source={{ uri: item.cover }} style={styles.catCoverImg} />
            <Text style={styles.catTitle} numberOfLines={1}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={yccCategories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.mainGrid}
            />
        </View>
    );
};

export default YccGallery;