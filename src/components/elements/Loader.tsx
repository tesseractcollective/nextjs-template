import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Variants, motion, AnimatePresence } from "framer-motion";

type LoaderProps = {
  icon: string;
  minimal?: boolean;
};

const Loader: React.FC<LoaderProps> = ({ icon, minimal }) => {
  const barVariants = {
    initial: {
      scaleY: 0.5,
      opacity: 1,
    },
    animate: {
      scaleY: 1,
      opacity: 0,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  } as Variants;

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as Variants;

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Reduced to 3000ms to allow time for exit animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          {...{
            className: `flex flex-col items-center justify-center min-h-screen rounded-xl fixed z-[9999] top-0 left-0 right-0 bottom-0 w-full ${
              minimal ? "" : "bg-bg-secondary"
            }`,
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={containerVariants}
        >
          <div className="text-center mx-auto flex flex-col items-center gap-y-4">
            {!minimal && (
              <Image
                className="h-24 w-24 cursor-pointer object-contain mx-auto"
                src={icon}
                alt=""
                width={0}
                height={0}
                sizes="100%"
              />
            )}
            <motion.div
              transition={{
                staggerChildren: 0.25,
              }}
              {...{ className: "flex gap-1 justify-center" }}
            >
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={barVariants}
                  {...{ className: "h-12 w-2 bg-primary" }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
