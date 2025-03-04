import React from 'react';
import { ShopContext } from '../context/shopcontext';
import { useContext, useState, useEffect } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/cartTotal';
import axios from "axios";

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("id");

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
  useEffect(() => {
    const userId = localStorage.getItem("id");
  
    if (!userId) {
      setError("User not logged in");
      setLoading(false);
      return;
    }
  
    axios.get(`http://localhost:5000/orders/${userId}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setError("Failed loading orders");
        setLoading(false);
      });
  }, []); 
  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;
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
                      className="w-2 h-2 border rounded-full bg-orange-500"
                      role="status"
                      aria-label="Pending"
                    ></span>
                    <p className="text-sm md:text-base">Pending</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600">Your cart is currently empty.</p>
        )}
        <br />
        <CartTotal/>
      </section>
      <br />
      <div className="text-2xl border-t-0">
        <Title text1="PAST" text2="ORDERS" />
      </div>
      <div>
        {
          orders.length === 0 ? (<p>No orders found</p>) 
          :
          (
            <ul className='flex-col'>
              {orders.map((order) => (
                <li key={order._id} className="flex justify-between py-4 border-t border-b">
                  {/* Left Side: Order Details */}
                  <div className="w-1/2">
                    <p>Ordered At: {order.createdAt}</p>
                    <p>Order ID: {order._id}</p>
                    <p>Total: {currency}{order.totalAmount}.00</p>
                    <p>Status: {order.status}</p>
                  </div>

                  {/* Right Side: User Details */}
                  <div className="w-1/2">
                    <p>Name: {order.fname} {order.lname}</p> {/* Assuming user information is available */}
                    <p>Email: {order.email}</p> {/* Assuming user email is available */}
                    <p>Address: {order.address}</p>
                    <p>Phone Number: {order.phone}</p>
                  </div>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default Orders;
