import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const SectionHeading = ({ mainText }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2.33 1"],
  });
  return (
    <motion.div
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="container mb-[54px] sm:mb-[68px]  md:mb-[61px] lg:mb-[76px] letter tracking-tight mx-auto flex justify-center items-center font-bold ">
      <div className="relative inline-block mx-auto">
        <p className=" -tracking-2 text-[26px]/[32.5px] sm:text-[30px]/[34px] md:text-[37px]/[46.25px] lg:text-[47px]/[58.75px] xl:text-[52px]/[65px] 2xl:text-[55px]/[68.75px] font-PP_Mori text-dark text-center">
          {mainText}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
SectionHeading.propTypes = {
  mainText: PropTypes.string.isRequired,
};
