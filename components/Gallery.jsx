import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/Modal";
import { FilterMenu } from "./FilterMenu";
import { projects } from "@/constants/Data";

const Gallery = () => {
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const projectData = projects;

    setFiltered(projectData);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="relative flex h-full  w-full flex-col  items-center"
      >
        <FilterMenu setActiveFilter={setActiveFilter} />

        <motion.div
          layout
          className="grid h-full w-full grid-cols-1 place-items-center gap-4 sm:h-[600px] sm:grid-cols-2 md:grid-cols-3"
        >
          {filtered.map((project, i) =>
            activeFilter === 0 || project.genre.includes(activeFilter) ? (
              <motion.div
                className="relative"
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.25,
                  layout: {
                    duration: 0.5,
                  },
                }}
                layoutId={i}
                key={i}
              >
                <motion.div className="overflow-hidden">
                  <Image
                    priority={true}
                    src={project.image}
                    height={1000}
                    width={1000}
                    alt="image"
                    className="cursor-pointer h-[200px] w-[270px] object-cover hover:scale-125 ease-in transition  md:h-[250px] md:w-[350px]"
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              </motion.div>
            ) : null
          )}
          <Modal
            modalOpen={modalOpen}
            modalClose={() => setModalOpen(false)}
            selectedProject={selectedProject}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Gallery;
