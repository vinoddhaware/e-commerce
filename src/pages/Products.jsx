import React, { useState } from 'react'
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'
import ProductList from '../components/ProductList'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Products = () => {

  const [isOpen, SetIsOpen] = useState(false)

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
