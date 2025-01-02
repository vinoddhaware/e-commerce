import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productsContext";
import { reducer } from "../reducer/filterReducer";

export const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: 'bestselling',
    filters: {
        text: '',
        category: 'All',
        company: 'All',
        color: 'All',
        price: 0,
        minPrice: 0,
        maxPrice: 0
    }

}


export const FilterContextProvider = ({children}) =>{
    
    const {products} = useProductContext()
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () =>{
        dispatch({type:'SET_GRID_VIEW'})
    }

    const setListView = () =>{
        dispatch({type:'SET_LIST_VIEW'})
    }

    const sorting = (e) =>{
        dispatch({type:'GET_SORT_VALUE', payload: e.target.value})
    }

    const updateFilterValue = (e) =>{
        const {name, value} = e.target
        return dispatch({type:'UPDATE_FILTERS_VALUE', payload:{name, value}})
    }

    const clearFilters = () =>{
        return dispatch({type:'CLEAR_FILTERS'})
    }

    useEffect(() => {
        dispatch({type:'FILTER_PRODUCTS'})
        dispatch({type:'SORTING_PRODUCTS'})
    }, [state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({type:'LOAD_FILTER_PRODUCTS', payload:products})
    }, [products])

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}} > {children} </FilterContext.Provider>
}

export const useFilterContext = () =>{
    return useContext(FilterContext)
}