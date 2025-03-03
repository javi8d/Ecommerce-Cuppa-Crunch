import React from 'react'
import Hero from '../components/hero'
import BestSeller from '../components/bestseller'
import Guarantees from '../components/guarantees'
import Newsletterbox from '../components/newsletterbox'
import Title from '../components/Title'

const Home = () => {
  return (
    <div>
      <div><Hero /></div>
      <div><BestSeller /></div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'GUARANTEES'} text2={'WE GIVE YOU'} />
      </div>
      <div><Guarantees /></div>
      <div><Newsletterbox /></div>
    </div>
  )
}

export default Home
