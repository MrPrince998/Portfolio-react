import React from 'react'
import { NavItems } from './NavItems'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#293239] text-white text-left py-10 px-24 flex justify-between items-center'>
      <div>
      <img src="/src/assets/images/Logo.svg" alt="Logo" className='w-50'/>
      </div>
      <ul className='flex flex-col gap-y-4 font-bold'>
        {
            NavItems.map((item, i) => {
                return (
                    <li key={i}>
                        <Link to={item.to} onClick={() => window.scrollTo(0, 0)}>{item.title}</Link>
                    </li>
                )
            })
        }
      </ul>
    </footer>
  )
}

export default Footer
