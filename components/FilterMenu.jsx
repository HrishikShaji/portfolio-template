import React, { useState } from "react"; // Importing necessary modules and components
import { motion } from "framer-motion";
import { HoverText } from "./HoverText";

const menuItems = ["ALL", "RECENT", "TOP"]; // An array of menu items to be displayed

export const FilterMenu = ({ setActiveFilter }) => {
  const [selected, setSelected] = useState(0); // Initializing state for the selected menu item
  const setActive = (index) => {
    setActiveFilter(index); // Set the active filter to the index of the selected menu item
    setSelected(index); // Set the selected menu item to the index of the selected menu item
    // Do something with the active filter, like filter a list of items
  };
  return (
    <div className="mt-[100px] grid h-full w-full place-items-center ">
      <div className="flex justify-evenly">
        {menuItems.map((name, i) => (
          <MenuItem
            key={i} // Set a unique key for each MenuItem
            text={name} // Set the text for the MenuItem
            selected={selected === i} // Set whether the MenuItem is selected or not based on its index
            onClick={() => setActive(i)} // Set the onClick event for the MenuItem
          />
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({ text, selected, onClick }) => (
  <motion.button
    className="relative my-4 sm:m-4 focus:outline-none" // Set the className for the button
    onClick={onClick} // Set the onClick event for the button
    animate={{ opacity: selected ? 1 : 0.5 }} // Set the animation for the button
  >
    <HoverText text={text} width="90px" />{" "}
    {/**Render the HoverText component
    with the text for the MenuItem */}
    {selected && ( // If the MenuItem is selected, render a div for the underline effect
      <motion.div
        className="absolute top-[100%] left-0 h-1 w-full bg-primary-black opacity-80 dark:bg-primary-white"
        layoutId="underline" // Set the layoutId for the div to animate it when switching between pages
      />
    )}
  </motion.button>
);
