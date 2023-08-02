import React from "react";
import Docker from "../assets/images/docker.png";
import Sso from "../assets/images/django-sso.png";
import Stripe from "../assets/images/stripe.jpeg";
import FadeInAnimation from "./FadeInAnimation";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Docker,
      link: "https://github.com/mohan-cyber/Docker-container-django-react",
    },
    {
      id: 1,
      src: Sso,
      link: "https://github.com/mohan-cyber/django-sigle-sign-on-authentication",
    },
    {
      id: 1,
      src: Stripe,
      link: "https://github.com/mohan-cyber/Stripe-Payment-Integration",
    },
  ];
  return (
    <div
      id="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-screen pt-[50px] pb-[50px] lg:pt-0 lg:pb-0 "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <FadeInAnimation>
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
              Portfolio
            </p>
            <p className="py-6"> Check out some of my works here </p>
          </FadeInAnimation>
        </div>
        <FadeInAnimation>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolios.map(({ id, src, link }) => (
              <div
                key={id}
                className=" shadow-md shadow-gray-600 rounded-lg flex flex-col justify-center items-center"
              >
                <img
                  src={src}
                  alt=""
                  className=" rounder-md duration-200 hover:scale-105 w-full h-full"
                />
                <div className="flex justify-center items-center  w-full divide divide-x-2  divide-gray-600">
                  <div className=" flex justify-center items-center  w-full px-6 py-4 ">
                    <a href="/" className="duration-200 hover:scale-105">
                      Demo
                    </a>
                  </div>

                  <div className=" flex justify-center items-center  w-full px-6 py-4">
                    <a href={link} className="duration-200 hover:scale-105">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
};

export default Portfolio;
