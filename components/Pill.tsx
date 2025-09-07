import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm hover:bg-gray-300 transition"
  >
    {label}
  </button>
);

export default Pill;