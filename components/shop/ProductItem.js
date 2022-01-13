import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'

const ProductItem = props => {

    let Touchcomp = TouchableOpacity

    return (
        <View style={styles.prod}>
            <Touchcomp onpress = {props.onSelect} useForeground>
            <Image style={styles.img} source={{ uri: props.image }} />
            <Text style={styles.title}>{props.title}</Text>
            {/* <Text style={styles.price}>{props.price.tofixed(3)}</Text> */}
            <View style={styles.btn}>
                {props.children}
            </View>
            </Touchcomp>
        </View>
    )
}

const styles = StyleSheet.create({
    prod: {
        shadowColor: 'black',
        shadowOpacity: 0.27,
        shadowOffset: { width: 0, height: 1.5 },
        shadowRadius: 7,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 290,
        margin: 19
    },
    img: {
        width: '100%',
        height: '75%'
    },
    title: {
        fontSize: 19,
        marginVertical: 4,
    },
    price: {
        fontSize: 15,
        color: 'lightgrey'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 40
    }
})

export default ProductItem