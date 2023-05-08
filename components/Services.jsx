import React from "react";
import {
  headerVariants,
  staggerItems,
  staggerVariants,
} from "@/constants/constants";
import { motion } from "framer-motion";
import { serviceTiles } from "@/constants/Data";

const Services = () => {
  return (
    <div
      id="services"
      className="relative flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      {/**Header for the services section */}
      <div className="relative w-full">
        <motion.h1
          variants={headerVariants} // Using headerVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="absolute top-[100px] text-left text-4xl sm:text-6xl"
        >
          SERVICES
        </motion.h1>
        <h1 className="text-3xl  text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT AM I GOOD AT
        </h1>
      </div>

      {/**Section displaying the service tiles */}
      <motion.div
        variants={staggerVariants} // Using staggerVariants for motion animation
        initial="hidden" // Setting initial animation state to "hidden"
        whileInView="show" // Animating when section is in view
        viewport={{ once: true }} // Triggering animation only once
        className="mt-[100px] grid w-full grid-cols-1 items-center justify-center gap-4 sm:px-10 md:grid-cols-3"
      >
        {/**Mapping through the servicesTiles for individual serviceTile */}
        {serviceTiles.map((serviceTile, i) => (
          <motion.div
            key={i}
            variants={staggerItems} // Using staggerItems for motion animation
            className="flex h-full w-full  flex-col items-center  justify-center rounded-md px-10 text-center "
          >
            <h2 className="my-3">{serviceTile.service}</h2>
            <p>{serviceTile.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// export the Services component as the default export of the module
export default Services;
