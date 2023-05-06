import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { modalVariants } from "@/constants/constants";

const Modal = ({ modalOpen, modalClose, selectedProject }) => {
  return (
    <>
      <AnimatePresence>
        {modalOpen ? (
          <div className="fixed inset-0 z-50 flex h-full  w-full items-center justify-center bg-primary-black/80 ">
            <div className="bg-white relative z-50  h-[60%] w-[70%]">
              <button
                className="absolute top-[-30px] right-0 text-primary-white"
                onClick={() => modalClose(false)}
              >
                CLOSE
              </button>

              {selectedProject && (
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="h-full w-full"
                >
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
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
