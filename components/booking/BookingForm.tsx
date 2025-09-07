import React, { ChangeEvent, FormEvent, useState } from "react";
import api from "@/lib/api";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.post("/bookings", formData);
      alert("Booking confirmed!");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      {Object.entries(formData).map(([key, value]) => (
        <input
          key={key}
          type="text"
          name={key}
          value={value}
          placeholder={key.replace(/([A-Z])/g, " $1")}
          onChange={handleChange}
          className="input border p-2 w-full rounded"
        />
      ))}
      <button
        type="submit"
        disabled={loading}
        className="btn bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default BookingForm;