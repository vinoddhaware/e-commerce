import React, { useState } from 'react'

const ProductImage = ({imgs = [{url:''}]}) => {
    const [nextImg, setNextImg] = useState(imgs[0].url)
    
  return (
    <div className=' flex items-center gap-6'>
        <div className='space-y-4'>
        {
            imgs?.map((curImag, i) =>{                
                return(
                        <figure key={i}>
                            <img  onClick={() => setNextImg(curImag.url)} src={curImag.url} alt={curImag.filename} className='w-40 rounded-md cursor-pointer' />
                        </figure>
                )
            })
        }
        </div>
        <div className=' sm:w-[350px] border-2 border-black '>
        <figure>
            <img src={nextImg} alt="" />
        </figure>
        </div>
      
    </div>
  )
}

export default ProductImage
