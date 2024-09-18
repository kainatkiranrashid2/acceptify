import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedHeading = ({
  firstText,
  secondText,
  currentText,
  headingSize,
  heightForBox,
}) => {
  return (
    <motion.div
      className={`w-full text-center  text-${headingSize} font-PP_Mori z-0 md:z-10 box-border text-wrap font-bold overflow-hidden gap-3 flex flex-col flex-wrap justify-center items-center`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <motion.span
        className={`text-${headingSize} text-black dark:text-white mr-2`}>
        {firstText}
      </motion.span>
      <div className="flex ">
        <motion.span
          className={`text-${headingSize} text-black dark:text-white mr-2`}>
          {secondText}
        </motion.span>

        <motion.div
          key={currentText}
          className={`text-${headingSize} rounded-2xl h-[${heightForBox}]  bg-primary font-PP_Mori text-nowrap overflow-hidden text-white border-4 border-[#65D008] inline-flex items-center justify-center`}
          style={{ lineHeight: "85px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          <motion.p
            className={`text-${headingSize} inline-block h-full   my-0 px-6 font-PP_Mori`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}>
            {currentText}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedHeading;

AnimatedHeading.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  currentText: PropTypes.string.isRequired,
  headingSize: PropTypes.string.isRequired,
  heightForBox: PropTypes.string.isRequired,
};
