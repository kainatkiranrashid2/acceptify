import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedHeading from "../reuseable_components/AnimatedHeading";
import AnimatedText from "../reuseable_components/AnimatedText";

const Hero = () => {
  const [currentText, setCurrentText] = useState("On The Land");

  useEffect(() => {
    const interval = setInterval(() => {
      const textOptions = ["On The Land", "At Sea", "In The Air"];
      setCurrentText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textOptions.length;
        return textOptions[nextIndex];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto px-0 text-center mt-[56px] sm:mt-[114px] md:mt-[87px] lg:mt[60px] xl:mt-[50px] ">
      <div className="container">
        <div className="z-0 md:z-10 w-[281px] sm:w-[466px]  md:w-[545px] lg:w-[954px] mx-auto items-center">
          <AnimatedHeading
            textSize="text-[26px]/[32.5px] sm:text-[38px]/[47.5px] md:text-[47px]/[59px] lg:text-[59px]/[74px] xl:text-[66px]/[83px] 2xl:text-[69px]/[86px]"
            heightForBox="85px"
            firstText="Take payments anytime,"
            secondText="anywhere"
            currentText={currentText}
          />

          <AnimatedText
            className=" text-[15px]/[24.5px] sm:text-[17px]/[28px]  lg:text-[18px]/[29.7px] font-medium w-[271px] sm:sm-[513px] md:w-[598px]  lg:w-[662px] font-PP_Mori text-dark dark:text-white mt-[14px] sm:mt-[20px] md:mt-[27px] lg:mt[30px]  max-w-2xl mx-auto"
            text="Acceptify enables your applications to accept easily worldwide, secure, certified, online/offline payments while removing all of your security concerns."
          />
        </div>
      </div>
      <div className="relative isolate w-[100%] px-0">
        <div className="relative isolate">
          {/* <CloudScene className="absolute dark:hidden w-full max-w-6xl left-[25%]  z-20" /> */}
          <img
            src="/assets/cloud.png"
            className="absolute hidden lg:block dark:hidden w-30 max-w-6xl top-4 left-[55%]  z-20"
          />
          <video
            src="/assets/hero/half_globe.webm"
            alt="Global map"
            className="w-full hidden md:block	 lg:z-20 *  max-w-full mx-auto relative"
            autoPlay
            playsInline
            loop
            muted
          />
          <video
            src="/assets/hero/mobile_half_globe.webm"
            alt="Global map"
            className="w-full  md:hidden	 :z-20  max-w-full mx-auto relative"
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
