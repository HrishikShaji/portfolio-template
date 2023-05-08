import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import {
  headerVariants,
  staggerItems,
  staggerVariants,
} from "@/constants/constants";
import { skillNames } from "@/constants/Data";

const Skills = () => {
  return (
    // Container for the Skills section with classes for styling
    <div
      id="skills"
      className="flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      <div className="relative w-full ">
        {/* Heading with Framer Motion animation */}
        <motion.h1
          variants={headerVariants} // Using headerVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="absolute top-[100px] text-left text-4xl sm:text-6xl"
        >
          SKILLS
        </motion.h1>
        {/* Subheading */}
        <h1 className="text-3xl text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT CAN I DO
        </h1>
      </div>
      {/* Container for the Skills */}
      <motion.div
        variants={staggerVariants} // Using staggerVariants for motion animation
        initial="hidden" // Setting initial animation state to "hidden"
        whileInView="show" // Animating when section is in view
        viewport={{ once: true }} // Triggering animation only once
        className="mt-[100px] grid grid-cols-2 gap-4  sm:grid-cols-3 sm:gap-10 md:grid-cols-5"
      >
        {/**Mapping through the skillNames array to create a Skill component for each skill */}
        {skillNames.map((skillName, i) => (
          <Skill
            key={i}
            skillName={skillName.name}
            level={skillName.level}
            item={staggerItems}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Export the Skills component as the default export of this module
export default Skills;
