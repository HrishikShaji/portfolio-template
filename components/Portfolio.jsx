import React, { useState } from "react";
import { motion } from "framer-motion";
import { headerVariants, headingMotion } from "@/constants/constants";
import Gallery from "./Gallery";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
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
          PORTFOLIO
        </motion.h1>
        <h1 className="text-3xl text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT HAVE I DONE
        </h1>
      </div>
      <Gallery />
    </div>
  );
};

export default Portfolio;
