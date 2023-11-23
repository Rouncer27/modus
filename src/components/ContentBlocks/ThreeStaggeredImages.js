import React from "react"
import styled from "styled-components"
import { medWrapper } from "../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ThreeStaggeredImages = ({ data }) => {
  const imageOneDisplay = getImage(
    data.imageOne.localFile.childImageSharp.gatsbyImageData
  )
  const imageOneAlt = data.imageOne.altText

  const imageTwoDisplay = getImage(
    data.imageTwo.localFile.childImageSharp.gatsbyImageData
  )
  const imageTwoAlt = data.imageTwo.altText

  const imageThreeDisplay = getImage(
    data.imageThree.localFile.childImageSharp.gatsbyImageData
  )
  const imageThreeAlt = data.imageThree.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="image image-1">
          <div className="image__wrapper">
            <GatsbyImage
              image={imageOneDisplay}
              alt={imageOneAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="image image-2">
          <div className="image__wrapper">
            <GatsbyImage
              image={imageTwoDisplay}
              alt={imageTwoAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="image image-3">
          <div className="image__wrapper">
            <GatsbyImage
              image={imageThreeDisplay}
              alt={imageThreeAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  padding: 0 0 4rem;

  .wrapper {
    ${medWrapper};
    margin-top: 0;
    padding-top: 0;
  }

  .image {
    position: relative;
    width: calc(100%);
    height: 40rem;

    @media (min-width: 768px) {
      width: calc(33.333333% - 0.5rem);
      height: 60rem;
    }

    @media (min-width: 1025px) {
      height: 60rem;
    }

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    &.image-1 {
      margin-right: 0.5rem;
    }

    &.image-2 {
      margin-top: 5.5rem;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }

    &.image-3 {
      margin-top: 11rem;
      margin-left: 0.5rem;
    }
  }
`

export default ThreeStaggeredImages
