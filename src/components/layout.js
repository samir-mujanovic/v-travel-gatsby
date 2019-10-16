import React from 'react'
import PropTypes from 'prop-types'
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
