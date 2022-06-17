import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <div className="w-full bg-white py-6 px-4">
      <p className="text-[#61dbfb] font-bold text-center md:text-3xl sm:text-4xl ">
        CONTACT
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-6">
        <div className="text-white w-[400px] mx-auto">
          <div className="w-full bg-white text-black shadow-xl flex flex-col py-3 rounded-lg">
            <AiOutlineMail />
            <h1>Email</h1>
            <p>moha.asrafali@gmail.com</p>
          </div>
          <div className="w-full bg-white text-black shadow-xl flex flex-col p-4 my rounded-lg ">
            <GoLocation />
            <h1>Adress</h1>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="w-full bg-white text-black shadow-xl flex flex-col p-4 my rounded-lg ">
            <AiOutlinePhone />
            <h1>Phone</h1>
            <p>01730593130</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div class=" w-[400px] mx-auto ">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div class="mb-6">
                <textarea
                  class="textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                />
              </div>
              <div class="flex items-center justify-between">
                <button className="bg-[#003140] text-[#61dbfb] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
