import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/shopcontext';
import Title from './Title';
import Productitem from './productitem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]); 

  return (
    <div>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          These products are loved by all our customers, give them a try and you will realize why everyone loves them.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestseller.map((item, index) => (
          <Productitem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image} 
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
