import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { HoverText } from "./HoverText";

const menuItems = ["ALL", "RECENT", "TOP"];

export const FilterMenu = ({ setActiveFilter }) => {
  const [selected, setSelected] = useState(0);
  const setActive = (index) => {
    setActiveFilter(index);
    setSelected(index);
    // Do something with the active filter, like filter a list of items
    console.log(`Active filter is now: ${index}`);
  };
  return (
    <div className="mt-[100px] grid h-full w-full place-items-center ">
      <div className="flex justify-evenly">
        {menuItems.map((name, i) => (
          <MenuItem
            key={i}
            text={name}
            selected={selected === i}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({ text, selected, onClick }) => (
  <motion.button
    className="relative my-4 sm:m-4 focus:outline-none"
    onClick={onClick}
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    <HoverText text={text} width="90px" />
    {selected && (
      <motion.div
        className="absolute top-[100%] left-0 h-1 w-full bg-primary-black opacity-80 dark:bg-primary-white"
        layoutId="underline"
      />
    )}
  </motion.button>
);
