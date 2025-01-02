import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar  } from "react-icons/fa";

const RatingReview = ({stars, reviews}) => {

    const rating = Array.from({length:5}, (curData, i) =>{
        let number = i + 0.5
        return (
            <span key={i}>
                {
                    stars >= i + 1 
                    ?  <span className='text-[#de7921] text-lg'><FaStar /></span> 
                    : stars >= number 
                    ? <span className='text-[#de7921] text-lg'><FaStarHalfAlt /></span> 
                    : <span className='text-[#de7921] text-lg'><FaRegStar /></span>
                }
            </span>
        )      
    })

  return (
    <div className='flex gap-3'>
    <span className='flex items-center'> { rating } </span>
    <p> ({reviews} Customer reviews )</p>
      
    </div>
  )
}

export default RatingReview
