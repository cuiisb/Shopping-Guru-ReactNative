import React from 'react'
import {View, Text, FlatList, Button, StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {useSelector, dispatch, useDispatch} from 'react-redux'
import HeaderButton from '../UI/HeaderButton'
import {  Item, HeaderButtons } from 'react-navigation-header-buttons';

import CartItem from '../components/shop/CartItem'
import * as cartActions from '../actions/Cart'
import * as ordersActions from '../actions/order'

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector (state =>{
       
        const newCartItems = []
        
        for (const key in state.cart.item){
            newCartItems.push({
                productId: key,
                productTitle: state.cart.item[key].productTitle,
                productPrice: state.cart.item[key].productPrice,
                quantity: state.cart.item[key].quantity,
                sum : state.cart.item[key].sum
            })
        }
        return newCartItems.sort((x , y) => x.productId > y.productId ? 1 : -1 )
    })
    const dispatch = useDispatch()
        
    return( 
    <View style = {styles.screen}>
        <View style = {styles.data}>
            <Text style = {styles.dataText}>
                Total: <Text style = {styles.amount}> Rs{cartTotalAmount.toFixed(2)}</Text>
            </Text>
            <Button  
            color = 'goldenrod'
            title = 'Order Now'
            onPress={() => {
                dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
            }}
            />
            </View>
            <FlatList
            data={cartItems}
            keyExtractor={item => item.productId}
            renderItem={itemData => <CartItem
            quantity = {itemData.item.quantity}
            title = {itemData.item.productTitle}
            amount = {itemData.item.sum}
            deleteable
            onRemove = {() => {
                dispatch(cartActions.RemoveFromCart(itemData.item.productId))
            }}
            />}
            />
        </View>
    )
}
CartScreen.navigationOptions ={
    headerTitle :"Your Cart"
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
        fontSize: 19
    },
    amount: {
        color: 'seagreen'
    }
})

export default CartScreen