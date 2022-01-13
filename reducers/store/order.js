import {AddOrder} from "../../user/order"

const initialState = {
    orders: []
}


// its a reducer which has a state thats initialize with
// initial state that receives an action that is all handled by redux
export default (state = initialState, action) => {
    switch (action.type) {
        case AddOrder:
            const newOrder = new Order(
                new Date().toString(),
                action.orderData.items,
                action.orderData.amount,
                new Date()
                )
                return { 
                    ...state,
                    orders: state.orders.concat(newOrder)
                }
    }
    return state
    // copying state so that u dont lose it, concat adds new item to array ,
    // adding new array means new order 
    


}