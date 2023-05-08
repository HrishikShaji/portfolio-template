// Importing React and motion from framer-motion library
import React from "react";
import { motion } from "framer-motion";

// Importing timelineData and motion animation variants from constants files
import { timelineData } from "@/constants/Data";
import {
  staggerVariants,
  staggerItems,
  bulletVariants,
} from "@/constants/constants";

// Defining the EduTimeline component
const EduTimeline = () => {
  return (
    // Section container with margin and padding styling
    <section className="mt-[100px] h-full md:px-[100px]">
      {/* Timeline container with absolute positioning */}
      <div className="z-100 relative m-auto ml-[40px] flex max-w-[1000px] flex-wrap before:absolute before:top-1 before:left-[-30px] before:h-[99%] before:w-1 before:items-center before:bg-primary-black before:content-[''] dark:before:bg-primary-white md:before:left-[calc(50%_-_1px)]">
        {/* Mapping through timelineData array and rendering each timeline item */}
        {timelineData.map((data, i) => (
          <div
            key={i}
            className="mb-[40px] w-[100%] last:mb-0 md:odd:pr-[calc(50%_+_30px)] md:odd:text-right md:even:pl-[calc(50%_+_30px)] md:even:text-left"
          >
            {/* Timeline bullet point with motion animation */}
            <motion.div
              variants={bulletVariants} // Using bulletVariants for motion animation
              initial="hidden" // Setting initial animation state to "hidden"
              whileInView="show" // Animating when section is in view
              viewport={{ once: true }} // Triggering animation only once
              className="absolute left-[-40px] z-30 h-[25px] w-[25px] rounded-full bg-primary-black dark:bg-primary-white md:left-[calc(50%_-_11.25px)]"
            ></motion.div>
            {/* Year of the timeline item */}
            <span className="mx-[6px] mb-[15px]">{data.year}</span>
            {/* Course and institute names of the timeline item with motion animation */}
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
                className="mt-2"
              >
                {data.course}
              </motion.h2>
              <motion.h3
                variants={staggerItems} // Using staggerItems for motion animation
                initial="hidden" // Setting initial animation state to "hidden"
                whileInView="show" // Animating when section is in view
                viewport={{ once: true }} // Triggering animation only once
                className="text-2xl"
              >
                {data.institute}
              </motion.h3>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Exporting the EduTimeline component
export default EduTimeline;
