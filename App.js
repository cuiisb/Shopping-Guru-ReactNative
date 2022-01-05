import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import productsReducer from './reducers/store/products'
import ShopNav from './navigation/ShopNav';
import cartReducer from './reducers/store/Cart'
import ordersReducer from './reducers/store/order'



const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer

})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store ={store}>
      <ShopNav/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
