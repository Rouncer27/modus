import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import {
  B3Black,
  BigWrapper,
  H2Black,
  H3Black,
  colors,
} from "../../styles/helpers"

const BoxImageLinksContent = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="links">
          {data.boxLinks.map((box, index) => {
            const imageDisplay = getImage(
              box.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = box.image.altText

            return (
              <StyledLinkBox className="box-link" key={index}>
                <Link to={`${box.pageLink.uri}`}>
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
                      <h3>{box.title}</h3>
                    </div>
                    {!!box.content && (
                      <div
                        className="content__paragraph"
                        dangerouslySetInnerHTML={{ __html: box.content }}
                      />
                    )}
                    <div className="content__arrow">
                      <span>&#8594;</span>
                    </div>
                  </div>
                </Link>
              </StyledLinkBox>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${BigWrapper};
  }

  .section-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H3Black};
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    .box-link {
      margin-top: 2.5rem;

      @media (min-width: 1025px) {
        margin-top: 0;
        margin-right: 0.75rem;
        margin-left: 0.75rem;
        width: calc((100% / 3) - 1.5rem);
      }

      &:nth-of-type(3n + 1) {
        @media (min-width: 1025px) {
          margin-right: 1.5rem;
          margin-left: 0;
        }
      }

      &:nth-of-type(3n + 2) {
        @media (min-width: 1025px) {
          margin-top: 15rem;
        }
      }

      &:nth-of-type(3n + 3) {
        @media (min-width: 1025px) {
          margin-right: 0;
          margin-left: 1.5rem;
        }
      }
    }
  }
`

const StyledLinkBox = styled.div`
  position: relative;

  .content {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 70%;
    padding: 2.5rem 2rem 0 2rem;
    background-color: ${colors.white};

    h3 {
      ${H3Black};
      margin: 0;
      margin-bottom: 1.5rem;
      text-align: left;
      text-transform: uppercase;
    }

    p {
      ${B3Black};

      &:last-of-type {
        margin-bottom: 1rem;
      }
    }

    span {
      ${H2Black};
      color: ${colors.colorPrimary};
    }
  }
`

export default BoxImageLinksContent
