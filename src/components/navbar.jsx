import React, { useContext, useState, useEffect } from 'react';
import { Assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/shopcontext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [dropOn, setDropOn] = useState(false);

  // Handle mobile menu visibility toggle
  const handleMenuToggle = () => setVisible(prevState => !prevState);

  const toggleDropdown = () => {
    setDropOn(prev => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropOn(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div aria-label="Navigation Bar" className="flex items-center justify-between py-5 font-medium">
      {/* Logo Section */}
      <Link to="/" aria-label="Go to Homepage">
        <img
          src={Assets.full_logo}
          className="mb-5"
          alt="Logo"
          width="160"  // Set width
          height="40"  // Set height
        />
        <span className="hidden">Go to Homepage</span>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="flex flex-col items-center gap-1">
            <p>PRODUCTS</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT US</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT US</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
      </ul>

      {/* Navbar Icons */}
      <div className="flex items-center gap-4">
        <button onClick={() => setShowSearch(true)} className="w-7 h-7 cursor-pointer">
          <img
            loading="lazy"
            src={Assets.search_icon}
            alt="Search button"
            className="w-full h-full object-contain"
            width="28"
            height="28"
          />
        </button>

        {/* Profile Dropdown */}
        <div className="relative dropdown">
          <button className="cursor-pointer" onClick={toggleDropdown}>
            <img
              src={Assets.profile_icon}
              className="w-7 h-7"
              alt="Profile icon"
              width="28"
              height="28"
            />
          </button>

          {dropOn && (
            <div className="absolute left-0 top-full z-10 bg-white shadow-lg">
              <a className="block py-2 px-4 text-black hover:bg-gray-200" href="/login">Sign In</a>
              <a className="block py-2 px-4 text-black hover:bg-gray-200" href="/orders">Orders</a>
              <a className="block py-2 px-4 text-black hover:bg-gray-200" href="#">Log Out</a>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative block" tabIndex="0" aria-label={`View cart with ${getCartCount()} items`}>
          <img
            loading="lazy"
            src={Assets.cart_icon}
            className="w-6 h-6 cursor-pointer"
            alt="Shopping cart icon"
            width="24"
            height="24"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={handleMenuToggle} className="w-5 h-5 cursor-pointer sm:hidden" aria-label="Open mobile menu">
          <img
            loading="lazy"
            src={Assets.menu_icon}
            alt="Mobile menu icon"
            className="w-full h-full object-contain"
            width="20"
            height="20"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all">
          <div className="flex flex-col text-gray-600">
            <button onClick={handleMenuToggle} className="flex items-center gap-4 p-3 cursor-pointer">
              <img
                src={Assets.dropdown_icon}
                className="h-4 rotate-90"
                alt="Back button"
                width="16"
                height="16"
              />
              <p>Back</p>
            </button>
            <NavLink onClick={handleMenuToggle} to="/" className="py-2 pl-6 border">
              <p>HOME</p>
            </NavLink>
            <NavLink onClick={handleMenuToggle} to="/products" className="py-2 pl-6 border">
              <p>PRODUCTS</p>
            </NavLink>
            <NavLink onClick={handleMenuToggle} to="/about" className="py-2 pl-6 border">
              <p>ABOUT US</p>
            </NavLink>
            <NavLink onClick={handleMenuToggle} to="/contact" className="py-2 pl-6 border">
              <p>CONTACT US</p>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
