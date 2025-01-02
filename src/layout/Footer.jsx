import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-slate-900 text-gray-300 text-sm  sm:text-base'>
      <div className='lg:flex-row flex flex-col sm:w-[80%] mx-auto justify-evenly items-center p-5 sm:p-10 gap-10'>
        <div className='lg:h-40 lg:w-52 w-full space-y-4'>
          <h2> VINOD DHAWARE </h2>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quod. </p>
        </div>
        <div className='lg:h-40 lg:w-60 w-full flex flex-col space-y-4'>
          <p> Follow us to get important updates </p>
          <input type="text" className='w-40 p-2' placeholder='enter email' />
          <button className='w-36 px-4 py-2 bg-blue-700/80 text-white'> SUBSCRIBE </button>
        </div>
        <div className='lg:h-40 lg:w-60 w-full space-y-4'>
          <p> Follow Us </p>
          <ul className='flex gap-4'>
          <NavLink to='https://www.instagram.com/'> <li className='text-2xl text-red-600 bg-white rounded-md p-1'> <FaInstagram /> </li> </NavLink>
          <NavLink to='https://www.facebook.com/'> <li className='text-2xl text-blue-600 bg-white rounded-md p-1'> <FaFacebook /> </li> </NavLink>
          <NavLink to='https://www.youtube.com/'> <li className='text-2xl text-red-600 bg-white rounded-md p-1'> <FaYoutube /> </li> </NavLink>
          <NavLink to='https://github.com/'> <li className='text-2xl text-black bg-white rounded-md p-1'> <FaGithub /> </li> </NavLink>
          </ul>
        </div>
        <div className='lg:h-40 lg:w-40 w-full text-sm'>
          <p> Call Us </p>
          <p> (+91) 123 456 789 </p>
        </div>
      </div>
      <div className='sm:w-[80%] mx-auto flex gap-5 sm:gap-20 px-5 sm:px-14 py-2 pb-16 text-[10px] sm:text-base'>
        <p> @2025 Vinod Dhaware All Right Reserved </p>
        <div className=' text-[10px] sm:text-sm'>
        <p> PRIVACY POLICY </p>
        <p> TERMS & CONDITION </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
