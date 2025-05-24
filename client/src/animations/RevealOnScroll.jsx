import { fadeInUp } from "@/animations/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function RevealOnScroll({
  children,
  variant = fadeInUp,
  delay = 1,
  duration = 1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variantWithDelayAndDuration = {
    ...variant,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible.transition,
        delay,
        duration,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variantWithDelayAndDuration}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}>
      {children}
    </motion.div>
  );
}

export default RevealOnScroll;
