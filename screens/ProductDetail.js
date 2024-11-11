import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export const ProductDetail = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Click to buy" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  image: { width: '100%', height: 200, marginBottom: 20, resizeMode: 'cover' },
  name: { fontSize: 36, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 24, color: '#888' },
  description: { fontSize: 18 },
});
