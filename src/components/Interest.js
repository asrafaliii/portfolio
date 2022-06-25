import React from "react";
import { ImBlog } from "react-icons/im";
import { GiPaperPlane, GiCricketBat, GiCook } from "react-icons/gi";

const Interest = () => {
  return (
    <div className="px-12 mt-8">
      <p className="text-[#61dbfb] text-center font-bold md:text-3xl sm:text-4xl ">
        INTERESTS
      </p>
      <div className="w-full h-full  mx-auto  flex flex-col justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-4 gap-8 text-center px-4  py-10">
          <div className="shadow-md bg-[#003140]  shadow-[#003140] p-5">
            <ImBlog className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Blogging</p>
          </div>
          <div className="shadow-md bg-[#003140]  shadow-[#003140] p-5">
            <GiCricketBat className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Playing</p>
          </div>
          <div className="shadow-md bg-[#003140]  shadow-[#003140] p-5">
            <GiPaperPlane className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Travelling</p>
          </div>
          <div className="shadow-md bg-[#003140]  shadow-[#003140] p-5">
            <GiCook className="text-7xl text-[#61dbfb] mx-auto" />
            <p className="my-4 text-white text-2xl">Cooking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
