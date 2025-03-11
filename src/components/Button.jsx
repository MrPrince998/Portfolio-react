import React from 'react'

const Button = ({bgcolor, text}) => {
  return (
    <div className={`hover:bg-[#2A9D8F] w-30 h-10 py-2 px-6 rounded-3xl ${bgcolor} flex items-center justify-center shadow-md cursor-pointer`}>
        <button className='text-xl'>{text}</button>
    </div>
  )
}

export default Button
