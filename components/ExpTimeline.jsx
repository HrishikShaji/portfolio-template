// Import necessary dependencies and data
import React from "react";
import { motion } from "framer-motion"; // a library for adding animation to components
import {
  bulletVariants,
  staggerItems,
  staggerVariants,
} from "@/constants/constants"; // some constants used for animation
import { expTimelineData } from "@/constants/Data"; // data for experience timeline

// Define a component called ExpTimeline
const ExpTimeline = () => {
  return (
    <section className="mt-[100px] h-full md:px-[100px] ">
      {/* Set up a timeline layout */}
      <div className="z-100 relative m-auto ml-[40px] flex max-w-[1000px] flex-wrap before:absolute before:top-1 before:left-[-30px] before:h-[99%] before:w-1 before:items-center before:bg-primary-black before:content-['']  dark:before:bg-primary-white ">
        {/* Iterate over the experience timeline data and render a component for each */}
        {expTimelineData.map((data, i) => (
          <div key={i} className="mb-[40px]  w-[100%] ">
            {/* Render a circle as a timeline marker */}
            <motion.div
              variants={bulletVariants} // Using bulletVariants for motion animation
              initial="hidden" // Setting initial animation state to "hidden"
              whileInView="show" // Animating when section is in view
              viewport={{ once: true }} // Triggering animation only once
              className="absolute left-[-40px] z-30 h-[25px]  w-[25px] rounded-full bg-primary-black dark:bg-primary-white"
            ></motion.div>
            {/* Render the year */}
            <span className="mx-2 ">{data.year}</span>
            {/* Add animation to the role, company, and description */}
            <motion.div
              variants={staggerVariants} // Using staggerVariants for motion animation
              initial="hidden" // Setting initial animation state to "hidden"
              whileInView="show" // Animating when section is in view
              viewport={{ once: true }} // Triggering animation only once
            >
              <motion.h2
                variants={staggerItems} // Using staggerItems for motion animation
                initial="hidden" // Setting initial animation state to "hidden"
                whileInView="show" // Animating when section is in view
                viewport={{ once: true }} // Triggering animation only once
              >
                {data.role}
              </motion.h2>
              <motion.h3
                variants={staggerItems} // Using staggerItems for motion animation
                initial="hidden" // Setting initial animation state to "hidden"
                whileInView="show" // Animating when section is in view
                viewport={{ once: true }} // Triggering animation only once
                className="py-2 text-2xl"
              >
                {data.company}
              </motion.h3>
              <motion.p
                variants={staggerItems} // Using staggerItems for motion animation
                initial="hidden" // Setting initial animation state to "hidden"
                whileInView="show" // Animating when section is in view
                viewport={{ once: true }} // Triggering animation only once
              >
                {data.desc}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the ExpTimeline component
export default ExpTimeline;
