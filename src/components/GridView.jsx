import React from 'react'
import FeatureProductsCard from './FeatureProductsCard'

const GridView = ({products}) => {
  return (
    <div className='grid grid-cols-3 gap-10 my-10'>
    {
        products.map((curData) =>{
         return <FeatureProductsCard key={curData.id} curData = {curData} />
       })
    }
   </div>
  )
}

export default GridView
