import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen';
import colors from '../components/constants/colors'
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import UserProductScreen from '../user/UserProductScreen';
import EditProductScreen from '../user/EditProductScreen';
import HeaderButton from '../UI/HeaderButton'





// const ProductsNav = createStackNavigator({
//     ProductsOverview: ProductsOverviewScreen,
//     Cart: CartScreen,
//     // navigationOptions: {
//     //     drawerIcon: drawerConfig => (
//     //     <Ionicons 
//     //     name='md-cart'
//     //     size={23}
//     //     color={drawerConfig.tintColor}
//     //     />
//     //     )
//     // },
//     defaultnavigationOptions: {
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? colors.primary : ''
//         },
//         headerTintcolor: Platform.OS === 'android' ? 'white' : colors.primary
//     },

// })

// const OrdersNav = createStackNavigator(
//     {
//     Orders: OrdersScreen,
//     // navigationOptions: {
//     //     drawerIcon: drawerConfig => (
//     //     <Ionicons 
//     //     name='md-list'
//     //     size={23}
//     //     color={drawerConfig.tintColor}
//     //     />
//     //     )
//     // },
//     defaultnavigationOptions: {
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//         },
//         headerTintcolor: Platform.OS === 'android' ? 'white' : Colors.primary

//     },
// })

// const UserNavigator = createStackNavigator(
//     {
//     UserProducts: UserProductsScreren,
//     EditProduct: EditProductScreen,
//     // navigationOptions: {
//     //     drawerIcon: drawerConfig => (
//     //     <Ionicons 
//     //     name='md-create'
//     //     size={23}
//     //     color={drawerConfig.tintColor}
//     //     />
//     //     )
//     // },
//     defaultnavigationOptions: {
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//         },
//         headerTintcolor: Platform.OS === 'android' ? 'white' : Colors.primary

//     },
// })

// const ShopNavigator = createDrawerNavigator(
//     {
//     Products: ProductsNav,
//     Orders: OrdersNav,
//     User: UserNavigator,
//     contentOptions: {
//         activeTintColor: Colors.primary
//     }
// })

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const userNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name ={UserProductScreen} 
            component = {UserProductScreen} />
        </Drawer.Navigator>
    )
}

const ShopNav = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ProductsOverviewScreen'
                    component={ProductsOverviewScreen}
                    options={
                        {
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            }, headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerTitle: 'All Products',
                            headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Item
                                    title='Cart'
                                    iconName='cart'
                                    onPress={() => navigation.navigate('Cart')}
                                />
                            </HeaderButtons>,
                        }}

                />
                <Stack.Screen name='Cart'
                    component={CartScreen}
                    options={{
                        drawerIcon: drawerConfig => (
                            <Ionicons
                                name='md-cart'
                                size={23}
                                color={drawerConfig.tintColor}
                            />
                        )
                    }} />
                    <Stack.Screen name = 'ProductDetailScreen' 
                    component = {ProductDetailScreen} 
                    />
                <Stack.Screen name='Orders'
                    component={OrdersScreen}
                    options={{
                        drawerIcon: drawerConfig => (
                            <Ionicons
                                name='md-list'
                                size={23}
                                color={drawerConfig.tintColor}
                            />
                        )
                    }} />
                    {/* <Stack.Screen name = {userNav} component = {userNav} /> */}
                {/* <Stack.Screen name='UserProducts'
                    component={UserProductScreen} />
                <Stack.Screen name='EditProduct'
                    component={EditProductScreen} /> */}
                    {/* <Stack.Screen name={userNav} component ={userNav} /> */}
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default ShopNav

// export default createAppContainer(ProductsNav)
