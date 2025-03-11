import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/config/styles';

import { CatInterface } from '@/config/type';

const CategoryScreen: React.FC = () => {
    const { catId } = useLocalSearchParams();   // catId is repo

    const [subCatList, setSubCatList] = useState<CatInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    return (
        <View >
        </View>
    );
};

export default CategoryScreen;
