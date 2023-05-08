import React from "react";
import { headerVariants } from "@/constants/constants"; // Importing animation constants
import { motion } from "framer-motion"; // Importing the motion component from Framer Motion
import Slider from "./Slider"; // Importing the Slider component

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="relative flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px] md:pb-[50px]"
    >
      <div className="relative w-full">
        {/* The heading is animated using Framer Motion */}
        <motion.h1
          variants={headerVariants} // Using headerVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="absolute top-[100px] text-left text-3xl sm:text-6xl"
        >
          TESTIMONIALS
        </motion.h1>
        <h1 className="text-3xl  text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT THEY SAY
        </h1>
      </div>
      {/* The Slider component displays the testimonials */}
      <Slider />
    </div>
  );
};

// Export the Testimoials component as the default export of this module
export default Testimonials;
