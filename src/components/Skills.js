import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import Reacts from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Github from "../assets/github.png";
import Firebase from "../assets/firebase.png";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" bg-white px-16">
      <Slider {...settings}>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Html} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Css} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Tailwind} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={JavaScript} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Reacts} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Node} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Mongo} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Github} alt="HTML icon" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-[#003140] w-28 h-28 rounded-full hover:bg-white hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Firebase} alt="HTML icon" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Skills;
/*
  <div className="bg-[#003140] mx-auto flex flex-col justify-center w-full h-full">
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4 px-16">
        <div className=" flex items-center justify-center bg-white w-28 h-28 rounded-full hover:bg-[#003140]  hover:scale-110 duration-500">
          <img className="w-16 mx-auto" src={Css} alt="HTML icon" />
        </div>
        <div className=" flex items-center justify-center bg-[#040c16] w-28 h-28 rounded-full cursor-pointer hover:scale-110 duration-500">
          <img className="w-16 mx-auto" src={Css} alt="HTML icon" />
        </div>
        <div className=" flex items-center justify-center bg-[#040c16] w-28 h-28 rounded-full cursor-pointer hover:scale-110 duration-500">
          <img className="w-16 mx-auto" src={Css} alt="HTML icon" />
        </div>
        <div className=" flex items-center justify-center bg-[#040c16] w-28 h-28 rounded-full cursor-pointer hover:scale-110 duration-500">
          <img className="w-16 mx-auto" src={Css} alt="HTML icon" />
        </div>
        <div className=" flex items-center justify-center bg-[#040c16] w-28 h-28 rounded-full  hover:scale-110 duration-500">
          <img className="w-16 mx-auto" src={Css} alt="HTML icon" />
        </div>
      </div>
    </div>

    */
