import React, { useRef, useState } from 'react'
import Button from './Button'
import TodoCard from './TodoCard';

function UserInput() {
    const [input, setInput]=useState("");
    const [isEditable,setIsEditable]=useState(false)
    const [todos,setTodos]=useState([
        
    ]);
    const inputRef=useRef(null)
    const handleClick=()=>{
    
       if(isEditable==false){
            const newData={
            id:Math.random(),
            title:input,
            status:'Pending',
            count:todos.length,
            isEditable:false
        }
        setTodos([...todos,newData]);
       }
      
        setInput("")
    }
    
    const handleRemove=(id)=>{
       setTodos(todos.filter((ele)=> ele.id!==id))
    }

    const handleStatusUpdate=(id)=>{
        const newTodos=todos.map((ele)=>{
            if(ele.id==id){
                if(ele.status=='Pending'){
                    return {...ele,status:'Completed'}
                }
                else return {...ele,status:'Pending'}
            }
            else return ele;
        })
        setTodos(newTodos)
    }

    const handleEdit=(id,title)=>{
        inputRef.current.focus();
        const newTodos=todos.map((ele)=>{
             if(id===ele.id){
                return {...ele,isEditable:true,title:title}
             }
             else return ele;
        })
        setTodos(newTodos)
    }

        
  return (
    <>
    <div className=' flex justify-center items-center mx-auto w-[80%] h-1/5 bg-white text-black rounded-md mt-10 shadow-md shadow-white'>
      <div className=' bg-slate-300 w-[80%] h-1/2 flex justify-center items-center rounded-md  '>
        <input 
        className=' rounded-md font-semibold text-[19px] bg-slate-200 text-black px-3 py-3 w-[60%] '
        type="text"
        placeholder="What's is your goal Today?"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        ref={inputRef}
        />
        <Button text={`${isEditable?"Save":"Add"}`} handleClick={handleClick} />
      </div>
     
    </div>

    <div className=' mt-36 w-full flex gap-3 flex-wrap px-8 py-4'>
          
     {
        todos?.map((ele,idx)=>(
            <TodoCard
             key={idx}
             title={ele.title}
             id={ele.id}
             count={ele.count}
             initialStatus={ele.status}
             handleRemove={handleRemove}
             handleStatusUpdate={handleStatusUpdate}
             handleEdit={handleEdit}
            />
        ))
      }
     </div>


    </>
  )
}



export default UserInput
