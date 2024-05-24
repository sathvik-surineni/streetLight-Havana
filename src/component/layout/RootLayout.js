import React from 'react'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
function RootLayout() {
  return (
    <div>
        <Header/>
        {/* Dynamic Content */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout;