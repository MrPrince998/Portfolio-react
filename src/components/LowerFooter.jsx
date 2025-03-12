import React from 'react'
import { FaFacebook, FaTiktok  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const LowerFooter = () => {
  return (
    <footer className='bg-[#293239] text-white px-24 flex justify-center items-center'>
      <div className='flex gap-4 items-center'>
        <p>@2025 Bharat Rana. All rights reserved</p>
        <div className='flex gap-2'>
            <FaFacebook />
            <AiFillInstagram />
            <FaSquareXTwitter />
            <FaTiktok />
        </div>
      </div>
    </footer>
  )
}

export default LowerFooter
