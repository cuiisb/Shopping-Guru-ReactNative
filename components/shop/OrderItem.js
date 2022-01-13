import React ,{useState}from "react";
import {View, Text, Button, StyleSheet} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";
import CartItem from "./CartItem";

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <View style = {styles.orderItem }>
            <View style = {styles.data}>
            <Text style = {styles.amount}>Rs.{props.amount.toFixed(2)}</Text>
            <Text style = {styles.date}>{props.date}</Text>
            </View>
            <Button color = {Colors.primary} title = "Show Details" 
            onPress ={() => {setShowDetails(prevState => !prevState)} }/>
            {showDetails && <View>
                {props.items.map(cartItem => <CartItem 
                    key = {cartItem.productId}
                    quantity = {cartItem.quantity}
                    amount = {cartItem.sum}
                    title = {cartItem.productTitle}
                    />)}    
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem:{
        shadowColor: 'black',
        shadowOpacity: 0.27,
        shadowOffset: { width: 0, height: 1.5 },
        shadowRadius: 7,
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 19,
        padding: 10
    },
    data:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    amount:{
        fontSize: 16
    },
    date:{
        fontSize: 16,
        color: '#888'
    }
})

export default OrderItem 