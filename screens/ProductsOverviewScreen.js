import React, { useState } from 'react'
import { FlatList, Platform, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {  Item, HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

//import ProductItem from '../components/shop/ProductItem'
import * as cartActions from '../actions/Cart'
import HeaderButton from '../UI/HeaderButton'
import { Header } from 'react-native/Libraries/NewAppScreen'

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
    //const dispatch = useDispatch()

    return (
        
        // <FlatList
        // data = {products}
        // keyExtractor={item => item.id }
        // renderItem = {itemData => (
        //     <ProductItem
        //     img = {itemData.item.imageUrl}
        //     title = {itemData.item.title}
        //     price = {itemData.item.price}
        //     ViewDetail = {() => {
        //         props.navigation.navigate('ProductDetail', {
        //             productId: itemDate.item.id,
        //             productTitle: itemData.item.title
        //         })
        //     }}
        //     AddToCart = {() => {
        //         dispatch(cartActions.addToCart(itemData.item))
        //     }}
        //     />
        // )}
        // />
        <View>
            {products.map((item,index)=>(
                <Text>{item.title}</Text>
            ))}
             {/* <ProductItem/>  */}

        </View>
        
    ) 
    
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products',
    headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
          <Item title='Cart' 
          iconName='cart'
          onPress = {() => {
              navData.navigation.navigate('Cart')
          }}
            />
      </HeaderButtons>
}

export default ProductsOverviewScreen