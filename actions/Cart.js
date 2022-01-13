export const AddToCart = 'AddToCart'
export const RemoveFromCart = 'RemoveFromCart'

export const addToCart = product => {
    return {
        type: AddToCart,
        product: product
    }
}
export const removeFromCart = productId => {
    return {
        type: RemoveFromCart,
        prodId: productId
    }
}
