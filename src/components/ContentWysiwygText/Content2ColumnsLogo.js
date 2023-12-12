import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, medWrapper } from "../../styles/helpers"

const Content2ColumnsLogo = ({ data }) => {
  const imageDisplay = getImage(
    data.logo.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.logo.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="logo">
          <div className="logo__wrapper">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="content">
          <div
            className="col col-1"
            dangerouslySetInnerHTML={{ __html: data.contentColumn1 }}
          />
          <div
            className="col col-2"
            dangerouslySetInnerHTML={{ __html: data.contentColumn2 }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  .wrapper {
    ${medWrapper};
  }

  .logo {
    width: 100%;

    &__wrapper {
      max-width: 11.7rem;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    width: 100%;

    .col {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(50% - 3rem);
      }

      &.col-1 {
        @media (min-width: 768px) {
          margin-right: 3rem;
        }
      }

      &.col-2 {
        @media (min-width: 768px) {
          margin-left: 3rem;
        }
      }

      p {
        ${B1Black};
      }
    }
  }
`

export default Content2ColumnsLogo
