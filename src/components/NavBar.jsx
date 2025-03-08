import React from 'react'
import {NavItems} from './NavItems'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#293239] px-24 fixed w-full z-10'>
        <div className='w-15 h-15 bg-red-500 flex items-center justify-center text-white'>Logo</div>
        <ul className='flex flex-nowrap gap-x-5 justify-between text-white'>
        {
            NavItems.map((items,i) => {
                return (
                    <li key={i} className='hover:text-[#2A9D8F] hover:underline-offset-2'>
                        <Link to={items.to}>{items.title}</Link>
                    </li>
                )
            })
        }
        </ul>
        <div className='w-20 h-8 py-2 px-6 rounded-3xl bg-white flex items-center justify-center'>
            <button>Contact</button>
        </div>
    </nav>
  )
}

export default NavBar
