import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Globals/Title'
import { useStaticQuery, graphql } from 'gatsby'

import '../../scss/blog.scss'

const getPosts = graphql`
query{
  posts:allContentfulPost(sort: {fields: published, order: DESC}) {
    edges {
      node {
        published(formatString: "MMMM Do, YYYY")
        createdAt(formatString: "LLLL")
        title
        slug
        id: contentful_id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)

    return (
        <section className="blog spacing">
            <div className="container">
                <Title title="Our Blogs" />
                <div className="row">
                    {
                        posts.edges.map(({ node }) => {
                            return (
                                <BlogCard key={node.id} blog={node} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogList
