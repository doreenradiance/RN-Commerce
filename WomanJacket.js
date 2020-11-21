import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function WomanJacket() {
  return (
    <View >
      <View>
        <AntDesign name="shoppingcart" size={25} />
      </View>

        <Text>Woman Jacket</Text>
      
        <Button placeholder='Search Jacket' placeholder="Filter"></Button>
    

      <Image source={require('../assets/redJacket.jpg')} />

      <Text>Bike Jacket Softshell Warm</Text>
      <Text>*</Text>
      <Text>$99</Text>

    </View>
  );
}

const styles = StyleSheet.create({})