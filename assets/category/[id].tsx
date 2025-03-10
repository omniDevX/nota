import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const SubCategoryScreen = () => {
    const { id, name } = useLocalSearchParams();
    console.log("Category ID--:", id); // Debugging
    const navigation = useNavigation();

    useEffect(() => {
        if (id) {
            navigation.setOptions({ title: name }); // Set title to the category ID
        }
    }, [id, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Category: {id}</Text>
        </View>
    );
};

export default SubCategoryScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 22, fontWeight: 'bold' },
});
