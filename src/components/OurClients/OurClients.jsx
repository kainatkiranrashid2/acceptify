import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const useResponsiveVisibleLogos = () => {
  const [visibleLogos, setVisibleLogos] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleLogos(6); // xl
      else if (width >= 1024) setVisibleLogos(6); // lg
      else if (width >= 768) setVisibleLogos(5); // md
      else if (width >= 640) setVisibleLogos(4); // sm
      else setVisibleLogos(3); // xs
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleLogos;
};

const OurClients = ({ classText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const visibleLogos = useResponsiveVisibleLogos();

  const logos = [
    "/assets/hero/1.png",
    "/assets/hero/2.png",
    "/assets/hero/3.png",
    " /assets/hero/4.png",
    " /assets/hero/5.png",
    " /assets/hero/6.png",
    " /assets/hero/7.png",
    " /assets/hero/8.png",
    " /assets/hero/9.png",
    " /assets/hero/10.png",
    " /assets/hero/11.png",
    " /assets/hero/12.png",
    " /assets/hero/13.png",
    " /assets/hero/14.png",
    " /assets/hero/15.png",
    " /assets/hero/16.png",
    " /assets/hero/17.png",
    " /assets/hero/18.png",
    " /assets/hero/19.png",
    " /assets/hero/20.png",
    " /assets/hero/21.png",
    " /assets/hero/22.png",
    " /assets/hero/23.png",
    " /assets/hero/24.png",
    " /assets/hero/25.png",
    " /assets/hero/26.png",
    " /assets/hero/27.png",
  ];

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  const nextSlide = useCallback(() => {
    if (!isPaused) {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }
  }, [logos.length, isPaused]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + logos.length) % logos.length
    );
    setIsPaused(true);

    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set a new timer to unpause after 2 seconds
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  useEffect(() => {
    const autoPlayTimer = setInterval(nextSlide, 2000);
    return () => {
      // setIsPaused(true);
      clearInterval(autoPlayTimer);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [nextSlide]);

  const getVisibleLogos = () => {
    const visibleLogosArray = [];
    for (let i = 0; i < visibleLogos; i++) {
      const index = (currentIndex + i + logos.length) % logos.length;
      visibleLogosArray.push(logos[index]);
    }
    return visibleLogosArray;
  };

  return (
    <div className="relative isolate   h-[59px] lg:!h-[148px]  bg-white  py-5 lg:py-10 w-full  overflow-hidden">
      <AnimatePresence initial={false} className="!h-[52px]">
        <motion.div
          key={currentIndex}
          className="absolute  inset-0 flex justify-evenly items-center"
          custom={direction}
          variants={{
            enter: (direction) => ({
              x:
                direction > 0
                  ? `${100 / visibleLogos}%`
                  : `-${100 / visibleLogos}%`,
            }),
            center: { x: 0 },
            exit: (direction) => ({
              x:
                direction > 0
                  ? `-${100 / visibleLogos}%`
                  : `${100 / visibleLogos}%`,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeOut" }}>
          {getVisibleLogos().map((logo, index) => (
            <motion.div
              key={index}
              className=" flex  justify-center items-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className={`h-[20px] lg:h-full object-contain ${classText}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="absolute left-0 top-1/2 h-full w-16 hidden lg:block">
        <button
          onClick={prevSlide}
          className=" transform -translate-y-1/2 flex bg-white justify-center h-20 items-center p-5 z-10">
          <FaArrowLeft size={32} className="text-gray-300" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 h-full w-16 hidden lg:block">
        <button
          onClick={nextSlide}
          className="transform -translate-y-1/2  bg-white flex justify-center h-20 items-center p-5 z-10">
          <FaArrowRight size={32} className="text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default OurClients;
OurClients.propTypes = {
  classText: PropTypes.string,
};
