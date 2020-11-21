import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function RedJacket() {
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <AntDesign name="shoppingcart" size={15} />
                <Entypo name="heart-outlined" size={15} />
            </View>

            <Image source={require('../assets/redJacket.jpg')} style={styles.image} />

            <Text style={styles.text1} > Red Woman Jacket</Text>
            <Text>Review : ******</Text>
            <Text style={styles.emptyButton}></Text>

            <Text>It is a long establishedfact that a reader will be 
                </Text>
            <Text>
                
                distracted by the readable content of a page.
                </Text>

            <View style={styles.materialContainer}>
                <Text style={styles.material}>Material :91% polyester,9% ealstane</Text>
            </View>


            <View style={styles.sizes}>
                <Text style={styles.size}>XS</Text>
                <Text style={styles.size} >S</Text>
                <Text style={styles.M}>M</Text>
                <Text style={styles.size}>L</Text>
                <Text style={styles.size}>XL</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.prices}>
                    <Text style={styles.amount}>Total Amount</Text>
                    <Text style={styles.price}>$110</Text>
                </View>
                <Text style={styles.addToCart}>Add to Cart</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: "space-around",
        
    },

    text1: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical:20
    },
    icons: {
        alignContent: "flex-end",
        marginRight:50
    },

    image: {
        alignSelf: "center",
        height: 250,
        width: 250,
        
    },
    emptyButton: {
        backgroundColor: "#686fe8",
        borderRadius: 5,
        height: 5,
        width: 50,
        marginVertical:20
    },
    materialContainer: {
        backgroundColor: "#f5f5f5",
        marginVertical: 20
    },
    material: {
        color: "#686fe8",
        height: 50,
        textAlign: "center",
        marginTop: 20

    },
    sizes: {
        marginLeft: 50,
        flexDirection: "row",

    },
    size: {
        backgroundColor: "#f5f5f5",
        fontWeight: "bold",
        borderRadius: 5,
        height: 20,
        width: 30,
        textAlign: "center",
        marginRight: 15,
    },
    M: {
        backgroundColor: "#686fe8",
        fontWeight: "bold",
        borderRadius: 5,
        height: 20,
        width: 30,
        textAlign: "center",
        marginRight: 15,
    },
    footer: {
        backgroundColor: "#686fe8",
        borderRadius: 15,
        marginTop: 30

    },
    prices: {
        // color:"white",
        marginLeft: 10,
        marginTop: 15,
        alignItems: "flex-start"
    },
    amount: {
        color: "white",
        fontWeight: "bold"
    },
    price: {
        color: "white",
        fontWeight: "bold"
    },

    addToCart: {
        color: "white",
        alignSelf: "flex-end",
        alignItems:"center",
        backgroundColor: "#464feb",
        borderRadius: 5,
        marginRight:20
    }

})
