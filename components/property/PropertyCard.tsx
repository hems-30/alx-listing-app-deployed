import React from "react";
import Image from "next/image";

export interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <div className="bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
    <div className="relative w-full h-60">
      <Image src={property.image} alt={property.name} fill className="object-cover" priority />
    </div>
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold truncate">{property.name}</h3>
      <p className="text-indigo-600 font-bold">${property.price}</p>
      <div className="flex items-center gap-1 text-yellow-500">
        <span>⭐</span>
        <span className="text-sm text-gray-700">{property.rating}</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;