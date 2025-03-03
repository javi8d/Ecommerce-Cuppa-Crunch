import React from 'react';
import { Assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row h-[880px] border border-gray-400 sm:border-0 overflow-hidden'>
      {/* Text Section */}
      <div className='w-full h-[440px] max-w-[1200px] sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4 sm:px-6'>
        <div className='text-[#414141] text-center sm:text-left'>
          <h1 className='prata-regular text-3xl sm:py-3 sm:px-3 lg:text-5xl leading-relaxed break-words'>
            Everyone's Favourites
          </h1>
          <div className='flex items-center gap-2 justify-center sm:justify-start'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full sm:w-1/2 h-[440px] flex items-center justify-center'>
        <img 
          src="/cookies3.webp" 
          className='w-full h-full object-cover' 
          alt="Cookies" 
          rel='preload'
        />
      </div>
    </div>
  );
};


export default Hero;

