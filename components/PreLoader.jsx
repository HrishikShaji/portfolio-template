import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProgessBar from "./ProgessBar";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // simulate loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 1.5, delay: 4 }}
      className="relative flex h-screen w-full origin-left flex-col items-center justify-center bg-primary-black dark:bg-primary-white"
    >
      <AnimatePresence>
        {loading && (
          <div className="absolute flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -900 }}
              transition={{ duration: 1 }}
              className="text-4xl text-primary-white mix-blend-difference"
            >
              LOADING
            </motion.h1>
            <ProgessBar />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PreLoader;
