import React, {useEffect} from 'react'
import { View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import HeaderButton from '../UI/HeaderButton'
import OrderItem from '../components/shop/OrderItem'
import {  Item, HeaderButtons } from 'react-navigation-header-buttons';
import * as ordersActions from '../actions/order'

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders)
    const dispatch = useDispatch()

    useEffect (()=> {
        dispatch(ordersActions.fetchOrders())
    },[dispatch])

    return <FlatList 
    data={orders} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <OrderItem 
        amount = {itemData.item.totalAmount} 
        date={itemData.item.readableDate}
        items = {itemData.item.items}
        />}
    />
}
OrdersScreen.navigationOptions = cartData => {
    return {
    headerTitle: "Your Orders",
    headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title = "Menu"
        iconName='md-menu'
        onPress = {() => {
            cartData.navigation.toggleDrawer()
        }}
        />
    </HeaderButtons>
    ),
    }
}

export default OrdersScreen