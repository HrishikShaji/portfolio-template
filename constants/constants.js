//Headings motion properties
export const headerVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

//Hero motion prooperties
export const staggerHeroText = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const heroItems = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export const heroBarVariants = {
  hidden: {
    scaleX: 0,
  },
  show: {
    scaleX: 1,
    transition: {
      duration: 1.5,
      delay: 3,
    },
  },
};

export const heroImageVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 3,
    },
  },
};

export const heroTextVariants = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      delay: 3.5,
    },
  },
};

export const heroText2Variants = {
  hidden: {
    x: 70,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 4.5,
    },
  },
};

//paragraph motion properties
export const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

//staggering motion properties
export const staggerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItems = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 14 },
  },
};

//about image motion properties
export const aboutImageVariants = {
  hidden: {
    scaleY: 1,
  },
  show: {
    scaleY: 0,
    transition: {
      duration: 1,
    },
  },
};

//modal motion properties
export const modalVariants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: 200,
    opacity: 0,
  },
};

//navbar motion variants

export const navLinkVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const navbarVariants = {
  hidden: {
    scaleY: 0,
  },
  show: {
    scaleY: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 1,
    },
  },
};
