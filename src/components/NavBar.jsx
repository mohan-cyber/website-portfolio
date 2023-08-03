import { React, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Link } from "react-scroll";
import { FaTimes, FaHamburger } from "react-icons/fa";
import useSound from 'use-sound';
import boopSfx from '../assets/sounds/bubble-sound.mp3';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [play] = useSound(boopSfx);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experiance",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center z-10 w-full text-white bg-black fixed lg:px-[30px] px-[16px] py-[15px]">
      <div>
        <Link to="home" smooth duration={500} spy={true} offset={-70}>
          <h1 className="font-vibe text-4xl cursor-pointer">Mohan</h1>
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => {setNav(!nav);play()}}
        className="md:hidden cursor-pointer z-10 text-white"
      >
        {nav ? <FaTimes size={20} /> : <FaHamburger size={20} />}
      </div>
      <AnimatePresence>
        {nav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.ul
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
              }}
              initial="closed"
              animate={nav ? "open" : "closed"}
              exit={"closed"}
              className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-800 text-white"
            >
              {links.map(({ id, link }) => (
                <motion.li
                  variants={{
                    open: {
                      x: "0%",
                      opacity: 1,
                    },
                    closed: {
                      x: "25%",
                      opacity: 0,
                    },
                  }}
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
