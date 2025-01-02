import React from 'react'
import { useFilterContext } from '../context/filterContext'
import { FaCheck } from "react-icons/fa";
import FormatePrice from './FormatePrice';

const FilterSection = () => {

  const {filters:{text, color, minPrice, price, maxPrice}, updateFilterValue, all_products, clearFilters} = useFilterContext()

  const getUniqueData = (data, value) =>{
    let newValue = data.map((currData) => currData[value])
    if(value === 'colors')
      newValue = newValue.flat()
    newValue = ['All',... new Set(newValue)]
    return newValue    
  }

  const categoryData = getUniqueData(all_products, 'category')
  const companyData = getUniqueData(all_products, 'company')
  const colorsData = getUniqueData(all_products,'colors')  

  
  return (
    <div className='space-y-6 text-sm md:text-base'>
        <div className='mb-6'>
          <input onChange={updateFilterValue} value={text} name='text' type="text" className='w-full border-2 border-black px-2 py-1' placeholder='Search' autoComplete='off' />
        </div>
        <span className='text-xl font-semibold'> Category </span>
        <ul className='space-y-3'>
          {
            categoryData.map((currData, i) => {
              return (
                <li key={i} >
                  <button onClick={updateFilterValue} value={currData} name='category' type='button' className='border-b hover:border-black'> {currData} </button>
                </li>              
                )
            })
          }
        </ul>
        <div className='flex flex-col w-24 space-y-3'>
        <span> Company </span>
        <select onClick={updateFilterValue} name="company" id="company" className='border-2 border-black/60 px-2'>
          {
            companyData.map((currComp, i) =>{
              return <option key={i} value={currComp} name="company" > {currComp} </option>
            })
          }
        </select>
        </div>
        <div className='space-y-3'>
          <span>Colors</span>
          <div className='flex gap-2'>            {
              colorsData.map((currClr, i) =>{              
                if(currClr === 'All'){
                  return(
                    <button type='button' onClick={updateFilterValue} value={currClr} name='color'  key={i} className='mr-2' >
                            All
                    </button>
                )
                }
                return(
                    <button type='button' onClick={updateFilterValue} value={currClr} name='color' key={i} style={{backgroundColor: currClr}} className={`flex justify-center items-center text-white w-4 h-4 md:w-6 md:h-6 rounded-full  hover:bg-opacity-100 ${color === currClr ? 'bg-opacity-100': ' bg-opacity-70'} `}>
                            {color === currClr ? <FaCheck /> : null}
                    </button>
                )
              })
            }
          </div>
          <div>
          <p>Price</p>
          <p> <FormatePrice price = {price} /> </p>
          <input type="range" name='price'  min={minPrice} max={maxPrice} value={price}  onChange={updateFilterValue} />
        </div>
        <div>
          <button onClick={clearFilters} className='py-2 px-4 bg-red-600 text-white w-full'> CLEAR FILTERS </button>
        </div>
        </div>
      
    </div>
  )
}

export default FilterSection
