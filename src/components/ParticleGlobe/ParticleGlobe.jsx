import { useEffect, useRef, useState } from "react";

export default function ParticleGlobe() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 1000; i++) {
        const radius = 200;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;

        particles.push({
          x: radius * Math.sin(theta) * Math.cos(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(theta),
          originalX: radius * Math.sin(theta) * Math.cos(phi),
          originalY: radius * Math.sin(theta) * Math.sin(phi),
          originalZ: radius * Math.cos(theta),
          color: Math.random() > 0.5 ? "#5786F5" : "#FFA500",
        });
      }
    };

    // Animation function
    let angle = 0;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      angle += 0.005;

      particles.forEach((particle) => {
        // Rotate particles
        const x =
          particle.originalX * Math.cos(angle) -
          particle.originalZ * Math.sin(angle);
        const z =
          particle.originalX * Math.sin(angle) +
          particle.originalZ * Math.cos(angle);
        particle.x = x;
        particle.z = z;

        // Project 3D coordinates to 2D
        const scale = 800 / (800 + particle.z);
        const x2d = particle.x * scale + canvas.width / 2;
        const y2d = particle.y * scale + canvas.height / 2;

        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, scale * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    createParticles();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: Math.min(window.innerWidth, 600),
        height: Math.min(window.innerWidth, 600),
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="max-w-full max-h-full"
      />
    </div>
  );
}
