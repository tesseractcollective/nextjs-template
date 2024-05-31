import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

type LoaderProps = {
  icon: string;
};

const Loader: React.FC<LoaderProps> = ({ icon }) => {
  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 1, // Set initial opacity to 1
    },
    animate: {
      scaleY: 1,
      opacity: 0, // Set opacity to 0 after 2.5s
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  } as Variants;

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500); // Set timeout for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return <></>; // Return an empty fragment when not visible
  }

  return (
    <div className="flex items-center justify-center h-100vh bg-bg-secondary rounded-xl sticky z-[9999] top-0 opacity-100">
      <p className="text-center mx-auto gap-y-4">
        <Image
          className="h-10 w-full cursor-pointer object-contain relative mx-auto mb-2"
          src={icon}
          alt=""
          width={0}
          height={0}
          sizes="100%"
        />
        <motion.div
          transition={{
            staggerChildren: 0.25,
          }}
          initial="initial"
          animate="animate"
          className="flex gap-1"
        >
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
          <motion.div variants={variants} className="h-12 w-2 bg-primary" />
        </motion.div>
      </p>
    </div>
  );
};

export default Loader;
