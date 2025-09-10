import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({
    threshold: 0.2,
    rootMargin: "-10% 0px -10% 0px",
  });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls, view];
};
