import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();  // Access the dynamic 'id' parameter

  // Example detailed content based on the 'id'
  const detailsContent = {
    food: "Here are the detailed food-related items.",
    travel: "Here are the detailed travel-related items.",
    technology: "Here are the detailed technology-related items.",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{detailsContent[id] || "Details not found"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
