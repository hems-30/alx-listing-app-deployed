import Image from "next/image";
import { PropertyCardProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, image, price, rating } = property; // destructure from property

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-600">${price}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;