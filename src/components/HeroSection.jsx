import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({data}) => {
    const {name} = data
    
  return (
    <div className='w-[80%] mx-auto my-10 flex flex-col  sm:grid sm:grid-cols-2 gap-4'>
        <div className='text-gray-700 space-y-1'>
            <p> Welcome to </p>
            <h1 className='text-3xl text-black font-bold'> {name} </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaerat, recusandae voluptatum porro reprehenderit sapiente sed obcaecati commodi ab, eveniet totam expedita molestias. Fuga hic iusto labore ipsum aperiam! Doloribus! </p>
            <NavLink to='/products'>
                <button className='mt-6 text-white px-4 py-2 bg-blue-600/90 rounded-sm'> Shop Now &#8594; </button>
            </NavLink>
        </div>
        <div>
            <figure>
                <img src="https://www.reviewsxp.com/blog/wp-content/uploads/2016/08/ecommerce-850x491.jpg" alt="" />
            </figure>
        </div>
      
    </div>
  )
}

export default HeroSection
