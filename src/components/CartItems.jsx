import React, { useState } from 'react'
import FormatePrice from './FormatePrice'
import { FaPlus, FaMinus  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useCartContext } from '../context/cartContex';

const CartItems = ({currData}) => {
    const {removeItem, setIncrease, setDecrease} = useCartContext()   
    const {id, name, color, price, image, addCart, max} = currData    

  return (
    <>    <div className='w-full flex justify-between items-center gap-6 text-[10px] lg:text-sm'>
        <div className='flex gap-4 '>
            <div>
                <figure>
                    <img src={image} alt={name}  className='w-24'/>
                </figure>
            </div>
            <div className='space-y-2'>
                <p className=''> {name} </p>
                <div className='flex items-center gap-2'>
                    <p className=''>Color: </p>
                <div style={{backgroundColor: color}} className='h-4 w-4 rounded-full' > </div>
                </div>
            </div>
        </div>

        <div >
            <p> <FormatePrice price={price} /> </p>
        </div>
        
        <div className='flex space-x-2 lg:space-x-9 py-4'>
            <button disabled = {addCart <= 1} onClick={() => setDecrease(id)} ><FaMinus /></button>
            <span className='font-bold '>{addCart}</span>
            <button disabled = {addCart >= max} onClick={() => setIncrease(id)} ><FaPlus /></button>
        </div>

        <div className='hidden sm:block md:hidden lg:block'>
            <FormatePrice price = {price * addCart} />
        </div>

        <div className='flex justify-center items-center gap-3 sm:gap-6 '>
            <button className='sm:px-6 sm:py-2 px-4 py-[1px]  bg-blue-600 text-white'> Buy </button>
            <span onClick={() => removeItem(id)} className='cursor-pointer text-xl sm:text-4xl text-red-600'> <MdDelete /> </span>

        </div>
      
    </div>
</>

  )
}

export default CartItems
