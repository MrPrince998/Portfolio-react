import React from 'react'
import { Service } from './Service'

const ServiceSection = () => {
  return (
        /* Service Section */
      <section className='px-24 py-20 w-full'>
        <h1 className='text-5xl font-bold my-4'>My <span className='text-[#0637B1] '>Service</span></h1>
      {
        Service?.map((item, i) => {
          return (
            <div key={i} className="flex gap-4 my-5">
              <item.mark className="text-3xl text-green-500"/>
              <p className="text-lg">{item.description}</p>
            </div>
          );
        })
      }
    </section>
  )
}

export default ServiceSection
