import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({name}) => {
  return (
    <div className='bg-gray-400/10 px-6 pb-4'>
        <NavLink to={'/e-commerce/'} className='text-xl text-blue-800' >Home</NavLink><span className='text-lg'>/</span> 
        <span className='text-xl'> {name} </span>
      
    </div>
  )
}

export default Navigation
