import React from "react";
import { ImBlog } from "react-icons/im";
import { GiPaperPlane, GiCricketBat, GiCook } from "react-icons/gi";

const Interest = () => {
  return (
    <div className=" ">
      <div className="w-full h-full bg-[#0a192f]  mx-auto  flex flex-col justify-center mt-0">
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <ImBlog className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Blogging</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <GiPaperPlane className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Travelling</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <GiCricketBat className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Blogging</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <GiCook className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Blogging</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
