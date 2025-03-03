import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopcontext';
import { Assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import axios from "axios";

const Products = () => {
  const {search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value));
    } else {
      setCategory(prev => [...prev, value]);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products', {
        params: {
          search: showSearch ? search : '',  
          category: category.length > 0 ? category : []  
        }
      });
      setProducts(response.data); 
    } catch (err) {
      console.error("Error fetching products:", err); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, showSearch, category]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          aria-expanded={showFilter}
          aria-controls="filter-section"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-180' : ''}`}
            src={Assets.dropdown_icon}
            alt="Toggle filters"
          />
        </button>
        <div className={`border border-gray-300 pl-5 py-3 nt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <div className="flex gap-2 items-center">
              <input
                id="category-tea"
                className="w-3"
                type="checkbox"
                value="Premium Tea"
                onChange={toggleCategory}
              />
              <label htmlFor="category-tea" className="text-sm">
                Tea
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="category-coffee"
                className="w-3"
                type="checkbox"
                value="Organic Coffee"
                onChange={toggleCategory}
              />
              <label htmlFor="category-coffee" className="text-sm">
                Coffee
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="category-biscuits"
                className="w-3"
                type="checkbox"
                value="Fancy cookies"
                onChange={toggleCategory}
              />
              <label htmlFor="category-biscuits" className="text-sm">
                Biscuits
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {products.map((item) => (
          <Link key={item._id} className="border p-4 rounded-lg shadow-md" to={`/Product/${item._id}`}>
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md hover:scale-110 transition ease-in-out " />
            <br />
            <h3 className="mt-2 text-md font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-700">${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
