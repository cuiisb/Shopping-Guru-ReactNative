import React from 'react'
import { View, Text, Image, Styleshseet, Button } from 'react-native'

const ProductItem = props => {
    return (
        <View style={styles.prod}>
            <Image style={styles.img} src={{ uri: props.image }} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>{props.price.tofixed(3)}</Text>
            <View style={styles.btn}>
                <Button title="View Details" onPress={props.ViewDetail} />
                <Button title="To Cart" onPress={props.AddToCart} />
            </View>
        </View>
    )
}

const styles = Styleshseet.create({
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
        width: '60%',
        height: '60%'
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
    }
})

export default ProductItem