import React from "react";
import { RecentWorkItem } from "./RecentWorkItem";
import { Link } from "react-router-dom";
const RecentWork = () => {
  return (
    <section className="px-24 py-20 w-full">
      {/* Recent Work Section */}
      <h1 className="text-5xl font-bold my-4">
        Recent <span className="text-[#0637B1]">Work</span>
      </h1>
      <div className="flex flex-wrap gap-10 justify-between">
        {RecentWorkItem?.map((item, i) => {
          return (
            <div key={i} className="py-3 px-5 gap-10 my-10 shadow-md rounded-lg">
              <div className="w-90">
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
          );
        })}
      </div>
      <Link to={"/project"} className="text-[#0637B1] hover:font-medium ">See More...</Link>
    </section>
  );
};

export default RecentWork;
