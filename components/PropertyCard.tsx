import React from "react";
import Image from "next/image";
import { PropertyCardProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  image,
  price,
  rating,
}) => {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
      {/* Property Image */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Property Details */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-indigo-600 font-bold">{price}</p>
        <div className="flex items-center gap-1 text-yellow-500">
          <span>⭐</span>
          <span className="text-sm text-gray-700">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;