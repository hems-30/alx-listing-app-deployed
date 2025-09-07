import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label}) => { //Pill is a button with padding, gray background, rounded-full corners, and hover effect.Accepts a title prop to display inside the pill. Optional onClick prop for future filter handling
  return (
    <button
      className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm hover:bg-gray-300 transition"
      type="button">
      {label}
    </button>
  );
};

export default Pill;