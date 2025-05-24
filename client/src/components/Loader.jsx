import { motion } from "framer-motion";

const glowColor = `
  drop-shadow(0 0 8px rgba(173, 216, 230, 1))
  drop-shadow(0 0 12px rgba(173, 216, 230, 0.8))
  drop-shadow(0 0 16px rgba(173, 216, 230, 0.6))
`;

const Loader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="226px"
    height="114px"
    viewBox="-25 -25 250 150"
    preserveAspectRatio="xMidYMid meet"
    {...props}>
    {/* Blue */}
    <motion.path
      d="M124.36 22.33h50.32v50.32h-50.32v-50.32"
      style={{
        fill: "none",
        stroke: "#004b92",
        strokeWidth: "14.4px",
        strokeLinecap: "square",
      }}
      transform="rotate(45 150.858 44.837)"
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />

    {/* Blue's Glow */}
    <motion.path
      d="M124.36 22.33h50.32v50.32h-50.32v-50.32"
      style={{
        fill: "none",
        stroke: "#004b92",
        strokeWidth: 16,
        strokeLinecap: "square",
        strokeLinejoin: "square",
        filter: glowColor,
      }}
      transform="rotate(45 150.858 44.837)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 2,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />

    {/* Blue's White Stroke */}
    <motion.path
      d="m149.52 93.25-45.77-45.76 45.77-45.76 45.76 45.76Zm-25.4-45.76 25.4 25.4 25.4-25.4-25.4-25.4Z"
      style={{
        fill: "none",
        stroke: "#fff",
      }}
      transform="translate(-1.49 -1.73)"
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        delay: 2,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />

    {/* Green */}
    <motion.path
      d="M22.09 22.33h50.32v50.32h-50.32z"
      style={{
        fill: "none",
        stroke: "#008b45",
        strokeWidth: "14.4px",
        strokeLinecap: "square",
      }}
      transform="rotate(45 48.592 44.827)"
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />

    {/* Green's Glow */}
    <motion.path
      d="M22.09 22.33h50.32v50.32h-50.32z"
      style={{
        fill: "none",
        stroke: "#008b45",
        strokeWidth: 16,
        strokeLinecap: "square",
        strokeLinejoin: "square",
        filter: glowColor,
      }}
      transform="rotate(45 48.592 44.827)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 2,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />

    {/* Green's White Stroke */}
    <motion.path
      d="M47.25 93.25 1.49 47.49 47.25 1.73 93 47.49Zm-25.4-45.76 25.4 25.4 25.4-25.4-25.4-25.4Z"
      style={{
        fill: "none",
        stroke: "#fff",
      }}
      transform="translate(-1.49 -1.73)"
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        delay: 2,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />

    {/* Gray Bottom */}
    <motion.path
      d="m127.43 40.68 5.05 5.08L96.9 81.34 76.26 60.75"
      style={{
        fill: "none",
        stroke: "#a3a4a6",
        strokeWidth: "14.4px",
      }}
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />

    {/* Gray Top */}
    <motion.path
      d="m66.25 50.7-4.93-4.94L96.9 10.18l20.48 20.49"
      style={{
        fill: "none",
        stroke: "#a3a4a6",
        strokeWidth: "14.4px",
      }}
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />

    {/* Gray's Glow */}
    <motion.path
      d="M117.38 30.67 96.9 10.18 61.32 45.76l4.93 4.94 10.01 10.05L96.9 81.34l35.58-35.58-5.05-5.08-10.05-10.01z"
      style={{
        fill: "none",
        stroke: "#a3a4a6",
        strokeWidth: 16,
        strokeLinecap: "square",
        strokeLinejoin: "square",
        filter: glowColor,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 2,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />

    {/* Gray's White Stroke */}
    <motion.path
      d="M98.39 93 52.9 47.49 98.38 2l45.47 45.5ZM72.7 47.49l10 10 15.68 15.69 25.7-25.71-.13-.13-25.57-25.53Z"
      style={{
        fill: "none",
        stroke: "#fff",
      }}
      transform="translate(-1.49 -1.73)"
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        delay: 2,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  </svg>
);
export default Loader;
