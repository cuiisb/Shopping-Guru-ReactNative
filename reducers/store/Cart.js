import { AddToCart, RemoveFromCart } from "../../actions/Cart"
import { AddOrder } from "../../actions/order"
import { DeleteProduct } from "../../actions/products"
import CartItem from "../../components/shop/CartItem"
import cartItem from "../../user/cartItem"

const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AddToCart:
            const addedProduct = action.product
            const productPrice = addedProduct.price
            const productTitle = addedProduct.title

            if (items[addedProduct.id]) {
                // aldready have the item in the cart
                const updatedCartItem = new cartItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice
                )
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedCartItem },
                    totalAmount: state.totalAmount + productPrice
                }
            } else {
                const newCartItem = new cartItem(1, productPrice, productTitle, productPrice)
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: newCartItem },
                    totalAmount: state.totalAmount + productPrice
                }
            }
        case RemoveFromCart:
            const selectedCartItem = state.items[action.pid]
            const currQty = selectedCartItem.quantity
            if (currQty > 1) {
                const updatedCartItem = new CartItem(selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice)
                updatedCartItem = { ...state.items, [action.pid]: updatedCartItem }
            } else {
                const updatedCartItem = { ...state.items }
                delete updatedCartItem[action.pid]
            }
            return {
                ...state,
                items: updatedCartItem,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            }

        case AddOrder:
            return initialState
        case DeleteProduct:
            if (!state.items[action.prodId]){
                return state
            }
            const updatedItems = {...state.items}
            const itemTotal = state.items[action.prodId].sum
            delete updatedItems [action.prodId]
            return {
                ...state,
                items: updatedItems,
                totalAmount: state.totalAmount - itemTotal
            }

    }
    return state


}
