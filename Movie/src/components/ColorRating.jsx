import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";

function ColorRating({numberOfRating}) {
    const arrayOfStar=[<CiStar />]
    const [rating,setRating]=useState(arrayOfStar);
  return (
    <div>
      {
        arrayOfStar.map((ele)=>{
            return ele
        })
      }
    </div>
  )
}

export default ColorRating
