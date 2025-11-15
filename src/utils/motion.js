// ⭐ Default constants (micro-optimizations)
const SPRING = { type: "spring" };
const TWEEN = { type: "tween" };
const EASE_OUT = "easeOut";

export const textVariant = (delay = 0) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ...SPRING,
      duration: 1.25,
      delay,
    },
  },
});

// ⭐ Reduced branching + optimized transitions
export const fadeIn = (
  direction = "",
  type = "tween",
  delay = 0,
  duration = 0.5
) => {
  const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return {
    hidden: { x, y, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: EASE_OUT,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ...TWEEN,
      delay,
      duration,
      ease: EASE_OUT,
    },
  },
});

// ⭐ Removed repeated condition logic
export const slideIn = (
  direction = "",
  type = "tween",
  delay = 0,
  duration = 0.5
) => {
  const x = direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
  const y =
    direction === "up" ? "100%" : direction === "down" ? "100%" : 0;

  return {
    hidden: { x, y },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: EASE_OUT,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
