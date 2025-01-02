import React from 'react'
import { useProductContext } from '../context/productsContext'
import FeatureProductsCard from './FeatureProductsCard'

const FeatureProducts = () => {

    const {isLoading, isError, featureProducts} = useProductContext()
    
    if(isLoading) return <h1> Loading </h1>
    if(isError) return <h1> Error {isError.message} </h1>
       
  return (
    <div className='bg-gray-400/10 my-8 p-10 text-gray-700'>
        <div className='w-[80%] mx-auto'>
            <button> CHECK NOW </button>
            <h1 className='text-3xl font-semibold'> Our Feature Services </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-10 '>
                {
                    featureProducts.map((curData) => {
                        return <FeatureProductsCard key={curData.id} curData = {curData} />
                    })
                }

            </div>

        </div>
      
    </div>
  )
}

export default FeatureProducts
