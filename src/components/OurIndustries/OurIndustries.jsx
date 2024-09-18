import React, { useEffect, useState, useRef, useCallback } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AnimatedHeading from "../reuseable_components/AnimatedHeading";

const OurIndustries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const textOptions = [
    "Transaction speed matters",
    "Operate outside of four walls",
    "Connectivity is not guaranteed",
  ];

  const industryVideos = [
    {
      id: 0,
      src: "/assets/industries/ship.mp4",
      alt: "Ship",
    },
    {
      id: 1,
      src: "/assets/industries/plane.mp4",
      alt: "plane",
    },
    {
      id: 2,
      src: "/assets/industries/train.mp4",
      alt: "train",
    },
  ];

  const startTransition = useCallback(
    (direction = "next") => {
      setIsAnimating(true);
      setFade(true);

      setTimeout(() => {
        if (direction === "next") {
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % industryVideos.length
          );
        } else {
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + industryVideos.length) % industryVideos.length
          );
        }
      }, 0);

      setTimeout(() => {
        setFade(false);
        setIsAnimating(false);
      }, 0);
    },
    [industryVideos.length]
  );

  const scheduleNextTransition = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => startTransition("next"), 4000);
  }, [startTransition]);

  useEffect(() => {
    scheduleNextTransition();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, scheduleNextTransition]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = industryVideos[currentIndex].src;
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((error) => console.error("Video play failed:", error));
    }
  }, [currentIndex, industryVideos]);

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    startTransition(direction);
    scheduleNextTransition();
  };

  return (
    <div className="container py-[85px] w-full">
      <div className="w-[1090px] mx-auto flex flex-col justify-center items-center mb-[84px] mt-[10px]">
        <AnimatedHeading
          textSize="text-[44px]"
          heightForBox="75px"
          firstText="Never miss a sale by using Acceptify, the platform built "
          secondText="for the most challenging mobile environments where "
          currentText={textOptions[currentIndex]}
        />
      </div>
      <div className="relative w-full h-[622px] rounded-2xl overflow-hidden">
        <button
          onClick={() => handleNavigation("prev")}
          disabled={isAnimating}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-300 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          <FaArrowLeft className="text-black text-2xl" />
        </button>
        <button
          onClick={() => handleNavigation("next")}
          disabled={isAnimating}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-300 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          <FaArrowRight className="text-black text-2xl" />
        </button>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover rounded-2xl transition-opacity duration-1500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default OurIndustries;
