// Importing React and motion from framer-motion library
import React from "react";
import { motion } from "framer-motion";

// Importing headerVariants from constants file and EduTimeline component
import { headerVariants } from "@/constants/constants";
import EduTimeline from "./EduTimeline";

// Defining Education component
const Education = () => {
  return (
    // Education section container with background color, padding, and text color styling
    <div
      id="education"
      className="flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      {/* Section header with motion animation */}
      <div className="relative w-full ">
        <motion.h1
          variants={headerVariants} // Using headerVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="absolute top-[100px] text-left text-4xl sm:text-6xl"
        >
          EDUCATION
        </motion.h1>
        <h1 className="text-3xl text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT DID I STUDY
        </h1>
      </div>

      {/* EduTimeline component */}
      <EduTimeline />
    </div>
  );
};

// Exporting Education component
export default Education;
