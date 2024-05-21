import React from 'react';

const BlogCard = ({ posterUrl, title, description,posterimage}) => {
  return (
    <div className=" bg-white w-[80%] shadow-lg rounded-lg overflow-hidden">
      <img className="w-full object-cover" src={posterimage} alt={title} />
      <div className="p-6">
        <h2 className="text-[25px] font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-[19px] font-sans">{description}</p>
        <button className=' text-red-500 mt-4 bg-red-100 w-full py-2 px-3 rounded-md'><a href={posterUrl}> Read</a></button>
      </div>
    </div>
  );
};

export default BlogCard;
