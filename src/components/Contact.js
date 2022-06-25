import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <div name="contact" className="px-12 mt-6">
      <p className="text-[#61dbfb] font-bold text-center md:text-3xl sm:text-4xl ">
        CONTACT
      </p>
      <div className="mt-5">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="shadow-md w-full flex flex-col gap-y-4 px-6 py-12 my-4 rounded-lg hover:shadow-xl">
            <div className="flex justify-start items-center">
              <AiOutlineMail className="text-5xl font-bold px-1" />
              <p className="text-3xl">moha.asrafali@gmail.com</p>
            </div>
            <div className="flex justify-start items-center ">
              <AiOutlinePhone className="text-5xl font-bold px-1" />
              <p className="text-3xl">01730-593130</p>
            </div>
            <div className="flex justify-start items-center ">
              <GoLocation className="text-5xl font-bold px-1" />
              <p className="text-3xl">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="shadow-md w-full flex flex-col p-4 my-4 rounded-lg hover:shadow-xl">
            <form className="px-6 py-4">
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
                  class="textarea shadow appearance-none border rounded w-full h-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                />
              </div>
              <div class="flex items-center justify-between">
                <button className="bg-[#003140] text-[#61dbfb] w-[200px] rounded-md font-medium my- mx-auto md:mx-0 py-3">
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

/*


<div className="px-12">
      <p className="text-[#61dbfb] font-bold text-center md:text-3xl sm:text-4xl ">
        CONTACT
      </p>
      <div className="w-full h-full mx-auto flex flex-col justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 text-center px-4 py-10">
          <div className="shadow-md bg-red-500 p-5 px-12 ">
            <div className="flex justify-start items-center hover:scale-110 duration-500">
              <AiOutlineMail className="text-6xl font-bold px-1 sm:text-4xl" />
              <p className="text-3xl">moha.asrafali@gmail.com</p>
            </div>
            <div className="flex justify-start items-center hover:scale-110 duration-500">
              <AiOutlinePhone className="text-6xl font-bold px-1" />
              <p className="text-3xl">01730-593130</p>
            </div>
            <div className="flex justify-start items-center hover:scale-110 duration-500">
              <GoLocation className="text-6xl font-bold px-1" />
              <p className="text-3xl">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="shadow-md p-5 bg-red-500">
            <form className="px-6 py-4">
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
                  class="textarea shadow appearance-none border rounded w-full h-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                />
              </div>
              <div class="flex items-center justify-between">
                <button className="bg-[#003140] text-[#61dbfb] w-[200px] rounded-md font-medium my- mx-auto md:mx-0 py-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

*/
