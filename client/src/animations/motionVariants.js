export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeOut" } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut" } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut" } },
};

export const zoomIn = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { ease: "easeOut" } },
};
