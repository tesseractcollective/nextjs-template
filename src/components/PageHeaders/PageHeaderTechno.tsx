import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Custom hook for device detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

interface PageHeaderProps {
  pageHeaderTitleProp?: string;
  pageHeaderSubtitleProp?: string;
  pageHeaderImageProp?: string;
}

// Mobile version component
const MobileHeader: React.FC<PageHeaderProps> = ({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderImageProp,
}) => (
  <div className="relative w-full min-h-screen bg-black">
    <div className="relative w-full h-64">
      {pageHeaderImageProp && (
        <Image
          src={pageHeaderImageProp}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      )}
    </div>
    <div className="relative px-4 py-8">
      {pageHeaderTitleProp && (
        <h1 className="text-3xl font-bold text-white mb-4">
          {pageHeaderTitleProp}
        </h1>
      )}
      {pageHeaderSubtitleProp && (
        <h2 className="text-lg font-medium text-white/80">
          {pageHeaderSubtitleProp}
        </h2>
      )}
    </div>
  </div>
);

// Desktop version component
const DesktopHeader: React.FC<PageHeaderProps> = ({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderImageProp,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  const variants = {
    initial: {
      width: "100vw",
      height: "100vh",
      x: 0,
      y: 0,
      right: 0,
      top: 0,
      zIndex: 20,
    },
    animate: {
      width: "64rem",
      height: "36rem",
      x: 0,
      y: "-50%",
      right: 0,
      top: "50%",
      zIndex: 5,
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 flex flex-col justify-center px-8 lg:w-1/2 z-10"
        initial="initial"
        animate={shouldAnimate ? "animate" : "initial"}
        variants={textVariants}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {pageHeaderTitleProp && (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {pageHeaderTitleProp}
          </h1>
        )}
        {pageHeaderSubtitleProp && (
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-white/80">
            {pageHeaderSubtitleProp}
          </h2>
        )}
      </motion.div>

      <AnimatePresence>
        {pageHeaderImageProp && (
          <motion.div
            className="absolute"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={variants}
            transition={{
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
              type: "tween",
            }}
          >
            <Image
              src={pageHeaderImageProp}
              alt="Header Image"
              layout="fill"
              objectFit="cover"
              priority
              className={`transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main component that switches between mobile and desktop
export default function PageHeaderTechno(props: PageHeaderProps) {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHeader {...props} /> : <DesktopHeader {...props} />;
}
