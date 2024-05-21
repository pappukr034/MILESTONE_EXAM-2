import React from 'react'
import { FaPlus } from "react-icons/fa";


function NavBar({handleAddPost}) {
  return (
    <div>
      <nav className=' w-full h-[70px] bg-gray-300 flex justify-between items-center px-6 py-1 space-x-2'>
         <h1 className=' text-4xl'>Blog App</h1>
         <FaPlus
          onClick={handleAddPost}
          className='p-2 cursor-pointer duration-300 text-4xl hover:rounded-full hover:bg-gray-600' />
      </nav>
    </div>
  )
}

export default NavBar
