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
    <div
      id="skills"
      className="flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      <div className="relative w-full ">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute top-[100px] text-left text-4xl sm:text-6xl"
        >
          SKILLS
        </motion.h1>
        <h1 className="text-3xl text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT CAN I DO
        </h1>
      </div>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-[100px] grid grid-cols-2 gap-4  sm:grid-cols-3 sm:gap-10 md:grid-cols-5"
      >
        {/**mapping through the skillNames for each Skill */}
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

export default Skills;
