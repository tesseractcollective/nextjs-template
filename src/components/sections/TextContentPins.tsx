import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TextContentPins: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 500 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 250 }}
      animate={controls}
      transition={{ duration: 2 }}
    >
      <p>Your paragraph content here.</p>
    </motion.div>
  );
};

export default TextContentPins;
