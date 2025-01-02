import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useCartContext } from '../context/cartContex';

const Header = () => {

    const {total_item} = useCartContext()


    const [isOpen, SetIsOpen] = useState(false)

  return (
    <div className='bg-blue-400/10 text-gray-800 p-6 z-50 '>
        <div className='flex justify-between'>
            <div>
                <span className='text-xl font-bold'> VINOD DHAWARE </span>
            </div>
            <div className=''>
                <ul className={`md:flex gap-10 font-semibold hidden md:visible `}>
                    <NavLink to='/'> <li>Home</li> </NavLink>
                    <NavLink to='/about'> <li>About</li> </NavLink>
                    <NavLink to='/products'> <li>Products</li> </NavLink>
                    <NavLink to='/contact'> <li>Contact</li> </NavLink>
                    <NavLink to='/login'> <li>Login</li> </NavLink>
                    <NavLink to='/cart'> <li className='text-2xl flex justify-center items-center relative'><BsCart2 /> <sup className='bg-blue-600/60 absolute left-3 text-sm px-1  rounded-full'> {total_item} </sup> </li> </NavLink>
                </ul>
            </div>
            <button onClick={() => SetIsOpen(!isOpen)} className='text-2xl md:hidden'> { isOpen ? <IoClose /> : <IoMenu /> } </button>
        </div>
            <div className=''>
                <ul className={`${isOpen ? "visible z-50" : "hidden"} h-screen flex flex-col justify-center items-center gap-10 font-semibold`}>
                    <NavLink onClick={() => SetIsOpen(false)} to='/'> <li>Home</li> </NavLink>
                    <NavLink onClick={() => SetIsOpen(false)} to='/about'> <li>About</li> </NavLink>
                    <NavLink onClick={() => SetIsOpen(false)} to='/products'> <li>Products</li> </NavLink>
                    <NavLink onClick={() => SetIsOpen(false)} to='/contact'> <li>Contact</li> </NavLink>
                    <NavLink onClick={() => SetIsOpen(false)} to='/login'> <li>Login</li> </NavLink>
                    <NavLink onClick={() => SetIsOpen(false)} to='/cart'> <li className='text-2xl flex justify-center items-center relative'><BsCart2 /> <sup className='bg-blue-600/60 absolute left-3 text-sm px-1  rounded-full'> {total_item} </sup> </li> </NavLink>
                </ul>
            </div>
    
    </div>
  )
}

export default Header
