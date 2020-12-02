import React from 'react';
import {StyleSheet, View,} from 'react-native';
import Jackets from './components/Jackets';
import RedJacket from './RedJacket';
import JacketsScreen from './JacketsScreen'                

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RedJacket/> */}
      {/* <Jackets/> */}
      <JacketsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
