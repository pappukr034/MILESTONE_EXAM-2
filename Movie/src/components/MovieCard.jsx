

import React, { Children } from 'react';


const MovieCard = ({ poster, title, onWatch,year,Type }) => {
  return (
    <div className="w-[19%] overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition-all hover:scale-105 rounded-md">
      <img className="w-[300px] h-[300px] text-white" src={poster} alt='image not present' />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-gray-900 dark:text-white text-center ">{title}</div>
        <div className=' flex justify-center items-center gap-3 text-white'>
            <p>{`${year}  |`}</p>
            <p>{`${Type}  |`}</p>
        </div>
        <button
          onClick={onWatch}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Watch
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
