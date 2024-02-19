import { Button } from '@material-tailwind/react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import React from 'react'
import Layout from './layouts/Layout'
import Products from './pages/Products'
import Basket from './pages/Basket'
import Favourite from './pages/Favourite'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Products />} />
        <Route path='basket' element={<Basket />} />
        <Route path='favourite' element={<Favourite />} />
      </Route>  
    )
  )

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
