import React from "react";
import {
  headerVariants,
  headingMotion,
  staggerItems,
  staggerVariants,
} from "@/constants/constants";
import { motion } from "framer-motion";
import { servicesContainer, servicesItem } from "@/constants/constants";
import { serviceTiles } from "@/constants/Data";

const Services = () => {
  return (
    <div
      id="services"
      className="relative flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      <div className="relative w-full">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute top-[100px] text-left text-4xl sm:text-6xl"
        >
          SERVICES
        </motion.h1>
        <h1 className="text-3xl  text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHAT AM I GOOD AT
        </h1>
      </div>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-[100px] grid w-full grid-cols-1 items-center justify-center gap-4 sm:px-10 md:grid-cols-3"
      >
        {/**Mapping through the servicesTiles for individual serviceTile */}
        {serviceTiles.map((serviceTile, i) => (
          <motion.div
            key={i}
            variants={staggerItems}
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

export default Services;
