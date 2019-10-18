import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Img from 'gatsby-image'
import Title from '../components/Globals/Title'
import Banner from '../components/Banner'
import { FaGlobeAmericas } from 'react-icons/fa'
import Day from '../components/SingleTour/Day'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import '../scss/template.scss'

const Template = ({ data }) => {
    const { name, price, country, days, description: { description }, images, start, journey } = data.tour
    const [mainImage, ...tourImages] = images

    return (
        <Layout>
            <Hero img={mainImage.fluid}>
                <Banner title={name} info='Travel to the any corner of the world, without going around in circles.' />
            </Hero>
            <section className="template spacing">
                <div className="container">
                    <Title title="Description" />
                    <div className="row">
                        {
                            tourImages.map((item, index) => {
                                return (
                                    <div className="col-12 col-md-4 mt-5" key={index}>
                                        <Img fluid={item.fluid} alt="single tour" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-6">
                            <div className="details-info">
                                <h3 className="description-heading">Details</h3>
                                <div className="d-flex justify-content-between price-place">
                                    <p>Starting from <span>${price}</span></p>
                                    <p className="text-capitalize"><FaGlobeAmericas /> {country}</p>
                                </div>
                                <h4>
                                    Starts on {start}
                                </h4>
                                <h4>Duration: {days} days</h4>
                                <p className="desc-p">{description}</p>
                            </div>
                            <AniLink fade to="/tours" className="btn btn-yellow-sm mt-3">Back To Tours</AniLink>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mt-md-0">
                            <div className="schedule">
                                <h2 className="description-heading">Daily Schedule</h2>
                                <div className="journey">
                                    {journey.map((item, index) => {
                                        return (
                                            <Day key={index} day={item.day} info={item.info} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($slug:String!){
  tour:contentfulTour(slug:{eq:$slug}){
    name
    price
    country
    days
    start(formatString: "dddd MMMM Do, YYYY")
    description{
      description
    }
    journey{
      day
      info
    }
    images{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyContentfulFluid
      }
    }
  }
}
`

export default Template
