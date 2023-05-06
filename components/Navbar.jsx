import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { HoverText } from "./HoverText";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants/Data";
import { navLinkVariants, navbarVariants } from "@/constants/constants";

const Navbar = ({ onToggle, initialToggle }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  //Function to handle Navbar Menu
  const handleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const [toggle, setToggle] = useState(initialToggle);

  useEffect(() => {
    setToggle(initialToggle);
  }, [initialToggle]);

  const handleToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    onToggle(newToggle);
    localStorage.setItem("toggle", JSON.stringify(newToggle));
  };

  return (
    <>
      <div className="fixed z-40 flex w-full items-center justify-evenly bg-primary-white py-3 text-primary-black dark:bg-primary-black dark:text-primary-white">
        <button
          className={
            menuToggle
              ? "hidden"
              : "sm:text-md block cursor-pointer text-sm focus:outline-none"
          }
          onClick={handleMenu}
          size={20}
        >
          <HoverText text="MENU" width="90px" />
        </button>
        <button
          className={
            menuToggle
              ? "hidden"
              : "text-md block cursor-pointer sm:text-2xl focus:outline-none"
          }
        >
          <a href="#home">
            <HoverText text="ANAKIN" width="130px" />
          </a>
        </button>
        <button
          className={
            menuToggle
              ? "hidden"
              : "sm:text-md block cursor-pointer text-sm focus:outline-none"
          }
          onClick={handleToggle}
        >
          {toggle ? (
            <HoverText text="LIGHT" width="70px" />
          ) : (
            <HoverText text="DARK" width="70px" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {menuToggle && (
          <motion.div
            variants={navbarVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed z-50 flex h-screen w-full origin-top flex-col items-center justify-center bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white"
          >
            <div className=" flex flex-col justify-items-center text-center">
              {/**Mapping through navLinks for the Links */}
              {navLinks.map((navLink, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    variants={navLinkVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="mt-5 text-3xl"
                  >
                    <a onClick={handleMenu} href={`#${navLink.path}`}>
                      {navLink.name}
                    </a>
                  </motion.h2>
                </div>
              ))}
            </div>

            <div className="mt-[100px] overflow-hidden">
              <motion.button
                variants={navLinkVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={handleMenu}
              >
                <HoverText text="CLOSE" width="80px" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
