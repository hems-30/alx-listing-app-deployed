import React from "react";
import Image from "next/image";

export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  imageUrl?: string;
  reviewScore?: number;
  reviewCount?: number;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const total = bookingDetails.price + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={bookingDetails.imageUrl || "/assets/banner.jpg"}
            alt={bookingDetails.propertyName}
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">
            {(bookingDetails.reviewScore ?? 4.76).toFixed(2)} ({bookingDetails.reviewCount ?? 345} reviews)
          </p>
          <p className="text-sm text-gray-500">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Night{bookingDetails.totalNights > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingDetails.bookingFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${bookingDetails.price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <p>Grand Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;