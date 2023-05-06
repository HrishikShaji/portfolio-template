import React from "react";
import { motion } from "framer-motion";
import { educationContainer, educationItem } from "@/constants/constants";
import { timelineData } from "@/constants/Data";
import { staggerVariants, staggerItems } from "@/constants/constants";

const EduTimeline = () => {
  return (
    <section className=" mt-[100px] h-full md:px-[100px] ">
      <div className="z-100 relative m-auto ml-[40px] flex max-w-[1000px] flex-wrap before:absolute before:top-1 before:left-[-30px] before:h-[99%] before:w-1 before:items-center before:bg-primary-black before:content-['']  dark:before:bg-primary-white md:before:left-[calc(50%_-_1px)] ">
        {timelineData.map((data, i) => (
          <div
            key={i}
            className="mb-[40px] w-[100%] last:mb-0 md:odd:pr-[calc(50%_+_30px)] md:odd:text-right md:even:pl-[calc(50%_+_30px)]  md:even:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-[-40px] z-30 h-[25px] w-[25px] rounded-full bg-primary-black dark:bg-primary-white md:left-[calc(50%_-_11.25px)]"
            ></motion.div>
            <span className="mx-[6px] mb-[15px]">{data.year}</span>
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
                className="mt-2"
              >
                {data.course}
              </motion.h2>
              <motion.h3
                variants={staggerItems}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-2xl"
              >
                {data.institute}
              </motion.h3>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EduTimeline;
