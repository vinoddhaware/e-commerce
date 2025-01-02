import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/productsReducer";

export const AppContext = createContext()
const API = 'https://api.pujakaitem.com/api/products'

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
}
export const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProductData = async(url) =>{
        dispatch({type:'SET_LOADING'})
        try {
            const res = await axios.get(url)
            const products = res.data
            dispatch({type:'SET_API_DATA', payload:products})
            
        } catch (error) {
            console.log(error);
            dispatch({type:'SET_API_ERROR'})
        }
    }

    const getSingleProductData = async(url) =>{
        dispatch({type:'SET_SINGLE_LOADING'})            
        try {
            const res = await axios.get(url)
            const singleProduct = res.data
            dispatch({type:'SET_SINGLE_PRODUCT', payload:singleProduct})            
        } catch (error) {
            console.log(error);
            dispatch({type:'SET_SINGLE_ERROR'})            
        }
    }

    useEffect(() => {
        getProductData(API)
    }, [])


    return <AppContext.Provider value={{...state, getSingleProductData}} > {children} </AppContext.Provider>
}

export const useProductContext = () =>{
    return useContext(AppContext)
}