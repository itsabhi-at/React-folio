export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const container = {
  hidden: {
    x: 150,
  },
  show: {
    x: 0,
    transition: { duration: 0.5, ease: "easeIn", staggerChildren: 0.25 },
  },
};
export const titleAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
