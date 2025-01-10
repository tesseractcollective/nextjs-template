import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  // Define any props you want to pass to the icon component
}

const Icon: React.FC<IconProps> = (props) => {
  // Replace this with your icon component (e.g., FontAwesome, Material Icons, etc.)
  return (
    <FontAwesomeIcon
      icon={faStar as IconProp}
      className="fa-fw text-[gold] h-6 w-6"
    />
  );
};

interface IconListProps {
  number: number;
}

const StarCount: React.FC<IconListProps> = ({ number }) => {
  const icons = [];

  for (let i = 0; i < number; i++) {
    icons.push(<Icon key={i} />);
  }

  return <div className="flex flex-row">{icons}</div>;
};

export default StarCount;
