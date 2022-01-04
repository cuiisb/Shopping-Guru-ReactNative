import React from 'react'
import {View, Text, FlatList, Button, StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {useSelector} from 'react-redux'

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    return( 
    <View style = {styles.screen}>
        <View style = {styles.data}>
            <Text style = {styles.dataText}>
                Total: <Text style = {styles.amount}> Rs{cartTotalAmount}</Text>
            </Text>
            <Button title = 'Order Now'/>
            <View>
                <Text>CART ITEMS</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        margin: 20,
    },
    data: {
        flexDirection: 'row',
        marginBottom: 18,
        justifyContent: 'space-between',
        padding: 9,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.27,
        shadowOffset: { width: 0, height: 1.5 },
        shadowRadius: 7,
        elevation: 5,
        borderRadius: 10,
        
    },
    dataText: {
        fontFamily: 'open-sans-bold',
        fontSize: 19
    },
    amount: {
        color: 'seagreen'
    }
})

export default CartScreen