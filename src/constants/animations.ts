export const basicAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (delayIndex: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "Inertia",
      delay: 0.1 * delayIndex,
    },
  }),
};

export const basicInView = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "Inertia",
      delay: 0.2,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delayIndex: number) => ({
    opacity: 1,
    transition: { duration: 0.3, type: "Inertia", delay: 0.1 * delayIndex },
  }),
};

export const heroTransition = (delayIndex: number) => ({
  duration: 0.4,
  type: "Inertia",
  delay: 0.1 * delayIndex,
  repeat: Infinity,
  repeatDelay: 2,
});
