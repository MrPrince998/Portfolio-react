import React from 'react'
import { RecentWorkItem } from './RecentWorkItem'
const ProjectSection = () => {
  return (
        <>
        <h1 className='font-bold text-5xl text-center my-4'>My <span className='text-[#0637B1]'>Projects</span></h1>
        <div className="flex flex-wrap gap-5 justify-between">
        {
            RecentWorkItem?.map((item, i) => {
                return (
                    <div key={i} className="py-3 px-5 gap-10 my-10 shadow-md rounded-lg cursor-pointer">
                        <div className="w-86">
                            <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-72 object-cover rounded-lg shadow-md bg-[#d9d9d9d9]"
                            />
                        </div>
                            <h2 className="text-3xl font-bold my-4">{item.title}</h2>
                        <div className="flex gap-2 items-center my-1">
                            <img src={item.flag} alt={item.country} className="w-6 h-4 shadow-md border-1"/>
                            <p>{item.country}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default ProjectSection
