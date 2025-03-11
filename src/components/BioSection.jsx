import React from "react";
import Button from "./Button";

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
        <Button bgcolor="bg-[#d9d9d9]" text="Hire Me"/>
      </div>
      <div>
        <img src="/src/assets/images/user.jpg" alt="user" className="rounded-[50%] w-93 h-93 object-fill"/>
      </div>
    </section>
  );
};

export default BioSection;
