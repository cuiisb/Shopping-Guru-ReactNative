export const DeleteProduct = 'DeleteProduct'
export const CreateProduct = 'CreateProduct'
export const UpdateProduct = 'UpdateProduct'

export const deleteProduct = productId => {
    return {
        type : DeleteProduct,
        prodId : productId
    }
}

export const createProduct = (title, description, imageUrl, price) => {
    return {
        type: CreateProduct ,
        productData: {
            title, 
            description,
            imageUrl,
            price
        } 
    }
}
export const createProduct = (id, title, description, imageUrl) => {
    return {
        type: CreateProduct ,
        pid: id,
        productData: {
            title, 
            description,
            imageUrl
        } 
    }
}