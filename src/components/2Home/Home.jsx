import React from 'react'
import Hero from '../3Hero/Hero'
import Category from '../5Category/Category'
import Values from '../7Values/Values'
import Products from '../8Products/Products'
import Discount from '../10Discount/Discount'
import Process from '../11Process/Process'
import Testimonials from '../12Testimonials/Testimonials'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
      <Discount/>
      <Process/>
      <Testimonials/>
    </div>
  )
}

export default Home
