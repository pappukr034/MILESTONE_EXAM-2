import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className=' w-full flex justify-center items-center flex-col py-8'>
      <h1 className=' text-7xl text-white font-bold tracking-wide leading-0 '>Organize your work <br /> <span className='  ml-24'>and life, finally.</span> </h1>

      <p className=' text-[20px] text-gray-400 mt-6 leading-relaxed'>Become focused, organized, and calm with Todoist. The world’s #1 <br /> task manager and to-do list app.</p>

      <div className=' mt-6 rounded-md'>
         <Button text='start now' />
      </div>
    </div>
  )
}

export default Hero
