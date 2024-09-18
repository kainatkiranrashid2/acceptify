import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

const stagger = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AnimatedText = ({ text, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      style={{ lineHeight: "30px" }}>
      {text.split(/\s+/).map((word, i) => (
        <motion.span key={i} variants={stagger}>
          {word}
          {i < text.split(/\s+/).length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.p>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default AnimatedText;
