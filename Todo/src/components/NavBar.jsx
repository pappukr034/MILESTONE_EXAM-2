import React from 'react'
import { SiTodoist } from "react-icons/si";
import Button from './Button';
function NavBar() {
  return (
    <div className=' bg-purple-900 w-full h-[60px] px-3 py-2   shadow-md shadow-white fixed top-0 flex justify-between items-center'>
     <div className=' flex px-3 py-2 gap-3'>
       <div className=' text-2xl'>
       <SiTodoist className=' text-2xl bg-red-400 rounded-md mt-2 text-white' />
       </div>
      <h1 className=' text-white text-2xl font-bold'>TodoList</h1>
     </div>
     <div >
       <Button text='Start now' />
     </div>
    </div>
  )
}

export default NavBar
