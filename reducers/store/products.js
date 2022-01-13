import { CreateProduct, DeleteProduct, UpdateProduct } from '../../actions/products'
import PRODUCTS from '../../dummy-data/4.1 dummy-data'
import Product from '../../user/products'

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export default (state = initialState, action) => {
    switch (action.type){
        case CreateProduct:
            const newProduct = new Product(new Date().toString(), 'u1', 
            action.productData.title, 
            action.productData.imageUrl, 
            action.productData.description, 
            action.productData.price )
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.availableProducts.concat(newProduct)
            }
        case UpdateProduct:
            const productIndex = state.userProducts.findIndex(prod => prod.id === action.pid)
            const updatedProduct = new Product(action.pid, state,userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                state.userProducts[productIndex].price)
                const updatedUserProducts = [...state.userProducts]
                updatedUserProducts[productIndex] = updatedProduct
                const availableProductIndex = state.availableProducts.findIndex(
                    prod => prod.id === action.pid
                )
                const updatedAvailableProducts = [...state.availableProducts]
                updatedAvailableProducts[availableProductIndex] = updatedProduct
                return{
                    ...state,
                    availableProducts : updatedAvailableProducts,
                    userProducts: updatedUserProducts
                }
        case DeleteProduct:
            return {
                ...state,
                userProducts: state.userProducts.filter(
                    product => product.id !== action.prodId
                ),
                availableProducts: state.availableProducts.filter(
                    product => product.id !== action.prodId
                )
            }
    }
    return state
}