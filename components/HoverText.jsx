import React, { useState } from "react";
import { motion } from "framer-motion";

export const HoverText = ({ text, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className=" relative flex h-8 items-center justify-center overflow-hidden  font-bold"
      style={{ width: width }}
    >
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: isHovered ? "-100%" : "0%" }}
        transition={{
          duration: isHovered ? 0.3 : 0.5,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute   bg-primary-white    text-primary-black  dark:bg-primary-black dark:text-primary-white"
      >
        {text}
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bg-primary-white text-primary-black  dark:bg-primary-black dark:text-primary-white"
        initial={{ top: "100%" }}
        animate={{ top: isHovered ? "0%" : "100%" }}
        transition={{
          duration: isHovered ? 0.3 : 0.5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};
