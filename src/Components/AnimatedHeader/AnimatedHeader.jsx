import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";

const AnimatedHeader = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach((el, i) => {
      gsap.to(el, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        rotation: `random(-30, 30)`,
        opacity: `random(0.1, 0)`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });
  }, []);

  const shapes = Array.from({ length: 20 });

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {shapes.map((_, index) => {
        const size = Math.random() * 30 + 10;
        const shapeType = index % 5;

        return (
          <Box
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            sx={{
              position: "absolute",
              width: shapeType === 3 ? "2px" : `${size}px`,
              height: shapeType === 3 ? "50px" : `${size}px`,
              backgroundColor: shapeType === 4 ? "#00f" : "#CC2526",
              borderRadius:
                shapeType === 0 ? "50%" : shapeType === 1 ? "5px" : "0",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
          />
        );
      })}
    </Box>
  );
};

export default AnimatedHeader;
