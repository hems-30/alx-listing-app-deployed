import React from "react";

type BookingDetails = {
  propertyName: string;
  price: number;       // subtotal / nightly * nights (simplified for now)
  bookingFee: number;
  totalNights: number;
  startDate: string;
  imageUrl?: string;
  reviewScore?: number;
  reviewCount?: number;
};

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const total = bookingDetails.price + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
        <img
          src={bookingDetails.imageUrl || "https://placehold.co/300x300"}
          alt="Property"
          className="w-32 h-32 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">
            {(bookingDetails.reviewScore ?? 4.76).toFixed(2)} ({bookingDetails.reviewCount ?? 345} reviews)
          </p>
          <p className="text-sm text-gray-500">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${bookingDetails.price}</p>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <p>Grand Total</p>
          <p>${total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;