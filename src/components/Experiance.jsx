import React from "react";
import Python from "../assets/images/python.png";
import Alpine from "../assets/images/alpine.png";
import Aws from "../assets/images/aws.png";
import Bitbucket from "../assets/images/bitbucket.png";
import Css from "../assets/images/css.png";
import Docker from "../assets/images/docker.png";
import Gatsby from "../assets/images/gatsby.png";
import Github from "../assets/images/github.png";
import Html from "../assets/images/html.png";
import Mongodb from "../assets/images/mongodb.png";
import Reactjs from "../assets/images/react.png";
import Tailwind from "../assets/images/tailwind.png";
import Typescript from "../assets/images/typescript.png";
import FadeInAnimation from "./FadeInAnimation";

const Experiance = () => {
  const techs = [
    {
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: Reactjs,
      title: "React JS",
      style: "shadow-gray-500",
    },
    {
      id: 4,
      src: Docker,
      title: "Docker",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: Aws,
      title: "AWS",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: Github,
      title: "Github",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: Gatsby,
      title: "Gatsby JS",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: Bitbucket,
      title: "Bitbucket",
      style: "shadow-white",
    },
    {
      id: 9,
      src: Mongodb,
      title: "MongoDB",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: Typescript,
      title: "Typescript",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: Alpine,
      title: "Alpine JS",
      style: "shadow-cyan-500",
    },
    {
      id: 10,
      src: Css,
      title: "CSS",
      style: "shadow-white",
    },
    {
      id: 10,
      src: Html,
      title: "Html",
      style: "shadow-cyan-500",
    },
  ];
  return (
    <div
      id="experiance"
      className=" w-full  bg-gradient-to-b from-gray-800 to-black pt-[50px] pb-[50px] lg:pt-0 lg:pb-0 "
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <FadeInAnimation>
            <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experiance
            </p>
            <p className=" py-6">These are the technoogies I've worked with</p>
          </FadeInAnimation>
        </div>
        <FadeInAnimation>
          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0">
            {techs.map(({ id, src, style, title }) => (
              <div
                key={id}
                className={` flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg border-t border-gray-600 ${style}`}
              >
                <img src={src} alt="" className=" w-20 mx-auto" />
                <p className=" mt-auto">{title}</p>
              </div>
            ))}
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
};

export default Experiance;
