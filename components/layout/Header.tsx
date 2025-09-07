import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md"> {/* Container for the top navigation bar, styled with Tailwind CSS classes for spacing, color, and shadow.*/}
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        MyLogo
      </div>

      {/* Types of accommodation */}
      <nav className="flex space-x-6 font-medium text-gray-700"> {/* Hidden on small screens (hidden md:flex).*/}
        <a href="#" className="hover:text-blue-600">Rooms</a>
        <a href="#" className="hover:text-blue-600">Mansion</a>
        <a href="#" className="hover:text-blue-600">Countryside</a>
        <a href="#" className="hover:text-blue-600">Villa</a>
      </nav>

      {/* Search Bar */}
      <div className="flex flex-1 mx-4 max-w-md">
        <input // Input field with a Search button styled side by side, focused with blue ring on input focus.
          type="text"
          placeholder="Search properties"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Sign In / Sign Up */}
      <div className="space-x-4">
        <button className="text-gray-700 hover:text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;