import { AddToCart } from "../../actions/Cart"
import cartItem from "../../user/cartItem"

const initialState = {
    items: {},
    totalAmount: 0 
}

export default (state = initialState, action) => {
    switch (action.type){
        case AddToCart:
        const addedProduct = action.product 
        const productPrice = addedProduct.price 
        const productTitle = addedProduct.title 

        if (items[addedProduct.id]){
            // aldready have the item in the cart
            const updatedCartItem = new cartItem(
                state.items[addedProduct.id].quantity +1,
                productPrice,
                productTitle,
                state.items[addedProduct.id].sum + productPrice
            )
            return {
                ...state,
                items: {...state.items,[addedProduct.id]: updatedCartItem}, 
                totalAmount: state.totalAmount + productPrice
            }
        } else {
            const newCartItem = new cartItem(1, productPrice, productTitle,productPrice )
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: newCartItem},
                totalAmount: state.totalAmount + productPrice
            }
        }
    }
    return state
}

