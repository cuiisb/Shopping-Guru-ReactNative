import React from "react";
import { FlatList, Button ,Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {  Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../UI/HeaderButton'

import ProductItem from '../components/shop/ProductItem'
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as productsActions from '../actions/products'

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()

    const editProduct = (id) => {
        props.navigation.navigate('EditProduct', {productId: id})
    }
    return (
        //<Text>Hello123</Text>
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
            <ProductItem
                img={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect = {() => {
                    editProduct(itemData.item.id)
                }}
            
            >
                <Button 
            color = {Colors.pimary}
            title ="Edit"
            onPress = { () => {
                editProduct(itemData.item.id)
            }}
            />
            <Button 
            color = {Colors.pimary}
            title ="Delete"
            onPress = { () => {
                dispatch(productsActions.deleteProduct(itemData.item.id))
            }}
            />
            </ProductItem>
    )}
    />
    )}       
    
        


UserProductScreen.navigationOptions = cartData => {
    return {
    headerTitle: 'Your Products',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName='md-menu'
                onPress={() => {
                    cartData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    ),
    headerRight: (
        <Button tile ='create'
        onPress = {() => cartData.navigation.navigate('EditProduct')}
        /> 
        // <HeaderButtons HeaderButtonComponent={HeaderButton}>
        // <Item
        //     title="Add"
        //     iconName='md-create'
        //     onPress={() => {
        //         cartData.navigation.navigate('EditProduct')
        //     }}
        // />
    //</HeaderButtons>
    )
    }
}

export default UserProductScreen