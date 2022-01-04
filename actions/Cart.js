export const AddToCart = 'AddToCart'

export const addToCart = product => {
    return {
        type: AddToCart,
        product: product
    }
}