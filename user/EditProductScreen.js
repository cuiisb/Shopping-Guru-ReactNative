import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../UI/HeaderButton'
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from '../actions/products'


const EditProductScreen = props => {
    const prodId = props.navigation.getParam('productId')
    const editedProduct = useSelector(state =>
        state.products.userProducts.find(prod => prod.id === prodId)
    )
    const dispatch = useDispatch()

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '')
    const [titleIsValid, setTitleIsValid] = useState(false)
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '')

    const submitHandler = useCallback(() => {
        if (editedProduct) {
            dispatch(productsActions.UpdateProduct(prodId, title, description, imageUrl))
        }else {
                dispatch(productsActions.createProduct(title,description,imageUrl,price))
            }
        
        
    }, [dispatch , prodId, title, description, imageUrl, price])

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler })
    }, [submitHandler])

    // const titleChange = text => {
    //     if (text.length === 0){
    //         setTitleIsValid(false)
    //     } else{
    //        setTitleIsValid(true) 
    //     }
    //     setTitle(text)
    // }

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} 
                    value={title} 
                    onChangeText={text => 
                    setTitle(text)} 
                    keyboardType="default"
                    autoCapitalize="sentences"
                    autoCorrect
                    onSubmitEditing={()=> console.log('Submit Editing')}
                    />
                    {!titleIsValid && <Text> Please enter a valid title</Text>}
                </View>


                <View style={styles.form}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput style={styles.input} 
                    value={imageUrl} 
                    onChangeText={text => 
                    setImageUrl(text)} />
                </View>

                {editedProduct ? null : (
                    <View style={styles.form}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput style={styles.input} 
                        value={price} 
                        onChangeText={text => 
                        setPrice(text)}
                        keyboardType="decimal-pad" />
                    </View>)}


                <View style={styles.form}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} value={description} onChangeText={text => setDescription(text)} />
                </View>
            </View>
        </ScrollView>
    )
}

EditProductScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit')
    return {
        headerTitle: navData.navigation.getParams('productId')
            ? 'Edit Product'
            : 'Add Product',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName='md-checkmark'
                    onPress={submitFn}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
})

export default EditProductScreen