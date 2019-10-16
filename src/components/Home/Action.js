import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { FaPlay } from 'react-icons/fa'

import '../../scss/action.scss'

const getAction = graphql`
query{
  defaultBg: file(relativePath: {eq: "action.jpeg"}) {
    childImageSharp{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const Action = () => {

    const { defaultBg } = useStaticQuery(getAction);

    return (
        <BackgroundImage className="call-to-action" fluid={defaultBg.childImageSharp.fluid}>
            <div className="action-title">
                <button className="btn play-button">
                    <FaPlay />
                </button>
                <h2>Travelling Highlights</h2>
            </div>
        </BackgroundImage>
    )
}

export default Action
