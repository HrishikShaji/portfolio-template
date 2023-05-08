import React, { useState } from "react";
import { motion } from "framer-motion";

// Define a functional component named HoverText which takes two props: text and width
export const HoverText = ({ text, width }) => {
  // Initialize state using useState hook to manage the hover state
  const [isHovered, setIsHovered] = useState(false);

  // Render the component
  return (
    // Set up event listeners to update the hover state
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      // Set the width of the component using the width prop
      className=" relative flex h-8 items-center justify-center overflow-hidden  font-bold"
      style={{ width: width }}
    >
      {/**Set up motion animations for the text */}
      <motion.div
        // Set the initial position of the top layer text
        initial={{ top: "0%" }}
        // Animate the top layer text on hover
        animate={{ top: isHovered ? "-100%" : "0%" }}
        // Set the transition properties for the top layer text animation
        transition={{
          duration: isHovered ? 0.3 : 0.5,
          ease: "easeInOut",
        }}
        // Set the styles for the top layer text
        className="pointer-events-none absolute   bg-primary-white    text-primary-black  dark:bg-primary-black dark:text-primary-white"
      >
        {text}
      </motion.div>
      {/**  Set up motion animations for the bottom layer text*/}
      <motion.div
        // Set the initial position of the bottom layer text
        initial={{ top: "100%" }}
        // Animate the bottom layer text on hover
        animate={{ top: isHovered ? "0%" : "100%" }}
        // Set the transition properties for the bottom layer text animation
        transition={{
          duration: isHovered ? 0.3 : 0.5,
          ease: "easeInOut",
        }}
        // Set the styles for the bottom layer text
        className="pointer-events-none absolute bg-primary-white text-primary-black  dark:bg-primary-black dark:text-primary-white"
      >
        {text}
      </motion.div>
    </div>
  );
};
