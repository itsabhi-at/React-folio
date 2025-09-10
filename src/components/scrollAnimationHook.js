import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export const useScroll = () => {
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const threshold = isMobile ? 0.1 : 0.3;
  const rootMargin = isMobile ? "-5% 0px -5% 0px" : "-20% 0px -20% 0px";

  const [element, view] = useInView({
    threshold: threshold,
    rootMargin: rootMargin,
    triggerOnce: false,
  });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls, view];
};
