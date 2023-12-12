import React from "react"
import styled from "styled-components"
import { B1White, colors, medWrapper } from "../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColouredContentTopImage = ({ data }) => {
  const imageDisplay = getImage(
    data.topImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.topImage.altText
  return (
    <StyledSection className={`background-${data.backgroundColour} `}>
      <div className="image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="wrapper">
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  margin-top: 10rem;
  padding-top: 10rem;
  padding-bottom: 6rem;

  @media (min-width: 768px) {
    margin-top: 15rem;
    padding-top: 15rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 1025px) {
    margin-top: 25rem;
    padding-top: 15rem;
    padding-bottom: 6rem;
  }

  &.background-green {
    background-color: ${colors.colorSecondary};
  }

  .image {
    position: absolute;
    top: -7.5rem;
    right: 0;
    left: 0;
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      top: -10rem;
    }

    @media (min-width: 1025px) {
      top: -15rem;
    }
  }

  .wrapper {
    ${medWrapper};
  }

  .content {
    width: 100%;
    @media (min-width: 768px) {
      columns: 2;
      column-gap: 4rem;
    }

    p {
      ${B1White};
    }
  }
`

export default ColouredContentTopImage
