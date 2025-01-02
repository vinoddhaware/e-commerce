import React from 'react'
import { useCartContext } from '../context/cartContex'
import FormatePrice from './FormatePrice'

const Summery = () => {

    const {total_price, shipping_fee} = useCartContext()    

  return (
    <>
    <h1 className=' text-xl lg:text-2xl font-semibold'> SUMMARY </h1>
    <hr className="border-gray-800 dark:border-black/80 border-2"></hr>
    <p className='text-[10px] lg:text-sm'> Do you have promo code? </p>
    <div className='bg-black p-1 flex justify-between'>
    <input type="text" className='border-2 w-full' /> 
    <button className='text-white px-5 py-1'> Apply </button>
    </div>
    <hr className="border-gray-800 dark:border-black/80 border-2"></hr>
    <div className='space-y-2'>
      <p className='font-semibold'> SUBTOTAL <span  className='float-end' ><FormatePrice price={total_price} /></span> </p>
      <p className='text-[10px] lg:text-sm'> Shipping <span  className='float-end' ><FormatePrice price={shipping_fee} /></span> </p>
      <p className='text-[10px] lg:text-sm'> Inclusive of all taxes </p>
    </div>
    <hr className="border-gray-800 dark:border-black/80 border-2"></hr>
    <p className='font-semibold'> ESTIMATED TOTAL   <span  className='float-end' ><FormatePrice price={shipping_fee + total_price} /></span> </p>
    <hr className="border-gray-800 dark:border-black/80 border-2"></hr>
    <button className='bg-black w-full p-2 text-white'> CHECKOUT </button>
    <hr className="border-gray-800 dark:border-black/80 border-2"></hr>
    <div className=''>
    <p className='text-[10px] lg:text-sm'> Need help? </p>
    <p className='text-[10px] lg:text-sm'> Call us at +91 123-456-7890 </p>
    </div>
    <hr className="border-gray-800 dark:border-black/80 border-2"></hr>
  </>
  )
}

export default Summery
