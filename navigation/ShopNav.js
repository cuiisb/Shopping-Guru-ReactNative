import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native'

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen'
import colors from '../constants/colors'
import CartScreen from '../screens/CartScreen';

const ProductsNav = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    Cart: CartScreen
}, {
    defaultnavOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
        },
        headerTintcolor: Platform.OS === 'android' ? 'white' : colors.primary
    },
    
})

export default createAppContainer(ProductsNav)
