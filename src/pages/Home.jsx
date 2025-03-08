import React from "react";
import Typewriter from "../components/Typewriter";

const Home = () => {
  return (
    <>
      <nav className="text-center h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl">
          <Typewriter
            texts={["Web Developer", "Web Designer"]}
            speed={800}
            loop={true}
          />
        </h1>
        <p className="font-medium text-lg">
          Crafting beautiful, functional websites with precision & passion.
          Let’s build something amazing!
        </p>
      </nav>
    </>
  );
};

export default Home;
