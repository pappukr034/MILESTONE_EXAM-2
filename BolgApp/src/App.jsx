import { useState } from 'react'
import { ImCross } from "react-icons/im";

import './App.css'
import BlogCard from './components/BlogCard'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


function App() {
  const [isOpen,setIsOpen]=useState(false);

  // get data from user

  const [postUrl,setPostUrl]=useState('');
  const [posterimage,setPosterimage]=useState('');
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');


    const [allPost,setAllPost]=useState([
    {
      posterimage: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/dhoni--kohli-180554112-16x9_0.jpg?VersionId=8Sxgb8XXYdOMcvvK89ZHCP_2h7_w5yfG&size=690:388',
      title: 'RCB into the playOffs',
      description: 'MS Dhoni was angry at himself after the CSK star failed to get his side over the line in the tense chase against RCB on May 18, Saturday. The win would leave Virat Kohli emotional as the RCB squad celebrated their win on the day. Dhoni was taking strike in the final over of the game as CSK needed 17 off the final over as the CSK legend was on strike.',
      postUrl:''
    },
  ])

  const handleAddPost=()=>{
    console.log('post added')
    setIsOpen((prev)=> !prev)
}

const handleClose=()=>{
    setIsOpen((prev)=> !prev);
}

const handleAddBlog=()=>{
    console.log(postUrl)
    console.log(title)
    console.log(description)
    console.log(posterimage)
    const post={
      posterimage:posterimage,
      title:title,
      description:description,
      postUrl:postUrl
    }
    setAllPost([...allPost,post])
    console.log(allPost)
    setPostUrl('')
    setDescription('')
    setTitle('')
}

  return (
    <>
    <div className='w-full h-screen'>
        <NavBar handleAddPost={handleAddPost} />
      <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-6">
     
      <div className=" w-full grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allPost.map((post, index) => (
          <BlogCard 
            key={index}
            posterimage={post.posterimage}
            title={post.title}
            description={post.description}
            posterUrl={post.postUrl}
          />
        ))}
      </div>
     
     </div>

     <div className='flex justify-center items-center'>
     {
         isOpen && (
          <div className=' w-1/2 flex flex-col px-8 py-4 justify-center items-center bg-slate-200 rounded-md absolute top-6'>
          <ImCross
           onClick={handleClose} 
           className='rounded-full bg-red-200 relative left-1/2 hover:bg-red-600 duration-300 text-4xl hover:rounded-full p-2' />
          <div className='w-full flex flex-col border-spacing-y-3 py-3 gap-3'>
            <input 
            value={postUrl}
            onChange={(e)=>setPostUrl(e.target.value)}
            className=' rounded-md py-3 px-3 text-gray-500 text-[18px]'
            type="text" 
            placeholder='Enter blog post URL'
            />
            <input 
            value={posterimage}
            onChange={(e)=>setPosterimage(e.target.value)}
            className=' rounded-md py-3 px-3 text-gray-500 text-[18px]'
            type="text" 
            placeholder='Enter posterimage URL'
            />
            <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='rounded-md py-3 px-3 text-gray-500 text-[18px]' 
            type="text" 
            placeholder='Enter title'
            />
            <input 
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className='rounded-md py-3 px-3 text-gray-500 text-[18px]'
            type="text" 
            placeholder='Enter description'
            />
           <textarea
            placeholder='Write....' className=' px-2 text-[18px] text-gray-700 rounded-md'  rows="8" cols="8"></textarea>
          </div>
           <button
            onClick={handleAddBlog}
            className=' w-[100%] text-center py-2 px-3 bg-blue-600 text-white rounded-md font-semibold'>Add Blog</button>
       </div>
         )
       }
     </div>
    
     <Footer />

     </div>
     
    </>
  )
}

export default App
