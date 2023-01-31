import React from "react";
import HeroImage from "../assets/heroImage.png";
import { BsCaretRight} from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">I'm a Frontend Web-Developer</h2>
          <p className="text-gray-600 py-4 max-w-md">
            I have good knowledge to building and desigining web application. I love
            to work on web application using technologies like, React, Tailwind,
          </p>
          <div>
            <Link to="Project" smooth duration={300} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Project
              <span className="group-hover:rotate-90 duration-300">
                <BsCaretRight size={20} className="ml-2"/>
              </span>
            </Link>
          </div>
        </div>

        <div>
            <img src={HeroImage} alt="My Profile"  className="rounded-2xl  w-2/3 md:w-44px"/>
        </div>

      </div>
    </div>
  );
};

export default Home;
