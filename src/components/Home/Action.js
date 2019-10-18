import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Modal from './Modal'

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
        <Modal />
        <h2>Travelling Highlights</h2>
      </div>
    </BackgroundImage>
  )
}

export default Action
