import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <p className="text-[#61dbfb] text-center py-3 font-bold md:text-3xl sm:text-4xl ">
        PORTFOLIO
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-center py-8">Project</h2>
          <div className="text-center font-medium">
            <p className="py-2 mx-8">Details</p>
            <p className="py-2 border-b mx-8">Technologies</p>
          </div>
          <div className="flex justify-center items-center my-5">
            <button class="bg-[#61dbfb] hover:bg-[#4FD1C5] text-white font-bold py-2 px-4 mx-3 border border-[#61dbfb] rounded">
              <FaExternalLinkAlt />
            </button>
            <button class="hover:bg-[#61dbfb] text-[#4FD1C5] font-semibold hover:text-white py-2 px-4 border border-[#61dbfb] hover:border-transparent rounded">
              <FaGithub />
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-center py-8">Project</h2>
          <div className="text-center font-medium">
            <p className="py-2 mx-8">Details</p>
            <p className="py-2 border-b mx-8">Technologies</p>
          </div>
          <div className="flex justify-center items-center my-5">
            <button class="bg-[#61dbfb] hover:bg-[#4FD1C5] text-white font-bold py-2 px-4 mx-3 border border-[#61dbfb] rounded">
              <FaExternalLinkAlt />
            </button>
            <button class="hover:bg-[#61dbfb] text-[#4FD1C5] font-semibold hover:text-white py-2 px-4 border border-[#61dbfb] hover:border-transparent rounded">
              <FaGithub />
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-center py-8">Project</h2>
          <div className="text-center font-medium">
            <p className="py-2 mx-8">Details</p>
            <p className="py-2 border-b mx-8">Technologies</p>
          </div>
          <div className="flex justify-center items-center my-5">
            <button class="bg-[#61dbfb] hover:bg-[#4FD1C5] text-white font-bold py-2 px-4 mx-3 border border-[#61dbfb] rounded">
              <FaExternalLinkAlt />
            </button>
            <button class="hover:bg-[#61dbfb] text-[#4FD1C5] font-semibold hover:text-white py-2 px-4 border border-[#61dbfb] hover:border-transparent rounded">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
