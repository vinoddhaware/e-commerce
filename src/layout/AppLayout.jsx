import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div className=' w-full'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
