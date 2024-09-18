import { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AnimatedHeading from "../reuseable_components/AnimatedHeading";

const OurIndustries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const videoRef = useRef(null);

  const textOptions = [
    "Transaction speed matters",
    "Scalability to exceptionally high transaction volumes is needed",
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

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + industryVideos.length) % industryVideos.length
      );
    }, 500);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industryVideos.length);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = industryVideos[currentIndex].src;
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => {
          setFade(false);
        })
        .catch((error) => console.error("Video play failed:", error));
    }
  }, [currentIndex]);

  return (
    <div className="container py-[85px] w-full">
      <div className="w-[1090px] mx-auto flex flex-col justify-center items-center mb-[84px] mt-[10px]">
        <AnimatedHeading
          headingSize="h3"
          heightForBox="75px"
          firstText="Never miss a sale by using Acceptify, the platform built "
          secondText="for the most challenging mobile environments where "
          currentText={textOptions[currentIndex]}
        />
      </div>
      <div className="relative w-full h-[622px] rounded-2xl overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-300">
          <FaArrowLeft className="text-black text-2xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-300">
          <FaArrowRight className="text-black text-2xl" />
        </button>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default OurIndustries;
