import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import '../scss/single-blog.scss'

const Blog = ({ data }) => {
    const { title, published, text: { json } } = data.post
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                return (
                    <div className="rich">
                        <h3>This is awesome image</h3>
                        <img className="img-fluid" src={node.data.target.fields.file['en-US'].url} alt="blog-img" />
                        <p>Images provided by <strong>John Doe</strong></p>
                    </div>
                )
            }
        }
    }

    return (
        <section className="single-blog spacing">
            <div className="container">
                <div className="container">
                    <div className="col-12">
                        <h1 className="text-capitalize description-heading">{title}</h1>
                        <h4>Published at : {published}</h4>
                        <div className="posts">
                            {documentToReactComponents(json, options)}
                        </div>
                        <AniLink fade to="/blog" className="btn btn-yellow-sm">Back To Posts</AniLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const query = graphql`
query getPost($slug: String!) {
  post: contentfulPost(slug: {eq: $slug}) {
    title
    published(formatString: "MMMM Do, YYYY")
    text {
      json
    }
  }
}
`

export default Blog
