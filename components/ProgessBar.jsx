import React from "react";
import { motion } from "framer-motion";

const ProgessBar = () => {
  return (
    <div className=" z-10">
      <figure className=" stroke-primary-white mix-blend-difference dark:stroke-primary-black">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
            exit={{ opacity: 0 }}
            cx="50"
            cy="50"
            r="20"
            className="fill-none stroke-[5px] "
            style={{
              strokeDashoffset: 0,
              rotate: "-90deg",
              transformOrigin: "center",
            }}
          />
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            cx="50"
            cy="50"
            r="10"
            className=" stroke-primary-white stroke-[3px] mix-blend-difference  dark:stroke-primary-black"
          />
        </svg>
      </figure>
    </div>
  );
};

export default ProgessBar;
