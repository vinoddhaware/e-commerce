export const reducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            let {id, color, addCart, singleProduct} = action.payload

            let existingProduct = state.cart.find((currData) => currData.id === id + color)
            
            if(existingProduct){
                let updatedProduct = state.cart.map((currData) => {
                    if(currData.id === id + color){
                        let newAmount = currData.addCart + addCart
                        if(newAmount >= currData.max){
                            newAmount = currData.max
                        }
                        return {...currData, addCart:newAmount}
                    }else{
                        return currData
                    }
                })
            
                return { ...state, cart:updatedProduct } 

            }else{   
                let cartProduct
                cartProduct ={
                    id: id+color,
                    name: singleProduct.name,
                    color,
                    addCart,
                    image: singleProduct.image[0].url,
                    price: singleProduct.price,
                    max: singleProduct.stock
                }
                
                return { ...state, cart:[...state.cart, cartProduct] } 
            }
            
        case 'REMOVE_ITEM':
            let updatedCart = state.cart.filter((currData) => currData.id !== action.payload)
            return {...state, cart:updatedCart}

        case 'CLEAR_CART':
            return {...state, cart:[]}

        case 'SET_DECREMENT':
            let setDecrement = state.cart.map((currData) => {
                if(currData.id === action.payload){
                    let decAmount = currData.addCart - 1
                    return {...currData, addCart:decAmount} 
                }else{
                    return currData
                }
            })
            return {...state, cart:setDecrement}

        case 'SET_INCREMENT':
            let setIncrement = state.cart.map((currData) => {
                if(currData.id === action.payload){
                    let incAmount = currData.addCart + 1
                    return {...currData, addCart:incAmount} 
                }else{
                    return currData
                }
            })
            return {...state, cart:setIncrement}

        // case 'CART_TOTAL_ITEMS':
        //     let updatedItemValue = state.cart.reduce((initialValue, currValue) => initialValue += currValue.addCart, 0)
        //     return {...state, total_item: updatedItemValue}
            
        // case 'CART_TOTAL_PRICE':
        //     let updatedItemPrice = state.cart.reduce((initialValue, currValue) => initialValue += currValue.price * currValue.addCart, 0)
        //     return {...state, total_price: updatedItemPrice}
            
        case 'CART_TOTAL_PRICE_ITEMS':
            let {total_item, total_price} = state.cart.reduce((accumulator, currValue) => {
                accumulator.total_item += currValue.addCart
                accumulator.total_price += currValue.price * currValue.addCart
                return accumulator
            }, { total_item:0, total_price:0 })
            
            return {...state, total_item, total_price}
    
        default:
            return state
    }
}