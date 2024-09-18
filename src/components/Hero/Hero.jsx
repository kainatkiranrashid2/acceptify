import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedHeading from "../reuseable_components/AnimatedHeading";
import AnimatedText from "../reuseable_components/AnimatedText";

const Hero = () => {
  const [currentText, setCurrentText] = useState("On The Land");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const textOptions = ["On The Land", "At Sea", "In The Air"];
  //     setCurrentText((prevText) => {
  //       const currentIndex = textOptions.indexOf(prevText);
  //       const nextIndex = (currentIndex + 1) % textOptions.length;
  //       return textOptions[nextIndex];
  //     });
  //   }, 2500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="mx-auto px-0 text-center mb-5 mt-[150px]">
      <div className="container">
        <div className="z-0 md:z-10 w-[954px] mx-auto items-center">
          <AnimatedHeading
            textSize="text-[69px]/[86px]"
            heightForBox="85px"
            py=""
            firstText="Take payments anytime,"
            secondText="anywhere"
            currentText={currentText}
          />

          <AnimatedText
            className="text-body w-[662px] font-PP_Mori text-dark dark:text-white mt-[27px] max-w-2xl mx-auto"
            text="Acceptify enables your applications to accept worldwide, secure, certified, online/offline payments while removing all of your security concerns."
          />
        </div>
      </div>
      <div className="relative isolate w-[100%] px-0">
        <div className="relative isolate">
          {/* <CloudScene className="absolute dark:hidden w-full max-w-6xl left-[25%]  z-20" /> */}
          <img
            src="/assets/cloud.png"
            className="absolute dark:hidden w-30 max-w-6xl top-4 left-[55%]  z-20"
          />
          <motion.video
            src="/assets/hero/half_globe.webm"
            alt="Global map"
            className="w-full z-20 max-w-full mx-auto relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
