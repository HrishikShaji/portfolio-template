import React from "react";
import { headerVariants, headingMotion } from "@/constants/constants";
import { motion } from "framer-motion";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="relative flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px] md:pb-[50px]"
    >
      <div className="relative w-full">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute top-[100px] text-left text-3xl sm:text-6xl"
        >
          TESTIMONIALS
        </motion.h1>
        <h1 className="text-3xl  text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT THEY SAY
        </h1>
      </div>
      <Slider />
    </div>
  );
};

export default Testimonials;
