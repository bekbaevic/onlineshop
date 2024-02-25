import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'

const Layout = () => {
  return (
    <div className='overflow-y-hidden max-h-[100vh'>
      <Header />
      <div className='max-h-[calc(100vh-65px)] overflow-y-auto'>
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  )
}

export default Layout