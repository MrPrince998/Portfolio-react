import React from "react";
import Typewriter from 'react-typewriter-effect';

const HeroSection = () => {

  return (
    <div className="h-screen flex justify-center items-center text-center text-white bg-gray-900">
      {/* Hero Content */}
      <div className="z-10 flex flex-col justify-center items-center min-h-full">
        <Typewriter
          textStyle={{
            fontWeight: "bold",
            fontSize: "3rem",
          }}
          startDelay={500}
          cursorColor="white"
          multiText={["Web Developer", "Web Designer"]}
          multiTextDelay={2000}
          typeSpeed={100}
          loop={true}
        />
        <p className="text-lg text-gray-300">
          Crafting beautiful, functional websites with precision & passion.
          Let's build something amazing!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
