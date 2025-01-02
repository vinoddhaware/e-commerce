import React from 'react'
import FormatePrice from './FormatePrice'
import { NavLink } from 'react-router-dom'

const ListView = ({products}) => {
  return (
    <div className='my-10'>
            {
                products.map((curData) => {
                    return(
                        <NavLink key={curData.id} to={`/e-commerce/singleproduct/${curData.id}`}>
                        <div className='grid lg:grid-cols-2 gap-10 p-4 my-6 bg-gray-400/10'>
                            <div className='w-72 mx-auto'>
                                <figure>
                                    <img src={curData.image} alt={curData.name} className='hover:scale-105 duration-300' />
                                </figure>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-3xl mb-6'> {curData.name} </h1>
                                <p className='text-blue-800'> <FormatePrice price = {curData.price} /> </p>
                                <p className='line-clamp-3'> {curData.description} </p>
                                <button className='px-4 py-2 bg-blue-700 text-white'> READ MORE </button>
                            </div>
                        </div>
                        </NavLink>
                    )
                })
            }
   </div>
  )
}

export default ListView
