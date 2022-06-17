import React from "react";
import Gif from "../assets/giphy.gif";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Gif} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#61dbfb] font-bold md:text-3xl sm:text-4xl ">
            ABOUT ME
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-[#003140] text-2xl font-bold py-2">
            If you’re wondering who I am.
          </h1>
          <p>I am Asraf , a passionate Front-End Developer from Bangladesh.</p>
          <p>
            Here are a few technologies I’ve been working with recently:
            JavaScript (ES6+) TypeScript React Eleventy Node.js WordPress
          </p>
          <button className="bg-[#003140] text-[#61dbfb] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
