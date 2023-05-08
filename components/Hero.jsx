import React from "react";
import { motion } from "framer-motion";
import { HoverText } from "./HoverText";
import { images } from "@/public/assets/images";
import Image from "next/image";
import {
  staggerHeroText,
  heroItems,
  heroBarVariants,
  heroImageVariants,
  heroTextVariants,
  heroText2Variants,
} from "@/constants/constants";

const Hero = () => {
  // words array containing the strings to be animated in staggered fashion
  const words = [
    { word: "HELLO THERE,".split("") },
    { word: "I'M ANAKIN,".split("") },
    { word: "I'M A WEB DEVELOPER.".split("") },
  ];

  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center  justify-center bg-primary-white dark:bg-primary-black md:items-start "
    >
      {/* animated div used as background bar */}
      <motion.div
        variants={heroBarVariants} // Using heroBarVariants for motion animation
        initial="hidden" // Setting initial animation state to "hidden"
        animate="show" // Setting  animate state to "show"
        className="absolute h-[10%] w-full  origin-right bg-primary-white mix-blend-difference  md:h-[17%]"
      />

      {/* animated div used to display profile picture */}
      <motion.div
        variants={heroImageVariants} // Using heroImageVariants for motion animation
        initial="hidden" // Setting initial animation state to "hidden"
        animate="show" // Setting  animate state to "show"
        className="absolute top-[100px]  h-[130px] w-[130px] rounded-full sm:top-[150px] sm:h-[250px] sm:w-[250px] md:top-[220px] md:right-[120px] md:h-[300px] md:w-[300px]  "
      >
        <Image
          src={images.person9}
          height={1000}
          width={1000}
          alt="image"
          className="h-full w-full rounded-full border-4 object-cover "
        />
      </motion.div>

      {/* div used to display the animated strings */}
      <motion.div
        className="absolute  flex flex-col md:ml-7"
        variants={staggerHeroText} // Using staggerHeroText for motion animation
        initial="initial" // Setting initial animation state to "hidden"
        animate="animate" // Setting animate state to "animate"
      >
        {/* mapping over each string and animating them */}
        {words.map((word, i) => (
          <motion.h1
            key={i}
            className={`inline-flex font-bold text-primary-white mix-blend-difference   ${
              i === 1
                ? "z-30 text-4xl sm:text-6xl md:text-8xl "
                : "text-xl sm:text-4xl md:text-6xl"
            }`}
          >
            {/* mapping over each letter of the string and animating them */}
            {word.word.map((letter, j) => (
              <div
                key={j}
                className="my-3 inline-block overflow-hidden sm:my-5 md:my-2"
              >
                <motion.h1
                  key={j}
                  variants={heroItems} // Using heroItems for motion animation
                  className="inline-block overflow-hidden"
                >
                  {/* creating a non-breaking space for empty spaces in the string */}
                  {letter === " " ? "\u00A0" : letter}
                </motion.h1>
              </div>
            ))}
          </motion.h1>
        ))}
      </motion.div>

      {/* div used to display contact section */}
      <div className="absolute bottom-[15%] flex flex-col items-center justify-center  px-10 sm:bottom-[20%] md:bottom-[10%] md:left-[38%] md:flex">
        <div className="overflow-hidden text-primary-black dark:text-primary-white">
          <motion.h1
            variants={heroTextVariants} // Using heroTextVariants for motion animation
            initial="hidden" // Setting initial animation state to "hidden"
            animate="show" // Setting animate state to "show"
            className="sm:text-md text-xs"
          >
            HAVE ANY PROJECT ON YOUR MIND?
          </motion.h1>
        </div>
        <motion.h1
          variants={heroText2Variants} // Using heroText2Variants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          animate="show" // Setting animate state to "show"
          className="mx-5 mt-5 flex origin-right bg-primary-white text-xl font-bold text-primary-white dark:bg-primary-black sm:mt-0 "
        >
          <a href="#contact">
            <HoverText text="CONTACT ME" width="200px" />
          </a>
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
