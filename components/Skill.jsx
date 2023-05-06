import React from "react";
import { motion } from "framer-motion";

const Skill = ({ item, skillName, level }) => {
  return (
    <motion.div variants={item} className="flex flex-col justify-center">
      <h2 className="w-full text-sm sm:text-3xl">{skillName}</h2>
      <div className="relative mb-2 mt-5 h-2 w-full bg-ternary-white dark:bg-ternary-black">
        <div className="absolute w-full">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            style={{ width: `${level}%` }}
            className=" h-2  w-full origin-left rounded-r-md bg-primary-black dark:bg-primary-white"
          />
        </div>
      </div>
      <span>{level}%</span>
    </motion.div>
  );
};

export default Skill;
