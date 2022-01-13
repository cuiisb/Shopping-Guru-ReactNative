import React, { useState, useEffect } from 'react'
import { FlatList, Platform, Text, View, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import ProductItem from '../components/shop/ProductItem'
import colors from '../components/constants/colors';
import * as cartActions from '../actions/Cart'
import HeaderButton from '../UI/HeaderButton'
import { Header } from 'react-native/Libraries/NewAppScreen'
import * as ProductsActions from '../actions/products'

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
     const dispatch = useDispatch()

     useEffect(() => {
         dispatch(ProductsActions.fetchProducts())
     }, [dispatch])

     const selectItem = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        })
     }


    return (

        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    img={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        selectItem(itemData.item.id, itemData.item.title)
                    }}
                >
                <Button  
                color = {colors.primary} 
                title="View Details" 
                onPress={() => {
                    selectItem(itemData.item.id, itemData.item.title)
                }} />
                <Button 
                color = {colors.primary} 
                title="To Cart" 
                onPress={()=>{dispatch(cartActions.addToCart(itemData.item))}} />
                </ProductItem>
            )}
        />
        // <View>
        //     {products.map((item,index)=>(
        //         <Text>{item.title}</Text>
        //     ))}
        //      {/* <ProductItem/>  */}

        // </View>

    )

}

// ProductsOverviewScreen.navigationOptions = cartData => {
//     return {
//         headerTitle: 'All Products',
//         // headerLeft: (
//         //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         //         <Item
//         //             title="Menu"
//         //             iconName='md-menu'
//         //             onPress={() => {
//         //                 cartData.navigation.toggleDrawer()
//         //             }}
//         //         />
//         //     </HeaderButtons>
//         // ),
//         headerStyle: {
//             backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//         headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
//             <Item
//                 title='Cart'
//                 iconName='cart'
//                 onPress={() => {
//                     cartData.navigation.navigate('Cart')
//                 }}
//             />
//         </HeaderButtons>
//     }
//}

export default ProductsOverviewScreen