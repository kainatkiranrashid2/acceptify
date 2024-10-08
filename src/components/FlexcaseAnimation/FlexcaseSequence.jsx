import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlexCaseAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textContainerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [debug, setDebug] = useState({
    loading: 0,
    error: null,
    lastRenderedFrame: 0,
  });

  const totalFrames = 450;
  const images = useRef([]);
  const chunkSize = 100;

  const preloadImageChunk = async (start, end) => {
    const chunk = Array.from({ length: end - start }, (_, i) => {
      const img = new Image();
      img.src = `/assets/render_images/${(start + i + 1)
        .toString()
        .padStart(4, "0")}.png`;
      return img;
    });

    await Promise.all(
      chunk.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = resolve;
          })
      )
    );

    images.current.splice(start, chunk.length, ...chunk);
    setDebug((prev) => ({ ...prev, loading: (end / totalFrames) * 100 }));
  };

  useEffect(() => {
    const loadAllChunks = async () => {
      try {
        for (let i = 0; i < totalFrames; i += chunkSize) {
          await preloadImageChunk(i, Math.min(i + chunkSize, totalFrames));
        }
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setDebug((prev) => ({ ...prev, error: error.message }));
      }
    };

    loadAllChunks();
  }, [totalFrames]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const textContainer = textContainerRef.current;

    canvas.width = images.current[0].width;
    canvas.height = images.current[0].height;

    gsap.set(textContainer, { opacity: 0, x: -50 });

    let lastFrameIndex = -1;
    const updateImage = (progress) => {
      const frameIndex = Math.min(
        Math.floor(progress * (totalFrames - 1)),
        totalFrames - 1
      );
      if (frameIndex !== lastFrameIndex) {
        setCurrentFrame(frameIndex);
        if (images.current[frameIndex]) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images.current[frameIndex], 0, 0);
          setDebug((prev) => ({ ...prev, lastRenderedFrame: frameIndex }));
        } else {
          console.error(`Image not found for frame ${frameIndex}`);
        }
        lastFrameIndex = frameIndex;
      }
    };

    let lastProgress = 0;
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",

      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const currentProgress = self.progress;
        if (Math.abs(currentProgress - lastProgress) > 0.001) {
          updateImage(currentProgress);
          lastProgress = currentProgress;
        }

        if (self.progress > 0.8) {
          gsap.to(textContainer, { opacity: 1, x: 0, duration: 2 });
        } else {
          gsap.to(textContainer, { opacity: 0, x: -50, duration: 2 });
        }
      },
    });

    updateImage(0);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [imagesLoaded, totalFrames]);

  if (!imagesLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <div>Loading... {debug.loading.toFixed(2)}%</div>
        {debug.error && (
          <div className="text-red-500">Error: {debug.error}</div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden relative">
      <div className="h-full w-full flex items-center justify-center relative">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-full object-contain"
        />
        <div
          ref={textContainerRef}
          className="absolute left-10 top-1/2 w-[500px] -translate-y-1/2 text-dark">
          <h2 className="text-3xl font-bold mb-4 font-PP_Mori">
            Simplify your PCI
          </h2>
          <p className="text-lg">
            No connection, no problem. Acceptify intelligently ensures that all
            your transactions are swift, secure, and trackable, whether your
            devices are online or offline.
          </p>
        </div>
        <div className="absolute bottom-4 right-4 text-sm">
          Frame: {currentFrame + 1} / {totalFrames} | Last Rendered:{" "}
          {debug.lastRenderedFrame + 1}
        </div>
      </div>
    </div>
  );
};

export default FlexCaseAnimation;
