import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ImageCarouselProps } from "../interfaces/props";

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (images.length > 1) {
      const intervalId = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(false);
        }, 300);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [images.length]);

  return (
    <Box
      component="img"
      src={images[currentIndex]}
      alt={`Image ${currentIndex + 1}`}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
        borderRadius: "8px",
        boxShadow: "0px 0px 15px 1px var(--shadow-light)",
        opacity: fade ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    />
  );
};

export default ImageCarousel;
