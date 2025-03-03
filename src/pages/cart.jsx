import { useState, useEffect, useContext } from 'react';
import React from 'react';
import { ShopContext } from '../context/shopcontext';
import Title from '../components/Title';
import { Assets } from '../assets/assets';
import CartTotal from '../components/cartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

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
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <main className="border-t pt-14" role="main">
      <header className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </header>
      <section>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {

            const productData = products.find((product) => String(product._id) === String(item._id)); 
            if (!productData) {
              console.warn(`Product not found for id: ${item._id}`);
              return null;
            }

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image}
                    alt={`Image of ${productData.name}`}
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                    </div>
                  </div>
                </div>

                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, Number(e.target.value))
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  min={1}
                  defaultValue={item.quantity}
                  type="number"
                  aria-label={`Quantity for ${productData.name}`}
                />

                <button
                  onClick={() => updateQuantity(item._id, 0)}
                  className="w-4 sm:w-5 cursor-pointer"
                  aria-label={`Remove ${productData.name} from cart`}
                >
                  <img src={Assets.bin_icon} alt="Remove icon" />
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600">Your cart is currently empty.</p>
        )}
      </section>

      <section className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/placeorder')}
              className="bg-black text-white text-sm my-8 px-8 py-3"
              aria-label="Proceed to checkout"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
