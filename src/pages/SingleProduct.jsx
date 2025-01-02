import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddToCart from '../components/AddToCart'
import RatingReview from '../components/RatingReview'
import ProductImage from '../components/ProductImage'
import Navigation from '../components/Navigation'
import FormatePrice from '../components/FormatePrice'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCheckedShield } from "react-icons/gi";
import { TbReplaceFilled } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useProductContext } from '../context/productsContext'

const SingleProduct = () => {

  const {getSingleProductData, singleProduct, isSingleLoading, isError} = useProductContext()
  const {id:alias, name, company, price, description, reviews, stars, stock, image} = singleProduct
  const {id} = useParams()

  useEffect(() => {
    getSingleProductData(`https://api.pujakaitem.com/api/products/${id}`)    
  }, [])

  if(isSingleLoading) return <h1> Loading </h1>
  if(isError) return <h1> Error {isError.message} </h1>
  return (
    <d>
     <Navigation name = {name} />
    <div className='border-2 border-black grid sm:grid-cols-2 text-[10px] sm:text-[12px] md:px-20 px-5 py-10 text-gray-800 gap-5'>
      <div className=''>
        <ProductImage  imgs = {image} />
      </div>
      <div className='space-y-4'>
        <h1 className='text-3xl text-black'> {name} </h1>
        <div>
          <RatingReview stars = {stars} reviews = {reviews} />
        </div>
        <p className='font-semibold line-through'> MRP: <FormatePrice price={price + 250000} /> </p>
        <p className='text-[#0678ff] font-semibold text-xl sm:text-2xl'> Deal of the Day <FormatePrice price={price} /> </p>
        <p className='lg:text-base text-black tracking-wider'> {description} </p>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col items-center'>
          <span className='rounded-sm p-2 bg-gray-400/10 text-xl lg:text-2xl font-extrabold'> <CiDeliveryTruck /> </span>
          <p className='text-[#0678ff] text-wrap text-center '>Free Delivery</p>
          </div>
          <div className='flex flex-col items-center'>
          <span className='rounded-sm p-2 bg-gray-400/10 text-xl lg:text-2xl font-extrabold'> <TbReplaceFilled /> </span>
          <p className='text-[#0678ff] text-wrap text-center '>30 Days Replacement</p>
          </div>
          <div className='flex flex-col items-center'>
          <span className='rounded-sm p-2 bg-gray-400/10 text-xl lg:text-2xl font-extrabold'> <GiCheckedShield /> </span>
          <p className='text-[#0678ff] text-wrap text-center '>2 Years Warranty</p>
          </div>
          <div className='flex flex-col items-center'>
          <span className='rounded-sm p-2 bg-gray-400/10 text-xl lg:text-2xl font-extrabold'> <RiSecurePaymentLine /> </span>
          <p className='text-[#0678ff] text-wrap text-center '>Secure Transaction</p>
          </div>
        </div>
        <div className='space-y-2'>
        <p className='text-sm'> Available: <span className='font-semibold text-[#007600]'> {stock <= 0 ? 'Not Available': 'In Stock'} </span> </p>
        <p> ID: <span className='font-semibold'> {alias} </span>  </p>
        <p> Brand: <span className='font-semibold'> {company} </span>  </p>
        </div>
        <span className='flex border border-black/80'> </span>
      <div>
        <AddToCart singleProduct = {singleProduct} />
      </div>
      </div>
    </div>
      
    </d>
  )
}

export default SingleProduct
