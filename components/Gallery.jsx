import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/Modal";
import { FilterMenu } from "./FilterMenu";
import { projects } from "@/constants/Data";
import { useState } from "react";
import { layoutVariants } from "@/constants/constants";

const Gallery = () => {
  // State variables for filtering, modal and selected project
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Handler function for clicking a project
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Fetch project data on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Function to fetch project data
  const fetchProjects = async () => {
    const projectData = projects;

    setFiltered(projectData);
  };

  // Gallery component with animations
  return (
    <AnimatePresence>
      <div className="relative flex h-full  w-full flex-col  items-center">
        {/* FilterMenu component for filtering projects */}
        <FilterMenu setActiveFilter={setActiveFilter} />

        {/* Grid of projects */}
        <motion.div
          layout
          className="grid h-full w-full grid-cols-1 place-items-center gap-4 sm:h-[600px] sm:grid-cols-2 md:grid-cols-3"
        >
          {/* Maps through filtered projects and displays them */}
          {filtered.map((project, i) =>
            activeFilter === 0 || project.genre.includes(activeFilter) ? (
              <motion.div
                className="relative"
                layout
                variants={layoutVariants} // Using headerVariants for motion animation
                initial="hidden" // Setting initial animation state to "hidden"
                animate="show" // Animating when section is in view
                exit="exit" // Setting exit animation state to "exit"
                layoutId={i}
                key={i}
              >
                {/* Image component for displaying project thumbnail */}
                <div className="overflow-hidden">
                  <Image
                    priority={true}
                    src={project.image}
                    height={1000}
                    width={1000}
                    alt="image"
                    className="cursor-pointer h-[200px] w-[270px] object-cover hover:scale-125 ease-in transition  md:h-[250px] md:w-[350px]"
                    onClick={() => handleProjectClick(project)}
                  />
                </div>
              </motion.div>
            ) : null
          )}
          {/* Modal component for displaying a selected project */}
          <Modal
            modalOpen={modalOpen}
            modalClose={() => setModalOpen(false)}
            selectedProject={selectedProject}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Export the Gallery component as the default export
export default Gallery;
