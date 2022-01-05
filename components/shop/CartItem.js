import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const CartItem = props => {
    return (
    <View style = {styles.cartItem}>
        <View style = {styles.cartData}>
        <Text style = {styles.qty}>{props.quantity}</Text> 
        <Text style = {styles.title}>{props.title}</Text>
        </View>
    <View style = {styles.itemData}>
    <Text style = {styles.amount}>Rs{props.amount.toFixed(2)}</Text>
    <TouchableOpacity onPress = {props.onRemove} style = {styles.delete}>
    <Ionicons
    name='md-cart'
    size= {23}
    color= "firebrick"
    />
    </TouchableOpacity>
    </View>
    </View>
    )
} 

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    cartData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qty: {
        color: '#888',
        fontSize: 15
    },
    title: {
        fontSize: 15
    },
    itemData: {
        fontSize: 15
    },
    amount: {
        fontSize: 15
    },
    delete: {
        marginLeft: 20
    }
})

export default CartItem