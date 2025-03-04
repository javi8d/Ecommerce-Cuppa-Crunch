import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/cartTotal';
import { Assets } from '../assets/assets';
import { ShopContext } from '../context/shopcontext';
import axios from 'axios';

const Placeorder = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipcode, setZipcode] = useState();
  const [phone, setPhone] = useState();
  const [method, setMethod] = useState('Mastercard');
  const { navigate, getCartAmount, cartItems } = useContext(ShopContext);
  const cartAmount = getCartAmount();

  const placeOrder = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate if all fields are filled
    if (!fname || !lname || !email || !address || !city || !state || !zipcode || !phone) {
      alert('Please fill in all the fields');
      return;
    }

    try {
      const orderData = {
        userId: localStorage.getItem("id"),
        products: Object.entries(cartItems).map(([productId, quantity]) => ({ productId, quantity })),
        totalAmount: cartAmount + 10,
        status: 'pending',
        fname,
        lname,
        email,
        address,
        city,
        state,
        zipcode,
        phone,
        method
      };

      console.log("Sending order data: ", orderData); 
      const response = await axios.post('http://localhost:5000/orders', orderData);
      console.log("Order Created: ", response.data);
      navigate('/orders');
    } catch (err) {
      console.error('Error creating order: ', err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Delivery Information */}
      <form onSubmit={placeOrder} className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <label className="sr-only" htmlFor="first-name">
            First Name
          </label>
          <input
            id="first-name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
            required
            onChange={(e) => setFname(e.target.value)}
          />
          <label className="sr-only" htmlFor="last-name">
            Last Name
          </label>
          <input
            id="last-name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <label className="sr-only" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="sr-only" htmlFor="street">
          Street
        </label>
        <input
          id="street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="flex gap-3">
          <label className="sr-only" htmlFor="city">
            City
          </label>
          <input
            id="city"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <label className="sr-only" htmlFor="state">
            State
          </label>
          <input
            id="state"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
            required
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <label className="sr-only" htmlFor="zipcode">
            Zipcode
          </label>
          <input
            id="zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
            required
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <label className="sr-only" htmlFor="phone-number">
          Phone Number
        </label>
        <input
          id="phone-number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone Number"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* Submit Button */}
        <div className="w-full text-end mt-8">
          <button
            type="submit"
            className="bg-black text-white px-16 py-3 text-sm"
            aria-label="Place Order"
          >
            PLACE ORDER
          </button>
        </div>
      </form>

      {/* Payment and Order Summary */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* PayPal Option */}
            <div
              onClick={() => setMethod('Paypal')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              role="button"
              tabIndex="0"
              aria-label="Select PayPal as payment method"
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'Paypal' ? 'bg-green-400' : ''
                }`}
                aria-hidden="true"
              ></span>
              <img
                className="h-8 mx-7"
                src={Assets.paypal_icon}
                alt="PayPal Icon"
              />
            </div>

            {/* Mastercard Option */}
            <div
              onClick={() => setMethod('Mastercard')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              role="button"
              tabIndex="0"
              aria-label="Select Mastercard as payment method"
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'Mastercard' ? 'bg-green-400' : ''
                }`}
                aria-hidden="true"
              ></span>
              <img
                className="h-6 mx-5"
                src={Assets.mastercard_icon}
                alt="Mastercard Icon"
              />
            </div>

            {/* Cash on Delivery Option */}
            <div
              onClick={() => setMethod('Cash on Delivery')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              role="button"
              tabIndex="0"
              aria-label="Select Cash on Delivery as payment method"
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'Cash on Delivery' ? 'bg-green-400' : ''
                }`}
                aria-hidden="true"
              ></span>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
