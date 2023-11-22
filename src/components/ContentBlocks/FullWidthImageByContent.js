import React from "react"
import styled from "styled-components"
import { B1Black, H1Black, H3Black, colors } from "../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FullWidthImageByContent = ({ data }) => {
  console.log("FullWidthImageByContent", data)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <StyledSection
      className={`${data.openingTopPaddingRequired ? "opening-padding " : ""}`}
    >
      <div className="wrapper">
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="content">
          <div className="content__title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="content__bold"
            dangerouslySetInnerHTML={{ __html: data.contentBold }}
          />
          <div
            className="content__para"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  &.opening-padding {
    padding-top: 15rem;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(40%);
    }

    @media (min-width: 1025px) {
      width: calc(35%);
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(60% - 4.5rem);
      max-width: 65rem;
      margin-right: auto;
      margin-left: 4.5rem;
    }

    @media (min-width: 1025px) {
      width: calc(65% - 4.5rem);
    }

    &__title {
      width: 100%;

      h2 {
        ${H1Black};
        margin-top: 0;
        color: ${colors.colorSecondary};
      }
    }

    &__bold {
      width: 100%;

      p {
        ${H3Black};
        color: ${colors.colorSecondary};
      }
    }

    &__para {
      width: 100%;

      p {
        ${B1Black};
      }
    }
  }
`

export default FullWidthImageByContent
