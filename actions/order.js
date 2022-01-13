export const AddOrder = 'AddOrder'

export const addOrder = (cartItems, totalAmount) => {
    return {
        type: AddOrder,
        orderData: { items: cartItems, amount: totalAmount }
    }
}