import Order from "../user/order"

export const AddOrder = 'AddOrder'
export const SetOrder = 'SetOrder'

export const fetchOrders =() => {
    return async dispatch => {
        //async code 
        const response = await fetch('https://shoppingguru-bb4c5-default-rtdb.asia-southeast1.firebasedatabase.app/orders/u1.json'
            )
        const resData = await response.json()
        //console.log(resData)
        const loadedProducts =[]
        const loadedOrders =[]
        for (const key in resData){
            loadedOrders.push(new Order(key, resData[key].cartItems, resData[key].totalAmount, new Date(resData[key].date)))
        }
        dispatch ({
            type: SetOrder, 
            orders: loadedOrders
        })
    }
}

export const addOrder = (cartItems, totalAmount) => {
    return async dispatch => {
        const date = new Date()
        //async code 
        const response = await fetch('https://shoppingguru-bb4c5-default-rtdb.asia-southeast1.firebasedatabase.app/orders/u1.json', {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({
                cartItems,
                totalAmount,
                date: date.toISOString()
            })
        })
        if (!response.ok){
            throw new Error('Something is wrong')
        }
        const resData = await response.json()

        dispatch({
            type: AddOrder,
            orderData: { id: resData.name,item: cartItems, amount: totalAmount, date: date }
        })
    }
     
}