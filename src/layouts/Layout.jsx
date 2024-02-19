import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import ProductInfo from '../components/ProductInfo'
import { useDispatch, useSelector } from 'react-redux'
import { setProInfo } from '../reducers/product.slice'

const Layout = () => {
  const dispatch = useDispatch()
  const isActive = useSelector(state => state.product.isActive)
  return (
    <div className=''>
      <Header />
      {isActive ?
        <div onClick={() => dispatch(setProInfo())} className='w-[100%] overflow-y-hidden h-screen max-h-screen opacity-60 bg-black fixed top-0 left-0 z-20'></div>
        : ""
      }
      {isActive ? <ProductInfo /> : ''}
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default Layout