import React from 'react';
import { StyleSheet, FlatList, View, TextInput, Text } from 'react-native';
import Jackets from "./components/Jackets"
import { AntDesign } from '@expo/vector-icons';

const JacketsScreen = () => {
    jackets = [
        { image: require('./assets/pinkJacket.png'), name: 'Bike Jacket Softshell Warm', rating: ,price: '$99', },
        { image: require('./assets/blueJacket.png'), name: 'Pink Hoody Merino', price: '$80' },
        { image: require('./assets/blackJacket.png'), name: 'Hooded Jacket Classic', price: '$140' },
        { image: require('./assets/creamJacket.png'), name: 'Red Woman Jacket', price: '$115' },
        { image: require('./assets/pinkJacket.png'), name: 'Bike Jacket Softshell Warm', price: '$99', },
    ]
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <View style={styles.arrowLeft}>
                        <AntDesign name="arrowleft" size={25} color="black" />
                    </View>
                    <View style={styles.shoppingCart}>
                        <AntDesign name="shoppingcart" size={25} />
                    </View>
                </View>
                
                <Text style={styles.heading}>Woman Jacket</Text>

                <View style={styles.textInputContainer}>
                    <TextInput placeholder="Search Jacket" style={styles.textInput}/>
                    <Text style={styles.filter}>Filter</Text>
                </View>
                    
                <FlatList
                    data={jackets}
                    renderItem={({ item }) => {
                        return <Jackets name={item.name} price={item.price} image={item.image} />
                    }}
                    keyExtractor={(item) => item.number}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#e8e6e6",
    },
    container: {
        flex: 1,
        marginTop:30,
        justifyContent: "space-around",
        marginLeft: 10,
    },
    icons: {
        flexDirection: "row",
        marginTop: 15,
        marginRight: 20,
        alignSelf: "flex-start",
    },
    arrowLeft:{
        marginLeft:15,
        backgroundColor: "#f7f5f2",
        borderRadius: 15,
        height: 25,
        width: 25,
        alignItems:"center"
    },

    shoppingCart: {
        backgroundColor: "#f7f5f2",
        marginTop:5,
        marginLeft: 250,
        borderRadius: 15,
        height: 30,
        width: 30,
        alignItems:"center"
    },
    heading: {
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 20
    },
textInputContainer:{
    flexDirection: 'row',
    backgroundColor: "white",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: 330,
    marginHorizontal: 5,
    marginVertical: 20,
    borderRadius: 10,
},
    textInput: {
    marginLeft:10

    },
    filter:{
        marginRight:10,
        fontSize:15
    }
})

export default JacketsScreen;
