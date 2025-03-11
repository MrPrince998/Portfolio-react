import React from 'react'
import { TestimonialData } from './TestimonialData'

const Testimonial = () => {
  return (
    <section className="px-24 py-20 w-full">
    {/* Testimonial Section */}
    <h1 className="text-5xl font-bold my-4">
        Client <span className="text-[#0637B1]">Testimonial</span>
    </h1>
    <div>
        {
            TestimonialData?.map((item, i) => {
                return (
                    <div key={i} className="flex gap-10 my-10">
                        <div className="w-96">
                            <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-72 object-cover rounded-lg shadow-md bg-[#d9d9d9d9]"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold my-4">{item.name}</h2>
                            <p className="text-lg">{item.description}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </section>
  )
}

export default Testimonial
