import React from 'react'

const Trusted = () => {
  return (
    <div className='bg-slate-400/10 text-gray-700 flex flex-col justify-center items-center mt-10 py-10'>
        <h1> Trusted by 1000+ Companies </h1>
        <div className='w-[80%] mx-auto mt-10 sm:mt-2'>
            <ul className='sm:flex grid grid-cols-2 place-items-center justify-center items-center  sm:gap-16 gap-10'>
                <li> <img src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="" className='w-40' /> </li>
                <li> <img src="https://cdn.freebiesupply.com/logos/large/2x/flipkart-logo-svg-vector.svg" alt="" className='w-40' /> </li>
                <li> <img src="https://cdn3.vox-cdn.com/uploads/chorus_asset/file/6793009/mastercard_logo_alternate_lockup.png" alt="" className='w-40' /> </li>
                <li> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXO_Zo6mONAn_Hs0HsgUIK-tT8U6u68ygZHA&s" alt="" className='w-40' /> </li>
                <li> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZqC_SINfD1ybfexpeC-0Mm6C3aPIMeC4Ww&s" alt="" className='w-40' /> </li>
            </ul>

        </div>
      
    </div>
  )
}

export default Trusted
