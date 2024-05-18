import React from 'react'

function Button({text,handleClick}) {
  return (
    <div>
      <button
      onClick={handleClick}
      className=' hover:bg-blue-700 duration-300 rounded-md w-36 text-xl bg-blue-500 text-white font-semibold px-4 py-3 '
      >
        {text}
    </button>
    </div>
  )
}

export default Button
