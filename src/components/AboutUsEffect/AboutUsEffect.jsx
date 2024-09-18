import React, { useState, useEffect, useRef } from "react";

const sections = [
  {
    title: "Section 1",
    content: "Content for section 1...",
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Section 2",
    content: "Content for section 2...",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  },
  {
    title: "Section 3",
    content: "Content for section 3...",
    image:
      "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
  },
];

const AboutUsEffect = () => {
  const [activeImage, setActiveImage] = useState(0);
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust to detect the middle of the viewport

      let currentSection = 0;
      sectionRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = index;
          }
        }
      });
      setActiveImage(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">
      {/* Left side: Scrolling text */}
      <div className="w-1/2 overflow-y-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={sectionRefs.current[index]}
            className="section min-h-screen flex flex-col justify-center p-5">
            <h2 className="text-4xl font-bold">{section.title}</h2>
            <p className="mt-4">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Right side: Sticky image container */}
      <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {sections.map((section, index) => (
            <img
              key={index}
              src={section.image}
              alt={`Image ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
                index === activeImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsEffect;
