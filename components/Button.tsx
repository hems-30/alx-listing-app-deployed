interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
      {children}
    </button>
  );
}