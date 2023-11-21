import React from "react";

interface ButtonProps {
  name: string;
}

export const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="rounded py-2 px-4 hover:bg-[#47854c] font-thin bg-[#28762d] transition-all">
      {name}
    </button>
  );
};
