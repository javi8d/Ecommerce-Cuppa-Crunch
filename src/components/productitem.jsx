import React, { useContext } from 'react';
import { ShopContext } from '../context/shopcontext';
import { Link } from 'react-router-dom';

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/Product/${id}`}>
      <div className="overflow-hidden max-w-[270px] max-h-[270px]">
        <img
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out"
          src={image} 
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default Productitem;
