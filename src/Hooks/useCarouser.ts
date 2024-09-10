import { useEffect, useState } from "react";
import { AdItem } from "../Components/Home";

export const useCarousel = (items: AdItem[], interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  return currentIndex;
};
