import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProgessBar from "./ProgessBar";
import { loaderVariants } from "@/constants/constants";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Animate the loader with scaleX from 1 to 0
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 1.5, delay: 4 }}
      className="relative flex h-screen w-full origin-left flex-col items-center justify-center bg-primary-black dark:bg-primary-white"
    >
      <AnimatePresence>
        {/* Show the loader when `loading` is true */}
        {loading && (
          <div className="absolute flex items-center justify-center">
            {/* Animate the text with opacity and x position */}
            <motion.h1
              variants={loaderVariants} // Using loaderVariants for motion animation
              initial="hidden" // Setting initial animation state to "hidden"
              animate="show" // Setting animate state to "show"
              exit="exit" // Setting exit animation state to "exit"
              className="text-4xl text-primary-white mix-blend-difference"
            >
              LOADING
            </motion.h1>
            {/* Render the progress bar component */}
            <ProgessBar />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// export the PreLoader component as the default export of the module
export default PreLoader;
