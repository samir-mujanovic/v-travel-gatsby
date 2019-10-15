import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Globals/Navbar'

import './layout.scss'



const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
