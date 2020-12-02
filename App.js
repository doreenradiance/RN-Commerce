import React from 'react';
import {StyleSheet, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

 
import Jackets from './components/Jackets';
import RedJacket from './src/screens/RedJacket';
import JacketsScreen from './src/screens/JacketsScreen'                

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "Red Jacket",
          // headerStyle:{
          //   backgroundColor:"#3b31eb"
          // },
          headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
          headerRight: () => (<Text style={{ color: "#3b31eb", marginRight: 20 }}>Icons</Text>)
        }}
      >
        <Stack.Screen
          // options={{}}
          name='Woman Jacket' component={JacketsScreen} />
        <Stack.Screen name='Red Jacket' component={RedJacket} />
        
      </Stack.Navigator>
    </NavigationContainer>


    // <View style={styles.container}>
    //   {/* <RedJacket/> */}
    //   {/* <Jackets/> */}
    //   <JacketsScreen/>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
// });
