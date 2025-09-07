import { PropertyCardProps } from "@/interfaces";
import Image from "next/image";

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, image, price, rating } = property;

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="mt-2 text-gray-700">${price}/night</p>
        <p className="mt-1 text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;