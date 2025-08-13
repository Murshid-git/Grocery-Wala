import React from 'react'
import CategoryPage from '../20CategoryPage/CategoryPage'
import BgDairy from '../../assets/image/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title ="Dairy & Eggs" bgImage = {BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
