import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native'

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen'
import colors from '../constants/colors'
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';

const ProductsNav = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    Cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
        <Ionicons 
        name='md-cart'
        size={23}
        color={drawerConfig.tintColor}
        />
        )
    },
    defaultnavOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
        },
        headerTintcolor: Platform.OS === 'android' ? 'white' : colors.primary
    },
    
})

const OrdersNav = createStackNavigator(
    {
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
        <Ionicons 
        name='md-list'
        size={23}
        color={drawerConfig.tintColor}
        />
        )
    },
    defaultnavOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
        },
        headerTintcolor: Platform.OS === 'android' ? 'white' : colors.primary
    
    },
})

const ShopNavigator = createDrawerNavigator(
    {
    Products: ProductsNav,
    Orders: OrdersNav
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})

export default createAppContainer(ShopNavigator)
