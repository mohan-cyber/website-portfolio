import React from "react";
import HeroImage from "../assets/images/hero.jpeg";
import  { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="home" className=" lg:h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800 text-white pt-[100px] pb-[50px]">
      <div className=" max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4  md:flex-row gap-8">
        <div className="flex flex-col justify-center h-full"> 
          <h2 className=" text-4xl md:text-5xl font-bold ">I'm a Full Stack Developer</h2>
          <p className=" text-white py-4 max-w-md ">
          I have 2.5 years of experience in my domain. My objective is to obtain a challenging position in a high-quality environment where my academic skills and practical expertise will add value to organization.
          </p>
          <div>
          <Link to="portfolio" smooth duration={500} spy={true} offset={-70}>
        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 space-x-1 ">
         <span>
             Portfolio
         </span>
         <span className="group-hover:rotate-90 duration-300">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

         </span>
        </button>
        </Link>
        </div>
       
        </div>
        <div>
            <img src={HeroImage} alt="profile pic" className=" rounded-2xl mx-auto  w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
