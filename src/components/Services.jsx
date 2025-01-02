import React from 'react'
import { FiTruck } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className='w-[80%] mx-auto md:flex space-y-4  justify-between items-center my-10 text-gray-800/90 md:gap-2'>
        <div className='bg-gray-400/10 flex flex-col justify-center items-center p-4 lg:h-44 lg:w-56 xl:h-48 xl:w-80 rounded-md space-y-2'>
            <span className='text-xl text-blue-600 p-6 bg-white rounded-full'> <FiTruck /> </span>
            <p> Super fast and free delivery </p>
        </div>
        <div className='md:space-y-2 lg:space-y-6 space-y-1'>
            <div className='bg-gray-400/10 flex justify-center items-center p-8 lg:p-4 rounded-md gap-4'>
                <span className='text-xl text-blue-600 p-4 bg-white rounded-full'> <MdOutlineSecurity /> </span>
                <p> Non-contact Shipping </p>
            </div>
            <div className='bg-gray-400/10 flex justify-center items-center p-8 lg:p-4 rounded-md gap-4'>
                <span className='text-xl text-blue-600 p-4 bg-white rounded-full'> <GiReceiveMoney /> </span>
                <p> Money-back Guaranteed </p>
            </div>
        </div>
        <div className='bg-gray-400/10 flex flex-col justify-center items-center p-4 lg:h-44 lg:w-56 xl:h-48 xl:w-80 rounded-md space-y-2'>
            <span className='text-xl text-blue-600 p-4 bg-white rounded-full'> <RiSecurePaymentLine /> </span>
            <p> Super Secure Payment System </p>
        </div>
      
    </div>
  )
}

export default Services
