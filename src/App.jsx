import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home'; // Ensure all these components are correctly imported
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/products';
import Cart from './pages/cart';
import Login from './pages/login';
import Placeorder from './pages/placeorder';
import Orders from './pages/orders';
import Footer from './components/footer';
import Searchbar from './components/searchbar';
import Article from './pages/product';
import Signup from './pages/signup'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:productId' element={<Article/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/placeorder' element={<Placeorder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
