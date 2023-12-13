import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H1Black, colors } from "../../styles/helpers"

const HeroFour = ({ data }) => {
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
      <div className="hero-title">
        <h1>{data.heroTitle}</h1>
      </div>
      <div className="overlay" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 40rem;

  @media (min-width: 768px) {
    height: 35rem;
  }

  @media (min-width: 1025px) {
    height: 40rem;
  }

  @media (min-width: 1350px) {
    height: 30vw;
    min-height: 43.8rem;
  }

  .overlay {
    background: linear-gradient(to bottom, #fff 0%, transparent 60%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

    @media (min-width: 768px) {
      background: linear-gradient(to bottom, #fff 0%, transparent 30%);
    }
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

export default HeroFour
