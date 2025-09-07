import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
  >
    {children}
  </button>
);

export default Button;