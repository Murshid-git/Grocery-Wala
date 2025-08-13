import React from 'react'
import Navbar from '../1Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../13Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
