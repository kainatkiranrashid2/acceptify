import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Simplify Your PCI",
    description:
      "No connection, no problem. Acceptify intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.",
    videos: [
      "/assets/scroll_animation/flexcase.webm",
      "/assets/scroll_animation/shield.webm",
    ],
  },
  {
    title: "Online/Offline",
    description:
      "No connection, no problem. Acceptify intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.",
    videos: ["/assets/scroll_animation/phone.webm"],
  },
  {
    title: "Enterprise Processing",
    description:
      "No connection, no problem. Acceptify intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.",
    videos: ["/assets/scroll_animation/battery.webm"],
  },
];

const ScrollAnimationComponent = () => {
  const componentRef = useRef(null);
  const sectionsRef = useRef([]);
  const videosRef = useRef([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const component = componentRef.current;
    const sections = sectionsRef.current;

    // Preload all videos
    items.forEach((item, itemIndex) => {
      item.videos.forEach((videoSrc, videoIndex) => {
        const video = videosRef.current[itemIndex][videoIndex];
        video.load();
      });
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pin the component
      ScrollTrigger.create({
        trigger: component,
        start: "top top",
        end: "bottom bottom",
        pin: ".video-container",

        anticipatePin: 1,
      });

      // Animate sections and videos
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            setCurrentItemIndex(index);
            setCurrentVideoIndex(0);
          },
          onEnterBack: () => {
            setCurrentItemIndex(index);
            setCurrentVideoIndex(items[index].videos.length - 1);
          },
        });

        // For the first item, create an additional trigger for the second video
        if (index === 0 && items[0].videos.length > 1) {
          ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            end: "bottom 50%",
            onUpdate: (self) => {
              const progress = self.progress;
              setCurrentVideoIndex(progress < 0.65 ? 0 : 1);
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  useEffect(() => {
    videosRef.current.forEach((videoArray, itemIndex) => {
      videoArray.forEach((video, videoIndex) => {
        if (
          itemIndex === currentItemIndex &&
          videoIndex === currentVideoIndex
        ) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    });
  }, [currentItemIndex, currentVideoIndex]);

  return (
    <div ref={componentRef} className="container  relative">
      <div className="flex">
        <div className="w-1/2 pl-8 pr-4">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="min-h-screen flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 video-container">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="absolute top-0 left-0 w-full h-full">
                {item.videos.map((videoSrc, videoIndex) => (
                  <video
                    key={`${itemIndex}-${videoIndex}`}
                    ref={(el) => {
                      if (!videosRef.current[itemIndex]) {
                        videosRef.current[itemIndex] = [];
                      }
                      videosRef.current[itemIndex][videoIndex] = el;
                    }}
                    src={videoSrc}
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full aspect-video object-contain transition-opacity duration-900 ease-in-out"
                    style={{
                      opacity:
                        itemIndex === currentItemIndex &&
                        videoIndex === currentVideoIndex
                          ? 1
                          : 0,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
