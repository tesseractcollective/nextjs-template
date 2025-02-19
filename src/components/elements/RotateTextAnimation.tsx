import React from "react";

interface RotatingCircleProps {
  text: string;
}

const RotatingCircle: React.FC<RotatingCircleProps> = ({ text }) => {
  const repeatedText = `${text}`.repeat(3);

  return (
    <div className="flex justify-center items-center h-100vh w-full">
      <div className="relative w-[80vw] md:w-[50vw] aspect-square">
        <div className="relative w-full h-full">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-[spin_30s_linear_infinite]"
          >
            <defs>
              <path
                id="circle"
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                fill="none"
              />
            </defs>
            <text className="text-[4px] md:text-[4px] uppercase tracking-[0.3em] fill-primary text-primary font-bold">
              <textPath href="#circle" className="fill-inherit">
                {repeatedText}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;
