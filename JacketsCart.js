import React from 'react';
import { FlatList, View,Text } from 'react-native';
import WomanJacket from "./components/WomanJacket"

const JacketsCart= () => {
    jackets = [
        { name:'Bike Jacket Softshell Warm', price:$99 },
        { name:'Pink Hoody Merino', price:$80 },
        { name:'Hooded Jacket Classic', price:$140 },
        { name:'Red Woman Jacket', price:$115 },
    ]
    return (
        <View>
            <FlatList
                data={jackets}
                renderItem={({ item }) => {
                    return <WomanJacket name={item.name} price={item.price} />
                }}
                keyExtractor={(item) => item.price}
            />
        </View>
    );
}

export default JacketsCart;
