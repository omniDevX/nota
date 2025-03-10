import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/config/styles';

import { CatInterface } from '@/config/type';
import { Cat2Sub2Img } from '@/data/CatImgList';

const CategoryScreen: React.FC = () => {
    const { catId } = useLocalSearchParams();   // catId is repo

    const [subCatList, setSubCatList] = useState<CatInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const subCatData = Cat2Sub2Img[catId as string] || Cat2Sub2Img.default;
        setSubCatList(subCatData);
        setLoading(false);
    }, [catId]);

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>{error}</Text>;

    const handleSubCatPress = (item: CatInterface) => {
        router.push({
            pathname: "/cat2img", params: {
                imgPath:  item.path,
                count:    item.count,
                folder:   item.folder,
                repo:     catId,
            }
        });
    };

    const renderItem = ({ item }: { item: CatInterface }) => (
        <TouchableOpacity
            style={styles.catContainer}
            onPress={() => handleSubCatPress(item)}
        >
            <Image source={{ uri: item.cover }} style={styles.catCoverImg} />
            <Text style={styles.catTitle} numberOfLines={2}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={subCatList}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.mainGrid}
            />
        </View>
    );
};

export default CategoryScreen;
