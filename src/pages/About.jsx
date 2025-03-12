import React from 'react'

const About = () => {
  return (
    <section className='flex py-20 px-24 gap-10 justify-between items-center'>
      <div className=' overflow-hidden shadow-lg bg-[#f9f9f9f9] w-102 h-102 rounded-[50%] flex items-center justify-center'>
        <img src="/src/assets/images/user.jpg" alt="user" className='w-100 h-100 object-fill rounded-[50%]'/>
      </div>
      <div className='w-200'>
        <h1 className='font-bold text-6xl my-4'>"Bharat Rana"</h1>
        <p className='font-medium my-2 text-lg'>
        As a passionate web designer and developer, I specialize in creating dynamic, user-friendly websites that not only look visually stunning but also function flawlessly. With a strong focus on user experience, responsive design, and performance optimization, I build digital solutions that are both aesthetically appealing and highly practical. Whether it's a sleek portfolio, an engaging business site, or an innovative web application, I craft each project with precision, creativity, and a keen eye for detail.
        </p>
      </div>
    </section>
  )
}

export default About
