import React from 'react'
import {NavItems} from './NavItems'
import { Link } from 'react-router-dom'
import Button from './Button'
const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#293239] px-24 fixed w-full h-15 z-100 shadow-lg'>
        <div><img src="/src/assets/images/Logo.svg" alt="Logo" className='w-50 '/></div>
        <ul className='flex flex-nowrap gap-x-10 justify-between text-white'>
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
        <Button bgcolor="bg-white" text='Contact'/>
    </nav>
  )
}

export default NavBar
