import React from "react";

const BookingForm: React.FC = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="border p-2 w-full mt-2 rounded" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label htmlFor="cardNumber">Card Number</label>
        <input id="cardNumber" type="text" className="border p-2 w-full mt-2 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="exp">Expiration Date</label>
        <input id="exp" type="text" placeholder="MM/YY" className="border p-2 w-full mt-2 rounded" />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label htmlFor="street">Street Address</label>
        <input id="street" type="text" className="border p-2 w-full mt-2 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="city">City</label>
          <input id="city" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input id="state" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="zip">Zip Code</label>
          <input id="zip" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input id="country" type="text" className="border p-2 w-full mt-2 rounded" />
        </div>
      </div>

      {/* Submit Button */}
      <button type="button" className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm &amp; Pay
      </button>
    </form>
  </div>
);

export default BookingForm;