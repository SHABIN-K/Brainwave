import React, { FC } from 'react';
import brackets from "@/public/assets/svg/Brackets";

interface TagLineProps {
  className?: string;
  children: React.ReactNode;
}

const TagLine: FC<TagLineProps> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;