import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#004346]">
      {/*container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#EC7357]"> Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#93A29B] ">
          Austin Churilla.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a Full stack Developer focusing on my current studdies at ODU
          where I learn coding and software types and technologies. I am
          currently working on my own projects and learning new technologies.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EC7357] hover:border-[#EC7357]">
            View Work
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
