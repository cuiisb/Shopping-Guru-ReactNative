export const AddToCart = 'AddToCart'
export const RemoveFromCart = 'RemoveFromCart'

export const addToCart = product => {
    return {
        type: AddToCart,
        product: product
    }
}
export const DeleteFromCart = productId => {
    return {
        type: DeleteFromCart,
        prodId: productId
    }
}
