import React, { Component } from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Tours from '../components/Tours/Tours'

import { graphql } from 'gatsby'

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <Hero img={this.props.data.defaultBg.childImageSharp.fluid}>
          <Banner title="Tours" info='Travel to the any corner of the world, without going around in circles.' />
        </Hero>
        <Tours />
      </Layout>
    )
  }
}

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
