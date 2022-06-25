import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#003140]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#61dbfb] text-center">Hello, I'm</p>
        <h1 className="md:text-5xl text-center text-white sm:text-7xl text-5xl font-bold md:py-3">
          Mohammad Asraf Ali
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl text-white  sm:text-4xl text-xl font-bold">
            A
          </p>
          <Typed
            className="md:text-3xl text-white  sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Front-End", "React", "Web"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="md:text-3xl text-white  sm:text-4xl text-xl px-1 font-bold">
            Developer
          </p>
        </div>
        <p className="text-[#8892b0] py-4 mx-w[700px] text-center">
          I’m a Front-End developer specializing in building exceptional digital
          experiences. Currently, <br /> I’m focused on building responsive
          full-stack web applications.
        </p>
        <div className="text-center">
          <button className="bg-[#61dbfb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            <a
              href="https://drive.google.com/file/d/14g6xqw7fh2h3CnhsXPdfAhoSO6mXKXWS/view?usp=sharing"
              target="_blank"
              download
            >
              Get Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/*
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

*/
