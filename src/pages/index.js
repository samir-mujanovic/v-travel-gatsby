import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Action from '../components/Home/Action'
import FeaturedTours from '../components/Home/FeaturedTours'

import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <Hero home="true" img={data.defaultBg.childImageSharp.fluid}>
      <Banner title="Enjoy Vacation With" logo=" V-Travel" info="Travel to the any corner of the world, without going around in circles.">
        <AniLink fade to="/tours" className="btn btn-yellow">Explore tours</AniLink>
      </Banner>
      <div className="mouse"></div>
    </Hero>
    <About></About>
    <Services />
    <Action />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
query{
  defaultBg: file(relativePath: {eq: "background-hero.jpeg"}) {
    childImageSharp{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
