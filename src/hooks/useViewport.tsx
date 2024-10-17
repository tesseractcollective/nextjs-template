import { useState, useEffect } from "react";
import useWindowResize from "beautiful-react-hooks/useWindowResize";
import useThrottledCallback from "beautiful-react-hooks/useThrottledCallback";

const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallMobile = width < 576;
  const isMobile = width < 992;
  const isDesktop = width >= 1200;

  return { width, isMobile, isDesktop, isSmallMobile };
};

export default useViewport;
