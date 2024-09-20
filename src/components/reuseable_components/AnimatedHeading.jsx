import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedHeading = ({
  firstText,
  secondText,
  currentText,
  textSize,
  heightForBox,
}) => {
  return (
    <motion.div
      className={`w-full text-center  ${textSize} font-PP_Mori !py-0 z-0 md:z-10 box-border text-wrap font-bold overflow-hidden gap-3 flex  flex-wrap justify-center items-center`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <motion.span
        className={` text-black dark:text-white `}
        style={{ letterSpacing: "-2px" }}>
        {firstText}
      </motion.span>

      <motion.span
        className={` text-black dark:text-white `}
        style={{ letterSpacing: "-2px" }}>
        {secondText}
      </motion.span>

      <motion.span
        key={currentText}
        className={` rounded-2xl !h-[${heightForBox}] pt-2    bg-primary font-PP_Mori text-nowrap overflow-hidden text-white  border-[#65D008] inline-flex items-center justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <motion.p
          className={` inline-block h-full    !my-0 px-3 lg:px-6 font-PP_Mori`}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          style={{ letterSpacing: "-2px" }}
          transition={{ duration: 2 }}>
          {currentText}
        </motion.p>
      </motion.span>
    </motion.div>
  );
};

export default AnimatedHeading;

AnimatedHeading.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  currentText: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  heightForBox: PropTypes.string.isRequired,
};
