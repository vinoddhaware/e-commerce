import React, { useState } from 'react'
import { FaCheck, FaPlus, FaMinus  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContex';


const AddToCart = ({singleProduct}) => {    

  const {addToCart} = useCartContext()

    let selectColors = singleProduct.colors && singleProduct.colors[0] 
    const [color, setColor] = useState(selectColors)
    const [addCart, setAddCart] = useState(1)   
  return (
    <div className='text-base space-y-2'>
        <p> Colors: </p>
        <div className='space-x-2 flex '>
        {
        singleProduct.colors?.map((currColor, i) =>{
            return(
                <button onClick={() => setColor(currColor)} key={i} style={{backgroundColor: currColor}} className={`flex justify-center items-center text-white w-8 h-8 rounded-full  hover:bg-opacity-100 ${color === currColor ? 'bg-opacity-100': ' bg-opacity-70'} `}>
                        {color === currColor ? <FaCheck /> : null}
                 </button>
            )
        })
      }
    </div>
    <div className='flex space-x-9 py-4'>
        <button disabled = {addCart <= 1} onClick={() => setAddCart((prev) => prev - 1)}><FaMinus /></button>
        <span className='font-bold text-xl'>{addCart}</span>
        <button disabled = {addCart >= singleProduct.stock} onClick={() => setAddCart((prev) => prev + 1)}><FaPlus /></button>
    </div>
    <div>
        <NavLink to={'/e-commerce/cart'} onClick={() => addToCart(singleProduct.id, color, addCart, singleProduct)} >
            <button className='px-4 py-3 bg-blue-600 text-white/70 hover:text-white text-sm active:scale-95 duration-300'> ADD TO CART </button>
        </NavLink>
    </div>
    </div>
  )
}

export default AddToCart
