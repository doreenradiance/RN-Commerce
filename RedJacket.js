import React from 'react'
import { StyleSheet, Text, View, Image, Button, } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';



export default function RedJacket() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <View style={styles.shoppingCart}>
                        <AntDesign name="shoppingcart" size={25} />
                    </View>

                    <View style={styles.heartOutlined}>
                        <Entypo name="heart-outlined" size={25} />
                    </View>
                </View>

                <Image source={require('./assets/redJacket.jpg')} style={styles.image} />

                <Text style={styles.text1} > Red Woman Jacket</Text>
                <Text>Review : ******</Text>
                <Text style={styles.emptyButton}></Text>

                <Text>
                    It is a long established fact that a reader will be
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
                    <View style={styles.addToCartContainer}>
                        <Button style={styles.addToCart} title="Add to Cart" />
                    </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f0f0f0'
    },
    container: {
        marginTop: 30,
        marginHorizontal: 20,
        justifyContent: "space-around",
    },

    text1: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 20
    },
    icons: {
        // color: "blue",
        alignItems: "flex-end",
        marginRight: 20,
        marginBottom: 5
    },

    shoppingCart: {
        backgroundColor: "#e6d5c8",
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    heartOutlined: {
        marginTop: 10,
        backgroundColor: "#e6d5c8",
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        alignSelf: "center",
        height: 250,
        width: 250,
        borderRadius: 10,
        transform: [{ rotateY: '-20deg' }]
    },

    emptyButton: {
        backgroundColor: "#686fe8",
        borderRadius: 5,
        height: 5,
        width: 50,
        marginVertical: 20
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
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"


    },

    prices: {
        marginLeft: 10,
        marginVertical: 15,
    },

    amount: {
        color: "white",
        fontWeight: "bold"
    },

    price: {
        color: "white",
        fontWeight: "bold"
    },

    addToCartContainer:{
        marginRight: 10,
        backgroundColor:"#464feb",
        borderRadius: 5,
    },
    addToCart: {
        alignSelf: "center",
        marginRight: 10
        // backgroundColor: "#464feb",
        // borderRadius: 5,


    }

})
