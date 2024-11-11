import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    name: "Pinarello",
    price: 1500,
    image: "https://i.ibb.co/bBktyF1/image.png",
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    id: 2,
    name: "Specialized",
    price: 2000,
    image: "https://i.ibb.co/bBktyF1/image.png",
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    id: 3,
    name: "Cannondale",
    price: 3000,
    image: "https://i.ibb.co/bBktyF1/image.png",
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    id: 4,
    name: "Bianchi",
    price: 2500,
    image: "https://i.ibb.co/bBktyF1/image.png",
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    id: 5,
    name: "Trek",
    price: 2800,
    image: "https://i.ibb.co/bBktyF1/image.png",
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    id: 6,
    name: "ABS",
    price: 2800,
    image: "https://i.ibb.co/bBktyF1/image.png",
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
];

export const ListProductScreen = () => {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProductDetail', { item })}
    >
      <Image style={{ height: 50, width: 50 }} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, color: "#fc2003" }}>POWER BIKE SHOP</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight || 0,
    alignContent: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
    padding: 16,
    margin: 8,
    width: '48%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});
