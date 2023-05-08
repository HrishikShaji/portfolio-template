import React from "react";
import { useState } from "react"; // import the useState hook
import { useEffect } from "react"; // import the useEffect hook
import { HoverText } from "./HoverText"; // import a custom component called HoverText
import { AnimatePresence, motion } from "framer-motion"; // import components from the framer-motion library
import { navLinks } from "@/constants/Data"; // import an array of navigation links
import { navLinkVariants, navbarVariants } from "@/constants/constants"; // import variants for the framer-motion components

const Navbar = ({ onToggle, initialToggle }) => {
  const [menuToggle, setMenuToggle] = useState(false); // declare state for the menu toggle

  //Function to handle Navbar Menu
  const handleMenu = () => {
    setMenuToggle(!menuToggle); // toggle the menu state when this function is called
  };

  const [toggle, setToggle] = useState(initialToggle); // declare state for the dark mode toggle

  useEffect(() => {
    setToggle(initialToggle); // update the dark mode toggle when the initial toggle value changes
  }, [initialToggle]);

  const handleToggle = () => {
    const newToggle = !toggle; // toggle the dark mode state
    setToggle(newToggle);
    onToggle(newToggle); // call the onToggle prop function with the new state
    localStorage.setItem("toggle", JSON.stringify(newToggle)); // store the new state in local storage
  };

  return (
    <>
      <div className="fixed z-40 flex w-full items-center justify-evenly bg-primary-white py-3 text-primary-black dark:bg-primary-black dark:text-primary-white">
        {/* Button to toggle the menu */}
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
        {/* Button to navigate to the top of the page */}
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
        {/* Button to toggle dark mode */}
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
      {/* Animated menu */}
      <AnimatePresence>
        {menuToggle && (
          <motion.div
            variants={navbarVariants} // set the motion variants for the menu
            initial="hidden" // Setting initial animation state to "hidden"
            animate="show" // Setting animate state to "show"
            exit="exit" // Setting exit animation state to "exit"
            className="fixed z-50 flex h-screen w-full origin-top flex-col items-center justify-center bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white"
          >
            <div className=" flex flex-col justify-items-center text-center">
              {/**Mapping through navLinks for the Links */}
              {/* Map over the navigation links and create a link for each */}
              {navLinks.map((navLink, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    variants={navLinkVariants} // Using navLinkVariants for motion animation
                    initial="hidden" // Setting initial animation state to "hidden"
                    animate="show" // Setting animate state to "show"
                    exit="exit" // Setting exit animation state to "exit"
                    className="mt-5 text-3xl"
                  >
                    <a onClick={handleMenu} href={`#${navLink.path}`}>
                      {navLink.name}
                    </a>
                  </motion.h2>
                </div>
              ))}
            </div>

            {/* Button to exit the menu */}
            <div className="mt-[100px] overflow-hidden">
              <motion.button
                variants={navLinkVariants} // Using navLinkVariants for motion animation
                initial="hidden" // Setting initial animation state to "hidden"
                animate="show" // Setting animate state to "show"
                exit="exit" // Setting exit animation state to "exit"
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

// export the Navbar component as the default export of the module
export default Navbar;
