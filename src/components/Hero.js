import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#61dbfb] font-bold sm:mt-5">HELLO, I'M</p>
        <h1 className="md:text-5xl sm:text-7xl text-4xl font-bold md:py-3">
          Mohammad Asraf Ali
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-4xl text-xl font-bold">A</p>
          <Typed
            className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Front-End", "React", "Web"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="md:text-3xl sm:text-4xl text-xl p-3 font-bold">
            Developer
          </p>
        </div>
        <button className="bg-[#61dbfb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
