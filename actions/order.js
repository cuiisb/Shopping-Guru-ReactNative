export const AddOrder = 'AddOrder'

export const addOrder = (cartItems, totalAmount) => {
    return { type: AddOrder,
    orderDate: { items: cartItems, amount: totalAmount}
    }
}