import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';




const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false) ;
  const [isScrolled , setIsScrolled] = useState(false) ;

  const toggleMenu = () => {
    setShowMenu(!showMenu) ;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10 )
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)


  }, [])



  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${ isScrolled ? 'shadow-lg' : '' } `}>
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link to ="/" className="text-3xl font-bold">
          Gr<span className="text-green-500 uppercase">o</span>cery<span className="text-orange-500 uppercase">W</span>ala
        </Link>

        {/* Desktop menu */}
        <ul className="md:flex items-center gap-x-8 hidden">
          <li>
            <a href="#" className="font-semibold tracking-wider text-green-500 hover:text-orange-500">Home</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a>
          </li>
        </ul>

        {/* Nav action */}
        <div className='flex items-center gap-x-5'>

          {/* input field  */}
          <div className='md:flex p-1 border-2 border-green-500 rounded-full hidden items-center'>
            <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off' 
            className='flex-1 h-[5vh] px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-green-500 to-orange-400 text-white size-10 flex justify-center items-center rounded-full text-xl '>
              <IoSearchSharp />
            </button>
          </div>

          <a href="#" className='text-zinc-800 text-2xl'>
            <GoHeartFill />
          </a>

          <a href="#" className='text-zinc-800 text-2xl'>
            <HiShoppingBag />
          </a>

          {/* Hamburger  */}
          <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
            { showMenu ? <TbMenu3 /> : <TbMenu2/> } 
          </a>

        </div>

        {/* Mobile menu  */}
      <ul className={`flex flex-col gap-y-6 bg-orange-500/15 backdrop:-blur-xl shadow-xl rounded-xl p-5 items-center md:hidden absolute top-28 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu? 'left-1/2' : ""} `}>
        <li>
          <a href="#" className="font-medium text-lg tracking-wide text-green-500 hover:text-orange-500">Home</a>
        </li>
        <li>
          <a href="#" className="font-medium text-lg tracking-wide text-zinc-800 hover:text-orange-500">About Us</a>
        </li>
        <li>
          <a href="#" className="font-medium text-lg tracking-wide text-zinc-800 hover:text-orange-500">Process</a>
        </li>
        <li>
          <a href="#" className="font-medium text-lg tracking-wide text-zinc-800 hover:text-orange-500">Contact Us</a>
        </li>
        <li className='flex p-1 border-2 border-green-500 rounded-full w-full max-w-[250px]'>
          <input type="text" placeholder='Search...' className='flex-1 h-[5vh] px-3 text-sm focus:outline-none' />
          <button className='bg-gradient-to-b from-green-500 to-orange-300 text-white size-8 flex justify-center items-center rounded-full text-lg'>
            <IoSearchSharp />
          </button>
        </li>
      </ul>




      </nav>
    </header>
  )
}

export default Navbar
