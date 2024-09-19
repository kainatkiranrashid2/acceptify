import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Item 1",
    description: "Description for item 1...",
    image: "/assets/whylsa/lock_svg.svg",
  },
  {
    title: "Item 2",
    description: "Description for item 2...",
    image: "/assets/whylsa/no_wifi_svg.svg",
  },
  {
    title: "Item 3",
    description: "Description for item 3...",
    image: "/assets/whylsa/online_svg.svg",
  },
  {
    title: "Item 4",
    description: "Description for item 3...",
    image: "/assets/whylsa/no_wifi_svg.svg",
  },
  // Add more items as needed
];
const ScrollAnimationComponent = () => {
  const componentRef = useRef(null);
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const component = componentRef.current;
    const sections = sectionsRef.current;
    const images = imagesRef.current;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pin the component
      ScrollTrigger.create({
        trigger: component,
        start: "top top",
        end: "bottom bottom",
        pin: ".image-container",
      });

      // Animate sections and images
      sections.forEach((section, index) => {
        const image = images[index];
        const nextImage = images[index + 1];

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(image, { opacity: 1, duration: 0.5 });
            if (index > 0) {
              gsap.to(images[index - 1], { opacity: 0, duration: 0.5 });
            }
          },
          onEnterBack: () => {
            gsap.to(image, { opacity: 1, duration: 0.5 });
            if (nextImage) {
              gsap.to(nextImage, { opacity: 0, duration: 0.5 });
            }
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={componentRef} className="relative">
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
        <div className="w-1/2 image-container">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {items.map((item, index) => (
              <img
                key={index}
                ref={(el) => (imagesRef.current[index] = el)}
                src={item.image}
                alt={item.title}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto object-cover opacity-0"
                style={{ opacity: index === 0 ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
