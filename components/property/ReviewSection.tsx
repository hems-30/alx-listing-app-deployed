import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Review } from "@/interfaces";

interface ReviewSectionProps {
  propertyId: string;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get(`/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border p-2 rounded">
          <p className="font-semibold">{review.author}</p>
          <p>{review.comment}</p>
          <p className="text-yellow-500">⭐ {review.rating}</p>
        </div>
      ))}
    </div>
  );
}