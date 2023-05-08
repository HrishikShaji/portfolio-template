import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { modalVariants } from "@/constants/constants";

// define a Modal component that receives three props:
// modalOpen (a boolean indicating if the modal is open),
// modalClose (a function that closes the modal), and
// selectedProject (an object representing the currently selected project)
const Modal = ({ modalOpen, modalClose, selectedProject }) => {
  return (
    <>
      <AnimatePresence>
        {/* if modalOpen is true, display a fixed, full-screen div 
            with a semi-transparent black background color */}
        {modalOpen ? (
          <div className="fixed inset-0 z-50 flex h-full  w-full items-center justify-center bg-primary-black/80 ">
            {/* display the modal container with a white background color, 
                relative positioning, and a 60% height and 70% width */}
            <div className="bg-white relative z-50  h-[60%] w-[70%]">
              {/* add a close button on the top-right corner of the modal
                  which calls modalClose function when clicked */}
              <button
                className="absolute top-[-30px] right-0 text-primary-white"
                onClick={() => modalClose(false)}
              >
                CLOSE
              </button>

              {/* if selectedProject is defined, display a motion div 
                  with modalVariants animations and full-height and 
                  full-width properties. */}
              {selectedProject && (
                <motion.div
                  variants={modalVariants} // Using modalVariants for motion animation
                  initial="hidden" // Setting initial animation state to "hidden"
                  animate="show" // Setting animate state to "show"
                  exit="exit" // Setting exit animation state to "exit"
                  className="h-full w-full"
                >
                  {/* display the image of the selected project using 
                      Next.js Image component with a 1000 height and 
                      width and object-cover style */}
                  <Image
                    src={selectedProject.image}
                    height={1000}
                    width={1000}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              )}
            </div>
          </div>
        ) : (
          // if modalOpen is false, display an empty fragment
          ""
        )}
      </AnimatePresence>
    </>
  );
};

// export the Modal component as the default export of the module
export default Modal;
