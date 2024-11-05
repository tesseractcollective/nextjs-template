import React from "react";

type BulletsSectionProps = {
  bullets: string[];
};

const BulletsSection: React.FC<BulletsSectionProps> = ({ bullets }) => {
  if (bullets.length === 0) {
    return null;
  }

  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto px-4 max-w-8xl w-full">
      {bullets.map((bullet, index) => (
        <div
          key={index}
          className="bg-bg rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-text-color text-center">{bullet}</p>
        </div>
      ))}
    </div>
  );
};

export default BulletsSection;
