import React from "react";

interface FixedSideLinkProps {
  fixedSideLink: {
    text: string;
    link: string;
    hoverText?: string;
  };
}

export default function FixedSideLink({ fixedSideLink }: FixedSideLinkProps) {
  return (
    <div className="fixed right-[-90px] top-[60%] -translate-y-1/2 z-[750] transform -rotate-90">
      <a
        href={fixedSideLink.link}
        className="relative flex items-center transition-all duration-300 text-text-color !m-0 text-lg uppercase tracking-widest px-6 bg-[#000000b0] hover:bg-primary border-primarary border-x border-t pt-2 pb-7 whitespace-nowrap group font-bold"
      >
        <span className="relative z-[750]">{fixedSideLink.text}</span>
        <span className="absolute group-hover:opacity-100 opacity-0 bg-bg group-hover:-top-[6rem] top-[20rem] rotate-90 px-4 transition-all z-[700]">
          {fixedSideLink.hoverText}
        </span>
      </a>
    </div>
  );
}
