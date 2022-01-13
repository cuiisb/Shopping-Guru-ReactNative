import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform, Button } from 'react-native'
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
import AuthScreen from '../user/AuthScreen';





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

//const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

// const userNav = () => {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name={UserProductScreen}
//                 component={UserProductScreen} />
//         </Drawer.Navigator>
//     )
// }

const ShopNav = () => {
    return (

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home'
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
                            // headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            //     <Item
                            //         title='Cart'
                            //         iconName='cart'
                            //         onPress={() => navigation.navigate('Cart')}
                            //     />
                            // </HeaderButtons>,
                        }}

                />
                <Drawer.Screen name='Cart'
                    component={CartScreen}
                    options={{
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            }, headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        drawerIcon: drawerConfig => (
                            <Ionicons
                                name='md-cart'
                                size={23}
                                color={drawerConfig.tintColor}
                            />
                        )
                    }} />
                {/* <Drawer.Screen name='Product Details'
                    component={ProductDetailScreen}
                /> */}
                <Drawer.Screen name='Orders'
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
                <Drawer.Screen
                    name='User'
                    component={UserProductScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        }, headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitle: 'Your Products',
                        // headerLeft: (
                        //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        //         <Item
                        //             title="Menu"
                        //             iconName='md-menu'
                        //             onPress={() => {
                        //                 cartData.navigation.toggleDrawer()
                        //             }}
                        //         />
                        //     </HeaderButtons>
                        // ),
                        // headerRight: () =>
                        // <Button title = 'create'
                        // onPress={() => navigation.navigate('EditProduct')}
                        // />
                            // <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            //     <Item
                            //         title="Add"
                            //         iconName='md-create'
                            //         onPress={() => {
                            //             cartData.navigation.navigate('EditProduct')
                            //         }}
                            //     />
                            // </HeaderButtons>

                    }} />
                    <Drawer.Screen 
                    name ='Add Product'
                    component= {EditProductScreen}
                    />
                    <Drawer.Screen name = 'Login' component = {AuthScreen}
                     options={{
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        }, headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }}}/>
                {/* <Stack.Screen name = {userNav} component = {userNav} /> */}
                {/* <Stack.Screen name='UserProducts'
                    component={UserProductScreen} />
                <Stack.Screen name='EditProduct'
                    component={EditProductScreen} /> */}
                {/* <Stack.Screen name={userNav} component ={userNav} /> */}
            </Drawer.Navigator>

        </NavigationContainer>
    )
}


export default ShopNav

// export default createAppContainer(ProductsNav)
