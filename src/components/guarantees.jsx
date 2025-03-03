import React from 'react';
import { Assets } from '../assets/assets';

const Guarantees = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 text-center py-20 sm:py-4 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img 
          src={Assets.world_icon} 
          className="w-12 m-auto mb-5" 
          alt="Australian Based Company" 
          width="48" 
          height="48"
        />
        <p className="font-semibold">Australian Based Company</p>
        <p className="text-gray-400">Operated and Located in Sydney, deliveries in whole Australia</p>
      </div>
      <div>
        <img 
          src={Assets.secure_icon} 
          className="w-12 m-auto mb-5" 
          alt="Fast and Secure Payment" 
          width="48" 
          height="48"
        />
        <p className="font-semibold">Fast and Secure Payment</p>
        <p className="text-gray-400">Easy to use checkout process. 24/7 customer support</p>
      </div>
      <div>
        <img 
          src={Assets.clock_icon} 
          className="w-12 m-auto mb-5" 
          alt="Same Day Dispatch" 
          width="48" 
          height="48"
        />
        <p className="font-semibold">Same Day Dispatch</p>
        <p className="text-gray-400">Freshly roasted to order. Real-time shipment tracking provided</p>
      </div>
      <div>
        <img 
          src={Assets.quality_icon} 
          className="w-12 m-auto mb-5" 
          alt="Quality Assured" 
          width="48" 
          height="48"
        />
        <p className="font-semibold">Quality Assured</p>
        <p className="text-gray-400">All of our products are verified to be one of the best in the market</p>
      </div>
    </div>
  );
};

export default Guarantees;
