import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BigWrapper, H3Black } from "../../styles/helpers"

const ImageByContent = ({ data }) => {
  const imageDisplay = getImage(
    data.leftContent.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.leftContent.image.altText

  const logoDisplay = getImage(
    data.rightContent.iconLogo.localFile.childImageSharp.gatsbyImageData
  )
  const logoAlt = data.rightContent.iconLogo.altText

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content-image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="content-paragraph">
          <div className="content-paragraph__logo">
            <GatsbyImage
              image={logoDisplay}
              alt={logoAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div
            className="content-paragraph__paragraph"
            dangerouslySetInnerHTML={{ __html: data.rightContent.content }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${BigWrapper};
    align-items: center;
    padding-top: 1rem;
  }

  .content-image {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(100% / 2);
      padding-right: 2.5rem;
    }
  }

  .content-paragraph {
    width: 100%;
    margin-top: 4rem;

    @media (min-width: 768px) {
      width: calc(100% / 2);
      max-width: 60.5rem;
      margin-top: 0;
      margin-right: auto;
      margin-left: 0;
      padding: 2rem 2.5rem;
    }

    &__logo {
      width: 15.2rem;
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        margin-bottom: 2.5rem;
      }
    }

    &__paragraph {
      p {
        ${H3Black};

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
`

export default ImageByContent
