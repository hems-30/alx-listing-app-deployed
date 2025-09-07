// pages/property/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/lib/api";
import { PropertyProps } from "@/interfaces";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      try {
        const response = await api.get<PropertyProps>(`/properties/${id}`);
        setProperty(response.data);
      } catch (err: unknown) {
        if (err instanceof Error) console.error(err.message);
        setError("Failed to fetch property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">{property.name}</h1>

      <div className="relative w-full h-80 mt-4">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="mt-2 text-lg font-semibold">${property.price}</p>

      {property.description && (
        <p className="mt-2 text-gray-700">{property.description}</p>
      )}

      <div className="mt-4 flex gap-4 text-yellow-500 items-center">
        <span>⭐ {property.rating}</span>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Address:</p>
        <p>
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Category:</p>
        <div className="flex gap-2 flex-wrap">
          {property.category.map((cat) => (
            <span key={cat} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Offers:</p>
        <p>
          Beds: {property.offers.bed}, Showers: {property.offers.shower}, Occupants: {property.offers.occupants}
        </p>
      </div>

      {property.discount && (
        <p className="mt-2 text-red-500 font-semibold">
          Discount: {property.discount}%
        </p>
      )}
    </div>
  );
}