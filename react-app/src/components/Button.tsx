import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning"; //? means its optional to get a value
  // | | | -> only those are the valid ones
  onClick: () => void;
}
export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
