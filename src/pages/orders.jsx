import React from 'react';
import { ShopContext } from '../context/shopcontext';
import { useContext, useState, useEffect } from 'react';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        tempData.push({
          _id: key,
          quantity: cartItems[key],
        });
      }
    }
    setOrderData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-16">
      {/* Title Section */}
      <div className="text-2xl">
        <Title text1="MY" text2="ORDER" />
      </div>

      {/* Orders List */}
      <section>
        {orderData.length > 0 ? (
          orderData.map((item, index) => {
            const productData = products.find((product) => String(product._id) === String(item._id));
            if (!productData) {
              console.warn(`Product not found for id: ${item._id}`);
              return null;
            }

            return (
              <div key={index} className="py-4 border-t border-b flex gap-20">
                {/* Product Image & Info */}
                <div className="flex items-start gap-6">
                  <img className="w-16 sm:w-20" src={productData.image} alt={`Image of ${productData.name}`} />
                  <div>
                    <p>{productData.name}</p>
                    <p className='text-gray-700'>Quantity: {item.quantity}</p>
                    <p className='text-gray-900'>Total: {currency}{(productData.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div
                  className="md:w-1/2 flex justify-between"
                  aria-live="polite"
                  aria-label="Order status"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 border rounded-full bg-green-500"
                      role="status"
                      aria-label="Order ready to ship"
                    ></span>
                    <p className="text-sm md:text-base">Ready to Ship</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600">Your cart is currently empty.</p>
        )}
      </section>
      <div className="text-2xl border-t-0">
        <Title text1="PAST" text2="ORDERS" />
      </div>
    </div>
  );
};

export default Orders;
