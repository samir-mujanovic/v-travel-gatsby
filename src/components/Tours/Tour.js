import React from 'react'
import Image from 'gatsby-image'
import { FaGlobeAmericas } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import '../../scss/tour.scss'


const Tour = ({ tour }) => {
    const { name, price, country, days, slug, images } = tour
    let mainImage = images[0].fluid

    return (
        <div className="col-12 col-md-4 ">
            <div className="single-items mt-5">
                <div className="img-container">
                    <Image fluid={mainImage} alt="single tour" />
                    <AniLink fade to={`/tours/${slug}`} className="item-link">Details</AniLink>
                </div>
                <div className="items-info">
                    <h2>{name}</h2>
                    <h3><FaGlobeAmericas />{country}</h3>
                    <div className="details">
                        <h6>${price}</h6>
                        <h6>{days} days</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tour
