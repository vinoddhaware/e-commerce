import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/cartReducer";

const CartContext = createContext()

const KEY = 'amazonStore'

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem(KEY)
    if(!localCartData) return []
    return JSON.parse(localCartData)
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: '',
    total_price: '',
    shipping_fee: 5000
}



export const CartProvide = ({children}) =>{
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, addCart, singleProduct) => {
        return dispatch({type:'ADD_TO_CART', payload: {id, color, addCart, singleProduct} })        
    } 

    const removeItem = (id) =>{
        return dispatch({type:'REMOVE_ITEM', payload:id})
    }

    const clearCart = () =>{
        return dispatch({type:'CLEAR_CART'})
    }
    
    const setIncrease = (id) =>{
        return dispatch({type:'SET_INCREMENT', payload:id}) 
    }
    
    const setDecrease = (id) =>{
        return dispatch({type:'SET_DECREMENT', payload:id})

    }

    useEffect(() => {
        // dispatch({type:'CART_TOTAL_PRICE'})
        // dispatch({type:'CART_TOTAL_ITEMS'})
        dispatch({type:'CART_TOTAL_PRICE_ITEMS'})
        localStorage.setItem(KEY, JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setIncrease, setDecrease}} > {children} </CartContext.Provider>
}

export const useCartContext = () =>{
    return useContext(CartContext)
}