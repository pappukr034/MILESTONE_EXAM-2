// src/App.js

import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const handleWatch = () => {
    alert('YouTube pe jao yarr');
  };

  const [movieName,setMovieName]=useState('');
  const [allMovie,setAllMovie]=useState([{Poster
    : 
    "https://m.media-amazon.com/images/M/MV5BNzAxMjg0NjYtNjNlOS00NTdlLThkMGEtMjAwYjk3NmNkOGFhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    Title
    : 
    "Captain America: The First Avenger",
    Type
    : 
    "movie",
    posterUrl:'',
    Year
    : 
    "2011",
    imdbID
    : 
    "tt0458339"}])
  let apiUrl
  const handleSubmit=(e)=>{
    e.preventDefault();
    apiUrl=`https://www.omdbapi.com/?apikey=359240ae&s=${movieName}`

    fetch(apiUrl)
    .then((res)=> res.json())
    .then((data) => {
      console.log("all data",data)
      console.log(data.Search)
      setAllMovie([...data.Search])
      console.log("All movie array",allMovie)
    })
    .catch((error)=>{
      console.log('Error is there in fething movie',error)
    })
    
    setMovieName("")

  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 ">
      <NavBar />
      <form action="" onClick={handleSubmit} className='flex justify-center mt-6'>
        <input 
        className=' w-[60%] py-3 px-2 font-semibold text-xl'
        type="text" 
        placeholder='Search movie'
        value={movieName}
        onChange={(e)=>setMovieName(e.target.value)}
        />
        <button
        className=' bg-blue-400 w-[100px] text-center font-bold text-xl'
        >
          search
        </button>
      </form>
       

       <div className=' flex px-7 py-8 justify-center items-center flex-wrap gap-3 space-x-4 space-y-6'>
      
          {
           allMovie.length>0 &&  allMovie.map((ele,idx)=>{
            return <MovieCard
            key={idx}
            title={ele.Title}
            onWatch={handleWatch}
            poster={ele.Poster}
            year={ele.Year}
            Type={ele.Type}
            posterUrl={ele.posterUrl}

          />
          })
          }
       </div>

       <Footer />
    </div>
  );
}

export default App;
