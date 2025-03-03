import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopcontext';
import { Assets } from '../assets/assets';
import axios from "axios";

const Article = () => {
  const { productId } = useParams();
  const {currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  const fetchProductData = async () => {
    try {
      const url = `http://localhost:5000/Product/${productId}`;
      const response = await axios.get(url); 
      if (response.data) {
        setProductData(response.data);
      } else {
        console.error("Product not found for productId:", productId);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  if (!productData) {
    return (
      <div className="pt-10 text-center">
        <p className="text-gray-500">Loading product information...</p>
      </div>
    );
  }

  return (
    <div
      className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100"
      aria-live="polite"
    >
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image Section */}
        <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] h-[380] w-full">
          <img
            src={productData.image}
            className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0"
            alt={`Image of ${productData.name}`}
          />
        </div>

        {/* Product Details Section */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2" aria-label={`Product Name: ${productData.name}`}>
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2" aria-label="Product Rating: 5 stars">
            <img src={Assets.star_icon} className="w-3.5" alt="Star rating icon" />
            <img src={Assets.star_icon} className="w-3.5" alt="Star rating icon" />
            <img src={Assets.star_icon} className="w-3.5" alt="Star rating icon" />
            <img src={Assets.star_icon} className="w-3.5" alt="Star rating icon" />
            <img src={Assets.star_icon} className="w-3.5" alt="Star rating icon" />
            <p className="pl-2">(250 reviews)</p>
          </div>
          <p className="mt-5 text-3xl font-large" aria-label={`Price: ${currency}${productData.price}`}>
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <br />
          <button
            onClick={() => addToCart(productData._id)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            aria-label={`Add ${productData.name} to cart`}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available for this product</p>
            <p>Servicing clientele with an immense degree of care and quality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
