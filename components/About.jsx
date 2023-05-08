// Import the required modules and components
import { motion } from "framer-motion"; // Framer Motion library for animations
import {
  aboutImageVariants, // Variants for the image animation
  headerVariants, // Variants for the header animation
  paragraphVariants, // Variants for the paragraph animation
} from "@/constants/constants"; // Custom constants for animation durations and easing
import { images } from "@/public/assets/images"; // Image assets
import Image from "next/image"; // Image component from Next.js

// Define the About component
const About = () => {
  return (
    <div
      id="about"
      // Styling for the main container
      className="relative flex h-full w-full flex-col items-center justify-around bg-primary-white p-[50px] text-primary-black dark:bg-primary-black dark:text-primary-white md:p-[100px]"
    >
      <div className="relative w-full">
        {/* Header section */}
        <motion.h1
          variants={headerVariants} // Using headerVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="absolute top-[100px] text-left text-4xl sm:text-6xl"
        >
          ABOUT
        </motion.h1>
        {/* Sub-header section */}
        <h1 className="text-3xl  text-secondary-white dark:text-secondary-black sm:text-9xl">
          WHO AM I REALLY
        </h1>
      </div>

      {/* Image and paragraph section */}
      <div className="mt-[100px] flex flex-col items-center justify-between md:flex-row">
        {/* Animated image */}
        <motion.div className="relative mb-10 h-[300px] w-full origin-bottom overflow-hidden sm:h-[500px] md:mb-0  md:h-[500px] md:w-[50%]">
          <Image
            src={images.person9}
            height={1000}
            width={1000}
            alt="image"
            priority={true}
            className="absolute h-full w-full object-cover"
          />
          {/* Overlay for the image animation */}
          <motion.div
            variants={aboutImageVariants} // Using aboutImageVariants for motion animation
            initial="hidden" // Setting initial animation state to "hidden"
            whileInView="show" // Animating when section is in view
            viewport={{ once: true }} // Triggering animation only once
            className="absolute top-0 left-0 z-10 h-full w-full origin-bottom bg-primary-white dark:bg-primary-black"
          />
        </motion.div>
        {/* Paragraph */}
        <motion.p
          variants={paragraphVariants} // Using paragraphVariants for motion animation
          initial="hidden" // Setting initial animation state to "hidden"
          whileInView="show" // Animating when section is in view
          viewport={{ once: true }} // Triggering animation only once
          className="w-full text-center text-sm sm:text-2xl md:ml-10 md:w-[50%] md:text-left"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum
        </motion.p>
      </div>
    </div>
  );
};

// Export the About component
export default About;
