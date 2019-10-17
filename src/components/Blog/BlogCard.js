import React from 'react'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import '../../scss/blog-card.scss'

const BlogCard = ({ blog }) => {
    const { slug, title, image, published } = blog
    return (
        <div className="col-12 col-md-4">
            <div className="blog-items mt-5">
                <div className="img-container">
                    <Image fluid={image.fluid} alt="single blog" />
                    <AniLink fade to={`/blog/${slug}`} className="item-link">Read More</AniLink>
                    <h6>{published}</h6>
                </div>
                <div className="items-info">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
