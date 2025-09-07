// pages/index.tsx
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/property/PropertyCard";
import api from "@/lib/api";
import { PropertyCardProps } from "@/interfaces";

interface PropertyAPI {
  id: number | string;
  title: string;
  imageUrl: string;
  price: number;
  rating?: number;
}

export default function Home() {
  const [properties, setProperties] = useState<PropertyCardProps["property"][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get<PropertyAPI[]>("/properties");
        const mapped = response.data.map((p) => ({
          id: p.id.toString(),
          name: p.title,
          image: p.imageUrl || "/assets/banner.jpg",
          price: p.price,
          rating: p.rating ?? 4.5,
        }));
        setProperties(mapped);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to fetch properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="p-4 text-center">Loading properties...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;

  return (
    <div className="space-y-8">
      {/* Banner */}
      <Banner />

      {/* Call-to-action Button */}
      <div className="text-center">
        <Button>Explore Now</Button>
      </div>

      {/* Pills Section */}
      <div className="flex flex-wrap justify-center gap-2 px-4">
        <Pill label="Luxury" />
        <Pill label="Budget" />
        <Pill label="Family" />
        <Pill label="Romantic" />
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <Card title="Safe & Secure" description="Your safety is our priority." />
        <Card title="Best Deals" description="Find the best prices worldwide." />
        <Card title="24/7 Support" description="Always here to help you." />
      </div>
    </div>
  );
}