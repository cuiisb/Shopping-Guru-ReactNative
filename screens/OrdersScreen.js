import React from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import HeaderButton from '../UI/HeaderButton'
import {  Item, HeaderButtons } from 'react-navigation-header-buttons';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders)

    return <FlatList 
    data={orders} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
    />
}
OrdersScreen.navigationOptions = navData => {
    return {
    headerTitle: "Your Orders",
    headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title = "Menu"
        iconName='md-menu'
        onPress = {() => {
            navData.navigation.toggleDrawer()
        }}
        />
    </HeaderButtons>
    ),
    }
}

export default OrdersScreen