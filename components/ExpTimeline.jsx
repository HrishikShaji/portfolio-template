import React from "react";
import { motion } from "framer-motion";
import {
  educationContainer,
  educationItem,
  staggerItems,
  staggerVariants,
} from "@/constants/constants";
import { expTimelineData } from "@/constants/Data";

const ExpTimeline = () => {
  return (
    <section className="mt-[100px] h-full md:px-[100px] ">
      <div className="z-100 relative m-auto ml-[40px] flex max-w-[1000px] flex-wrap before:absolute before:top-1 before:left-[-30px] before:h-[99%] before:w-1 before:items-center before:bg-primary-black before:content-['']  dark:before:bg-primary-white ">
        {expTimelineData.map((data, i) => (
          <div key={i} className="mb-[40px]  w-[100%] ">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-[-40px] z-30 h-[25px]  w-[25px] rounded-full bg-primary-black dark:bg-primary-white"
            ></motion.div>
            <span className="mx-2 ">{data.year}</span>
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={staggerItems}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {data.role}
              </motion.h2>
              <motion.h3
                variants={staggerItems}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="py-2 text-2xl"
              >
                {data.company}
              </motion.h3>
              <motion.p
                variants={staggerItems}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {data.desc}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpTimeline;
