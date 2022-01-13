import Product from "../user/products"

export const DeleteProduct = 'DeleteProduct'
export const CreateProduct = 'CreateProduct'
export const UpdateProduct = 'UpdateProduct'
export const SetProduct = 'SetProduct'

export const fetchProducts =() => {
    return async dispatch => {
        //async code 
        // const response = await fetch('https://shoppingguru-bb4c5-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
        //     )
        // const resData = await response.json()
        // //console.log(resData)
        const loadedProducts =[]
        for (const key in resData){
            loadedProducts.push(new Product(key,
                 'productId',
                  resData[key].title,
                  resData[key].imageUrl,
                    resData[key].description,
                     resData[key].price))
        }
        //console.log(resData)
        dispatch ({
            type: SetProduct, products: []
        })
    }
}

export const deleteProduct = productId => {
    return async dispatch => {
            //async code 
            await fetch(`https://shoppingguru-bb4c5-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`, {
                method: 'DELETE'
            })
    
    dispatch( {
        type: DeleteProduct,
        prodId: productId
    })

}
}

export const createProduct = (title, description, imageUrl, price) => {
    return async dispatch => {
        //async code 
        const response = await fetch('https://shoppingguru-bb4c5-default-rtdb.asia-southeast1.firebasedatabase.app/products.json', {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                imageUrl,
                price
            })
        })
        const resData = await response.json()

        console.log(resData)

        dispatch({
            type: CreateProduct,
            productData: {
                id: resData.name,
                title,
                description,
                imageUrl,
                price
            }
        })
    }
}
export const updateProduct = (id, title, description, imageUrl) => {
    return async dispatch => {
        //async code 
        await fetch(`https://shoppingguru-bb4c5-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                imageUrl
            })
        })
        const resData = await response.json()
    
    dispatch( {
        type: UpdateProduct,
        pid: id,
        productData: {
            title,
            description,
            imageUrl
        }
    })
}
}