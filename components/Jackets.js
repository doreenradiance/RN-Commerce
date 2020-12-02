import React from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';



export default function jackets({ name, price, image }) {
  return (
    <View style={styles.container}>

      <View style={styles.details}>
          <Image source={image} style={styles.image}/>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text>*</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  
  image: {
    backgroundColor:"white",
    marginBottom:15,
    marginLeft:5,
    width: 130,
    height: 100,
    borderRadius: 12,
    transform: [{ rotateY: '-45deg' }]
  },
  details: {
    flexDirection: "row"
  },
  infoContainer:{
    marginLeft:10
  },
  name:{
    marginTop:30,
    fontSize:15,
    fontWeight:"bold"
  },
  price:{
    color:"#8442ed",
    marginTop:5,
    fontSize:15
  }
})