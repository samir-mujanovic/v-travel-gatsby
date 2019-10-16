import React from 'react'
import Layout from '../components/Layout'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Hero from '../components/Hero'

import { graphql } from 'gatsby'

const blog = ({ data }) => {
    return (
        <Layout>
            <Hero img={data.blogBg.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
query{
  blogBg: file(relativePath: {eq: "blog.jpeg"}) {
    childImageSharp{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default blog
