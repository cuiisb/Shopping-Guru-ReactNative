import React from 'react'
import { ScrollView, View, Text, Image, Button,StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../components/constants/colors'

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('ProductId')
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId))

    return(
        <ScrollView>
            <Image style = {styles.image}source = {{uri: selectedProduct.imageUrl}}/>
            <View style = {styles.actions}>
            <Button color = {colors.primary} title ="Add to Cart " onPress ={()=> {}} />
            </View>
            <Text style = {styles.price}>Rs.{selectedProduct.price.toFixed(2)}</Text>
            <Text style = {styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}
ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('ProductTitle')
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 299
    },
    price: {
        fontSize: 19,
        color: '#888',
        textAlign: 'center',
        marginVertical: 19
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 19
    },
    actions: {
        marginVertical: 9,
        alignItems: 'center'
    }
})

export default ProductDetailScreen