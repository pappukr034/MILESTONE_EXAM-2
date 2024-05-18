import React from 'react'
import { useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



function TodoCard({ title, initialStatus, handleRemove,handleStatusUpdate,id,count,handleEdit }) {
    
    const [newTitle,setNewTitle]=useState(title);

    return (
        <div className={`max-w-sm my-4 bg-white shadow-lg rounded-lg p-6 ${initialStatus=='Completed'?'bg-green-300 duration-300':'bg-white'}`}>
          <div className='flex justify-between items-center'>
             
          <h2 className="text-2xl font-bold mb-2 flex justify-center items-center gap-2">{` ${count+1}. ${title}`}  </h2>
          <FaEdit
          onClick={()=>{
            
            handleEdit(id,title)
          }}
          className=' text-4xl bg-gray-300 rounded-full p-2 cursor-pointer' />

          </div>
          <p className={`mb-4 ${initialStatus === 'Pending' ? 'text-yellow-500' : 'text-green-500'} text-xl`}>{initialStatus}</p>
          <div className="flex justify-between items-center space-x-3">
            <button
              onClick={()=> handleStatusUpdate(id)}
              className="bg-blue-500 w-[50%] flex justify-center items-center gap-2 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                <MdOutlineSecurityUpdateGood />
              Update
            </button>
            <button
              onClick={()=> handleRemove(id)}
              className="bg-red-500 w-[50%] flex justify-center items-center gap-2 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
                <RiDeleteBinLine />
              Remove
            </button>
          </div>
        </div>
      );
}

export default TodoCard
