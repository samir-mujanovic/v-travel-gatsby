import React from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import '../../scss/about.scss'

const getAbout = graphql`
query aboutImage {
  aboutImage: file(relativePath: {eq: "about.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const About = () => {
    const { aboutImage } = useStaticQuery(getAbout);

    return (
        <section className="about spacing">
            <div className="container">
                <Title title="Who We Are?" className="spacing-heading" />
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="img-container">
                            <Img fluid={aboutImage.childImageSharp.fluid} alt="about us" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="about-title">
                            <h4 className="mt-5 mt-md-0">We Are Travel Experts</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                            <button className="btn btn-yellow-sm">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
