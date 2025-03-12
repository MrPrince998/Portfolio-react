import React from 'react'
import {NavItems} from './NavItems'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#293239] px-24 fixed w-full h-15 z-100 shadow-lg'>
        <div><img src="/src/assets/images/Logo.svg" alt="Logo" className='w-50 '/></div>
        <ul className='flex flex-nowrap gap-x-10 justify-between text-white'>
        {
            NavItems.map((items,i) => {
                return (
                    <li key={i} className='hover:text-[#2A9D8F]'>
                        <Link to={items.to} onClick={() => window.scrollTo(0, 0)}>{items.title}</Link>
                    </li>
                )
            })
        }
        </ul>
        <Link to={'contact'} onClick={() => window.scrollTo(0, 0)} className='hover:bg-[#2A9D8F] h-10 py-2 px-6 rounded-3xl bg-white flex items-center justify-center shadow-md cursor-pointer'>
            Contact
        </Link>
    </nav>
  )
}

export default NavBar
