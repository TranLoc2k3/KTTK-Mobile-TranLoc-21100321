import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export const IntroduceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'italic'}}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 250,
            height: 250,
            backgroundColor: '#f7c3dd',
            borderRadius: 20,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: [{ translateX: -100 }, { translateY: -100 }],
              zIndex: 3,
            }}
            source={require('../assets/image1.png')}
          />
        </View>
      </View>

      <Text style={{ fontWeight: 'bold' }}>POWER BIKE SHOP</Text>
      <Button
        style={{ height: 50, width: 100, borderRadius: 12 }}
        title="Get Started"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
