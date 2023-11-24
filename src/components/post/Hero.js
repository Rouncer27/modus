import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H1Black, colors } from "../../styles/helpers"

const Hero = ({ data }) => {
  console.log("data", data)
  const imageDisplay = getImage(data.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = data.altText

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
      <div className="overlay" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 30rem;

  @media (min-width: 768px) {
    height: 35rem;
  }

  @media (min-width: 1025px) {
    height: 50rem;
  }

  @media (min-width: 1350px) {
    height: 55rem;
  }

  .overlay {
    background: linear-gradient(to bottom, #fff 0%, transparent 30%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .hero-title {
    position: absolute;
    bottom: 0;
    left: 5%;
    padding: 2.5rem 5rem;
    background-color: ${colors.white};
    z-index: 10;

    h1 {
      ${H1Black};
      margin: 0;
      font-weight: normal;
      text-transform: uppercase;
    }
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default Hero
