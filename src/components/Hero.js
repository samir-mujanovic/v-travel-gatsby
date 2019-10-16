import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

import '../scss/hero.scss'

const Hero = ({ img, className, children, home }) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            {children}
        </BackgroundImage>
    )
}

export default styled(Hero)`
    width: 100%;
    min-height:${props => props.home ? '100vh' : '50vh'};
    background: linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7));
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1!important;
    position: relative;
`
