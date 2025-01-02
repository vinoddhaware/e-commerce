import React, { useState } from 'react'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { useFilterContext } from '../context/filterContext';

const Sort = () => {

  const {grid_view, setListView, setGridView, filter_products, sorting} = useFilterContext()

  return (
    <div className='flex justify-between items-center text-sm md:text-base'>
    <div className='gap-2 flex'>
    <span onClick={() => setGridView()} style={ grid_view ? {backgroundColor: '#9ca3af'} : {backgroundColor:'#9ca3af1a'}} className={`p-2 cursor-pointer sm:text-lg text-[10px]  bg-gray-400/10 hover:bg-black/60 `}><IoGrid /></span>
    <span onClick={() => setListView()} style={ grid_view ? {backgroundColor: '#9ca3af1a'} : {backgroundColor:'#9ca3af'}} className={`p-2 cursor-pointer sm:text-lg text-[10px]  bg-gray-400/10 hover:bg-black/60`}><FaList /></span>
    </div>
    <div>
    <span className='text-[10px] sm:text-sm'> {filter_products.length} Products Available </span>
    </div>
    <div className='flex flex-col w-28 space-y-3'>
      <select onClick={sorting} name="sort" id="sort" className='border-2 border-black/60  text-[10px] sm:text-sm cursor-pointer'>
        <option value="bestselling"> BestSelling </option>
        <option value="lowest"> Price(lowest) </option>
        <option value="highest"> Price(highest) </option>
        <option value="az"> Price(a-z) </option>
        <option value="za"> Price(z-a) </option>
    </select>            
    </div>
  </div>
  )
}

export default Sort
