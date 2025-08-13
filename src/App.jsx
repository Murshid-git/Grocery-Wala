import React from 'react'
import Home from './components/2Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/14Fruits/Fruits'
import Dairy from './components/15Dairy/Dairy'
import SeaFood from './components/16SeaFood/SeaFood'
import AllProducts from './components/17AllProducts/AllProducts'
import Layout from './components/18Layout/Layout'

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children: [
        {
          path:'/',
          element: <Home/>,
        },
        {
          path:'/fruits',
          element: <Fruits/>,
        },
        {
          path:'/dairy',
          element: <Dairy/>,
        },
        {
          path:'/seafood',
          element: <SeaFood/>,
        },
        {
          path:'/allproducts',
          element: <AllProducts/>,
        },
      ]
    },
  ])

  return <RouterProvider router = {router} />

}

export default App
