import React from 'react'
import CategoryPage from '../20CategoryPage/CategoryPage'
import BgFruits from '../../assets/image/fruits-Banner.jpg'


const Fruits = () => {
  return (
    <div>
      <CategoryPage title ="Fruits & Veggies" bgImage = {BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits
