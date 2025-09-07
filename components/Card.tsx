import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="border rounded-lg p-4 shadow-sm">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Card;