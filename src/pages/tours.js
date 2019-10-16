import React, { Component } from "react"
import Layout from '../components/Layout'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Hero from '../components/Hero'
import Tours from '../components/Tours/Tours'

import { graphql } from 'gatsby'

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <Hero img={this.props.data.defaultBg.childImageSharp.fluid} />
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
