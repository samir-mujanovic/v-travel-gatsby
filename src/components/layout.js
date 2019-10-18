import React from 'react'
import Navbar from './Globals/Navbar'
import Footer from './Globals/Footer'

import './layout.scss'




const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
