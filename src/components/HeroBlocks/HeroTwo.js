import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroTwo = ({ data }) => {
  const imageDisplay = getImage(
    data.heroImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.heroImage.altText
  return (
    <StyledSection>
      <div className="hero-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 25rem;

  @media (min-width: 768px) {
    height: 45rem;
  }

  @media (min-width: 1025px) {
    height: 52.5rem;
  }

  @media (min-width: 1350px) {
    height: 40vw;
    min-height: 52.5rem;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default HeroTwo
