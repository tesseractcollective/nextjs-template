import { useEffect } from "react";

const BodyClassManager = ({ classes = "" }) => {
  useEffect(() => {
    // Only proceed if classes is defined and not empty
    if (classes) {
      // Split classes string into array and add each class
      const classArray = classes.split(" ");
      classArray.forEach((className) => {
        document.body.classList.add(className);
      });

      // Cleanup function to remove classes when component unmounts
      return () => {
        classArray.forEach((className) => {
          document.body.classList.remove(className);
        });
      };
    }
  }, [classes]); // Re-run effect if classes prop changes

  return null; // This component doesn't render anything
};

export default BodyClassManager;
