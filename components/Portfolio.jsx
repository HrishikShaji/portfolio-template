import React from "react";
import { motion } from "framer-motion";
import { headerVariants } from "@/constants/constants";
import Gallery from "./Gallery";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      {/*
        The following section displays the heading for the Portfolio section.
        It uses framer-motion to animate the heading and headerVariants
        contains the animation properties.
      */}
      <div className="relative w-full ">
        <motion.h1
          variants={headerVariants} // Using headerVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="absolute top-[100px] text-left text-4xl sm:text-6xl"
        >
          PORTFOLIO
        </motion.h1>
        <h1 className="text-3xl text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT HAVE I DONE
        </h1>
      </div>
      {/*
        The Gallery component is rendered to display the portfolio items.
      */}
      <Gallery />
    </div>
  );
};

// export the Portfolio component as the default export of the module
export default Portfolio;
