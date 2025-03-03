import React from 'react'

const Newsletterbox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return (
    <div className='text-center py-20'>
      <p className='text-2xl font-large text-gray-900 font-bold'>Subscribe now & get 20% off</p>
      <p className='text-gray-600 mt-3'>☕ Love coffee, tea, and biscuits? Subscribe to our newsletter for exclusive offers, new arrivals, and tasty tips! 🍪</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input required className='w-full sm:flex-1 outline-none' type="email" id="email" name='email' placeholder="Enter your email here" />
        <button type="submit" className='bg-black text-white text-xs px-10 py-4' >SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Newsletterbox
