import React from "react";
import { TestimonialData } from "./TestimonialData";

const Testimonial = () => {
  return (
    <section className="px-24 pb-20 my-20 w-full">
      <h1 className="text-5xl font-bold my-4 text-center">
        Client <span className="text-[#0637B1]">Testimonial</span>
      </h1>
      <div className="overflow-hidden w-full py-4 relative">
        <div className="flex gap-4 w-max animate-scroll">
          {[...TestimonialData, ...TestimonialData].map((item, i) => (
            <div key={i} className="my-10 w-80 flex-shrink-0">
              <div className="bg-[#051394] h-50 text-white shadow-md rounded-lg py-4 px-6">
                <p className="text-base">{item.description}</p>
              </div>
              <div className="w-16 h-16 mt-[-1rem]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full shadow-md bg-[#d9d9d9]"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold my-1">{item.name}</h2>
                <p>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
        <style>
          {`@keyframes scrollLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll { animation: scrollLeft 20s linear infinite; }`}
        </style>
      </div>
    </section>
  );
};

export default Testimonial;
