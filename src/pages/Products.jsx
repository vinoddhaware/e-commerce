import React, { useState } from 'react'
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'
import ProductList from '../components/ProductList'

const Products = () => {

  return (
    <div className=' w-[80%]  mx-auto flex md:flex-row flex-col my-10 xl:gap-20 gap-5'>
      <div className=''>
        <FilterSection />
      </div>
      <div className='w-full'>
        <Sort />
        <ProductList />
      </div>
    </div>
  )
}

export default Products
