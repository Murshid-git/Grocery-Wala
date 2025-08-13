import React from 'react'
import Heading from '../6Heading/Heading'
import FruitsCat from '../../assets/image/fruits-and-veggies.png';
import DairyCat from '../../assets/image/dairy-and-eggs.png';
import MeatCat from '../../assets/image/meat-and-seafood.png';
import { Link } from 'react-router-dom';

const Category = () => {

  const rendercards = category.map( card =>{
    return(
      // Card
      <div className='flex-1 basis-[300px]' key={card.id}>
        {/* Card Image */}
        <div className='w-full min-h-[30vh] relative -mb-10'>
          <img src= { card.image } className='absolute bottom-0 ' />
        </div>

        {/* Card Content  */}
        <div className='bg-zinc-100 pt-17 p-8 rounded-xl ' >
          <h3 className='text-zinc-800 text-3xl  font-bold '>{ card.title }</h3>
          <p className='text-zinc-600  mt-3 mb-9'>{card.description}</p>
          <Link to={ card.path } className='bg-gradient-to-b from-green-300 to-green-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-orange-300 hover:to-orange-500 transition-all duration-300 cursor-pointer'>
            See All</Link>
        </div>
      </div>
    )
      
  } )

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20 '>
        <Heading highlight = "Shop" heading = "by Category" />

        {/* category cards */}
        <div className='flex flex-wrap gap-10 md:mt-15 '>
            {rendercards}
        </div>

      </div>
    </section>
  )
}

export default Category


const category = [
  {
    id : 1,
    title : 'Fruits & Vaggies',
    description : 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.' ,
    image: FruitsCat ,
    path: '/fruits',
  },

  {
    id : 2,
    title : 'Dairy & Eggs',
    description : 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.' ,
    image: DairyCat ,
    path: '/dairy',
  },

  {
    id : 2,
    title : 'Meat & SeaFood',
    description : 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.' ,
    image: MeatCat ,
    path: '/seafood'
  },
]
