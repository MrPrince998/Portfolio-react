import React from "react";
import { Link } from "react-router-dom";

const BioSection = () => {
  return (
    <section className="w-full flex justify-between items-center gap-10 flex-wrap px-24 py-20">
      <div className="w-152 ">
        <h4 className="text-2xl my-1">Hello! I'm</h4>
        <h1 className="text-4xl font-bold my-2 text-[#0637B1]">Bharat Rana</h1>
        <p className="w-full text-lg my-1">
          I design and develop modern, user-friendly websites that bring ideas
          to life. With a focus on seamless experiences and pixel-perfect
          detail, I craft digital solutions that make an impact.
        </p>
        <div className="flex gap-4 my-4">
          <div className="hover:bg-[#2A9D8F] h-10 py-2 px-6 rounded-3xl bg-[#d9d9d9] flex items-center justify-center shadow-md cursor-pointer">
            <Link to="/about">
              <button className="text-xl">About Me...</button>
            </Link>
          </div>
          <div className="hover:bg-[#2A9D8F] h-10 py-2 px-6 rounded-3xl bg-[#d9d9d9] flex items-center justify-center shadow-md cursor-pointer">
            <Link to={'contact'}>
              <button className="text-xl">Hire Me!</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src="/src/assets/images/user.png" alt="user" className="rounded-[50%] w-93 h-93 object-fill"/>
      </div>
    </section>
  );
};

export default BioSection;
