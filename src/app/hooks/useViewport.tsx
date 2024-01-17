import { useState } from "react";
import useWindowResize from "beautiful-react-hooks/useWindowResize";
import useThrottledCallback from "beautiful-react-hooks/useThrottledCallback";

const useViewport = () => {
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  const onWindowResize = useWindowResize();
  onWindowResize(
    useThrottledCallback((event) => {
      setWidth(window.innerWidth);
    })
  );

  const isSmallMobile = width < 576;
  const isMobile = width < 976;
  const isTablet = width < 1100;
  const isDesktop = width < 1200;
  const isMonitor = width < 1440;

  return { width, isMobile, isDesktop, isSmallMobile, isMonitor, isTablet };
};

export default useViewport;
