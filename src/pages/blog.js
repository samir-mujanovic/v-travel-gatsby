import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import BlogList from '../components/Blog/BlogList'

import { graphql } from 'gatsby'

const blog = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.blogBg.childImageSharp.fluid}>
        <Banner title="Blogs" info='Travel to the any corner of the world, without going around in circles.' />
      </Hero>
      <BlogList />
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
