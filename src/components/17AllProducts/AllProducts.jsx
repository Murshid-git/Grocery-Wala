import React from 'react'
import CategoryPage from '../20CategoryPage/CategoryPage'
import BgAll from '../../assets/image/all-banner.jpg'

const AllProducts = () => {

  


  return (
    <div>
      <CategoryPage title ="All Products" bgImage = {BgAll} categories={['All']}/>
    </div>
  )
}

export default AllProducts
