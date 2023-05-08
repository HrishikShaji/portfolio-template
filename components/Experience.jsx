// Importing necessary modules and components
import React from "react";
import { motion } from "framer-motion";
import { headerVariants, headingMotion } from "@/constants/constants";
import ExpTimeline from "./ExpTimeline";

// Defining Experience component
const Experience = () => {
  return (
    // Section container with background color, padding, and text color styling
    <div
      id="experience"
      className="flex h-full w-full flex-col items-center justify-around bg-primary-white   p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      {/* Section header with motion animation */}
      <div className="relative w-full ">
        <motion.h1
          variants={headerVariants} // Using headerVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="absolute top-[100px]  text-left text-4xl sm:text-6xl"
        >
          EXPERIENCE
        </motion.h1>
        <h1 className="text-3xl text-secondary-white dark:text-secondary-black sm:text-9xl">
          FOR HOW LONG
        </h1>
      </div>

      {/* ExpTimeline component */}
      <ExpTimeline />
    </div>
  );
};

// Exporting Experience component
export default Experience;
