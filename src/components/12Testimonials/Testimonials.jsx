import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from '../6Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import customer1 from '../../assets/image/customer1.jpg'
import customer2 from '../../assets/image/customer2.jpg'
import customer3 from '../../assets/image/customer3.jpg'
import customer4 from '../../assets/image/customer4.jpg'
import customer5 from '../../assets/image/customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';



const Testimonials = () => {
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20 ' >
            <Heading highlight = "Customers" heading = "Saying" />

            <div className='flex justify-end mt-5 py-5 gap-x-3'>
              <button className='custom-prev text-2xl text-zinc-800 rounded-lg size-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b from-green-200 to-green-500 hover:text-white cursor-pointer'>
                <IoIosArrowBack />
              </button>
              <button className='custom-next text-2xl text-zinc-800 rounded-lg size-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b from-green-200 to-green-500 hover:text-white cursor-pointer'>
                <IoIosArrowForward />
              </button>
            </div>
            <Swiper navigation={{
              nextEl:".custom-next",
              prevEl:'.custom-prev'
            }} 
            loop={true}
            breakpoints={{
              640:{slidesPerView: 1, spaceBetween: 20},
              768:{slidesPerView: 2, spaceBetween: 20},
              1024:{slidesPerView: 3, spaceBetween: 20},

            }}
            modules={[Navigation]} className="mySwiper">
              {
                review.map(item=>{
                  return(
                      <SwiperSlide className='bg-zinc-100 rounded-xl p-8 '>
                      <div className='flex gap-5 items-center'>
                        <div className='size-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                          <img src={ item.image } className='size-full ' />
                        </div>
                        <div>
                          <h5 className='text-xl font-bold '> {item.name} </h5>
                          <p className='text-zinc-600'>{ item.profession }</p>
                          <span className='flex text-yellow-400 mt-3 text-xl gap-1'>
                            {Array.from({length: item.rating}, (_, index)=>(
                              <FaStar/>
                            ))}
                          </span>
                        </div>
                      </div>

                      <div className='mt-10 min-h-[15vh] '>
                        <p className='text-zinc-600'>{ item.para }</p>
                      </div>

                    </SwiperSlide>
                  )
                })
              }
            </Swiper>

            

        </div>
    </section>
  )
}

export default Testimonials


const review = [
  {
    id : 1,
    name: 'Kethy Johnson',
    profession: 'Student',
    rating: '4',
    para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
    image: customer1 ,
  },
  {
    id : 2,
    name: 'Murshid',
    profession: 'software Developement Engineer',
    rating: '5',
    para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
    image:customer2 ,
  },
  {
    id : 3,
    name: 'Alice',
    profession: 'Physicist',
    rating: '3',
    para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my family weekly groceries—always fresh, affordable, and reliable.',
    image:customer3 ,
  },
  {
    id : 4,
    name: 'Zain',
    profession: 'Doctor',
    rating: '5',
    para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
    image:customer4 ,
  },
  {
    id : 5,
    name: 'Candis',
    profession: 'Nutritionist',
    rating: '4',
    para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
    image:customer5 ,
  },
]
