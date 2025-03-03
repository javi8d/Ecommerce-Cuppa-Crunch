import React from 'react';
import { Assets } from '../assets/assets';

// Memoized component with displayName set
const Footer = React.memo(() => {
  return (
    <footer className="min-h-[440px]">
      <hr />
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 my-10 mt-20 text-sm sm:min-h-[400px]">
        {/* Logo Section */}
        <div className="flex flex-col gap-3">
          <img 
            loading="lazy" 
            src={Assets.logo} 
            alt="logo" 
            className="mb-5" 
            width="150"  // Explicit width
            height="50"  // Explicit height
          />
          <p className="w-full md:w-2/3 text-gray-600 text-base sm:text-lg">
            Serving happiness in every sip and bite.
          </p>
          <p className="w-full md:w-2/3 text-gray-600 text-base sm:text-lg">
            Explore our range of premium coffees, teas, and delightful snacks.
          </p>
        </div>

        {/* Company Section */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Delivery</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+61 0480490393</li>
            <li>contact@cuppaandcrunch.com.co</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ Cuppa & Crunch - All Right Reserved.</p>
      </div>
    </footer>
  );
});

// Add displayName for debugging purposes
Footer.displayName = 'Footer';

export default Footer;
