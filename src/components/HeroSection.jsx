import React from 'react'


const HeroSection = () => {
  return (
    <div className='text-center h-screen flex flex-col justify-center items-center'>
      <Typewriter texts={["Web Developer", "Web Designer"]} speed={100} loop={true}  />
      <h1 className='font-bold text-5xl'>Web Developer</h1>
      <p>Crafting beautiful, functional websites with precision & passion. Let’s build something amazing!</p>
    </div>
  )
}

export default HeroSection
