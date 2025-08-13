import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-green-300 to-green-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-orange-300 hover:to-orange-500 transition-all duration-300 cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button
