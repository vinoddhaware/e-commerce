import React from 'react'
import { useCartContext } from '../context/cartContex';
import CartItems from '../components/CartItems'
import { NavLink } from 'react-router-dom';
import Summery from '../components/Summery';
const Cart = () => {

  const {cart, clearCart} = useCartContext()

  return (
    <>
    <div className='flex md:flex-row flex-col justify-between w-[90%] mx-auto my-14 gap-10 text-sm'>
      <div className='md:w-[80%]'>
        <h1 className='text-2xl font-semibold'> MY SHOPPING BAG </h1>
        <div className='border-t-4 border-b border-gray-600/40 py-2 my-6'>
          <ul className='flex justify-between items-center sm:px-24 md:px-20 px-6 '>
            <li> Items </li>
            <li className='ml-8'> Price </li>
            <li> Quantity </li>
            <li className='hidden sm:block md:hidden lg:block'> Subtotal </li>
            <li> Action </li>
          </ul>
        </div>
          {
            cart.length === 0 
            ?
            <div className='flex  flex-col justify-center items-center space-y-2'>
              <h1 className='text-2xl font-bold mt-6'> Your Shopping bag is empty </h1>
              <NavLink to={'/e-commerce/products'} className='text-blue-600 underline'>Shop today’s deals &rarr; </NavLink>
            </div>
            :
            <div className='space-y-5'>
              {
                cart.map((currData) =>{
                  return <CartItems  key={currData.id} currData = {currData} />
                })
              }
              <div className='flex justify-between items-center border-t border-gray-600/40 py-4 text-[10px] sm:text-sm'>
                  <NavLink to={'/e-commerce/products'}> <button className='px-2 py-2 sm:px-6 sm:py-4 bg-blue-600 text-white '> CONTINUE SHOPPING </button> </NavLink>
                  <button onClick={() => clearCart()} className='px-2 py-2 sm:px-6 sm:py-4 bg-red-600 text-white '> CLAER CART </button>
              </div>
            </div>

          }
            
      </div>
      <div className='space-y-5'>
        <Summery/>
      </div>

      
    </div>
    </>
  )
}

export default Cart
