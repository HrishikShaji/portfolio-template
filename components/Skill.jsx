// Import React and the "motion" component from Framer Motion library
import React from "react";
import { motion } from "framer-motion";

// Define the "Skill" component, which takes in "item", "skillName", and "level" as props
const Skill = ({ item, skillName, level }) => {
  // Render the component
  return (
    // Wrap the component with a "motion" component from Framer Motion library and pass "item" prop to it for animation
    <motion.div variants={item} className="flex flex-col justify-center">
      {/* Render the skill name as a heading */}
      <h2 className="w-full text-sm sm:text-3xl">{skillName}</h2>
      {/* Render a bar that represents the skill level */}
      <div className="relative mb-2 mt-5 h-2 w-full bg-ternary-white dark:bg-ternary-black">
        <div className="absolute w-full">
          {/* Wrap the bar with another "motion" component and set its initial scale to 0 */}
          <motion.div
            initial={{ scaleX: 0 }}
            // Set the scale to 1 when the bar is in view
            whileInView={{ scaleX: 1 }}
            // Set the transition duration to 2 seconds
            transition={{ duration: 2 }}
            // Only trigger the animation once
            viewport={{ once: true }}
            // Set the width of the bar based on the skill level passed in as a prop
            style={{ width: `${level}%` }}
            // Apply styling to the bar
            className=" h-2  w-full origin-left rounded-r-md bg-primary-black dark:bg-primary-white"
          />
        </div>
      </div>
      {/* Render the skill level percentage */}
      <span>{level}%</span>
    </motion.div>
  );
};

// Export the "Skill" component as the default export of this module
export default Skill;
