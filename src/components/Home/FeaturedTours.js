import React from 'react'
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import Tour from '../Tours/Tour'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Globals/Title'


const getTours = graphql`
query{
  featured: allContentfulTour(filter:{featured:{eq:true}}){
    edges{
      node{
        name
        price
        slug
        country
        contentful_id
        days
        images{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.featured.edges

  return (
    <section className="featured-tours spacing">
      <div className="container">
        <Title title="Featured Tours" />
        <div className="row">
          {
            tours.map(({ node }) => {
              return (
                <Tour key={node.contentful_id} tour={node}>

                </Tour>
              )
            })
          }
        </div>
        <div className="text-center mt-5">
          <Anilink fade to="/tours" className="btn btn-yellow-sm mx-auto">All Tours</Anilink>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTours
