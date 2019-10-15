import React from 'react'

const Banner = ({ title, logo, info, children }) => {
    return (
        <div className="banner">
            <h1>{title}<span>{logo}</span></h1>
            <p>{info}</p>
            {children}
        </div>
    )
}

export default Banner
