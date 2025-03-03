import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/cartTotal';
import { Assets } from '../assets/assets';
import { ShopContext } from '../context/shopcontext';

const Placeorder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Delivery Information */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
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
        />
      </div>

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
              onClick={() => setMethod('paypal')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              role="button"
              tabIndex="0"
              aria-label="Select PayPal as payment method"
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'paypal' ? 'bg-green-400' : ''
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
              onClick={() => setMethod('mastercard')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              role="button"
              tabIndex="0"
              aria-label="Select Mastercard as payment method"
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'mastercard' ? 'bg-green-400' : ''
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
              onClick={() => setMethod('cod')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              role="button"
              tabIndex="0"
              aria-label="Select Cash on Delivery as payment method"
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'cod' ? 'bg-green-400' : ''
                }`}
                aria-hidden="true"
              ></span>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-end mt-8">
          <button
            onClick={() => navigate('/orders')}
            className="bg-black text-white px-16 py-3 text-sm"
            aria-label="Place Order"
            required
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
